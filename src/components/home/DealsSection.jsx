// components/home/DealsSection.jsx
import React from 'react';
import { Timer, Tag, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const DealsSection = () => {
  const deals = [
    {
      id: 1,
      title: "BURGER COMBO",
      description: "Burger + Fries + Drink",
      originalPrice: 22.97,
      price: 16.99,
      discount: "25% OFF",
      timeLeft: "2:15:30",
      tag: "POPULAR",
      items: ["🍔", "🍟", "🥤"]
    },
    {
      id: 2,
      title: "FAMILY FEAST",
      description: "4 Burgers + Large Fries + 4 Drinks",
      originalPrice: 45.96,
      price: 34.99,
      discount: "SAVE $10",
      timeLeft: "5:30:45",
      tag: "BEST VALUE",
      items: ["🍔🍔🍔🍔", "🍟", "🥤🥤🥤🥤"]
    },
    {
      id: 3,
      title: "DOUBLE DELIGHT",
      description: "2 Burgers + 2 Sides",
      originalPrice: 28.98,
      price: 21.99,
      discount: "FLASH DEAL",
      timeLeft: "0:45:20",
      tag: "LIMITED",
      items: ["🍔🍔", "🍟🧀"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-6 h-6 text-red-600" />
              <span className="text-red-600 font-bold">SPECIAL OFFERS</span>
            </div>
            <h2 className="text-4xl font-black text-black">LIMITED TIME DEALS</h2>
            <p className="text-gray-600 mt-2">Don't miss out on these amazing offers</p>
          </div>
          <Link
            to="/deals"
            className="mt-4 md:mt-0 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            VIEW ALL DEALS
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-red-300 transition-all duration-300">
              {/* Deal Header */}
              <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-bold mb-2">
                      {deal.tag}
                    </span>
                    <h3 className="text-2xl font-black">{deal.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black">${deal.price.toFixed(2)}</div>
                    <div className="text-sm opacity-90 line-through">${deal.originalPrice.toFixed(2)}</div>
                  </div>
                </div>
                <p className="text-white/90">{deal.description}</p>
              </div>

              {/* Deal Items */}
              <div className="p-6">
                <div className="flex justify-center gap-4 mb-6">
                  {deal.items.map((item, idx) => (
                    <div key={idx} className="text-4xl transform hover:scale-110 transition-transform">
                      {item}
                    </div>
                  ))}
                </div>

                {/* Timer */}
                <div className="bg-gray-100 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-semibold">TIME LEFT</span>
                    </div>
                    <span className="text-red-600 font-bold">{deal.discount}</span>
                  </div>
                  <div className="flex justify-center gap-2">
                    {deal.timeLeft.split(':').map((time, idx) => (
                      <div key={idx} className="text-center">
                        <div className="bg-black text-white px-3 py-2 rounded-lg font-bold text-xl">
                          {time}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {idx === 0 ? 'HRS' : idx === 1 ? 'MIN' : 'SEC'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                  ADD TO CART - ${deal.price.toFixed(2)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;