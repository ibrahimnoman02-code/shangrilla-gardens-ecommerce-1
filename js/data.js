// Menu & Restaurant Data for Shangrilla Garden & BBQ
const RESTAURANT_DATA = {
    "name":  "Shangrilla Garden \u0026 BBQ",
    "slogan":  "A little sophistication, served hot",
    "tagline":  "Royal Flavors, Garden Fresh Dining",
    "deliveryPhone":  "061 454880",
    "reservationPhone":  "0307 8882936",
    "phone":  "Home Delivery: 061-454880 | Reservation \u0026 Marquee: 0307-8882936",
    "email":  "orders@shangrillagardens.com",
    "address":  "Club Road, Shangrilla Garden \u0026 BBQ",
    "openingHours":  "Mon - Sun: 12:00 PM - 01:00 AM",
    "deliveryFee":  2.5,
    "freeDeliveryThreshold":  35.0,
    "taxRate":  0.05,
    "currency":  {
                     "symbol":  "$",
                     "code":  "USD",
                     "rate":  1,
                     "altSymbol":  "Rs.",
                     "altCode":  "PKR",
                     "altRate":  285
                 },
    "coupons":  [
                    {
                        "code":  "SHANGRILLA10",
                        "type":  "percent",
                        "value":  10,
                        "minOrder":  15,
                        "desc":  "10% off your entire order"
                    },
                    {
                        "code":  "ROYALSTEAK",
                        "type":  "fixed",
                        "value":  5.0,
                        "minOrder":  25,
                        "desc":  "$5 off premium sizzlers"
                    },
                    {
                        "code":  "FREESHIP",
                        "type":  "shipping",
                        "value":  0,
                        "minOrder":  20,
                        "desc":  "Free priority delivery"
                    }
                ],
    "categories":  [
                       {
                           "id":  "all",
                           "name":  "Full Menu",
                           "icon":  "fa-utensils"
                       },
                       {
                           "id":  "deals",
                           "name":  "Meal Deals \u0026 Combos",
                           "icon":  "fa-gift"
                       },
                       {
                           "id":  "soups",
                           "name":  "Appetizers \u0026 Soups",
                           "icon":  "fa-mug-hot"
                       },
                       {
                           "id":  "bbq",
                           "name":  "Charcoal BBQ \u0026 Grills",
                           "icon":  "fa-drumstick-bite"
                       },
                       {
                           "id":  "steaks",
                           "name":  "Crafted Chicken Steaks",
                           "icon":  "fa-fire"
                       },
                       {
                           "id":  "pizza",
                           "name":  "Artisan Pizzas",
                           "icon":  "fa-pizza-slice"
                       },
                       {
                           "id":  "handi",
                           "name":  "Royal Handi \u0026 Karahi",
                           "icon":  "fa-bowl-food"
                       },
                       {
                           "id":  "seafood",
                           "name":  "Seafood Specialties",
                           "icon":  "fa-fish"
                       },
                       {
                           "id":  "rice",
                           "name":  "Basmati Rice Creations",
                           "icon":  "fa-bowl-rice"
                       },
                       {
                           "id":  "naans",
                           "name":  "Tandoori Artisan Naans",
                           "icon":  "fa-bread-slice"
                       },
                       {
                           "id":  "chinese",
                           "name":  "Shangrilla Chinese",
                           "icon":  "fa-pepper-hot"
                       },
                       {
                           "id":  "beverages",
                           "name":  "Mocktails \u0026 Shakes",
                           "icon":  "fa-glass-water"
                       },
                       {
                           "id":  "hotbrews",
                           "name":  "Hot Brews \u0026 Coffee",
                           "icon":  "fa-mug-saucer"
                       },
                       {
                           "id":  "desserts",
                           "name":  "Desserts \u0026 Bakery",
                           "icon":  "fa-cake-candles"
                       }
                   ],
    "items":  [
                  {
                      "id":  "s1-chicken-deal-for-5",
                      "title":  "S1 (Chicken Deal For 5)",
                      "subtitle":  "A Hearty Family-Style Chicken Feast",
                      "category":  "deals",
                      "price":  23.3333,
                      "rating":  4.95,
                      "reviewsCount":  89,
                      "badge":  "Family Feast",
                      "featured":  true,
                      "image":  "assets/images/handi-chicken-hari-mirch.jpg",
                      "gallery":  [
                                      "assets/images/handi-chicken-hari-mirch.jpg"
                                  ],
                      "description":  "A rich desi spread featuring: Boneless Chicken Handi, Chicken Boti (10 Pcs), Chicken Seekh Kebab (5 Pcs), Assorted Bread Basket (Naan, Paratha, Roti), Fresh Salad \u0026 Mint Raita, Sweet Bites \u0026 1 Litre Cold Drink. Serves 5 Guests.",
                      "dietary":  [
                                      "Serves 5",
                                      "Complete Meal",
                                      "Chef Curated"
                                  ],
                      "spiceLevel":  "Mild to Medium",
                      "prepTime":  "30-35 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Deal (Serves 5)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Assorted Bread Basket",
                                         "price":  1.75
                                     },
                                     {
                                         "name":  "Extra 1 Litre Cold Drink",
                                         "price":  0.7719
                                     },
                                     {
                                         "name":  "Upgrade to Dessert Platter",
                                         "price":  2.7368
                                     }
                                 ]
                  },
                  {
                      "id":  "s2-mutton-deal-for-5",
                      "title":  "S2 (Mutton Deal for 5)",
                      "subtitle":  "A Rich Royal Desi Spread",
                      "category":  "deals",
                      "price":  29.8246,
                      "rating":  5.0,
                      "reviewsCount":  112,
                      "badge":  "Royal Special",
                      "featured":  true,
                      "image":  "assets/images/traditional-mutton-karahi.jpg",
                      "gallery":  [
                                      "assets/images/traditional-mutton-karahi.jpg"
                                  ],
                      "description":  "Lavish royal feast including: Mutton Karahi, Chicken Malai Boti (10 Pcs), Chicken Kalmi Tikka (5 Pcs), Assorted Bread Basket, Fresh Salad \u0026 Mint Raita, Sweet Bites \u0026 1 Litre Cold Drink. Serves 5 Guests.",
                      "dietary":  [
                                      "Mutton \u0026 BBQ",
                                      "Serves 5",
                                      "Royal Choice"
                                  ],
                      "spiceLevel":  "Aromatic Medium",
                      "prepTime":  "35-40 mins",
                      "portions":  [
                                       {
                                           "name":  "Grand Mutton Deal (Serves 5)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Roghni Naans (2 Pcs)",
                                         "price":  0.7
                                     },
                                     {
                                         "name":  "Extra Mutton Seekh Royale (4 Pcs)",
                                         "price":  7.5439
                                     }
                                 ]
                  },
                  {
                      "id":  "s3-bbq-feast-deal",
                      "title":  "S3 (BBQ Feast Deal)",
                      "subtitle":  "The Complete Charcoal Grill Experience",
                      "category":  "deals",
                      "price":  17.5439,
                      "rating":  4.9,
                      "reviewsCount":  78,
                      "badge":  "BBQ Masterpiece",
                      "featured":  true,
                      "image":  "assets/images/smoked-chicken-mutton-tikka.jpg",
                      "gallery":  [
                                      "assets/images/smoked-chicken-mutton-tikka.jpg"
                                  ],
                      "description":  "Ideal for 3 persons gathering: Chicken Malai Boti (6 Pcs), Chicken Kebab (3 Pcs), Beef Seekh Kebab (3 Pcs), Lebanese Kebab (2 Pcs), Fish Tikka (3 Pcs), Mutton Tikka (3 Pcs), Chicken Biryani, Fresh Salad, Mint Raita \u0026 Sauces.",
                      "dietary":  [
                                      "Charcoal BBQ",
                                      "Serves 3",
                                      "Multi-Meat Variety"
                                  ],
                      "spiceLevel":  "Medium Smoky",
                      "prepTime":  "25-30 mins",
                      "portions":  [
                                       {
                                           "name":  "Feast for 3 Guests",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Garlic Naan",
                                         "price":  0.42
                                     },
                                     {
                                         "name":  "Mint Lemonade Pair",
                                         "price":  1.93
                                     }
                                 ]
                  },
                  {
                      "id":  "s4-pizza-meal-deal",
                      "title":  "S4 (Pizza Meal Deal)",
                      "subtitle":  "Modern Comfort Combo",
                      "category":  "deals",
                      "price":  10.1754,
                      "rating":  4.85,
                      "reviewsCount":  64,
                      "badge":  "Pizza Combo",
                      "featured":  true,
                      "image":  "assets/images/chargrilled-tikka-pizza.jpg",
                      "gallery":  [
                                      "assets/images/chargrilled-tikka-pizza.jpg"
                                  ],
                      "description":  "Perfect comfort meal for 2-3 persons: Large 13\" Pizza (choice of flavour: Smoky BBQ, Chargrilled Tikka, Mexican Fajita or Shangrilla Special), Fresh Fruit Salad, Crispy French Fries \u0026 1 Litre Cold Drink.",
                      "dietary":  [
                                      "Serves 2-3",
                                      "Pizza \u0026 Sides",
                                      "Popular"
                                  ],
                      "spiceLevel":  "Mild to Zesty",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Combo with 13\" Large Pizza",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Cheese Melt Crown",
                                         "price":  0.8772
                                     },
                                     {
                                         "name":  "Dip Sauces Trio",
                                         "price":  0.5263
                                     }
                                 ]
                  },
                  {
                      "id":  "two-person-deal",
                      "title":  "Two - Person Curated Deal",
                      "subtitle":  "A Complete Intimate Dining Experience",
                      "category":  "deals",
                      "price":  10.8772,
                      "rating":  4.9,
                      "reviewsCount":  95,
                      "badge":  "Duo Special",
                      "featured":  false,
                      "image":  "assets/images/royal-butter-chicken-handi.jpg",
                      "gallery":  [
                                      "assets/images/royal-butter-chicken-handi.jpg"
                                  ],
                      "description":  "Curated for couples or pairs: Chicken Boti (6 pieces), Chicken Handi, Chicken Masala Rice, Assorted Naan Selection, Fresh Garden Salad, Mint Raita, 500ml Coke \u0026 Two Mini Pastry Bites.",
                      "dietary":  [
                                      "Serves 2",
                                      "Complete Dinner"
                                  ],
                      "spiceLevel":  "Medium",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Duo Set (Serves 2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Roghni Naan",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "chefs-bread-basket",
                      "title":  "Chef\u0027s Bread Basket",
                      "subtitle":  "Tandoor Artisan Bread Assortment",
                      "category":  "naans",
                      "price":  1.75,
                      "rating":  4.9,
                      "reviewsCount":  140,
                      "badge":  "Tandoor Bake",
                      "featured":  false,
                      "image":  "assets/images/special-artisan-nans.jpg",
                      "gallery":  [
                                      "assets/images/special-artisan-nans.jpg"
                                  ],
                      "description":  "A warm selection of our finest tandoor breads straight from the clay oven: Tandoori Paratha, Roghni Naan, Garlic Naan, and Fresh Roti. Perfect for sharing or pairing with your favorite handi, karahi or BBQ.",
                      "dietary":  [
                                      "Clay Oven Fresh",
                                      "Vegetarian",
                                      "Bestseller"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "10-12 mins",
                      "portions":  [
                                       {
                                           "name":  "Basket (4 Artisan Breads)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Desi Makhan Butter Glaze",
                                         "price":  0.28
                                     },
                                     {
                                         "name":  "Mint Raita Bowl",
                                         "price":  0.5965
                                     }
                                 ]
                  },
                  {
                      "id":  "dessert-platter",
                      "title":  "Royal Dessert Platter",
                      "subtitle":  "Indulgent Sweet Finale from Our Bakery",
                      "category":  "desserts",
                      "price":  2.7368,
                      "rating":  4.95,
                      "reviewsCount":  105,
                      "badge":  "Chef Sweet Choice",
                      "featured":  true,
                      "image":  "assets/images/royal-dessert-platter.jpg",
                      "gallery":  [
                                      "assets/images/royal-dessert-platter.jpg"
                                  ],
                      "description":  "An indulgent tasting plate featuring: Chocolate Brownie (2 bite-sized pieces), Assorted Mini Pastries (2 bite-sized pieces), Chocolate Mousse (1 piece), Cupcake (1 piece), Gulab Jamun (2 pieces), and Chocolate Pops (2 pieces).",
                      "dietary":  [
                                      "Bakery Fresh",
                                      "Vegetarian Sweet",
                                      "Sharing Plate"
                                  ],
                      "spiceLevel":  "Sweet \u0026 Rich",
                      "prepTime":  "10-15 mins",
                      "portions":  [
                                       {
                                           "name":  "Grand Platter (10 Sweet Bites)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Single Scoop Vanilla Ice Cream",
                                         "price":  0.63
                                     }
                                 ]
                  },
                  {
                      "id":  "classic-hot-and-sour-soup",
                      "title":  "Classic Hot \u0026 Sour Soup",
                      "subtitle":  "Served hot, for the cold evenings",
                      "category":  "soups",
                      "price":  5.79,
                      "rating":  4.9,
                      "reviewsCount":  118,
                      "badge":  "Winter Star",
                      "featured":  true,
                      "image":  "assets/images/hot-and-sour-soup.jpg",
                      "gallery":  [
                                      "assets/images/hot-and-sour-soup.jpg"
                                  ],
                      "description":  "From the Kitchen of Shangrilla Garden. Served piping hot for the cold evenings—our signature Classic Hot \u0026 Sour Soup is a harmonious blend of spicy warmth and tangy zest. Prepared with slow-simmered chicken broth, tender shredded chicken, whisked egg drop ribbons, fresh black wood ear mushrooms, tofu strips, and finely diced crisp garden vegetables. Seasoned to perfection with aged black vinegar, crushed white pepper, and toasted sesame oil.",
                      "dietary":  [
                                      "Chef Recommended",
                                      "Served Piping Hot",
                                      "Winter Comfort"
                                  ],
                      "spiceLevel":  "Spicy \u0026 Tangy (2/3)",
                      "prepTime":  "12-15 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Bowl (Single Serving)",
                                           "priceDelta":  -2.8075
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Crispy Fried Wonton Crackers",
                                         "price":  0.5263
                                     },
                                     {
                                         "name":  "Extra Shredded Chicken \u0026 Egg Drop",
                                         "price":  0.8772
                                     },
                                     {
                                         "name":  "Spicy Szechuan Chili Oil Pot",
                                         "price":  0.42
                                     },
                                     {
                                         "name":  "Extra Chili Vinegar \u0026 Dark Soy Dips",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "golden-corn-soup",
                      "title":  "Golden Corn Soup",
                      "subtitle":  "Sweet golden kernels in velvet chicken broth",
                      "category":  "soups",
                      "price":  5.37,
                      "rating":  4.85,
                      "reviewsCount":  68,
                      "badge":  "Comfort Classic",
                      "featured":  false,
                      "image":  "assets/images/golden-corn-soup.jpg",
                      "gallery":  [
                                      "assets/images/golden-corn-soup.jpg"
                                  ],
                      "description":  "Classic Chinese-style sweet corn soup prepared with tender shredded chicken, sweet creamed corn, delicate egg flower ribbons, and white pepper. Smooth, warming, and comforting.",
                      "dietary":  [
                                      "Mild \u0026 Hearty",
                                      "Classic Chinese"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "12-15 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Bowl (Single Serving)",
                                           "priceDelta":  -2.4928
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Crispy Crackers \u0026 Sauces",
                                         "price":  0.5263
                                     }
                                 ]
                  },
                  {
                      "id":  "thai-lemongrass-soup",
                      "title":  "Thai Lemongrass Soup",
                      "subtitle":  "Zesty, fragrant \u0026 herbal Siamese broth",
                      "category":  "soups",
                      "price":  5.4035,
                      "rating":  4.9,
                      "reviewsCount":  54,
                      "badge":  "Herbal Specialty",
                      "featured":  false,
                      "image":  "assets/images/thai-lemongrass-soup.jpg",
                      "gallery":  [
                                      "assets/images/thai-lemongrass-soup.jpg"
                                  ],
                      "description":  "Aromatic Thai-inspired broth infused with bruised fresh lemongrass, kaffir lime leaves, galangal root, birds-eye chilies, tender chicken slivers, and straw mushrooms with a squeeze of fresh lime.",
                      "dietary":  [
                                      "Aromatic",
                                      "Citrus \u0026 Spice",
                                      "Low Calorie"
                                  ],
                      "spiceLevel":  "Spicy \u0026 Tangy (2.5/3)",
                      "prepTime":  "12-15 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Bowl (Single Serving)",
                                           "priceDelta":  -2.7035
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Lime \u0026 Chili Condiments",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "crispy-french-fries",
                      "title":  "Crispy French Fries / House Fries",
                      "subtitle":  "Golden, salted and crunchy",
                      "category":  "soups",
                      "price":  1.8246,
                      "rating":  4.8,
                      "reviewsCount":  85,
                      "badge":  "Popular Snack",
                      "featured":  false,
                      "image":  "assets/images/crispy-french-fries.jpg",
                      "gallery":  [
                                      "assets/images/crispy-french-fries.jpg"
                                  ],
                      "description":  "Golden crispy potato fries tossed in light sea salt and house seasoning, served with garlic mayo and tomato ketchup.",
                      "dietary":  [
                                      "Vegetarian",
                                      "Crispy"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "10-12 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Basket",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Melted Cheddar Cheese Drizzle",
                                         "price":  0.63
                                     }
                                 ]
                  },
                  {
                      "id":  "grilled-chicken-sandwich-melts",
                      "title":  "Grilled Chicken Sandwich Melts",
                      "subtitle":  "Toasted pan-bread with melted cheese",
                      "category":  "soups",
                      "price":  2.9825,
                      "rating":  4.85,
                      "reviewsCount":  62,
                      "badge":  "Cafe Special",
                      "featured":  false,
                      "image":  "assets/images/grilled-chicken-sandwich-melts.jpg",
                      "gallery":  [
                                      "assets/images/grilled-chicken-sandwich-melts.jpg"
                                  ],
                      "description":  "Succulent grilled chicken breast slices folded with caramelized onions, bell peppers, melted cheddar, and herb mayonnaise between golden toasted artisan bread.",
                      "dietary":  [
                                      "Cafe Favorite",
                                      "Served with Fries"
                                  ],
                      "spiceLevel":  "Mild-Medium",
                      "prepTime":  "15-18 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Sandwich with Fries",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Cheese Layer",
                                         "price":  0.42
                                     }
                                 ]
                  },
                  {
                      "id":  "classic-chicken-club-sandwich",
                      "title":  "Classic Chicken Club Sandwich",
                      "subtitle":  "Triple-decker stacked with egg, chicken \u0026 salad",
                      "category":  "soups",
                      "price":  3.3333,
                      "rating":  4.9,
                      "reviewsCount":  88,
                      "badge":  "All-Time Classic",
                      "featured":  false,
                      "image":  "assets/images/classic-chicken-club-sandwich.jpg",
                      "gallery":  [
                                      "assets/images/classic-chicken-club-sandwich.jpg"
                                  ],
                      "description":  "Traditional triple-decker toasted club sandwich loaded with tender seasoned shredded chicken, fried egg, crisp lettuce, ripe tomatoes, cucumber, and creamy mayo. Served with seasoned French fries and coleslaw.",
                      "dietary":  [
                                      "Triple-Decker",
                                      "Served with Fries"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "15-20 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Triple Decker with Fries",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra French Fries Portion",
                                         "price":  0.7
                                     }
                                 ]
                  },
                  {
                      "id":  "crispy-zinger-burger",
                      "title":  "Crispy Zinger Burger",
                      "subtitle":  "Ultra-crunchy fried chicken fillet in sesame brioche",
                      "category":  "soups",
                      "price":  2.4561,
                      "rating":  4.88,
                      "reviewsCount":  110,
                      "badge":  "Crispy Crunch",
                      "featured":  false,
                      "image":  "assets/images/crispy-zinger-burger.jpg",
                      "gallery":  [
                                      "assets/images/crispy-zinger-burger.jpg"
                                  ],
                      "description":  "Thick prime chicken breast fillet coated in our signature zesty crunchy batter, fried golden, topped with crisp iceberg lettuce and zesty garlic dressing in a toasted sesame seed brioche bun. Served with fries.",
                      "dietary":  [
                                      "Crispy",
                                      "Served with Fries"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "15 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Burger with Fries",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Cheese Slice",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "tropical-fruit-salad",
                      "title":  "Tropical Fruit Salad",
                      "subtitle":  "Fresh seasonal orchard fruits in light honey cream",
                      "category":  "soups",
                      "price":  2.7,
                      "rating":  4.8,
                      "reviewsCount":  42,
                      "badge":  "Fresh Healthy",
                      "featured":  false,
                      "image":  "assets/images/tropical-fruit-salad.jpg",
                      "gallery":  [
                                      "assets/images/tropical-fruit-salad.jpg"
                                  ],
                      "description":  "A crisp, refreshing melange of seasonal diced apples, bananas, sweet mangoes/melons, pomegranate pearls, and grapes folded in delicate honey sweetened cream.",
                      "dietary":  [
                                      "Fresh Fruit",
                                      "Healthy"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "8-10 mins",
                      "portions":  [
                                       {
                                           "name":  "Bowl (Single / Duo)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Grand Fruit Plate",
                                           "priceDelta":  1.1599999999999997
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "fresh-green-salad",
                      "title":  "Fresh Green Salad",
                      "subtitle":  "Crisp farm cucumbers, tomatoes, radishes \u0026 onions",
                      "category":  "soups",
                      "price":  0.5965,
                      "rating":  4.75,
                      "reviewsCount":  60,
                      "badge":  "Garden Fresh",
                      "featured":  false,
                      "image":  "assets/images/fresh-green-salad.jpg",
                      "gallery":  [
                                      "assets/images/fresh-green-salad.jpg"
                                  ],
                      "description":  "Chilled garden fresh sliced cucumbers, ripe juicy tomatoes, crisp red onions, carrots, and green chilies served with fresh lemon wedges.",
                      "dietary":  [
                                      "Vegan",
                                      "Gluten-Free",
                                      "Low Calorie"
                                  ],
                      "spiceLevel":  "Fresh Zesty",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Plate",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "traditional-raita",
                      "title":  "Traditional Mint \u0026 Zeera Raita",
                      "subtitle":  "Whipped yogurt with roasted cumin and crushed mint",
                      "category":  "soups",
                      "price":  0.5965,
                      "rating":  4.85,
                      "reviewsCount":  90,
                      "badge":  "Desi Pairing",
                      "featured":  false,
                      "image":  "assets/images/traditional-raita.jpg",
                      "gallery":  [
                                      "assets/images/traditional-raita.jpg"
                                  ],
                      "description":  "Authentic whipped curd blended with wild mint, roasted zeera cumin, and subtle pink salt. The essential coolant for spicy BBQ and karahi dishes.",
                      "dietary":  [
                                      "Vegetarian",
                                      "Cooling"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Traditional Raita Bowl",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Creamy Nestlé Premium Yogurt Raita",
                                           "priceDelta":  0.1754
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "crispy-chicken-wings-8pcs",
                      "title":  "Crispy Chicken Wings (8 Pcs)",
                      "subtitle":  "Crunchy golden fried wings with dipping sauce",
                      "category":  "soups",
                      "price":  2.807,
                      "rating":  4.9,
                      "reviewsCount":  72,
                      "badge":  "Finger Food",
                      "featured":  false,
                      "image":  "assets/images/crispy-wings-fries.jpg",
                      "gallery":  [
                                      "assets/images/crispy-wings-fries.jpg"
                                  ],
                      "description":  "Crispy double-dredged chicken wings fried to a golden crunch, tossed with house spices and served with tangy dipping sauce.",
                      "dietary":  [
                                      "High Protein",
                                      "Crispy Appetizer"
                                  ],
                      "spiceLevel":  "Medium",
                      "prepTime":  "15 mins",
                      "portions":  [
                                       {
                                           "name":  "8 Pieces Basket",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Honey Chili Glaze Upgrade",
                                         "price":  0.5263
                                     }
                                 ]
                  },
                  {
                      "id":  "chefs-special-chicken-tikka-breast",
                      "title":  "19. Chef\u0027s Special Chicken Tikka (Breast Fillet)",
                      "subtitle":  "Tender chicken breast in tikka spices, flame-grilled",
                      "category":  "bbq",
                      "price":  1.7544,
                      "rating":  4.9,
                      "reviewsCount":  130,
                      "badge":  "Charcoal Favorite",
                      "featured":  false,
                      "image":  "assets/images/chefs-special-tikka-breast.jpg",
                      "gallery":  [
                                      "assets/images/chefs-special-tikka-breast.jpg"
                                  ],
                      "description":  "Prime boneless/bone-in chicken breast fillet marinated in Kashmiri red chilies, roasted coriander, raw papaya, and yoghurt, char-grilled over live wood coals. Served with mint chutney and onion rings.",
                      "dietary":  [
                                      "Charcoal Grilled",
                                      "High Protein",
                                      "Halal"
                                  ],
                      "spiceLevel":  "Spicy (2/3)",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Breast Fillet Piece",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Hot Roghni Naan",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "smoked-chicken-leg-tikka",
                      "title":  "20. Smoked Chicken Leg Tikka",
                      "subtitle":  "Juicy leg piece infused with herbs and slow-grilled",
                      "category":  "bbq",
                      "price":  1.7544,
                      "rating":  4.9,
                      "reviewsCount":  125,
                      "badge":  "Smoky Classic",
                      "featured":  true,
                      "image":  "assets/images/smoked-chicken-mutton-tikka.jpg",
                      "gallery":  [
                                      "assets/images/smoked-chicken-mutton-tikka.jpg"
                                  ],
                      "description":  "Succulent chicken leg quarter scored deeply and soaked in smoky tikka masala, garlic-ginger juice, and lemon, slowly turned over glowing embers for a smoky, tender finish.",
                      "dietary":  [
                                      "Charcoal Grilled",
                                      "Juicy Dark Meat"
                                  ],
                      "spiceLevel":  "Spicy (2/3)",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Leg Quarter Piece",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Garlic Naan",
                                         "price":  0.42
                                     }
                                 ]
                  },
                  {
                      "id":  "royal-chicken-boti-skewers",
                      "title":  "21. Royal Chicken Boti Skewers (12 Pcs)",
                      "subtitle":  "Charred on bone with aromatic spices",
                      "category":  "bbq",
                      "price":  5.614,
                      "rating":  4.9,
                      "reviewsCount":  140,
                      "badge":  "House Star",
                      "featured":  false,
                      "image":  "assets/images/bbq-malai-boti-platter.jpg",
                      "gallery":  [
                                      "assets/images/bbq-malai-boti-platter.jpg"
                                  ],
                      "description":  "Tender chicken pieces on bone steeped in an authentic blend of roasted cumin, green chilies, and sour curd, threaded on skewers and charred for a rich smoky aroma.",
                      "dietary":  [
                                      "Charcoal Grilled",
                                      "Traditional"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Skewer Platter (12 Pcs)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Mint Raita",
                                         "price":  0.5965
                                     }
                                 ]
                  },
                  {
                      "id":  "signature-chicken-seekh-4pcs",
                      "title":  "22. Signature Chicken Seekh Kebab (4 Pcs)",
                      "subtitle":  "Minced chicken with herbs \u0026 charcoal flame-grilled",
                      "category":  "bbq",
                      "price":  4.21,
                      "rating":  4.88,
                      "reviewsCount":  98,
                      "badge":  "Seekh Favorite",
                      "featured":  false,
                      "image":  "assets/images/shahi-turkish-seekh-kabab.jpg",
                      "gallery":  [
                                      "assets/images/shahi-turkish-seekh-kabab.jpg"
                                  ],
                      "description":  "Hand-minced chicken blended with fresh cilantro, spring onions, green chilies, and secret garam masala, pressed onto flat iron skewers and char-grilled.",
                      "dietary":  [
                                      "Charcoal Grilled",
                                      "Halal"
                                  ],
                      "spiceLevel":  "Medium",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "Platter of 4 Seekh Kebabs",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Tandoori Paratha",
                                         "price":  0.42
                                     }
                                 ]
                  },
                  {
                      "id":  "kasturi-murg-boti-10pcs",
                      "title":  "24. Kasturi Murg Boti (10 Pcs)",
                      "subtitle":  "Infused with fragrant fenugreek \u0026 rich cream",
                      "category":  "bbq",
                      "price":  7.0175,
                      "rating":  4.95,
                      "reviewsCount":  85,
                      "badge":  "Mughlai Deluxe",
                      "featured":  false,
                      "image":  "assets/images/kasturi-murg-boti.jpg",
                      "gallery":  [
                                      "assets/images/kasturi-murg-boti.jpg"
                                  ],
                      "description":  "Boneless chicken cubes steeped in dried Kasuri methi (fenugreek leaves), clotted cream, white pepper, and cashew paste, char-grilled to golden perfection.",
                      "dietary":  [
                                      "Mughlai Recipe",
                                      "Creamy \u0026 Fragrant"
                                  ],
                      "spiceLevel":  "Mild to Rich",
                      "prepTime":  "22-25 mins",
                      "portions":  [
                                       {
                                           "name":  "10 Pcs Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "murg-malai-delight-12pcs",
                      "title":  "26. Murg Malai Delight (12 Pcs)",
                      "subtitle":  "Cream, cheese \u0026 subtle spices with melt-in-mouth texture",
                      "category":  "bbq",
                      "price":  6.3158,
                      "rating":  4.95,
                      "reviewsCount":  160,
                      "badge":  "Bestseller",
                      "featured":  false,
                      "image":  "assets/images/murg-malai-delight.jpg",
                      "gallery":  [
                                      "assets/images/murg-malai-delight.jpg"
                                  ],
                      "description":  "Boneless cubes of prime chicken steeped overnight in heavy cream, grated cheese, green cardamom, and mild spices. Incredibly tender, velvety, and buttery soft.",
                      "dietary":  [
                                      "Melt in Mouth",
                                      "Mild",
                                      "Chef\u0027s Pride"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "12 Pieces Boti Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Garlic Butter Glaze",
                                         "price":  0.3158
                                     }
                                 ]
                  },
                  {
                      "id":  "velvet-makhmali-kabab-12pcs",
                      "title":  "27. Velvet Makhmali Kabab (12 Pcs)",
                      "subtitle":  "Buttery soft kababs glazed with cream and delicate spices",
                      "category":  "bbq",
                      "price":  7.79,
                      "rating":  4.95,
                      "reviewsCount":  75,
                      "badge":  "Royal Heritage",
                      "featured":  false,
                      "image":  "assets/images/velvet-makhmali-kabab.jpg",
                      "gallery":  [
                                      "assets/images/velvet-makhmali-kabab.jpg"
                                  ],
                      "description":  "A royal court masterpiece. Silken textured minced chicken patties blended with saffron milk, pure butter, and subtle aromatic spices, gently charred over live coals.",
                      "dietary":  [
                                      "Royal Classic",
                                      "Velvety"
                                  ],
                      "spiceLevel":  "Delicate Mild",
                      "prepTime":  "25 mins",
                      "portions":  [
                                       {
                                           "name":  "12 Pcs Grand Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "kalmi-drumettes-mughlai-4pcs",
                      "title":  "28. Kalmi Drumettes Mughlai Style (4 Pcs)",
                      "subtitle":  "Juicy chicken drumettes in yogurt-nut paste",
                      "category":  "bbq",
                      "price":  4.6667,
                      "rating":  4.88,
                      "reviewsCount":  65,
                      "badge":  "Mughlai Roast",
                      "featured":  false,
                      "image":  "assets/images/kalmi-drumettes-mughlai.jpg",
                      "gallery":  [
                                      "assets/images/kalmi-drumettes-mughlai.jpg"
                                  ],
                      "description":  "Chicken drumettes steeped in roasted almond-cashew paste, thick hung yogurt, and mace-cardamom spices, roasted over coals until deeply caramelized.",
                      "dietary":  [
                                      "Mughlai Recipe",
                                      "Nut Rich"
                                  ],
                      "spiceLevel":  "Mild-Medium",
                      "prepTime":  "25 mins",
                      "portions":  [
                                       {
                                           "name":  "4 Pcs Drumettes",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "heritage-mutton-tikka-16pcs",
                      "title":  "29. Heritage Mutton Tikka (16 Pcs)",
                      "subtitle":  "Prime mutton cubes charred over open flame with masala",
                      "category":  "bbq",
                      "price":  10.5263,
                      "rating":  4.98,
                      "reviewsCount":  115,
                      "badge":  "Mutton Luxury",
                      "featured":  false,
                      "image":  "assets/images/charred-royal-mutton-chops.jpg",
                      "gallery":  [
                                      "assets/images/charred-royal-mutton-chops.jpg"
                                  ],
                      "description":  "Succulent cubes of prime mutton marinated in raw papaya, crushed black pepper, garlic, and heritage spice blend, seared over blazing wood coals to caramelized perfection.",
                      "dietary":  [
                                      "Prime Mutton",
                                      "Charcoal Flame"
                                  ],
                      "spiceLevel":  "Spicy \u0026 Smoky (2/3)",
                      "prepTime":  "30 mins",
                      "portions":  [
                                       {
                                           "name":  "16 Pieces Mutton Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Traditional Roghni Naan",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "mutton-seekh-royale-4pcs",
                      "title":  "30. Mutton Seekh Royale (4 Pcs)",
                      "subtitle":  "Hand-minced mutton with coriander, mint \u0026 flame-grilled",
                      "category":  "bbq",
                      "price":  7.5439,
                      "rating":  4.95,
                      "reviewsCount":  94,
                      "badge":  "Chef Choice",
                      "featured":  true,
                      "image":  "assets/images/shahi-turkish-seekh-kabab.jpg",
                      "gallery":  [
                                      "assets/images/shahi-turkish-seekh-kabab.jpg"
                                  ],
                      "description":  "Hand-minced mutton leg meat blended with finely chopped mint, green chilies, coriander root, and royal spices. Charcoal flame-grilled for juicy, rich flavor.",
                      "dietary":  [
                                      "Prime Mutton",
                                      "Halal"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "25 mins",
                      "portions":  [
                                       {
                                           "name":  "4 Royale Seekh Kebabs",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "smoky-beef-seekh-4pcs",
                      "title":  "31. Smoky Beef Seekh (4 Pcs)",
                      "subtitle":  "Succulent minced beef slow-roasted for smoky aroma",
                      "category":  "bbq",
                      "price":  3.51,
                      "rating":  4.85,
                      "reviewsCount":  82,
                      "badge":  "Smoky Beef",
                      "featured":  false,
                      "image":  "assets/images/smoky-beef-seekh.jpg",
                      "gallery":  [
                                      "assets/images/smoky-beef-seekh.jpg"
                                  ],
                      "description":  "Coarsely ground prime beef marinated with aromatic spices, fresh coriander, and onions, grilled on iron skewers over burning embers.",
                      "dietary":  [
                                      "Prime Beef",
                                      "Charcoal Grill"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "4 Pcs Beef Seekh",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "peshawari-chappal-kabab-2pcs",
                      "title":  "33. Peshawari Chappal Kabab (2 Pcs)",
                      "subtitle":  "Pashtun classic with coarse-ground beef \u0026 green chili",
                      "category":  "bbq",
                      "price":  3.86,
                      "rating":  4.9,
                      "reviewsCount":  96,
                      "badge":  "Peshawari Classic",
                      "featured":  false,
                      "image":  "assets/images/peshawari-chappal-kabab.jpg",
                      "gallery":  [
                                      "assets/images/peshawari-chappal-kabab.jpg"
                                  ],
                      "description":  "Authentic giant Pashtun patties made from seasoned coarse beef, pomegranate seeds (anardana), crushed coriander, diced tomatoes, and egg, pan-seared to a crispy exterior.",
                      "dietary":  [
                                      "Pashtun Recipe",
                                      "Crisp Edges"
                                  ],
                      "spiceLevel":  "Spicy (2.5/3)",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "Pair of Large Chappal Kababs",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "charred-mutton-chops-4pcs",
                      "title":  "34. Charred Mutton Chops (4 Pcs)",
                      "subtitle":  "French-cut mutton ribs marinated in herbs, flame-kissed",
                      "category":  "bbq",
                      "price":  8.9825,
                      "rating":  5.0,
                      "reviewsCount":  88,
                      "badge":  "Signature Ribs",
                      "featured":  true,
                      "image":  "assets/images/charred-royal-mutton-chops.jpg",
                      "gallery":  [
                                      "assets/images/charred-royal-mutton-chops.jpg"
                                  ],
                      "description":  "Chef\u0027s Signature. Tender French-trimmed mutton rib chops tenderized with raw papaya and coated in cracked black pepper, crushed chilies, ginger, and lime. Blistered over live wood coals.",
                      "dietary":  [
                                      "Signature Ribs",
                                      "Chef\u0027s Pride"
                                  ],
                      "spiceLevel":  "Spicy \u0026 Robust",
                      "prepTime":  "25-30 mins",
                      "portions":  [
                                       {
                                           "name":  "4 Pcs Charred Chops",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "behari-murg-boti-12pcs",
                      "title":  "35. Behari Murg Boti (12 Pcs)",
                      "subtitle":  "Boneless chicken in smoky mustard-based Behari masala",
                      "category":  "bbq",
                      "price":  6.8421,
                      "rating":  4.9,
                      "reviewsCount":  70,
                      "badge":  "Behari Special",
                      "featured":  false,
                      "image":  "assets/images/behari-murg-boti.jpg",
                      "gallery":  [
                                      "assets/images/behari-murg-boti.jpg"
                                  ],
                      "description":  "Thin tender ribbons of boneless chicken marinated in pure mustard oil, raw papaya, fried onions, and roasted whole spices, grilled until silky and melt-in-mouth.",
                      "dietary":  [
                                      "Mustard Infused",
                                      "Silky Texture"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "12 Pieces Behari Boti",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "white-chicken-supreme-breast",
                      "title":  "36. White Chicken Supreme (Breast)",
                      "subtitle":  "Creamy yogurt-based tikka, mild and elegant",
                      "category":  "bbq",
                      "price":  2.1053,
                      "rating":  4.88,
                      "reviewsCount":  65,
                      "badge":  "Mild Elegant",
                      "featured":  false,
                      "image":  "assets/images/white-chicken-supreme.jpg",
                      "gallery":  [
                                      "assets/images/white-chicken-supreme.jpg"
                                  ],
                      "description":  "Tender chicken breast fillet drenched in a velvety marinade of thick curd, cashew puree, and white pepper, flame-grilled without red chilies for a delicate, sophisticated profile.",
                      "dietary":  [
                                      "Mild \u0026 Creamy",
                                      "Halal"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Breast Fillet",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "creamy-white-chicken-leg-tikka",
                      "title":  "37. Creamy White Chicken Leg Tikka",
                      "subtitle":  "Subtly spiced white marinade, charcoal-grilled to tenderness",
                      "category":  "bbq",
                      "price":  2.1053,
                      "rating":  4.88,
                      "reviewsCount":  68,
                      "badge":  "Mild \u0026 Juicy",
                      "featured":  false,
                      "image":  "assets/images/creamy-white-leg-tikka.jpg",
                      "gallery":  [
                                      "assets/images/creamy-white-leg-tikka.jpg"
                                  ],
                      "description":  "Juicy chicken leg piece steeped in silky white sauce, fresh cream, white cumin, and gentle coriander, gently smoked over coals.",
                      "dietary":  [
                                      "Mild",
                                      "Juicy Dark Meat"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Leg Piece",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "lebanese-grilled-kabab",
                      "title":  "38. Lebanese Grilled Kabab (Cheese Stuffed)",
                      "subtitle":  "Infused with garlic, lemon \u0026 olive oil, stuffed with melted cheese",
                      "category":  "bbq",
                      "price":  8.7719,
                      "rating":  4.95,
                      "reviewsCount":  110,
                      "badge":  "Cheese Stuffed",
                      "featured":  false,
                      "image":  "assets/images/lebanese-grilled-kabab.jpg",
                      "gallery":  [
                                      "assets/images/lebanese-grilled-kabab.jpg"
                                  ],
                      "description":  "Middle-Eastern inspired grilled chicken kababs infused with minced garlic, lemon juice, sumac, and extra virgin olive oil, stuffed with gooey mozzarella cheese that oozes with every bite.",
                      "dietary":  [
                                      "Cheese Stuffed",
                                      "Middle Eastern Fusion"
                                  ],
                      "spiceLevel":  "Mild to Zesty",
                      "prepTime":  "25 mins",
                      "portions":  [
                                       {
                                           "name":  "6 Pieces Grand Platter",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "3 Pieces Portion",
                                           "priceDelta":  -3.1579000000000006
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "sheesh-taouk-skewers-12pcs",
                      "title":  "40. Sheesh Taouk Skewers (12 Pcs)",
                      "subtitle":  "Chicken cubes in yogurt, paprika \u0026 lemon zest",
                      "category":  "bbq",
                      "price":  6.6667,
                      "rating":  4.9,
                      "reviewsCount":  78,
                      "badge":  "Mediterranean",
                      "featured":  false,
                      "image":  "assets/images/sheesh-taouk-skewers.jpg",
                      "gallery":  [
                                      "assets/images/sheesh-taouk-skewers.jpg"
                                  ],
                      "description":  "Classic Mediterranean skewers of tender boneless chicken steeped in Greek-style yogurt, roasted paprika, minced garlic, oregano, and lemon zest. Char-grilled with charred bell peppers.",
                      "dietary":  [
                                      "Mediterranean Flavor",
                                      "Halal"
                                  ],
                      "spiceLevel":  "Zesty Mild",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "12 Pcs Skewer Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "haryali-murg-tikka-12pcs",
                      "title":  "41. Haryali Murg Tikka (12 Pcs)",
                      "subtitle":  "Chicken in coriander-mint paste, grilled over embers",
                      "category":  "bbq",
                      "price":  7.0175,
                      "rating":  4.9,
                      "reviewsCount":  84,
                      "badge":  "Herb Garden",
                      "featured":  false,
                      "image":  "assets/images/haryali-murg-tikka.jpg",
                      "gallery":  [
                                      "assets/images/haryali-murg-tikka.jpg"
                                  ],
                      "description":  "Bright vibrant green chicken tikka coated in a puree of fresh farm mint, green coriander, baby spinach, roasted cumin, and green chilies. Flame seared for aromatic freshness.",
                      "dietary":  [
                                      "Herbal Marinade",
                                      "Charcoal Grill"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "12 Pcs Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "silken-reshmi-kabab-4pcs",
                      "title":  "Silken Reshmi Kabab (4 Pcs)",
                      "subtitle":  "Boneless chicken in cream, cheese \u0026 subtle spices",
                      "category":  "bbq",
                      "price":  6.3158,
                      "rating":  4.92,
                      "reviewsCount":  92,
                      "badge":  "Silken Texture",
                      "featured":  false,
                      "image":  "assets/images/silken-reshmi-kabab.jpg",
                      "gallery":  [
                                      "assets/images/silken-reshmi-kabab.jpg"
                                  ],
                      "description":  "Extremely finely minced chicken blended with egg whites, clotted cream, mace, and crushed green cardamom, wrapped on skewers and grilled into silky golden rolls.",
                      "dietary":  [
                                      "Velvety",
                                      "Halal"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "4 Pcs Reshmi Seekh",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "bbq-malai-boti-platter",
                      "title":  "Royal Chicken Malai Boti \u0026 Seekh Kebab",
                      "subtitle":  "Melt-in-mouth charcoal grilled perfection",
                      "category":  "bbq",
                      "price":  6.8421,
                      "rating":  4.95,
                      "reviewsCount":  167,
                      "badge":  "BBQ Masterpiece",
                      "featured":  true,
                      "image":  "assets/images/bbq-malai-boti-platter.jpg",
                      "gallery":  [
                                      "assets/images/bbq-malai-boti-platter.jpg"
                                  ],
                      "description":  "Succulent cubes of prime chicken steeped overnight in heavy cream, green chilies, coriander root, and fragrant spices, char-grilled over live coals alongside juicy seekh kebabs.",
                      "dietary":  [
                                      "Charcoal Grilled",
                                      "Halal",
                                      "Chef\u0027s Special"
                                  ],
                      "spiceLevel":  "Mild-Medium",
                      "prepTime":  "25-30 mins",
                      "portions":  [
                                       {
                                           "name":  "Regular Platter (8 Boti + 2 Seekh)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Jumbo BBQ Platter (16 Boti + 4 Seekh)",
                                           "priceDelta":  5.614
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Garlic Butter Naan",
                                         "price":  0.42
                                     }
                                 ]
                  },
                  {
                      "id":  "tuscan-herbs-chicken-steak",
                      "title":  "48. Tuscan Herbs Chicken Steak",
                      "subtitle":  "Italian herb butter glaze with subtle spice notes",
                      "category":  "steaks",
                      "price":  5.2632,
                      "rating":  4.88,
                      "reviewsCount":  85,
                      "badge":  "Italian Sizzler",
                      "featured":  true,
                      "image":  "assets/images/tuscan-herbs-steak.jpg",
                      "gallery":  [
                                      "assets/images/tuscan-herbs-steak.jpg"
                                  ],
                      "description":  "Flame-grilled chicken fillet glazed in roasted garlic herb butter, rosemary, thyme, and sun-dried tomato essence. Served on a sizzling hot plate with butter-sautéed seasonal vegetables and crispy fries.",
                      "dietary":  [
                                      "Sizzling Skillet",
                                      "Continental"
                                  ],
                      "spiceLevel":  "Mild to Aromatic",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Fillet Sizzler",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Herb Garlic Butter Sauce",
                                         "price":  0.7
                                     }
                                 ]
                  },
                  {
                      "id":  "mexican-chipotle-chicken-steak",
                      "title":  "49. Mexican Chipotle Chicken Steak",
                      "subtitle":  "Smoky chicken infused with chipotle and fresh lime",
                      "category":  "steaks",
                      "price":  5.2632,
                      "rating":  4.9,
                      "reviewsCount":  92,
                      "badge":  "Zesty Heat",
                      "featured":  false,
                      "image":  "assets/images/mexican-chipotle-steak.jpg",
                      "gallery":  [
                                      "assets/images/mexican-chipotle-steak.jpg"
                                  ],
                      "description":  "Char-grilled succulent chicken fillet drenched in Shangrilla\u0027s signature spicy Mexican roasted pepper and chipotle sauce, topped with grilled sweet corn, olives, and jalapenos on a roaring cast-iron skillet.",
                      "dietary":  [
                                      "Spicy",
                                      "High Protein"
                                  ],
                      "spiceLevel":  "Spicy (2/3)",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Fillet Sizzler",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Chipotle Sauce",
                                         "price":  0.7
                                     }
                                 ]
                  },
                  {
                      "id":  "truffle-mushroom-steak",
                      "title":  "50. Truffle Mushroom Chicken Steak",
                      "subtitle":  "Creamy mushroom sauce with a hint of black truffle",
                      "category":  "steaks",
                      "price":  5.2632,
                      "rating":  4.95,
                      "reviewsCount":  142,
                      "badge":  "Signature Star",
                      "featured":  true,
                      "image":  "assets/images/truffle-mushroom-steak-poster.jpg",
                      "gallery":  [
                                      "assets/images/truffle-mushroom-steak-poster.jpg"
                                  ],
                      "description":  "From the Kitchen of Shangrilla Garden. Tender flame-grilled chicken steak generously smothered in rich, aromatic black truffle mushroom cream sauce. Served on a roaring cast-iron skillet over a bed of herb-roasted potatoes, diced sweet carrots, tender green peas, black olives, and garden cucumber garnish.",
                      "dietary":  [
                                      "Chef\u0027s Signature",
                                      "Sizzling Platter"
                                  ],
                      "spiceLevel":  "Mild to Rich",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Fillet Sizzler",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Double Fillet Grand Platter",
                                           "priceDelta":  2.1053
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Creamy Truffle Mushroom Sauce",
                                         "price":  0.7719
                                     },
                                     {
                                         "name":  "Garlic Butter Sautéed Mushrooms",
                                         "price":  0.8772
                                     }
                                 ]
                  },
                  {
                      "id":  "black-peppercorn-chicken-steak",
                      "title":  "51. Black Peppercorn Chicken Steak",
                      "subtitle":  "Classic pepper-marinated chicken in rich peppercorn reduction",
                      "category":  "steaks",
                      "price":  5.2632,
                      "rating":  4.85,
                      "reviewsCount":  78,
                      "badge":  "Classic Pepper",
                      "featured":  false,
                      "image":  "assets/images/black-peppercorn-steak.jpg",
                      "gallery":  [
                                      "assets/images/black-peppercorn-steak.jpg"
                                  ],
                      "description":  "Cracked Tellicherry black peppercorns pressed into tender chicken breast fillet, flame-grilled and finished with a rich brown pepper cream reduction on a sizzling platter.",
                      "dietary":  [
                                      "Peppery Heat",
                                      "Continental"
                                  ],
                      "spiceLevel":  "Medium Pepper Heat",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Fillet Sizzler",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "smoky-barbecue-chicken-steak",
                      "title":  "52. Smoky Barbecue Chicken Steak",
                      "subtitle":  "Chargrilled chicken glazed with bold, house-style smoky BBQ sauce",
                      "category":  "steaks",
                      "price":  5.2632,
                      "rating":  4.88,
                      "reviewsCount":  86,
                      "badge":  "Smoky Glaze",
                      "featured":  false,
                      "image":  "assets/images/fire-glazed-mexican-steak.jpg",
                      "gallery":  [
                                      "assets/images/fire-glazed-mexican-steak.jpg"
                                  ],
                      "description":  "Flame-grilled chicken breast glazed repeatedly with our slow-simmered smoky hickory barbecue sauce, served with roasted corn and herb potatoes on an iron sizzler.",
                      "dietary":  [
                                      "Smoky Sweet",
                                      "Sizzling"
                                  ],
                      "spiceLevel":  "Mild-Sweet Smoky",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Fillet Sizzler",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "fire-glazed-mexican-steak",
                      "title":  "Fire-Glazed Salsa Chicken Steak",
                      "subtitle":  "Smoky, zesty \u0026 sizzling to perfection",
                      "category":  "steaks",
                      "price":  5.2632,
                      "rating":  4.8,
                      "reviewsCount":  98,
                      "badge":  "Spicy Favorite",
                      "featured":  true,
                      "image":  "assets/images/fire-glazed-mexican-steak.jpg",
                      "gallery":  [
                                      "assets/images/fire-glazed-mexican-steak.jpg"
                                  ],
                      "description":  "Char-grilled succulent chicken fillet drenched in spicy Mexican roasted pepper and tomato glaze, sautéed sweet corn, black Kalamata olives, caramelized baby onions, and garden vegetables.",
                      "dietary":  [
                                      "Spicy",
                                      "High Protein"
                                  ],
                      "spiceLevel":  "Spicy (2/3)",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Fillet Sizzler",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "smoky-bbq-chicken-pizza",
                      "title":  "60. Smoky BBQ Chicken Pizza",
                      "subtitle":  "Wood-fired crust with smoky chicken, onions \u0026 mozzarella",
                      "category":  "pizza",
                      "price":  2.9825,
                      "rating":  4.9,
                      "reviewsCount":  115,
                      "badge":  "Pizza Star",
                      "featured":  true,
                      "image":  "assets/images/artisan-bbq-pizza.jpg",
                      "gallery":  [
                                      "assets/images/artisan-bbq-pizza.jpg"
                                  ],
                      "description":  "Hand-stretched dough baked to a crisp airy crust, topped with house BBQ tomato sauce, tender chargrilled BBQ chicken chunks, caramelized red onions, sweet bell peppers, and bubbling 100% mozzarella cheese.",
                      "dietary":  [
                                      "Wood-Fired Crust",
                                      "Cheese Pull"
                                  ],
                      "spiceLevel":  "Mild Smoky",
                      "prepTime":  "15-20 mins",
                      "portions":  [
                                       {
                                           "name":  "Small 7\" (1-Person)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Medium 10\" (2-Person)",
                                           "priceDelta":  1.7175000000000002
                                       },
                                       {
                                           "name":  "Large 13\" (4-Person)",
                                           "priceDelta":  3.8947000000000003
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Mozzarella Melt",
                                         "price":  0.7
                                     }
                                 ]
                  },
                  {
                      "id":  "chargrilled-tikka-pizza",
                      "title":  "62. Chargrilled Tikka Pizza",
                      "subtitle":  "Desi tikka spices with a golden cheese crust and mild heat",
                      "category":  "pizza",
                      "price":  2.7368,
                      "rating":  4.92,
                      "reviewsCount":  130,
                      "badge":  "Desi Fusion",
                      "featured":  true,
                      "image":  "assets/images/chargrilled-tikka-pizza.jpg",
                      "gallery":  [
                                      "assets/images/chargrilled-tikka-pizza.jpg"
                                  ],
                      "description":  "A celebrated East-meets-West fusion. Spicy marinated chicken tikka chunks over our signature spiced tomato base, loaded with mozzarella, crunchy green peppers, onions, and oregano.",
                      "dietary":  [
                                      "Desi Fusion",
                                      "Bestseller"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "15-20 mins",
                      "portions":  [
                                       {
                                           "name":  "Small 7\" (1-Person)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Medium 10\" (2-Person)",
                                           "priceDelta":  1.4913000000000003
                                       },
                                       {
                                           "name":  "Large 13\" (4-Person)",
                                           "priceDelta":  3.6131999999999995
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Stuffed Cheesy Crust",
                                         "price":  0.8772
                                     }
                                 ]
                  },
                  {
                      "id":  "mexican-fajita-chicken-pizza",
                      "title":  "63. Mexican Fajita Chicken Pizza",
                      "subtitle":  "Fajita-spiced chicken, peppers, and tangy salsa drizzle",
                      "category":  "pizza",
                      "price":  2.7368,
                      "rating":  4.88,
                      "reviewsCount":  94,
                      "badge":  "Fiesta Flavor",
                      "featured":  false,
                      "image":  "assets/images/mexican-fajita-pizza.jpg",
                      "gallery":  [
                                      "assets/images/mexican-fajita-pizza.jpg"
                                  ],
                      "description":  "Loaded with fajita-seasoned chicken strips, tri-color bell peppers, roasted sweet corn, black olives, jalapenos, and a drizzle of Mexican spiced salsa over molten cheese.",
                      "dietary":  [
                                      "Zesty",
                                      "Colorful Toppings"
                                  ],
                      "spiceLevel":  "Zesty \u0026 Spicy (2/3)",
                      "prepTime":  "15-20 mins",
                      "portions":  [
                                       {
                                           "name":  "Small 7\" (1-Person)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Medium 10\" (2-Person)",
                                           "priceDelta":  1.4913000000000003
                                       },
                                       {
                                           "name":  "Large 13\" (4-Person)",
                                           "priceDelta":  3.6131999999999995
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chefs-signature-shangrilla-pizza",
                      "title":  "66. Chef\u0027s Signature Shangrilla Pizza",
                      "subtitle":  "House special layered with premium toppings and secret sauce",
                      "category":  "pizza",
                      "price":  3.0175,
                      "rating":  4.96,
                      "reviewsCount":  150,
                      "badge":  "Chef Special",
                      "featured":  false,
                      "image":  "assets/images/artisan-bbq-pizza.jpg",
                      "gallery":  [
                                      "assets/images/artisan-bbq-pizza.jpg"
                                  ],
                      "description":  "Our pinnacle artisan pizza: Double portion of smoked tikka chicken, grilled malai chicken, mushrooms, black olives, jalapenos, secret herb sauce, and double layer of mozzarella and cheddar cheese.",
                      "dietary":  [
                                      "Double Toppings",
                                      "House Special"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "18-20 mins",
                      "portions":  [
                                       {
                                           "name":  "Small 7\" (1-Person)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Medium 10\" (2-Person)",
                                           "priceDelta":  1.7895000000000003
                                       },
                                       {
                                           "name":  "Large 13\" (4-Person)",
                                           "priceDelta":  3.6666999999999996
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Garlic Mayo Dip Sauce",
                                         "price":  0.28
                                     }
                                 ]
                  },
                  {
                      "id":  "achari-spiced-chicken",
                      "title":  "72. Achari Spiced Chicken",
                      "subtitle":  "Tender chicken simmered in a tangy blend of pickling spices",
                      "category":  "handi",
                      "price":  6.63,
                      "rating":  4.9,
                      "reviewsCount":  85,
                      "badge":  "Tangy Desi",
                      "featured":  false,
                      "image":  "assets/images/achari-spiced-chicken.jpg",
                      "gallery":  [
                                      "assets/images/achari-spiced-chicken.jpg"
                                  ],
                      "description":  "Juicy bone-in chicken slow-cooked in a robust gravy infused with fennel seeds (saunf), mustard seeds (rai), fenugreek (methi dana), nigella (kalonji), and slit green chilies.",
                      "dietary":  [
                                      "Authentic Desi",
                                      "Tangy \u0026 Spicy"
                                  ],
                      "spiceLevel":  "Spicy \u0026 Tangy (2.5/3)",
                      "prepTime":  "25-30 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Handi Portion (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Roghni Naan",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "classic-chicken-karahi",
                      "title":  "74. Classic Chicken Karahi",
                      "subtitle":  "Cooked in fresh tomato, ginger, and green chili masala",
                      "category":  "handi",
                      "price":  8.42,
                      "rating":  4.92,
                      "reviewsCount":  165,
                      "badge":  "Karahi Classic",
                      "featured":  false,
                      "image":  "assets/images/classic-chicken-karahi.jpg",
                      "gallery":  [
                                      "assets/images/classic-chicken-karahi.jpg"
                                  ],
                      "description":  "Wok-fried in a traditional heavy iron karahi with ripe mountain tomatoes, coarse black pepper, slivered ginger, and fiery green chilies in pure desi ghee. Unmatched aroma and flavor.",
                      "dietary":  [
                                      "Wok Fried",
                                      "Desi Ghee"
                                  ],
                      "spiceLevel":  "Spicy (2/3)",
                      "prepTime":  "25-30 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Karahi (Serves 3-4)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Karahi (Serves 1-2)",
                                           "priceDelta":  -2.806
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Desi Makhan Ghee Dollop",
                                         "price":  0.42
                                     }
                                 ]
                  },
                  {
                      "id":  "chefs-handcrafted-chicken-handi",
                      "title":  "76. Chef\u0027s Handcrafted Chicken Handi",
                      "subtitle":  "Rich and creamy handi-style boneless chicken with velvety finish",
                      "category":  "handi",
                      "price":  10.1053,
                      "rating":  4.98,
                      "reviewsCount":  210,
                      "badge":  "Handi Royal",
                      "featured":  false,
                      "image":  "assets/images/royal-butter-chicken-handi.jpg",
                      "gallery":  [
                                      "assets/images/royal-butter-chicken-handi.jpg"
                                  ],
                      "description":  "Prime tender boneless chicken slow-cooked inside an authentic clay pot with heavy dairy cream, cashew paste, green cardamom, and mild aromatic spices.",
                      "dietary":  [
                                      "Royal Handi",
                                      "Boneless"
                                  ],
                      "spiceLevel":  "Mild to Rich",
                      "prepTime":  "25-30 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Handi (Serves 3-4)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Handi (Serves 1-2)",
                                           "priceDelta":  -3.6152999999999995
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Garlic Naan Pair",
                                         "price":  0.8421
                                     }
                                 ]
                  },
                  {
                      "id":  "ginger-infused-chicken",
                      "title":  "78. Ginger-Infused Chicken",
                      "subtitle":  "Pan-seared chicken tossed with ginger and bold Desi flavors",
                      "category":  "handi",
                      "price":  6.9825,
                      "rating":  4.88,
                      "reviewsCount":  64,
                      "badge":  "Ginger Aromatic",
                      "featured":  false,
                      "image":  "assets/images/ginger-infused-chicken.jpg",
                      "gallery":  [
                                      "assets/images/ginger-infused-chicken.jpg"
                                  ],
                      "description":  "Chicken pieces braised in julienned ginger, crushed coriander, black peppercorn, and caramelized onion gravy. Distinctive zing with every bite.",
                      "dietary":  [
                                      "Ginger Rich",
                                      "Desi Spice"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "25 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Handi (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "smoked-chicken-bartha",
                      "title":  "79. Smoked Chicken Bartha",
                      "subtitle":  "Pulled chicken slow-cooked in roasted spices and smoky tomato gravy",
                      "category":  "handi",
                      "price":  6.9825,
                      "rating":  4.9,
                      "reviewsCount":  72,
                      "badge":  "Smoked Delicacy",
                      "featured":  false,
                      "image":  "assets/images/smoked-chicken-bartha.jpg",
                      "gallery":  [
                                      "assets/images/smoked-chicken-bartha.jpg"
                                  ],
                      "description":  "Tender tandoor-roasted chicken shredded and braised in a velvety reduction of fire-roasted tomatoes, caramelized onions, cream, and live-charcoal smoke.",
                      "dietary":  [
                                      "Smoky Velvety",
                                      "Shredded Chicken"
                                  ],
                      "spiceLevel":  "Medium",
                      "prepTime":  "25 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Dish (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-jalfrezi",
                      "title":  "81. Chicken Jalfrezi",
                      "subtitle":  "Stir-fried chicken with bell peppers, onions, and tomato glaze",
                      "category":  "handi",
                      "price":  7.51,
                      "rating":  4.88,
                      "reviewsCount":  80,
                      "badge":  "Wok Glaze",
                      "featured":  false,
                      "image":  "assets/images/chicken-jalfrezi.jpg",
                      "gallery":  [
                                      "assets/images/chicken-jalfrezi.jpg"
                                  ],
                      "description":  "Boneless chicken strips flash-fried with crisp bell peppers, onions, tomatoes, and scrambled egg ribbons in a tangy, thick spiced tomato reduction.",
                      "dietary":  [
                                      "Wok-Tossed",
                                      "High Protein"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Portion (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-taka-tak",
                      "title":  "82. Chicken Taka Tak",
                      "subtitle":  "Sizzling street-style favorite, minced on high flame with masala",
                      "category":  "handi",
                      "price":  7.51,
                      "rating":  4.92,
                      "reviewsCount":  115,
                      "badge":  "Street Sizzle",
                      "featured":  false,
                      "image":  "assets/images/chicken-taka-tak.jpg",
                      "gallery":  [
                                      "assets/images/chicken-taka-tak.jpg"
                                  ],
                      "description":  "Prepared on a smoking flat tawa griddle using twin blades to chop tender boneless chicken with butter, tomatoes, green chilies, yogurt, and aromatic spices.",
                      "dietary":  [
                                      "Tawa Specialty",
                                      "Sizzling Street Style"
                                  ],
                      "spiceLevel":  "Spicy (2.5/3)",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Portion (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "butter-chicken-masala",
                      "title":  "83. Butter Chicken Masala",
                      "subtitle":  "Succulent chicken simmered in rich buttery tomato sauce with cream",
                      "category":  "handi",
                      "price":  8.07,
                      "rating":  4.96,
                      "reviewsCount":  145,
                      "badge":  "Creamy Indulgence",
                      "featured":  true,
                      "image":  "assets/images/royal-butter-chicken-handi.jpg",
                      "gallery":  [
                                      "assets/images/royal-butter-chicken-handi.jpg"
                                  ],
                      "description":  "Tandoor-charred chicken pieces submerged in a silky smooth, velvety sauce of fresh strained tomatoes, real butter, cashew cream, and dried fenugreek leaves.",
                      "dietary":  [
                                      "Makhani Gravy",
                                      "Rich \u0026 Creamy"
                                  ],
                      "spiceLevel":  "Mild \u0026 Sweet Spiced",
                      "prepTime":  "22-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Hot Roghni Naan",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "mutton-leg-steam-roast",
                      "title":  "89. Mutton Leg Steam Roast House Special",
                      "subtitle":  "Whole prime mutton leg marinated and slow-steamed to falling-off-the-bone tenderness",
                      "category":  "handi",
                      "price":  21.4035,
                      "rating":  5.0,
                      "reviewsCount":  95,
                      "badge":  "Grand Royal",
                      "featured":  true,
                      "image":  "assets/images/mutton-leg-steam-roast.jpg",
                      "gallery":  [
                                      "assets/images/mutton-leg-steam-roast.jpg"
                                  ],
                      "description":  "A magnificent royal centerpiece. A whole prime mutton leg marinated for 24 hours in vinegar, yogurt, crushed spices, and papaya, slowly steam-roasted for 4 hours until the meat melts off the bone. Garnished with golden fried onions, lemon, and dry fruit nuts.",
                      "dietary":  [
                                      "Whole Mutton Leg",
                                      "Serves 4-6",
                                      "Grand Feast"
                                  ],
                      "spiceLevel":  "Mild to Aromatic",
                      "prepTime":  "45-60 mins",
                      "portions":  [
                                       {
                                           "name":  "Whole Mutton Leg Roast (Serves 4-6)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Basmati Zeera Rice Platter",
                                         "price":  1.7544
                                     }
                                 ]
                  },
                  {
                      "id":  "traditional-mutton-karahi",
                      "title":  "90. Traditional Mutton Karahi",
                      "subtitle":  "Classic karahi-style mutton cooked in rich tomato and garlic masala",
                      "category":  "handi",
                      "price":  14.21,
                      "rating":  4.95,
                      "reviewsCount":  138,
                      "badge":  "Mutton Classic",
                      "featured":  true,
                      "image":  "assets/images/traditional-mutton-karahi.jpg",
                      "gallery":  [
                                      "assets/images/traditional-mutton-karahi.jpg"
                                  ],
                      "description":  "Tender pieces of baby goat mutton braised with tomatoes, garlic, ginger, and freshly ground spices in an authentic iron karahi. Rich, thick, and bursting with flavor.",
                      "dietary":  [
                                      "Baby Goat Mutton",
                                      "Desi Ghee"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "35-40 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Karahi (Serves 3-4)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Karahi (Serves 1-2)",
                                           "priceDelta":  -4.91
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "mutton-handi-supreme",
                      "title":  "92. Mutton Handi Supreme",
                      "subtitle":  "Creamy, slow-simmered mutton handi with balanced Desi spices",
                      "category":  "handi",
                      "price":  16.7719,
                      "rating":  4.98,
                      "reviewsCount":  120,
                      "badge":  "Royal Mutton",
                      "featured":  false,
                      "image":  "assets/images/mutton-handi-supreme.jpg",
                      "gallery":  [
                                      "assets/images/mutton-handi-supreme.jpg"
                                  ],
                      "description":  "Boneless cubes of prime tender mutton cooked slowly in clay handi pots with cashew nut paste, yogurt, heavy cream, and saffron undertones.",
                      "dietary":  [
                                      "Boneless Mutton",
                                      "Creamy Gravy"
                                  ],
                      "spiceLevel":  "Mild to Rich",
                      "prepTime":  "35-40 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Handi (Serves 3-4)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Handi (Serves 1-2)",
                                           "priceDelta":  -6.071899999999999
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "mutton-ginger-with-bone",
                      "title":  "94. Mutton Ginger With Bone",
                      "subtitle":  "Bone-in mutton infused with fresh ginger and mild spices",
                      "category":  "handi",
                      "price":  9.3,
                      "rating":  4.88,
                      "reviewsCount":  58,
                      "badge":  "Ginger Mutton",
                      "featured":  false,
                      "image":  "assets/images/mutton-ginger-karahi.jpg",
                      "gallery":  [
                                      "assets/images/mutton-ginger-karahi.jpg"
                                  ],
                      "description":  "Succulent bone-in mutton pieces slow-braised with abundant crushed and julienned ginger, yogurt, and cracked black pepper.",
                      "dietary":  [
                                      "Bone-In Mutton",
                                      "Ginger Rich"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "35 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Portion (Serves 2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "mutton-green-chilli-lemon",
                      "title":  "95. Mutton Green Chilli Lemon",
                      "subtitle":  "Zesty mutton cooked with green chilies and fresh lemon",
                      "category":  "handi",
                      "price":  14.21,
                      "rating":  4.94,
                      "reviewsCount":  65,
                      "badge":  "Zesty Spice",
                      "featured":  false,
                      "image":  "assets/images/mutton-green-chilli-lemon.jpg",
                      "gallery":  [
                                      "assets/images/mutton-green-chilli-lemon.jpg"
                                  ],
                      "description":  "Tangy, zesty mutton wok-tossed with fresh slit green chilies, roasted cumin, and a generous squeeze of fresh lemon juice.",
                      "dietary":  [
                                      "Zesty Lemon",
                                      "Spicy"
                                  ],
                      "spiceLevel":  "Spicy (2.5/3)",
                      "prepTime":  "35 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Portion (Serves 3-4)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "brain-masala-mughlai-style",
                      "title":  "97. Brain Masala (Mughlai Style)",
                      "subtitle":  "Classic delicacy tossed in Desi masala with ghee and herbs",
                      "category":  "handi",
                      "price":  7.8947,
                      "rating":  4.9,
                      "reviewsCount":  74,
                      "badge":  "Mughlai Delicacy",
                      "featured":  false,
                      "image":  "assets/images/brain-masala.jpg",
                      "gallery":  [
                                      "assets/images/brain-masala.jpg"
                                  ],
                      "description":  "Delicate brain (maghaz) gently cleaned and folded on a smoking flat grill with finely diced tomatoes, onions, green chilies, desi ghee, and garam masala.",
                      "dietary":  [
                                      "Gourmet Delicacy",
                                      "Desi Ghee"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Plate (Serves 1-2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "shahi-daal-tadka",
                      "title":  "98. Shahi Daal Tadka",
                      "subtitle":  "Creamy lentils tempered with garlic butter and mild spices",
                      "category":  "handi",
                      "price":  2.7719,
                      "rating":  4.85,
                      "reviewsCount":  85,
                      "badge":  "Vegetarian Comfort",
                      "featured":  false,
                      "image":  "assets/images/shahi-daal-tadka.jpg",
                      "gallery":  [
                                      "assets/images/shahi-daal-tadka.jpg"
                                  ],
                      "description":  "Yellow lentils slow-cooked to a creamy consistency, topped with a sizzling tarka of desi butter, sliced garlic, whole red chilies, and cumin seeds.",
                      "dietary":  [
                                      "Vegetarian",
                                      "Desi Tarka"
                                  ],
                      "spiceLevel":  "Mild to Aromatic",
                      "prepTime":  "15 mins",
                      "portions":  [
                                       {
                                           "name":  "Bowl (Serves 2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "plain-mixed-vegetable",
                      "title":  "99. Plain Mixed Vegetable",
                      "subtitle":  "Seasonal vegetables sauteed with light Desi seasoning",
                      "category":  "handi",
                      "price":  3.0526,
                      "rating":  4.8,
                      "reviewsCount":  52,
                      "badge":  "Farm Fresh",
                      "featured":  false,
                      "image":  "assets/images/plain-mixed-vegetable.jpg",
                      "gallery":  [
                                      "assets/images/plain-mixed-vegetable.jpg"
                                  ],
                      "description":  "Tender florets of cauliflower, sweet carrots, green peas, and potatoes sauteed in light onion-tomato gravy with roasted cumin.",
                      "dietary":  [
                                      "Vegetarian",
                                      "Healthy"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "15-20 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Bowl",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "handi-chicken-hari-mirch",
                      "title":  "100. Chicken Hari Mirch Masala",
                      "subtitle":  "Zesty chicken cooked with green chillies in rich aromatic spices",
                      "category":  "handi",
                      "price":  7.14,
                      "rating":  5.0,
                      "reviewsCount":  215,
                      "badge":  "Royal Special",
                      "featured":  false,
                      "image":  "assets/images/handi-chicken-hari-mirch.jpg",
                      "gallery":  [
                                      "assets/images/handi-chicken-hari-mirch.jpg"
                                  ],
                      "description":  "A crowning jewel of Shangrilla Gardens \u0026 BBQ. Prime tender boneless chicken slow-cooked in a silken, mildly spiced yogurt and cashew cream gravy, infused with freshly roasted cumin, green cardamom, and vibrant slit green chilies. Served in an authentic traditional handi with zeera raita and tangy onion pickle.",
                      "dietary":  [
                                      "Royal Recipe",
                                      "Mild-Spicy",
                                      "Authentic Desi"
                                  ],
                      "spiceLevel":  "Medium (Aromatic)",
                      "prepTime":  "25-30 mins",
                      "portions":  [
                                       {
                                           "name":  "Half Handi (Serves 1-2)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Full Handi (Serves 3-4)",
                                           "priceDelta":  3.51
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Hot Roghani Naan Pairing",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "dhaka-style-fried-fish-8pcs",
                      "title":  "112. Dhaka-style Fried Fish (8 Pcs)",
                      "subtitle":  "Crisp golden fish fillets in Dhaka\u0027s signature spice blend",
                      "category":  "seafood",
                      "price":  13.3333,
                      "rating":  4.96,
                      "reviewsCount":  118,
                      "badge":  "Signature Fish",
                      "featured":  true,
                      "image":  "assets/images/dhaka-fried-fish.jpg",
                      "gallery":  [
                                      "assets/images/dhaka-fried-fish.jpg"
                                  ],
                      "description":  "Fresh river fish fillets marinated in crushed whole coriander, carom seeds (ajwain), red chilies, garlic, and gram flour batter, fried to a golden crisp. Served with tart tartar dip and lemon.",
                      "dietary":  [
                                      "Fresh Fish",
                                      "Crispy Crust",
                                      "High Protein"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "8 Pieces Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Tartar Dip",
                                         "price":  0.35
                                     }
                                 ]
                  },
                  {
                      "id":  "crispy-fish-fingers-12pcs",
                      "title":  "113. Crispy Fish Fingers (12 Pcs)",
                      "subtitle":  "Tender fish strips coated in seasoned crumbs with tartar dip",
                      "category":  "seafood",
                      "price":  13.3333,
                      "rating":  4.9,
                      "reviewsCount":  85,
                      "badge":  "Crispy Favorite",
                      "featured":  false,
                      "image":  "assets/images/crispy-fish-fingers.jpg",
                      "gallery":  [
                                      "assets/images/crispy-fish-fingers.jpg"
                                  ],
                      "description":  "Tender strips of fresh white fish fillets rolled in seasoned herb breadcrumbs, fried until golden and crunchy outside while remaining flaky inside. Served with fries.",
                      "dietary":  [
                                      "Finger Food",
                                      "Served with Tartar"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "15-20 mins",
                      "portions":  [
                                       {
                                           "name":  "12 Pcs Platter with Fries",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "grilled-fish-fillet-2pcs",
                      "title":  "115. Grilled Fish Fillet (2 Pcs)",
                      "subtitle":  "Chargrilled fillet brushed with olive oil and herbs",
                      "category":  "seafood",
                      "price":  13.3333,
                      "rating":  4.95,
                      "reviewsCount":  92,
                      "badge":  "Healthy Grill",
                      "featured":  false,
                      "image":  "assets/images/herb-grilled-fish-fillet.jpg",
                      "gallery":  [
                                      "assets/images/herb-grilled-fish-fillet.jpg"
                                  ],
                      "description":  "Prime cuts of fresh fish fillet brushed with lemon butter, extra virgin olive oil, garlic, and fresh herbs, char-grilled over embers for a tender smoky texture.",
                      "dietary":  [
                                      "Low Carb",
                                      "Heart Healthy",
                                      "Gluten-Free"
                                  ],
                      "spiceLevel":  "Mild to Zesty",
                      "prepTime":  "20-25 mins",
                      "portions":  [
                                       {
                                           "name":  "Pair of Large Fillets",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "classic-chicken-biryani",
                      "title":  "119. Classic Chicken Biryani",
                      "subtitle":  "Aromatic basmati layered with chicken and saffron masala",
                      "category":  "rice",
                      "price":  3.86,
                      "rating":  4.95,
                      "reviewsCount":  180,
                      "badge":  "Biryani Star",
                      "featured":  true,
                      "image":  "assets/images/royal-chicken-biryani.jpg",
                      "gallery":  [
                                      "assets/images/royal-chicken-biryani.jpg"
                                  ],
                      "description":  "Long-grain aged basmati rice dum-cooked with tender marinated chicken, saffron milk, dried plums (aloo bukhara), kewra water, and whole fragrant spices. Served with mint raita.",
                      "dietary":  [
                                      "Aged Basmati",
                                      "Dum Cooked"
                                  ],
                      "spiceLevel":  "Spicy \u0026 Aromatic (2/3)",
                      "prepTime":  "15 mins",
                      "portions":  [
                                       {
                                           "name":  "Platter (Serves 1-2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Mint Raita Bowl",
                                         "price":  0.5965
                                     }
                                 ]
                  },
                  {
                      "id":  "chicken-fried-rice",
                      "title":  "120. Chicken Fried Rice",
                      "subtitle":  "Wok-tossed basmati rice with chicken, egg, and fresh vegetables",
                      "category":  "rice",
                      "price":  4.9123,
                      "rating":  4.9,
                      "reviewsCount":  135,
                      "badge":  "Wok Master",
                      "featured":  false,
                      "image":  "assets/images/chicken-fried-rice.jpg",
                      "gallery":  [
                                      "assets/images/chicken-fried-rice.jpg"
                                  ],
                      "description":  "High-heat wok-tossed long-grain basmati with diced chicken, scrambled eggs, sweet carrots, scallions, and delicate soy seasoning.",
                      "dietary":  [
                                      "Chinese Wok Tossed",
                                      "Popular"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "15 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Wok Platter (Serves 3-4)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Platter (Serves 1-2)",
                                           "priceDelta":  -1.6491000000000002
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-masala-rice",
                      "title":  "122. Chicken Masala Rice",
                      "subtitle":  "Spicy masala rice blended with tender chicken and Desi seasoning",
                      "category":  "rice",
                      "price":  4.9123,
                      "rating":  4.88,
                      "reviewsCount":  94,
                      "badge":  "Desi Heat",
                      "featured":  false,
                      "image":  "assets/images/chicken-masala-rice.jpg",
                      "gallery":  [
                                      "assets/images/chicken-masala-rice.jpg"
                                  ],
                      "description":  "Basmati rice wok-seared with spicy boneless chicken, tomatoes, caramelized onions, green chilies, and roasted garam masala.",
                      "dietary":  [
                                      "Desi Spiced",
                                      "Hearty"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "15 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Platter (Serves 3-4)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Platter (Serves 1-2)",
                                           "priceDelta":  -1.6491000000000002
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "egg-fried-rice",
                      "title":  "124. Egg Fried Rice",
                      "subtitle":  "Golden rice tossed with egg, garlic, and subtle soy hint",
                      "category":  "rice",
                      "price":  4.21,
                      "rating":  4.85,
                      "reviewsCount":  78,
                      "badge":  "Oriental Classic",
                      "featured":  false,
                      "image":  "assets/images/egg-fried-rice.jpg",
                      "gallery":  [
                                      "assets/images/egg-fried-rice.jpg"
                                  ],
                      "description":  "Fragrant rice tossed with fluffy whisked egg curds, toasted garlic, spring onions, and light soy sauce.",
                      "dietary":  [
                                      "Vegetarian Option",
                                      "Wok Tossed"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "12 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Bowl (Serves 3-4)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Bowl (Serves 1-2)",
                                           "priceDelta":  -1.4731999999999998
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-shashlik-rice",
                      "title":  "126. Chicken Shashlik Rice",
                      "subtitle":  "Flame-grilled chicken skewers atop fried rice with tangy sauce",
                      "category":  "rice",
                      "price":  6.7719,
                      "rating":  4.95,
                      "reviewsCount":  110,
                      "badge":  "Shashlik Special",
                      "featured":  false,
                      "image":  "assets/images/chicken-shashlik-rice.jpg",
                      "gallery":  [
                                      "assets/images/chicken-shashlik-rice.jpg"
                                  ],
                      "description":  "Tender skewers of marinated chicken, tomatoes, onions, and bell peppers grilled and served over vegetable fried rice with sweet \u0026 sour shashlik sauce.",
                      "dietary":  [
                                      "Complete Meal",
                                      "Tangy Sauce"
                                  ],
                      "spiceLevel":  "Mild to Tangy",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "Grand Shashlik Rice Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "vegetable-fried-rice",
                      "title":  "127. Vegetable Fried Rice",
                      "subtitle":  "Colorful stir-fried vegetables with seasoned basmati",
                      "category":  "rice",
                      "price":  4.21,
                      "rating":  4.8,
                      "reviewsCount":  60,
                      "badge":  "Vegetarian",
                      "featured":  false,
                      "image":  "assets/images/royal-chicken-biryani.jpg",
                      "gallery":  [
                                      "assets/images/royal-chicken-biryani.jpg"
                                  ],
                      "description":  "Crisp diced bell peppers, sweet carrots, cabbage, and peas wok-tossed with fluffy basmati rice and sesame oil.",
                      "dietary":  [
                                      "Vegan",
                                      "Healthy"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "12 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Platter (Serves 3-4)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Platter (Serves 1-2)",
                                           "priceDelta":  -1.4731999999999998
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "kalwanji-naan",
                      "title":  "135. Kalwanji Naan",
                      "subtitle":  "Soft naan sprinkled with black nigella seeds for nutty aroma",
                      "category":  "naans",
                      "price":  0.42,
                      "rating":  4.88,
                      "reviewsCount":  92,
                      "badge":  "Aromatic Naan",
                      "featured":  false,
                      "image":  "assets/images/kalwanji-naan.jpg",
                      "gallery":  [
                                      "assets/images/kalwanji-naan.jpg"
                                  ],
                      "description":  "Traditional leavened flatbread sprinkled with healing black nigella seeds (kalonji) and baked inside blazing clay tandoor walls.",
                      "dietary":  [
                                      "Tandoor Fresh",
                                      "Vegetarian"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Kalonji Naan",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "individual-roghani-naan",
                      "title":  "136. Traditional Roghni Sesame Naan",
                      "subtitle":  "Buttery, golden naan baked to delicate perfection",
                      "category":  "naans",
                      "price":  0.35,
                      "rating":  4.95,
                      "reviewsCount":  180,
                      "badge":  "House Favorite",
                      "featured":  true,
                      "image":  "assets/images/tandoori-garlic-roghni-naan.jpg",
                      "gallery":  [
                                      "assets/images/tandoori-garlic-roghni-naan.jpg"
                                  ],
                      "description":  "Hand-stretched artisan naan studded with white sesame seeds, scored lightly and baked golden, finished with melted desi makhan butter.",
                      "dietary":  [
                                      "Desi Butter",
                                      "Clay Oven Fresh"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Roghni Naan",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Pack of 3 Naans",
                                           "priceDelta":  0.7
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "ginger-naan",
                      "title":  "137. Ginger Naan",
                      "subtitle":  "Fresh ginger and mild aromatic spice",
                      "category":  "naans",
                      "price":  0.42,
                      "rating":  4.85,
                      "reviewsCount":  65,
                      "badge":  "Zingy Crust",
                      "featured":  false,
                      "image":  "assets/images/ginger-naan.jpg",
                      "gallery":  [
                                      "assets/images/ginger-naan.jpg"
                                  ],
                      "description":  "Topped with finely grated ginger and fresh coriander, baked hot against tandoor walls with a light butter glaze.",
                      "dietary":  [
                                      "Ginger Infused",
                                      "Tandoor Baked"
                                  ],
                      "spiceLevel":  "Mild Ginger Heat",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Naan",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "garlic-naan",
                      "title":  "138. Garlic Naan",
                      "subtitle":  "Signature tandoori naan infused with roasted garlic butter",
                      "category":  "naans",
                      "price":  0.42,
                      "rating":  4.95,
                      "reviewsCount":  150,
                      "badge":  "Top Seller",
                      "featured":  false,
                      "image":  "assets/images/tandoori-garlic-roghni-naan.jpg",
                      "gallery":  [
                                      "assets/images/tandoori-garlic-roghni-naan.jpg"
                                  ],
                      "description":  "Fresh minced garlic and cilantro pressed into leavened dough, baked blistered in clay oven and glazed generously with butter.",
                      "dietary":  [
                                      "Garlic Butter",
                                      "Clay Oven Fresh"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Garlic Naan",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "lahori-kulcha",
                      "title":  "139. Lahori Kulcha",
                      "subtitle":  "Crisp and fluffy flatbread, a Lahori classic from the Tandoor",
                      "category":  "naans",
                      "price":  0.2456,
                      "rating":  4.88,
                      "reviewsCount":  110,
                      "badge":  "Lahori Classic",
                      "featured":  false,
                      "image":  "assets/images/lahori-kulcha.jpg",
                      "gallery":  [
                                      "assets/images/lahori-kulcha.jpg"
                                  ],
                      "description":  "Traditional thick, fluffy flatbread baked in the tandoor with sesame seeds. Perfect accompaniment to chana, nihari, or karahi.",
                      "dietary":  [
                                      "Lahori Heritage",
                                      "Fluffy"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Kulcha",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "tandoori-paratha",
                      "title":  "140. Tandoori Paratha",
                      "subtitle":  "Flaky whole-wheat paratha cooked with desi ghee in the tandoor",
                      "category":  "naans",
                      "price":  0.42,
                      "rating":  4.9,
                      "reviewsCount":  105,
                      "badge":  "Desi Ghee",
                      "featured":  false,
                      "image":  "assets/images/tandoori-paratha.jpg",
                      "gallery":  [
                                      "assets/images/tandoori-paratha.jpg"
                                  ],
                      "description":  "Multi-layered flaky paratha brushed with pure desi ghee and baked in the blazing heat of the tandoor.",
                      "dietary":  [
                                      "Desi Ghee",
                                      "Flaky"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Paratha",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "achari-paratha",
                      "title":  "141. Achari Paratha",
                      "subtitle":  "Tangy, spiced paratha infused with traditional achar flavors",
                      "category":  "naans",
                      "price":  0.51,
                      "rating":  4.85,
                      "reviewsCount":  75,
                      "badge":  "Tangy Twist",
                      "featured":  false,
                      "image":  "assets/images/achari-paratha.jpg",
                      "gallery":  [
                                      "assets/images/achari-paratha.jpg"
                                  ],
                      "description":  "Layered paratha dough folded with spicy mango achar oil, fenugreek, and crushed cumin, baked crisp.",
                      "dietary":  [
                                      "Tangy Spiced",
                                      "Tandoor Baked"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Single Achari Paratha",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "tandoori-roti-per-head",
                      "title":  "142. Tandoori Roti (Per Head)",
                      "subtitle":  "Freshly cooked whole-wheat roti straight from the clay oven",
                      "category":  "naans",
                      "price":  0.49,
                      "rating":  4.8,
                      "reviewsCount":  130,
                      "badge":  "Clay Oven",
                      "featured":  false,
                      "image":  "assets/images/special-artisan-nans.jpg",
                      "gallery":  [
                                      "assets/images/special-artisan-nans.jpg"
                                  ],
                      "description":  "Piping hot whole wheat flatbread baked on the clay tandoor wall. Wholesome and light.",
                      "dietary":  [
                                      "Whole Wheat",
                                      "Low Fat"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Per Head Serving",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "special-artisan-nans-platter",
                      "title":  "Special Artisan Tandoor Naans Platter",
                      "subtitle":  "Four Master Breads Straight from the Clay Oven",
                      "category":  "naans",
                      "price":  1.75,
                      "rating":  4.9,
                      "reviewsCount":  184,
                      "badge":  "Signature Bake",
                      "featured":  false,
                      "image":  "assets/images/tandoori-garlic-roghni-naan.jpg",
                      "gallery":  [
                                      "assets/images/tandoori-garlic-roghni-naan.jpg"
                                  ],
                      "description":  "A showcase basket of Shangrilla\u0027s finest freshly baked tandoori breads: Roghani Naan with sesame seeds, Kalonji Naan, Garlic Naan, and Tandoori Paratha with mint raita.",
                      "dietary":  [
                                      "Clay Oven Fresh",
                                      "Bestseller"
                                  ],
                      "spiceLevel":  "Non-Spicy",
                      "prepTime":  "10-12 mins",
                      "portions":  [
                                       {
                                           "name":  "Sampler Basket (4 Breads)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "crispy-chicken-drumsticks-8pcs",
                      "title":  "151. Crispy Chicken Drumsticks (8 Pcs)",
                      "subtitle":  "Golden-fried chicken drumsticks glazed in mild Oriental spice",
                      "category":  "chinese",
                      "price":  8.49,
                      "rating":  4.92,
                      "reviewsCount":  88,
                      "badge":  "Oriental Crunch",
                      "featured":  true,
                      "image":  "assets/images/crispy-drumsticks-manchurian.jpg",
                      "gallery":  [
                                      "assets/images/crispy-drumsticks-manchurian.jpg"
                                  ],
                      "description":  "Tender chicken drumsticks batter-fried to a golden crisp, tossed with scallions, garlic, and savory Chinese glaze.",
                      "dietary":  [
                                      "Crispy",
                                      "Oriental Style"
                                  ],
                      "spiceLevel":  "Mild to Zesty",
                      "prepTime":  "20 mins",
                      "portions":  [
                                       {
                                           "name":  "8 Pieces Platter",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Half Portion (4 Pcs)",
                                           "priceDelta":  -3.4023000000000003
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-chilli-dry",
                      "title":  "153. Chicken Chilli Dry",
                      "subtitle":  "Crispy fried chicken infused with signature chili blend and scallions",
                      "category":  "chinese",
                      "price":  7.0175,
                      "rating":  4.95,
                      "reviewsCount":  160,
                      "badge":  "Chinese Favorite",
                      "featured":  false,
                      "image":  "assets/images/chicken-chilli-dry.jpg",
                      "gallery":  [
                                      "assets/images/chicken-chilli-dry.jpg"
                                  ],
                      "description":  "Crispy coated boneless chicken strips flash-fried in a roaring wok with sliced green chilies, ginger batons, garlic, and savory dark soy.",
                      "dietary":  [
                                      "Wok-Tossed",
                                      "Spicy"
                                  ],
                      "spiceLevel":  "Spicy (2.5/3)",
                      "prepTime":  "18 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Wok Plate (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Egg Fried Rice Pairing",
                                         "price":  2.7368
                                     }
                                 ]
                  },
                  {
                      "id":  "chicken-chow-mein",
                      "title":  "154. Chicken Chow Mein",
                      "subtitle":  "Classic noodles stir-fried with chicken, vegetables, and soy glaze",
                      "category":  "chinese",
                      "price":  3.86,
                      "rating":  4.9,
                      "reviewsCount":  140,
                      "badge":  "Classic Noodles",
                      "featured":  true,
                      "image":  "assets/images/chicken-chow-mein.jpg",
                      "gallery":  [
                                      "assets/images/chicken-chow-mein.jpg"
                                  ],
                      "description":  "Artisan egg noodles wok-tossed with shredded chicken, crunchy carrots, cabbage, capsicum, and our secret blend of light and dark soy sauces.",
                      "dietary":  [
                                      "Wok Fried Noodles",
                                      "Kids \u0026 Family"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "15 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Chow Mein Bowl (Serves 2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-manchurian",
                      "title":  "155. Chicken Manchurian",
                      "subtitle":  "Crispy chicken bites in a tangy Indo-Chinese Manchurian sauce",
                      "category":  "chinese",
                      "price":  7.0175,
                      "rating":  4.92,
                      "reviewsCount":  155,
                      "badge":  "Saucy Star",
                      "featured":  false,
                      "image":  "assets/images/chicken-manchurian.jpg",
                      "gallery":  [
                                      "assets/images/chicken-manchurian.jpg"
                                  ],
                      "description":  "Tender battered chicken bites simmered in garlic, ginger, green chilies, and tangy tomato Manchurian gravy. Perfect with egg fried rice.",
                      "dietary":  [
                                      "Indo-Chinese",
                                      "Rich Gravy"
                                  ],
                      "spiceLevel":  "Medium Tangy Spicy",
                      "prepTime":  "18 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Fried Rice Pairing",
                                         "price":  2.7368
                                     }
                                 ]
                  },
                  {
                      "id":  "sweet-and-sour-pineapple-chicken",
                      "title":  "156. Sweet \u0026 Sour Pineapple Chicken",
                      "subtitle":  "Juicy chicken tossed in sweet and tangy pineapple reduction",
                      "category":  "chinese",
                      "price":  8.0,
                      "rating":  4.88,
                      "reviewsCount":  85,
                      "badge":  "Sweet \u0026 Tangy",
                      "featured":  false,
                      "image":  "assets/images/sweet-and-sour-chicken.jpg",
                      "gallery":  [
                                      "assets/images/sweet-and-sour-chicken.jpg"
                                  ],
                      "description":  "Golden chicken fillets, pineapple chunks, bell peppers, and sweet onions tossed in our authentic sweet and sour glaze.",
                      "dietary":  [
                                      "Sweet \u0026 Tangy",
                                      "Kid Friendly"
                                  ],
                      "spiceLevel":  "Mild Sweet",
                      "prepTime":  "18 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-with-almonds",
                      "title":  "157. Chicken With Almonds",
                      "subtitle":  "Stir-fried chicken with roasted almonds and aromatic soy glaze",
                      "category":  "chinese",
                      "price":  7.3333,
                      "rating":  4.9,
                      "reviewsCount":  72,
                      "badge":  "Nutty Glaze",
                      "featured":  false,
                      "image":  "assets/images/chicken-with-almonds.jpg",
                      "gallery":  [
                                      "assets/images/chicken-with-almonds.jpg"
                                  ],
                      "description":  "Tender chicken cubes stir-fried in a savory light soy sauce with crunchy toasted whole almonds, scallions, and water chestnuts.",
                      "dietary":  [
                                      "Toasted Almonds",
                                      "High Protein"
                                  ],
                      "spiceLevel":  "Mild to Savory",
                      "prepTime":  "18 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-in-oyster-sauce",
                      "title":  "158. Chicken In Oyster Sauce",
                      "subtitle":  "Succulent chicken in a savory oyster-infused brown sauce",
                      "category":  "chinese",
                      "price":  7.3333,
                      "rating":  4.88,
                      "reviewsCount":  65,
                      "badge":  "Savory Umami",
                      "featured":  false,
                      "image":  "assets/images/chicken-in-oyster-sauce.jpg",
                      "gallery":  [
                                      "assets/images/chicken-in-oyster-sauce.jpg"
                                  ],
                      "description":  "Thin chicken slices braised with fresh button mushrooms, broccoli florets, and ginger in rich oyster sauce reduction.",
                      "dietary":  [
                                      "Umami Rich",
                                      "Cantonese"
                                  ],
                      "spiceLevel":  "Mild Savory",
                      "prepTime":  "18 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chicken-with-cashew-nuts",
                      "title":  "159. Chicken With Cashew Nuts",
                      "subtitle":  "Wok-tossed chicken and cashews in flavorful ginger-garlic sauce",
                      "category":  "chinese",
                      "price":  7.86,
                      "rating":  4.94,
                      "reviewsCount":  98,
                      "badge":  "Cashew Crunch",
                      "featured":  false,
                      "image":  "assets/images/chicken-with-cashew-nuts.jpg",
                      "gallery":  [
                                      "assets/images/chicken-with-cashew-nuts.jpg"
                                  ],
                      "description":  "Crisp roasted cashew nuts and boneless chicken cubes wok-tossed with chili peppers, bamboo shoots, and ginger-garlic sauce.",
                      "dietary":  [
                                      "Cashew Nuts",
                                      "Chef Favorite"
                                  ],
                      "spiceLevel":  "Medium Spicy",
                      "prepTime":  "18 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Bowl (Serves 2-3)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "honey-glazed-chicken-wings-12pcs",
                      "title":  "160. Honey Glazed Chicken Wings (12 Pcs)",
                      "subtitle":  "Crispy wings coated in sweet honey and chili glaze",
                      "category":  "chinese",
                      "price":  5.614,
                      "rating":  4.9,
                      "reviewsCount":  82,
                      "badge":  "Honey Glazed",
                      "featured":  false,
                      "image":  "assets/images/crispy-wings-fries.jpg",
                      "gallery":  [
                                      "assets/images/crispy-wings-fries.jpg"
                                  ],
                      "description":  "12 crispy fried chicken wingettes tossed in real honey, chili flakes, roasted sesame seeds, and sweet soy glaze.",
                      "dietary":  [
                                      "Sweet \u0026 Sticky",
                                      "12 Pieces"
                                  ],
                      "spiceLevel":  "Mild to Sweet Spicy",
                      "prepTime":  "18 mins",
                      "portions":  [
                                       {
                                           "name":  "12 Pieces Platter",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "garlic-and-mushroom-chicken",
                      "title":  "161. Garlic \u0026 Mushroom Chicken",
                      "subtitle":  "Tender chicken strips sautéed with garlic and mushrooms in light soy",
                      "category":  "chinese",
                      "price":  6.5263,
                      "rating":  4.88,
                      "reviewsCount":  64,
                      "badge":  "Garlic Mushroom",
                      "featured":  false,
                      "image":  "assets/images/garlic-mushroom-chicken.jpg",
                      "gallery":  [
                                      "assets/images/garlic-mushroom-chicken.jpg"
                                  ],
                      "description":  "Thin chicken breast slices stir-fried with fragrant crushed garlic, fresh button mushrooms, spring onions, and light soy broth.",
                      "dietary":  [
                                      "Light \u0026 Savory",
                                      "Low Oil"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "15-18 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Bowl (Serves 2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "stir-fried-chicken-with-vegetables",
                      "title":  "162. Stir-Fried Chicken with Vegetables",
                      "subtitle":  "Lean chicken tossed with seasonal greens and sesame hint",
                      "category":  "chinese",
                      "price":  5.44,
                      "rating":  4.85,
                      "reviewsCount":  58,
                      "badge":  "Healthy Choice",
                      "featured":  false,
                      "image":  "assets/images/stir-fried-vegetables-chicken.jpg",
                      "gallery":  [
                                      "assets/images/stir-fried-vegetables-chicken.jpg"
                                  ],
                      "description":  "Flash-fried lean chicken fillets with baby corn, mushrooms, snow peas, broccoli, and carrots in a light sesame-scented sauce.",
                      "dietary":  [
                                      "High Protein",
                                      "Garden Greens"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "15 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Bowl (Serves 2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "beef-chilli-dry",
                      "title":  "163. Beef Chilli Dry",
                      "subtitle":  "Spicy wok-tossed beef with garlic and green chilies",
                      "category":  "chinese",
                      "price":  7.37,
                      "rating":  4.94,
                      "reviewsCount":  112,
                      "badge":  "Spicy Beef",
                      "featured":  false,
                      "image":  "assets/images/beef-chilli-dry.jpg",
                      "gallery":  [
                                      "assets/images/beef-chilli-dry.jpg"
                                  ],
                      "description":  "Prime undercut beef strips flash-fried crisp on high heat with slivered ginger, garlic, fiery green chilies, and dark soy.",
                      "dietary":  [
                                      "Prime Beef",
                                      "High Heat Wok"
                                  ],
                      "spiceLevel":  "Spicy (3/3)",
                      "prepTime":  "18 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Plate (Serves 2)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "pina-colada",
                      "title":  "171. Pina Colada",
                      "subtitle":  "A tropical fusion of pineapple, coconut, and crushed ice bliss",
                      "category":  "beverages",
                      "price":  1.193,
                      "rating":  4.95,
                      "reviewsCount":  120,
                      "badge":  "Bar Special",
                      "featured":  false,
                      "image":  "assets/images/gourmet-milkshake-refresher.jpg",
                      "gallery":  [
                                      "assets/images/gourmet-milkshake-refresher.jpg"
                                  ],
                      "description":  "Creamy coconut cream, fresh pineapple juice, and crushed ice whipped into a frosty tropical treat topped with a pineapple wedge.",
                      "dietary":  [
                                      "Chilled",
                                      "Tropical"
                                  ],
                      "spiceLevel":  "Sweet Tropical",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Tall Cocktail Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "pink-lady",
                      "title":  "172. Pink Lady",
                      "subtitle":  "Refreshing blend of citrus, grenadine, and creamy notes",
                      "category":  "beverages",
                      "price":  1.193,
                      "rating":  4.9,
                      "reviewsCount":  75,
                      "badge":  "Berry Splash",
                      "featured":  false,
                      "image":  "assets/images/pink-lady-mocktail.jpg",
                      "gallery":  [
                                      "assets/images/pink-lady-mocktail.jpg"
                                  ],
                      "description":  "Sweet pomegranate grenadine, lemon juice, soda, and sweet cream shaken over ice for a beautiful blushing refresher.",
                      "dietary":  [
                                      "Chilled Mocktail"
                                  ],
                      "spiceLevel":  "Fruity Sweet",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Tall Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "spanish-margarita",
                      "title":  "173. Spanish Margarita",
                      "subtitle":  "Zesty lemon and tangy orange balanced with a salty rim",
                      "category":  "beverages",
                      "price":  1.1579,
                      "rating":  4.92,
                      "reviewsCount":  94,
                      "badge":  "Citrus Zest",
                      "featured":  false,
                      "image":  "assets/images/spanish-margarita.jpg",
                      "gallery":  [
                                      "assets/images/spanish-margarita.jpg"
                                  ],
                      "description":  "A frosty blend of fresh lime juice, orange zest, crushed ice, and sparkling soda with a salted Himalayan crystal glass rim.",
                      "dietary":  [
                                      "Citrus Zest",
                                      "Refreshing"
                                  ],
                      "spiceLevel":  "Tangy \u0026 Zesty",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Glass",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Diet (Sugar-Free)",
                                           "priceDelta":  0.03510000000000013
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "classic-lemonade",
                      "title":  "174. Classic Lemonade",
                      "subtitle":  "Freshly squeezed lemon with chilled soda and mint hint",
                      "category":  "beverages",
                      "price":  1.49,
                      "rating":  4.95,
                      "reviewsCount":  115,
                      "badge":  "Minty Fresh",
                      "featured":  false,
                      "image":  "assets/images/classic-lemonade.jpg",
                      "gallery":  [
                                      "assets/images/classic-lemonade.jpg"
                                  ],
                      "description":  "Fresh lemons squeezed to order, shaken with wild mint leaves, black Himalayan salt, sugar syrup, and chilled bubbling soda.",
                      "dietary":  [
                                      "Fresh Mint",
                                      "Cooler"
                                  ],
                      "spiceLevel":  "Sweet \u0026 Tart",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Tall Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "kiwi-lemonade",
                      "title":  "186. Kiwi Lemonade",
                      "subtitle":  "Vibrant green kiwi blend with tangy lemon",
                      "category":  "beverages",
                      "price":  0.9649,
                      "rating":  4.88,
                      "reviewsCount":  65,
                      "badge":  "Kiwi Cooler",
                      "featured":  false,
                      "image":  "assets/images/sparkling-kiwi-lemonade.jpg",
                      "gallery":  [
                                      "assets/images/sparkling-kiwi-lemonade.jpg"
                                  ],
                      "description":  "Crushed green kiwi pulp shaken with fresh lemon juice and chilled soda water. Tangy, vibrant, and thirst-quenching.",
                      "dietary":  [
                                      "Fruity",
                                      "Chilled"
                                  ],
                      "spiceLevel":  "Tangy",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "fruity-mix-lemonade",
                      "title":  "187. Fruity Mix Lemonade",
                      "subtitle":  "A medley of exotic fruit flavors with lime zest",
                      "category":  "beverages",
                      "price":  0.9649,
                      "rating":  4.88,
                      "reviewsCount":  58,
                      "badge":  "Exotic Medley",
                      "featured":  false,
                      "image":  "assets/images/signature-drinks.jpg",
                      "gallery":  [
                                      "assets/images/signature-drinks.jpg"
                                  ],
                      "description":  "Blended fruit nectar of passionfruit, peach, and strawberry finished with fresh lime juice and crushed ice.",
                      "dietary":  [
                                      "Fruity",
                                      "Refreshing"
                                  ],
                      "spiceLevel":  "Sweet Zest",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "blue-lemonade",
                      "title":  "188. Blue Lemonade",
                      "subtitle":  "Electric blue citrus cooler with a hint of mint",
                      "category":  "beverages",
                      "price":  0.9649,
                      "rating":  4.9,
                      "reviewsCount":  82,
                      "badge":  "Electric Blue",
                      "featured":  false,
                      "image":  "assets/images/electric-blue-lemonade.jpg",
                      "gallery":  [
                                      "assets/images/electric-blue-lemonade.jpg"
                                  ],
                      "description":  "Blue Curacao syrup, fresh lemon juice, sparkling soda, and fresh mint leaves over ice. Visually stunning and crisp.",
                      "dietary":  [
                                      "Chilled Mocktail"
                                  ],
                      "spiceLevel":  "Citrus Sweet",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Tall Highball Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "cold-drink-1ltr",
                      "title":  "189. Cold Drink 1 Ltr",
                      "subtitle":  "Refreshing carbonated beverage (Coke / Sprite / Fanta)",
                      "category":  "beverages",
                      "price":  0.7719,
                      "rating":  4.8,
                      "reviewsCount":  110,
                      "badge":  "1 Litre Bottle",
                      "featured":  false,
                      "image":  "assets/images/signature-drinks.jpg",
                      "gallery":  [
                                      "assets/images/signature-drinks.jpg"
                                  ],
                      "description":  "1 Litre chilled bottle of your favorite soda: Coca Cola, Sprite, Fanta, or Diet Coke.",
                      "dietary":  [
                                      "1 Litre",
                                      "Chilled"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "2 mins",
                      "portions":  [
                                       {
                                           "name":  "1 Litre Bottle",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "mineral-water",
                      "title":  "190. Mineral Water",
                      "subtitle":  "Pure bottled water (served chilled)",
                      "category":  "beverages",
                      "price":  0.51,
                      "rating":  4.9,
                      "reviewsCount":  120,
                      "badge":  "Hydration",
                      "featured":  false,
                      "image":  "assets/images/signature-drinks.jpg",
                      "gallery":  [
                                      "assets/images/signature-drinks.jpg"
                                  ],
                      "description":  "Chilled sealed premium mineral drinking water bottle.",
                      "dietary":  [
                                      "Pure Water",
                                      "Zero Calorie"
                                  ],
                      "spiceLevel":  "Neutral",
                      "prepTime":  "1 min",
                      "portions":  [
                                       {
                                           "name":  "1.5L Large Bottle",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "classic-soft-drinks-regular",
                      "title":  "191. Classic Soft Drinks (Regular)",
                      "subtitle":  "Refreshing carbonated beverages (Coke, Sprite, Fanta)",
                      "category":  "beverages",
                      "price":  0.35,
                      "rating":  4.8,
                      "reviewsCount":  140,
                      "badge":  "Chilled Soda",
                      "featured":  false,
                      "image":  "assets/images/signature-drinks.jpg",
                      "gallery":  [
                                      "assets/images/signature-drinks.jpg"
                                  ],
                      "description":  "Chilled glass/bottle of classic soft drinks: Coca Cola, Sprite, or Fanta.",
                      "dietary":  [
                                      "Chilled"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "2 mins",
                      "portions":  [
                                       {
                                           "name":  "Regular Serving",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "cold-drink-can",
                      "title":  "192. Cold Drink (Can)",
                      "subtitle":  "Chilled soft drink served in tin pack (Coke, Sprite, Fanta)",
                      "category":  "beverages",
                      "price":  0.56,
                      "rating":  4.85,
                      "reviewsCount":  95,
                      "badge":  "250ml Can",
                      "featured":  false,
                      "image":  "assets/images/signature-drinks.jpg",
                      "gallery":  [
                                      "assets/images/signature-drinks.jpg"
                                  ],
                      "description":  "250ml chilled aluminium can of your choice: Coke, Sprite, Fanta, or Diet soft drink.",
                      "dietary":  [
                                      "Chilled Can"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "2 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Can",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Diet Can",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "lassi-jug",
                      "title":  "194. Lassi (Jug)",
                      "subtitle":  "Rich yogurt-based drink, smooth and refreshing (Sweet / Salted)",
                      "category":  "beverages",
                      "price":  1.58,
                      "rating":  4.96,
                      "reviewsCount":  115,
                      "badge":  "Desi Quencher",
                      "featured":  false,
                      "image":  "assets/images/punjabi-lassi-jug.jpg",
                      "gallery":  [
                                      "assets/images/punjabi-lassi-jug.jpg"
                                  ],
                      "description":  "Authentic full jug of thick Punjabi lassi whipped from farm curd and cream, available either Sweet with cardamom or Salted with roasted cumin.",
                      "dietary":  [
                                      "Serves 3-4",
                                      "Traditional Curd"
                                  ],
                      "spiceLevel":  "Sweet or Salted",
                      "prepTime":  "5-8 mins",
                      "portions":  [
                                       {
                                           "name":  "Full Jug (Serves 3-4)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "fresh-lime-cooler",
                      "title":  "195. Fresh Lime",
                      "subtitle":  "Citrusy fresh lime cooler (Water / Sprite / Diet Sprite)",
                      "category":  "beverages",
                      "price":  0.7719,
                      "rating":  4.9,
                      "reviewsCount":  105,
                      "badge":  "Thirst Quencher",
                      "featured":  false,
                      "image":  "assets/images/classic-fresh-lime-cooler.jpg",
                      "gallery":  [
                                      "assets/images/classic-fresh-lime-cooler.jpg"
                                  ],
                      "description":  "Freshly squeezed lime juice with crushed ice and your choice of base: Sparkling Water, Sweet Sprite, or Diet Sprite.",
                      "dietary":  [
                                      "Zesty",
                                      "Digestive"
                                  ],
                      "spiceLevel":  "Citrus Zest",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Chilled Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "nestle-juice",
                      "title":  "199. Nestlé Juice",
                      "subtitle":  "Ready-to-serve fruit juice selection (Apple, Orange, Mango)",
                      "category":  "beverages",
                      "price":  0.63,
                      "rating":  4.8,
                      "reviewsCount":  50,
                      "badge":  "Fruit Juice",
                      "featured":  false,
                      "image":  "assets/images/signature-drinks.jpg",
                      "gallery":  [
                                      "assets/images/signature-drinks.jpg"
                                  ],
                      "description":  "Chilled premium 200ml fruit juice pack from Nestlé: Chaunsa Mango, Red Apple, or Citrus Orange.",
                      "dietary":  [
                                      "Vitamin C",
                                      "Kid Friendly"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "2 mins",
                      "portions":  [
                                       {
                                           "name":  "Individual Pack",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "fresh-seasonal-juice",
                      "title":  "200. Fresh Seasonal Juice",
                      "subtitle":  "Extracted from fresh fruits of the season",
                      "category":  "beverages",
                      "price":  1.193,
                      "rating":  4.95,
                      "reviewsCount":  85,
                      "badge":  "100% Pure",
                      "featured":  false,
                      "image":  "assets/images/fresh-seasonal-juice.jpg",
                      "gallery":  [
                                      "assets/images/fresh-seasonal-juice.jpg"
                                  ],
                      "description":  "Pure unadulterated fruit juice pressed to order: Sweet Orange, Pomegranate, or Apple according to current market harvest.",
                      "dietary":  [
                                      "100% Natural",
                                      "No Added Sugar"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Tall Chilled Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "gourmet-shakes-selection",
                      "title":  "211. Shangrilla Gourmet Milkshakes",
                      "subtitle":  "Thick ice cream shakes (Oreo, Vanilla, Strawberry, Chocolate)",
                      "category":  "beverages",
                      "price":  1.37,
                      "rating":  4.95,
                      "reviewsCount":  140,
                      "badge":  "Creamy Thick",
                      "featured":  true,
                      "image":  "assets/images/gourmet-milkshake-refresher.jpg",
                      "gallery":  [
                                      "assets/images/gourmet-milkshake-refresher.jpg"
                                  ],
                      "description":  "Decadent ultra-thick ice cream shakes whipped with dairy cream and toppings: Oreo Vanilla Crunch, Oreo Chocolate Fudge, Ripe Strawberry, or Classic French Vanilla.",
                      "dietary":  [
                                      "Heavy Cream",
                                      "Ice Cream Based"
                                  ],
                      "spiceLevel":  "Sweet Cream",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Oreo Vanilla Shake",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Oreo Chocolate Shake",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Fresh Strawberry Shake",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Classic French Vanilla Shake",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Extra Whipped Cream \u0026 Fudge Drizzle",
                                         "price":  0.28
                                     }
                                 ]
                  },
                  {
                      "id":  "signature-shangrilla-mocktails",
                      "title":  "Shangrilla Royal Refreshers (Pair)",
                      "subtitle":  "Frosty Mint Lemonade \u0026 Passionfruit Cooler",
                      "category":  "beverages",
                      "price":  2.9825,
                      "rating":  4.9,
                      "reviewsCount":  74,
                      "badge":  "House Specialty",
                      "featured":  false,
                      "image":  "assets/images/royal-refreshers-pair.jpg",
                      "gallery":  [
                                      "assets/images/royal-refreshers-pair.jpg"
                                  ],
                      "description":  "The ultimate palate cleanser to pair with your sizzling steaks and BBQ. Includes two artisanal chilled drinks: our legendary crushed mint iced lemonade with black Himalayan pink salt, and an exotic tropical passionfruit cooler garnished with fresh passionfruit half, mint sprigs, and lemon wheels.",
                      "dietary":  [
                                      "Vegan",
                                      "Chilled",
                                      "Refreshing"
                                  ],
                      "spiceLevel":  "Zesty \u0026 Sweet",
                      "prepTime":  "5-7 mins",
                      "portions":  [
                                       {
                                           "name":  "Twin Highball Glasses (Both Flavors)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Pitcher Size (Serves 4)",
                                           "priceDelta":  2.28
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "cardamom-tea",
                      "title":  "196. Cardamom Tea",
                      "subtitle":  "Infused with fragrant green cardamom pods and rich dairy milk",
                      "category":  "hotbrews",
                      "price":  0.56,
                      "rating":  4.95,
                      "reviewsCount":  110,
                      "badge":  "Elaichi Chai",
                      "featured":  true,
                      "image":  "assets/images/royal-cardamom-karak-tea.jpg",
                      "gallery":  [
                                      "assets/images/royal-cardamom-karak-tea.jpg"
                                  ],
                      "description":  "Authentic slow-boiled desi doodh patti tea infused with freshly cracked green cardamom pods and rich whole milk.",
                      "dietary":  [
                                      "Hot Brew",
                                      "Fragrant"
                                  ],
                      "spiceLevel":  "Cardamom Aromatic",
                      "prepTime":  "8 mins",
                      "portions":  [
                                       {
                                           "name":  "Hot Cup",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "classic-tea",
                      "title":  "197. Classic Tea",
                      "subtitle":  "Freshly brewed Pakistani tea served warm",
                      "category":  "hotbrews",
                      "price":  0.42,
                      "rating":  4.85,
                      "reviewsCount":  95,
                      "badge":  "Daily Karak",
                      "featured":  false,
                      "image":  "assets/images/classic-tea.jpg",
                      "gallery":  [
                                      "assets/images/classic-tea.jpg"
                                  ],
                      "description":  "Traditional piping hot Pakistani karak black tea brewed with fresh milk.",
                      "dietary":  [
                                      "Karak Chai"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Standard Cup",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "green-tea",
                      "title":  "198. Green Tea / Kehwa",
                      "subtitle":  "Refreshing and light green brew for a calming finish",
                      "category":  "hotbrews",
                      "price":  0.35,
                      "rating":  4.88,
                      "reviewsCount":  80,
                      "badge":  "Peshawari Kehwa",
                      "featured":  false,
                      "image":  "assets/images/green-tea-kehwa.jpg",
                      "gallery":  [
                                      "assets/images/green-tea-kehwa.jpg"
                                  ],
                      "description":  "Peshawari-style jasmine and green tea kehwa brewed with cardamom and lemon slice.",
                      "dietary":  [
                                      "Herbal Digestive",
                                      "Calorie Free"
                                  ],
                      "spiceLevel":  "Mild Herbal",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Warm Cup",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "cappuccino-coffee",
                      "title":  "208. Cappuccino",
                      "subtitle":  "Rich espresso topped with velvety froth and cocoa dust",
                      "category":  "hotbrews",
                      "price":  1.193,
                      "rating":  4.9,
                      "reviewsCount":  88,
                      "badge":  "Barista Brew",
                      "featured":  false,
                      "image":  "assets/images/cappuccino-coffee.jpg",
                      "gallery":  [
                                      "assets/images/cappuccino-coffee.jpg"
                                  ],
                      "description":  "Double shot of dark roasted espresso blended with steamed milk and a thick layer of silky milk foam, dusted with cocoa.",
                      "dietary":  [
                                      "Italian Roast",
                                      "Hot Brew"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Classic Mug",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "cafe-latte",
                      "title":  "209. Café Latte",
                      "subtitle":  "Smooth espresso layered with steamed milk and light foam",
                      "category":  "hotbrews",
                      "price":  1.193,
                      "rating":  4.88,
                      "reviewsCount":  75,
                      "badge":  "Smooth Latte",
                      "featured":  false,
                      "image":  "assets/images/cafe-latte.jpg",
                      "gallery":  [
                                      "assets/images/cafe-latte.jpg"
                                  ],
                      "description":  "Gentle, creamy hot coffee crafted with rich espresso and velvet steamed dairy milk.",
                      "dietary":  [
                                      "Smooth Brew"
                                  ],
                      "spiceLevel":  "Mild",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Tall Mug",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "hot-chocolate",
                      "title":  "210. Hot Chocolate",
                      "subtitle":  "Silky chocolate indulgence with whipped cream topping",
                      "category":  "hotbrews",
                      "price":  1.193,
                      "rating":  4.95,
                      "reviewsCount":  90,
                      "badge":  "Chocolate Hug",
                      "featured":  false,
                      "image":  "assets/images/hot-chocolate.jpg",
                      "gallery":  [
                                      "assets/images/hot-chocolate.jpg"
                                  ],
                      "description":  "Melted Belgian cocoa and whole milk simmered into a decadent hot chocolate, finished with a swirl of whipped cream.",
                      "dietary":  [
                                      "Sweet Treat",
                                      "Kid Friendly"
                                  ],
                      "spiceLevel":  "Sweet Cocoa",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Warm Mug with Cream",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "premium-ice-cream",
                      "title":  "201. Premium Ice Cream",
                      "subtitle":  "Kulfa, Vanilla, Strawberry, Mango, or Chocolate",
                      "category":  "desserts",
                      "price":  0.8421,
                      "rating":  4.9,
                      "reviewsCount":  110,
                      "badge":  "Double Scoop",
                      "featured":  false,
                      "image":  "assets/images/premium-ice-cream.jpg",
                      "gallery":  [
                                      "assets/images/premium-ice-cream.jpg"
                                  ],
                      "description":  "Two scoops of rich artisanal ice cream. Choose your favorite flavor: Traditional Desi Kulfa, Tahitian Vanilla, Ripe Strawberry, Mango, or Rich Chocolate.",
                      "dietary":  [
                                      "Chilled Sweet"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "3 mins",
                      "portions":  [
                                       {
                                           "name":  "Double Scoop",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Single Scoop",
                                           "priceDelta":  -0.21209999999999996
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "kulfa-falooda",
                      "title":  "203. Kulfa Falooda",
                      "subtitle":  "Classic Desi delight with kulfa, vermicelli, and rose syrup",
                      "category":  "desserts",
                      "price":  1.0526,
                      "rating":  4.98,
                      "reviewsCount":  135,
                      "badge":  "Desi Heritage",
                      "featured":  true,
                      "image":  "assets/images/kulfa-falooda-dessert.jpg",
                      "gallery":  [
                                      "assets/images/kulfa-falooda-dessert.jpg"
                                  ],
                      "description":  "Authentic Pakistani royal falooda: Handcrafted rabri kulfa, slippery cornstarch falooda sev noodles, tukhm-e-balanga (basil seeds), chilled milk, and fragrant Rooh Afza rose drizzle.",
                      "dietary":  [
                                      "Traditional Dessert",
                                      "Summer Coolant"
                                  ],
                      "spiceLevel":  "Sweet Rose",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Grand Falooda Glass",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "gajar-halwa-seasonal",
                      "title":  "204. Gajar Halwa (Seasonal)",
                      "subtitle":  "Classic carrot halwa slow-cooked in pure ghee and milk",
                      "category":  "desserts",
                      "price":  1.0526,
                      "rating":  4.95,
                      "reviewsCount":  125,
                      "badge":  "Winter Warmth",
                      "featured":  false,
                      "image":  "assets/images/gajar-halwa-seasonal.jpg",
                      "gallery":  [
                                      "assets/images/gajar-halwa-seasonal.jpg"
                                  ],
                      "description":  "Fresh grated red winter carrots simmered for hours in whole milk, pure desi ghee, khoya mawa, and crushed green cardamom, topped with sliced almonds and pistachios.",
                      "dietary":  [
                                      "Desi Ghee",
                                      "Served Warm",
                                      "Winter Special"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Warm Bowl",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Khoya Mawa Topping",
                                         "price":  0.28
                                     }
                                 ]
                  },
                  {
                      "id":  "kheer-custard-seasonal",
                      "title":  "205. Kheer / Custard (Seasonal)",
                      "subtitle":  "Traditional rice pudding or vanilla custard, served chilled",
                      "category":  "desserts",
                      "price":  1.0526,
                      "rating":  4.9,
                      "reviewsCount":  85,
                      "badge":  "Clay Pot Kheer",
                      "featured":  false,
                      "image":  "assets/images/shahi-matka-kheer.jpg",
                      "gallery":  [
                                      "assets/images/shahi-matka-kheer.jpg"
                                  ],
                      "description":  "Slow-simmered basmati rice and cream kheer infused with saffron and kewra, garnished with silver vark and slivered nuts in traditional clay thali.",
                      "dietary":  [
                                      "Chilled Dessert",
                                      "Traditional"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Chilled Bowl",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "lab-e-shireen-seasonal",
                      "title":  "206. Lab-e-Shireen (Seasonal)",
                      "subtitle":  "Creamy milk dessert with fruits, jelly, and vermicelli",
                      "category":  "desserts",
                      "price":  1.14,
                      "rating":  4.92,
                      "reviewsCount":  94,
                      "badge":  "Festive Sweet",
                      "featured":  false,
                      "image":  "assets/images/lab-e-shireen.jpg",
                      "gallery":  [
                                      "assets/images/lab-e-shireen.jpg"
                                  ],
                      "description":  "Festive dessert custard folded with sweet colored vermicelli, cocktail fruits, strawberry and banana jellies, and heavy whipped cream.",
                      "dietary":  [
                                      "Festive Dessert",
                                      "Chilled"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Festive Glass Bowl",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "gulab-jamun",
                      "title":  "207. Gulab Jamun",
                      "subtitle":  "Soft, syrup-soaked milk dumplings served warm",
                      "category":  "desserts",
                      "price":  0.5263,
                      "rating":  4.95,
                      "reviewsCount":  140,
                      "badge":  "Warm Classic",
                      "featured":  false,
                      "image":  "assets/images/warm-gulab-jamun.jpg",
                      "gallery":  [
                                      "assets/images/warm-gulab-jamun.jpg"
                                  ],
                      "description":  "Hand-rolled khoya dumplings fried golden brown and soaked in fragrant rose and green cardamom sugar syrup. Served warm.",
                      "dietary":  [
                                      "Served Warm",
                                      "Traditional Sweet"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "3 mins",
                      "portions":  [
                                       {
                                           "name":  "Pair of Warm Dumplings",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "molten-lava-cake",
                      "title":  "215. Molten Lava Cake",
                      "subtitle":  "Warm chocolate cake with gooey molten center, served with ice cream",
                      "category":  "desserts",
                      "price":  1.8947,
                      "rating":  4.98,
                      "reviewsCount":  165,
                      "badge":  "Decadent Star",
                      "featured":  true,
                      "image":  "assets/images/molten-lava-cake.jpg",
                      "gallery":  [
                                      "assets/images/molten-lava-cake.jpg"
                                  ],
                      "description":  "Warm dark chocolate souffle cake with a rich molten chocolate center that flows when cut, paired with a scoop of cool vanilla bean ice cream.",
                      "dietary":  [
                                      "Warm \u0026 Cold Combo",
                                      "Chocoholic"
                                  ],
                      "spiceLevel":  "Rich Chocolate",
                      "prepTime":  "12 mins",
                      "portions":  [
                                       {
                                           "name":  "Lava Cake + Vanilla Ice Cream",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chocolate-brownie-and-walnut",
                      "title":  "216. Chocolate Brownie / Walnut Brownie",
                      "subtitle":  "Rich fudgy brownie with crisp crust and soft heart",
                      "category":  "desserts",
                      "price":  0.9825,
                      "rating":  4.9,
                      "reviewsCount":  110,
                      "badge":  "Fudgy Bake",
                      "featured":  false,
                      "image":  "assets/images/fudge-walnut-brownie.jpg",
                      "gallery":  [
                                      "assets/images/fudge-walnut-brownie.jpg"
                                  ],
                      "description":  "Dense, fudgy dark cocoa brownie with a crackly top, available with or without roasted crunchy walnuts.",
                      "dietary":  [
                                      "Bakery Fresh",
                                      "Fudgy"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "5 mins",
                      "portions":  [
                                       {
                                           "name":  "Chocolate Brownie",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Walnut Brownie (with Crunchy Walnuts)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [
                                     {
                                         "name":  "Vanilla Ice Cream Scoop",
                                         "price":  0.63
                                     }
                                 ]
                  },
                  {
                      "id":  "assorted-pastries-cupcakes",
                      "title":  "218. Assorted Pastries \u0026 Cupcakes",
                      "subtitle":  "Freshly baked pastries with daily chef\u0027s selection",
                      "category":  "desserts",
                      "price":  0.8421,
                      "rating":  4.88,
                      "reviewsCount":  85,
                      "badge":  "Bakery Treats",
                      "featured":  false,
                      "image":  "assets/images/assorted-pastries-cupcakes.jpg",
                      "gallery":  [
                                      "assets/images/assorted-pastries-cupcakes.jpg"
                                  ],
                      "description":  "Delicate individual layered sponge pastries with whipped buttercream, chocolate ganache, or fruit coulis.",
                      "dietary":  [
                                      "Bakery Fresh"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "2 mins",
                      "portions":  [
                                       {
                                           "name":  "Assorted Pastry (Per Piece)",
                                           "priceDelta":  0
                                       },
                                       {
                                           "name":  "Cupcake Collection (Frosted)",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  },
                  {
                      "id":  "chocolate-pops",
                      "title":  "220. Chocolate Pops",
                      "subtitle":  "Bite-sized chocolate-coated cake pops for a sweet finish",
                      "category":  "desserts",
                      "price":  0.8772,
                      "rating":  4.85,
                      "reviewsCount":  60,
                      "badge":  "Sweet Bites",
                      "featured":  false,
                      "image":  "assets/images/molten-lava-cake.jpg",
                      "gallery":  [
                                      "assets/images/molten-lava-cake.jpg"
                                  ],
                      "description":  "Fudgy cake truffles on sticks dipped in Belgian dark and milk chocolate with colorful sprinkles.",
                      "dietary":  [
                                      "Kid Favorite",
                                      "Party Sweet"
                                  ],
                      "spiceLevel":  "Sweet",
                      "prepTime":  "2 mins",
                      "portions":  [
                                       {
                                           "name":  "Pair of Chocolate Pops",
                                           "priceDelta":  0
                                       }
                                   ],
                      "addons":  [

                                 ]
                  }
              ],
    "reviews":  [
                    {
                        "name":  "Tariq Mansoor",
                        "rating":  5,
                        "date":  "Yesterday",
                        "comment":  "The Truffle Mushroom Chicken Steak is truly in a league of its own! Sizzling hot, buttery, and the mushroom sauce was divine. The packaging kept it piping hot for home delivery.",
                        "dish":  "Truffle Mushroom Chicken Steak"
                    },
                    {
                        "name":  "Ayesha Malik",
                        "rating":  5,
                        "date":  "3 days ago",
                        "comment":  "Handi Chicken Hari Mirch with the hot Roghani naans reminds me of royal dawat feasts. Creamy with just the right kick of green chili.",
                        "dish":  "Handi Chicken Hari Mirch"
                    },
                    {
                        "name":  "Hamza Farooq",
                        "rating":  5,
                        "date":  "Just now",
                        "comment":  "The Classic Hot \u0026 Sour Soup is unmatched! Truly served piping hot for these cold evenings, perfectly spiced with shredded chicken and egg ribbons.",
                        "dish":  "Classic Hot \u0026 Sour Soup"
                    },
                    {
                        "name":  "Danyal Shah",
                        "rating":  5,
                        "date":  "1 week ago",
                        "comment":  "Best steak \u0026 BBQ place in town! Fast delivery, easy website ordering, and the Special Nans platter is crispy and fresh.",
                        "dish":  "Special Artisan Naans Platter"
                    },
                    {
                        "name":  "Bilal Chaudhry",
                        "rating":  5,
                        "date":  "2 days ago",
                        "comment":  "Ordered S2 Mutton Deal for 5 for a family dawat. Incredible value, huge portions, the mutton karahi and malai boti were falling off the bone!",
                        "dish":  "S2 (Mutton Deal for 5)"
                    }
                ]
};
