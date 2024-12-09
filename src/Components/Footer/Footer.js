import React from "react";
import "./Footer.css"
import discord from "../../Assets/discord.png";
import facebook from "../../Assets/facebook.png";
import dribbble from "../../Assets/dribbble.png";
import nstagram from "../../Assets/nstagram.png";
import behance from "../../Assets/behance.png";


function Footer(){
return(

<section className="footer">
<div className="footer-heading">Lets work together</div>
<div className="footer-content">

    <div className="footer-content-left">
<p className="footer-desc">This is a template Figma file, turned into code using Anima. Learn<br/> more at AnimaApp.com This is a template Figma file, turned into<br/> code using Anima. Learn more at AnimaApp.com</p>
<div className="social">
    <img src={discord} alt="img"/>
    <img src={facebook} alt="img"/>
    <img src={dribbble} alt="img"/>
    <img src={nstagram} alt="img"/>
    <img src={behance} alt="img"/>
</div>
</div>
<div className="form">
  <input type="text" className="label1" placeholder="Name"/>
  <input type="text"  className="label2" placeholder="Email"/>
   
   <button class="submit">Submit</button>

</div>
</div>

    </section>


);
}

export default Footer;