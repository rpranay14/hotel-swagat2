import Image from 'next/image'
import React from 'react';
import Chef from '../../../assets/mount.jpg';
import Dish from '../../../assets/hotel-sawagat-img.jpeg';
import { Lora } from 'next/font/google';
import { MdOutlinePhoneInTalk } from "react-icons/md";

 
const lora = Lora({ subsets: ['latin'] })
const ExcellentService = () => {
  return (
    <section id='aboutus'  className=' px-2 flex flex-col sm:flex sm:flex-col lg:flex lg:flex-row bg-white justify-center items-center gap:12 lg:gap-20 pt-36  pb-36'>
        <div initial={{x:-400}}  transition={{
  ease: "linear",
  duration: 1,
}}  whileInView={{x:0}} className='px-1 py-1 w-[98%] sm:px-2 sm:w-[80%] md:w-[60%] lg:w-[35%] xl:w-[22%]'>
          <p className={`${lora.className} text-lg mb-2 text-[#AA8453] font-semibold`}>Hotel Swagat</p>
<div transition={{
  ease: "linear",
  duration: 2,
}}
 initial={{opacity:0}} whileInView={{opacity:1}}  className={`${lora.className} text-x2l lg:text-custom font-medium font-sans color-[#000]`}>Experience Tranquil Luxury in the Heart of Mount Abu, Rajasthan</div>
<div transition={{
  ease: "linear",
  duration: 2,
}}
 initial={{opacity:0}} whileInView={{opacity:1}} className='mt-5 text-justify text-base font-normal color-[#000]'> Welcome to Hotel Swagat, where peace and luxury combine in Mount Abu. Our retreat in the Aravalli Range offers an unforgettable stay. Discover the beauty of Rajasthan right outside our doors. Enjoy comfort and tranquility amidst stunning scenery. Your journey to relaxation begins here.</div>
        <div transition={{
  ease: "linear",
  duration: 2,
}}
 initial={{opacity:0}} whileInView={{opacity:1}} className='mt-2 text-justify text-base font-normal color-[#000]'> Indulge in the comforts of our accommodations, surrounded by breathtaking views. Let the peaceful ambiance of our surroundings soothe your soul. At Hotel Swagat, every moment is a sanctuary of relaxation and rejuvenation. Join us and discover the true essence of tranquility amidst the natural splendor of Mount Abu. Your unforgettable getaway awaits, where luxury meets serenity. Welcome to your home away from home.</div>
       <div className='flex mt-4 items-center'>
        <MdOutlinePhoneInTalk className='text-[#AA8453] w-12 h-12 gap-2'/>
        <div>
          <p className=''>Reservation</p>
          <p className='text-lg mb-5 lg:mb-0  md:text-xl font-semibold text-[#AA8453] '>+91 9229288705</p>
        </div>
       </div>
        </div>
        <div transition={{
  ease: "linear",
  duration: 1,
}}
 initial={{x:400}} whileInView={{x:0}} className='flex flex-col gap-12'>
            <Image  src={Dish} className='w-[550px] h-[300px]' />
            <Image src={Chef} className='w-[550px] h-[300px]'  />
        </div>
    </section>
  )
}

export default ExcellentService