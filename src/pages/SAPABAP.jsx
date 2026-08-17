import React from "react";
import "./SAPABAP.css";

const SAPABAP = () => {
  return (
    <div className="abap-page">

      <section className="abap-hero">
        <div className="abap-container">
          <span className="abap-badge">SAP TECHNICAL MODULE</span>

          <h1>SAP ABAP – Development & Programming</h1>

          <p>
            SAP ABAP is SAP's primary programming language for developing,
            customizing, extending, and integrating SAP business applications.
          </p>

          <div className="abap-buttons">
            <a href="#abap-services">ABAP Services</a>
            <a href="#abap-contact">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="abap-section">
        <div className="abap-container">
          <h2>What is SAP ABAP?</h2>

          <p>
            ABAP stands for Advanced Business Application Programming. It is
            widely used for developing custom reports, interfaces, forms,
            enhancements, workflows, APIs, and business applications within
            SAP environments.
          </p>

          <p>
            ABAP developers work with SAP systems such as SAP S/4HANA and
            other SAP platforms to create and extend business functionality.
          </p>
        </div>
      </section>

      <section className="abap-section abap-light">
        <div className="abap-container">
          <h2>Important SAP ABAP Topics</h2>

          <div className="abap-grid">
            {[
              ["ABAP Reports", "Develop classical and modern reports for SAP business processes."],
              ["ABAP Dictionary", "Work with tables, structures, data elements, domains, and database objects."],
              ["Internal Tables", "Process and manipulate business data efficiently in ABAP programs."],
              ["Open SQL", "Read and manipulate database information using ABAP SQL capabilities."],
              ["ALV Reports", "Create structured and interactive business reports."],
              ["BAPIs & RFC", "Integrate SAP functionality with other applications and systems."],
              ["Enhancements", "Extend standard SAP functionality using enhancement techniques."],
              ["User Exits", "Customize standard SAP processes without directly modifying SAP standard code."],
              ["BADIs", "Implement object-oriented enhancement points in SAP applications."],
              ["Forms", "Develop business documents using technologies such as Smart Forms and Adobe Forms."],
              ["OData", "Expose and consume SAP business data through OData services."],
              ["ABAP Objects", "Use object-oriented programming concepts in SAP development."]
            ].map(([title, text]) => (
              <div className="abap-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="abap-section">
        <div className="abap-container">
          <h2>SAP ABAP Development Areas</h2>

          <div className="abap-process-grid">
            <div>
              <h3>Custom Development</h3>
              <p>Develop custom programs and functionality according to business requirements.</p>
            </div>

            <div>
              <h3>Reports</h3>
              <p>Create reports to extract and present SAP business information.</p>
            </div>

            <div>
              <h3>Interfaces</h3>
              <p>Connect SAP with external applications and systems.</p>
            </div>

            <div>
              <h3>Enhancements</h3>
              <p>Extend standard SAP applications while maintaining standard functionality.</p>
            </div>

            <div>
              <h3>Forms</h3>
              <p>Create invoices, purchase documents, statements, and other business forms.</p>
            </div>

            <div>
              <h3>APIs & OData</h3>
              <p>Build services that allow applications to communicate with SAP systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="abap-dark">
        <div className="abap-container">
          <h2>SAP ABAP Practice & Development Environment</h2>

          <p>
            A dedicated SAP environment can help ABAP learners and developers
            practice programming, reports, debugging, dictionary objects,
            enhancements, interfaces, and other development activities.
          </p>

          <div className="abap-features">
            <span>ABAP Programming</span>
            <span>Debugging</span>
            <span>Reports</span>
            <span>Tables</span>
            <span>Enhancements</span>
            <span>Interfaces</span>
            <span>Forms</span>
            <span>OData</span>
          </div>
        </div>
      </section>

      <section className="abap-section" id="abap-services">
        <div className="abap-container">
          <h2>SAP ABAP Services</h2>

          <div className="abap-grid">
            <div className="abap-card">
              <h3>ABAP Development</h3>
              <p>Custom ABAP development and business application programming.</p>
            </div>

            <div className="abap-card">
              <h3>ABAP Support</h3>
              <p>Debugging, issue analysis, corrections, and production support.</p>
            </div>

            <div className="abap-card">
              <h3>ABAP Training</h3>
              <p>Practice-oriented ABAP learning and development environments.</p>
            </div>

            <div className="abap-card">
              <h3>ABAP Integration</h3>
              <p>Development of interfaces and integration solutions.</p>
            </div>

            <div className="abap-card">
              <h3>ABAP Enhancement</h3>
              <p>Enhancements, BADIs, exits, and custom functionality.</p>
            </div>

            <div className="abap-card">
              <h3>ABAP Server Access</h3>
              <p>Practice environments for learning and developing SAP ABAP skills.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="abap-contact" id="abap-contact">
        <div className="abap-container">
          <h2>Need SAP ABAP Access or Support?</h2>

          <p>
            Contact us for SAP ABAP practice environments, development,
            training, and technical support.
          </p>

          <div className="abap-contact-buttons">
            <a
              href="https://wa.me/918309820381"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a href="mailto:erpserveraccess@gmail.com">
              erpserveraccess@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SAPABAP;