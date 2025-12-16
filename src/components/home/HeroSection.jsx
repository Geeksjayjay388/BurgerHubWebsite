// components/home/HeroSection.jsx
import React from 'react';
import { ArrowRight, Clock, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-red-600 text-white rounded-full text-sm font-bold mb-4">
              🔥 NEW: TRIPLE THREAT BURGER
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-6">
              BURGERS THAT
              <span className="block text-red-600">HIT DIFFERENT</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-xl">
              Crafted with premium ingredients, cooked to perfection, and served with passion. 
              Taste the difference that makes us the #1 burger spot in town.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                ORDER NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/customize"
                className="bg-white text-black border-2 border-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                BUILD YOUR OWN
              </Link>
            </div>
          </div>

          {/* Right Content - Stats & Features */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-black text-red-600 mb-2">15,000+</div>
                <div className="text-gray-600 font-semibold">Happy Customers</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-black text-red-600 mb-2">4.9</div>
                <div className="text-gray-600 font-semibold">Average Rating</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Fast Service</h3>
                  <p className="text-gray-600 text-sm">Ready in 15 minutes or less</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Fresh Ingredients</h3>
                  <p className="text-gray-600 text-sm">Locally sourced, never frozen</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Free Delivery</h3>
                  <p className="text-gray-600 text-sm">On orders over $25</p>
                </div>
              </div>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-4 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">DEAL OF THE DAY</h3>
                  <p className="text-sm opacity-90">Double Burger + Fries for $14.99</p>
                </div>
                <Link
                  to="/deals"
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
                >
                  CLAIM DEAL
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