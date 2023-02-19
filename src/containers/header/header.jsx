import React from "react";
import "./header.css";
import people from "../../assets/people.png";



 const Header=()=>{
    return(
    <div className="gpt3__header section__padding" id="home">
       <div className="gpt3__header-content">
            <h1 className="name">Fla<span>IA</span></h1>
            <h1>
            Concisely <br/> describe your <br/>product or service
            </h1>
            <p>No need to get clever. Tell people exactly what you're offering, <br/>then use this space to communicate your key value proposition.</p>
            
            <div className="gpt3__header-content__input">
                <button type="button">ORDER NOW</button>
            </div>
            
            <div className="gpt3__header-content__people">
                <img src={people} alt="people" />
                <p>1.600  people requested access a visit in las 24 hours</p>
            </div>
            
       </div>
            
    </div>)
 }

 export default Header;