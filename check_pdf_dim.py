import pypdfium2 as pdfium

pdf = pdfium.PdfDocument(r'C:\Users\Pc\.gemini\antigravity-ide\brain\0d4603c9-53cf-454a-98db-23d1a74ed7c0\.user_uploaded\media_1792400788929.pdf')
print("Page count:", len(pdf))
page = pdf[0]
width, height = page.get_size()
print(f"Page dimensions: {width} x {height} points")
