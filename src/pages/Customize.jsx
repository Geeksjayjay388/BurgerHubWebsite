import React, { useState } from 'react';
import { Check, RotateCcw, ShoppingCart, Plus, AlertCircle } from 'lucide-react';

const Customize = () => {
  const [burger, setBurger] = useState({
    base: 'Classic Beef',
    cheese: 'Cheddar',
    toppings: ['Lettuce', 'Tomato', 'Onion'],
    sauces: ['Signature Sauce'],
    extras: [],
    size: 'Single',
    price: 12.99
  });

  const [addedToCart, setAddedToCart] = useState(false);

  const ingredients = {
    bases: [
      { name: 'Classic Beef', price: 0, icon: 'beef' },
      { name: 'Grilled Chicken', price: 1.00, icon: 'chicken' },
      { name: 'Veggie Patty', price: 0.50, icon: 'veggie' },
      { name: 'Beyond Meat', price: 2.00, icon: 'plant' },
      { name: 'Double Beef', price: 4.00, icon: 'double' }
    ],
    cheeses: [
      { name: 'Cheddar', price: 0 },
      { name: 'Swiss', price: 0.50 },
      { name: 'Pepper Jack', price: 0.75 },
      { name: 'Blue Cheese', price: 1.00 },
      { name: 'No Cheese', price: 0 }
    ],
    toppings: [
      { name: 'Lettuce', price: 0 },
      { name: 'Tomato', price: 0 },
      { name: 'Onion', price: 0 },
      { name: 'Pickles', price: 0 },
      { name: 'Bacon', price: 1.50 },
      { name: 'Avocado', price: 1.50 },
      { name: 'Mushrooms', price: 1.00 },
      { name: 'Jalapenos', price: 0.75 },
      { name: 'Fried Egg', price: 1.50 },
      { name: 'Onion Rings', price: 1.25 }
    ],
    sauces: [
      { name: 'Signature Sauce', price: 0 },
      { name: 'BBQ Sauce', price: 0 },
      { name: 'Spicy Mayo', price: 0 },
      { name: 'Garlic Aioli', price: 0.50 },
      { name: 'Sriracha', price: 0.50 },
      { name: 'Honey Mustard', price: 0.50 }
    ],
    sizes: [
      { name: 'Single', price: 0, description: 'One patty' },
      { name: 'Double', price: 3.00, description: 'Two patties' },
      { name: 'Triple', price: 6.00, description: 'Three patties' }
    ]
  };

  const calculatePrice = () => {
    let price = 12.99;
    
    const selectedBase = ingredients.bases.find(b => b.name === burger.base);
    price += selectedBase?.price || 0;
    
    const selectedCheese = ingredients.cheeses.find(c => c.name === burger.cheese);
    price += selectedCheese?.price || 0;
    
    burger.toppings.forEach(toppingName => {
      const topping = ingredients.toppings.find(t => t.name === toppingName);
      price += topping?.price || 0;
    });
    
    burger.sauces.forEach(sauceName => {
      const sauce = ingredients.sauces.find(s => s.name === sauceName);
      price += sauce?.price || 0;
    });
    
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
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const getIngredientCount = () => {
    return burger.toppings.length + burger.sauces.length + 3; // +3 for base, cheese, size
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 11h16M4 11c0-1.5 1-3 3-3h10c2 0 3 1.5 3 3M4 11v1c0 3 1 5 4 5h8c3 0 4-2 4-5v-1M7 8V7c0-1 .5-2 1.5-2h7c1 0 1.5 1 1.5 2v1" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Build Your Burger</h1>
          <p className="text-xl text-gray-600">Customize every detail to create your perfect meal</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Burger Preview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Visual Preview Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Your Creation</h2>
                    <p className="text-gray-300 text-sm">{getIngredientCount()} ingredients selected</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">${calculatePrice()}</div>
                    <div className="text-gray-300 text-sm">Total</div>
                  </div>
                </div>
              </div>

              {/* Burger Visualization */}
              <div className="p-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="flex flex-col items-center gap-2 max-w-md mx-auto">
                  {/* Top Bun */}
                  <div className="w-full max-w-xs">
                    <div className="h-14 bg-gradient-to-b from-amber-300 to-amber-400 rounded-t-full border-b-4 border-amber-500 shadow-md"></div>
                  </div>
                  
                  {/* Sauces Layer */}
                  {burger.sauces.length > 0 && (
                    <div className="w-full max-w-xs px-4">
                      <div className="h-3 bg-gradient-to-r from-red-300 via-red-400 to-red-300 rounded-full shadow-sm"></div>
                    </div>
                  )}

                  {/* Toppings */}
                  {burger.toppings.includes('Fried Egg') && (
                    <div className="w-full max-w-xs px-2">
                      <div className="h-8 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full border-2 border-yellow-400 shadow-sm"></div>
                    </div>
                  )}
                  
                  {burger.toppings.includes('Bacon') && (
                    <div className="w-full max-w-xs px-6">
                      <div className="h-5 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-full shadow-sm"></div>
                    </div>
                  )}
                  
                  {burger.toppings.includes('Avocado') && (
                    <div className="w-full max-w-xs px-4">
                      <div className="h-6 bg-gradient-to-b from-green-300 to-green-400 rounded-full shadow-sm"></div>
                    </div>
                  )}
                  
                  {burger.toppings.includes('Tomato') && (
                    <div className="w-full max-w-xs px-8">
                      <div className="h-6 bg-gradient-to-b from-red-400 to-red-500 rounded-full shadow-sm"></div>
                    </div>
                  )}
                  
                  {burger.toppings.includes('Onion') && (
                    <div className="w-full max-w-xs px-10">
                      <div className="h-4 bg-gradient-to-b from-purple-100 to-purple-200 rounded-full border border-purple-300 shadow-sm"></div>
                    </div>
                  )}
                  
                  {burger.toppings.includes('Lettuce') && (
                    <div className="w-full max-w-xs px-3">
                      <div className="h-8 bg-gradient-to-b from-green-400 to-green-500 rounded-full shadow-sm"></div>
                    </div>
                  )}
                  
                  {burger.toppings.includes('Pickles') && (
                    <div className="w-full max-w-xs px-12">
                      <div className="h-4 bg-gradient-to-b from-green-500 to-green-600 rounded-full shadow-sm"></div>
                    </div>
                  )}

                  {/* Cheese */}
                  {burger.cheese !== 'No Cheese' && (
                    <div className="w-full max-w-xs px-4">
                      <div className="h-5 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full shadow-md"></div>
                    </div>
                  )}
                  
                  {/* Patty */}
                  <div className="w-full max-w-xs">
                    <div className={`h-16 rounded-full shadow-lg ${
                      burger.base.includes('Beef') ? 'bg-gradient-to-b from-amber-800 to-amber-900' :
                      burger.base.includes('Chicken') ? 'bg-gradient-to-b from-amber-600 to-amber-700' :
                      burger.base.includes('Veggie') ? 'bg-gradient-to-b from-green-600 to-green-700' :
                      'bg-gradient-to-b from-purple-600 to-purple-700'
                    }`}></div>
                  </div>
                  
                  {/* Bottom Bun */}
                  <div className="w-full max-w-xs">
                    <div className="h-12 bg-gradient-to-t from-amber-300 to-amber-400 rounded-b-full border-t-4 border-amber-500 shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredients Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-gray-600" />
                Selected Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium text-sm border border-gray-200">
                  {burger.base}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium text-sm border border-gray-200">
                  {burger.cheese}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium text-sm border border-gray-200">
                  {burger.size} Size
                </span>
                {burger.toppings.map((topping, idx) => (
                  <span key={idx} className="px-4 py-2 bg-green-50 text-green-800 rounded-lg font-medium text-sm border border-green-200">
                    {topping}
                  </span>
                ))}
                {burger.sauces.map((sauce, idx) => (
                  <span key={idx} className="px-4 py-2 bg-red-50 text-red-800 rounded-lg font-medium text-sm border border-red-200">
                    {sauce}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Customization Panel */}
          <div className="space-y-6">
            {/* Base Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Choose Base</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Step 1</span>
              </div>
              <div className="space-y-2">
                {ingredients.bases.map((base) => (
                  <button
                    key={base.name}
                    onClick={() => setBurger({...burger, base: base.name})}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      burger.base === base.name
                        ? 'border-gray-900 bg-gray-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{base.name}</span>
                      <div className="flex items-center gap-2">
                        {base.price > 0 && (
                          <span className="text-sm font-semibold text-gray-600">+${base.price.toFixed(2)}</span>
                        )}
                        {burger.base === base.name && (
                          <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Choose Size</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Step 2</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {ingredients.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setBurger({...burger, size: size.name})}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      burger.size === size.name
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-semibold text-gray-900">{size.name}</span>
                    <span className="text-xs text-gray-500">{size.description}</span>
                    {size.price > 0 && (
                      <span className="text-xs font-semibold text-gray-600">+${size.price.toFixed(2)}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Cheese Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Choose Cheese</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Step 3</span>
              </div>
              <div className="space-y-2">
                {ingredients.cheeses.map((cheese) => (
                  <button
                    key={cheese.name}
                    onClick={() => setBurger({...burger, cheese: cheese.name})}
                    className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                      burger.cheese === cheese.name
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 text-sm">{cheese.name}</span>
                      <div className="flex items-center gap-2">
                        {cheese.price > 0 && (
                          <span className="text-xs font-semibold text-gray-600">+${cheese.price.toFixed(2)}</span>
                        )}
                        {burger.cheese === cheese.name && (
                          <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Toppings Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Add Toppings</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Step 4</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {ingredients.toppings.map((topping) => (
                  <button
                    key={topping.name}
                    onClick={() => toggleTopping(topping.name)}
                    className={`p-3 rounded-lg border-2 text-left transition-all relative ${
                      burger.toppings.includes(topping.name)
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {burger.toppings.includes(topping.name) && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center shadow-md">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="text-sm font-medium text-gray-900 mb-1">{topping.name}</div>
                    {topping.price > 0 && (
                      <div className="text-xs font-semibold text-gray-600">+${topping.price.toFixed(2)}</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sauces Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Add Sauces</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Step 5</span>
              </div>
              <div className="space-y-2">
                {ingredients.sauces.map((sauce) => (
                  <button
                    key={sauce.name}
                    onClick={() => toggleSauce(sauce.name)}
                    className={`w-full p-3 rounded-lg border-2 text-left transition-all relative ${
                      burger.sauces.includes(sauce.name)
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 text-sm">{sauce.name}</span>
                      <div className="flex items-center gap-2">
                        {sauce.price > 0 && (
                          <span className="text-xs font-semibold text-gray-600">+${sauce.price.toFixed(2)}</span>
                        )}
                        {burger.sauces.includes(sauce.name) && (
                          <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="sticky bottom-6 space-y-3">
              <button
                onClick={resetBurger}
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Default
              </button>
              
              <button
                onClick={addToCart}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart - ${calculatePrice()}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;