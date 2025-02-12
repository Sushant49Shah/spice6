import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 py-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/20 transform hover:-translate-y-2">
      <div className="w-44 h-44 mb-4 overflow-hidden rounded-full">
        <img 
          src={image} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
