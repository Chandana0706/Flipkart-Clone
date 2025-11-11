// data/products.js
import iphone15 from "../components/images/iphone15.jpeg"; // adjust path according to file location
import oneplus12r from "../components/images/oneplus12r.jpeg"; // adjust path according to file location
import redminote13 from "../components/images/redminote13.jpeg"; // adjust path according to file location
import SamsungGalaxyS23 from "../components/images/SamsungGalaxyS23.jpeg"; // adjust path according to file location
//laptop
import delllaptop from "../components/images/delllaptop.png"; // adjust path according to file location
import galaxytab from "../components/images/galaxytab.jpeg";
import asuslaptop from "../components/images/asuslaptop.jpeg";
import ipad from "../components/images/ipad.jpeg";
//earphones/earpodes
import sonyearphones from "../components/images/sonyearphones.jpeg";
import Hpearphones from "../components/images/Hpearphones.jpeg";
import AppleEarpodes from "../components/images/AppleEarpodes.jpeg";
//dress
import summerdress from "../components/images/summerdress.png";
import partywear from "../components/images/partywear.png";
import cottonchudidhar from "../components/images/cottonchudidhar.jpeg";
//tops/tunics
import fullsleevetop from "../components/images/fullsleevetop.jpeg";
import officewear from "../components/images/officewear.jpeg";
import sleevelesstop from "../components/images/sleevelesstop.jpeg";
import flaredtop from "../components/images/flaredtop.jpeg";
//sarees/lehenga
import mysoresilk from "../components/images/mysoresilk.jpeg";
import redlehenga from "../components/images/redlehenga.jpeg";
import traditionalgown from "../components/images/traditionalgown.jpeg"; 
 // Beauty
import facescanada from "../components/images/facescanadalipstick.jpeg";
import renneeyeliner from "../components/images/renneeyeliner.png";
import fitmefoundation from "../components/images/fitmefoundation.jpeg";
//skincare
import foxtalefacewash from "../components/images/foxtale.jpeg";
import himalayanfacewash from "../components/images/himlayan.jpeg";
import minimalist from "../components/images/Minimalist.jpeg";
import cetaphil from "../components/images/Cetaphil.jpeg";

export const products = [

// Electronics
  //phones
  { id: 1, name: "IPhone 15", category: "Electronics", type: "Phones", price: 60000, image : iphone15, icon: "📱" },
  { id: 2, name: "Oneplus 12R", category: "Electronics", type: "Phones", price: 28000, image : oneplus12r, icon: "📱" },
  { id: 3, name: "Redmi Note13", category: "Electronics", type: "Phones", price: 29000, image : redminote13, icon: "📱" },
  { id: 4, name: "SamsungGalaxyS23", category: "Electronics", type: "Phones", price: 120000, image : SamsungGalaxyS23, icon: "📱" },
//laptops/tabs
  { id: 5, name: "Dell Laptop", category: "Electronics", type: "Laptop/Tabs", price: 48000, image: delllaptop, icon: "💻" },
  { id: 6, name: "Galaxy Tab", category: "Electronics", type: "Laptop/Tabs", price: 10000, image: galaxytab, icon: "💻" },
  { id: 7, name: "Asus Laptop", category: "Electronics", type: "Laptop/Tabs", price: 38000, image: asuslaptop, icon: "💻" },
  { id: 8, name: "Ipad", category: "Electronics", type: "Laptop/Tabs", price: 50000, image: ipad, icon: "💻" },
  //earpodes/earphones
  { id: 9, name: "Earphones Sony", category: "Electronics", type: "Earphones/Earpodes", price: 1800, image: sonyearphones, icon: "🎧" },
  { id: 10, name: "Earphones HP", category: "Electronics", type: "Earphones/Earpodes", price: 458, image: Hpearphones, icon: "🎧" },
  { id: 11, name: "Earpodes Apple", category: "Electronics", type: "Earphones/Earpodes", price: 1400, image: AppleEarpodes, icon: "🎧" },
  // Dresses
  { id: 12, name: "Summer Dress", category: "Dresses", type: "Dresses", price: 1000, image: summerdress, icon: "👗" },
  { id: 13, name: "Party Wear", category: "Dresses", type: "Dresses", price: 1500, image: partywear, icon: "👗" },
  { id: 14, name: "Cotton Chudidhar", category: "Dresses", type: "Dresses", price: 800, image:cottonchudidhar , icon: "👗" },
  //tops/tunics
  { id: 15, name: "Full Sleeve Top", category: "Dresses", type: "Tops/Tunics", price: 450, image: fullsleevetop, icon: "👚" },
  { id: 16, name: "Office Wear", category: "Dresses", type: "Tops/Tunics", price: 600, image: officewear, icon: "👚" },
  { id: 17, name: "Sleeveless Top", category: "Dresses", type: "Tops/Tunics", price: 370, image: sleevelesstop, icon: "👚" },
  { id: 18, name: "Flared Top", category: "Dresses", type: "Tops/Tunics", price: 500, image: flaredtop, icon: "👚" },
//Sarees/Lehengas
  { id: 19, name: " Mysore Silk", category: "Dresses", type: "Sarees/Lehengas", price: 25000, image: mysoresilk, icon: "🟣" },
  { id: 20, name: "Red Lehenga", category: "Dresses", type: "Sarees/Lehengas", price: 2000, image: redlehenga, icon: "🟣" },
  { id: 21, name: "Traditional Gown", category: "Dresses", type: "Sarees/Lehengas", price: 3000, image: traditionalgown, icon: "🟣" },
  // Beauty
  //makeup
  { id: 22, name: " Faces Canada Hydrating Natural Lipstick", category: "Beauty", type: "Makeup", price: 220, image: facescanada, icon: "💄" },
  { id: 23, name: " Renne EyeLiner ", category: "Beauty", type: "Makeup", price: 360, image: renneeyeliner, icon: "💄" },
  { id: 24, name: "FitMe Foundation", category: "Beauty", type: "Makeup", price: 369, image: fitmefoundation, icon: "💄" },
  //skincare
  { id: 25, name: "FoxtaleFaceWash", category: "Beauty", type: "Skincare", price: 700, image: foxtalefacewash, icon: "🧴" },
  { id: 26, name: " Himalayan Face Wash", category: "Beauty", type: "Skincare", price: 700, image: himalayanfacewash, icon: "🧴" },
  { id: 27, name: " Minimalist Face Serum", category: "Beauty", type: "Skincare", price: 700, image: minimalist, icon: "🧴" },
  { id: 28, name: " Cetaphil Suncsreen Cream SPF++", category: "Beauty", type: "Skincare", price: 700, image: cetaphil, icon: "🧴" },

];
