// components/home/QuickMenu.jsx
import React from 'react';
import { ChevronRight, Coffee, IceCream, Pizza, Salad } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickMenu = () => {
  const categories = [
    {
      name: "Signature Burgers",
      count: 12,
      icon: "🍔",
      color: "from-red-500 to-red-600",
      items: ["Classic", "Bacon", "Mushroom", "Spicy"]
    },
    {
      name: "Chicken Specials",
      count: 8,
      icon: "🍗",
      color: "from-yellow-500 to-yellow-600",
      items: ["Crispy", "Grilled", "Spicy", "Tenders"]
    },
    {
      name: "Fresh Sides",
      count: 10,
      icon: "🍟",
      color: "from-orange-500 to-orange-600",
      items: ["Fries", "Onion Rings", "Salads", "Nuggets"]
    },
    {
      name: "Drinks & Desserts",
      count: 15,
      icon: "🥤",
      color: "from-blue-500 to-blue-600",
      items: ["Shakes", "Sodas", "Ice Cream", "Coffee"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-black mb-4">QUICK BROWSE</h2>
          <p className="text-gray-600 text-lg">Find exactly what you're craving</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/menu?category=${category.name.toLowerCase().replace(' ', '-')}`}
              className="group"
            >
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-red-300 hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.count} items</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-red-600 font-bold text-sm">VIEW ALL</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl mb-2">🥩</div>
            <div className="font-bold text-black">100% Beef</div>
            <div className="text-sm text-gray-600">Premium Quality</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl mb-2">🌱</div>
            <div className="font-bold text-black">Fresh Veggies</div>
            <div className="text-sm text-gray-600">Daily Delivery</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl mb-2">🧑‍🍳</div>
            <div className="font-bold text-black">Expert Chefs</div>
            <div className="text-sm text-gray-600">20+ Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-bold text-black">Fast Service</div>
            <div className="text-sm text-gray-600">15 Min Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickMenu;