import React from "react";
import "./HeroComponent.css";
import Image from "next/image";
import testimonialImage from "../../../assets/testimonial_icon_l.svg";

import { Lora } from "next/font/google";
import avatar from "../../../assets/testi-avatar.jpg";

const lora = Lora({ subsets: ["latin"] });

const ServiceComponent = () => {
  return (
    <section id='testimonial'
      class="section service bg-[#222222] text-center"
      aria-label="service"
    >
      <div class="container">
      <p className={`${lora.className} text-[#AA8453] text-lg  text-center`}>What are client says?</p>
      <p className={`${lora.className} font-normal text-[#fff] text-x5l mt-2 mb-12 text-center`}>Testimonials</p>
        <div className="flex flex-wrap items-center justify-center gap-12 mt-24 ">
        <div className="w-[99%] md:w-[75%] shadow-2xl flex flex-col items-center lg:w-[40%] xl:w-[30%] px-10 py-3 gap-5 rounded-lg bg-[white]">
            <Image src={testimonialImage} width={50} height={50} />
            <div>
            <p className="text-[#4D151B] font-semibold mb-2">Delightful Dining Experience at Gourmet Haven</p>
            <p className="text-xs text-center">
              
             I recently had the
              pleasure of dining at Gourmet Haven, and I must say, it exceeded
              all my expectations. From the moment I stepped in, the ambiance
              transported me to a cozy, sophisticated haven away from the hustle
              and bustle of the city.
            </p>
            </div>
            <div className="flex flex-col items-center">
            <Image src={avatar} width={60} height={60} className="rounded-full mb-2"/>
            <p className="text-center font-medium">Pranay Rawat</p>
            </div>
          </div>
          <div  className="w-[99%] md:w-[75%] shadow-2xl flex flex-col items-center lg:w-[40%] xl:w-[30%] px-10 py-3 gap-5 rounded-lg bg-[white]">
            <Image src={testimonialImage} width={50} height={50} />
            <div>
            <p className="text-[#4D151B] font-semibold mb-2">Delightful Dining Experience at Gourmet Haven</p>
            <p className="text-xs text-center">
              
             I recently had the
              pleasure of dining at Gourmet Haven, and I must say, it exceeded
              all my expectations. From the moment I stepped in, the ambiance
              transported me to a cozy, sophisticated haven away from the hustle
              and bustle of the city.
            </p>
            </div>
            <div className="flex flex-col items-center">
            <Image src={avatar} width={60} height={60} className="rounded-full mb-2"/>
            <p className="text-center font-medium">Pranay Rawat</p>
            </div>
          </div>
          <div  className="w-[99%] md:w-[75%] shadow-2xl flex flex-col items-center lg:w-[40%] xl:w-[30%] px-10 py-3 gap-5 rounded-lg bg-[white]">
            <Image src={testimonialImage} width={50} height={50} />
            <div>
            <p className="text-[#4D151B] font-semibold mb-2">Delightful Dining Experience at Gourmet Haven</p>
            <p className="text-xs text-center">
              
             I recently had the
              pleasure of dining at Gourmet Haven, and I must say, it exceeded
              all my expectations. From the moment I stepped in, the ambiance
              transported me to a cozy, sophisticated haven away from the hustle
              and bustle of the city.
            </p>
            </div>
            <div className="flex flex-col items-center">
            <Image src={avatar} width={60} height={60} className="rounded-full mb-2"/>
            <p className="text-center font-medium">Pranay Rawat</p>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ServiceComponent;
