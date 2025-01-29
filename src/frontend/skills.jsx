import React, { useState, useEffect, useRef } from "react";
import "./skills.css";

const Skills = () => {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const skillsRef = useRef(null);

  const technicalSkills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML & CSS", level: 85 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "AIML", level: 75 },
    { name: "SQL", level: 70 },
    { name: "Prompt Engineering", level: 70 },
  ];

  const softSkills = [
    { name: "Team Collaboration", level: 85 },
    { name: "Communication", level: 95 },
    { name: "Time Management", level: 80 },
    { name: "Problem-Solving", level: 85 },
    { name: "Leadership", level: 75 },
    { name: "Adaptability", level: 70 },
    { name: "Creativity", level: 75 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimationTrigger(true);
        } else {
          setAnimationTrigger(false); 
        }
      },
      { threshold: 0.3 } 
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="skills-main" id="skills" ref={skillsRef}>
      <center><h1>Skills</h1></center>
      <div className="skills-inner">
        <div className="skills-left">
          <h3>Technical Skills</h3>
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${animationTrigger ? "animate" : ""}`}
                    style={{ width: `${animationTrigger ? skill.level : 0}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-right">
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${animationTrigger ? "animate" : ""}`}
                    style={{ width: `${animationTrigger ? skill.level : 0}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
