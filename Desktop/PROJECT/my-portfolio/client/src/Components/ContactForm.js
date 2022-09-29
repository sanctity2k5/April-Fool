import React from "react";


function ContactForm(props) {
    return (
        
        <div className={props.class}>
          <input type="text" name={props.name} className="form-control" id={props.id} placeholder={props.placeholder} required />
        </div>
        
    )
}


export default ContactForm;