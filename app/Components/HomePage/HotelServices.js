import React from 'react';
import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });
import { FaCar } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoBedSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { GiSecurityGate } from "react-icons/gi";

const HotelServices = () => {
  return (
    <div id="services" className={`${lora.className} bg-[#F8F5F0]  pb-28 pt-28`}>
      <p className={`${lora.className} text-[#AA8453] text-lg  text-center`}>Our Services</p>
      <p className={`${lora.className} font-normal text-[#000] text-x5l mt-2 mb-12 text-center`}>Hotel Facilities</p>
      <div className='flex flex-wrap items-center justify-center  gap-3'>
        <div className='h-[15rem] w-[25rem] border rounded-md  px-5 py-4'>
            <FaCar className='w-12 h-12 text-[#AA8453]'/>
            <p className='mt-3 text-xl'>Parking Space</p>
            <p className='w-[22rem] mt-3 text-justify'>Enjoy hassle-free travel with our secure and spacious parking facilities at Hotel Swagat in Mount Abu</p>
        </div>
        <div className='w-[25rem] h-[15rem] border rounded-md  px-5 py-4'>
            <IoRestaurant className='w-12 h-12 text-[#AA8453]'/>
            <p className='mt-3 text-xl'>Restaurant</p>
            <p className='w-[22rem] mt-3 text-justify'>Satisfy your cravings at our onsite restaurant, offering delectable dishes and impeccable service.</p>
        </div>
        <div className='w-[25rem] h-[15rem] border rounded-md  px-5 py-4'>
            <IoBedSharp className='w-12 h-12 text-[#AA8453]'/>
            <p className='mt-3 text-xl'>Room Service</p>
            <p className='w-[22rem] mt-3 text-justify'>Experience ultimate convenience with our prompt and efficient room service at Hotel Swagat.</p>
        </div>
        <div className='w-[25rem] h-[15rem] border rounded-md  px-5 py-4'>
            <FaWifi className='w-12 h-12 text-[#AA8453]'/>
            <p className='mt-3 text-xl'>Free Wifi</p>
            <p className='w-[22rem] mt-3 text-justify'>Stay connected with complimentary high-speed Wi-Fi at Hotel Swagat. Enjoy seamless internet access throughout your stay, whether for work or leisure.</p>
        </div>
        <div className='h-[15rem] w-[25rem] border rounded-md  px-5 py-4'>
            <FaShuttleVan className='w-12 h-12 text-[#AA8453]'/>
            <p className='mt-3 text-xl'>Pickup & Drop</p>
            <p className='w-[22rem] mt-3 text-justify'>Enjoy hassle-free transport with our pickup and drop service, ensuring seamless travel to and from Hotel Swagat, Mount Abu.</p>
        </div>
        <div className='h-[15rem] w-[25rem] border rounded-md  px-5 py-4'>
            <GiSecurityGate className='w-12 h-12 text-[#AA8453]'/>
            <p className='mt-3 text-xl'>Safe & Secure</p>
            <p className='w-[22rem] mt-3 text-justify'>Rest easy with our top-notch safety measures, ensuring a secure stay at Hotel Swagat, Mount Abu. Your peace of mind is our priority.</p>
        </div>

      </div>
      

    </div>
  )
}

export default HotelServices