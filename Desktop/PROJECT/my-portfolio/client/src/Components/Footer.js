import React from "react";

function Footer() {
    return(
       // <!-- ======= Footer ======= -->
  <footer id="footer" className="footer">

  <div className="container">
    <div className="row gy-3">
      <div className="col-lg-3 col-md-6 d-flex">
        <i className="bi bi-geo-alt icon"></i>
        <div>
          <h4>Address</h4>
          <p>
          No.25 St. Paul's Road <br />
          Anambra State - NG<br />
          </p>
        </div>

      </div>

      <div className="col-lg-3 col-md-6 footer-links d-flex">
        <i className="bi bi-telephone icon"></i>
        <div>
          <h4>Contact Me</h4>
          <p>
            <strong>Phone:</strong> +234 810 6338 171<br />
            <strong>Email:</strong> sanctity2k5@gmail.com<br />
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 footer-links d-flex">
        <i className="bi bi-clock icon"></i>
        <div>
          <h4>Opening Hours</h4>
          <p>
            <strong>Mon-Fri: 7AM</strong> - 5PM
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Follow Me</h4>
        <div className="social-links d-flex">
          <a href="https://wa.me/+2348106338171" className="twitter"><i className="bi bi-whatsapp"></i></a>
          <a href="https://www.facebook.com/anyadionyekachukwu" className="facebook"><i className="bi bi-facebook"></i></a>
          {/* <a href="#" class="instagram"><i class="bi bi-instagram"></i></a> */}
          <a href="https://www.linkedin.com/in/anyadi-onyekachukwu-b79a6a170" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>

  <div className="container">
    <div className="copyright">
      Powered By <strong><span>Kachi_Coder</span></strong> &copy;  All Rights Reserved
    </div>
  </div>

</footer>
    )
}




export default Footer;