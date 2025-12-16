// pages/Customize.jsx
import React, { useState } from 'react';
import { Check, Plus, Minus, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Customize = () => {
  const navigate = useNavigate();
  const [burger, setBurger] = useState({
    base: 'Classic Beef',
    cheese: 'Cheddar',
    toppings: ['Lettuce', 'Tomato', 'Onion'],
    sauces: ['Signature Sauce'],
    extras: [],
    size: 'Single',
    price: 12.99
  });

  const ingredients = {
    bases: [
      { name: 'Classic Beef', price: 0, emoji: '🥩' },
      { name: 'Grilled Chicken', price: 1.00, emoji: '🍗' },
      { name: 'Veggie Patty', price: 0.50, emoji: '🥬' },
      { name: 'Beyond Meat', price: 2.00, emoji: '🌱' },
      { name: 'Double Beef', price: 4.00, emoji: '🥩🥩' }
    ],
    cheeses: [
      { name: 'Cheddar', price: 0, emoji: '🧀' },
      { name: 'Swiss', price: 0.50, emoji: '🧀' },
      { name: 'Pepper Jack', price: 0.75, emoji: '🧀' },
      { name: 'Blue Cheese', price: 1.00, emoji: '🧀' },
      { name: 'No Cheese', price: 0, emoji: '🚫' }
    ],
    toppings: [
      { name: 'Lettuce', price: 0, emoji: '🥬' },
      { name: 'Tomato', price: 0, emoji: '🍅' },
      { name: 'Onion', price: 0, emoji: '🧅' },
      { name: 'Pickles', price: 0, emoji: '🥒' },
      { name: 'Bacon', price: 1.50, emoji: '🥓' },
      { name: 'Avocado', price: 1.50, emoji: '🥑' },
      { name: 'Mushrooms', price: 1.00, emoji: '🍄' },
      { name: 'Jalapenos', price: 0.75, emoji: '🌶️' },
      { name: 'Fried Egg', price: 1.50, emoji: '🍳' },
      { name: 'Onion Rings', price: 1.25, emoji: '🧅' }
    ],
    sauces: [
      { name: 'Signature Sauce', price: 0, emoji: '🍶' },
      { name: 'BBQ Sauce', price: 0, emoji: '🍶' },
      { name: 'Spicy Mayo', price: 0, emoji: '🍶' },
      { name: 'Garlic Aioli', price: 0.50, emoji: '🍶' },
      { name: 'Sriracha', price: 0.50, emoji: '🌶️' },
      { name: 'Honey Mustard', price: 0.50, emoji: '🍶' }
    ],
    sizes: [
      { name: 'Single', price: 0, emoji: '1️⃣' },
      { name: 'Double', price: 3.00, emoji: '2️⃣' },
      { name: 'Triple', price: 6.00, emoji: '3️⃣' }
    ]
  };

  const calculatePrice = () => {
    let price = 12.99; // Base price
    
    // Add base price
    const selectedBase = ingredients.bases.find(b => b.name === burger.base);
    price += selectedBase?.price || 0;
    
    // Add cheese price
    const selectedCheese = ingredients.cheeses.find(c => c.name === burger.cheese);
    price += selectedCheese?.price || 0;
    
    // Add toppings price
    burger.toppings.forEach(toppingName => {
      const topping = ingredients.toppings.find(t => t.name === toppingName);
      price += topping?.price || 0;
    });
    
    // Add sauces price
    burger.sauces.forEach(sauceName => {
      const sauce = ingredients.sauces.find(s => s.name === sauceName);
      price += sauce?.price || 0;
    });
    
    // Add extras price
    burger.extras.forEach(extraName => {
      const extra = ingredients.toppings.find(t => t.name === extraName);
      price += extra?.price || 0;
    });
    
    // Add size price
    const selectedSize = ingredients.sizes.find(s => s.name === burger.size);
    price += selectedSize?.price || 0;
    
    return price.toFixed(2);
  };

  const toggleTopping = (toppingName) => {
    setBurger(prev => {
      if (prev.toppings.includes(toppingName)) {
        return {
          ...prev,
          toppings: prev.toppings.filter(t => t !== toppingName)
        };
      } else {
        return {
          ...prev,
          toppings: [...prev.toppings, toppingName]
        };
      }
    });
  };

  const toggleSauce = (sauceName) => {
    setBurger(prev => {
      if (prev.sauces.includes(sauceName)) {
        return {
          ...prev,
          sauces: prev.sauces.filter(s => s !== sauceName)
        };
      } else {
        return {
          ...prev,
          sauces: [...prev.sauces, sauceName]
        };
      }
    });
  };

  const resetBurger = () => {
    setBurger({
      base: 'Classic Beef',
      cheese: 'Cheddar',
      toppings: ['Lettuce', 'Tomato', 'Onion'],
      sauces: ['Signature Sauce'],
      extras: [],
      size: 'Single',
      price: 12.99
    });
  };

  const addToCart = () => {
    const finalBurger = {
      ...burger,
      price: parseFloat(calculatePrice()),
      name: `Custom ${burger.base} Burger`
    };
    alert(`Added custom burger to cart! Total: $${calculatePrice()}`);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-black mb-4">BUILD YOUR BURGER</h1>
        <p className="text-xl text-gray-600">Create your perfect burger, your way!</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Burger Preview */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-b from-yellow-50 to-white rounded-3xl p-8 mb-8 border-2 border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-black mb-2">YOUR CREATION</h2>
              <div className="w-64 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            {/* Burger Visualization */}
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
              {/* Top Bun */}
              <div className="w-80 h-12 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-t-full border-b-4 border-yellow-500"></div>
              
              {/* Ingredients Stack */}
              {burger.sauces.length > 0 && (
                <div className="w-72 h-4 bg-red-200 rounded-full"></div>
              )}
              {burger.extras.map((extra, idx) => (
                <div key={idx} className="w-76 h-8 bg-green-300 rounded-full"></div>
              ))}
              {burger.toppings.includes('Bacon') && (
                <div className="w-80 h-4 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
              )}
              {burger.toppings.includes('Tomato') && (
                <div className="w-68 h-6 bg-red-500 rounded-full"></div>
              )}
              {burger.toppings.includes('Lettuce') && (
                <div className="w-72 h-8 bg-green-400 rounded-full"></div>
              )}
              {burger.cheese !== 'No Cheese' && (
                <div className="w-76 h-4 bg-yellow-200 rounded-full"></div>
              )}
              
              {/* Patty */}
              <div className={`w-80 h-16 rounded-full ${
                burger.base.includes('Beef') ? 'bg-brown-600' :
                burger.base.includes('Chicken') ? 'bg-yellow-600' :
                burger.base.includes('Veggie') ? 'bg-green-500' : 'bg-purple-500'
              }`}></div>
              
              {/* Bottom Bun */}
              <div className="w-80 h-10 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-b-full border-t-4 border-yellow-500"></div>
            </div>

            {/* Ingredient List */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-black mb-4">Your Ingredients:</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 rounded-full font-semibold">
                  {burger.base}
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full font-semibold">
                  {burger.cheese} Cheese
                </span>
                {burger.toppings.map((topping, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full font-semibold">
                    {topping}
                  </span>
                ))}
                {burger.sauces.map((sauce, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full font-semibold">
                    {sauce}
                  </span>
                ))}
                <span className="px-4 py-2 bg-gray-100 rounded-full font-semibold">
                  {burger.size} Size
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Customization Panel */}
        <div className="space-y-6">
          {/* Base Selection */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h3 className="text-lg font-bold text-black mb-4">1. CHOOSE YOUR BASE</h3>
            <div className="grid grid-cols-2 gap-3">
              {ingredients.bases.map((base) => (
                <button
                  key={base.name}
                  onClick={() => setBurger({...burger, base: base.name})}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                    burger.base === base.name
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl">{base.emoji}</span>
                  <span className="font-semibold">{base.name}</span>
                  {base.price > 0 && (
                    <span className="text-sm text-red-600 font-bold">+${base.price.toFixed(2)}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Cheese Selection */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h3 className="text-lg font-bold text-black mb-4">2. CHOOSE CHEESE</h3>
            <div className="grid grid-cols-3 gap-3">
              {ingredients.cheeses.map((cheese) => (
                <button
                  key={cheese.name}
                  onClick={() => setBurger({...burger, cheese: cheese.name})}
                  className={`p-3 rounded-lg border flex flex-col items-center gap-1 ${
                    burger.cheese === cheese.name
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-xl">{cheese.emoji}</span>
                  <span className="text-sm font-semibold">{cheese.name}</span>
                  {cheese.price > 0 && (
                    <span className="text-xs text-red-600">+${cheese.price}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Toppings Selection */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h3 className="text-lg font-bold text-black mb-4">3. ADD TOPPINGS</h3>
            <div className="grid grid-cols-3 gap-3">
              {ingredients.toppings.map((topping) => (
                <button
                  key={topping.name}
                  onClick={() => toggleTopping(topping.name)}
                  className={`p-3 rounded-lg border flex flex-col items-center gap-1 relative ${
                    burger.toppings.includes(topping.name)
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {burger.toppings.includes(topping.name) && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <span className="text-xl">{topping.emoji}</span>
                  <span className="text-sm font-semibold">{topping.name}</span>
                  {topping.price > 0 && (
                    <span className="text-xs text-red-600">+${topping.price}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-6 space-y-4">
            <div className="bg-black text-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-3xl font-black">${calculatePrice()}</div>
                  <div className="text-sm text-gray-300">Total Price</div>
                </div>
                <button
                  onClick={resetBurger}
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>
              <button
                onClick={addToCart}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors"
              >
                ADD TO CART - ${calculatePrice()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;