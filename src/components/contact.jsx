import React from "react";
import { FaInstagram, FaYoutube, FaCoffee } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const instagramUrl = "https://www.instagram.com/humo.productora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const youtubeUrl = "https://www.youtube.com/@humo.producciones"; 
  const cafecitoUrl = "https://cafecito.app/humoproduccciones"
  return (
    <div id="contact" className="contact-container">
      <h1 className="title">¡Contactanos!</h1>
      <div className="button-row">
        <button className="instagram-button" onClick={() => window.open(instagramUrl, "_blank")}>
          <FaInstagram className="icon" />
          Siguenos en Instagram
        </button>
        <button className="youtube-button" onClick={() => window.open(youtubeUrl, "_blank")}>
          <FaYoutube className="icon" />
          Siguenos en YouTube
        </button>
        <button className="cafecito-button" onClick={() => window.open(cafecitoUrl, "_blank")}>
          <FaCoffee className="icon" />
            Invitame un café
        </button>
      </div>
    </div>
  );
};

export default Contact;