import React from "react";
import Header from "../../components/Header/Header";
import Gallery from "@/components/Gallery/Gallery";

import "./Home2.css";
import MenuBar from "../../components/MenuBar/MenuBar";

export default function Home2({cart}) {
  return (
    <div>
        <Header cart={cart} />
        <MenuBar/>
        <br/>
        <p>Find what they'll love</p>
    </div>
    
  );
}
