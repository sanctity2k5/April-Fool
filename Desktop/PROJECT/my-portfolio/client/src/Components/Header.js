import React from "react";
import logo from '../assets/img/logo.png';


function Header() { 
  //Implementing Nav bar/Toggle

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    document.querySelector('.mobile-nav-show').classList.toggle('d-none');
    document.querySelector('.mobile-nav-hide').classList.toggle('d-none');
  }
//Removing Nav menu after a link has been clicked
  function removeNav() {
    document.querySelector('body').classList.remove('mobile-nav-active');
    document.querySelector('.mobile-nav-show').classList.toggle('d-none');
    document.querySelector('.mobile-nav-hide').classList.toggle('d-none');

  }
   
   
  
    return(
        //  <!-- ======= Header ======= -->
  <header id="header" className="header fixed-top d-flex align-items-center">
  <div className="container d-flex align-items-center justify-content-between">

    <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
      {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
      <img src={logo} className="logo" alt="logo" />
    </a>

    <nav id="navbar" className="navbar" onClick={removeNav}>
      <ul>
        <li><a className='link' href="#hero">Home</a></li>
        <li><a className='link' href="#about">About</a></li>
        <li><a className='link' href="#menu">My Services</a></li>
        <li><a className='link' href="#why-us">Why Me?</a></li>
        <li><a className='link' href="#testimonials">Testimonials</a></li>
        <li><a className='link' href="#gallery">My Patners</a></li>
        <li><a className='link' href="#contact">Contact Me</a></li>
      </ul>
    </nav>

    <a className="btn-book-a-table" href="#contact">Hire Me</a>
    <i onClick={mobileNavToogle} className="mobile-nav-show mobile-nav-toggle bi bi-list"></i>
    <i onClick={mobileNavToogle} className="mobile-nav-hide mobile-nav-toggle d-none bi bi-x"></i>

  </div>
</header>
    )
}

export default Header;