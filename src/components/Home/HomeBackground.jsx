import React, { useState } from 'react';
import background1 from '../../assets/Home/background4.jpg';
import background2 from '../../assets/Home/background5.jpg';
import background3 from '../../assets/Home/background6.jpg';

const HomeBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    background1,
    background2,
    background3,
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div 
      className="background-images fixed top-0 left-0 w-screen min-h-full -z-10"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/70"
        style={{
          transition: 'all 0.5s ease-in-out',
        }}
      ></div>
      
    </div>
      <div className="navigation-buttons text-white absolute z-0 bottom-0 w-full flex justify-between items-center">
        <div className="group h-screen w-32 flex items-center hover:bg-gradient-to-r hover:from-black/30 hover:to-transparent">
          <button 
            onClick={previousImage} 
            className="nav-button prev-button bg-black/50 px-6 py-4 rounded hover:bg-black/70 text-6xl opacity-0 group-hover:opacity-100 peer-hover:opacity-100 transition-opacity duration-300 ml-4"
          >
            &#8249; 
          </button>
        </div>
        <div className="peer group h-screen flex items-center hover:bg-gradient-to-l hover:from-black/30 hover:to-transparent">
          <button 
            onClick={nextImage} 
            className="nav-button next-button bg-black/50 px-6 py-4 rounded hover:bg-black/70 text-6xl opacity-0 group-hover:opacity-100 group-hover:[&+.prev-button]:opacity-100 transition-opacity duration-300 mr-4"
          >
            &#8250;
          </button>
        </div>
      </div>
      </>
  );
};

export default HomeBackground;
