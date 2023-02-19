import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
    {
      title: 'Feature 1',
      text: 'Talk about some of the details of your offer with a focus on the value people get back.',
    },
    {
      title: 'Feature 2',
      text: 'Is there a pain point that your product or service resolves? Tell visitors about it here.',
    },
    {
      title: 'Feature 3',
      text: 'Alternatively, you could use this section to address some frequently asked questions.',
    },
    {
      title: 'Feature 4',
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores rem ipsa deb  ",
    },
  ];


 const Features=()=>{
    return(
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">The Futures is Now and You Just Need To Realize It. Step into Future Today Y Make It Happen</h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container">
            {featuresData.map((item,index)=>(
                <Feature title={item.title} text={item.text} key={item.title + index}></Feature>
            ))}
        </div>
    </div>)
 }

 export default Features;