import React from "react";
import HomeAbout from "./HomeAbout";
import spice6_bg from "../../assets/Home/spice6_bg.jpg";
import "../../App.css";
import Card from "./Card";
import HomeBackground from "./HomeBackground";
import Testimonials from "./Testimonials";
import Title from "../Title";
const Home = () => {
  return (
    <>
      <HomeBackground />
      <div className="text-white overflow-hidden">
        <div className="welcome-section min-h-screen flex flex-col items-center justify-center mx-4 sm:mx-28 relative z-10">
          <div className="animate-slide-down mb-20 sm:mb-60">
            <h2 className="text-4xl sm:text-7xl flex flex-col items-center">
              <span>Welcome to</span>
              <div className="home-text-spice my-10 md:my-0">
                <h2 className="first">Spice6</h2>
                <h2 className="second">Spice6</h2>
              </div>
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center animate-slide-down duration-700">
            <div className="text-center mb-8">
              <p className="text-lg sm:text-2xl italic text-gray-300">"The curry is delicious! A take-out only curry restaurant"</p>
            </div>
            <button className="bg-orange-600 relative z-10 sm:hover:bg-orange-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-lg sm:text-xl transition-colors duration-300">
              Book a Table
            </button>
          </div>
        </div>
        <div className="main-home">
          <HomeAbout />
        </div>

        <div class="parallax w-full flex items-center justify-center">
          {/* <h1 class="text-white text-6xl font-bold z-10 bg-black/40 w-full h-full flex items-center justify-center">
            Visit Spice6
          </h1> */}
          <Title titleEng="Visit Spice6" titleJp="Spice6に訪問"/>
        </div>
        <div className="whyspice6 bg-black/70">
          <div className="container mx-auto py-8 sm:py-16 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <Card
                image="/src/assets/Home/masala.jpg"
                title="Quality Food"
                description="We use only the finest ingredients to create authentic Indian dishes that will tantalize your taste buds."
              />
              <Card
                image="/src/assets/Home/service.jpg"
                title="Excellent Service"
                description="Our dedicated staff ensures you have an exceptional dining experience every time you visit."
              />
              <Card
                image="/src/assets/Home/restaurant_order.jpg"
                title="Perfect Ambiance"
                description="Enjoy your meal in our carefully designed space that combines modern comfort with traditional Indian elements."
              />
            </div>
          </div>
        </div>

        {/* testimonial */}
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
