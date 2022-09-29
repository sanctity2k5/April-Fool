import React from 'react';

//Components
import Header from '../Components/Header';
import UpperSection from '../Components/UpperSection';
import About from '../Components/About';
import WebTech from "../Components/WebTech";
import WhyMe from '../Components/WhyMe';
import Testimonials from '../Components/Testimonials';
import Events from '../Components/Events';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="App">
    <Header />     
    <UpperSection />
    <About />
    <WebTech />
    <WhyMe />
    <Testimonials />
    <Events />
    <Contact />
    <Footer />
    </div>
  );
}

export default Home;
