import React from 'react';
import './Gallery.css'; 

export default function Gallery() {
  return (
    <main className='gallery-container'>
    <div className="main">
      <div className="listpic1">
      <ul>
      <li className="pic1"> <img 
          src = "/images/ho1.jpg" 
          className="image1"/>
      </li>
      <li className="pic1"> <img 
          src = "/images/ho2.jpg" 
          className="image2"/>
      </li>
      <li className="pic1"> <img 
          src = "/images/ho6.jpg" 
          className="image3"/>
      </li>
      <li className="pic1"> <img 
          src = "/images/ho4.jpg" 
          className="image4"/>
      </li>
    </ul>
    </div>
    
    <div className="listpic2">
    <ul>
      <li className="pic2"> <img 
          src = "/images/ho5.jpg" 
          className="image5"/>
      </li>
      <li className="pic2"> <img 
          src = "/images/ho3.jpg" 
          className="image6"/>
      </li>
      <li className="pic2"> <img 
          src = "/images/ho7.jpeg" 
          className="image7"/>
      </li>
    </ul>
    </div>
    </div>
    </main>
    
    
  );
}


