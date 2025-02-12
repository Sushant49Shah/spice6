// import React from "react";
// import MenuCard from "./MenuCard";
// import Title from "../Title";
// import menuImg from "../../assets/Menu/menu.jpg";
// import Background from "../Background";

// const Menu1 = () => {
//   const menuSet = [
//     {
//       imgSrc: menuImg,
//       title: "Kamazi",
//       items: [
//         {
//           name: "Chicken Kamaji in spicy sour sauce",
//           price: "750",
//           img: menuImg,
//           description: "Tender chicken pieces cooked in our signature spicy-sour sauce, perfectly balanced with aromatic spices"
//         },
//         {
//           name: "Chicken and Spinach Kamaji",
//           price: "750",
//           img: menuImg,
//           description: "A healthy twist on our classic Kamaji, featuring fresh spinach and succulent chicken in a mild sauce"
//         }
//       ],
//     },
//     {
//       imgSrc: menuImg,
//       title: "Curry Set",
//       items: [
//         {
//           name: "Wagyu Beef Keema Curry",
//           price: "780",
//           img: menuImg,
//           description: "Premium minced Wagyu beef cooked with aromatic spices in a rich, hearty curry sauce"
//         },
//         {
//           name: "Wagyu beef curry",
//           price: "850",
//           img: menuImg,
//           description: "Tender chunks of Wagyu beef slow-cooked in our signature curry sauce"
//         },
//         {
//           name: "Chicken curry",
//           price: "780",
//           img: menuImg,
//           description: "Classic curry with tender chicken pieces in a rich, aromatic sauce"
//         },
//         {
//           name: "Seafood curry",
//           price: "920",
//           img: menuImg,
//           description: "Fresh seafood medley in a coconut-based curry sauce with coastal spices"
//         },
//         {
//           name: "Spinach and Wagyu Beef Keema Curry",
//           price: "820",
//           img: menuImg,
//           description: "Minced Wagyu beef and fresh spinach in a perfectly spiced curry sauce"
//         },
//         {
//           name: "Spinach and chicken curry",
//           price: "820",
//           img: menuImg,
//           description: "Tender chicken and nutrient-rich spinach in a mild curry sauce"
//         }
//       ],
//     },
//     {
//       imgSrc: menuImg,
//       title: "Biryani",
//       items: [
//         {
//           name: "Chicken Biryani",
//           price: "800",
//           img: menuImg,
//           description: "Aromatic basmati rice cooked with tender chicken and signature biryani spices"
//         },
//         {
//           name: "Spinach and chickpea biryani",
//           price: "800",
//           img: menuImg,
//           description: "Vegetarian biryani with fresh spinach and protein-rich chickpeas"
//         }
//       ],
//     },
//     {
//       imgSrc: menuImg,
//       title: "Side menu",
//       items: [
//         {
//           name: "Chapli",
//           price: "600",
//           img: menuImg,
//           description: "Traditional spiced flatbread, perfect accompaniment to any curry"
//         },
//         {
//           name: "Spicy Chicken",
//           price: "550",
//           img: menuImg,
//           description: "Crispy chicken pieces marinated in special spicy blend"
//         }
//       ],
//     },
//     {
//       imgSrc: menuImg,
//       title: "Frozen curry",
//       items: [
//         {
//           name: "Moong curry",
//           price: "550",
//           img: menuImg,
//           description: "Nutritious green moong beans in a mild, comforting curry sauce"
//         },
//         {
//           name: "Chickpea curry",
//           price: "550",
//           img: menuImg,
//           description: "Protein-rich chickpeas in a aromatic tomato-based curry sauce"
//         },
//         {
//           name: "Lentil curry",
//           price: "550",
//           img: menuImg,
//           description: "Hearty yellow lentils cooked with traditional spices"
//         },
//         {
//           name: "Mutton curry",
//           price: "1300",
//           img: menuImg,
//           description: "Tender mutton slow-cooked in a rich, spicy curry sauce"
//         },
//       ],
//     },
//   ];

//   const [selectedMenu, setSelectedMenu] = React.useState(0);

//   return (
//     <div>
//       <Background backgroundImage={menuImg} />
//       <Title titleEng="Menu" titleJp="メニュー" />
//       <div className="menu-container bg-black/70 min-h-screen py-10">
//         <div className="menu-set flex flex-wrap justify-center items-center gap-4 mt-10 px-4">
//           {menuSet.map((menu, index) => (
//             <div 
//               key={index} 
//               className={`relative cursor-pointer border-2 border-white rounded-full`}
//               onClick={() => setSelectedMenu(index)}
//             >
//               <div className={`px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-xl font-bold transition-all duration-300 ${
//                 selectedMenu === index 
//                   ? 'bg-orange-400 rounded-full text-white' 
//                   : 'text-white hover:text-orange-400'
//               }`}>
//                 {menu.title}
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="menu-items mt-10 px-4">
//           {selectedMenu !== null && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
//               {menuSet[selectedMenu].items.map((item, index) => (
//                 <MenuCard
//                   key={index}
//                   title={item.name}
//                   price={item.price}
//                   imgSrc={item.img}
//                   description={item.description}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu1;
