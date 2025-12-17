import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, Tag, ShoppingCart, ShieldCheck, RotateCcw, Phone, Package } from 'lucide-react';

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
    const iconClass = "w-10 h-10";
    switch(type) {
      case 'burger':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 11h16M4 11c0-1.5 1-3 3-3h10c2 0 3 1.5 3 3M4 11v1c0 3 1 5 4 5h8c3 0 4-2 4-5v-1M7 8V7c0-1 .5-2 1.5-2h7c1 0 1.5 1 1.5 2v1" />
          </svg>
        );
      case 'fries':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 20h12M8 20V8M12 20V6M16 20V10M5 8l1-4h12l1 4H5z" />
          </svg>
        );
      case 'drink':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mt-4">Shopping Cart</h1>
        <p className="text-gray-600 mt-2">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
            <ShoppingCart className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Start adding items to your cart to see them here.</p>
          <Link
            to="/menu"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  {/* Item Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-700">
                    {getItemIcon(item.image)}
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-900 font-medium mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Customizations */}
                    {item.customizations && item.customizations.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">Customizations:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.customizations.map((custom, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-200"
                            >
                              {custom}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="font-medium text-gray-900 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Code */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-900">Promo Code</h3>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <button
                  onClick={applyPromoCode}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Apply
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Try <span className="font-semibold text-gray-700">BURGER20</span> for 20% off your order
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-medium text-gray-900">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600 font-semibold">Free</span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discount}%)</span>
                    <span className="font-medium">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    Add ${(25 - subtotal).toFixed(2)} more for free delivery
                  </p>
                )}
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-gray-900 text-white text-center py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-6"
              >
                Proceed to Checkout
              </Link>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-gray-400" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <RotateCcw className="w-5 h-5 text-gray-400" />
                  <span>30-minute guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;