import React, { useEffect, useRef } from "react";
import './experience.css';
import { GrUserWorker } from "react-icons/gr";

const Experience = () => {
    const experienceRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    experienceRef.current.classList.add("animate");
                } else {
                    experienceRef.current.classList.remove("animate");
                }
            },
            { threshold: 0.2 } 
        );
        if (experienceRef.current) {
            observer.observe(experienceRef.current);
        }
        return () => {
            if (experienceRef.current) {
                observer.unobserve(experienceRef.current);
            }
        };
    }, []);
    return (
        <div className="exmain" id="experience" ref={experienceRef}>
            <div className="exname">
                <h2>Experience</h2>
            </div>
            <div className="exinner">
                {/* Top circle and rectangle */}
                <div className="circle top">
                    <GrUserWorker />
                    <div className="rectangle top-rectangle">
                        <h3>Full Stack Developer Intern</h3>
                        <h4>Technical Hub</h4>
                        <p>Led development of enterprise application using React Native</p>
                        <span>2024-Present</span>
                    </div>
                </div>

                {/* Bottom circle and rectangle */}
                <div className="circle bottom">
                    <GrUserWorker />
                    <div className="rectangle bottom-rectangle">
                        <h3>AIML Intern</h3>
                        <h4>APSSDC</h4>
                        <p>Artificial Intelligence and Machine Learning, focusing on Sentiment Analysis.</p>
                        <span>May 2024 to June 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
