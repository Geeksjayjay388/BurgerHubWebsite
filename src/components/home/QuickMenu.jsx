// components/home/QuickMenu.jsx
import React from 'react';
import { 
  ChevronRight, 
  Coffee, 
  IceCream, 
  Beef, 
  Drumstick, 
  Carrot, 
  ChefHat, 
  Zap, 
  Beef as BurgerIcon, 
  Drumstick as ChickenIcon,
  Beef as MeatIcon,
  Carrot as VegIcon,
  ChefHat as ChefIcon,
  Zap as FastIcon,
  Pizza,
  Salad,
  GlassWater as DrinkIcon,
  Beef as SteakIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickMenu = () => {
  const categories = [
    {
      name: "Signature Burgers",
      count: 12,
      icon: <BurgerIcon className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      items: ["Classic", "Bacon", "Mushroom", "Spicy"],
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433f?w=600&h=400&fit=crop"
    },
    {
      name: "Chicken Specials",
      count: 8,
      icon: <ChickenIcon className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600",
      items: ["Crispy", "Grilled", "Spicy", "Tenders"],
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&h=400&fit=crop"
    },
    {
      name: "Fresh Sides",
      count: 10,
      icon: <Carrot className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      items: ["Fries", "Onion Rings", "Salads", "Nuggets"],
      image: "https://images.unsplash.com/photo-1585109641517-5fbf70e3d4f2?w=600&h=400&fit=crop"
    },
    {
      name: "Drinks & Desserts",
      count: 15,
      icon: <DrinkIcon className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      items: ["Shakes", "Sodas", "Ice Cream", "Coffee"],
      image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=600&h=400&fit=crop"
    }
  ];

  const features = [
    {
      icon: <MeatIcon className="w-8 h-8" />,
      title: "100% Beef",
      subtitle: "Premium Quality",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: <VegIcon className="w-8 h-8" />,
      title: "Fresh Veggies",
      subtitle: "Daily Delivery",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <ChefIcon className="w-8 h-8" />,
      title: "Expert Chefs",
      subtitle: "20+ Years Experience",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: <FastIcon className="w-8 h-8" />,
      title: "Fast Service",
      subtitle: "15 Min Guarantee",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-black mb-4">QUICK BROWSE</h2>
          <p className="text-gray-600 text-lg">Find exactly what you're craving</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/menu?category=${category.name.toLowerCase().replace(' ', '-')}`}
              className="group"
            >
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-red-300 hover:shadow-xl transition-all duration-300 h-full">
                {/* Updated: Icon container with Lucide icons */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.count} items</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-red-600 font-bold text-sm">VIEW ALL</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Updated: Features section with icons */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className={`text-center p-6 ${feature.bgColor} rounded-2xl`}>
              <div className={`mb-2 flex justify-center ${feature.iconColor}`}>
                {feature.icon}
              </div>
              <div className="font-bold text-black">{feature.title}</div>
              <div className="text-sm text-gray-600">{feature.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickMenu;