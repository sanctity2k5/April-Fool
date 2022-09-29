import React from "react";
import TestimonialItems from "./TestimonialItems";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

//Import Testimonial Images
import testimonialOne from "../assets/img/testimonials/testimonials-1.png";
import testimonialTwo from "../assets/img/testimonials/testimonials-2.jpg";
import testimonialThree from "../assets/img/testimonials/testimonials-3.jpg";

// Import Swiper styles
import 'swiper/css';
const Testimonies = [
    {name:"Okani Ekene", title:"It's been a pleasure working with Kachi and I can comfortably recommend him for your website development", job:"Pharmacist and Life Coach(Improveyourhealth.com *Health Blog Still_under_development*)", img: testimonialThree, quoteIconLeft:"bi bi-quote quote-icon-left", quoteIconRight:"bi bi-quote quote-icon-right", starFill:"bi bi-star-fill"},
    {name:"Maureen Agbata", title:"Overly pleased with the logo he created for me, his use of colors and typography. He designed the perfect Flyer for my business. He's a good designer", job:"CEO Diri's Place", img: testimonialOne, quoteIconLeft:"bi bi-quote quote-icon-left", quoteIconRight:"bi bi-quote quote-icon-right", starFill:"bi bi-star-fill"},
    {name:"Adeline Chukwunyelu", title:"He's honest, he's dedicated, he's fun to work with, he delivers on time he's best at what he does. He is the definition of a true professional", job:"CEO Ady's Kitchens", img: testimonialTwo, quoteIconLeft:"bi bi-quote quote-icon-left", quoteIconRight:"bi bi-quote quote-icon-right", starFill:"bi bi-star-fill"}
]


function Testimonials(){

SwiperCore.use([Autoplay]);
    return(
         // <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" className="testimonials section-bg">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h2>Testimonials</h2>
        <p>What My Clients Are <span>Saying About Me</span></p>
      </div>
      {Testimonies.length > 2 ? 
      <Swiper 
       modules={[Navigation, Pagination]}    
      pagination={{ clickable: true }}
      autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}data-aos="fade-up" data-aos-delay="100">
      
      {Testimonies.map((Testimonies, index) =>(
        <SwiperSlide key = {index}>
            <TestimonialItems {... Testimonies} />
        </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        </Swiper>
        :
        <h1>No Slides</h1>
      }
        
        </div>
        
        </section>
    )
}







export default Testimonials;