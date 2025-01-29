import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        
      },
    ],
  };

  return (
    <div className="projectmain" id="projects">
      <div className="projectname">
        <h2>Projects</h2>
      </div>
      <div className="projectinner">
        <Slider {...settings} className="slick-container">
          <div className="slick-item">
            <img src="https://img.freepik.com/premium-vector/traditional-family-image_18591-28992.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" />
            <h3>All Age Hub</h3>
            <p>
              The All Age Hub project is a webpage designed for different age
              groups—children, adults, and older people—offering games, job
              listings, entertainment, and traditional content using HTML, CSS,
              and JavaScript.
            </p>
            <div className="hover-content">
              <h3 className="technologies-title">Technologies</h3>
              <div className="technologies">
                <div className="tech-item">HTML</div>
                <div className="tech-item">CSS</div>
                <div className="tech-item">JavaScript</div>
              </div>
              <h4>Key Features</h4>
              <ul className="key-features">
              <li>• Interactive Games for Children.</li>
                <li>• Job Listings for Adults.</li>
                <li>• Traditional & Cultural Content.</li>
                <li>• User-Friendly Design.</li>
                <li>• Responsive Layout and Interactive Features.</li>
              </ul>
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1fUtmYPC1SD421W-QKajugvGMC2fQOoka/view?usp=drive_link", "_blank")
                }
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="slick-item">
            <img src="https://img.freepik.com/free-psd/blood-donation-humanitarian-act-banner_23-2149170489.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid" />
            <h3>Blood Donation</h3>
            <p>
            Developed a responsive Blood Donation Web App using React.js, Node.js, and MongoDB, featuring authentication, profile management, donation tracking, event registration with email notifications, and data visualization.
            </p>
            <div className="hover-content">
              <h3 className="technologies-title">Technologies</h3>
              <div className="technologies">
                <div className="tech-item">ReactJS</div>
                <div className="tech-item">NodeJS</div>
                <div className="tech-item">MongoDB</div>
              </div>
              <h4>Key Features</h4>
              <ul className="key-features">
                <li>•User Authentication</li>
                <li>•Profile Management</li>
                <li>•Donation History Tracking</li>
                <li>•Event Registration</li>
                <li>•Email Notifications</li>
                <li>•Responsive Design</li>
                
              </ul>
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://example.com", "_blank")
                }
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="slick-item">
            <img src="https://img.freepik.com/premium-photo/girl-working-laptop-her-home-office-with-many-objects-around-her_1057-133424.jpg?uid=R167698986&ga=GA1.1.639928877.1718960180&semt=ais_hybrid" />
            <h3>All Age Hub</h3>
            <p>
              The All Age Hub project is a webpage designed for different age
              groups—children, adults, and older people—offering games, job
              listings, entertainment, and traditional content using HTML, CSS,
              and JavaScript.
            </p>
            <div className="hover-content">
              <h3 className="technologies-title">Technologies</h3>
              <div className="technologies">
              <div className="tech-item">ReactJS</div>
                <div className="tech-item">NodeJS</div>
                <div className="tech-item">MongoDB</div>
              </div>
              <h4>Key Features</h4>
              <ul className="key-features">
              <li>•User Authentication</li>
                <li>•Profile Management</li>
                <li>•Donation History Tracking</li>
                <li>•Event Registration</li>
                <li>•Email Notifications</li>
                <li>•Responsive Design</li>
              </ul>
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://example.com", "_blank")
                }
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="slick-item">
            <img src="https://img.freepik.com/premium-vector/traditional-family-image_18591-28992.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" />
            <h3>All Age Hub</h3>
            <p>
              The All Age Hub project is a webpage designed for different age
              groups—children, adults, and older people—offering games, job
              listings, entertainment, and traditional content using HTML, CSS,
              and JavaScript.
            </p>
            <div className="hover-content">
              <h3 className="technologies-title">Technologies</h3>
              <div className="technologies">
                <div className="tech-item">HTML</div>
                <div className="tech-item">CSS</div>
                <div className="tech-item">JavaScript</div>
              </div>
              <h4>Key Features</h4>
              <ul className="key-features">
              <li>•User Authentication</li>
                <li>•Profile Management</li>
                <li>•Donation History Tracking</li>
                <li>•Event Registration</li>
                <li>•Email Notifications</li>
                <li>•Responsive Design</li>
              </ul>
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://example.com", "_blank")
                }
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="slick-item">
            <img src="https://img.freepik.com/premium-vector/traditional-family-image_18591-28992.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid" />
            <h3>All Age Hub</h3>
            <p>
              The All Age Hub project is a webpage designed for different age
              groups—children, adults, and older people—offering games, job
              listings, entertainment, and traditional content using HTML, CSS,
              and JavaScript.
            </p>
            <div className="hover-content">
              <h3 className="technologies-title">Technologies</h3>
              <div className="technologies">
                <div className="tech-item">HTML</div>
                <div className="tech-item">CSS</div>
                <div className="tech-item">JavaScript</div>
              </div>
              <h4>Key Features</h4>
              <ul className="key-features">
                <li>• Interactive Games for Children.</li>
                <li>• Job Listings for Adults.</li>
                <li>• Traditional & Cultural Content.</li>
                <li>• User-Friendly Design.</li>
                <li>• Responsive Layout and Interactive Features.</li>
              </ul>
              <button
                className="project-button"
                onClick={() =>
                  window.open("https://example.com", "_blank")
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
