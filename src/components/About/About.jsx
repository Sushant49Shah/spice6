import React from 'react'
import Title from '../Title'
import aboutImg from '../../assets/Home/service.jpg'
import Background from '../Background'
import HomeAbout from '../Home/HomeAbout'
import OurChefs from './OurChefs'
const About = () => {
  return (
    <div>
      <Background backgroundImage={aboutImg} />
      <Title titleEng="About Us" titleJp="私たちについて" />
      <div className="about-section min-h-screen bg-black/70">

      <HomeAbout/>
      <div className="out-story">
        
      </div>
      <OurChefs/>
      </div>
    </div>
  );
};

export default About;
