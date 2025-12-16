// pages/Checkout.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Shield, Truck, CreditCard, Wallet, QrCode, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderType, setOrderType] = useState('delivery');
  const [tipAmount, setTipAmount] = useState(3);
  
  const orderSummary = {
    items: [
      { name: 'The Classic Burger', quantity: 2, price: 12.99 },
      { name: 'Loaded Fries', quantity: 1, price: 8.99 },
      { name: 'Chocolate Shake', quantity: 1, price: 5.99 }
    ],
    subtotal: 40.96,
    tax: 3.28,
    delivery: 4.99,
    tip: 3.00,
    total: 52.23
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully! Thank you for choosing BurgerHub.');
    // In a real app, this would process the order
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>
        <h1 className="text-4xl font-black text-black mt-4">CHECKOUT</h1>
        <p className="text-gray-600">Complete your order in just a few steps</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Order Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Order Type Selection */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-black mb-6">1. ORDER TYPE</h2>
            <div className="grid grid-cols-3 gap-4">
              {['delivery', 'pickup', 'dine-in'].map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    orderType === type
                      ? 'border-red-600 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      orderType === type ? 'bg-red-600 text-white' : 'bg-gray-100'
                    }`}>
                      {type === 'delivery' && <Truck className="w-5 h-5" />}
                      {type === 'pickup' && <Shield className="w-5 h-5" />}
                      {type === 'dine-in' && '🍽️'}
                    </div>
                    <span className="font-semibold capitalize">{type}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {orderType === 'delivery' && (
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-black mb-2">Delivery Address</h3>
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                />
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-black mb-6">2. PAYMENT METHOD</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {['card', 'cash', 'paypal', 'apple-pay'].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === method
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      paymentMethod === method ? 'bg-red-600 text-white' : 'bg-gray-100'
                    }`}>
                      {method === 'card' && <CreditCard className="w-5 h-5" />}
                      {method === 'cash' && <Wallet className="w-5 h-5" />}
                      {method === 'paypal' && <div className="text-blue-600 font-bold">PP</div>}
                      {method === 'apple-pay' && <QrCode className="w-5 h-5" />}
                    </div>
                    <span className="font-semibold capitalize">{method.replace('-', ' ')}</span>
                  </div>
                </button>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                />
              </div>
            )}
          </div>

          {/* Tip Selection */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-black mb-6">3. ADD A TIP</h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[0, 3, 5, 10].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setTipAmount(amount)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    tipAmount === amount
                      ? 'border-red-600 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">${amount}</div>
                    <div className="text-sm text-gray-600">Tip</div>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Tips go directly to our hardworking staff. Thank you for your generosity!
            </p>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="space-y-6">
          {/* Order Summary Card */}
          <div className="bg-black text-white rounded-2xl p-6 sticky top-6">
            <h2 className="text-2xl font-black mb-6">ORDER SUMMARY</h2>
            
            <div className="space-y-4 mb-6">
              {orderSummary.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-400">Qty: {item.quantity}</div>
                  </div>
                  <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax</span>
                <span>${orderSummary.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Delivery</span>
                <span>${orderSummary.delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-400">
                <span>Tip</span>
                <span>${orderSummary.tip.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold">
                <span>TOTAL</span>
                <span>${orderSummary.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Security & Guarantee */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm">100% Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Truck className="w-5 h-5" />
                <span className="text-sm">30-minute delivery guarantee</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              PLACE ORDER - ${orderSummary.total.toFixed(2)}
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              By placing your order, you agree to our Terms & Conditions
            </p>
          </div>

          {/* Promo Code */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h3 className="font-bold text-black mb-3">HAVE A PROMO CODE?</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-grow px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <button className="bg-black text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                APPLY
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl border-2 border-red-100 p-6">
            <h3 className="font-bold text-black mb-2">NEED HELP?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Our support team is here to help with your order
            </p>
            <div className="text-red-600 font-bold">(555) 123-4567</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;