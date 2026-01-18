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
      case 'signature-burgers': return <Beef className="w-5 h-5 text-white" />;
      case 'chicken': return <Drumstick className="w-5 h-5 text-white" />;
      case 'veggie': return <Salad className="w-5 h-5 text-white" />;
      case 'fries-sides': return <Carrot className="w-5 h-5 text-white" />;
      case 'drinks': return <GlassWater className="w-5 h-5 text-white" />;
      case 'desserts': return <IceCream className="w-5 h-5 text-white" />;
      default: return <Beef className="w-5 h-5 text-white" />;
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
    if (tagLower.includes('hot') || tagLower.includes('spicy')) return 'bg-red-500/20 text-red-400 border border-red-500/30';
    if (tagLower.includes('popular')) return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
    if (tagLower.includes('new')) return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
    if (tagLower.includes('healthy') || tagLower.includes('vegan')) return 'bg-green-500/20 text-green-400 border border-green-500/30';
    if (tagLower.includes('premium') || tagLower.includes('gourmet')) return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
    return 'bg-gray-800 text-gray-300 border border-gray-700';
  };

  const savePercentage = item.originalPrice 
    ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
      {/* Item Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        
        {/* Fallback if image fails */}
        {imageError && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="text-gray-600">
              {getCategoryIcon(item.category)}
            </div>
          </div>
        )}
        
        {/* Discount Badge */}
        {savePercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            SAVE {savePercentage}%
          </div>
        )}
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold">{item.rating}</span>
          <span className="text-xs text-gray-400">({item.reviewCount})</span>
        </div>
        
        {/* Category Icon */}
        <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-xl">
          {getCategoryIcon(item.category)}
        </div>
        
        {/* Tags */}
        <div className="absolute bottom-3 right-3 flex flex-wrap gap-1 justify-end max-w-[70%]">
          {item.tags?.slice(0, 2).map((tag, idx) => (
            <span 
              key={idx} 
              className={`${getTagColor(tag)} px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1 backdrop-blur-md`}
            >
              {getTagIcon(tag)}
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Item Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-red-400 transition-colors">{item.name}</h3>
            <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.prepTime}m</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span>{item.calories} cal</span>
              </div>
            </div>
          </div>
          <div className="text-right pl-3">
            <div className="text-2xl font-black text-white">${item.price.toFixed(2)}</div>
            {item.originalPrice && (
              <div className="text-sm text-gray-500 line-through decoration-red-500/50">${item.originalPrice.toFixed(2)}</div>
            )}
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Nutrition Info */}
        <div className="flex items-center gap-4 mb-5 text-[10px] sm:text-xs text-gray-500 border-t border-white/5 pt-4">
          {item.nutrition?.protein && (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <span>Protein: <span className="text-gray-300">{item.nutrition.protein}</span></span>
            </div>
          )}
          {item.nutrition?.carbs && (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Carbs: <span className="text-gray-300">{item.nutrition.carbs}</span></span>
            </div>
          )}
          {item.nutrition?.fat && (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
              <span>Fat: <span className="text-gray-300">{item.nutrition.fat}</span></span>
            </div>
          )}
        </div>

        {/* Expandable Details */}
        {isExpanded && item.options && (
          <div className="mb-5 p-4 bg-black/20 rounded-2xl border border-white/5">
            <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Customization Options</h4>
            <div className="space-y-3">
              {Object.entries(item.options).map(([option, choices]) => (
                <div key={option}>
                  <p className="text-[10px] font-bold text-gray-500 uppercase mb-2">
                    {option}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {choices.map(choice => (
                      <span
                        key={choice}
                        className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer"
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
              className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
            >
              <span className="text-xs sm:text-sm tracking-wide">CUSTOMIZE</span>
              <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform duration-300" />
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-white text-black py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wide"
            >
              <Plus className="w-4 h-4" />
              ADD TO CART
            </button>
          )}
          
          {item.options && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-12 flex items-center justify-center border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/5 text-gray-400 hover:text-white transition-all group/expand"
              aria-label={isExpanded ? "Hide options" : "Show options"}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
