import React from "react";

function EventItems(props) {
    return(
          <a className="glightbox" data-gallery="images-gallery" href={props.link}><img src={props.img} className="img-fluid" alt="gallery-img" /></a>    
    )
}



export default EventItems;