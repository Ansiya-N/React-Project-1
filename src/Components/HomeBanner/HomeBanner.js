import React from "react";
import "./HomeBanner.css"
import BannerImage from "../../Assets/HeaderImage 1.png"
function HomeBanner(){
    return(

<section className="homebanner">
    <div className="homebannertexts">
        <div className="text1">Branding | Image making </div>
        <div className="text2">Visual Designer</div>
        <div className="text3">This is a template Figma file, turned into code using Anima.<br/>
            Learn more at AnimaApp.com</div>
        <div className="button"><button class="contact">Contact</button></div>

    </div>
    <div >

        <img src={BannerImage} alt=""/>
    </div>
</section>
    );
}
export default HomeBanner;