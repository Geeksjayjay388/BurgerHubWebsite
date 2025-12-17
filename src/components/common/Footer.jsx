// components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Award,
  Truck,
  Shield,
  CreditCard,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Features Banner */}
      <div className="bg-gradient-to-r from-red-900 via-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <div className="font-bold text-sm">FREE DELIVERY</div>
                <div className="text-xs text-gray-400">Over $25</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <div className="font-bold text-sm">QUALITY GUARANTEE</div>
                <div className="text-xs text-gray-400">Premium Ingredients</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="font-bold text-sm">SAFE PAYMENT</div>
                <div className="text-xs text-gray-400">100% Secure</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="font-bold text-sm">EASY RETURNS</div>
                <div className="text-xs text-gray-400">30-Day Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column - Wider */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">B</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">🔥</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  BURGERHUB
                </h2>
                <p className="text-sm text-gray-400">Since 2015</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Crafting premium burgers with locally-sourced ingredients, cooked to perfection. 
              Every bite tells our story of passion, quality, and flavor innovation.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 group-hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300 group-hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 group-hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300 group-hover:scale-110">
                  <span className="font-bold text-sm">T</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">Explore</h3>
            <ul className="space-y-3">
              {[
                { text: "Full Menu", path: "/menu" },
                { text: "Signature Burgers", path: "/menu/burgers" },
                { text: "Family Meals", path: "/menu/family" },
                { text: "Build Your Own", path: "/customize" },
                { text: "Weekly Specials", path: "/deals" },
                { text: "Catering", path: "/catering" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="flex items-center gap-2 text-gray-400 hover:text-white group transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">Company</h3>
            <ul className="space-y-3">
              {[
                { text: "Our Story", path: "/about" },
                { text: "Locations", path: "/locations" },
                { text: "Careers", path: "/careers" },
                { text: "Franchise Info", path: "/franchise" },
                { text: "Press & Media", path: "/press" },
                { text: "Food Safety", path: "/safety" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="flex items-center gap-2 text-gray-400 hover:text-white group transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-gray-400 text-sm">(555) 123-4567</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-400 text-sm">hello@burgerhub.com</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="font-medium">Visit Us</div>
                  <div className="text-gray-400 text-sm">123 Burger Street<br />Food City, FC 12345</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <div className="font-medium">Hours</div>
                  <div className="text-gray-400 text-sm">
                    Mon-Thu: 11am-11pm<br />
                    Fri-Sat: 11am-2am<br />
                    Sun: 12pm-10pm
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Get the Juiciest Deals</h3>
              <p className="text-gray-400">Subscribe for exclusive offers, new menu items, and members-only discounts.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By subscribing, you agree to our Privacy Policy. You may unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {currentYear} BurgerHub. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <span>for burger lovers</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-600">
            BurgerHub® is a registered trademark. All menu items and promotions are subject to availability.
          </div>
        </div>
      </div>

      {/* Download Apps Banner */}
      <div className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg"></div>
              <div>
                <div className="font-bold">Get the App</div>
                <div className="text-xs text-gray-400">Order faster, earn rewards</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="w-6 h-6 bg-white rounded"></div>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;