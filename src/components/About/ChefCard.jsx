import React from 'react';
import { FaTwitter, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
const ChefCard = ({ name, role, image, socials }) => {
  return (
    <div className="text-center">
      <div className="relative group overflow-hidden rounded-lg mb-4">
        <div className="w-full h-full absolute top-0 left-0"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-[400px] object-cover duration-500 group-hover:scale-110"
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-500 mb-3">{role}</p>
      
      <div className="flex justify-center space-x-4">
        <a href={socials.twitter} className="text-[#C8A97E] hover:text-[#1DA1F2] transition-colors duration-300">
          <FaTwitter className="transform hover:scale-110 transition-transform duration-300" />
        </a>
        <a href={socials.facebook} className="text-[#C8A97E] hover:text-[#4267B2] transition-colors duration-300">
          <FaFacebook className="transform hover:scale-110 transition-transform duration-300" />
        </a>
        <a href={socials.google} className="text-[#C8A97E] hover:text-[#DB4437] transition-colors duration-300">
          <FaGoogle className="transform hover:scale-110 transition-transform duration-300" />
        </a>
        <a href={socials.instagram} className="text-[#C8A97E] hover:text-[#E1306C] transition-colors duration-300">
          <FaInstagram className="transform hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ChefCard; 