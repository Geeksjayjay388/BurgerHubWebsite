// components/common/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart count

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Customize', path: '/customize' },
    { name: 'Deals', path: '/deals' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Order: (555) 123-4567</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Find a Store</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 font-bold">OPEN NOW!</span>
            <span>7am - 11pm Daily</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <div>
              <h1 className="text-3xl font-black text-black tracking-tight">BURGERHUB</h1>
              <p className="text-sm text-gray-600 -mt-1">PREMIUM BURGERS & FRIES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-semibold text-gray-700 hover:text-red-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-7 h-7 text-black" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
            </Link>

            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors hidden md:block">
              ORDER NOW
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-semibold text-gray-700 hover:text-red-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors mt-2">
                ORDER NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;