import pypdfium2 as pdfium
from rapidocr_onnxruntime import RapidOCR
from PIL import Image
import numpy as np
import json
import os

pdf_path = r'C:\Users\Pc\.gemini\antigravity-ide\brain\0d4603c9-53cf-454a-98db-23d1a74ed7c0\.user_uploaded\media_1792400788929.pdf'
pdf = pdfium.PdfDocument(pdf_path)
page = pdf[0]
width_pt, height_pt = page.get_size()
print(f"PDF size: {width_pt} x {height_pt} points")

ocr = RapidOCR()

slice_height_pt = 1000
num_slices = int(np.ceil(height_pt / slice_height_pt))
scale = 2.0  # Crisp resolution for OCR

all_results = []
os.makedirs('menu_slices', exist_ok=True)

for i in range(num_slices):
    top_pt = i * slice_height_pt
    bottom_pt = min((i + 1) * slice_height_pt, height_pt)
    
    crop_left = 0
    crop_right = 0
    crop_top = top_pt
    crop_bottom = height_pt - bottom_pt
    
    bitmap = page.render(
        scale=scale,
        crop=(crop_left, crop_bottom, crop_right, crop_top)
    )
    pil_image = bitmap.to_pil()
    slice_path = f"menu_slices/slice_{i+1:02d}.png"
    pil_image.save(slice_path)
    
    img_np = np.array(pil_image)
    print(f"Slice {i+1}/{num_slices} saved ({pil_image.size}), running OCR...")
    
    result, elapse = ocr(img_np)
    if result:
        for item in result:
            box, text, score = item
            box_np = np.array(box)
            local_y = box_np[:, 1].mean()
            global_y_pt = top_pt + (local_y / scale)
            all_results.append({
                'slice': i + 1,
                'text': text,
                'score': float(score),
                'global_y': float(global_y_pt),
                'box': [[float(p) for p in pt] for pt in box]
            })

all_results.sort(key=lambda x: x['global_y'])

with open('extracted_full_menu.json', 'w', encoding='utf-8') as f:
    json.dump(all_results, f, ensure_ascii=False, indent=2)

with open('extracted_full_menu.txt', 'w', encoding='utf-8') as f:
    for item in all_results:
        f.write(f"{item['text']}\n")

print(f"DONE! Total text items extracted: {len(all_results)}")
