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
  Menu as MenuIcon,
  ArrowRight
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
    { name: 'Chef\'s Choice', icon: <Sparkles className="w-3.5 h-3.5" />, color: 'from-amber-500 to-yellow-500' },
    { name: 'Spicy', icon: <Flame className="w-3.5 h-3.5" />, color: 'from-red-600 to-orange-500' },
    { name: 'Popular', icon: <TrendingUp className="w-3.5 h-3.5" />, color: 'from-blue-600 to-cyan-500' },
    { name: 'Healthy', icon: <Heart className="w-3.5 h-3.5" />, color: 'from-emerald-500 to-green-400' },
    { name: 'Quick Prep', icon: <Zap className="w-3.5 h-3.5" />, color: 'from-violet-600 to-purple-500' },
    { name: 'Premium', icon: <BadgeCheck className="w-3.5 h-3.5" />, color: 'from-gray-600 to-gray-500' }
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

    switch(sortBy) {
      case 'price-low': items.sort((a, b) => a.price - b.price); break;
      case 'price-high': items.sort((a, b) => b.price - a.price); break;
      case 'popular': items.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
      case 'newest': items.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      default: break;
    }

    return items;
  }, [activeCategory, searchQuery, sortBy, selectedTags]);

  const toggleTag = (tagName) => {
    setSelectedTags(prev => 
      prev.includes(tagName) ? prev.filter(t => t !== tagName) : [...prev, tagName]
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
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-900/10 blur-[120px] pointer-events-none" />

      {/* Premium Header */}
      <div className="relative overflow-hidden border-b border-white/5 bg-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-amber-500 mb-8 backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-4 h-4 fill-amber-500" />
              <span className="tracking-wider uppercase text-xs font-bold">World Class Burgers</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              CULINARY <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">EXPERIENCE</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Explore our menu of handcrafted burgers, artisanal sides, and premium shakes. 
              Made with 100% organic ingredients and pure passion.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: "4.9", label: "Rating", icon: <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> },
                { value: `${menuItems.length}+`, label: "Dishes", icon: <ChefHat className="w-5 h-5 text-orange-500" /> },
                { value: "15m", label: "Prep Time", icon: <Clock className="w-5 h-5 text-blue-500" /> },
                { value: "100%", label: "Fresh", icon: <Leaf className="w-5 h-5 text-green-500" /> }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
                    {stat.icon}
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 w-full">
        {/* Helper layout for Sidebar + Grid if we wanted, but keeping top control bar for now */}
        
        {/* Floating Control Bar */}
        <div className="sticky top-6 z-40 mb-10 w-full">
          <div className="bg-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="w-full lg:flex-grow relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" />
                <input
                  type="text"
                  placeholder="Search for perfection..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:bg-black/60 transition-all font-medium"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                 <button
                  onClick={() => setShowMobileCategories(!showMobileCategories)}
                  className="lg:hidden flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 whitespace-nowrap transition-all"
                >
                  <MenuIcon className="w-4 h-4" />
                  <span>Categories</span>
                </button>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-xl border transition-all whitespace-nowrap font-medium ${
                    showFilters || selectedTags.length > 0
                      ? 'bg-amber-500/20 text-amber-500 border-amber-500/30'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                  {selectedTags.length > 0 && (
                    <span className="bg-amber-500 text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {selectedTags.length}
                    </span>
                  )}
                </button>

                <div className="relative min-w-[140px]">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 pr-10 text-white focus:outline-none focus:border-red-500/50 cursor-pointer hover:bg-white/10 transition-colors font-medium"
                  >
                    <option value="popular" className="bg-gray-900">Popularity</option>
                    <option value="price-low" className="bg-gray-900">Price: Low</option>
                    <option value="price-high" className="bg-gray-900">Price: High</option>
                    <option value="newest" className="bg-gray-900">Newest First</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-500 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div 
                  className="mt-6 pt-6 border-t border-white/10"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => {
                      const isSelected = selectedTags.includes(tag.name);
                      return (
                        <button
                          key={tag.name}
                          onClick={() => toggleTag(tag.name)}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                            isSelected
                              ? `bg-gradient-to-r ${tag.color} text-white border-transparent`
                              : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {tag.icon}
                          {tag.name.toUpperCase()}
                        </button>
                      );
                    })}
                    <button onClick={clearFilters} className="px-4 py-2 text-xs font-bold text-red-500 hover:text-red-400 ml-auto">
                      CLEAR ALL
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Categories Wrapper */}
        <AnimatePresence>
          {showMobileCategories && (
            <motion.div 
              className="lg:hidden mb-8"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 grid grid-cols-2 gap-3">
                {categories.map(category => (
                   <button
                    key={category.id}
                    onClick={() => { setActiveCategory(category.id); setShowMobileCategories(false); }}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all border ${
                      activeCategory === category.id
                        ? 'bg-red-500/20 border-red-500/30 text-red-400'
                        : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="mb-2">{category.icon}</div>
                    <span className="text-xs font-bold">{category.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Categories */}
        <div className="hidden lg:flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all border ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-br from-red-600 to-orange-600 text-white shadow-lg shadow-red-900/20 border-transparent transform scale-105'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white'
                }`}
              >
                {category.icon}
                <span className="font-bold text-sm tracking-wide">{category.label}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                  activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-black/40 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
        </div>

        {/* Results Header */}
        <div className="flex items-end justify-between mb-8 px-2">
           <div>
             <h2 className="text-2xl font-bold text-white mb-1">
               {activeCategory === 'all' ? 'Featured Items' : categories.find(c => c.id === activeCategory)?.label}
             </h2>
             <p className="text-gray-500 text-sm">
               Showing {filteredItems.length} results
             </p>
           </div>
           
           <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
             <Star className="w-3.5 h-3.5 fill-amber-500" />
             <span>Top Rated Selection</span>
           </div>
        </div>

        {/* The Grid */}
        {filteredItems.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuItemCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-8">
              We couldn't find anything matching your search. Try different keywords or clear your filters.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-orange-600 p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
            <div className="relative z-10 max-w-xl">
              <h3 className="text-3xl font-black text-white mb-4">Cannot decide what to eat?</h3>
              <p className="text-red-100 text-lg">Use our custom burger builder to create the masterpiece of your dreams with unlimited toppings!</p>
            </div>
            <button className="relative z-10 bg-white text-red-600 px-8 py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              BUILD MY BURGER
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
