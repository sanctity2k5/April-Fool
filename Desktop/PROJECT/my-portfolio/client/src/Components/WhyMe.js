import React from "react";
import WhyMeItems from "./WhyMeItems";

const chooseMe = [
    {icon: "bi bi-github", title: "Github", subtitle: "I have sufficient knowledgde of github and can comfortably work with your team."},
    {icon: "bi bi-flower1", title: "Designs", subtitle: "I'll do Figma Designs such as Logo, Advert-flyers and Banners for your projects."},
    {icon: "bi bi-phone", title: "Responsive Designs", subtitle: "I'll make your website/webapp adapt to mobile, tablet and laptop views."}
]


function WhyMe() {
    return(

// <!-- ======= Why Us Section ======= -->
    <section id="why-us" className="why-us section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="why-box">
              <h3>Why Choose Me?</h3>
              <p>
                I will help build and maintain your websites as part of your team. If need be, Given that I am a fullstack developer 
                I can develop your website single-handedly without having to work with a team.
                I also have a knowledge of designs and can probably help out with the products and layout graphics.
                I am the most complete developer in the Software Development Industry. 
              </p>
              <div className="text-center">
                <a href="#about" className="more-btn">Reach Out <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 d-flex align-items-center">
            <div className="row gy-4">
          {chooseMe.map((chooseMe, index) =>{
            return <WhyMeItems {... chooseMe} key= {index} />
        })}
        </div>
          </div>

        </div>
        </div>
        

        </section>

    )
}






export default WhyMe;