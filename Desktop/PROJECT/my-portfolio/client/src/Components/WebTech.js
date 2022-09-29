import React from "react";
import WebTechItems from "./WebTechItems";
import ReactImg from "../assets/img/web-tech/react.png";
import NodeImg from "../assets/img/web-tech/node.png";
import ExpressImg from "../assets/img/web-tech/express.png";
import MongoImg from "../assets/img/web-tech/mongo.png";
import BoostrapImg from "../assets/img/web-tech/bootstrap.png";
import TailwindImg from "../assets/img/web-tech/tailwind.png";


const webTechnologies = [
    {link: "/", img: ReactImg, title:"Web Development", subtitle:"I will develop a responsive website/webapp to suit your business needs", level:"Skill Level: 90%" },
    {link: "/", img: NodeImg, title:"Web Design", subtitle:"I can design your website for laptop/mobile platforms", level:"Skill Level: 75%" },
    {link: "/", img: ExpressImg, title:"Product Design", subtitle:"Let's make your product look appealing to your customers", level:"Skill Level: 65%" },
    {link: "/", img: MongoImg, title:"Graphic Design", subtitle:"I can do graphic design for your your web/product adverts", level:"Skill Level: 80%" },
    {link: "/", img: BoostrapImg, title:"Branding", subtitle:"Let's use a combination of logo, product design, theme to create a strong perception of your company to customers", level:"Skill Level: 80%" },
    {link: "/", img: TailwindImg, title:"Logo Design", subtitle:"I can design the perfect logo to give your business the perfect look", level:"Skill Level: 90%" }
]


function WebTech() {
    return(
        
            // <!-- ======= Menu Section ======= -->
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Check Out</h2>
          <p>My <span>Services</span></p>
        </div>

        <div className="row gy-5">
    {webTechnologies.map ((webTechnologies, index) => {
        return <WebTechItems {... webTechnologies} key = {index} />
    })}
    </div>
</div>

          </section>

    )
}


export default WebTech;