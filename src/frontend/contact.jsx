import React, { useState } from "react";
import './cont.css';
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaPhoneVolume, FaMapLocationDot } from "react-icons/fa6";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); 
  const [statusMessage, setStatusMessage] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    setStatusMessage(""); 

    try {
      const response = await axios.post("http://localhost:7000/send-email", formData);

      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setStatusMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Error sending message. Please try again later.");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="contmain" id="contact">
      <div className="contname">
        <h2>Contact Me</h2>
      </div>
      <div className="continner">
        {/* Left Part */}
        <div className="left-part">
          <div className="info-container">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <SlEnvolopeLetter />
              <p>s.a.n.d.h.y.a.2004medapati@gmail.com</p>
            </div>
            <div className="contact-item">
              <FaPhoneVolume />
              <p>+91 9705634999</p>
            </div>
            <div className="contact-item">
              <FaMapLocationDot />
              <p>Andhra Pradesh, INDIA</p>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="right-part">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
