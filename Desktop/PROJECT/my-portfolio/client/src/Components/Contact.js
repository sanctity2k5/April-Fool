import React, { useRef, useState } from "react";
import ContactItems from "./ContactItems";
import ContactForm from "./ContactForm";
import ContactMe from "../assets/img/contact-me.jpg";
import emailjs from '@emailjs/browser';
import Spinner from 'react-bootstrap/Spinner';


const TopSnippets = [
    {icon: "icon bi bi-geo-alt flex-shrink-0", title: "My Address", subtitle: "No.25 St. Paul's Road Anambra State"},
    {icon: "icon bi bi-envelope flex-shrink-0", title: "Email Me", subtitle: "kachicoder@gmail.com"},
    {icon: "icon bi bi-telephone flex-shrink-0", title: "Call Me", subtitle: "+234 810 6338 171"},
    {icon: "icon bi bi-share flex-shrink-0", title: "Opening Hours", subtitle: "Mon-Fri: 7:00AM - 5:00PM", strong: "strong"}
]

const Forms = [
    {name:"name", id:"name", placeholder:"Your Name", class:"col-xl-6 form-group"},
    {name:"Email", id:"email", placeholder:"Your Email", class:"col-xl-6 form-group"},
    {name:"subject", id:"subject", placeholder:"Subject", class:"form-group"}
]


function Contact() {

  
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    loadSpinner(true);

    let Name = document.getElementById('name').value;
  let Email = document.getElementById('email').value;
  let Subject = document.getElementById('subject').value;
  let Message = document.getElementById('message').value;
  
  console.log(Message);

  let formParams = {
    from_name: Name,
    from_email: Email,
    from_subject: Subject,
    from_message: Message
  };


   await emailjs.send('service_gk0wkv4', 'template_4zg9242', formParams, 'SOaY5uJJoDLNKUAYw')
      .then((result) =>{
        setMessageSent(true)
      }, (error) => {
        sendErrorMessage(true)
      });
      loadSpinner(false);
      
  };

//  Setting Loading for Button
    const [spinner, loadSpinner] = useState(false);
    let spin = <button type="submit">
    Send Message
     </button>
    if (spinner) {
      spin =
      <button type="submit">
        <Spinner  animation = "border" variant = "light" className="spinner" />
      </button>
    }

    //Message sent successfully
    const [messageSent, setMessageSent] = useState(false);
    let message = <div className="none"></div> 
    if (messageSent) {
      message =
      <div className="sent">Your message has been sent. Thank you!</div>
    }
    //Error Sending Message
    const [errorMessage, sendErrorMessage] = useState(false);
    let err = <div className="none"></div>
    if(errorMessage) {
      err = 
      <div className="error">Message Not Sent... This might be due to some technical issues from our end, Pleae try again later</div>
      setTimeout(() => {
        document.querySelector('.error').classList.add('none')
      }, 10000);
    }


 
    return(
         // <!-- ======= Contact Section ======= -->
    <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h2>For Business Purposes Only</h2>
        <p>Need Help? <span>Contact Me</span></p>
      </div>

      <div className="mb-3">
      
        <img  src={ContactMe} alt="" style={{border:0, borderRadius: "20px", width: "100%", height: "350px"}}/>
      </div>

      <div className="row gy-4">

        {TopSnippets.map((TopSnippets, index) =>(
            <div className="col-md-6" key={index} >
            <ContactItems {... TopSnippets} />
            </div>
        ))}
        </div>
        <form ref={form} onSubmit={sendEmail} className="php-email-form p-3 p-md-4">
        <div className="row">
        </div>
        <div className="row">
        {Forms.map ((Forms, index) =>{
            return<ContactForm {... Forms} key={index} />
        
        })}
          <textarea id="message" className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div className="mb-3">
        {err}
        {message}
              </div>
       
       
        <div className="text-center">
            {spin}
        </div>
  
        </form>


      </div>
      </section>
    )
}


export default Contact;