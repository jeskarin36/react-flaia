import React from "react";
import "./whatGPT3.css";
import {Feature} from "../../components";

 const whatGPT3=()=>{
    return(
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
       <div className="gpt3__whatgpt3-feature">
            <Feature title="What is FlashGoods?" text="Lorem ipsum doloam aperiam qquatur, doloam aperiam qquatur, doloam aperiam qquatur. Lorem aperiam qquatur, doloam aperiam qquatur. Lorem"></Feature>
       </div>
       <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">Order from wherever you are</h1>
            <p>Explore Our Offers</p>
       </div>
       <div className="gpt3__whatgpt3-container">
            <Feature title="Benefit 1" text="For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients."></Feature>
            <Feature title="Benefit 2" text="Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts."></Feature>
            <Feature title="Benefit 3" text="You could also add buttons to this section and share links to other products or available delivery methods."></Feature>
       </div>
    </div>)
 }

 export default whatGPT3;