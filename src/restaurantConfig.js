// Centralized Restaurant Brand & Business Configuration for MAATRIBHOOMI (मातृभूमि)

export const RESTAURANT_CONFIG = {
  // Brand Identity
  brand: {
    name: "MAATRIBHOOMI",
    hindiName: "मातृभूमि",
    tagline: "Celebrating India's Living Heritage & Flavors",
    subtitle: "Pan-Indian Heritage Vegetarian Dining Curated with Rare Regional Recipes & Royal Hospitality",
    cuisine: "Authentic Regional Indian • Pure Veg",
    established: "2024",
    currency: "₹",
    currencyCode: "INR",
    priceRange: "₹400 – ₹1,600",
    rating: "4.3 ★ (534+ reviews)",
    pureVegBadge: "100% Pure Vegetarian",
  },

  // Color Palette Reference: Rich Indian Terracotta, Royal Amber Gold & Heritage Charcoal
  theme: {
    darkBg: "#120D0A",
    surfaceBg: "#1C1410",
    cardBg: "#241B16",
    accentAmber: "#E07A2B",
    accentGold: "#E8B358",
    creamLight: "#FBF7EE",
    creamMuted: "#DFD5C2",
    borderSubtle: "#3D2B20",
    terracotta: "#B44C28",
  },

  // Contact & Location Details from Google Maps profile
  contact: {
    phone: "+91 98711 23456",
    phoneDisplay: "+91 98711 23456",
    phoneTel: "+919871123456",
    email: "namaste@maatribhoomi.com",
    address: "Unit B, Near Botanical Garden Metro Station, Sector 38",
    cityStateZip: "Noida, Uttar Pradesh 201301",
    mapLink: "https://maps.app.goo.gl/oxFsG6QXLUqhAwmB6",
    whatsapp: "+919871123456",
  },

  // Operating Hours from Google Maps
  hours: [
    { days: "Monday – Friday", time: "12:00 PM – 11:30 PM" },
    { days: "Saturday – Sunday", time: "11:30 AM – 11:30 PM" },
    { days: "Status", time: "Open Now • Closes 11:30 PM" },
  ],

  // Social Links
  socialLinks: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "Facebook", url: "https://facebook.com" },
    { label: "Google Maps", url: "https://maps.app.goo.gl/oxFsG6QXLUqhAwmB6" },
  ],

  // Menu Categories (Regional Indian Heritage)
  categories: [
    "All",
    "Royal Thalis & Feasts",
    "Regional Starters & Chaat",
    "Heritage Curries & Dal",
    "Tandoor & Clay Oven Breads",
    "Mithai & Traditional Desserts",
    "Desi Shikanji & Coolers",
  ],

  // Signature Highlights (Featured prominently)
  signatureDishes: [
    {
      id: "sig-1",
      name: "Maharaja Heritage Royal Thali",
      category: "Royal Thalis & Feasts",
      price: 850,
      isSpecial: true,
      dietary: "Royal Feast • Pure Veg",
      shortDescription: "A grand culinary journey across Bharat: 14 handcrafted regional bowls including Paneer Makhana, Dal Baati Churma, Ker Sangri, Pulao & Hot Jalebi.",
      fullDescription: "Served on traditional kansa bronze ware, bringing together the culinary gems of Rajasthan, Awadh, Gujarat, and Punjab prepared in pure desi ghee.",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Paneer Lababdar", "Dal Baati", "Churma", "Ker Sangri", "Kashmiri Pulao", "Amritsari Kulcha", "Kesari Kheer"],
      calories: "980 kcal",
      prepTime: "20 mins"
    },
    {
      id: "sig-2",
      name: "Slow-Simmered Dal Maatribhoomi",
      category: "Heritage Curries & Dal",
      price: 420,
      isSpecial: true,
      dietary: "Chef Signature • 24hr Simmer",
      shortDescription: "Signature black lentils slow-cooked for 24 hours on gentle charcoal embers with fresh churned white makhan, vine tomatoes and organic spices.",
      fullDescription: "Silky, smoky, and deeply comforting. Cooked using heritage brass handis without any preservatives, finished with pure cow ghee tadka.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Whole Urad Dal", "Charcoal Dhungar Smoke", "Hand-Churned White Makhan", "Kashmiri Degi Mirch", "Kasuri Methi"],
      calories: "460 kcal",
      prepTime: "15 mins"
    },
    {
      id: "sig-3",
      name: "Zaffrani Paneer Tikka Angaar",
      category: "Regional Starters & Chaat",
      price: 480,
      isSpecial: true,
      dietary: "Clay Oven Tandoor",
      shortDescription: "Malai paneer cubes marinated in Persian saffron, roasted bell pepper coulis, hung curd & crushed coriander seeds.",
      fullDescription: "Char-grilled over fragrant clay tandoor embers, served with mint coriander relish and laccha pickled shallots.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Farm Fresh Paneer", "Kashmiri Zaffran", "Stone Ground Mustard Oil", "Hung A2 Curd", "Anardana"],
      calories: "410 kcal",
      prepTime: "16 mins"
    },
    {
      id: "sig-4",
      name: "Kullhad Rabdi with Crisp Desi Jalebi",
      category: "Mithai & Traditional Desserts",
      price: 290,
      isSpecial: true,
      dietary: "Heritage Sweet",
      shortDescription: "Spiral golden jalebis fried in pure desi ghee, dipped in saffron-cardamom chasni and topped with slow-reduced thick malai rabdi in earthen clay pots.",
      fullDescription: "Freshly made before your eyes, pairing the piping hot, crisp crunch of artisanal jalebis with freezing chilled, pistachio-loaded slow-cooked rabdi.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Pure Desi Ghee", "Slow-Reduced Buffalo Milk Rabdi", "Irani Saffron", "Pistachio Silver Leaves"],
      calories: "520 kcal",
      prepTime: "10 mins"
    }
  ],

  // Complete Pan-Indian Pure-Veg Menu Catalog
  menu: [
    // Royal Thalis & Feasts
    {
      id: "thali-1",
      name: "Maharaja Heritage Royal Thali",
      category: "Royal Thalis & Feasts",
      price: 850,
      dietary: "Pure Veg • Unlimited Refills",
      shortDescription: "A grand pan-Indian royal spread: Paneer Lababdar, Dal Baati Churma, Pulao, Bread basket, Raita & Hot Jalebi.",
      fullDescription: "Crafted on authentic bronze kansa plates to promote Ayurvedic wellness, representing the culinary capitals of India in one grand feast.",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Shahi Paneer", "Dal Makhani", "Dal Baati", "Churma", "Kashmiri Pulao", "Butter Naan", "Rabdi"],
      calories: "980 kcal",
      prepTime: "20 mins"
    },
    {
      id: "thali-2",
      name: "Awadhi Dawat Thali",
      category: "Royal Thalis & Feasts",
      price: 690,
      dietary: "Pure Veg • Nawabi Specialty",
      shortDescription: "Lucknowi Subz Biryani, Paneer Korma, Smoked Baingan Bharta, Taftan Bread & Shahi Tukda.",
      fullDescription: "Subtle aromas of kewra, saffron, and slow-dum cooking from the royal kitchens of Lucknow.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Dum Basmati Biryani", "Awadhi Paneer", "Taftan", "Burani Raita", "Shahi Tukda"],
      calories: "820 kcal",
      prepTime: "18 mins"
    },

    // Regional Starters & Chaat
    {
      id: "str-1",
      name: "Banarasi Palak Patta Chaat",
      category: "Regional Starters & Chaat",
      price: 260,
      dietary: "Street Heritage",
      shortDescription: "Crispy fried baby spinach leaves coated in spiced gram flour, sweetened churned curd, saunth chutney & sev.",
      fullDescription: "An explosion of sweet, tangy, and crunchy notes perfected along the ghats of Varanasi.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Crisp Spinach Leaves", "Spiced Dahi", "Date-Tamarind Chutney", "Mint Chutney", "Pomegranate Seeds"],
      calories: "280 kcal",
      prepTime: "10 mins"
    },
    {
      id: "str-2",
      name: "Zaffrani Paneer Tikka Angaar",
      category: "Regional Starters & Chaat",
      price: 480,
      dietary: "Clay Oven Tandoor",
      shortDescription: "Malai paneer cubes marinated in Persian saffron, roasted bell peppers, hung curd & crushed spices.",
      fullDescription: "Char-grilled to golden tenderness in our clay tandoor, served with laccha onions and tangy chutney.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Fresh Paneer", "Saffron", "Hung Curd", "Degi Mirch", "Mint Relish"],
      calories: "410 kcal",
      prepTime: "16 mins"
    },
    {
      id: "str-3",
      name: "Dahi Ke Kebab & Beetroot Tikki",
      category: "Regional Starters & Chaat",
      price: 360,
      dietary: "Melt-In-Mouth",
      shortDescription: "Silky spiced yogurt patties with a crisp golden exterior, stuffed with roasted nuts and fresh coriander.",
      fullDescription: "Delicate textured vegetarian kebabs pan-fried on cast iron tawa with pure cow ghee.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Hung Curd", "Roasted Cumin", "Cardamom", "Cashews", "Beetroot Crust"],
      calories: "320 kcal",
      prepTime: "14 mins"
    },

    // Heritage Curries & Dal
    {
      id: "cur-1",
      name: "Slow-Simmered Dal Maatribhoomi",
      category: "Heritage Curries & Dal",
      price: 420,
      dietary: "24-Hour Charcoal Simmer",
      shortDescription: "Whole black urad lentils simmered overnight with fresh churned white makhan and vine tomatoes.",
      fullDescription: "Our proudest recipe — rich, smoky, and velvety without overpowering heavy creams.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Urad Dal", "Churned Makhan", "Tomato Reduction", "Kasuri Methi"],
      calories: "460 kcal",
      prepTime: "15 mins"
    },
    {
      id: "cur-2",
      name: "Paneer Makhanwala Rogan",
      category: "Heritage Curries & Dal",
      price: 460,
      dietary: "Classic Pure Veg",
      shortDescription: "Tender cottage cheese simmered in a silky tomato gravy with crushed cashews and aromatic mace.",
      fullDescription: "An ode to classic North Indian banquet recipes made without onion-garlic options also available upon request.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
      ingredients: ["A2 Milk Paneer", "San Marzano Style Desi Tomatoes", "Makhana Cream", "Green Cardamom"],
      calories: "510 kcal",
      prepTime: "16 mins"
    },
    {
      id: "cur-3",
      name: "Kashmiri Dum Aloo Badami",
      category: "Heritage Curries & Dal",
      price: 390,
      dietary: "Kashmiri Heritage",
      shortDescription: "Pricked baby potatoes deep fried and simmered in a fennel and dry ginger infused curd gravy.",
      fullDescription: "Traditional wazwan-style vegetarian curry carrying the authentic fiery red hue of dried Kashmiri chillies.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Baby Potatoes", "Saunf (Fennel)", "Sonth (Dry Ginger)", "Almond Paste", "Asafoetida"],
      calories: "420 kcal",
      prepTime: "18 mins"
    },

    // Tandoor & Clay Oven Breads
    {
      id: "brd-1",
      name: "Amritsari Chur-Chur Naan Thali",
      category: "Tandoor & Clay Oven Breads",
      price: 320,
      dietary: "Clay Oven Special",
      shortDescription: "Crispy, multi-layered stuffed bread crushed with desi ghee, served with Pindi Chhole & Boondi Raita.",
      fullDescription: "Stuffed with seasoned paneer, spiced potatoes, and anardana seeds, baked until blistered in the tandoor.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Spiced Paneer", "Amritsari Chhole", "Desi Ghee", "Pickled Onions"],
      calories: "620 kcal",
      prepTime: "12 mins"
    },
    {
      id: "brd-2",
      name: "Garlic Butter Laccha Paratha & Missi Roti",
      category: "Tandoor & Clay Oven Breads",
      price: 110,
      dietary: "Tandoori Fresh",
      shortDescription: "Flaky layered whole wheat paratha sprinkled with toasted garlic, kalonji seeds and freshly chopped coriander.",
      fullDescription: "Freshly slapped against the clay walls of our wood-fired tandoor, brushed with warm clarified butter.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Stone Ground Atta", "Roasted Garlic", "Nigella Seeds", "Cow Ghee"],
      calories: "280 kcal",
      prepTime: "8 mins"
    },

    // Mithai & Traditional Desserts
    {
      id: "des-1",
      name: "Kullhad Rabdi with Crisp Desi Jalebi",
      category: "Mithai & Traditional Desserts",
      price: 290,
      dietary: "Sweet Specialty",
      shortDescription: "Spiral golden jalebis fried in pure desi ghee, served with thick pistachio malai rabdi in earthen clay pot.",
      fullDescription: "Crispy hot jalebis paired with slow-condensed milk rabdi — an eternal favorite at Indian festive gatherings.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Pure Desi Ghee", "Saffron Syrup", "Buffalo Milk Rabdi", "Pistachio Slivers"],
      calories: "520 kcal",
      prepTime: "10 mins"
    },
    {
      id: "des-2",
      name: "Kesari Rasmalai with Roasted Almonds",
      category: "Mithai & Traditional Desserts",
      price: 240,
      dietary: "Signature Sweet",
      shortDescription: "Soft cottage cheese dumplings soaked in chilled saffron and green cardamom scented milk cream.",
      fullDescription: "Silky, delicate dessert garnished with slivered pistachios and real silver varq.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Fresh Chenna", "Kashmiri Kesar", "Cardamom Milk", "Crushed Almonds"],
      calories: "340 kcal",
      prepTime: "5 mins"
    },

    // Desi Shikanji & Coolers
    {
      id: "drk-1",
      name: "Kulhad Masala Chaas & Jaljeera",
      category: "Desi Shikanji & Coolers",
      price: 140,
      dietary: "Digestive Cooler",
      shortDescription: "Churned buttermilk tempered with roasted cumin seeds, fresh coriander, ginger, black salt and mint.",
      fullDescription: "Served ice cold in rustic earthen kulhads that infuse a natural earthy scent into every sip.",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Fresh Dahi Churn", "Bhuna Jeera", "Kala Namak", "Fresh Pudina"],
      calories: "85 kcal",
      prepTime: "4 mins"
    },
    {
      id: "drk-2",
      name: "Banarasi Thandai with Rose Petals",
      category: "Desi Shikanji & Coolers",
      price: 220,
      dietary: "Royal Beverage",
      shortDescription: "Traditional chilled full-cream milk blended with almonds, melon seeds, fennel, black pepper, and saffron.",
      fullDescription: "The timeless festive refresher of Kashi, topped with dried damask rose petals and crushed pistachios.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Chilled Milk", "Almond & Melon Paste", "Saunf & Kali Mirch", "Kesar & Rose Essence"],
      calories: "260 kcal",
      prepTime: "6 mins"
    }
  ],

  // Gallery Photos (Real restaurant ambiance & culinary heritage)
  gallery: [
    {
      id: "gal-1",
      title: "Heritage Red Sandstone Facade",
      type: "Restaurant Architecture",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      caption: "Arched heritage windows and warm amber illumination welcoming diners at Sector 38, Noida."
    },
    {
      id: "gal-2",
      title: "Royal Maharaja Thali Spread",
      type: "Plated Heritage Food",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80",
      caption: "Fourteen regional vegetarian specialties served in handcrafted bronze kansa ware."
    },
    {
      id: "gal-3",
      title: "Artisanal Jalebi & Rabdi Station",
      type: "Mithai Craftsmanship",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
      caption: "Golden spirals fried in pure desi ghee and bathed in rich saffron rabdi."
    },
    {
      id: "gal-4",
      title: "Hand-Painted Folk Pillars & Interior Ambiance",
      type: "Dining Atmosphere",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      caption: "Earthy terracotta textures, traditional Indian motifs, and comfortable family seating."
    },
    {
      id: "gal-5",
      title: "Smoky Clay Oven Tandoor Crafts",
      type: "Chef Preparation",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
      caption: "Charcoal roasted paneer tikkas and blistered breads infused with clay kiln aromas."
    },
    {
      id: "gal-6",
      title: "Festive Banarasi Thandai & Coolers",
      type: "Desi Beverages",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
      caption: "Saffron and dry-fruit coolers served in earthen kulhads."
    }
  ],

  // Brand Story / About Details
  about: {
    headline: "A Love Letter To The Culinary Soul Of Bharat",
    paragraph1: "Maatribhoomi (मातृभूमि) is born from a deep reverence for India's diverse gastronomic traditions. From the royal banquets of Rajasthan and Awadh to the temple kitchens of South India and vibrant street food lanes of Banaras, our kitchen celebrates authentic, unadulterated vegetarian food made with pure cow ghee and traditional recipes.",
    paragraph2: "Every detail — from our red sandstone arches and hand-painted folk art pillars to our slow-simmered 24-hour Dal and bronze dining thalis — has been curated to give families and food lovers an unforgettable celebration of Indian culture and warmth.",
    stats: [
      { label: "Pure Veg Dishes", value: "100%" },
      { label: "Google Rating", value: "4.3 ★" },
      { label: "Verified Reviews", value: "534+" },
      { label: "Price For Two", value: "₹800" }
    ]
  }
};
