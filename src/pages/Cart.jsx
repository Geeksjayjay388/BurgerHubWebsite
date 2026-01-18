import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, Tag, ShoppingCart, ShieldCheck, RotateCcw, Phone, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'The Classic Burger',
      price: 12.99,
      quantity: 2,
      customizations: ['Double Patty', 'Cheddar Cheese', 'Bacon'],
      image: 'burger'
    },
    {
      id: 2,
      name: 'Loaded Fries',
      price: 8.99,
      quantity: 1,
      customizations: ['Extra Cheese', 'Bacon Bits'],
      image: 'fries'
    },
    {
      id: 3,
      name: 'Chocolate Shake',
      price: 5.99,
      quantity: 1,
      customizations: ['Whipped Cream'],
      image: 'drink'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const getItemIcon = (type) => {
    const iconClass = "w-8 h-8 sm:w-10 sm:h-10 text-white";
    switch (type) {
      case 'burger':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 11h16M4 11c0-1.5 1-3 3-3h10c2 0 3 1.5 3 3M4 11v1c0 3 1 5 4 5h8c3 0 4-2 4-5v-1M7 8V7c0-1 .5-2 1.5-2h7c1 0 1.5 1 1.5 2v1" />
          </svg>
        );
      case 'fries':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 20h12M8 20V8M12 20V6M16 20V10M5 8l1-4h12l1 4H5z" />
          </svg>
        );
      case 'drink':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 3h12M6 3v18h12V3M9 3v3m6-3v3M8 9h8M8 14h8" />
          </svg>
        );
      default:
        return <Package className={iconClass} />;
    }
  };

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'BURGER20') {
      setDiscount(20);
      alert('Promo code applied! 20% off your order!');
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const deliveryFee = subtotal > 25 ? 0 : 4.99;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + tax + deliveryFee - discountAmount;

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-red-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Your Cart</h1>
          <p className="text-gray-400 mt-2">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} currently in cart</p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/5 rounded-full mb-6 border border-white/10">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Your cart is empty</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Looks like you haven't added any delicious burgers yet.</p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-red-500/20 transition-all hover:-translate-y-1"
            >
              Start Ordering
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.id}
                  className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex gap-5">
                    {/* Item Icon */}
                    <div className="w-20 h-20 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-white/20 transition-colors">
                      {getItemIcon(item.image)}
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                          <p className="text-red-400 font-bold mt-1">${item.price.toFixed(2)}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Customizations */}
                      {item.customizations && item.customizations.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.customizations.map((custom, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/10"
                            >
                              {custom}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-md flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-white text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-md flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-lg font-bold text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Promo Code */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-2 mb-4 text-white font-bold">
                  <Tag className="w-5 h-5 text-red-500" />
                  <h3>Promo Code</h3>
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-grow px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-red-500/50 text-white placeholder-gray-500 transition-colors"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Try <span className="text-red-400 font-mono">BURGER20</span> for 20% off
                </p>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sticky top-6"
              >
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (8%)</span>
                    <span className="text-white font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Delivery Fee</span>
                    <span className="text-white font-medium">
                      {deliveryFee === 0 ? (
                        <span className="text-green-400">Free</span>
                      ) : (
                        `$${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({discount}%)</span>
                      <span className="font-medium">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-bold text-white">Total</span>
                    <div className="text-right">
                      <span className="text-3xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {deliveryFee > 0 && (
                    <p className="text-sm text-gray-500 mt-2 text-right">
                      Add <span className="text-white font-medium">${(25 - subtotal).toFixed(2)}</span> for free delivery
                    </p>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-red-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Proceed to Checkout
                </button>

                <div className="space-y-3 pt-6 mt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>Secure encrypted checkout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <RotateCcw className="w-4 h-4 text-blue-400" />
                    <span>30-minute delivery guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;