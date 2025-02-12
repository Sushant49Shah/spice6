import React from 'react'
import MenuSet from './MenuSet';
import menuImg from '../../assets/Menu/menu.jpg'
import Background from '../Background';
import Title from '../Title';

const Menu = () => {
  const specialItems = [
    {
      name: "Chicken and spinach kamaji",
      description: "Chicken and spinach kamaji",
      price: 750,
      image: "/foods/food1.jpg"
    },
    {
      name: "Wagyu Beef Keema Curry",
      description: "Wagyu Beef Keema Curry",
      price: 780,
      image: "/foods/food2.jpg"
    },
    {
      name: "Chicken Biryani",
      description: "Chicken Biryani",
      price: 800,
      image: "/foods/food3.jpg"
    }
  ];

  return (
    <>
    <Background backgroundImage={menuImg} />
    <Title titleEng="Menu" titleJp="メニュー" />
    <div className="menu-container text-white md:px-0 bg-black/30">
      <div className="special-items bg-black/80 mx-0 md:mx-16 p-4 md:p-8">
        <h2 className="text-orange-400 text-center text-3xl md:text-5xl font-bold mb-4 md:mb-8">Special Items</h2>
        <div className="special-items p-4 md:p-8">
          {specialItems.map((item, index) => (
            <div key={index} className="special-item flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="item-image w-full md:w-48">
                <img src={item.image} alt={item.name} className="w-full h-auto" />
              </div>
              <div className="item-details flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-2 md:mb-0">{item.name}</h3>
                  <span className="text-lg md:text-xl text-orange-400">¥{item.price}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="menu-set bg-black/80 p-4 md:p-8">
      <h1 className='text-orange-400 text-center text-3xl md:text-5xl font-bold mb-4 md:mb-8'>Our Menu Set</h1>
        <MenuSet/>
      </div>
    </div>
    </>
  )
}

export default Menu
