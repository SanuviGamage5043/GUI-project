import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

export default function MenuBar() {
  return (
    <div className="listtgroup">
      <ul className="list">
        <li className="listcomp">Occasions</li>
        <li className="listcomp">Flowers</li>
        <li className="listcomp">Gift Baksets & Boxes</li>
        <li className="listcomp">Chocolates</li>
        <li className="listcomp">Fruits</li>
        <li className="listcomp">
          <Link className="listcomp-link" to="/bakery"> Bakery</Link>
        </li>
        <li className="listcomp">Kids</li>
        <li className="listcomp">Home</li>
      </ul>
    </div>
  );
}
