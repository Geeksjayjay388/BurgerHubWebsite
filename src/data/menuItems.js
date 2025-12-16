// data/menuItems.js
export const menuItems = [
  {
    id: 1,
    name: "The Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, onion, pickles, and our signature sauce",
    price: 12.99,
    category: "signature-burgers",
    tags: ["best-seller", "signature"],
    calories: 850,
    image: "🍔",
    customizable: true,
    options: {
      size: ["Single", "Double", "Triple"],
      cheese: ["Cheddar", "Swiss", "Pepper Jack", "None"],
      toppings: ["Bacon", "Avocado", "Mushrooms", "Fried Egg", "Jalapenos"]
    }
  },
  {
    id: 2,
    name: "Crispy Chicken Burger",
    description: "Crispy fried chicken breast with coleslaw and spicy mayo",
    price: 11.99,
    category: "chicken",
    tags: ["spicy"],
    calories: 720,
    image: "🍗",
    customizable: true
  },
  {
    id: 3,
    name: "Mushroom Swiss Burger",
    description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese",
    price: 13.99,
    category: "signature-burgers",
    tags: ["vegetarian-option"],
    calories: 890,
    image: "🍄",
    customizable: true
  },
  {
    id: 4,
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese, bacon, green onions, and ranch",
    price: 8.99,
    category: "fries-sides",
    tags: ["shareable"],
    calories: 650,
    image: "🍟",
    customizable: true
  },
  {
    id: 5,
    name: "Veggie Delight",
    description: "Plant-based patty with avocado, lettuce, tomato, and vegan mayo",
    price: 10.99,
    category: "veggie",
    tags: ["vegan", "healthy"],
    calories: 580,
    image: "🥬",
    customizable: true
  },
  {
    id: 6,
    name: "Chocolate Shake",
    description: "Creamy chocolate milkshake topped with whipped cream",
    price: 5.99,
    category: "drinks",
    tags: ["dessert"],
    calories: 420,
    image: "🥤",
    customizable: true
  },
  {
    id: 7,
    name: "BBQ Bacon Burger",
    description: "Double patty with BBQ sauce, crispy bacon, and onion rings",
    price: 15.99,
    category: "signature-burgers",
    tags: ["spicy", "premium"],
    calories: 1050,
    image: "🥓",
    customizable: true
  },
  {
    id: 8,
    name: "Cheese Sticks",
    description: "Mozzarella sticks served with marinara sauce",
    price: 7.99,
    category: "fries-sides",
    tags: ["appetizer"],
    calories: 480,
    image: "🧀",
    customizable: false
  }
];