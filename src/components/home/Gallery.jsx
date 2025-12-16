// components/home/Gallery.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Juicy Burgers",
      description: "Fresh off the grill",
      emoji: "🍔",
      color: "from-red-500 to-yellow-500"
    },
    {
      id: 2,
      title: "Crispy Fries",
      description: "Golden perfection",
      emoji: "🍟",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      title: "Refreshing Drinks",
      description: "Ice cold beverages",
      emoji: "🥤",
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 4,
      title: "Creamy Shakes",
      description: "Hand-spun delights",
      emoji: "🍦",
      color: "from-pink-400 to-purple-400"
    },
    {
      id: 5,
      title: "Chicken Specials",
      description: "Crispy & delicious",
      emoji: "🍗",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Fresh Salads",
      description: "Healthy options",
      emoji: "🥗",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-black mb-4">FOOD GALLERY</h2>
            <p className="text-gray-400">A taste of what we serve</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-red-600 rounded-full font-bold hover:bg-red-700 transition-colors">
              <Maximize2 className="w-4 h-4" />
              VIEW ALL
            </button>
          </div>
        </div>

        {/* Main Gallery Display */}
        <div className="mb-8">
          <div className="relative h-96 rounded-3xl overflow-hidden">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : index < activeIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-8`}>
                  <span className="text-9xl mb-6">{item.emoji}</span>
                  <h3 className="text-3xl font-black mb-2">{item.title}</h3>
                  <p className="text-xl opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden rounded-2xl aspect-square transition-all duration-300 ${
                index === activeIndex
                  ? 'ring-4 ring-red-500 scale-105'
                  : 'opacity-70 hover:opacity-100 hover:scale-102'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <span className="text-4xl">{item.emoji}</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;