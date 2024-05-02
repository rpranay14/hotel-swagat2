"use client"

import React, { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const WhatsappButton = () => {
    const [showGoToTop,setShowGoToTop]=useState(false)
    const ref=useRef()
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition > 100) {
          setShowGoToTop(true);
        } else {
          setShowGoToTop(false);
        }
      };
    
      // Add scroll event listener to check when to show/hide GoToTopButton
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <>
   {showGoToTop ? <><a className='z-50 mx-8 my-8 fixed bottom-0 left-0 bg-[#03A84E] p-[0.8rem] rounded-full cursor-pointer' href="https://api.whatsapp.com/send?phone=917888995975" target="blank"><div  className="whatsapp-icon-wrapper">
    <FaWhatsapp className="whatsapp-icon text-white w-[3rem] h-[3rem] "/>
    </div></a>
     <div onClick={()=>goToTop()} ref={ref} className='z-50 mx-8 my-8 fixed bottom-0 right-0 bg-[#bf8933] p-[0.8rem] rounded-full cursor-pointer' ><div  className="whatsapp-icon-wrapper">
    <IoIosArrowUp  className="  whatsapp-icon text-white w-[3rem] h-[3rem] "/>
    </div></div></> :null}
    </>
  )
}

export default WhatsappButton