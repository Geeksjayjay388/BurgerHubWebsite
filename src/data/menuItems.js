// data/menuItems.js
export const menuItems = [
  {
    id: 1,
    name: "The Classic Burger",
    description: "Premium grass-fed beef patty with crisp lettuce, vine-ripened tomatoes, red onion, house-made pickles, and our signature burger sauce on a brioche bun",
    price: 12.99,
    originalPrice: 15.99,
    category: "signature-burgers",
    tags: ["Popular", "Signature", "HOT"],
    rating: 4.9,
    reviewCount: 247,
    calories: 850,
    prepTime: 12,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    customizable: true,
    isNew: false,
    isFeatured: true,
    options: {
      size: ["Single", "Double", "Triple"],
      cheese: ["Cheddar", "Swiss", "Pepper Jack", "Blue Cheese", "Provolone", "None"],
      toppings: ["Bacon", "Avocado", "Mushrooms", "Fried Egg", "Jalapenos", "Caramelized Onions", "Grilled Pineapple"],
      sauce: ["Signature", "BBQ", "Chipotle", "Garlic Aioli", "Spicy Mayo", "Truffle"]
    },
    nutrition: {
      protein: "45g",
      carbs: "65g",
      fat: "38g"
    }
  },
  {
    id: 2,
    name: "Crispy Chicken Deluxe",
    description: "Hand-breaded buttermilk chicken breast, crispy lettuce, ripe tomatoes, pickles, and spicy chipotle mayo on a potato bun",
    price: 11.99,
    originalPrice: 13.99,
    category: "chicken",
    tags: ["Spicy", "Crispy", "Popular"],
    rating: 4.7,
    reviewCount: 189,
    calories: 720,
    prepTime: 15,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop",
    customizable: true,
    isNew: false,
    isFeatured: false,
    options: {
      spice: ["Mild", "Medium", "Spicy", "Extra Hot"],
      sauce: ["Chipotle", "Buffalo", "Honey Mustard", "Ranch"],
      addons: ["Bacon", "Cheese", "Avocado", "Coleslaw"]
    },
    nutrition: {
      protein: "38g",
      carbs: "58g",
      fat: "32g"
    }
  },
  {
    id: 3,
    name: "Mushroom Swiss Melt",
    description: "Juicy beef patty topped with sautéed wild mushrooms, caramelized onions, melted Swiss cheese, and truffle aioli",
    price: 13.99,
    originalPrice: 16.99,
    category: "signature-burgers",
    tags: ["Premium", "Gourmet", "New"],
    rating: 4.8,
    reviewCount: 132,
    calories: 890,
    prepTime: 14,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=400&fit=crop",
    customizable: true,
    isNew: true,
    isFeatured: true,
    options: {
      mushroom: ["Portobello", "Cremini", "Shiitake", "Mixed"],
      cheese: ["Swiss", "Gruyere", "Gouda", "Brie"],
      sauce: ["Truffle Aioli", "Garlic Herb", "Red Wine Reduction"]
    },
    nutrition: {
      protein: "48g",
      carbs: "72g",
      fat: "42g"
    }
  },
  {
    id: 4,
    name: "Loaded Ultimate Fries",
    description: "Crispy golden fries topped with melted cheese blend, crispy bacon, green onions, jalapenos, and house ranch drizzle",
    price: 8.99,
    originalPrice: 10.99,
    category: "fries-sides",
    tags: ["Shareable", "Cheesy", "HOT"],
    rating: 4.6,
    reviewCount: 215,
    calories: 650,
    prepTime: 10,
    image: "https://imgs.search.brave.com/-t2UrGrq9pTijqsF_Ui8PnamXqJ05y6H733xpfpSDPQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYXN0/ZXJzb2ZraXRjaGVu/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wNi9DaGlj/a2VuLUxvYWRlZC1G/cmllcy0zODR4Mzg0/LndlYnA",
    customizable: true,
    isNew: false,
    isFeatured: false,
    options: {
      size: ["Regular", "Large", "Family"],
      cheese: ["Cheddar", "Pepper Jack", "Three Cheese Blend", "Vegan Cheese"],
      toppings: ["Bacon", "Pulled Pork", "Chili", "Guacamole", "Sour Cream"],
      drizzle: ["Ranch", "BBQ", "Cheese Sauce", "Buffalo"]
    },
    nutrition: {
      protein: "18g",
      carbs: "85g",
      fat: "35g"
    }
  },
  {
    id: 5,
    name: "Garden Veggie Supreme",
    description: "House-made black bean patty with avocado mash, organic lettuce, heirloom tomatoes, cucumber, and vegan garlic aioli",
    price: 10.99,
    originalPrice: 12.99,
    category: "veggie",
    tags: ["Vegan", "Healthy", "Plant-Based"],
    rating: 4.5,
    reviewCount: 98,
    calories: 580,
    prepTime: 12,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop",
    customizable: true,
    isNew: false,
    isFeatured: false,
    options: {
      patty: ["Black Bean", "Quinoa", "Mushroom", "Beyond Meat"],
      bun: ["Whole Wheat", "Lettuce Wrap", "Gluten-Free"],
      toppings: ["Avocado", "Grilled Zucchini", "Roasted Peppers", "Sprouts", "Pickled Onions"]
    },
    nutrition: {
      protein: "22g",
      carbs: "68g",
      fat: "18g"
    }
  },
  {
    id: 6,
    name: "Chocolate Dream Shake",
    description: "Rich Belgian chocolate ice cream blended with dark chocolate chunks, topped with whipped cream and chocolate drizzle",
    price: 5.99,
    originalPrice: 7.99,
    category: "desserts",
    tags: ["Dessert", "Sweet", "Popular"],
    rating: 4.8,
    reviewCount: 176,
    calories: 420,
    prepTime: 5,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop",
    customizable: true,
    isNew: false,
    isFeatured: false,
    options: {
      size: ["Regular", "Large", "Monster"],
      mixins: ["Oreo", "Brownie", "Peanut Butter", "Strawberries"],
      topping: ["Whipped Cream", "Chocolate Chips", "Cherry", "Caramel Drizzle"]
    },
    nutrition: {
      protein: "8g",
      carbs: "58g",
      fat: "22g"
    }
  },
  {
    id: 7,
    name: "BBQ Bacon Stack",
    description: "Two Angus beef patties with smoked BBQ sauce, applewood bacon, crispy onion rings, cheddar cheese, and special sauce",
    price: 15.99,
    originalPrice: 18.99,
    category: "signature-burgers",
    tags: ["Premium", "HOT", "Signature"],
    rating: 4.9,
    reviewCount: 201,
    calories: 1050,
    prepTime: 16,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=400&fit=crop",
    customizable: true,
    isNew: false,
    isFeatured: true,
    options: {
      pattyCount: ["Double", "Triple"],
      bacon: ["Regular", "Candied", "Extra Crispy"],
      cheese: ["Cheddar", "Pepper Jack", "Smoked Gouda"],
      sauce: ["BBQ", "Bourbon BBQ", "Honey Mustard", "Spicy Ranch"]
    },
    nutrition: {
      protein: "62g",
      carbs: "78g",
      fat: "58g"
    }
  },
  {
    id: 8,
    name: "Mozzarella Magic Sticks",
    description: "Hand-breaded mozzarella sticks served with house-made marinara and ranch dipping sauces",
    price: 7.99,
    originalPrice: 9.99,
    category: "fries-sides",
    tags: ["Appetizer", "Cheesy", "Shareable"],
    rating: 4.4,
    reviewCount: 143,
    calories: 480,
    prepTime: 8,
    image: "https://imgs.search.brave.com/IPGV0PDEa7f8Yr78DszyUAH96T-OS9ZpaWsZPOA4NI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDI0/LzAyLzA4L211bHRp/bWVkaWEvTkQtbW96/emFyZWxsYS1zdGlj/a3MtcHZmbS9ORC1t/b3p6YXJlbGxhLXN0/aWNrcy1wdmZtLWp1/bWJvLmpwZw",
    customizable: false,
    isNew: true,
    isFeatured: false,
    nutrition: {
      protein: "24g",
      carbs: "42g",
      fat: "28g"
    }
  },
  {
    id: 9,
    name: "Spicy Buffalo Wings",
    description: "Crispy chicken wings tossed in your choice of buffalo sauce, served with celery sticks and blue cheese dip",
    price: 9.99,
    originalPrice: 11.99,
    category: "fries-sides",
    tags: ["Spicy", "Hot", "Shareable"],
    rating: 4.7,
    reviewCount: 167,
    calories: 520,
    prepTime: 13,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&h=400&fit=crop",
    customizable: true,
    isNew: false,
    isFeatured: false,
    options: {
      sauce: ["Mild", "Medium", "Hot", "Extra Hot", "Garlic Parmesan", "Lemon Pepper"],
      size: ["6 Pieces", "12 Pieces", "24 Pieces"],
      dip: ["Blue Cheese", "Ranch", "Honey Mustard"]
    },
    nutrition: {
      protein: "36g",
      carbs: "18g",
      fat: "34g"
    }
  },
  {
    id: 10,
    name: "Berry Blast Smoothie",
    description: "Fresh mixed berries, Greek yogurt, honey, and orange juice blended into a refreshing smoothie",
    price: 6.49,
    originalPrice: 7.99,
    category: "drinks",
    tags: ["Healthy", "Refreshing", "New"],
    rating: 4.6,
    reviewCount: 89,
    calories: 280,
    prepTime: 4,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=400&fit=crop",
    customizable: true,
    isNew: true,
    isFeatured: false,
    options: {
      size: ["Small", "Medium", "Large"],
      boost: ["Protein", "Energy", "Immunity", "None"],
      sweetener: ["Honey", "Agave", "Stevia", "None"]
    },
    nutrition: {
      protein: "12g",
      carbs: "52g",
      fat: "4g"
    }
  },
  {
    id: 11,
    name: "Truffle Parmesan Fries",
    description: "Crispy fries tossed in truffle oil, grated Parmesan, fresh parsley, and served with truffle aioli",
    price: 9.99,
    originalPrice: 11.99,
    category: "fries-sides",
    tags: ["Premium", "Gourmet", "Popular"],
    rating: 4.8,
    reviewCount: 154,
    calories: 590,
    prepTime: 11,
    image: "https://imgs.search.brave.com/OiwZ96FvNziOslxq6xsM1ZEpzHCha30kjoOW_b36U14/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aG9tZW1hZGUtYmxh/Y2stdHJ1ZmZsZS1n/YXJsaWMtcGFybWVz/YW4tZnJpZXMtdjAt/OGE1NzQ2ZHF1NnU4/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9NTQ3Zjc0YzFm/MGQ3YmU4NDU4Mjcy/YTMxYjgxMTFjNWI4/ZWE3ZDE2NA",
    customizable: true,
    isNew: false,
    isFeatured: true,
    options: {
      size: ["Regular", "Large", "Shareable"],
      cheese: ["Parmesan", "Asiago", "Pecorino", "Vegan Cheese"],
      drizzle: ["Truffle Oil", "Garlic Butter", "Herb Oil"]
    },
    nutrition: {
      protein: "14g",
      carbs: "78g",
      fat: "32g"
    }
  },
  {
    id: 12,
    name: "Classic Vanilla Shake",
    description: "Creamy vanilla bean ice cream shake topped with whipped cream and a cherry",
    price: 4.99,
    originalPrice: 6.99,
    category: "desserts",
    tags: ["Classic", "Sweet", "Kid-Friendly"],
    rating: 4.5,
    reviewCount: 132,
    calories: 380,
    prepTime: 4,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop",
    customizable: true,
    isNew: false,
    isFeatured: false,
    options: {
      size: ["Small", "Medium", "Large"],
      flavor: ["Vanilla", "Chocolate", "Strawberry", "Mixed"],
      topping: ["Sprinkles", "Cookie Crumbles", "Chocolate Syrup"]
    },
    nutrition: {
      protein: "7g",
      carbs: "52g",
      fat: "18g"
    }
  }
];