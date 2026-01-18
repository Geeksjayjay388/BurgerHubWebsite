// pages/Customize.jsx
import React, { useState } from 'react';
import { Check, RotateCcw, ShoppingCart, AlertCircle, ChefHat, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Data structure kept same as original for compatibility
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
        return { ...prev, toppings: prev.toppings.filter(t => t !== toppingName) };
      } else {
        return { ...prev, toppings: [...prev.toppings, toppingName] };
      }
    });
  };

  const toggleSauce = (sauceName) => {
    setBurger(prev => {
      if (prev.sauces.includes(sauceName)) {
        return { ...prev, sauces: prev.sauces.filter(s => s !== sauceName) };
      } else {
        return { ...prev, sauces: [...prev.sauces, sauceName] };
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
    return burger.toppings.length + burger.sauces.length + 3;
  };

  // Helper for ingredient visualizer logic remains same but improved visuals
  const IngredientLayer = ({ colorStart, colorEnd, height = "h-4", className = "", style = {} }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: -20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      className={`w-48 ${height} rounded-full shadow-lg mx-auto my-[1px] relative overflow-hidden ring-1 ring-black/10 ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${colorStart}, ${colorEnd})`,
        ...style
      }}
    />
  );

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl mb-6 shadow-lg border border-white/10"
          >
            <ChefHat className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-white mb-4 tracking-tight"
          >
            BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">LEGEND</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Masterpiece or monster? You decide the ingredients.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Burger Preview (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden relative">
              {/* Stats Bar */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Preview</h2>
                  <p className="text-gray-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {getIngredientCount()} layers
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-3xl font-black text-white">${calculatePrice()}</span>
                  </div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider font-bold">Total</div>
                </div>
              </div>

              {/* Visualization Area */}
              <div className="py-16 px-8 relative min-h-[500px] flex items-center justify-center bg-gradient-to-b from-[#111] to-[#050505]">
                {/* Plate shadow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-32 w-48 h-12 bg-black blur-xl opacity-60 rounded-full" />

                <div className="flex flex-col-reverse items-center transform scale-125 transition-all duration-300 hover:scale-130 cursor-grab active:cursor-grabbing">

                  {/* Bottom Bun */}
                  <IngredientLayer
                    colorStart="#F59E0B" colorEnd="#D97706" height="h-10"
                    className="rounded-b-[30px] !rounded-t-none w-44"
                  />

                  {/* Patty */}
                  <IngredientLayer
                    colorStart={
                      burger.base.includes('Beef') ? '#78350F' :
                        burger.base.includes('Chicken') ? '#EDA642' :
                          burger.base.includes('Veggie') ? '#3F6212' : '#7C2D12'
                    }
                    colorEnd={
                      burger.base.includes('Beef') ? '#451A03' :
                        burger.base.includes('Chicken') ? '#D97706' :
                          burger.base.includes('Veggie') ? '#14532D' : '#451A03'
                    }
                    height="h-12"
                    className="w-[170px]"
                  />

                  {/* Cheese */}
                  {burger.cheese !== 'No Cheese' && (
                    <IngredientLayer colorStart="#FCD34D" colorEnd="#F59E0B" height="h-3" className="w-[180px] -mb-1 z-10" />
                  )}

                  {/* Toppings - Rendered dynamically */}
                  <AnimatePresence>
                    {burger.toppings.includes('Pickles') && (
                      <IngredientLayer key="pickles" colorStart="#84CC16" colorEnd="#4D7C0F" height="h-2" className="w-[160px]" />
                    )}

                    {burger.toppings.includes('Lettuce') && (
                      <IngredientLayer key="lettuce" colorStart="#86EFAC" colorEnd="#22C55E" height="h-6" className="w-[190px] skew-y-1" />
                    )}

                    {burger.toppings.includes('Onion') && (
                      <IngredientLayer key="onion" colorStart="#E9D5FF" colorEnd="#C084FC" height="h-2" className="w-[150px]" />
                    )}

                    {burger.toppings.includes('Tomato') && (
                      <IngredientLayer key="tomato" colorStart="#EF4444" colorEnd="#991B1B" height="h-4" className="w-[160px]" />
                    )}

                    {burger.toppings.includes('Avocado') && (
                      <IngredientLayer key="avocado" colorStart="#86EFAC" colorEnd="#16A34A" height="h-5" className="w-[165px]" />
                    )}

                    {burger.toppings.includes('Bacon') && (
                      <IngredientLayer key="bacon" colorStart="#EF4444" colorEnd="#7F1D1D" height="h-3" className="w-[170px] skew-x-6" />
                    )}

                    {burger.toppings.includes('Fried Egg') && (
                      <div className="relative w-[160px] h-4 mx-auto my-1">
                        <div className="absolute inset-0 bg-white rounded-full" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full shadow-inner" />
                      </div>
                    )}
                  </AnimatePresence>

                  {/* Sauces */}
                  {burger.sauces.length > 0 && (
                    <IngredientLayer colorStart="#FECACA" colorEnd="#EF4444" height="h-2" className="w-[165px]" />
                  )}

                  {/* Top Bun */}
                  <IngredientLayer
                    colorStart="#FBBF24" colorEnd="#D97706" height="h-14"
                    className="rounded-t-[50px] !rounded-b-none w-44 shadow-xl z-20"
                    style={{ background: 'radial-gradient(circle at 30% 30%, #FDE68A 0%, #F59E0B 100%)' }}
                  />

                </div>
              </div>
            </div>
          </div>

          {/* Right: Customization Controls */}
          <div className="lg:col-span-7 space-y-6">

            {/* Step 1: Base */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Choose Your Base</h3>
                <span className="text-[10px] font-bold text-black bg-white px-2 py-0.5 rounded">STEP 1</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ingredients.bases.map((base) => (
                  <button
                    key={base.name}
                    onClick={() => setBurger({ ...burger, base: base.name })}
                    className={`p-4 rounded-xl border transition-all text-left flex items-center justify-between group ${burger.base === base.name
                        ? 'bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-500/50'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                      }`}
                  >
                    <div>
                      <div className={`font-bold transition-colors ${burger.base === base.name ? 'text-red-400' : 'text-gray-300'}`}>
                        {base.name}
                      </div>
                      {base.price > 0 && <div className="text-xs text-gray-500 mt-1">+${base.price.toFixed(2)}</div>}
                    </div>
                    {burger.base === base.name && <Check className="w-5 h-5 text-red-500" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Select Size</h3>
                <span className="text-[10px] font-bold text-black bg-white px-2 py-0.5 rounded">STEP 2</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {ingredients.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setBurger({ ...burger, size: size.name })}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${burger.size === size.name
                        ? 'bg-white/10 border-white text-white'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    <span className="font-bold">{size.name}</span>
                    <span className="text-xs opacity-60">{size.description}</span>
                    {size.price > 0 && <span className="text-xs font-bold text-red-400">+${size.price.toFixed(2)}</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Cheese */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Cheese Selection</h3>
                <span className="text-[10px] font-bold text-black bg-white px-2 py-0.5 rounded">STEP 3</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {ingredients.cheeses.map((cheese) => (
                  <button
                    key={cheese.name}
                    onClick={() => setBurger({ ...burger, cheese: cheese.name })}
                    className={`px-4 py-2 rounded-lg border transition-all text-sm font-bold ${burger.cheese === cheese.name
                        ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {cheese.name} {cheese.price > 0 && `(+$${cheese.price.toFixed(2)})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Toppings */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Fresh Toppings</h3>
                <span className="text-[10px] font-bold text-black bg-white px-2 py-0.5 rounded">STEP 4</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ingredients.toppings.map((topping) => (
                  <button
                    key={topping.name}
                    onClick={() => toggleTopping(topping.name)}
                    className={`p-3 rounded-lg border transition-all text-left relative overflow-hidden ${burger.toppings.includes(topping.name)
                        ? 'bg-green-500/20 border-green-500/40'
                        : 'bg-white/5 border-white/5 hover:bg-white/10'
                      }`}
                  >
                    <div className="flex justify-between items-center relative z-10">
                      <span className={`text-sm font-bold ${burger.toppings.includes(topping.name) ? 'text-green-400' : 'text-gray-400'}`}>
                        {topping.name}
                      </span>
                      {burger.toppings.includes(topping.name) && <Check className="w-4 h-4 text-green-400" />}
                    </div>
                    {topping.price > 0 && <div className="text-xs text-gray-500 mt-1 relative z-10">+${topping.price.toFixed(2)}</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Sauces */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Sauces</h3>
                <span className="text-[10px] font-bold text-black bg-white px-2 py-0.5 rounded">STEP 5</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {ingredients.sauces.map((sauce) => (
                  <button
                    key={sauce.name}
                    onClick={() => toggleSauce(sauce.name)}
                    className={`px-4 py-2 rounded-lg border transition-all text-sm font-bold flex items-center gap-2 ${burger.sauces.includes(sauce.name)
                        ? 'bg-red-500/20 border-red-500/40 text-red-400'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                  >
                    {sauce.name}
                    {burger.sauces.includes(sauce.name) && <Check className="w-3 h-3" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 sticky bottom-6 z-30">
              <button
                onClick={resetBurger}
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-400 font-bold hover:bg-white/10 hover:text-white transition-colors"
                title="Reset Builder"
              >
                <RotateCcw className="w-6 h-6" />
              </button>

              <button
                onClick={addToCart}
                className={`flex-1 py-4 rounded-xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${addedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:scale-[1.02]'
                  }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-6 h-6" />
                    ADDED TO CART
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6" />
                    ADD TO CART - ${calculatePrice()}
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