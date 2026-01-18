// pages/Deals.jsx
import React from 'react';
import { Timer, Tag, Clock, Users, Moon, Plus, ArrowRight, Sparkles, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

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
      color: "from-blue-500 to-cyan-500"
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
      color: "from-red-500 to-pink-500",
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
      color: "from-purple-500 to-violet-500"
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
      color: "from-green-500 to-emerald-500",
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
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      title: "Size Upgrade",
      description: "Upgrade any combo to large size",
      price: 1.99,
      originalPrice: 2.99,
      tag: "ADD-ON",
      icon: Plus,
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-sm font-bold mb-6"
          >
            <Flame className="w-4 h-4" />
            <span>HOT OFFERS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            EXCLUSIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">DEALS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Save big on your favorites with our limited-time promotions and daily specials.
          </motion.p>
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {deals.map((deal, index) => {
            const Icon = deal.icon;

            return (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className={`bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border transition-all duration-300 group hover:-translate-y-2 ${deal.popular
                    ? 'border-red-500/50 shadow-lg shadow-red-900/20'
                    : 'border-white/10 hover:border-white/20'
                  }`}
              >
                {/* Card Header */}
                <div className="p-8 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${deal.color} opacity-10 rounded-bl-full`} />

                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${deal.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-bold text-gray-300">
                      {deal.tag}
                    </span>
                  </div>

                  {deal.popular && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500 text-white rounded-lg text-xs font-bold mb-4 shadow-lg shadow-red-500/20">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {deal.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {deal.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-8 pt-0">
                  {deal.time && (
                    <div className="flex items-center gap-2 text-gray-400 mb-6 text-sm bg-white/5 p-3 rounded-xl border border-white/5">
                      <Timer className="w-4 h-4 text-red-500" />
                      <span>{deal.time}</span>
                    </div>
                  )}

                  {deal.price !== undefined && (
                    <div className="mb-8">
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-black text-white">
                          ${deal.price.toFixed(2)}
                        </span>
                        {deal.originalPrice && (
                          <span className="text-lg text-gray-500 line-through decoration-red-500/50">
                            ${deal.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {deal.savings && (
                        <p className="text-sm font-bold text-green-400 mt-2 flex items-center gap-1">
                          You save ${deal.savings.toFixed(2)}
                        </p>
                      )}
                    </div>
                  )}

                  {deal.discount && !deal.price && (
                    <div className="mb-8">
                      <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${deal.color}`}>
                        {deal.discount}
                      </div>
                    </div>
                  )}

                  <button className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                    Claim Offer
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {deal.note && (
                    <p className="text-xs text-gray-500 text-center mt-4">{deal.note}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-900/20 blur-[100px]" />

          <div className="relative z-10 p-8 lg:p-16 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
              <Tag className="w-8 h-8 text-red-500" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Never Miss a Deal
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
              Subscribe to our newsletter for exclusive offers, secret menu items, and birthday treats delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all"
              />
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-red-900/20 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              No spam, just burgers. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Deals;