import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-section">
          <h2 className="footer-logo">SAP SERVER ACCESS</h2>

          <p>
            India's trusted SAP SERVER ACCESS platform providing
            SAP S/4HANA 2025, SAP ECC 6.0 and SAP SuccessFactors
            servers for companies, institutes and professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#Modules">Modules</a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-section">
          <h3>Our Products</h3>

          <ul>
            <li>SAP S/4HANA 2025</li>
            <li>SAP ECC 6.0</li>
            <li>SAP SuccessFactors</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          {/* WhatsApp */}
          <p className="contact-item">
            <FaEnvelope
              className="icon"
              aria-hidden="true"
            />

            <a
              href="https://wa.me/918309820381"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact SAP Server Access on WhatsApp at +91 8309820381"
            >
              💬 WhatsApp: +91 8309820381
            </a>
          </p>

          {/* Email */}
          <p className="contact-item">
            <FaEnvelope
              className="icon"
              aria-hidden="true"
            />

            <a
              href="mailto:erpserveraccess@gmail.com"
              aria-label="Send an email to SAP Server Access"
            >
              erpserveraccess@gmail.com
            </a>
          </p>

          {/* Address */}
          <p className="contact-item">
            <FaMapMarkerAlt
              className="icon"
              aria-hidden="true"
            />

            <span>
              Ameerpet, Opposite Sri Yellammapochamma Temple,
              Hyderabad, Telangana, 500038, India
            </span>
          </p>

          {/* Social Media */}
          <div
            className="social-icons"
            aria-label="Social media links"
          >

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sapserver_access_?igsh=MTVmNzJ4c3RqejZ3ZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit SAP Server Access on Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sap-server-access-reddy-09b087297?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit SAP Server Access on LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>

          </div>
        </div>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SAP SERVER ACCESS.
          All Rights Reserved.
        </p>

        <p>
          Designed &amp; Developed by{" "}
          <strong>SAP SERVER ACCESS</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;