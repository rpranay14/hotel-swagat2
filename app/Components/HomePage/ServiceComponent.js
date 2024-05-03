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
            <p className="text-[#4D151B] font-semibold mb-2">A Tranquil Haven</p>
            <p className="text-xs text-center">
              Hotel Swagat provided a peaceful escape amidst the bustling beauty of Mount Abu. The serene ambiance, coupled with impeccable service, made our stay truly rejuvenating. The rooms were comfortable, and the staff went above and beyond to ensure our needs were met. Highly recommended for those seeking tranquility in Mount Abu.
            </p>
            </div>
            <div className="flex flex-col items-center">
            
            <p className="text-center font-medium">Pranay Khandelwal</p>
            </div>
          </div>
          <div  className="w-[99%] md:w-[75%] shadow-2xl flex flex-col items-center lg:w-[40%] xl:w-[30%] px-10 py-3 gap-5 rounded-lg bg-[white]">
            <Image src={testimonialImage} width={50} height={50} />
            <div>
            <p className="text-[#4D151B] font-semibold mb-2">Royal Retreat</p>
            <p className="text-xs text-center">
              
            Our experience at Hotel Swagat felt nothing short of royalty. From the moment we arrived, we were greeted with warmth and hospitality. The regal charm of the rooms combined with the stunning views of the Aravalli Range created a memorable stay. The on-site dining offered delicious Rajasthani cuisine, adding to the overall delightful experience.
            </p>
            </div>
            <div className="flex flex-col items-center">
           
            <p className="text-center font-medium">Chirag Shah</p>
            </div>
          </div>
          <div  className="w-[99%] md:w-[75%] shadow-2xl flex flex-col items-center lg:w-[40%] xl:w-[30%] px-10 py-3 gap-5 rounded-lg bg-[white]">
            <Image src={testimonialImage} width={50} height={50} />
            <div>
            <p className="text-[#4D151B] font-semibold mb-2">Perfect Mountain Getaway</p>
            <p className="text-xs text-center">
              
            Hotel Swagat exceeded our expectations as a mountain retreat in Mount Abu. The convenient location, just minutes away from Nakki Lake and the Toad Rock viewpoint, made exploring the area a breeze. The cozy rooms provided a comfortable haven after a day of sightseeing. With friendly staff and excellent amenities, our stay was nothing short of perfect.
            </p>
            </div>
            <div className="flex flex-col items-center">
           
            <p className="text-center font-medium">Shivangi Sharma</p>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ServiceComponent;
