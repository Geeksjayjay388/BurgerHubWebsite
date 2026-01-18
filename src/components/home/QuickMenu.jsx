import React from 'react';
import {
  ChevronRight,
  Beef as BurgerIcon,
  Drumstick as ChickenIcon,
  Carrot as VegIcon,
  GlassWater as DrinkIcon,
  Beef as MeatIcon,
  ChefHat as ChefIcon,
  Zap as FastIcon,
  Leaf
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuickMenu = () => {
  const categories = [
    {
      name: "Signature Burgers",
      count: 12,
      icon: <BurgerIcon className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      items: ["Classic", "Bacon", "Mushroom", "Spicy"],
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433f?w=600&h=400&fit=crop"
    },
    {
      name: "Chicken Specials",
      count: 8,
      icon: <ChickenIcon className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500",
      items: ["Crispy", "Grilled", "Spicy", "Tenders"],
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&h=400&fit=crop"
    },
    {
      name: "Fresh Sides",
      count: 10,
      icon: <VegIcon className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      items: ["Fries", "Onion Rings", "Salads", "Nuggets"],
      image: "https://images.unsplash.com/photo-1585109641517-5fbf70e3d4f2?w=600&h=400&fit=crop"
    },
    {
      name: "Drinks & Desserts",
      count: 15,
      icon: <DrinkIcon className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      items: ["Shakes", "Sodas", "Ice Cream", "Coffee"],
      image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=600&h=400&fit=crop"
    }
  ];

  const features = [
    {
      icon: <MeatIcon className="w-6 h-6" />,
      title: "100% Beef",
      subtitle: "Premium Quality",
      color: "text-red-500"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Fresh Veggies",
      subtitle: "Daily Delivery",
      color: "text-green-500"
    },
    {
      icon: <ChefIcon className="w-6 h-6" />,
      title: "Expert Chefs",
      subtitle: "20+ Years Exp",
      color: "text-yellow-500"
    },
    {
      icon: <FastIcon className="w-6 h-6" />,
      title: "Fast Service",
      subtitle: "15 Min Guarantee",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-orange-900/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            QUICK <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">BROWSE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Find exactly what you're craving in seconds
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/menu?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="group block h-full"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full relative overflow-hidden group-hover:-translate-y-2">
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{category.count} delicious items</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-black/20 text-gray-300 text-xs font-medium rounded-full border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 group-hover:border-white/10">
                    <span className="text-white font-bold text-sm tracking-wide">VIEW ALL</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
            >
              <div className={`mb-3 flex justify-center ${feature.color}`}>
                {feature.icon}
              </div>
              <div className="font-bold text-white mb-1">{feature.title}</div>
              <div className="text-sm text-gray-500">{feature.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickMenu;