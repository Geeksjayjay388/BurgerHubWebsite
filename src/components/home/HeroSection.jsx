import React from 'react';
import { ArrowRight, Clock, Shield, Truck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1920&q=80&auto=format&fit=crop"
          alt="Gourmet Burger Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 backdrop-blur-md border border-red-500/30 text-red-400 rounded-full text-sm font-semibold mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Now Open • 7 Days a Week
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Burgers
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Made Fresh Daily
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Experience quality ingredients, expert craftsmanship, and flavors that stand out.
              Every burger is made to order with care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/menu"
                className="group relative inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/customize"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all"
              >
                Customize Order
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { icon: Shield, title: "Quality", desc: "Fresh ingredients" },
                { icon: Truck, title: "Delivery", desc: "Free over $25" },
                { icon: Clock, title: "Fast", desc: "15 min average" }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <feature.icon className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-white">{feature.title}</span>
                  </div>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop&q=80&auto=format"
                alt="Premium gourmet burger"
                className="w-full h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Floating Stats Card within Image */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 z-20"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between text-white">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold text-xl">4.9</span>
                      </div>
                      <div className="text-xs text-gray-300">Average Rating</div>
                    </div>
                    <div className="h-10 w-px bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-1">5K+</div>
                      <div className="text-xs text-gray-300">Happy Customers</div>
                    </div>
                    <div className="h-10 w-px bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-1">15m</div>
                      <div className="text-xs text-gray-300">Avg. Wait Time</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decor Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;