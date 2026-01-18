// components/home/Testimonials.jsx
import React from 'react';
import { Star, Quote, ThumbsUp, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Food Blogger",
      rating: 5,
      text: "Best burgers in town! The Triple Threat is absolutely insane. Quality ingredients and perfect cooking every time.",
      date: "2 days ago",
      avatar: "AJ",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Regular Customer",
      rating: 5,
      text: "I've tried every burger place in the city, and BurgerHub stands out. Their customizer is a game changer!",
      date: "1 week ago",
      avatar: "MG",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Food Critic",
      rating: 4.5,
      text: "The attention to detail in every burger is impressive. Fresh ingredients and creative combinations.",
      date: "3 days ago",
      avatar: "DC",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>CUSTOMER LOVE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Fans Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Join thousands of satisfied burger lovers who have made BurgerHub their top choice.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-24 h-24 text-white rotate-12" />
              </div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(testimonial.rating)
                        ? 'fill-amber-500 text-amber-500'
                        : i < testimonial.rating
                          ? 'fill-amber-500 text-amber-500' // Handle half stars if needed logic later
                          : 'text-gray-700'
                      }`}
                  />
                ))}
              </div>

              <p className="text-gray-300 text-lg italic mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>

              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest border-t border-white/5 pt-4 flex items-center gap-2">
                <MessageCircle className="w-3 h-3" />
                {testimonial.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { value: "4.9", label: "Average Rating", suffix: "/5" },
            { value: "15K+", label: "Happy Customers", suffix: "" },
            { value: "98%", label: "Would Recommend", suffix: "" },
            { value: "15m", label: "Avg. Wait Time", suffix: "" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
                {stat.value}<span className="text-2xl text-gray-600">{stat.suffix}</span>
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;