import React from "react";
import AboutImg from "../assets/img/about.png";
import AboutTwo from "../assets/img/about-2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()


const AboutImgStyle = {
    backgroundImage: "url(" + AboutImg + ")"
}

function About() {
    return (
        <div>
             {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>What Would You Like</h2>
          <p> To Know<span>About Me</span></p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-7 position-relative about-img" style={AboutImgStyle} data-aos="fade-up" data-aos-delay="150">
            <div className="call-us position-absolute">
              <h4>Call or Whatsapp Me</h4>
              <p>+234 810 6338 171</p>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                I am Anyadi Onyekachukwu, a Software Developer and Product Designer from Nigeria. 
                I studied Electrical/Electronics Engineering/Telecommunications. 
                Well seeing that am into Wireless Communications I think it's safe to say am practicing what I studied 🤗🤗🤗 <br />
                I create and maintain websites for a living 😎😎😎. <br />
                I make use of the latest Web Development Technologies such as: -
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i> I use React.js for my Frontend Development</li>
                <li><i className="bi bi-check2-all"></i> I make use of Css Frameworks such as Boostrap, MaterialUi, TailWind etc</li>
                <li><i className="bi bi-check2-all"></i> For my Backend/Server-side I use Node.js/Express.js to implement my client-server interactions (APIs)</li>
                <li><i className="bi bi-check2-all"></i> If you have guessed MongoDb as my database, you guessed right 🥰🥰🥰. I make use of MongoDb(NoSql) database</li>
                <li><i className="bi bi-check2-all"></i> I have a good knowlegde of Figma Design Tool and I make use of it for my product designs</li>
              </ul>
              <p>
              Feel free to hire me for your project or as part of your team. Let's discuss ideas together. I'd love to work for/with you😍😍😍
              </p>

              {/* <div class="position-relative mt-4">
                <img src={AboutTwo} class="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </section>
        </div>
    )
}

export default About;