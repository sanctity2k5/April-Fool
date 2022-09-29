import React from "react";


function ContactItems(props) {
    return(
        
          <div className="info-item  d-flex align-items-center">
            <i className={props.icon}></i>
            <div>
              <h3>{props.title}</h3>
              <p className={props.strong}>{props.subtitle}</p>
            </div>
          </div>        
    )
}


export default ContactItems;