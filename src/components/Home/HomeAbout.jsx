import React from 'react';
import about1 from "../../assets/About/about1.jpg";
import about2 from "../../assets/About/about2.jpg";

const HomeAbout = () => {
  return (
    <div className="home-about-section py-16 px-4 bg-black/70">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <img 
            src={about1} 
            alt="Chef preparing a dish" 
            className="w-full h-full object-cover rounded-lg"
          />
          <img 
            src={about2} 
            alt="One Food" 
            className="w-full h-full object-cover rounded-lg mt-4"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            {/* <h3 className="text-[#C4A484] text-3xl font-script">About</h3> */}
            <h2 className="text-4xl font-bold mb-4">Spice6</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            Originally, We ran a curry restaurant in a small, hidden gem in Ximending, Aoi Ward. After that, we started selling at events and became a very popular restaurant with long lines! Then, in April 2020, we opened a new takeout-only store in Sena, Aoi Ward!
          </p>

          <div className="flex flex-col items-start mb-4">
            <span className="text-gray-300"><b>Everyday</b> except Monday and Tuesday</span>
            <span className="text-white ml-2">10 AM 〜 6 PM</span>
          </div>

          <div className="text-[#C4A484] text-3xl font-bold">
          +054-264-2220
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeAbout;