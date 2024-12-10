import React from "react";
import "./Three-Card-Section.css";
import ProductDesign from "../../Assets/Skills Card Icon.png"
import VisualDesign from "../../Assets/Skills Card Icon (1).png"
import ArtDirection from "../../Assets/Skills Card.png"
function ThreeCardSection(){

    let cardsection=[


        {
            image:ProductDesign,
            heading:"Product Design",
            desc:"This is a template Figma file"
        },
        {
            image:VisualDesign,
            heading:"Visual Design",
            desc:" turned into code using Anima"
        },
        {
            image:ArtDirection,
            heading:"Art Direction",
            desc:" Learn more at AnimaApp.com"
        }

    ]
    return(
        

        <section className="threecardsection">
   {cardsection.map((item)=>(


    <div className="cardsection-1">
        
        <div><img src={item.image} alt="img"/></div>
        <div className="cardsection-2">{item.heading}</div>
        <div className="cardsection-3">{item.desc}</div>

    </div>
   ))
    
}
    
</section>
    );

    
}

export default ThreeCardSection;