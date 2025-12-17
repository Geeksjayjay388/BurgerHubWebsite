// components/menu/MenuItemCard.jsx
import React, { useState } from 'react';
import { Plus, Flame, Leaf, Star, ChevronDown, ChevronUp, Clock, Zap, Sparkles, Beef, Drumstick, Salad, Carrot, GlassWater, IceCream } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MenuItemCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    alert(`Added ${item.name} to cart!`);
  };

  const handleCustomize = () => {
    navigate(`/customize?item=${item.id}`);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'signature-burgers': return <Beef className="w-6 h-6" />;
      case 'chicken': return <Drumstick className="w-6 h-6" />;
      case 'veggie': return <Salad className="w-6 h-6" />;
      case 'fries-sides': return <Carrot className="w-6 h-6" />;
      case 'drinks': return <GlassWater className="w-6 h-6" />;
      case 'desserts': return <IceCream className="w-6 h-6" />;
      default: return <Beef className="w-6 h-6" />;
    }
  };

  const getTagIcon = (tag) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('hot') || tagLower.includes('spicy')) return <Flame className="w-3 h-3" />;
    if (tagLower.includes('popular')) return <Star className="w-3 h-3" />;
    if (tagLower.includes('new')) return <Sparkles className="w-3 h-3" />;
    if (tagLower.includes('healthy') || tagLower.includes('vegan')) return <Leaf className="w-3 h-3" />;
    if (tagLower.includes('quick')) return <Zap className="w-3 h-3" />;
    return null;
  };

  const getTagColor = (tag) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('hot') || tagLower.includes('spicy')) return 'bg-red-600 text-white';
    if (tagLower.includes('popular')) return 'bg-yellow-500 text-black';
    if (tagLower.includes('new')) return 'bg-blue-500 text-white';
    if (tagLower.includes('healthy') || tagLower.includes('vegan')) return 'bg-green-600 text-white';
    if (tagLower.includes('premium') || tagLower.includes('gourmet')) return 'bg-purple-600 text-white';
    if (tagLower.includes('shareable')) return 'bg-orange-500 text-white';
    return 'bg-gray-800 text-white';
  };

  const saveAmount = item.originalPrice ? (item.originalPrice - item.price).toFixed(2) : null;
  const savePercentage = item.originalPrice 
    ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group">
      {/* Item Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImageError(true)}
        />
        
        {/* Fallback if image fails */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-red-100 flex items-center justify-center">
            <div className="text-gray-600">
              {getCategoryIcon(item.category)}
            </div>
          </div>
        )}
        
        {/* Discount Badge */}
        {savePercentage > 0 && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1.5 rounded-full text-sm font-bold">
            SAVE {savePercentage}%
          </div>
        )}
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold">{item.rating}</span>
          <span className="text-xs text-gray-300">({item.reviewCount})</span>
        </div>
        
        {/* Category Icon */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
          {getCategoryIcon(item.category)}
        </div>
        
        {/* Tags */}
        <div className="absolute bottom-4 right-4 flex flex-wrap gap-1 justify-end">
          {item.tags?.slice(0, 2).map((tag, idx) => (
            <span 
              key={idx} 
              className={`${getTagColor(tag)} px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 whitespace-nowrap`}
            >
              {getTagIcon(tag)}
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Item Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">{item.name}</h3>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{item.prepTime}m</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>{item.calories} cal</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-gray-900">${item.price.toFixed(2)}</div>
            {item.originalPrice && (
              <div className="text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</div>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
          {item.description}
        </p>

        {/* Nutrition Info */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          {item.nutrition?.protein && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Protein: {item.nutrition.protein}</span>
            </div>
          )}
          {item.nutrition?.carbs && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Carbs: {item.nutrition.carbs}</span>
            </div>
          )}
          {item.nutrition?.fat && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Fat: {item.nutrition.fat}</span>
            </div>
          )}
        </div>

        {/* Expandable Details */}
        {isExpanded && item.options && (
          <div className="mb-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <h4 className="font-bold text-black mb-3 text-sm">Customization Options:</h4>
            <div className="space-y-3">
              {Object.entries(item.options).map(([option, choices]) => (
                <div key={option}>
                  <p className="text-xs font-semibold text-gray-700 uppercase mb-1 tracking-wide">
                    {option}:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {choices.map(choice => (
                      <span
                        key={choice}
                        className="px-2.5 py-1 bg-white border border-gray-300 rounded-lg text-xs hover:border-red-300 hover:bg-red-50 transition-colors"
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
              className="flex-1 bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
            >
              <span>CUSTOMIZE & ADD</span>
              <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-gray-900 to-black text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              ADD TO CART
            </button>
          )}
          
          {item.options && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-12 flex items-center justify-center border-2 border-gray-300 rounded-xl hover:border-red-500 hover:bg-red-50 transition-colors group/expand"
              aria-label={isExpanded ? "Hide options" : "Show options"}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 group-hover/expand:text-red-600" />
              ) : (
                <ChevronDown className="w-5 h-5 group-hover/expand:text-red-600" />
              )}
            </button>
          )}
        </div>

        {/* New/Featured Badges */}
        <div className="mt-4 flex gap-2">
          {item.isNew && (
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" />
              NEW ITEM
            </span>
          )}
          {item.isFeatured && (
            <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 text-xs font-medium px-3 py-1 rounded-full">
              <Star className="w-3 h-3 fill-red-600" />
              FEATURED
            </span>
          )}
          {item.customizable && (
            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
              <Zap className="w-3 h-3" />
              CUSTOMIZABLE
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;