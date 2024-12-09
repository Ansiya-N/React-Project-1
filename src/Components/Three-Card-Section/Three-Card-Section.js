import React from "react";
import "./Three-Card-Section.css";
import ProductDesign from "../../Assets/Skills Card Icon.png"
import VisualDesign from "../../Assets/Skills Card Icon (1).png"
import ArtDirection from "../../Assets/Skills Card.png"
function ThreeCardSection(){
    return(
        

        <section className="threecardsection">
    <div className="cardsection-1">
        
        <div><img src={ProductDesign} alt="img"/></div>
        <div className="cardsection-2">Product Design</div>
        <div className="cardsection-3">This is a template Figma file, turned<br/> into code using Anima. Learn more at<br/>AnimaApp.com</div>

    </div>
    
    
    <div class="cardsection-1">
        <div><img src= {VisualDesign} alt="img"/></div>
        <div className="cardsection-2">Visual Design</div>
        <div className="cardsection-3">This is a template Figma file, turned<br/> into code using Anima. Learn more at<br/>AnimaApp.com</div>

    </div>
    <div class="cardsection-1">
        <div><img src={ArtDirection} alt="img"/></div>
        <div className="cardsection-2">Art Direction</div>
        <div className="cardsection-3">This is a template Figma file, turned<br/> into code using Anima. Learn more at<br/>AnimaApp.com</div>

    </div>
</section>
    );

    
}

export default ThreeCardSection;