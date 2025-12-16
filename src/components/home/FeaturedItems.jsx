// components/home/FeaturedItems.jsx
import React from 'react';
import { Star, Flame, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedItems = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Triple Threat Burger",
      description: "Three juicy patties, triple cheese, bacon, and our special sauce",
      price: 18.99,
      rating: 4.9,
      time: "20 min",
      tags: ["🔥 HOT", "NEW"],
      image: "🍔🍔🍔"
    },
    {
      id: 2,
      name: "Loaded Animal Fries",
      description: "Crispy fries topped with cheese, grilled onions, thousand island",
      price: 9.99,
      rating: 4.7,
      time: "15 min",
      tags: ["BESTSELLER"],
      image: "🍟"
    },
    {
      id: 3,
      name: "Spicy Chicken Deluxe",
      description: "Spicy fried chicken, coleslaw, pickles, chipotle mayo",
      price: 14.99,
      rating: 4.8,
      time: "18 min",
      tags: ["🌶️ SPICY"],
      image: "🍗"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-black mb-4">FEATURED FAVORITES</h2>
          <p className="text-gray-600 text-lg">Customer favorites that never disappoint</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-gradient-to-b from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-6 hover:border-red-200 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <div className="h-40 bg-gradient-to-r from-yellow-100 to-red-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">{item.image}</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-black text-red-600">${item.price.toFixed(2)}</div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                  </div>
                  <Link
                    to={`/customize?item=${item.id}`}
                    className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors group-hover:w-32 group-hover:rounded-lg group-hover:px-4 transition-all duration-300 overflow-hidden"
                  >
                    <span className="hidden group-hover:inline font-bold text-sm">CUSTOMIZE</span>
                    <Flame className="w-5 h-5 group-hover:hidden" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-black font-bold text-lg hover:text-red-600 transition-colors"
          >
            VIEW FULL MENU
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;