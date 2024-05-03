'use client'
import React,{useEffect,useState} from 'react';
import Image from 'next/image'
import Hero1 from '../../../assets/hotel-sawagat-img.jpeg'

import './HeroComponent.css';
import { IoChevronBack,IoChevronForward } from "react-icons/io5";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });


const HeroComponent = () => {
 
  return (
    <section id='showButton' class="hero text-center" aria-label="home" >

        <ul class="hero-slider" data-hero-slider>

          <li class="slider-item active bg-opacity-10" data-hero-slider-item>

            <div class="slider-bg">
              <Image src={Hero1} width="1880" height="950" alt="" class="img-cover"/>
            </div>

           

            <h1 className={`${lora.className} text-xl font-bold lg:text-xtra text-[#fbfbfb] hero-title slider-reveal mb-5`}>
             ENJOY THE  <br/>
             BEST MOMENTS OF LIFE
            </h1>

            <p class={`${lora.className} text-base lg:text-lg hero-text slider-reveal text-white mt-12`}>
              THE ULTIMATE LUXURY EXPERIENCE
            </p>

            <a href="#" class="btn btn-primary slider-reveal border-white text-white">
              <span class="text text-1">View Rooms</span>

              <span class="text text-2" aria-hidden="true">View Rooms</span>
            </a>

          </li>


        </ul>

       

      

      </section>
  )
}

export default HeroComponent