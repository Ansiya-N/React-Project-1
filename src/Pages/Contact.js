
import React from "react";
import "./Contact.css";
import BGIMAGE from "../Assets/bg-Image.png"
function Contact() {
  return (

    <div className="formcontainer1">
        <img src={BGIMAGE} alt="img"/>
    <div className="main1">
    <h1 className="heading1">Get in Touch</h1>
       
       <form>
      
        <div className="labels1">
       <input type="text" className="label11" placeholder="Name"/>
  <input type="email"  className="label11" placeholder="Email"/>
  </div>
  <input type="tel" className="label21" placeholder="Phone Number"/>
  <textarea type="text" className="label31" placeholder="Message"/>
  <button className="btn1" type="submit">Submit</button>
       </form>
    </div>
    </div>
  );
}

export default Contact;
