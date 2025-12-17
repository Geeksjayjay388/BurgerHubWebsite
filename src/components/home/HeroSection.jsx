// components/home/HeroSection.jsx
import React from 'react';
import { ArrowRight, Clock, Shield, Truck, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              <Star className="w-4 h-4 fill-white" />
              <span>NEW: TRIPLE THREAT BURGER</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              BURGERS THAT
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                HIT DIFFERENT
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
              Crafted with <span className="font-semibold text-red-600">premium ingredients</span>, cooked to perfection, and served with passion. 
              Every bite is an experience that makes us the #1 burger spot in town.
            </p>
            
            {/* Key Features List */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Fresh, Never Frozen</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">24/7 Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Customize Any Burger</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="group relative bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">ORDER NOW</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/customize"
                className="relative bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 hover:shadow-xl group"
              >
                <span className="relative z-10">BUILD YOUR OWN</span>
                <div className="absolute inset-0 bg-gray-900 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image with Stats Overlay */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-red-500/20 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&q=80&auto=format" 
                alt="Premium gourmet burger with melted cheese and fresh ingredients"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-red-600 fill-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">15m</div>
                    <div className="text-sm text-gray-600">Avg. Wait Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid Below Image */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Fresh Ingredients</h3>
                  <p className="text-gray-600 text-xs">Locally sourced</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Free Delivery</h3>
                  <p className="text-gray-600 text-xs">Orders over $25</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-lg font-bold text-blue-600">24/7</div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Open Late</h3>
                  <p className="text-gray-600 text-xs">Until 2 AM</p>
                </div>
              </div>
            </div>

            {/* Promo Banner */}
            <div className="mt-6 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white p-4 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-lg">DEAL OF THE DAY</h3>
                  <p className="text-sm opacity-90">Double Burger + Fries + Drink for $16.99</p>
                </div>
                <Link
                  to="/deals"
                  className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  CLAIM DEAL →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;