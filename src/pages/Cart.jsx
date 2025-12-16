// pages/Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, Tag } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'The Classic Burger',
      price: 12.99,
      quantity: 2,
      customizations: ['Double Patty', 'Cheddar Cheese', 'Bacon'],
      image: '🍔'
    },
    {
      id: 2,
      name: 'Loaded Fries',
      price: 8.99,
      quantity: 1,
      customizations: ['Extra Cheese', 'Bacon Bits'],
      image: '🍟'
    },
    {
      id: 3,
      name: 'Chocolate Shake',
      price: 5.99,
      quantity: 1,
      customizations: ['Whipped Cream'],
      image: '🥤'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>
        <h1 className="text-4xl font-black text-black mt-4">YOUR CART</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Add some delicious burgers to get started!</p>
          <Link
            to="/menu"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-700 transition-colors"
          >
            BROWSE MENU
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                  <div className="flex gap-6">
                    {/* Item Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-5xl">{item.image}</span>
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-black">{item.name}</h3>
                          <p className="text-red-600 font-bold text-lg">${item.price.toFixed(2)}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Customizations */}
                      {item.customizations && item.customizations.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Customizations:</p>
                          <div className="flex flex-wrap gap-2">
                            {item.customizations.map((custom, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
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
                            className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-lg font-bold text-black">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="mt-8 bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border-2 border-dashed border-gray-300">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-black">PROMO CODE</h3>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-grow px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                />
                <button
                  onClick={applyPromoCode}
                  className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  APPLY
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Try: <span className="font-bold">BURGER20</span> for 20% off your order
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-black text-white rounded-2xl p-6 sticky top-6">
              <h2 className="text-2xl font-black mb-6">ORDER SUMMARY</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Tax (8%)</span>
                  <span className="font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Delivery Fee</span>
                  <span className="font-bold">
                    {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount ({discount}%)</span>
                    <span className="font-bold">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-700 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>TOTAL</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Free delivery on orders over $25
                </p>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-red-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors mb-4"
              >
                PROCEED TO CHECKOUT
              </Link>

              <div className="text-center">
                <p className="text-sm text-gray-400">
                  🛡️ Secure checkout • 🔄 30-minute guarantee • 📞 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;