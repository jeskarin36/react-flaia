import React from "react";
import "./possibility.css";
import images from "../../assets/image_processing20210619-27756-1gs6b8z.png"

 const Possibility=()=>{
    return(
    <div className="gpt3__possibility section__padding" id="possibility">
       <div className="gpt3__possibility-image">
         <img src={images} alt="possibility" />
       </div>
       <div className="gpt3__possibility-content">
         <h4>Request Early Access to Get Started</h4>
         <h1 className="gradient__text">The possibility are beyond your imagination</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, et. Perspiciatis quo earum possimus doloribus autem c</p>
         <h4>Request Early Access to Get Started</h4>
       </div>
    </div>)
 }

 export default Possibility;