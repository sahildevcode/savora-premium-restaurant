// TEZPATTA — Royal Signature Official 4-Color Palette Configuration
// Deep Burgundy (#240B10) | Champagne Gold (#C99B52) | Warm Ivory (#FFF2E8) | Accent Rose (#E83E60)

export const RESTAURANT_CONFIG = {
  // Brand Identity
  brand: {
    name: "TEZPATTA",
    hindiName: "तेजपत्ता",
    paletteName: "Royal Signature",
    tagline: "Royal Indian Fine Dining & Heritage Gastronomy",
    subtitle: "Where royal Awadhi handi gravies and clay tandoor crafts meet regal palace hospitality.",
    cuisine: "North Indian • Awadhi • Tandoori • Pure Veg",
    established: "2018",
    currency: "₹",
    currencyCode: "INR",
    priceRange: "₹200 – ₹1,000",
    rating: "4.3 ★ (204+ verified reviews)",
    pureVegBadge: "100% Pure Vegetarian",
    opensSoon: "Opens Today • 6:00 PM",
  },

  // EXACT PALETTE from provided swatch:
  theme: {
    deepBurgundy: "#240B10",
    champagneGold: "#C99B52",
    warmIvory: "#FFF2E8",
    accentRose: "#E83E60",
    darkWine: "#2D0E15",
    surfaceBurgundy: "#38121B",
    mutedIvory: "#C9B8B8",
    borderGold: "rgba(201, 155, 82, 0.35)",
  },

  // Contact Details
  contact: {
    phone: "+91 94122 05500",
    phoneDisplay: "+91 94122 05500",
    phoneTel: "+919412205500",
    email: "contact@tezpattameerut.com",
    address: "Opposite Apex Tower, Near Vishal Mega Mart & Pantaloons, Garh Road, Mangal Pandey Nagar",
    cityStateZip: "Meerut, Uttar Pradesh 250004",
    mapLink: "https://maps.google.com/?q=Tezpatta+Restaurant+Garh+Road+Meerut",
    whatsapp: "+919412205500",
  },

  // Operating Hours
  hours: [
    { days: "Dinner & Evening Service", time: "6:00 PM – 11:30 PM" },
    { days: "Weekend Family Dining", time: "1:00 PM – 11:30 PM" },
    { days: "Today's Status", time: "Opens today • 6:00 PM" },
  ],

  // Social Links
  socialLinks: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "Facebook", url: "https://facebook.com" },
    { label: "Google Maps", url: "https://maps.google.com/?q=Tezpatta+Restaurant+Garh+Road+Meerut" },
  ],

  // Menu Categories
  categories: [
    "All",
    "Signature Kebabs & Tikkas",
    "Royal North Indian Handis",
    "Indo-Chinese Delights",
    "Clay Tandoor Breads",
    "Basmati Biryani & Raitas",
    "Mithai & Artisanal Shakes",
  ],

  // Signature Highlights
  signatureDishes: [
    {
      id: "sig-1",
      name: "Handi Paneer Lababdar",
      category: "Royal North Indian Handis",
      price: 360,
      isSpecial: true,
      dietary: "Royal Signature • Pure Veg",
      shortDescription: "Tender malai paneer simmered in a velvety cashew-tomato gravy, perfumed with royal whole bay leaves (tezpatta) and grated mawa.",
      fullDescription: "Cooked in clay handis over gentle embers, this masterpiece blends royal Awadhi spices, hand-churned white butter, and aromatic whole bay leaves for unmatched depth and richness.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Fresh Malai Paneer", "Whole Tezpatta (Bay Leaf)", "Cashew Paste", "Khoya Mawa", "Vine Tomatoes", "White Butter"],
      calories: "490 kcal",
      prepTime: "18 mins"
    },
    {
      id: "sig-2",
      name: "Dal Makhani Tezpatta 18-Hour",
      category: "Royal North Indian Handis",
      price: 320,
      isSpecial: true,
      dietary: "18hr Embers • Pure Veg",
      shortDescription: "Signature black lentils slow-cooked overnight on charcoal embers with fresh churned butter, vine tomatoes and bay leaf infusion.",
      fullDescription: "Silky, velvety, and naturally infused with charcoal smoke (dhungar), this is Meerut's most celebrated vegetarian comfort luxury.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Whole Black Lentils", "Charcoal Smoke", "Fresh Churned Butter", "Tezpatta Bay Leaves", "Sun-Ripened Tomatoes"],
      calories: "420 kcal",
      prepTime: "15 mins"
    },
    {
      id: "sig-3",
      name: "Crispy Dahi Ke Shole & Suran Kebab",
      category: "Signature Kebabs & Tikkas",
      price: 290,
      isSpecial: true,
      dietary: "Palace Kebab • Pure Veg",
      shortDescription: "Golden crisp rolled parcels filled with spiced hung curd, bell peppers, fresh herbs, and pomegranate pearls.",
      fullDescription: "An exquisite contrast: crunchy and blistered on the outside with a luscious, chilled spiced yogurt center that melts on the tongue.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Hung Curd", "Crisp Sourdough Crust", "Capsicum & Onion", "Anardana Seeds", "Roasted Cumin"],
      calories: "340 kcal",
      prepTime: "14 mins"
    },
    {
      id: "sig-4",
      name: "Honey Chilli Crispy Lotus Stem & Potato",
      category: "Indo-Chinese Delights",
      price: 280,
      isSpecial: true,
      dietary: "Wok Blistered • Pure Veg",
      shortDescription: "Lotus stem rounds and crisp potato fingers wok-tossed in wildflower honey, toasted sesame, and roasted fiery chilies.",
      fullDescription: "Caramelized at smoking wok temperatures for incredible crunch, balanced sweet-spicy notes, and aromatic scallions.",
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=80",
      ingredients: ["Crisp Lotus Stem", "Wildflower Honey", "White Sesame Seeds", "Bird Eye Chillies", "Scallions"],
      calories: "320 kcal",
      prepTime: "12 mins"
    }
  ],

  // Complete Menu Catalog
  menu: [
    {
      id: "keb-1",
      name: "Crispy Dahi Ke Shole",
      category: "Signature Kebabs & Tikkas",
      price: 290,
      dietary: "Tezpatta Specialty",
      shortDescription: "Golden crisp rolled bread parcels filled with spiced hung curd, bell peppers, and fresh coriander.",
      fullDescription: "Fried golden in pure groundnut oil, providing a crunch exterior with a luscious chilled velvety center.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Hung Curd", "Crisp Shell", "Capsicum & Onion", "Roasted Jeera"],
      calories: "340 kcal",
      prepTime: "12 mins"
    },
    {
      id: "keb-2",
      name: "Zaffrani Paneer Tikka Tezpatta",
      category: "Signature Kebabs & Tikkas",
      price: 350,
      dietary: "Clay Oven Tandoor",
      shortDescription: "Malai paneer cubes marinated in bay leaf, hung yogurt, saffron, and tandoori spices.",
      fullDescription: "Charred over fragrant charcoal in our clay kiln, served on a sizzling platter with mint dip.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Fresh Paneer", "Tezpatta Bay Leaves", "Hung Dahi", "Mustard Oil", "Kashmiri Mirch"],
      calories: "390 kcal",
      prepTime: "16 mins"
    },
    {
      id: "keb-3",
      name: "Kathal Ke Galouti Kebab",
      category: "Signature Kebabs & Tikkas",
      price: 310,
      dietary: "Awadhi Heritage",
      shortDescription: "Melt-in-mouth raw jackfruit kebabs prepared in traditional shammi style with royal Awadhi potli masala.",
      fullDescription: "Pan-seared on a heavy cast iron tawa with desi ghee, served with mini Mughlai parathas.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Tender Raw Jackfruit", "Potli Spices", "Roasted Gram Flour", "Desi Ghee"],
      calories: "310 kcal",
      prepTime: "15 mins"
    },
    {
      id: "main-1",
      name: "Handi Paneer Lababdar",
      category: "Royal North Indian Handis",
      price: 360,
      dietary: "Chef Specialty",
      shortDescription: "Malai paneer in a velvety tomato-cashew gravy with grated mawa and bay leaf aroma.",
      fullDescription: "Rich, mildly sweet, and deeply flavorful with a smooth texture and touch of dried fenugreek.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Malai Paneer", "Mawa", "Cashew Gravy", "Bay Leaf", "Butter"],
      calories: "490 kcal",
      prepTime: "18 mins"
    },
    {
      id: "main-2",
      name: "Signature Dal Makhani Tezpatta",
      category: "Royal North Indian Handis",
      price: 320,
      dietary: "18-Hour Slow Cook",
      shortDescription: "Black lentils slow-cooked overnight on charcoal embers with fresh white butter and vine tomatoes.",
      fullDescription: "Silky, creamy, and smoky with balanced spices that celebrate North Indian comfort food.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Urad Dal", "White Butter", "Tomatoes", "Tezpatta Leaves"],
      calories: "420 kcal",
      prepTime: "15 mins"
    },
    {
      id: "main-3",
      name: "Kadhai Paneer Angaara",
      category: "Royal North Indian Handis",
      price: 340,
      dietary: "Spicy & Robust",
      shortDescription: "Cottage cheese chunks tossed with fresh bell peppers, onions and freshly pounded coriander & red chilies.",
      fullDescription: "Cooked in traditional iron wok (kadhai) at high heat to retain crispness and smoky aroma.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Paneer", "Crunchy Bell Peppers", "Pounded Kadhai Masala", "Ginger Juliennes"],
      calories: "440 kcal",
      prepTime: "16 mins"
    },
    {
      id: "main-4",
      name: "Shahi Navratan Korma",
      category: "Royal North Indian Handis",
      price: 350,
      dietary: "Royal Mughlai",
      shortDescription: "Nine assorted garden vegetables and fresh fruits simmered in a royal almond-coconut white gravy.",
      fullDescription: "Rich and festive preparation garnished with roasted cashews, raisins, and pomegranate pearls.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Seasonal Vegetables", "Dry Fruits", "Almond Paste", "Saffron Essence"],
      calories: "430 kcal",
      prepTime: "18 mins"
    },
    {
      id: "chn-1",
      name: "Chilli Paneer Dry / Gravy",
      category: "Indo-Chinese Delights",
      price: 290,
      dietary: "Indo-Chinese Classic",
      shortDescription: "Crispy fried cottage cheese tossed in dark soy sauce, spicy garlic paste, green chilies and spring onions.",
      fullDescription: "A legendary street-style favorite with bold garlicky flavors and tender paneer inside.",
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Crispy Paneer", "Dark Soy", "Green Chillies", "Garlic", "Bell Peppers"],
      calories: "380 kcal",
      prepTime: "12 mins"
    },
    {
      id: "chn-2",
      name: "Honey Chilli Crispy Potato",
      category: "Indo-Chinese Delights",
      price: 240,
      dietary: "Crispy Crunch",
      shortDescription: "Fried potato batons glazed with wildflower honey, sesame seeds and spicy red chili reduction.",
      fullDescription: "Irresistibly sweet, sticky, and spicy snack loved by diners of all ages.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Crisp Potatoes", "Pure Honey", "Sesame Seeds", "Red Chilli Flakes"],
      calories: "360 kcal",
      prepTime: "10 mins"
    },
    {
      id: "brd-1",
      name: "Amritsari Chur-Chur Naan with Chhole",
      category: "Clay Tandoor Breads",
      price: 260,
      dietary: "Tandoori Feast",
      shortDescription: "Crushed flaky tandoori naan stuffed with spiced paneer and potatoes, served with Pindi Chhole & Raita.",
      fullDescription: "Drizzled with hot desi ghee and crushed by hand right before serving for maximum flakiness.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Multi-layer Naan", "Spiced Paneer", "Amritsari Chhole", "Cow Ghee"],
      calories: "580 kcal",
      prepTime: "12 mins"
    },
    {
      id: "brd-2",
      name: "Garlic Butter Naan & Missi Roti",
      category: "Clay Tandoor Breads",
      price: 90,
      dietary: "Clay Oven Fresh",
      shortDescription: "Refined flour naan topped with roasted garlic and coriander, finished with melted butter.",
      fullDescription: "Slapped on clay tandoor walls and baked to bubbly perfection.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Wheat Flour", "Minced Garlic", "Coriander", "Fresh Butter"],
      calories: "210 kcal",
      prepTime: "6 mins"
    },
    {
      id: "bir-1",
      name: "Tezpatta Dum Subz Biryani",
      category: "Basmati Biryani & Raitas",
      price: 310,
      dietary: "Dum Cooked Basmati",
      shortDescription: "Fragrant aged basmati rice cooked on dum with seasonal garden vegetables, whole bay leaves, saffron and brown onions.",
      fullDescription: "Sealed with dough in a clay handi and slow-cooked for 45 minutes to lock in every aromatic layer.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Aged Basmati", "Tezpatta Leaves", "Saffron Milk", "Caramelized Onions", "Fresh Mint"],
      calories: "460 kcal",
      prepTime: "20 mins"
    },
    {
      id: "des-1",
      name: "Hot Gulab Jamun with Kesari Kulfi",
      category: "Mithai & Artisanal Shakes",
      price: 190,
      dietary: "Sweet Classic",
      shortDescription: "Warm khoya dumplings soaked in rose-cardamom syrup paired with dense pistachio saffron matka kulfi.",
      fullDescription: "A contrast of hot melt-in-mouth jamun and chilled creamy kulfi.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Pure Mawa / Khoya", "Cardamom Syrup", "Pistachio Kulfi", "Silver Leaves"],
      calories: "410 kcal",
      prepTime: "6 mins"
    }
  ],

  // Gallery Photos
  gallery: [
    {
      id: "gal-1",
      title: "Handi Paneer Lababdar & Rich Gravies",
      type: "Plated Specialties",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
      caption: "Rich bay leaf scented curries prepared in pure desi ghee and fresh cream."
    },
    {
      id: "gal-2",
      title: "Fine Dining Family Hall Ambiance",
      type: "Restaurant Interior",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      caption: "Warm illumination, plush seating and sophisticated decor opposite Apex Tower, Meerut."
    },
    {
      id: "gal-3",
      title: "Signature Dal Makhani Simmering",
      type: "Overnight Embers",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
      caption: "Slow-cooked black lentils with generous scoops of white churned butter."
    },
    {
      id: "gal-4",
      title: "Charcoal Clay Tandoor Crafts",
      type: "Live Kitchen",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
      caption: "Smoky paneer tikkas, stuffed kulchas and crisp garlic naans."
    },
    {
      id: "gal-5",
      title: "Wok-Tossed Indo-Chinese Dishes",
      type: "Chef Special",
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=80",
      caption: "Fiery chilli paneer, honey chilli potatoes and Manchurian delicacies."
    },
    {
      id: "gal-6",
      title: "Celebration Dining & Banquet Spaces",
      type: "Atmosphere",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      caption: "Perfect destination on Garh Road for family gatherings, birthdays and anniversaries."
    }
  ],

  // Brand Story / About Details
  about: {
    headline: "The Aromatic Art of Vegetarian Fine Dining in Meerut",
    paragraph1: "Named after the quintessential Indian bay leaf (तेजपत्ता) that imparts depth, soul, and unforgettable aroma to royal cuisine, Tezpatta is a celebrated vegetarian dining destination situated in the heart of Mangal Pandey Nagar on Garh Road, Meerut.",
    paragraph2: "We specialize in opulent North Indian gravies, authentic clay oven tikkas, comforting Dal Makhani, and sizzling Indo-Chinese favorites. Whether joining us for an intimate family dinner or a festive celebration, our focus is uncompromising taste, warm hospitality, and fresh ingredients.",
    stats: [
      { label: "Pure Veg Dishes", value: "100%" },
      { label: "Google Rating", value: "4.3 ★" },
      { label: "Verified Reviews", value: "204+" },
      { label: "Price For Two", value: "₹500" }
    ]
  }
};
