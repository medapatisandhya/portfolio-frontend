import React, { useEffect, useState } from "react";
import './about.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 
import { IoDownloadSharp } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
const About = () => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); 
        } else {
          setIsInView(false); 
        }
      },
      { threshold: 0.20 } 
    );
    observer.observe(aboutSection);
    
    return () => observer.disconnect(); 
  }, []);

  const handleDownload = () => {
    const resumeUrl = "public\\full stack.pdf"; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Sandhya_Medapati_Resume.pdf"; 
    link.click();
  };

  return (
    <div className={`aboutmain ${isInView ? "animate" : ""}`} id="about">
      <div className="aboutname">
        <h2>About Me</h2>
      </div>
      <div className="aboutin">
        <div className="aboutpart">
          <div className="Circle">
            <img src="pic.jpg" alt="Your Image" className="circle-img" />
          </div>
          <center><h3 className="nam">Sandhya Medapati</h3></center>
          <h4 className="titl">Full Stack Developer, Prompt Engineering</h4>
          <p className="about-text">
            I’m a passionate Full Stack Developer with expertise in React, Node.js, and Prompt Engineering. I specialize in building scalable web applications and leveraging AI to optimize user experiences. Constantly learning and adapting, I strive to innovate and stay at the forefront of web development and machine learning.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sandhyamedapati" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sandhyamedapati" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:sandhya@example.com">
              <FaEnvelope />
            </a>
          </div>
          <button onClick={handleDownload} className="download-btn">
            Download <IoDownloadSharp />
          </button>
        </div>
        <div className="aboutpart second-part">
          <div className="sub-div first-div">
            <div className="inner-half">
              <center><h1>3+</h1></center>
              <center><p>Successfull Full Stack Projects</p></center>
            </div>
            <div className="inner-half">
              <center><h1>3+</h1></center>
              <center><p>Successfull AIML Projects</p></center>
            </div>
          </div>
          <div className="sub-div second-div">
            <h2>My Expertise:</h2>
            <p>I specialize in building scalable web applications using modern technologies. My expertise includes front-end development with React, back-end development with Node.js, and database management with MongoDB.</p>
          </div>
          <div className="sub-div third-div">
            <h2>What I Offer ?</h2>
            <div className="offer-item">
              <SiTicktick className="icon" />
              <p>Full Stack Web Development</p>
            </div>
            <div className="offer-item">
              <SiTicktick className="icon" />
              <p>Responsive Design</p>
            </div>
            <div className="offer-item">
              <SiTicktick className="icon" />
              <p>Performance Optimization</p>
            </div>
            <div className="offer-item">
              <SiTicktick className="icon" />
              <p>Prompt Engineering</p>
            </div>
            <div className="offer-item">
              <SiTicktick className="icon" />
              <p>Data Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
