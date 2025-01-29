import React from "react";
import { useInView } from "react-intersection-observer";
import "./certificate.css";
import { PiScrollDuotone } from "react-icons/pi";

const Certificate = () => {
  const certificates = [
    {
      title: "JavaScript(Basic)",
      organization: "Hackerrank",
      issued: "23 Sep 2024",
      link: "https://www.hackerrank.com/certificates/1768a7a2c1f0",
    },
    {
      title: "Data Analysis with Python",
      organization: "IBM Congnitive Class",
      issued: "21 May 2024",
      link:"https://drive.google.com/file/d/1Ti1rK39hm1dJ1IkAlm6nE2nmWsRBTucl/view?usp=drive_link",
    },
    {
      title: "Azure AI Fundamentals",
      organization: "Microsoft",
      issued: "13 Apr 2024",
      link:"https://drive.google.com/file/d/1QuqfKhJBd4IrFFM41tFOC5mIccWf7N8x/view?usp=sharing",
    },
    {
      title: "IT Specialist in HTML and CSS",
      organization: "Pearson Vue",
      issued: "6 May 2023",
      link:"https://drive.google.com/file/d/1PNaMidpl8EQYJW5eQdKiZvKA2U0rkbzC/view?usp=sharing",
    },
    {
      title: "Python Programming",
      organization: "Cisco Networking Academy",
      issued: "27 Apr 2023",
      link:"https://drive.google.com/file/d/1DQrHOCDQIEkqQQDsCJtRNTVyc2oCu2_B/view?usp=drive_link",
    },
    {
      title: "Java Foundations",
      organization: "Oracle Academy",
      issued: "27 Aug 2023",
      link:"https://drive.google.com/file/d/1AvIsFuA1weUdSejSJeu2RsWUStjFbLgW/view?usp=drive_link",
    },
    {
      title: "Deep Learning",
      organization: "Infosys",
      issued: "26 Jan 2024",
      link:"https://drive.google.com/file/d/1jDUQ9u3P8ce2Cn5IFrc3sVHCH0mDLJmK/view?usp=drive_link",
    },
    {
      title: "Machine Learning",
      organization: "Infosys",
      issued: "25 Feb 2024",
      link:"https://drive.google.com/file/d/1RjzcR2NVsQ2MBcC98UFBh4q7bYDbh-Ah/view?usp=drive_link",
    },
    {
      title: "C Programming",
      organization: "CodeChef",
      issued: "10 June 2023",
      link:"https://drive.google.com/file/d/1xpnlx46mfMwi3ZLRWcK5V7x2GdMIqlfR/view?usp=drive_link",
    },
  ];

  const { ref: containerRef, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });

  return (
    <div className="certmain" id="certificates">
      <h2>Certificates</h2>
      <div className="certinner" ref={containerRef}>
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`certpart ${inView ? "slide-in" : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="cert-icon">
              <PiScrollDuotone />
            </div>
            <div className="cert-text">
              <h3>{cert.title}</h3>
              <p>{cert.organization}</p>
            </div>
            <div className="cert-details">
              <div>
                <p>Issued: {cert.issued}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{color:"#14b0cb"}}>
                  Verify Certification
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
