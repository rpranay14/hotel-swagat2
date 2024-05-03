"use client"
import React, { useState } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import { Lora } from "next/font/google";
import { FaBars,FaTimes } from "react-icons/fa";

const lora = Lora({ subsets: ["latin"] });

const NavbarComponent = (props) => {
  const [openNav, setopenNav] = useState(false)
  return (
    <>
      <nav className="  shadow-xl pb-3 sticky top-0 bg-[#fff] z-50  pt-2 pl-3 pr-3 lg:pt-6 lg:pr-44 lg:pl-44">
        <div className="flex items-center justify-between ">

          <ReactScrollLink
 to="home"
 smooth={true}
 offset={-78}
 duration={500}
 
            
          >
            <p className={`${lora.className} text-x3l flex font-bold gap-2`}>Hotel <span className='text-[#AA8453]'>Swagat</span></p>
          </ReactScrollLink>
          <div className="hidden md:flex gap-6 items-center ">
            <p className="cursor-pointer font-semibold text-base ">
              <ReactScrollLink
                 to="home"
                 smooth={true}
                 offset={-78}
                 duration={500}
                 className="hover:text-[#5e411a] "
              >
                Home
              </ReactScrollLink>
            </p>
            <p className="cursor-pointer font-semibold text-base ">
              <ReactScrollLink
                to="aboutus"
                smooth={true}
                offset={-78}
                duration={500}
                className="hover:text-[#5e411a] "
              >
                About
              </ReactScrollLink>
            </p>
            <p className="  cursor-pointer font-semibold text-base ">
              <ReactScrollLink
                to="rooms"
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-[#5e411a]"
              >
                Rooms
              </ReactScrollLink>
            </p>
            <p className=" cursor-pointer font-semibold text-base ">
              <ReactScrollLink
                to="services"
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-[#5e411a]"
              >
                Our Services
              </ReactScrollLink>
            </p>
            <p className="  cursor-pointer font-semibold text-base">
              <ReactScrollLink
                to="testimonial"
                smooth={true}
                offset={-130}
                duration={500}
                className="hover:text-[#5e411a] "
              >
                Testimonials
              </ReactScrollLink>
            </p>
            <p className="  cursor-pointer font-semibold text-base">
              <ReactScrollLink
                to="contactus"
                smooth={true}
                offset={-20}
                duration={500}
                className="hover:text-[#5e411a] "
              >
                Contact
              </ReactScrollLink>
            </p>
            
          </div>
         <div className="md:hidden">{!openNav ? <FaBars onClick={()=>setopenNav(!openNav)} className="w-6 h-6 cursor-pointer" />:<FaTimes onClick={()=>setopenNav(!openNav)} className="w-6 h-6 cursor-pointer" />}</div>
         {openNav ? <div className="md:hidden flex gap-8 flex-col items-center justify-center pr-3 pt-3 absolute top-[3.5rem] text-black left-0 w-full h-screen bg-[#AA8453] ">
         <p   className="text-2xl cursor-pointer font-semibold ">
              <ReactScrollLink onClick={()=>setopenNav(!openNav)}
                href="/"
              >
                Home
              </ReactScrollLink>
            </p>
            <p className=" cursor-pointer font-semibold text-2xl ">
              <ReactScrollLink
                to="aboutus"
                smooth={true}
                offset={-78}
                duration={500}
                className=" "
                onClick={()=>setopenNav(!openNav)}
              >
                About
              </ReactScrollLink>
            </p>
            <p className="  cursor-pointer font-semibold text-2xl ">
              <ReactScrollLink
                to="rooms"
                smooth={true}
                offset={-100}
                duration={500}
                className=""
                onClick={()=>setopenNav(!openNav)}
              >
                Rooms
              </ReactScrollLink>
            </p>
            <p className="  cursor-pointer font-semibold text-2xl ">
              <ReactScrollLink
                to="services"
                smooth={true}
                offset={-100}
                duration={500}
                className=""
                onClick={()=>setopenNav(!openNav)}
              >
                Our Services
              </ReactScrollLink>
            </p>
            <p className=" cursor-pointer font-semibold text-2xl">
              <ReactScrollLink
                to="testimonial"
                smooth={true}
                offset={-130}
                duration={500}
                className=""
                onClick={()=>setopenNav(!openNav)}
              >
                Testimonials
              </ReactScrollLink>
            </p>
            <p className=" cursor-pointer font-semibold text-2xl">
              <ReactScrollLink
                to="contactus"
                smooth={true}
                offset={-130}
                duration={500}
                className=""
                onClick={()=>setopenNav(!openNav)}
              >
                Contact
              </ReactScrollLink>
            </p>
          

         </div>:<></>}
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
