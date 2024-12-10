import React from "react";
import "./Testimonial.css";
import ClientImage from "../../Assets/Client Image.png"
import RatingStar from "../../Assets/Star.png"
function Testimonial(){

 let testimonial=[{
    content:"This is a template Figma file",
    name:"Ansiya",
    company:"Google"

 },


 {
    content:"This is a template Figma file",
    name:"Suhaima",
    company:"Microsoft"

 },
 {
    content:"This is a template Figma file",
    name:"Sanoop",
    company:"UST"
 },
 {
    content:"This is a template Figma file",
    name:"Nandu",
    company:"Exoroo"

 },


 {
    content:"This is a template Figma file",
    name:"Jithin",
    company:"Exoroo"

 },
 {
    content:"This is a template Figma file",
    name:"Aina",
    company:"Technopark"
 }

]
    return(

<section >
<h1 className="testimonial-heading">Testimonial</h1>
<div className="testimonial-container">
   
  


   {testimonial.map((item)=>(
    <div className= "testimonial">
     <div className="testimonial-content">{item.content}</div>
     <div className="client-detail">
         <div><img src={ClientImage} alt="img"/></div>
         <div className="client-rating">
         <div className="display-star">
             <img src={RatingStar} alt="img"/>
             <img src={RatingStar} alt="img"/>
             <img src={RatingStar} alt="img"/>
             <img src={RatingStar} alt="img"/>
             <img src={RatingStar} alt="img"/>
         </div>
         
            <div className="client-name">{item.name}</div>
            <div className="client-company">{item.company}</div>
         </div>
     </div>
     </div>
   ))}


</div>
</section>


    )
}

export default Testimonial;