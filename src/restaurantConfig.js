// Centralized Restaurant Brand & Business Configuration
// Change business name, contact info, menu items, prices, and links easily in one place.

export const RESTAURANT_CONFIG = {
  // Brand Identity
  brand: {
    name: "SAVORA", // Placeholder or Custom Restaurant Name
    tagline: "Culinary Artistry & Artisanal Flavors",
    subtitle: "Modern Gastronomy Crafted with Heritage Techniques & Seasonal Produce",
    cuisine: "Artisanal Contemporary & European Fusion",
    established: "2021",
    currency: "$",
    currencyCode: "USD",
  },

  // Color Palette Reference (Applied in CSS and UI)
  theme: {
    darkBg: "#0D0F12",
    surfaceBg: "#171A21",
    cardBg: "#1C2029",
    accentAmber: "#E58A38",
    accentGold: "#F3B367",
    creamLight: "#F7F4EE",
    creamMuted: "#D8D2C4",
    borderSubtle: "#2C3240",
  },

  // Contact & Location Details
  contact: {
    phone: "+1 (555) 382-9400",
    phoneDisplay: "+1 (555) 382-9400",
    phoneTel: "+15553829400",
    email: "reservations@savoradining.com",
    address: "412 King Street West, Culinary District",
    cityStateZip: "San Francisco, CA 94107",
    mapLink: "https://maps.google.com/?q=412+King+Street+West+San+Francisco+CA",
    whatsapp: "+15553829400", // Optional: leave empty or provide number for direct WhatsApp order/chat
  },

  // Operating Hours
  hours: [
    { days: "Tuesday – Thursday", time: "5:00 PM – 10:30 PM" },
    { days: "Friday – Saturday", time: "5:00 PM – 11:30 PM" },
    { days: "Sunday Dinner", time: "4:30 PM – 10:00 PM" },
    { days: "Monday", time: "Closed for Private Events" },
  ],

  // Social Links
  socialLinks: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "Facebook", url: "https://facebook.com" },
    { label: "Twitter", url: "https://twitter.com" },
  ],

  // Menu Categories
  categories: [
    "All",
    "Starters",
    "Main Course",
    "Wood-Fired Pizza",
    "Gourmet Burgers",
    "Desserts",
    "Handcrafted Drinks",
  ],

  // Signature Highlights (Featured prominently)
  signatureDishes: [
    {
      id: "sig-1",
      name: "Truffle Glazed Prime Ribeye",
      category: "Main Course",
      price: 48,
      isSpecial: true,
      dietary: "Chef Specialty",
      shortDescription: "Dry-aged 35 days, finished with black winter truffle butter, rosemary confit garlic & smoked bone marrow reduction.",
      fullDescription: "A prime cut aged for depth of flavor, seared on white oak coals, topped with artisanal truffle butter, accompanied by silky potato mousseline and glazed baby heritage carrots.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["35-day Aged Prime Beef", "Black Winter Truffle", "Smoked Bone Marrow", "Rosemary Garlic", "Organic Butter"],
      calories: "820 kcal",
      prepTime: "22 mins"
    },
    {
      id: "sig-2",
      name: "Saffron Seafood Risotto",
      category: "Main Course",
      price: 38,
      isSpecial: true,
      dietary: "Gluten-Free",
      shortDescription: "Acquerello aged carnaroli rice, wild tiger prawns, seared scallops, calamari and wild saffron broth.",
      fullDescription: "Slow-simmered in rich lobster bisque infused with Persian saffron, finished with hand-harvested butter, citrus zest, and cold-pressed olive oil.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Acquerello Carnaroli Rice", "Wild Scallops", "Tiger Prawns", "Persian Saffron", "Meyer Lemon Zest"],
      calories: "640 kcal",
      prepTime: "18 mins"
    },
    {
      id: "sig-3",
      name: "Burrata & Fig Napoletana Pizza",
      category: "Wood-Fired Pizza",
      price: 26,
      isSpecial: true,
      dietary: "Vegetarian",
      shortDescription: "San Marzano tomatoes, fresh pugliese burrata, caramelized black mission figs, wild baby arugula, aged balsamic.",
      fullDescription: "Fermented for 72 hours using ancient stone-ground flour, baked at 900°F in our stone wood-fired oven for a blistered, ethereal crust.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["72hr Fermented Dough", "Pugliese Burrata", "Mission Figs", "Aged Modena Balsamic", "Micro Basil"],
      calories: "780 kcal",
      prepTime: "12 mins"
    },
    {
      id: "sig-4",
      name: "Smoked Valrhona Chocolate Dome",
      category: "Desserts",
      price: 18,
      isSpecial: true,
      dietary: "Vegetarian",
      shortDescription: "70% dark Guanaja chocolate shell, hazelnut praline mousse, salted caramel pearls & tableside espresso pour.",
      fullDescription: "A multisensory dessert unveiled tableside with aromatic cedar smoke, melted with hot single-origin espresso ganache over Bourbon vanilla gelato.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Valrhona 70% Chocolate", "Piedmont Hazelnut", "Fleur de Sel Caramel", "Madagascar Vanilla Bean"],
      calories: "510 kcal",
      prepTime: "10 mins"
    }
  ],

  // Complete Menu Catalog
  menu: [
    // Starters
    {
      id: "str-1",
      name: "Crispy Charred Octopus",
      category: "Starters",
      price: 24,
      dietary: "Gluten-Free",
      shortDescription: "Spanish octopus tenderized and charred over oak, smoked paprika emulsion, fingerling crisps.",
      fullDescription: "Braised in court-bouillon then finished over high-heat charcoal. Served with citrus aioli, caper berries, and dehydrated black olive crumble.",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Wild Octopus", "Smoked Pimentón", "Fingerling Potatoes", "Citrus Aioli", "Spanish Capers"],
      calories: "380 kcal",
      prepTime: "14 mins"
    },
    {
      id: "str-2",
      name: "Heirloom Tomato & Burrata",
      category: "Starters",
      price: 20,
      dietary: "Vegetarian",
      shortDescription: "Organic multi-color heirloom tomatoes, fresh mozzarella burrata, basil chlorophyll, pine nuts.",
      fullDescription: "Seasonal California heirloom tomatoes tossed in cold-pressed extra virgin olive oil, sea salt flakes, accompanied by toasted pine nuts and toasted sourdough crisps.",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a63?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Organic Heirloom Tomatoes", "Creamy Burrata", "Cold-pressed EVOO", "Pine Nuts", "Fresh Genovese Basil"],
      calories: "340 kcal",
      prepTime: "8 mins"
    },
    {
      id: "str-3",
      name: "Wagyu Beef Carpaccio",
      category: "Starters",
      price: 25,
      dietary: "Chef Specialty",
      shortDescription: "A5 Kagoshima beef, shaved Parmigiano-Reggiano 24-month, truffle pearls, baby watercress.",
      fullDescription: "Paper-thin slices of Japanese Wagyu with delicate marbling, drizzled with white truffle essence, pickled shallots, and house-made focaccia wafers.",
      image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=800&q=80",
      ingredients: ["A5 Wagyu Beef", "Parmigiano-Reggiano", "White Truffle Oil", "Pickled Shallots", "Microgreens"],
      calories: "320 kcal",
      prepTime: "10 mins"
    },

    // Main Course
    {
      id: "main-1",
      name: "Truffle Glazed Prime Ribeye",
      category: "Main Course",
      price: 48,
      dietary: "Chef Specialty",
      shortDescription: "Dry-aged 35 days, finished with black winter truffle butter, rosemary confit garlic & bone marrow jus.",
      fullDescription: "A prime cut aged for depth of flavor, seared on white oak coals, topped with artisanal truffle butter, accompanied by silky potato mousseline and glazed baby heritage carrots.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      ingredients: ["35-day Aged Prime Beef", "Black Winter Truffle", "Smoked Bone Marrow", "Rosemary Garlic", "Organic Butter"],
      calories: "820 kcal",
      prepTime: "22 mins"
    },
    {
      id: "main-2",
      name: "Saffron Seafood Risotto",
      category: "Main Course",
      price: 38,
      dietary: "Gluten-Free",
      shortDescription: "Acquerello aged carnaroli rice, wild tiger prawns, seared scallops, calamari and wild saffron broth.",
      fullDescription: "Slow-simmered in rich lobster bisque infused with Persian saffron, finished with hand-harvested butter, citrus zest, and cold-pressed olive oil.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Acquerello Carnaroli Rice", "Wild Scallops", "Tiger Prawns", "Persian Saffron", "Meyer Lemon Zest"],
      calories: "640 kcal",
      prepTime: "18 mins"
    },
    {
      id: "main-3",
      name: "Pan-Seared Chilean Sea Bass",
      category: "Main Course",
      price: 44,
      dietary: "Gluten-Free",
      shortDescription: "Wild-caught sea bass, miso ginger velouté, shiitake mushrooms, steamed baby bok choy.",
      fullDescription: "Flaky, buttery sea bass pan-seared to crisp perfection, resting on a bed of braised wild forest mushrooms and ginger-scented dashi reduction.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Chilean Sea Bass", "Shiitake Mushrooms", "White Miso", "Ginger Root", "Sesame Reduction"],
      calories: "520 kcal",
      prepTime: "20 mins"
    },
    {
      id: "main-4",
      name: "Herb Crusted Rack of Lamb",
      category: "Main Course",
      price: 46,
      dietary: "Halal Available",
      shortDescription: "New Zealand lamb chops with Dijon-herb crust, parsnip puree, pomegranate jus.",
      fullDescription: "Roasted tender medium-rare lamb racks crusted with parsley, thyme, and sourdough crumb, served alongside roasted root vegetables and reduced port glaze.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Pasture-Raised Lamb", "Parsnip Purée", "Fresh Thyme & Rosemary", "Pomegranate Reduction"],
      calories: "710 kcal",
      prepTime: "22 mins"
    },

    // Wood-Fired Pizza
    {
      id: "piz-1",
      name: "Burrata & Fig Napoletana",
      category: "Wood-Fired Pizza",
      price: 26,
      dietary: "Vegetarian",
      shortDescription: "San Marzano tomatoes, fresh pugliese burrata, black mission figs, wild arugula, aged balsamic.",
      fullDescription: "Fermented for 72 hours using ancient stone-ground flour, baked at 900°F in our stone wood-fired oven for a blistered, ethereal crust.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      ingredients: ["72hr Fermented Dough", "Pugliese Burrata", "Mission Figs", "Aged Modena Balsamic", "Micro Basil"],
      calories: "780 kcal",
      prepTime: "12 mins"
    },
    {
      id: "piz-2",
      name: "Truffle Funghi & Prosciutto",
      category: "Wood-Fired Pizza",
      price: 28,
      dietary: "Chef Specialty",
      shortDescription: "White cream sauce, fior di latte, roasted wild porcini, 24-month Parma prosciutto, white truffle oil.",
      fullDescription: "Crafted on a crisp charred base with delicate layers of melted mozzarella, earthy roasted mushrooms, and paper-thin prosciutto di Parma added fresh after baking.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Fior di Latte Mozzarella", "Porcini Mushrooms", "Prosciutto di Parma", "White Truffle Essence"],
      calories: "820 kcal",
      prepTime: "12 mins"
    },
    {
      id: "piz-3",
      name: "Spicy Calabrian Diavola",
      category: "Wood-Fired Pizza",
      price: 25,
      dietary: "Spicy",
      shortDescription: "Crushed San Marzano, spicy Soppressata, 'Nduja sausage, fresh chili oil, hot honey drizzle.",
      fullDescription: "Bold southern Italian flavors with fiery sausage crumbles, melted creamy mozzarella, and an addictive touch of habanero wildflower hot honey.",
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Calabrian 'Nduja", "Spicy Soppressata", "San Marzano Tomatoes", "Smoked Hot Honey", "Fresh Oregano"],
      calories: "860 kcal",
      prepTime: "12 mins"
    },

    // Gourmet Burgers
    {
      id: "brg-1",
      name: "Smoked Wagyu Truffle Burger",
      category: "Gourmet Burgers",
      price: 27,
      dietary: "Chef Specialty",
      shortDescription: "Double smash Wagyu patties, smoked Gruyère, caramelized shallots, black garlic truffle aioli on brioche.",
      fullDescription: "Two 4oz Wagyu patties seared crusty on the griddle, dripping with melted Swiss Gruyère and rich black garlic mayonnaise on a house-toasted milk brioche bun.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      ingredients: ["100% Wagyu Beef", "Smoked Gruyère", "Black Garlic Aioli", "Caramelized French Shallots", "Artisanal Brioche"],
      calories: "920 kcal",
      prepTime: "15 mins"
    },
    {
      id: "brg-2",
      name: "Crispy Buttermilk Chicken Burger",
      category: "Gourmet Burgers",
      price: 22,
      dietary: "Spicy",
      shortDescription: "24hr brined chicken thigh, Nashville spice dip, fermented jalapeño slaw, house bread & butter pickles.",
      fullDescription: "Golden crispy fried chicken thigh soaked in spice-infused hot oil, layered with crunchy purple cabbage slaw and creamy herb dressing on sesame potato bun.",
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Organic Chicken Thigh", "Nashville Cayenne Glaze", "Pickled Jalapeños", "Herbed Slaw", "Potato Bun"],
      calories: "780 kcal",
      prepTime: "14 mins"
    },

    // Desserts
    {
      id: "des-1",
      name: "Smoked Valrhona Chocolate Dome",
      category: "Desserts",
      price: 18,
      dietary: "Vegetarian",
      shortDescription: "70% dark Guanaja chocolate shell, hazelnut praline mousse, salted caramel pearls & tableside espresso pour.",
      fullDescription: "A multisensory dessert unveiled tableside with aromatic cedar smoke, melted with hot single-origin espresso ganache over Bourbon vanilla gelato.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Valrhona 70% Chocolate", "Piedmont Hazelnut", "Fleur de Sel Caramel", "Madagascar Vanilla Bean"],
      calories: "510 kcal",
      prepTime: "10 mins"
    },
    {
      id: "des-2",
      name: "Deconstructed Meyer Lemon Tart",
      category: "Desserts",
      price: 16,
      dietary: "Vegetarian",
      shortDescription: "Zesty lemon curd, toasted Italian meringue peaks, sable crumble, fresh raspberry coulis.",
      fullDescription: "Silky citrus curd made with organic Meyer lemons, torched feather-light meringue, buttery almond crust crumbs and delicate micro mint garnish.",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Organic Meyer Lemons", "Torched Italian Meringue", "Almond Sable", "Wild Raspberry Puree"],
      calories: "410 kcal",
      prepTime: "8 mins"
    },

    // Handcrafted Drinks
    {
      id: "drk-1",
      name: "Smoked Rosemary Old Fashioned",
      category: "Handcrafted Drinks",
      price: 19,
      dietary: "Signature Cocktail",
      shortDescription: "Small-batch Kentucky bourbon, Angostura bitters, burnt orange peel, flamed rosemary sprig.",
      fullDescription: "Stirred to freezing temperature over crystal-clear artisan ice block, trapped in a cloche with toasted rosemary smoke for an unforgettable aroma.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Kentucky Straight Bourbon", "Artisan Bitters", "Charred Rosemary", "Organic Orange Oils"],
      calories: "190 kcal",
      prepTime: "5 mins"
    },
    {
      id: "drk-2",
      name: "Blood Orange & Hibiscus Spritz",
      category: "Handcrafted Drinks",
      price: 16,
      dietary: "Zero-Proof Option Available",
      shortDescription: "Botanical aperitivo, freshly pressed blood orange juice, sparkling prosecco, wild hibiscus flower.",
      fullDescription: "Vibrant and refreshing effervescence with bitter-sweet Italian notes, topped with chilled mineral water and ruby hibiscus syrup.",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Blood Orange Extract", "Wild Hibiscus Flower", "Italian Prosecco", "Sparkling Spring Water"],
      calories: "140 kcal",
      prepTime: "4 mins"
    }
  ],

  // Gallery Photos (Food, Interior, Chef Craft, Atmosphere)
  gallery: [
    {
      id: "gal-1",
      title: "Artisanal Charcoal Seared Filet",
      type: "Plated Food",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      caption: "Fire, smoke, and precision cooking with dry-aged prime beef."
    },
    {
      id: "gal-2",
      title: "Intimate Warm Dining Hall",
      type: "Restaurant Interior",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      caption: "Soft amber illumination, natural textures, and acoustic comfort designed for conversation."
    },
    {
      id: "gal-3",
      title: "Handcrafted Plating In Motion",
      type: "Chef Preparation",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
      caption: "Our culinary artisans finalizing every plate with meticulous attention."
    },
    {
      id: "gal-4",
      title: "Cocktail Laboratory & Lounge",
      type: "Dining Atmosphere",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
      caption: "Small-batch spirits infused with botanical herbs and smoked aromatics."
    },
    {
      id: "gal-5",
      title: "Rustic Stone Wood-Fired Hearth",
      type: "Chef Preparation",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      caption: "Burning aged white oak at 900°F for authentic sourdough crusts."
    },
    {
      id: "gal-6",
      title: "Evening Candlelit Tablescape",
      type: "Dining Atmosphere",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      caption: "An ambiance created for memorable anniversary dinners and shared laughter."
    }
  ],

  // Brand Story / About Details
  about: {
    headline: "A Passion For Honest Flavor & Mindful Craft",
    paragraph1: "Founded on the philosophy that dining should be an immersive sensory journey, our kitchen blends time-honored European culinary traditions with contemporary artistic plating. Every morning starts with fresh deliveries from our network of local organic farmers and sustainable fisheries.",
    paragraph2: "From our 72-hour naturally fermented pizza dough baked in a stone-clad wood oven to dry-aged steaks finished over white oak coals, we honor simplicity, pure ingredients, and heartfelt hospitality.",
    stats: [
      { label: "Locally Sourced Ingredients", value: "95%" },
      { label: "Fermentation Process", value: "72 hrs" },
      { label: "Wood-Fired Hearth Temp", value: "900°F" },
      { label: "Curated Wine Labels", value: "140+" }
    ]
  }
};
