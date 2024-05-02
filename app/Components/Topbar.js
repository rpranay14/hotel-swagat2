'use client'
import React, { useEffect, useRef, useState } from 'react';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import LOGO from '../../assets/logo/v2svg.svg'

import { MdOutlineShoppingBag } from "react-icons/md";

import { FaShoppingBasket } from "react-icons/fa";
import './HomePage/HeroComponent.css';
import { Lora } from "next/font/google";
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { IoCallOutline, IoCloseOutline, IoLocationOutline, IoMailOutline, IoTimeOutline } from 'react-icons/io5';
const lora = Lora({ subsets: ["latin"] });




const Topbar = () => {


  const pathname=usePathname();
  console.log("pathname",pathname)
  const [lastPosition, setlastPosition] = useState(0);
  const [showPopup,setShowPopup]=useState(false);
  const logoref=useRef()

  
  useEffect(()=>{
    const header=document.querySelector("[data-header]");
    const logoComponent=document.getElementById('logo-img')
    const hideHeader = function () {
      
    }
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 50) {
        header.classList.add("active");
       
        
       

        hideHeader();
      } else {
        header.classList.remove("active");
        
      }
    });

  },[lastPosition])

  return (
  <>
   

  <header class={`${pathname.includes('/menu/') || pathname.includes('/cart') || pathname.includes('checkout') ||  pathname.includes('admin') ? "header2 active2 ":"header"}`} data-header>
    <div class="container">

      <Link href='/#aboutus'><div className='px-8'>
      <p className={`${lora.className} text-x3l flex font-bold gap-2`}>Hotel <span className='text-[#AA8453]'>Swagat</span></p>
        </div>
        </Link>

      <nav class="navbar" data-navbar>

        <button class="close-btn" aria-label="close menu" data-nav-toggler>
          <IoCloseOutline name="close-outline" aria-hidden="true"/>
        </button>

        <Link href='/#aboutus'>
        <p className={`${lora.className} text-x3l flex font-bold gap-2`}>Hotel <span className='text-[#AA8453]'>Swagat</span></p>
          </Link>

        <ul class="navbar-list">

          <li class="navbar-item">
            <Link href="/#aboutus" className={`${pathname==='/#aboutus' ?'active':''} navbar-link hover-underline `}>
              <div class="separator"></div>

              <span class="span">Home</span>
            </Link>
          </li>

          <li class="navbar-item">
            <Link href="/#rooms" className={`${pathname.includes('/#rooms') ?'active':''} navbar-link hover-underline `}>
              <div class="separator"></div>

              <span class="span">Rooms</span>
            </Link>
          </li>

          <li class="navbar-item">
            <Link href="/#aboutus" className={`${pathname.includes('/#aboutus') ?'active':''} navbar-link hover-underline `}>
              <div class="separator"></div>

              <span class="span">About Us</span>
            </Link>
          </li>
          <li class="navbar-item">
            <Link href="/#services" className={`${pathname.includes('/#services') ?'active':''} navbar-link hover-underline `}>
              <div class="separator"></div>

              <span class="span">Our Services</span>
            </Link>
          </li>
          <li class="navbar-item">
            <Link href="/#testimonial" className={`${pathname.includes('/#testimonial') ?'active':''} navbar-link hover-underline `}>
              <div class="separator"></div>

              <span class="span">Testimonials</span>
            </Link>
          </li>

      

          <li class="navbar-item">
            <Link href="/#contactus" className={`${pathname.includes('contactus') ?'active':''} navbar-link hover-underline `}>
              <div class="separator"></div>

              <span class="span">Contact</span>
            </Link>
          </li>

        </ul>

     

      </nav>
     
     <Link href='/#rooms'> <div  class="btn btn-secondary">
        <span class="text text-1">View Rooms</span>

        <span class="text text-2" aria-hidden="true">View Rooms</span>
      </div></Link>

      <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </button>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
   
  </header>
 
  </>
  )
}

export default Topbar