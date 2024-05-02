
import React from 'react';
import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });
import { FaCar } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoBedSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { GiSecurityGate } from "react-icons/gi";
import Image from 'next/image';
import { MdStarPurple500 } from 'react-icons/md';
import FIRST from '../../../assets/p5.jpeg'
import SECOND from '../../../assets/p15.jpeg'
import THIRD from '../../../assets/p16.jpeg'
import FOURTH from '../../../assets/p10.jpeg'

const RoomPage = () => {
    return (
        <section  className='flex flex-col lg:flex-col xl:flex-row bg-white justify-center items-center xl:gap-8 2xl:gap:8 pt-36  pb-36'>
            <main className='w-[90%] md:w-[80%] lg:w-[60%] xl:w-[30%] 2xl:w-[22%]'>
              <p className={`${lora.className} text-lg mb-2 text-[#AA8453] font-semibold`}>OUR CHOICE</p>
    <h1  className={`${lora.className}  text-custom font-medium font-sans color-[#000]`}>The best room just for you!</h1>
    <p className='mt-5 text-justify text-base font-normal color-[#000]'>Unlock unparalleled luxury and comfort with our premium accommodations at Hotel Swagat, Mount Abu. Our meticulously designed rooms offer a harmonious blend of elegance and modernity, providing the perfect retreat for discerning travelers. Indulge in stunning views of the Aravalli Range from the comfort of your room, and experience unmatched hospitality with our attentive staff. Book now and elevate your stay to new heights of relaxation and sophistication at Hotel Swagat, your ultimate destination in Mount Abu.ere.</p>
            <p className='mt-2 text-justify text-base font-normal color-[#000]'> Indulge in the comforts of our accommodations, surrounded by breathtaking views. Let the peaceful ambiance of our surroundings soothe your soul. At Hotel Swagat, every moment is a sanctuary of relaxation and rejuvenation. Join us and discover the true essence of tranquility amidst the natural splendor of Mount Abu. Your unforgettable getaway awaits, where luxury meets serenity. Welcome to your home away from home.</p>
        
            </main>
            <div className='flex flex-wrap md:w-[80%] w-[90%] lg:w-[60%] xl:w-[65%] 2xl:w-[55%]  gap-6 justify-center'>
                <Image  src={FIRST} className='mt-12 xl:mt-0 w-[100%] h-[350px] md:h-[400px] lg:w-[100%] lg:h-[400px] xl:w-[350px] 2xl:w-[400px] rounded-md xl:h-[250px]' />
                <Image src={SECOND} className='mt-12 xl:mt-0 w-[100%] h-[350px] md:h-[400px] lg:w-[100%] lg:h-[400px] xl:w-[350px] 2xl:w-[400px] rounded-md xl:h-[250px]' />
                <Image src={THIRD} className='mt-12 xl:mt-0 w-[100%] h-[350px] md:h-[400px] lg:w-[100%] lg:h-[400px] xl:w-[350px] 2xl:w-[400px] rounded-md xl:h-[250px]' />
                <Image src={FOURTH} className='mt-12 xl:mt-0 w-[100%] h-[350px] md:h-[400px] lg:w-[100%] lg:h-[400px] xl:w-[350px] 2xl:w-[400px] rounded-md xl:h-[250px]'  />
            </div>
        </section>
      )
}

export default RoomPage