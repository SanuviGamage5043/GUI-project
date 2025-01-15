import React from "react";
import Header from "../../components/Header/Header";
import "./Home2.css";
import MenuBar from "../../components/MenuBar/MenuBar";



export default function Home2( cart ) {
  return (
    <div className="main-view">
      <Header cart={cart}/>
      <MenuBar/>
      <img src="/images/heading.png" className="heading-image"/>
      
      <h1 className="quote"> A gift is a token of love, a memory to treasure forever</h1>

      <img src="/images/gift.png"  className="gift-image"/>
      
      <img src="/images/voucher.png" className="voucher-item"/>
      
      </div>
      
  );
}
