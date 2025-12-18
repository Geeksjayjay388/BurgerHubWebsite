// components/home/HeroSection.jsx
import React from 'react';
import { ArrowRight, Clock, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-6">
              Now Open • 7 Days a Week
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Burgers
              <span className="block text-red-600">Made Fresh Daily</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience quality ingredients, expert craftsmanship, and flavors that stand out. 
              Every burger is made to order with care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                View Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/customize"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold hover:border-gray-300 transition-colors"
              >
                Customize Order
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-gray-900">Quality</span>
                </div>
                <p className="text-sm text-gray-600">Fresh ingredients</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-gray-900">Delivery</span>
                </div>
                <p className="text-sm text-gray-600">Free over $25</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-gray-900">Fast</span>
                </div>
                <p className="text-sm text-gray-600">15 min average</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop&q=80&auto=format" 
                alt="Premium gourmet burger"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Average rating</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5K+</div>
                  <div className="text-sm text-gray-600">Happy customers</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">15m</div>
                  <div className="text-sm text-gray-600">Avg. wait time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;