import Image from "next/image";
import HeroComponent from "./Components/HomePage/HeroComponent";
import ServiceComponent from "./Components/HomePage/ServiceComponent";


import Footer from "./Components/HomePage/Footer";
import ExcellentService from "./Components/HomePage/ExcellentService";

import WhatsappButton from "./WhatsappButton";
import FavouriteMenu from "./Components/HomePage/FavouriteMenu";
import HotelServices from "./Components/HomePage/HotelServices";
import DirectionPage from "./Components/HomePage/DirectionPage";
import RoomPage from "./Components/HomePage/RoomPage";
export default function Home() {
  return (
    <>
     <HeroComponent/>
     <ExcellentService/>
     <FavouriteMenu />
     <HotelServices/>
     <RoomPage/>
     <ServiceComponent/>
     <DirectionPage/>
     
  <WhatsappButton/>
  
  
  
  
  
  <Footer/>
  
    </>
 
  );
}
