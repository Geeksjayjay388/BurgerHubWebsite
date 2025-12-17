import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Award,
  Truck,
  Shield,
  CreditCard,
  ChevronRight,
  Heart,
  Smartphone,
  Download
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Top Features Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Free Delivery</div>
                <div className="text-sm text-gray-400">Orders over $25</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Quality Guaranteed</div>
                <div className="text-sm text-gray-400">Premium ingredients</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Secure Payment</div>
                <div className="text-sm text-gray-400">100% protected</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Easy Returns</div>
                <div className="text-sm text-gray-400">30-day policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 11h16M4 11c0-1.5 1-3 3-3h10c2 0 3 1.5 3 3M4 11v1c0 3 1 5 4 5h8c3 0 4-2 4-5v-1M7 8V7c0-1 .5-2 1.5-2h7c1 0 1.5 1 1.5 2v1" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">BurgerHub</h2>
                  <p className="text-sm text-gray-400">Est. 2015</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Crafting premium burgers with locally-sourced ingredients, cooked to perfection. 
                Every bite tells our story of passion, quality, and innovation.
              </p>
              
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/30 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Menu</h3>
            <ul className="space-y-3">
              {[
                "All Items",
                "Signature Burgers",
                "Family Meals",
                "Build Your Own",
                "Sides & Drinks",
                "Desserts"
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Locations",
                "Careers",
                "Franchise",
                "Press",
                "Sustainability"
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <a href="tel:5551234567" className="text-gray-300 hover:text-white transition-colors">(555) 123-4567</a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href="mailto:hello@burgerhub.com" className="text-gray-300 hover:text-white transition-colors">Made by Geekstechnologies911@gmail.com</a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Address</div>
                  <div className="text-gray-300">
                    123 Burger Street<br />
                    Food City, FC 12345
                  </div>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Hours</div>
                  <div className="text-gray-300 text-sm">
                    Mon-Thu: 11am - 11pm<br />
                    Fri-Sat: 11am - 2am<br />
                    Sun: 12pm - 10pm
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-y border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mb-6 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new menu items, and special promotions delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-gray-750 transition-all"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
            <div className="text-gray-400 text-sm">
              © {currentYear} BurgerHub. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>by our team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Apps Banner */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Download Our App</div>
                <div className="text-sm text-gray-400">Order faster, earn rewards</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex items-center gap-3 px-5 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-gray-900" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="font-semibold text-white">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center gap-3 px-5 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold text-white">Google Play</div>
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