import React from 'react';
import { Lora } from 'next/font/google';
const lora = Lora({ subsets: ['latin'] });
import { HiOutlineLocationMarker } from "react-icons/hi";
const DirectionPage = () => {
  return (
    <div id="contactus" className={`${lora.className} w-[100%] pt-20 pb-20 pl-2 pr-2`}>
        
         <p className={`${lora.className} text-[#AA8453] text-lg  text-center`}>Hotel Swagat</p>
      <p className={`${lora.className} font-normal text-[#000] text-x5l mt-1 mb-12 text-center`}>Contact Us</p>
      <div className=' mb-5 flex justify-center items-start '>
            <div className='flex flex-col gap-2  w-[20rem] items-center justify-center'><p className='text-lg text-[#AA8453]'>Address</p> <p>Hotel Swagat, Rajendra Rd, near Taxi Stand, Sani Gaon, Mount Abu, Rajasthan 307501</p></div>
            <div className='flex flex-col gap-2  w-[20rem] items-center justify-center'><p className='text-lg text-[#AA8453]'>Mobile Number</p> <p>+91 9876543210</p></div>
        </div>
     <div className='flex justify-center items-center'>
       
     <iframe className=' w-[98%] h-[400px] md:h-[600px] md:w-[800px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9309894268567!2d72.71065127604096!3d24.59157775596291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2a79fd3297eb%3A0xaa84f245bb461852!2sHotel%20Swagat!5e0!3m2!1sen!2sin!4v1714523715727!5m2!1sen!2sin" width="800" height="600"  allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
      
    
       
       
    </div>
  )
}

export default DirectionPage