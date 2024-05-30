import React from 'react';
import './Navbar.css'; // Import your CSS file

function NavigationMenu() {
  return (
    <ul className="nav-links">
      <li><a href="/home">Home</a></li>
      <li><a href="/Resume">Resume</a></li>
      <li><a href="/home#Builder">Contact</a></li>
      <li className="Project">ProFolio</li>
    </ul>
  );
}

export default NavigationMenu;
