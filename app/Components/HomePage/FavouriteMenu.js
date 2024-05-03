import React from 'react';
import FIRST from '../../../assets/family-room.jpg'
import SECOND from '../../../assets/family-deluxe-room.jpg'
import Image from 'next/image';
import { Lora } from 'next/font/google';
import { MdOutlineHome } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
 
const lora = Lora({ subsets: ['latin'] })

const FavouriteMenu = () => {
  return (
    <div id='rooms' className={`${lora.className} bg-[#222222]  pb-16 pt-16`}>
      <p className={`${lora.className} text-[#AA8453] text-lg  text-center`}>Hotel Swagat</p>
      <p className={`${lora.className} font-normal text-[#fff] text-x5l mt-2 mb-12 text-center`}>Rooms & Suites</p>
      <div className='flex flex-wrap flex-col lg:flex-row items-center justify-center gap-12'>
        <div className='w-[24rem] sm:w-[35rem] lg:w-[30rem] bg-[#F8F5F0] pb-4 rounded-md overflow-hidden'>
          <Image src={FIRST} className="w-[100%] h-[15rem]"/>
          <div className='px-3 py-2'>
            <p className='text-lg font-semibold mb-3'>Deluxe Double Room AC</p>
            <p className='text-justify mb-4 '>The room is spacious, 168 sq feet in size with all modern amenities and are designed as per Hotel Industry standards. It comes with an attached Bathroom, King size double-Bed along with chairs and coffee table and LCD TV with multi-channels.</p>
            <p className='flex gap-1 mt-2  mb-3'><span className='text-[#AA8453] text-xl font-bold'>₹1950</span><span className='mt-1'>per night</span> </p>
          <p className='flex gap-1 items-center'><MdOutlineHome className='text-[#AA8453] w-5 h-5 '/>Size: 168 sq.ft</p>
          <p className='flex gap-1 items-center'><FaRegUser className='text-[#AA8453] w-4 h-4 '/>Capacity: Max 4 guest</p>
          <p className='flex gap-1 items-center'><IoBedOutline className='text-[#AA8453] w-4 h-4 '/>Bed: King beds</p>
          <p></p>
          </div>
        </div>

        <div className='w-[24rem] sm:w-[35rem] lg:w-[30rem] bg-[#F8F5F0] pb-4 rounded-md overflow-hidden'>
          <Image src={SECOND} className="w-[100%] h-[15rem]"/>
          <div className='px-3 py-2'>
            <p className='text-lg font-semibold mb-3'>FAMILY DELUXE ROOM AC</p>
            <p className='text-justify mb-4 '>Family room have 2 king size bed 126 sq feet in size with all modern amenities and are designed as per Hotel Industry standards. It comes with an attached Bathroom, King size double-Bed along with chairs and coffee table and LCD TV with multi-channels.</p>
            <p className='flex gap-1 mt-2  mb-3'><span className='text-[#AA8453] text-xl font-bold'>₹2200</span><span className='mt-1'>per night</span> </p>
          <p className='flex gap-1 items-center'><MdOutlineHome className='text-[#AA8453] w-5 h-5 '/>Size: 128 sq.ft</p>
          <p className='flex gap-1 items-center'><FaRegUser className='text-[#AA8453] w-4 h-4 '/>Capacity: Max 6 guest</p>
          <p className='flex gap-1 items-center'><IoBedOutline className='text-[#AA8453] w-4 h-4 '/>Bed: 2 King beds</p>
          <p></p>
          </div>
        </div>
        <div className='w-[24rem] sm:w-[35rem] lg:w-[30rem] bg-[#F8F5F0] pb-4 rounded-md overflow-hidden'>
          <Image src={FIRST} className="w-[100%] h-[15rem]"/>
          <div className='px-3 py-2'>
            <p className='text-lg font-semibold mb-3'>DELUXE ROOM</p>
            <p className='text-justify mb-4 '>The room is spacious, 168 sq feet in size with all modern amenities and are designed as per Hotel Industry standards. It comes with an attached Bathroom, King size double-Bed along with chairs and coffee table and LCD TV with multi-channels.</p>
            <p className='flex gap-1 mt-2  mb-3'><span className='text-[#AA8453] text-xl font-bold'>₹1000</span><span className='mt-1'>per night</span> </p>
          <p className='flex gap-1 items-center'><MdOutlineHome className='text-[#AA8453] w-5 h-5 '/>Size: 168 sq.ft</p>
          <p className='flex gap-1 items-center'><FaRegUser className='text-[#AA8453] w-4 h-4 '/>Capacity: Max 4 guest</p>
          <p className='flex gap-1 items-center'><IoBedOutline className='text-[#AA8453] w-4 h-4 '/>Bed: King beds</p>
          <p></p>
          </div>
        </div>

        <div className='w-[24rem] sm:w-[35rem] lg:w-[30rem] bg-[#F8F5F0] pb-4 rounded-md overflow-hidden'>
          <Image src={SECOND} className="w-[100%] h-[15rem]"/>
          <div className='px-3 py-2'>
            <p className='text-lg font-semibold mb-3'>SUPER DELUXE ROOM </p>
            <p className='text-justify mb-4 '>Family room have 2 king size bed 126 sq feet in size with all modern amenities and are designed as per Hotel Industry standards. It comes with an attached Bathroom, King size double-Bed along with chairs and coffee table and LCD TV with multi-channels.</p>
            <p className='flex gap-1 mt-2  mb-3'><span className='text-[#AA8453] text-xl font-bold'>₹1200</span><span className='mt-1'>per night</span> </p>
          <p className='flex gap-1 items-center'><MdOutlineHome className='text-[#AA8453] w-5 h-5 '/>Size: 128 sq.ft</p>
          <p className='flex gap-1 items-center'><FaRegUser className='text-[#AA8453] w-4 h-4 '/>Capacity: Max 6 guest</p>
          <p className='flex gap-1 items-center'><IoBedOutline className='text-[#AA8453] w-4 h-4 '/>Bed: 2 King beds</p>
          <p></p>
          </div>
        </div>

      </div>
      <div className='flex flex-col lg:flex-row mt-12 items-center justify-center gap-12'>
      

      </div>

    </div>
  )
}

export default FavouriteMenu