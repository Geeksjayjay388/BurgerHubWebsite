// pages/Deals.jsx
import React from 'react';
import { Timer, Tag, Clock, Users, Moon, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "Happy Hour Special",
      description: "Half price on all beverages",
      time: "3PM - 6PM Daily",
      discount: "50% OFF",
      tag: "DAILY",
      icon: Clock,
      color: "blue"
    },
    {
      id: 2,
      title: "Family Bundle",
      description: "4 Burgers + Large Fries + 4 Drinks",
      originalPrice: 45.96,
      price: 32.99,
      savings: 12.97,
      tag: "POPULAR",
      icon: Users,
      color: "red",
      popular: true
    },
    {
      id: 3,
      title: "Double Date Deal",
      description: "2 Burgers + 2 Sides + 2 Drinks",
      originalPrice: 34.97,
      price: 24.99,
      savings: 9.98,
      tag: "COUPLES",
      icon: Users,
      color: "purple"
    },
    {
      id: 4,
      title: "Student Discount",
      description: "Burger + Fries + Drink with valid student ID",
      originalPrice: 22.97,
      price: 15.99,
      savings: 6.98,
      tag: "STUDENTS",
      icon: Tag,
      color: "green",
      note: "Valid student ID required"
    },
    {
      id: 5,
      title: "Late Night Special",
      description: "Any signature burger after 10PM",
      time: "10PM - 2AM",
      price: 9.99,
      originalPrice: 12.99,
      tag: "NIGHT OWL",
      icon: Moon,
      color: "indigo"
    },
    {
      id: 6,
      title: "Size Upgrade",
      description: "Upgrade any combo to large size",
      price: 1.99,
      originalPrice: 2.99,
      tag: "ADD-ON",
      icon: Plus,
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
    red: { bg: 'bg-red-50', text: 'text-red-600', badge: 'bg-red-100 text-red-700' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
    green: { bg: 'bg-green-50', text: 'text-green-600', badge: 'bg-green-100 text-green-700' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Special Offers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save more with our exclusive deals and limited-time promotions
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {deals.map((deal) => {
            const Icon = deal.icon;
            const colors = colorClasses[deal.color];
            
            return (
              <div
                key={deal.id}
                className={`bg-white rounded-xl overflow-hidden border ${
                  deal.popular ? 'border-red-200 shadow-lg' : 'border-gray-200'
                } hover:shadow-xl transition-shadow`}
              >
                {/* Card Header */}
                <div className={`${colors.bg} p-6`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 ${colors.badge} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <span className={`px-3 py-1 ${colors.badge} rounded-full text-xs font-semibold`}>
                      {deal.tag}
                    </span>
                  </div>
                  {deal.popular && (
                    <div className="inline-block px-3 py-1 bg-red-600 text-white rounded-full text-xs font-semibold mb-2">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {deal.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {deal.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {deal.time && (
                    <div className="flex items-center gap-2 text-gray-600 mb-4 text-sm">
                      <Timer className="w-4 h-4" />
                      <span>{deal.time}</span>
                    </div>
                  )}

                  {deal.note && (
                    <p className="text-sm text-gray-500 mb-4">{deal.note}</p>
                  )}

                  {deal.price !== undefined && (
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">
                          ${deal.price.toFixed(2)}
                        </span>
                        {deal.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            ${deal.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {deal.savings && (
                        <p className={`text-sm ${colors.text} font-semibold mt-1`}>
                          Save ${deal.savings.toFixed(2)}
                        </p>
                      )}
                    </div>
                  )}

                  {deal.discount && !deal.price && (
                    <div className="mb-6">
                      <div className={`text-2xl font-bold ${colors.text}`}>
                        {deal.discount}
                      </div>
                    </div>
                  )}

                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Claim Offer
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Tag className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Get Exclusive Deals
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for early access to new deals and special promotions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;