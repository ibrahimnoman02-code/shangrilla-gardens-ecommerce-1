import os
import shutil
import glob

brain_dir = r"C:\Users\Pc\.gemini\antigravity-ide\brain\0d4603c9-53cf-454a-98db-23d1a74ed7c0"
assets_dir = r"assets\images"
os.makedirs(assets_dir, exist_ok=True)

image_mappings = {
    "artisan_bbq_pizza*.jpg": "artisan-bbq-pizza.jpg",
    "chicken_biryani_platter*.jpg": "royal-chicken-biryani.jpg",
    "dhaka_fried_fish*.jpg": "dhaka-fried-fish.jpg",
    "crispy_zinger_burger*.jpg": "crispy-zinger-burger.jpg",
    "chicken_chow_mein*.jpg": "chicken-chow-mein.jpg",
    "traditional_mutton_karahi*.jpg": "traditional-mutton-karahi.jpg",
    "kulfa_falooda_dessert*.jpg": "kulfa-falooda-dessert.jpg",
    "molten_lava_cake*.jpg": "molten-lava-cake.jpg",
    "cappuccino_coffee_cup*.jpg": "cappuccino-coffee.jpg",
    "punjabi_lassi_jug*.jpg": "punjabi-lassi-jug.jpg",
    "golden_corn_soup*.jpg": "golden-corn-soup.jpg",
    "crispy_wings_fries*.jpg": "crispy-wings-fries.jpg"
}

for pattern, dest_name in image_mappings.items():
    matches = glob.glob(os.path.join(brain_dir, pattern))
    if matches:
        latest = max(matches, key=os.path.getmtime)
        dest_path = os.path.join(assets_dir, dest_name)
        shutil.copy2(latest, dest_path)
        print(f"Copied {os.path.basename(latest)} -> {dest_path} ({os.path.getsize(dest_path)} bytes)")
    else:
        print(f"Warning: No match found for {pattern}")
