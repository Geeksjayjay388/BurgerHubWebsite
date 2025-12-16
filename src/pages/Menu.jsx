// pages/Menu.jsx
import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import MenuItemCard from '../components/menu/MenuItemCard';
import { menuItems } from '../data/menuItems';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    'signature-burgers',
    'chicken',
    'veggie',
    'fries-sides',
    'drinks',
    'desserts'
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-black mb-4">OUR MENU</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Handcrafted with premium ingredients, cooked to perfection, served with passion.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-red-600"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors">
            <Filter className="w-5 h-5" />
            FILTER
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🍔</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">No items found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Menu;