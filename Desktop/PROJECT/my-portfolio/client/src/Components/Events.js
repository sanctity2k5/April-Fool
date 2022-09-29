import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, {Autoplay} from "swiper"
import EventItems from "./EventItems";

//Import Swiper Styles
import 'swiper/css';

//Import Testimonial Images
import patnerOne from "../assets/img/patners/patner-one.png";
import patnerTwo from "../assets/img/patners/patner-two.png";
import patnerThree from "../assets/img/patners/patner-three.png";
import patnerFour from "../assets/img/patners/patner-four.png";
import patnerFive from "../assets/img/patners/patner-five.png";
import patnerSix from "../assets/img/patners/patner-six.png";


const Gallery = [
    {link:"", img: patnerOne},
    {link:"", img: patnerTwo},
    {link:"", img: patnerThree},
    {link:"", img: patnerFour},
    {link:"", img: patnerFive},
    {link:"", img: patnerSix},
]


 /**
   * Gallery Slider
   */
//   new Swiper(...);

function Events() {
    SwiperCore.use([Autoplay])
    return(
        //  <!-- ======= Gallery Section ======= -->
    <section id="gallery" className="gallery section-bg">
    <div className="container" data-aos="fade-up">

    <div className="section-header">
        <h2>Patners</h2>
        <p>Patner With<span> Me</span></p>
      </div>

      {Gallery.length > 1 ?

      <Swiper 
       speed= {400}
    loop= {true}
    centeredSlides= {true}
    autoplay= {
      {delay: 5000,
      disableOnInteraction: false
      }
    }
    slidesPerView= "auto"
    pagination= {
     { el: '.swiper-pagination',
      type: 'bullets',
      clickable: true}
    }
    breakpoints= {{
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }}
      >
        
        {Gallery.map((Gallery, index) => (
            <SwiperSlide key={index}>
                <EventItems {... Gallery} />
            </SwiperSlide>
        ))}

        
        </Swiper>
        :
        <h1>Null</h1>
      }

        <div className="swiper-pagination"></div>
    </div>
    </section>

    )
}


export default Events;