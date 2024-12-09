import React from "react";
import "./Latest-Work.css";
import LatestWorkImage1 from "../../Assets/Image.png";
import LatestWorkImage2 from "../../Assets/Image (1).png";
import LatestWorkImage3 from "../../Assets/Image (2).png";
import LatestWorkImage4 from "../../Assets/Image (3).png";
import LatestWorkImage5 from "../../Assets/Image (4).png";
import LatestWorkImage6 from "../../Assets/Image (5).png";


function LatestWork(){
    return(
<section>
    <h1 className="latestworkheading">Latest work</h1>
    <div className="latestworkcontents">
       <div >
        <div><img className="latestworkimage"src={LatestWorkImage1} alt="img"/></div>
      
      <div className="latestworkcontent-1">Project title</div> 
      <div className="latestworkcontent-2"> UI, Art drection</div>
    
    </div>
    <div>
        <img className="latestworkimage"src={LatestWorkImage2} alt="img"/>
        <div className="latestworkcontent-1">Project title</div> 
        <div className="latestworkcontent-2"> UI, Art drection</div>

    </div>
    <div>
        <img className="latestworkimage" src={LatestWorkImage3} alt="img"/>
        <div className="latestworkcontent-1">Project title</div> 
        <div className="latestworkcontent-2"> UI, Art drection</div>
    </div>
      
       <div>
        <img className="latestworkimage"src={LatestWorkImage4} alt="img"/>
        <div className="latestworkcontent-1">Project title</div> 
        <div className="latestworkcontent-2"> UI, Art drection</div>
    </div>
    <div>
        <img className="latestworkimage"src={LatestWorkImage5} alt="img"/>
        <div className="latestworkcontent-1">Project title</div> 
        <div className="latestworkcontent-2"> UI, Art drection</div>
    </div>
    <div>
        <img className="latestworkimage"src={LatestWorkImage6} alt="img"/>
        <div className="latestworkcontent-1">Project title</div> 
        <div className="latestworkcontent-2"> UI, Art drection</div>
    </div>
   
  
    </div>
</section>

    );
}

export default LatestWork;