import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

function Header() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlink(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <div className="header-content" id="home">
        <h1 className={`nametitle ${!blink ? 'blink-stop' : ''}`}>
          Hola, Soy Juan Pablo Solis
        </h1>
        <div className="header-line">
        <p className="header-description">Bienvenido a mi portafolio</p>
        </div>
        <div className="projects-button-wrapper">
          <Link to="projects" spy={true} smooth={true} offset={0} duration={500} className="projects-button">
            PROJECTS
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
