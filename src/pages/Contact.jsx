// pages/Contact.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Navigation, Star, MessageSquare, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const locations = [
    {
      id: 1,
      name: "Downtown Flagship",
      address: "123 Burger Street, Downtown",
      phone: "(555) 123-4567",
      hours: "7AM - 11PM Daily",
      rating: 4.9,
      reviews: 1243,
      features: ["Dine-in", "Takeout", "Delivery", "Parking"]
    },
    {
      id: 2,
      name: "Northside Location",
      address: "456 Food Avenue, North District",
      phone: "(555) 987-6543",
      hours: "8AM - 10PM Daily",
      rating: 4.8,
      reviews: 892,
      features: ["Dine-in", "Drive-thru", "Takeout"]
    },
    {
      id: 3,
      name: "Westgate Mall",
      address: "Westgate Shopping Center, Food Court",
      phone: "(555) 456-7890",
      hours: "10AM - 9PM Daily",
      rating: 4.7,
      reviews: 567,
      features: ["Food Court", "Takeout", "Seating"]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-6 border border-white/10"
          >
            <MessageSquare className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">CONNECT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Whether you have a question about our menu, need assistance, or just want to give feedback.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center border border-red-500/30">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Call Us</h3>
                  <p className="text-gray-400 text-sm">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>
              <div className="text-2xl font-black text-white group-hover:text-red-500 transition-colors">(555) 123-4567</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Email Us</h3>
                  <p className="text-gray-400 text-sm">For general inquiries</p>
                </div>
              </div>
              <div className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors">hello@burgerhub.com</div>
            </div>

            <div className="bg-gradient-to-br from-[#111] to-black p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Opening Hours</h3>
                  <p className="text-gray-400 text-sm">Come visit us</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="font-bold text-white">7AM - 11PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Saturday - Sunday</span>
                  <span className="font-bold text-white">8AM - 11PM</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-black text-white text-xl mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-white" />
                  Order Issues?
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Experiencing problems with your order? We're here to help immediately.
                </p>
                <button className="w-full bg-white text-red-600 py-3 rounded-xl font-bold hover:shadow-lg transition-all text-sm">
                  REPORT AN ISSUE
                </button>
              </div>
            </div>
          </motion.div>

          {/* Locations & Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Locations */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-500" />
                Our Locations
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {locations.map((location) => (
                  <div key={location.id} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-red-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">{location.name}</h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                          <span className="font-bold text-white text-sm">{location.rating}</span>
                          <span className="text-gray-500 text-xs">({location.reviews})</span>
                        </div>
                      </div>
                      <button className="p-2 bg-white/5 rounded-lg text-white hover:bg-white/20 transition-colors">
                        <Navigation className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-400 text-sm flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" /> {location.address}
                      </p>
                      <p className="text-gray-400 text-sm flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5" /> {location.phone}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/5 rounded-md text-[10px] font-bold text-gray-400 border border-white/5">
                          {feature.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 focus:bg-black/60 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 focus:bg-black/60 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 focus:bg-black/60 transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 focus:bg-black/60 transition-all resize-none"
                    placeholder="Typing..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-xl font-black text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;