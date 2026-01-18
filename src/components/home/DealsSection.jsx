import React from 'react';
import { Timer, Tag, Zap, CheckCircle, ShoppingCart, Users, Flame, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      gradient: "from-red-600 to-orange-600",
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
      gradient: "from-purple-600 to-pink-600",
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
      gradient: "from-amber-500 to-yellow-500",
      features: ["Perfect for Two", "Quick Meal", "Custom Sides"],
      itemsCount: 4
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Dark Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black opacity-80" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/20 text-red-500 rounded-full text-sm font-bold mb-6 backdrop-blur-sm"
          >
            <Flame className="w-4 h-4 fill-current animate-pulse" />
            HOT DEALS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Limited Time
            </span>{" "}
            Offers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            Exclusive bundles crafted for maximum value and flavor.
            <span className="text-red-400 font-medium block mt-2">Prices increase when timer hits zero!</span>
          </motion.p>
        </div>

        {/* Deals Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {deals.map((deal) => (
            <motion.div
              key={deal.id}
              variants={item}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20"
            >
              {/* Deal Tag */}
              {deal.tag && (
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${deal.gradient} shadow-lg shadow-black/50 border border-white/10`}>
                    {deal.tag}
                  </span>
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-black/80 backdrop-blur-md text-white border border-white/10 px-3 py-1.5 rounded-full font-bold text-sm shadow-lg">
                  {deal.discount}
                </div>
              </div>

              {/* Deal Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
              </div>

              {/* Deal Content */}
              <div className="p-8 relative -mt-12">
                {/* Price Section */}
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <div className="text-4xl font-black text-white tracking-tight">${deal.price.toFixed(2)}</div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-gray-500 text-sm line-through decoration-red-500/50">${deal.originalPrice.toFixed(2)}</span>
                      <span className="text-green-400 text-xs font-bold px-2 py-0.5 bg-green-900/30 rounded border border-green-500/30">
                        SAVE ${(deal.originalPrice - deal.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span>{deal.itemsCount} items</span>
                  </div>
                </div>

                {/* Deal Info */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{deal.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[40px]">{deal.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {deal.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Timer Section */}
                <div className="mb-6 bg-black/20 rounded-2xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-1.5 text-red-400 font-semibold">
                      <Timer className="w-3.5 h-3.5" />
                      OFFER ENDS IN
                    </div>
                  </div>

                  <div className="flex justify-between gap-2">
                    {deal.timeLeft.split(':').map((time, idx) => (
                      <div key={idx} className="text-center flex-1">
                        <div className="bg-black/50 border border-white/10 text-white py-2 rounded-lg font-mono font-bold text-lg">
                          {time}
                        </div>
                        <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">
                          {idx === 0 ? 'Hrs' : idx === 1 ? 'Mins' : 'Secs'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full group/btn relative overflow-hidden rounded-xl font-bold transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${deal.gradient} opacity-90 group-hover/btn:opacity-100 transition-opacity`} />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                  <div className="relative flex items-center justify-center gap-2 py-4 text-white">
                    <ShoppingCart className="w-5 h-5" />
                    <span>ADD TO CART</span>
                    <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-300" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-8">
            <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-3xl p-1 bg-gradient-to-r from-red-600/30 to-orange-600/30">
              <div className="bg-black/90 backdrop-blur-xl rounded-[22px] p-8 md:p-12 border border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  <span className="text-red-500">🔥 All deals include</span> free delivery & satisfaction guarantee
                </h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  Plus, get exclusive access to member-only deals when you sign up for our rewards program
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/deals/all"
                    className="group relative bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5 text-red-600 fill-current" />
                    VIEW ALL OFFERS
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/rewards"
                    className="group bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold hover:border-red-500 hover:text-red-500 transition-all"
                  >
                    JOIN REWARDS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DealsSection;