import React from "react";
import "./Branding.css"
import BrandImage1  from "../../Assets/Group 5334.png"
import BrandImage2 from "../../Assets/image 1 (Traced).png"
import BrandImage3 from "../../Assets/image 2 (Traced).png"
import BrandImage4 from "../../Assets/image 5 (Traced).png"
import BrandImage5 from "../../Assets/image 7 (Traced).png"



function Branding(){


    let brandimage=[
        { 
             image:BrandImage1
        },
        {
            image:BrandImage2
        },
        {
            image:BrandImage3
        },
        {
            image:BrandImage4
        },
        {
            image:BrandImage5
        }
        
        
        ]
    return(
<section className="branding-container">
  {
brandimage.map((item)=>(


    <div><img  src={item.image} alt="img"/></div> 
))

  }
    
</section>

    );
}

export default Branding;
