import React from 'react';
import profile from "../../assets/pff.webp";
import profileHover from "../../assets/Barca.png"; 
import { Link } from 'react-scroll';  
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <div className="logo-img">
                    <img src={profile} alt="Juan Pablo Solis" />
                    <img src={profileHover} alt="Juan Pablo Solis Hover" className="hover-img" />
                </div>
                <div className="logo-text">
                    <a href="#" className="font-santello">Juan Pablo Solis</a>
                </div>
            </div>
            <div className="nav-links">
                <Link to="home" spy={true} smooth={true} offset={0} duration={500}>HOME</Link>
                <Link to="about" spy={true} smooth={true} offset={0} duration={500}>ABOUT</Link>
                <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>PROJECTS</Link>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>CONTACT</Link>
            </div>
        </nav>
    );
}


export default Navbar;
