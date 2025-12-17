// pages/Menu.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  Search, 
  Star, 
  Flame, 
  ChevronRight, 
  X, 
  Beef,
  Drumstick,
  Carrot,
  Salad,
  GlassWater,
  IceCream,
  Zap,
  Sparkles,
  Thermometer,
  Clock,
  Crown,
  Home,
  TrendingUp,
  DollarSign,
  Calendar
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
      icon: <Home className="w-6 h-6" />, 
      count: menuItems.length 
    },
    { 
      id: 'signature-burgers', 
      label: 'Signature Burgers', 
      icon: <Beef className="w-6 h-6" />, 
      count: menuItems.filter(item => item.category === 'signature-burgers').length 
    },
    { 
      id: 'chicken', 
      label: 'Chicken', 
      icon: <Drumstick className="w-6 h-6" />, 
      count: menuItems.filter(item => item.category === 'chicken').length 
    },
    { 
      id: 'veggie', 
      label: 'Veggie', 
      icon: <Salad className="w-6 h-6" />, 
      count: menuItems.filter(item => item.category === 'veggie').length 
    },
    { 
      id: 'fries-sides', 
      label: 'Fries & Sides', 
      icon: <Carrot className="w-6 h-6" />, 
      count: menuItems.filter(item => item.category === 'fries-sides').length 
    },
    { 
      id: 'drinks', 
      label: 'Drinks', 
      icon: <GlassWater className="w-6 h-6" />, 
      count: menuItems.filter(item => item.category === 'drinks').length 
    },
    { 
      id: 'desserts', 
      label: 'Desserts', 
      icon: <IceCream className="w-6 h-6" />, 
      count: menuItems.filter(item => item.category === 'desserts').length 
    }
  ];

  const tags = [
    { name: 'HOT', icon: <Flame className="w-4 h-4" />, color: 'from-red-600 to-orange-500' },
    { name: 'Popular', icon: <TrendingUp className="w-4 h-4" />, color: 'from-yellow-500 to-amber-500' },
    { name: 'Spicy', icon: <Thermometer className="w-4 h-4" />, color: 'from-red-700 to-pink-600' },
    { name: 'New', icon: <Sparkles className="w-4 h-4" />, color: 'from-blue-500 to-cyan-400' },
    { name: 'Healthy', icon: <Salad className="w-4 h-4" />, color: 'from-green-500 to-emerald-400' },
    { name: 'Quick', icon: <Zap className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const categoryVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <motion.div 
            className="text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full text-sm font-bold mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Crown className="w-4 h-4" />
              <span>OVER {menuItems.length}+ ITEMS</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                EXPLORE
              </span>{" "}
              OUR MENU
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Handcrafted with premium ingredients, cooked to perfection, served with passion. 
              Every item tells a story of quality and flavor innovation.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { value: "4.9", label: "Average Rating", icon: <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" /> },
                { value: `${menuItems.length}+`, label: "Menu Items", icon: <Beef className="w-6 h-6 text-red-500" /> },
                { value: "15m", label: "Avg. Prep Time", icon: <Clock className="w-6 h-6 text-blue-500" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-black text-gray-900 flex items-center justify-center gap-2">
                    {stat.icon}
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search & Filter Bar */}
        <motion.div 
          className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm py-4 mb-8 border-b border-gray-200"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for burgers, sides, drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:shadow-lg transition-all duration-300"
              />
              {searchQuery && (
                <motion.button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                    showFilters ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="w-5 h-5" />
                  FILTERS
                  {selectedTags.length > 0 && (
                    <motion.span 
                      className="bg-white text-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      {selectedTags.length}
                    </motion.span>
                  )}
                </button>
              </motion.div>

              <motion.select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-xl font-bold focus:outline-none focus:border-red-500"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <option value="popular">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Most Popular
                  </span>
                </option>
                <option value="price-low">
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Price: Low to High
                  </span>
                </option>
                <option value="price-high">
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Price: High to Low
                  </span>
                </option>
                <option value="newest">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Newest First
                  </span>
                </option>
              </motion.select>
            </div>
          </div>

          {/* Filter Tags */}
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-200"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800">Filter by Tags</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => {
                    const isSelected = selectedTags.includes(tag.name);
                    return (
                      <motion.button
                        key={tag.name}
                        onClick={() => toggleTag(tag.name)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold transition-all ${
                          isSelected
                            ? `bg-gradient-to-r ${tag.color} text-white shadow-lg`
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-red-300'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={`${isSelected ? 'text-white' : 'text-gray-600'}`}>
                          {tag.icon}
                        </div>
                        <span>{tag.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Selected Filters Display */}
        <AnimatePresence>
          {(selectedTags.length > 0 || searchQuery) && (
            <motion.div 
              className="flex items-center gap-2 mb-6 flex-wrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-gray-600 text-sm">Active filters:</span>
              {searchQuery && (
                <motion.span 
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <Search className="w-3 h-3" />
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-red-900">
                    <X className="w-3 h-3" />
                  </button>
                </motion.span>
              )}
              {selectedTags.map(tag => {
                const tagData = tags.find(t => t.name === tag);
                return (
                  <motion.span 
                    key={tag} 
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    {tagData?.icon && <span className="text-gray-600">{tagData.icon}</span>}
                    {tag}
                    <button onClick={() => toggleTag(tag)} className="ml-1 hover:text-gray-900">
                      <X className="w-3 h-3" />
                    </button>
                  </motion.span>
                );
              })}
              <motion.button
                onClick={clearFilters}
                className="text-sm text-red-600 hover:text-red-700 font-medium ml-2 flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-3 h-3" />
                Clear all
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Tabs */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex flex-col items-center px-6 py-4 rounded-2xl min-w-[140px] transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-xl'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-red-300 hover:shadow-lg'
                }`}
                variants={categoryVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                custom={index}
                animate={activeCategory === category.id ? "hover" : "initial"}
              >
                <div className={`mb-2 transition-transform ${
                  activeCategory === category.id ? 'text-white' : 'text-gray-600'
                }`}>
                  {category.icon}
                </div>
                <div className="font-bold text-sm mb-1">{category.label}</div>
                <div className={`text-xs ${activeCategory === category.id ? 'text-white/90' : 'text-gray-500'}`}>
                  {category.count} items
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'} Found
          </h2>
          {filteredItems.length > 0 && (
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm">All items rated 4.0+</span>
            </div>
          )}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="items-grid"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  custom={index}
                  layoutId={`menu-item-${item.id}`}
                >
                  <MenuItemCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key="empty-state"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">No items found</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                We couldn't find any items matching your search. Try adjusting your filters or search term.
              </p>
              <motion.button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear All Filters
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        {filteredItems.length > 0 && (
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">Can't find what you're looking for?</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Customize your perfect meal with our Build Your Own Burger feature. Choose from 50+ ingredients!
              </p>
              <motion.button 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-bold hover:shadow-xl hover:shadow-red-500/30 transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>CREATE CUSTOM BURGER</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;