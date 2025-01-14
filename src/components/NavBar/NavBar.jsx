import React from 'react';
import './NavBar.css'; // Import the standard CSS file

export default function NavBar({ icon, label }) {
  return (
    <div className="navItem">
      <img
        loading="lazy"
        src={icon}
        className="icon"
        alt=""
      />
      <div className="label">{label}</div>
    </div>
  );
}

