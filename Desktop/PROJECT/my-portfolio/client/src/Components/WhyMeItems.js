import React from "react";

function WhyMeItems(props){
    return(
         

              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className={props.icon}></i>
                  <h4>{props.title}</h4>
                  <p>{props.subtitle}</p>
                </div>
              </div>

          
        

    
        
    )
}

export default WhyMeItems;