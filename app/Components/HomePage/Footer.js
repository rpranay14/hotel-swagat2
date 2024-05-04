import React from 'react';
import Image from 'next/image'

import { SlLocationPin } from "react-icons/sl";
import { GrPhone } from "react-icons/gr";
import { MdAlternateEmail, MdOutlinePhoneInTalk } from "react-icons/md";

import { FaInstagram } from "react-icons/fa";
import { Lora } from "next/font/google";
import { LuFacebook } from "react-icons/lu";
import Link from 'next/link';
const lora = Lora({ subsets: ["latin"] });
const Footer = () => {
  return (
    <>
    <div className={`${lora.className} bg-[#222222] py-10 flex flex-col sm:flex-row justify-center items-center text-white sm:gap-6 md:gap-12 lg:gap-24`}>
      <div className='w-[80%] sm:w-[13rem] md:w-[15rem] lg:w-[20rem]'>
        <p className='text-center text-xl mb-4'>About Hotel</p>
        <p className='text-justify  text-base  text-[#ADADAD]'>Discover the essence of comfort and luxury at Hotel Swagat in Mount Abu. With our prime location, exceptional amenities, and personalized service, we ensure a delightful stay for every guest.</p>
      </div>
      <div className='w-[80%] mt-5 sm:mt-0 sm:w-[13rem] md:w-[10rem] lg:w-[15rem] xl:w-[20rem]'>
        <p className='text-center  cursor-pointer hover:text-white text-xl mb-4'>Explore</p>
       <Link href='/'> <p className='text-center  text-base  cursor-pointer hover:text-white mb-1 text-[#ADADAD]'>Home</p></Link>
       <Link href='/#rooms'> <p className='text-center  text-base  cursor-pointer hover:text-white mb-1 text-[#ADADAD]'>Rooms</p></Link>
       <Link href='/#services'> <p className='text-center  text-base  cursor-pointer hover:text-white mb-1 text-[#ADADAD]'>Our Services</p></Link>
       <Link href='/#testimonial'><p className='text-center  text-base  cursor-pointer hover:text-white mb-1 text-[#ADADAD]'>Testimonials</p></Link>
      </div>
      <div className='w-[80%] mt-5 sm:mt-0 sm:w-[10rem] md:w-[15rem] lg:w-[20rem]'>
        <p className='text-center text-xl mb-4'>Contact Us</p>
        <p className='text-justify text-[#ADADAD] text-base'>Hotel Swagat, Rajendra Rd, near Taxi Stand, Sani Gaon, Mount Abu, Rajasthan 307501</p>
        <div className='flex mt-4 items-center'>
        <MdOutlinePhoneInTalk className='text-[#AA8453] w-12 h-12 gap-2'/>
        <div>
          <p className=''>Reservation</p>
          <p className='text-xl font-semibold text-[#AA8453] '>+91 9229288705</p>
        </div>
       </div>
      </div>
     
    </div>
    <div className='bg-[#1E1E1E] text-[#ADADAD]   py-4 '>
      <p className='text-center'>&copy; Copyright 2024 by Hotel Swagat</p>
     
    </div>
    </>
  )
}

export default Footer