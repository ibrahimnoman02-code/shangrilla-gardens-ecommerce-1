import json

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSON
import re
m = re.search(r"const\s+RESTAURANT_DATA\s*=\s*(\{[\s\S]*?\n\};)", content)
js_text = m.group(1).rstrip(";").strip()
clean_js = re.sub(r"//[^\n]*", "", js_text)
clean_json = re.sub(r'([{,]\s*)([a-zA-Z0-9_]+)\s*:', r'\1"\2":', clean_js)
clean_json = re.sub(r',\s*([\]}])', r'\1', clean_json)
data = json.loads(clean_json)

def get_matching_image(item):
    item_id = item['id'].lower()
    cat = item.get('category', '').lower()
    title = item.get('title', '').lower()

    # 1. Pizzas & Pizza Deal
    if 'pizza' in cat or 'pizza' in item_id or 'pizza' in title:
        return "assets/images/artisan-bbq-pizza.jpg"

    # 2. Rice & Biryani
    if 'rice' in cat or 'biryani' in item_id or 'rice' in item_id:
        return "assets/images/royal-chicken-biryani.jpg"

    # 3. Fish & Seafood
    if 'seafood' in cat or 'fish' in item_id or 'fish' in title:
        return "assets/images/dhaka-fried-fish.jpg"

    # 4. Burgers & Sandwiches
    if any(k in item_id for k in ['burger', 'sandwich', 'club']):
        return "assets/images/crispy-zinger-burger.jpg"

    # 5. Wings & Fries
    if any(k in item_id for k in ['wings', 'fries', 'french-fries']):
        return "assets/images/crispy-wings-fries.jpg"

    # 6. Soups
    if 'corn-soup' in item_id or 'corn' in title:
        return "assets/images/golden-corn-soup.jpg"
    if 'soup' in item_id or 'sour-soup' in item_id or 'lemongrass' in item_id:
        return "assets/images/hot-and-sour-soup.jpg"

    # 7. Chinese & Noodles
    if 'chinese' in cat or 'chow-mein' in item_id or 'noodles' in item_id or 'chilli-dry' in item_id or 'manchurian' in item_id or 'sweet-and-sour' in item_id or 'oyster' in item_id or 'almond' in item_id or 'cashew' in item_id or 'drumsticks' in item_id:
        return "assets/images/chicken-chow-mein.jpg"

    # 8. Mutton dishes & Mutton Karahi / Steam Roast
    if 'mutton' in item_id or 'brain-masala' in item_id or 's2-mutton' in item_id:
        # Note: Mutton tikka / chops / seekh go to BBQ, curries to mutton karahi
        if any(bbq_k in item_id for bbq_k in ['tikka', 'chops', 'seekh']):
            return "assets/images/bbq-malai-boti-platter.jpg"
        return "assets/images/traditional-mutton-karahi.jpg"

    # 9. Chicken Handi & Karahi & Curries
    if 'handi' in cat or any(k in item_id for k in ['handi', 'karahi', 'jalfrezi', 'taka-tak', 'butter-chicken', 'bartha', 'achari', 'daal', 'vegetable']):
        return "assets/images/handi-chicken-hari-mirch.jpg"

    # 10. Steaks
    if 'steaks' in cat:
        if 'truffle' in item_id or 'peppercorn' in item_id or 'tuscan' in item_id:
            return "assets/images/truffle-mushroom-steak-poster.jpg"
        return "assets/images/fire-glazed-mexican-steak.jpg"

    # 11. BBQ & Grills
    if 'bbq' in cat or 'boti' in item_id or 'tikka' in item_id or 'kebab' in item_id or 'kabab' in item_id or 'taouk' in item_id or 's3-bbq' in item_id:
        return "assets/images/bbq-malai-boti-platter.jpg"

    # 12. Naans & Tandoor
    if 'naan' in cat or 'naans' in cat or 'roti' in item_id or 'kulcha' in item_id or 'paratha' in item_id or 'bread' in item_id:
        return "assets/images/special-artisan-nans.jpg"

    # 13. Hot Brews & Coffee & Tea
    if 'hotbrews' in cat or any(k in item_id for k in ['tea', 'cappuccino', 'latte', 'coffee', 'chocolate-hot', 'hot-chocolate']):
        return "assets/images/cappuccino-coffee.jpg"

    # 14. Lassi
    if 'lassi' in item_id:
        return "assets/images/punjabi-lassi-jug.jpg"

    # 15. Shakes & Mocktails & Beverages
    if 'beverages' in cat or any(k in item_id for k in ['colada', 'lemonade', 'cooler', 'drink', 'water', 'juice', 'shake']):
        return "assets/images/signature-drinks.jpg"

    # 16. Cakes, Brownies & Bakery
    if any(k in item_id for k in ['lava', 'brownie', 'pastries', 'cupcake', 'cake', 'pop', 'dessert-platter']):
        return "assets/images/molten-lava-cake.jpg"

    # 17. Desi Sweets & Falooda & Ice Cream
    if 'desserts' in cat or any(k in item_id for k in ['falooda', 'halwa', 'kheer', 'custard', 'shireen', 'jamun', 'ice-cream']):
        return "assets/images/kulfa-falooda-dessert.jpg"

    # Fallback
    return item.get('image', 'assets/images/handi-chicken-hari-mirch.jpg')

# Update all items
count_updated = 0
image_distribution = {}
for item in data['items']:
    new_img = get_matching_image(item)
    old_img = item.get('image')
    item['image'] = new_img
    item['gallery'] = [new_img]
    image_distribution[new_img] = image_distribution.get(new_img, 0) + 1
    if new_img != old_img:
        count_updated += 1

print(f"Updated {count_updated} items with new specific matching images!")
print("\nImage distribution across full menu:")
for img, cnt in sorted(image_distribution.items(), key=lambda x: -x[1]):
    print(f"  {img}: {cnt} items")

# Write updated RESTAURANT_DATA back to js/data.js
js_content = f"// Menu & Restaurant Data for Shangrilla Garden & BBQ\nconst RESTAURANT_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n"
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("\nSuccessfully saved js/data.js!")
