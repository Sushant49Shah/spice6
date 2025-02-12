import React from 'react';

const Background = ({ backgroundImage }) => {
    return (
      <>
        <div 
          className="background-images fixed top-0 left-0 w-screen min-h-full -z-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
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
      </>
    );
  };
  
  export default Background;