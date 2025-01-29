import React, { useState } from "react";
import "./header.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      
      if (id === "projects") {
        setTriggerPopup(true);
        setTimeout(() => setTriggerPopup(false), 1000); 
      }
    }
  };
  return (
    <div className="fullScreen">
      <div className="leftNav">
        <h2 className="name">Sandhya Medapati</h2>
        <div className="menuIcon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <nav className={`nav ${menuOpen ? "show" : ""}`}>
        <a href="#home" className="link" onClick={() => scrollToSection("home")}>
            Home
          </a>
          <a href="#about" className="link" onClick={() => scrollToSection("about")}>
            About
          </a>
          <a href="#skills" className="link" onClick={() => scrollToSection("skills")}>
            Skills
          </a>
          <a href="#projects" className="link" onClick={() => scrollToSection("projects")}>
  Projects
</a>

          <a href="#certificates" className="link" onClick={() => scrollToSection("certificates")}>
            Certificates
          </a>
          <a href="#experience" className="link" onClick={() => scrollToSection("experience")}>
            Experience
          </a>
          <a href="#contact" className="link" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
        </nav>
      </div>
      <div className="centerDiv">
      <div className="splitDiv">
      <div className="part">
            <div className="innerContainer">
              <h2 className="title">Medapati Sandhya</h2>
              <h3 className="subtitle">Full Stack Developer | Prompt Engineering</h3>
              <div className="iconContainer">
                <a href="https://www.linkedin.com/in/medapati-sandhyareddy-1920an/">
                  <FaLinkedinIn className="icon" />
                </a>
                <a href="https://github.com/medapatisandhya">
                  <FaGithub className="icon" />
                </a>
                <a href="mailto:22P31A4223@acet.ac.in">
                  <MdEmail className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="part">
            <div className="flowerDiv">
              <img
                src="slide1-removebg-preview.png"
                className="image"
                alt="Flower"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

