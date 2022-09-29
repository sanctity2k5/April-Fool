import React from "react";

function WebTechItems(props){
    return(
              <div className="col-lg-4 menu-item">
                <a href="/" className="glightbox"><img src={props.img} className="menu-img img-fluid" alt="Web-Tech-Img" /></a>
                <h4>{props.title}</h4>
                <p className="ingredients">
                  {props.subtitle}
                </p>
                <p className="price">
                  {props.level}
                </p>
              </div>
        
    )
}

export default WebTechItems;