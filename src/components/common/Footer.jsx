// components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h2 className="text-2xl font-black">BURGERHUB</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Serving premium burgers, crispy fries, and refreshing drinks since 2015. Quality ingredients, made fresh daily.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-400 hover:text-white">Our Menu</Link></li>
              <li><Link to="/deals" className="text-gray-400 hover:text-white">Special Deals</Link></li>
              <li><Link to="/customize" className="text-gray-400 hover:text-white">Customize Burger</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Locations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@burgerhub.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Burger Street, Food City</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>7am - 11pm Daily</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get exclusive deals and updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg text-black focus:outline-none"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r-lg font-bold hover:bg-red-700">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">By subscribing, you agree to our Privacy Policy</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} BurgerHub. All rights reserved.</p>
          <p className="text-sm mt-2">Made with ❤️ for burger lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;