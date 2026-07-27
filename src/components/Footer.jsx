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
          <h2 className="footer-logo">RR SAP SERVER ACCESS</h2>

          <p>
            India's trusted RR Server Access platform providing
            SAP S/4HANA 2025, SAP ECC 6.0 and SAP SuccessFactors
            practice servers for students and professionals.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
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

          <p>
            <FaEnvelope className="icon" />
            <a href="mailto:brsrserveraccess@gmail.com">
              brsrserveraccess@gmail.com
            </a>
          </p>

          <p>
            <FaMapMarkerAlt className="icon" />
            Ameerpet, Opposite Sri Yellammapochamma Temple,
            Hyderabad, Telangana,500038,India
          </p>

          <div className="social-icons">

            <a
              href="https://www.instagram.com/raju1909hana?igsh=MTVmNzJ4c3RqejZ3ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/sap-server-access-reddy-09b087297?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} RR SAP SERVER ACCESS. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <strong>RR SAP SERVER ACCESS</strong>
        </p>

      </div>

    </footer>
  );
}

export default Footer;