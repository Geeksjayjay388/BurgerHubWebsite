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
  BadgeCheck
} from 'lucide-react';
import MenuItemCard from '../components/menu/MenuItemCard';
import { menuItems } from '../data/menuItems';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const categories = [
    { 
      id: 'all', 
      label: 'All Items', 
      icon: <ChefHat className="w-5 h-5" />, 
      count: menuItems.length 
    },
    { 
      id: 'signature-burgers', 
      label: 'Signature Burgers', 
      icon: <Beef className="w-5 h-5" />, 
      count: menuItems.filter(item => item.category === 'signature-burgers').length 
    },
    { 
      id: 'chicken', 
      label: 'Chicken', 
      icon: <Drumstick className="w-5 h-5" />, 
      count: menuItems.filter(item => item.category === 'chicken').length 
    },
    { 
      id: 'veggie', 
      label: 'Veggie', 
      icon: <Leaf className="w-5 h-5" />, 
      count: menuItems.filter(item => item.category === 'veggie').length 
    },
    { 
      id: 'fries-sides', 
      label: 'Fries & Sides', 
      icon: <Carrot className="w-5 h-5" />, 
      count: menuItems.filter(item => item.category === 'fries-sides').length 
    },
    { 
      id: 'drinks', 
      label: 'Drinks', 
      icon: <GlassWater className="w-5 h-5" />, 
      count: menuItems.filter(item => item.category === 'drinks').length 
    },
    { 
      id: 'desserts', 
      label: 'Desserts', 
      icon: <IceCream className="w-5 h-5" />, 
      count: menuItems.filter(item => item.category === 'desserts').length 
    }
  ];

  const tags = [
    { name: 'Chef\'s Choice', icon: <Sparkles className="w-4 h-4" />, color: 'from-amber-500 to-yellow-500' },
    { name: 'Spicy', icon: <Flame className="w-4 h-4" />, color: 'from-red-600 to-orange-500' },
    { name: 'Popular', icon: <TrendingUp className="w-4 h-4" />, color: 'from-blue-600 to-cyan-500' },
    { name: 'Healthy', icon: <Heart className="w-4 h-4" />, color: 'from-emerald-500 to-green-400' },
    { name: 'Quick Prep', icon: <Zap className="w-4 h-4" />, color: 'from-violet-600 to-purple-500' },
    { name: 'Premium', icon: <BadgeCheck className="w-4 h-4" />, color: 'from-gray-800 to-gray-600' }
  ];

  const filteredItems = useMemo(() => {
    let items = menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
        items.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Premium Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-grid-gray-800/[0.02] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
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
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
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
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Discover our meticulously crafted menu where quality ingredients meet culinary artistry. 
              Each dish tells a story of passion and perfection.
            </motion.p>
            
            {/* Premium Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { value: "4.9", label: "Rating", icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" /> },
                { value: `${menuItems.length}`, label: "Menu Items", icon: <ChefHat className="w-5 h-5 text-amber-400" /> },
                { value: "15 min", label: "Average Prep", icon: <Clock className="w-5 h-5 text-amber-400" /> },
                { value: "100%", label: "Fresh", icon: <Leaf className="w-5 h-5 text-emerald-400" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-white flex items-center gap-2">
                    {stat.icon}
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 -mt-4 relative">
        {/* Floating Control Bar */}
        <motion.div 
          className="sticky top-4 z-40 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-grow relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <motion.button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                )}
              </div>

              {/* Filter & Sort */}
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors ${
                    showFilters || selectedTags.length > 0
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {selectedTags.length > 0 && (
                    <span className="bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-1">
                      {selectedTags.length}
                    </span>
                  )}
                </motion.button>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 w-4 h-4 pointer-events-none" />
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
                        <motion.button
                          key={tag.name}
                          onClick={() => toggleTag(tag.name)}
                          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            isSelected
                              ? `bg-gradient-to-r ${tag.color} text-white shadow-md`
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag.icon}
                          {tag.name}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Active Filters */}
        <AnimatePresence>
          {(selectedTags.length > 0 || searchQuery) && (
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <span className="text-sm text-gray-500">Active filters:</span>
              {searchQuery && (
                <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
                  <Search className="w-3 h-3" />
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-blue-900">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {selectedTags.map(tag => (
                <div key={tag} className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                  <button onClick={() => toggleTag(tag)} className="ml-1 hover:text-gray-900">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl max-w-4xl mx-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
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

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'}
            </h2>
            {filteredItems.length > 0 && (
              <p className="text-gray-500 text-sm mt-1">
                Sorted by {sortBy === 'popular' ? 'popularity' : sortBy.replace('-', ' ')}
              </p>
            )}
          </div>
          {filteredItems.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Premium selection</span>
            </div>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <MenuItemCard item={item} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No results found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Reset all filters
            </button>
          </motion.div>
        )}

        {/* Premium CTA */}
        {filteredItems.length > 0 && (
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Custom Experience
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Create Your Masterpiece
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Not finding exactly what you want? Build your perfect dish with our custom builder.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all group">
                Start Custom Order
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;