// pages/Menu.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  Search, 
  Star, 
  ChevronRight, 
  X, 
  Beef,
  Drumstick,
  Salad,
  Carrot,
  GlassWater,
  IceCream,
  Sparkles,
  Flame,
  Clock,
  TrendingUp,
  DollarSign,
  CalendarDays,
  ChefHat,
  Leaf,
  Zap,
  Thermometer,
  Heart,
  BadgeCheck,
  Menu as MenuIcon
} from 'lucide-react';
import MenuItemCard from '../components/menu/MenuItemCard';
import { menuItems } from '../data/menuItems';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const categories = [
    { 
      id: 'all', 
      label: 'All Items', 
      icon: <ChefHat className="w-4 h-4 sm:w-5 sm:h-5" />, 
      count: menuItems.length 
    },
    { 
      id: 'signature-burgers', 
      label: 'Signature Burgers', 
      icon: <Beef className="w-4 h-4 sm:w-5 sm:h-5" />, 
      count: menuItems.filter(item => item.category === 'signature-burgers').length 
    },
    { 
      id: 'chicken', 
      label: 'Chicken', 
      icon: <Drumstick className="w-4 h-4 sm:w-5 sm:h-5" />, 
      count: menuItems.filter(item => item.category === 'chicken').length 
    },
    { 
      id: 'veggie', 
      label: 'Veggie', 
      icon: <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />, 
      count: menuItems.filter(item => item.category === 'veggie').length 
    },
    { 
      id: 'fries-sides', 
      label: 'Fries & Sides', 
      icon: <Carrot className="w-4 h-4 sm:w-5 sm:h-5" />, 
      count: menuItems.filter(item => item.category === 'fries-sides').length 
    },
    { 
      id: 'drinks', 
      label: 'Drinks', 
      icon: <GlassWater className="w-4 h-4 sm:w-5 sm:h-5" />, 
      count: menuItems.filter(item => item.category === 'drinks').length 
    },
    { 
      id: 'desserts', 
      label: 'Desserts', 
      icon: <IceCream className="w-4 h-4 sm:w-5 sm:h-5" />, 
      count: menuItems.filter(item => item.category === 'desserts').length 
    }
  ];

  const tags = [
    { name: 'Chef\'s Choice', icon: <Sparkles className="w-3 h-3" />, color: 'from-amber-500 to-yellow-500' },
    { name: 'Spicy', icon: <Flame className="w-3 h-3" />, color: 'from-red-600 to-orange-500' },
    { name: 'Popular', icon: <TrendingUp className="w-3 h-3" />, color: 'from-blue-600 to-cyan-500' },
    { name: 'Healthy', icon: <Heart className="w-3 h-3" />, color: 'from-emerald-500 to-green-400' },
    { name: 'Quick Prep', icon: <Zap className="w-3 h-3" />, color: 'from-violet-600 to-purple-500' },
    { name: 'Premium', icon: <BadgeCheck className="w-3 h-3" />, color: 'from-gray-800 to-gray-600' }
  ];

  const filteredItems = useMemo(() => {
    let items = [...menuItems].filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.every(tag => item.tags?.includes(tag));
      
      return matchesCategory && matchesSearch && matchesTags;
    });

    // Sorting logic
    switch(sortBy) {
      case 'price-low':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        items.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        items.sort((a, b) => {
          const aNew = a.isNew || false;
          const bNew = b.isNew || false;
          return (bNew ? 1 : 0) - (aNew ? 1 : 0);
        });
        break;
      default:
        break;
    }

    return items;
  }, [activeCategory, searchQuery, sortBy, selectedTags]);

  const toggleTag = (tagName) => {
    setSelectedTags(prev => 
      prev.includes(tagName) 
        ? prev.filter(t => t !== tagName)
        : [...prev, tagName]
    );
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSelectedTags([]);
    setSortBy('popular');
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Premium Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-sm font-medium text-gray-900 mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Star className="w-3.5 h-3.5 fill-gray-900" />
              <span>CRAFTED WITH EXCELLENCE</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Culinary
              </span>{" "}
              Collection
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Discover our meticulously crafted menu where quality ingredients meet culinary artistry. 
              Each dish tells a story of passion and perfection.
            </motion.p>
            
            {/* Premium Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-md sm:max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { value: "4.9", label: "Rating", icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" /> },
                { value: `${menuItems.length}`, label: "Menu Items", icon: <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> },
                { value: "15 min", label: "Average Prep", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> },
                { value: "100%", label: "Fresh", icon: <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    {stat.icon}
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 -mt-4 relative">
        {/* Floating Control Bar */}
        <motion.div 
          className="sticky top-4 z-40 mb-6 lg:mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="w-full md:flex-grow relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-10 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}
              </div>

              {/* Filter & Sort Buttons */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                {/* Mobile Categories Toggle */}
                <button
                  onClick={() => setShowMobileCategories(!showMobileCategories)}
                  className="md:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-700 hover:border-gray-400 text-sm"
                >
                  <MenuIcon className="w-4 h-4" />
                  <span>Categories</span>
                </button>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-colors text-sm ${
                    showFilters || selectedTags.length > 0
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Filters</span>
                  {selectedTags.length > 0 && (
                    <span className="bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {selectedTags.length}
                    </span>
                  )}
                </button>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer text-sm w-full md:w-auto"
                  >
                    <option value="popular">Popular</option>
                    <option value="price-low">Price: Low</option>
                    <option value="price-high">Price: High</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 w-3 h-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div 
                  className="mt-4 pt-4 border-t border-gray-200"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Filter by tags</span>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      Clear all
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => {
                      const isSelected = selectedTags.includes(tag.name);
                      return (
                        <button
                          key={tag.name}
                          onClick={() => toggleTag(tag.name)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                            isSelected
                              ? `bg-gradient-to-r ${tag.color} text-white shadow-md`
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tag.icon}
                          {tag.name}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile Categories Dropdown */}
        <AnimatePresence>
          {showMobileCategories && (
            <motion.div 
              className="md:hidden mb-6"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4">
                <div className="grid grid-cols-2 gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setShowMobileCategories(false);
                      }}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
                        activeCategory === category.id
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <div className={`mb-1.5 ${activeCategory === category.id ? 'text-amber-600' : 'text-gray-400'}`}>
                        {category.icon}
                      </div>
                      <span className="text-xs font-medium text-center mb-1">{category.label}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Category Navigation */}
        <div className="hidden md:block mb-8">
          <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-2xl">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <span className={activeCategory === category.id ? 'text-amber-600' : 'text-gray-400'}>
                  {category.icon}
                </span>
                <span className="font-medium text-sm">{category.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Category Tabs */}
        <div className="md:hidden mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className={activeCategory === category.id ? 'text-white' : 'text-gray-500'}>
                  {category.icon}
                </span>
                <span className="text-xs font-medium">{category.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        <AnimatePresence>
          {(selectedTags.length > 0 || searchQuery) && (
            <motion.div 
              className="flex flex-wrap items-center gap-2 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <span className="text-xs sm:text-sm text-gray-500">Active filters:</span>
              {searchQuery && (
                <div className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm">
                  <Search className="w-3 h-3" />
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-blue-900">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {selectedTags.map(tag => (
                <div key={tag} className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                  {tag}
                  <button onClick={() => toggleTag(tag)} className="ml-1 hover:text-gray-900">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <button
                onClick={clearFilters}
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 ml-2"
              >
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'} Found
            </h2>
            {filteredItems.length > 0 && (
              <p className="text-gray-500 text-sm mt-1">
                Sorted by {sortBy === 'popular' ? 'popularity' : sortBy.replace('-', ' ')}
              </p>
            )}
          </div>
          {filteredItems.length > 0 && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mt-2 sm:mt-0">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Premium selection</span>
            </div>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="opacity-100 transform-none"
              >
                <MenuItemCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">No results found</h3>
            <p className="text-gray-600 max-w-sm mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Premium CTA */}
        {filteredItems.length > 0 && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Custom Experience
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Create Your Masterpiece
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
                Not finding exactly what you want? Build your perfect dish with our custom builder.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-gray-900 text-white rounded-lg sm:rounded-xl font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
                Start Custom Order
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;