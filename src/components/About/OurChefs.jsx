import React from 'react';
import ChefCard from './ChefCard';
import chef1 from '../../assets/About/chef1.jpg'
import chef2 from '../../assets/About/chef2.jpg'
import chef3 from '../../assets/About/chef3.jpg'
import chef4 from '../../assets/About/chef4.jpg'

const chefData = [
  {
    name: 'John Smooth',
    role: 'Restaurant Owner',
    image: chef1,
    socials: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#'
    }
  },
  {
    name: 'Rebeca Welson',
    role: 'Head Chef',
    image: chef2,
    socials: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#'
    }
  },
  {
    name: 'Kharl Branyt',
    role: 'Chef',
    image: chef3,
    socials: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#'
    }
  },
  {
    name: 'Luke Simon',
    role: 'Chef',
    image: chef4,
    socials: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#'
    }
  }
];

const OurChefs = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Our Master Chef
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefData.map((chef, index) => (
            <ChefCard key={index} {...chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurChefs;
