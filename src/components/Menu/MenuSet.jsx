import React from 'react';
import menuSetInfo from './MenuSetInfo';

const MenuSet = () => {
  return (
    <div className="menu-set mt-16">
      {menuSetInfo.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="text-center text-4xl font-bold mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-orange-400"></div>
            <span className="relative px-8 bg-black">
              {category.title}
            </span>
          </h2>
          <div className="menu-items grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.items.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className="menu-item p-4 cursor-pointer group relative"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="hidden md:block text-gray-400 mt-1">{item.description}</p>
                  </div>
                  <span className="text-orange-400 text-xl">¥{parseFloat(item.price).toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSet; 