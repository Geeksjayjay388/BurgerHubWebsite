// pages/Deals.jsx
import React from 'react';
import { Timer, Zap, Tag, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "HAPPY HOUR",
      description: "50% off all drinks",
      time: "3PM - 6PM Daily",
      price: null,
      discount: "50% OFF",
      tag: "DAILY DEAL",
      highlight: true
    },
    {
      id: 2,
      title: "FAMILY BUNDLE",
      description: "4 Burgers + Large Fries + 4 Drinks",
      originalPrice: 45.96,
      price: 32.99,
      discount: "SAVE $12",
      tag: "BEST VALUE",
      popular: true
    },
    {
      id: 3,
      title: "DOUBLE DATE",
      description: "2 Burgers + 2 Sides + 2 Drinks",
      originalPrice: 34.97,
      price: 24.99,
      discount: "28% OFF",
      tag: "PERFECT PAIR"
    },
    {
      id: 4,
      title: "STUDENT SPECIAL",
      description: "Burger + Fries + Drink",
      originalPrice: 22.97,
      price: 15.99,
      discount: "30% OFF",
      tag: "STUDENTS ONLY",
      requirements: "Valid student ID required"
    },
    {
      id: 5,
      title: "MIDNIGHT MUNCHIES",
      description: "Any burger after 10PM",
      time: "10PM - 2AM",
      price: 9.99,
      originalPrice: 12.99,
      discount: "23% OFF",
      tag: "LATE NIGHT"
    },
    {
      id: 6,
      title: "COMBO UPGRADE",
      description: "Upgrade any meal to large",
      price: 1.99,
      originalPrice: 2.99,
      discount: "33% OFF",
      tag: "ADD-ON"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <Zap className="w-6 h-6 text-yellow-500" />
          <span className="text-yellow-500 font-bold">HOT DEALS</span>
        </div>
        <h1 className="text-5xl font-black text-black mb-4">SPECIAL OFFERS</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't miss out on these limited-time offers. Our best deals updated daily!
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-red-50 p-4 rounded-2xl text-center">
          <div className="text-2xl font-black text-red-600 mb-1">12</div>
          <div className="text-sm text-gray-600">Active Deals</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-2xl text-center">
          <div className="text-2xl font-black text-yellow-600 mb-1">48</div>
          <div className="text-sm text-gray-600">Hours Left</div>
        </div>
        <div className="bg-green-50 p-4 rounded-2xl text-center">
          <div className="text-2xl font-black text-green-600 mb-1">$5K+</div>
          <div className="text-sm text-gray-600">Total Savings</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-2xl text-center">
          <div className="text-2xl font-black text-blue-600 mb-1">2.4K</div>
          <div className="text-sm text-gray-600">Deals Claimed</div>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className={`rounded-2xl overflow-hidden border-2 ${
              deal.highlight
                ? 'border-yellow-400 shadow-xl'
                : deal.popular
                ? 'border-red-400'
                : 'border-gray-200'
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Deal Header */}
            <div className={`p-6 ${
              deal.highlight
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                : deal.popular
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                : 'bg-gradient-to-r from-gray-900 to-black text-white'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-bold mb-2">
                    {deal.tag}
                  </span>
                  {deal.popular && (
                    <span className="inline-block ml-2 px-3 py-1 bg-white text-red-600 rounded-full text-sm font-bold">
                      🔥 MOST POPULAR
                    </span>
                  )}
                  <h3 className="text-2xl font-black">{deal.title}</h3>
                </div>
                {deal.discount && (
                  <div className="text-right">
                    <div className="text-3xl font-black">{deal.discount}</div>
                  </div>
                )}
              </div>
              <p className="opacity-90">{deal.description}</p>
            </div>

            {/* Deal Details */}
            <div className="bg-white p-6">
              {deal.time && (
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Timer className="w-4 h-4" />
                  <span className="font-medium">{deal.time}</span>
                </div>
              )}

              {deal.requirements && (
                <div className="text-sm text-gray-500 mb-4">
                  <CheckCircle className="w-4 h-4 inline mr-1" />
                  {deal.requirements}
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                {deal.price !== null && (
                  <div>
                    <div className="text-3xl font-black text-black">${deal.price.toFixed(2)}</div>
                    {deal.originalPrice && (
                      <div className="text-gray-500 line-through">${deal.originalPrice.toFixed(2)}</div>
                    )}
                  </div>
                )}
                {deal.time && !deal.price && (
                  <div className="text-2xl font-black text-black">{deal.time}</div>
                )}
              </div>

              <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                CLAIM THIS DEAL
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-3xl p-8 max-w-3xl mx-auto">
          <Tag className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-black text-black mb-2">MISSING A DEAL?</h3>
          <p className="text-gray-600 mb-6">
            Sign up for our newsletter to get exclusive deals delivered to your inbox
          </p>
          <div className="flex max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
              SIGN UP
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, just delicious deals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deals;