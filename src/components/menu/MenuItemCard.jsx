// components/menu/MenuItemCard.jsx
import React, { useState } from 'react';
import { Plus, Flame, Leaf, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MenuItemCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    alert(`Added ${item.name} to cart!`);
  };

  const handleCustomize = () => {
    navigate(`/customize?item=${item.id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Item Image/Icon */}
      <div className="h-48 bg-gradient-to-r from-yellow-100 to-red-100 flex items-center justify-center relative">
        <span className="text-8xl">{item.image}</span>
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {item.tags.includes('best-seller') && (
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400" />
              BEST SELLER
            </span>
          )}
          {item.tags.includes('spicy') && (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Flame className="w-3 h-3" />
              SPICY
            </span>
          )}
          {item.tags.includes('vegan') && (
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              VEGAN
            </span>
          )}
        </div>
        
        {/* Calories */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-gray-700">{item.calories} cal</span>
        </div>
      </div>

      {/* Item Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black text-black">{item.name}</h3>
          <div className="text-2xl font-black text-red-600">${item.price.toFixed(2)}</div>
        </div>
        
        <p className="text-gray-600 mb-4">{item.description}</p>

        {/* Expandable Details */}
        {isExpanded && item.options && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-black mb-2">Customization Options:</h4>
            <div className="space-y-3">
              {Object.entries(item.options).map(([option, choices]) => (
                <div key={option}>
                  <p className="text-sm font-semibold text-gray-700 capitalize mb-1">
                    {option}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {choices.map(choice => (
                      <span
                        key={choice}
                        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm"
                      >
                        {choice}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {item.customizable ? (
            <button
              onClick={handleCustomize}
              className="flex-1 bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              CUSTOMIZE & ADD
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              ADD TO CART
            </button>
          )}
          
          {item.options && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-12 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-black transition-colors"
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;