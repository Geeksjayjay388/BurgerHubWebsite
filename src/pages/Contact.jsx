// pages/Contact.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Navigation, Star } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-black mb-4">GET IN TOUCH</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions, feedback, or just want to say hi? We'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          {/* Contact Cards */}
          <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-red-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-black">Call Us</h3>
                <p className="text-gray-600">Speak with our team</p>
              </div>
            </div>
            <div className="text-2xl font-black text-black">(555) 123-4567</div>
            <p className="text-sm text-gray-500 mt-2">Available 7AM - 11PM daily</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border-2 border-yellow-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-bold text-black">Email Us</h3>
                <p className="text-gray-600">For general inquiries</p>
              </div>
            </div>
            <div className="text-lg font-bold text-black">hello@burgerhub.com</div>
            <p className="text-sm text-gray-500 mt-2">Typically respond within 24 hours</p>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Business Hours</h3>
                <p className="text-gray-300">All locations</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-bold">7AM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span className="font-bold">8AM - 11PM</span>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">🍔 Order Issues?</h3>
            <p className="text-sm opacity-90 mb-4">
              Experiencing problems with your order? We're here to help immediately.
            </p>
            <button className="w-full bg-white text-red-600 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              REPORT ORDER ISSUE
            </button>
          </div>
        </div>

        {/* Locations */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-black text-black mb-6">OUR LOCATIONS</h2>
          <div className="space-y-6">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{location.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">{location.rating}</span>
                      <span className="text-gray-600 text-sm">({location.reviews} reviews)</span>
                    </div>
                  </div>
                  <button className="mt-2 md:mt-0 bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                    <Navigation className="w-4 h-4" />
                    GET DIRECTIONS
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <h2 className="text-3xl font-black text-black mb-6">SEND US A MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;