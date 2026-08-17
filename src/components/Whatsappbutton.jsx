import React from "react";
import "./Whatsappbutton.css";

const Whatsappbutton = () => {
  const phoneNumber = "918309820381";

  const message = encodeURIComponent(
    "Hello, I am interested in SAP Server Access. Please share the available plans and details."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <span className="whatsapp-icon">☏</span>
      <span className="whatsapp-text">WhatsApp Us</span>
    </a>
  );
};

export default Whatsappbutton;