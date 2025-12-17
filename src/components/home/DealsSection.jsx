// components/home/DealsSection.jsx
import React from 'react';
import { Timer, Tag, Zap, CheckCircle, ShoppingCart, Users, Flame,ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DealsSection = () => {
  const deals = [
    {
      id: 1,
      title: "CLASSIC COMBO",
      description: "Signature Burger + Crispy Fries + Refreshing Drink",
      originalPrice: 22.97,
      price: 16.99,
      discount: "25% OFF",
      timeLeft: "02:15:30",
      tag: "MOST POPULAR",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&crop=center",
      gradient: "from-red-600 to-orange-500",
      features: ["Free Delivery", "Customizable", "Serves 1"],
      itemsCount: 3
    },
    {
      id: 2,
      title: "FAMILY FEAST",
      description: "4 Premium Burgers + Large Fries + 4 Refreshing Drinks",
      originalPrice: 45.96,
      price: 34.99,
      discount: "SAVE $10+",
      timeLeft: "05:30:45",
      tag: "BEST VALUE",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop&crop=center",
      gradient: "from-purple-600 to-pink-500",
      features: ["Feeds 4 People", "Family Favorite", "Free Extras"],
      itemsCount: 9
    },
    {
      id: 3,
      title: "DOUBLE DELIGHT",
      description: "Two Gourmet Burgers + Two Premium Sides",
      originalPrice: 28.98,
      price: 21.99,
      discount: "FLASH SALE",
      timeLeft: "00:45:20",
      tag: "LIMITED TIME",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop&crop=center",
      gradient: "from-amber-600 to-yellow-500",
      features: ["Perfect for Two", "Quick Meal", "Custom Sides"],
      itemsCount: 4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full text-sm font-bold mb-4">
            <Flame className="w-4 h-4" />
            HOT DEALS
          </div>
          
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              LIMITED TIME
            </span>{" "}
            OFFERS
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Exclusive bundles crafted for maximum value and flavor. 
            <span className="font-semibold text-red-600"> Prices increase when timer hits zero!</span>
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {deals.map((deal) => (
            <div 
              key={deal.id} 
              className={`bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group ${
                deal.tag === "MOST POPULAR" ? "ring-2 ring-red-500 ring-offset-4" : ""
              }`}
            >
              {/* Deal Tag */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${deal.gradient} shadow-lg`}>
                  {deal.tag}
                </span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white text-gray-900 px-3 py-1.5 rounded-full shadow-lg font-bold text-sm">
                  {deal.discount}
                </div>
              </div>

              {/* Deal Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${deal.gradient} opacity-20`}></div>
              </div>

              {/* Deal Content */}
              <div className="p-6">
                {/* Price Section */}
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-3xl font-black text-gray-900">${deal.price.toFixed(2)}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm line-through">${deal.originalPrice.toFixed(2)}</span>
                      <span className="text-green-600 text-xs font-bold">SAVE ${(deal.originalPrice - deal.price).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{deal.itemsCount} items</span>
                  </div>
                </div>

                {/* Deal Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{deal.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {deal.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Timer Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-semibold text-gray-700">TIME REMAINING</span>
                    </div>
                    <span className="text-xs text-gray-500">Hurry! Limited stock</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex justify-center gap-3">
                      {deal.timeLeft.split(':').map((time, idx) => (
                        <div key={idx} className="text-center">
                          <div className="bg-gradient-to-b from-gray-900 to-black text-white px-4 py-3 rounded-xl font-bold text-xl min-w-[60px]">
                            {time}
                          </div>
                          <div className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
                            {idx === 0 ? 'Hours' : idx === 1 ? 'Minutes' : 'Seconds'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="group relative w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>ADD TO CART - ${deal.price.toFixed(2)}</span>
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 max-w-2xl border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <span className="text-red-600">🔥 All deals include</span> free delivery & satisfaction guarantee
              </h3>
              <p className="text-gray-600 mb-6">
                Plus, get exclusive access to member-only deals when you sign up for our rewards program
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/deals/all"
                  className="group bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  VIEW ALL 12 DEALS
                  <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </Link>
                <Link
                  to="/rewards"
                  className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-full font-bold hover:border-red-300 hover:bg-red-50 transition-all duration-300"
                >
                  JOIN REWARDS
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All deals are customizable</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Free delivery over $25</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ArrowRight component needed for the button */}
      {() => {
        const ArrowRight = ({ className }) => (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        );
        return null;
      }}
    </section>
  );
};

export default DealsSection;