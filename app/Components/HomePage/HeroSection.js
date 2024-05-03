import React from 'react';
import { Lora } from "next/font/google";
import Image from 'next/image';
import FIRST from '../../../assets/p14.jpeg';
import SECOND from '../../../assets/p7.jpeg'
const lora = Lora({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div id="home" className={`${lora.className} relative h-[100vh]   pb-44 pt-24 hero-bg-img flex flex-col 2xl:flex-row justify-center items-center gap-24 `}>
        <div className=' px-5 absolute flex justify-between items-center top-0 bottom-0 left-0 right-0 bg-color-new'>
            <div className=' lg:w-[70%] xl:w-[50%] mx-auto bg-[#AA8453] flex flex-col justify-between items-center py-4 rounded-lg'>
            <p className=' font-medium text-x2l lg:text-custom w-[80%]' >Embark on a Regal Retreat: Experience Mount Abu's Hill Station Charm at Hotel Swagat</p>
            <p className='mt-5 text-justify text-lg w-[80%] text-[#000]' >Discover the regal charm of Hotel Swagat, a mere 10-minute stroll from Nakki Lake and conveniently located 2km from the Toad Rock viewpoint and Dilwara Temples. Unwind in our elegant rooms, where modern comforts meet royal elegance. Enjoy hassle-free parking facilities, ensuring a relaxed stay amidst Mount Abu's serene surroundings.</p>
        <p className='bg-[#5e411a] text-lg py-3 rounded-lg px-5 mt-2 text-white'>For Booking: Call +91 9229288705</p>
        </div>
        </div>
       
    </div>
  )
}

export default HeroSection