import React from "react";




function TestimonialItems(props) {
    return (
        // <!-- ======= Testimonials Section ======= -->
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className={props.quoteIconLeft}></i>
                      {props.title}
                      <i className={props.quoteIconRight}></i>
                    </p>
                    <h3>{props.name}</h3>
                    <h4>{props.job}</h4>
                    <div className="stars">
                      <i className={props.starFill}></i><i className={props.starFill}></i><i className={props.starFill}></i><i className={props.starFill}></i><i className={props.starFill}></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <img src={props.img} className="img-fluid testimonial-img" alt="" />
                </div>
              </div>
            </div>

    )
}


export default TestimonialItems;