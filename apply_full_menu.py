import json
import re

with open('generated_items.json', 'r', encoding='utf-8') as f:
    cat_items = json.load(f)

categories = cat_items['categories']
items = cat_items['items']

# Reviews
reviews = [
    {
        "name": "Tariq Mansoor",
        "rating": 5,
        "date": "Yesterday",
        "comment": "The Truffle Mushroom Chicken Steak is truly in a league of its own! Sizzling hot, buttery, and the mushroom sauce was divine. The packaging kept it piping hot for home delivery.",
        "dish": "Truffle Mushroom Chicken Steak"
    },
    {
        "name": "Ayesha Malik",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Handi Chicken Hari Mirch with the hot Roghani naans reminds me of royal dawat feasts. Creamy with just the right kick of green chili.",
        "dish": "Handi Chicken Hari Mirch"
    },
    {
        "name": "Hamza Farooq",
        "rating": 5,
        "date": "Just now",
        "comment": "The Classic Hot & Sour Soup is unmatched! Truly served piping hot for these cold evenings, perfectly spiced with shredded chicken and egg ribbons.",
        "dish": "Classic Hot & Sour Soup"
    },
    {
        "name": "Danyal Shah",
        "rating": 5,
        "date": "1 week ago",
        "comment": "Best steak & BBQ place in town! Fast delivery, easy website ordering, and the Special Nans platter is crispy and fresh.",
        "dish": "Special Artisan Naans Platter"
    },
    {
        "name": "Bilal Chaudhry",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Ordered S2 Mutton Deal for 5 for a family dawat. Incredible value, huge portions, the mutton karahi and malai boti were falling off the bone!",
        "dish": "S2 (Mutton Deal for 5)"
    }
]

# Coupons
coupons = [
    { "code": "SHANGRILLA10", "type": "percent", "value": 10, "minOrder": 4275, "desc": "10% off your entire order" },
    { "code": "ROYALSTEAK", "type": "fixed", "value": 1425, "minOrder": 7125, "desc": "Rs. 1,425 off premium sizzlers" },
    { "code": "FREESHIP", "type": "shipping", "value": 0, "minOrder": 5700, "desc": "Free priority delivery" }
]

restaurant_data = {
    "name": "Shangrilla Garden & BBQ",
    "slogan": "A little sophistication, served hot",
    "tagline": "Royal Flavors, Garden Fresh Dining",
    "deliveryPhone": "061 454880",
    "reservationPhone": "0307 8882936",
    "phone": "Home Delivery: 061-454880 | Reservation & Marquee: 0307-8882936",
    "email": "orders@shangrillagardens.com",
    "address": "Club Road, Shangrilla Garden & BBQ",
    "openingHours": "Mon - Sun: 12:00 PM - 01:00 AM",
    # All amounts are in Pakistani Rupees (PKR)
    "deliveryFee": 713,
    "freeDeliveryThreshold": 9975,
    "taxRate": 0.05,
    "currency": {"symbol": "Rs.", "code": "PKR"},
    "coupons": coupons,
    "categories": categories,
    "items": items,
    "reviews": reviews
}

# Compact output (one object per line) keeps js/data.js small for faster page loads
def _compact(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':'))

_lines = []
for _key, _val in restaurant_data.items():
    if isinstance(_val, list):
        _rows = ',\n'.join('    ' + _compact(_x) for _x in _val)
        _lines.append(f'  {json.dumps(_key)}: [\n{_rows}\n  ]')
    else:
        _lines.append(f'  {json.dumps(_key)}: {_compact(_val)}')

js_content = "// Menu & Restaurant Data for Shangrilla Garden & BBQ (all prices in PKR)\nconst RESTAURANT_DATA = {\n" + ',\n'.join(_lines) + "\n};\n"

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully updated js/data.js with {len(items)} items and {len(categories)} categories!")
