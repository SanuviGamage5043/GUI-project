import React from "react";
import Header from "../../components/Header/Header";
import "./Home2.css";
import MenuBar from "../../components/MenuBar/MenuBar";



export default function Home2( cart ) {
  return (
    <div className="main-container">
      <Header cart={cart}/>
      <MenuBar/>
      <br/>
      <br/>
      <br/>
      <div className="decohome">
      <div className="heading1main">
        <div className="allheadings">
        <h1 className="heading1">
        Every gift is a story waiting to be told
        </h1>
        <br/>
        <br/>
       
        <br/>
        <h3 className="heading3"> 
          Get a 50% Discount
        </h3>
        <br/>
        <br/>
      
       
        <h2 className="heading2">
        Spread smiles, one gift at a time.
        </h2>

        </div>
        
        <img src="/images/wall1.png" className="imagewall"/>
      </div>
      
    </div>

      </div>
      
  );
}
