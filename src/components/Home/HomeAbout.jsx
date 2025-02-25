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
          美味しいテイクアウト専門のカレー店です。カレーを中心に、カマジ、ビリヤニ、チャパティ、ナンなど、さまざまなメニューをご用意しております。本場の味を再現するために、経験豊富なシェフがこだわりのスパイスと新鮮な食材を使用して、一つひとつ丁寧に調理しています。ぜひ当店のこだわりの味をお楽しみください！
          </p>

          <div className="flex flex-col mb-4">
            <span className="text-gray-300"><b>営業時間:</b> 10:00 ～ 18:00</span>
            <span className="text-white">定休日: 月曜日・火曜日</span>
          </div>

          <div>
          <p>お電話</p>
          <span className='text-[#C4A484] text-3xl font-bold'>090-6120-4765</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeAbout;