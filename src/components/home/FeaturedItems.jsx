import React from 'react';
import { Star, Flame, Clock, ShoppingBag, ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedItems = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Triple Threat Burger",
      description: "Three juicy patties, triple cheese, bacon, and our special sauce",
      price: 18.99,
      rating: 4.9,
      time: "20 min",
      tags: ["HOT", "NEW"],
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5",
      alt: "Triple cheeseburger with bacon"
    },
    {
      id: 2,
      name: "Loaded Animal Fries",
      description: "Crispy fries topped with cheese, grilled onions, thousand island",
      price: 9.99,
      rating: 4.7,
      time: "15 min",
      tags: ["BESTSELLER"],
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.6",
      alt: "Loaded fries with cheese sauce"
    },
    {
      id: 3,
      name: "Spicy Chicken Deluxe",
      description: "Spicy fried chicken, coleslaw, pickles, chipotle mayo",
      price: 14.99,
      rating: 4.8,
      time: "18 min",
      tags: ["SPICY"],
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5",
      alt: "Spicy fried chicken sandwich"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">FAVORITES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Customer favorites that never disappoint
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={item}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10"
            >
              <div className="relative">
                {/* Image container */}
                <div className="h-64 rounded-2xl overflow-hidden mb-5 relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Floating Tags */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-full text-xs font-bold flex items-center gap-1">
                        {tag === "HOT" && <Flame className="w-3 h-3 text-red-500 fill-current" />}
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Add Button */}
                  <button className="absolute bottom-3 right-3 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-500 hover:text-white shadow-lg">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-2 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{item.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg border border-yellow-500/20">
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                      <span className="font-bold text-sm text-yellow-500">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 mb-0.5">Price</span>
                      <div className="text-2xl font-black text-white">${item.price.toFixed(2)}</div>
                    </div>

                    <Link
                      to={`/customize?item=${item.id}`}
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl font-semibold transition-all group-hover:border-red-500/30 group-hover:bg-red-500/10 group-hover:text-red-400"
                    >
                      <span className="text-sm">Customize</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105"
          >
            VIEW FULL MENU
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedItems;