import React from 'react';
import ChefCard from './ChefCard';
import chef1 from '../../assets/About/chef1.jpg'
import chef2 from '../../assets/About/chef2.jpg'
import chef3 from '../../assets/About/chef3.jpg'

const chefData = [
  {
    name: 'カン カムラン',
    role: 'レストラン オーナー',
    image: chef1,
    socials: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#'
    }
  },
  {
    name: 'グルン サントシュ',
    role: 'ヘッド シェフ',
    image: chef2,
    socials: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#'
    }
  },
  {
    name: 'クリシーナ',
    role: 'プロフェッショナル シェフ',
    image: chef3,
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
            シェフ紹介
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {chefData.map((chef, index) => (
            <ChefCard key={index} {...chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurChefs;
