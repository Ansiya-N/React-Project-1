import React from "react";
import "./Branding.css"
import BrandImage1  from "../../Assets/Group 5334.png"
import BrandImage2 from "../../Assets/image 1 (Traced).png"
import BrandImage3 from "../../Assets/image 2 (Traced).png"
import BrandImage4 from "../../Assets/image 5 (Traced).png"
import BrandImage5 from "../../Assets/image 7 (Traced).png"



function Branding(){
    return(
<section className="branding-container">
   <div><img  src={BrandImage1} alt="img"/></div> 
    <div><img src={BrandImage2} alt="img"/></div>
    <div><img  src={BrandImage3} alt="img"/></div>
   <div> <img  src={BrandImage4}alt="img"/></div>
   <div><img  src={BrandImage5} alt="img"/></div> 
</section>

    );
}

export default Branding;
