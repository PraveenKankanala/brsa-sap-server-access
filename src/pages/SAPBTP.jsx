import React from "react";
import "./SAPBTP.css";

const SAPBTP = () => {
  return (
    <div className="sap-btp-page">

      {/* HERO */}
      <section className="btp-hero">
        <div className="btp-container">
          <span className="btp-badge">
            SAP BUSINESS TECHNOLOGY PLATFORM
          </span>

          <h1>SAP BTP – Business Technology Platform</h1>

          <p className="btp-hero-text">
            SAP Business Technology Platform helps organizations
            integrate, extend, automate, develop, manage data, and build
            intelligent business applications across SAP and
            non-SAP environments.
          </p>

          <div className="btp-buttons">
            <a href="#btp-services" className="btp-primary-btn">
              SAP BTP Services
            </a>

            <a href="#btp-contact" className="btp-secondary-btn">
              Contact SAP Expert
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="btp-section">
        <div className="btp-container">

          <h2>What is SAP BTP?</h2>

          <p>
            SAP BTP stands for SAP Business Technology Platform. It is
            SAP's platform for application development, integration,
            automation, data and analytics, and artificial intelligence.
          </p>

          <p>
            Organizations can use BTP to connect SAP and third-party
            applications, extend standard SAP applications, automate
            business processes, and build applications around business
            data.
          </p>

          <p>
            SAP BTP is particularly important in modern SAP landscapes
            because it provides capabilities for building extensions
            without unnecessarily modifying the SAP core.
          </p>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="btp-section btp-light">
        <div className="btp-container">

          <h2>Major SAP BTP Capabilities</h2>

          <div className="btp-grid">

            <div className="btp-card">
              <h3>Application Development</h3>
              <p>
                Build and extend business applications using SAP
                development technologies and services.
              </p>
            </div>

            <div className="btp-card">
              <h3>Integration</h3>
              <p>
                Connect SAP and non-SAP applications, APIs, systems,
                events, and business processes.
              </p>
            </div>

            <div className="btp-card">
              <h3>Process Automation</h3>
              <p>
                Automate repetitive business processes, tasks,
                approvals, and workflows.
              </p>
            </div>

            <div className="btp-card">
              <h3>Data & Analytics</h3>
              <p>
                Work with enterprise data and analytical capabilities
                to support business insights and decisions.
              </p>
            </div>

            <div className="btp-card">
              <h3>Artificial Intelligence</h3>
              <p>
                Build and extend intelligent business scenarios using
                SAP's AI capabilities.
              </p>
            </div>

            <div className="btp-card">
              <h3>Application Extensions</h3>
              <p>
                Extend SAP applications while helping organizations
                maintain a cleaner core architecture.
              </p>
            </div>

            <div className="btp-card">
              <h3>Identity & Access</h3>
              <p>
                Support identity, authentication, authorization, and
                secure access across cloud applications.
              </p>
            </div>

            <div className="btp-card">
              <h3>Cloud Application Services</h3>
              <p>
                Provides cloud capabilities and services required for
                developing and operating enterprise applications.
              </p>
            </div>

            <div className="btp-card">
              <h3>Enterprise Automation</h3>
              <p>
                Connect applications and automate end-to-end enterprise
                processes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IMPORTANT SERVICES */}
      <section className="btp-section">
        <div className="btp-container">

          <h2>Important SAP BTP Services & Solutions</h2>

          <div className="btp-service-grid">

            <div className="btp-service-box">
              <h3>SAP Integration Suite</h3>
              <p>
                Helps integrate applications, APIs, data, and business
                processes across SAP and third-party environments.
              </p>
            </div>

            <div className="btp-service-box">
              <h3>SAP Build</h3>
              <p>
                Provides tools for application development and process
                automation using low-code, pro-code, and AI-supported
                capabilities.
              </p>
            </div>

            <div className="btp-service-box">
              <h3>SAP HANA Cloud</h3>
              <p>
                Provides cloud database capabilities for enterprise
                applications, data processing, and development scenarios.
              </p>
            </div>

            <div className="btp-service-box">
              <h3>SAP Datasphere</h3>
              <p>
                Supports data integration, data modeling, and business
                data management for analytical scenarios.
              </p>
            </div>

            <div className="btp-service-box">
              <h3>SAP Analytics Cloud</h3>
              <p>
                Provides analytics, planning, dashboards, reporting,
                and visualization capabilities.
              </p>
            </div>

            <div className="btp-service-box">
              <h3>SAP Cloud Connector</h3>
              <p>
                Helps securely connect cloud applications and services
                with selected on-premise systems.
              </p>
            </div>

            <div className="btp-service-box">
              <h3>SAP API Management</h3>
              <p>
                Supports management, publication, security, and
                consumption of APIs.
              </p>
            </div>

            <div className="btp-service-box">
              <h3>SAP Event Mesh</h3>
              <p>
                Supports event-driven communication between applications
                and business processes.
              </p>
            </div>

            <div className="btp-service-box">
              <h3>SAP Business Application Studio</h3>
              <p>
                Provides a development environment for building and
                extending SAP applications.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="btp-section btp-light">
        <div className="btp-container">

          <h2>SAP BTP Architecture</h2>

          <div className="btp-architecture">

            <div className="btp-architecture-box">
              SAP S/4HANA
            </div>

            <div className="btp-architecture-box">
              SAP SuccessFactors
            </div>

            <div className="btp-architecture-box">
              SAP Ariba
            </div>

            <div className="btp-architecture-box">
              Third-Party Systems
            </div>

            <div className="btp-arrow">
              ↓
            </div>

            <div className="btp-platform">
              <h3>SAP BTP</h3>

              <div className="btp-platform-grid">
                <span>Integration</span>
                <span>Development</span>
                <span>Automation</span>
                <span>Data</span>
                <span>Analytics</span>
                <span>AI</span>
              </div>
            </div>

            <div className="btp-arrow">
              ↓
            </div>

            <div className="btp-architecture-box">
              Business Applications
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="btp-section">
        <div className="btp-container">

          <h2>Important SAP BTP Use Cases</h2>

          <div className="btp-process-grid">

            <div className="btp-process">
              <h3>System Integration</h3>
              <p>
                Connect SAP S/4HANA, SuccessFactors, Ariba, and external
                applications.
              </p>
            </div>

            <div className="btp-process">
              <h3>Application Extension</h3>
              <p>
                Build additional functionality around standard SAP
                applications.
              </p>
            </div>

            <div className="btp-process">
              <h3>Workflow Automation</h3>
              <p>
                Automate approvals, tasks, notifications, and business
                workflows.
              </p>
            </div>

            <div className="btp-process">
              <h3>API Integration</h3>
              <p>
                Expose and consume APIs to connect applications and
                business services.
              </p>
            </div>

            <div className="btp-process">
              <h3>Data Analytics</h3>
              <p>
                Combine business data and analytics technologies to
                support decision-making.
              </p>
            </div>

            <div className="btp-process">
              <h3>AI Applications</h3>
              <p>
                Develop intelligent applications and automate business
                processes using AI capabilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DARK */}
      <section className="btp-dark">
        <div className="btp-container">

          <h2>Why SAP BTP is Important</h2>

          <p>
            Modern SAP environments often contain cloud applications,
            on-premise systems, third-party applications, APIs, and
            multiple data sources. SAP BTP provides capabilities to
            connect and extend these environments.
          </p>

          <p>
            SAP positions BTP around integration, application
            development and automation, data, analytics, and AI
            capabilities. 1
          </p>

          <div className="btp-feature-grid">
            <div>Integration</div>
            <div>Application Development</div>
            <div>Automation</div>
            <div>Data Management</div>
            <div>Analytics</div>
            <div>Artificial Intelligence</div>
            <div>API Management</div>
            <div>Cloud Extensions</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="btp-section" id="btp-services">
        <div className="btp-container">

          <h2>SAP BTP Services</h2>

          <div className="btp-consulting-grid">

            <div className="btp-consulting-card">
              <h3>SAP BTP Implementation</h3>
              <p>
                BTP account setup, architecture, services, security,
                integration, development, testing, and deployment.
              </p>
            </div>

            <div className="btp-consulting-card">
              <h3>SAP BTP Integration</h3>
              <p>
                Integration of SAP and non-SAP systems using APIs,
                integration flows, events, and connectors.
              </p>
            </div>

            <div className="btp-consulting-card">
              <h3>SAP BTP Development</h3>
              <p>
                Development of cloud applications, extensions,
                services, workflows, and business applications.
              </p>
            </div>

            <div className="btp-consulting-card">
              <h3>SAP BTP Support</h3>
              <p>
                Monitoring, troubleshooting, incident resolution,
                configuration, and ongoing BTP support.
              </p>
            </div>

            <div className="btp-consulting-card">
              <h3>SAP Integration Suite</h3>
              <p>
                Design and development of integration flows, APIs,
                connectivity, and enterprise integration scenarios.
              </p>
            </div>

            <div className="btp-consulting-card">
              <h3>SAP BTP Consulting</h3>
              <p>
                Architecture, clean-core extension strategy,
                integration planning, security, development, and
                BTP transformation consulting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="btp-section btp-light">
        <div className="btp-container">

          <h2>Benefits of SAP BTP</h2>

          <ul className="btp-benefits">
            <li>Connect SAP and non-SAP applications</li>
            <li>Extend SAP applications</li>
            <li>Automate business processes</li>
            <li>Build cloud applications</li>
            <li>Support enterprise data and analytics</li>
            <li>Enable API-based integration</li>
            <li>Support event-driven architectures</li>
            <li>Develop AI-supported solutions</li>
            <li>Improve development agility</li>
            <li>Support clean-core extension strategies</li>
          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="btp-section">
        <div className="btp-container">

          <h2>Frequently Asked Questions About SAP BTP</h2>

          <div className="btp-faq">

            <details>
              <summary>What is SAP BTP?</summary>
              <p>
                SAP BTP is SAP's technology platform for application
                development, integration, automation, data, analytics,
                and AI.
              </p>
            </details>

            <details>
              <summary>Is SAP BTP a programming language?</summary>
              <p>
                No. SAP BTP is a cloud technology platform containing
                multiple services, tools, runtimes, and development
                capabilities.
              </p>
            </details>

            <details>
              <summary>What is SAP Integration Suite?</summary>
              <p>
                SAP Integration Suite provides capabilities for
                integrating applications, APIs, data, and business
                processes across SAP and third-party landscapes.
              </p>
            </details>

            <details>
              <summary>What is SAP Build?</summary>
              <p>
                SAP Build provides tools for application development
                and process automation, including low-code and
                pro-code capabilities.
              </p>
            </details>

            <details>
              <summary>Can SAP BTP integrate with S/4HANA?</summary>
              <p>
                Yes. SAP BTP is designed to connect and extend SAP
                applications such as SAP S/4HANA as well as
                third-party systems.
              </p>
            </details>

            <details>
              <summary>Is SAP BTP useful for SAP developers?</summary>
              <p>
                Yes. Developers can use BTP to build applications,
                integrations, automations, APIs, and extensions around
                SAP business processes.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="btp-contact" id="btp-contact">
        <div className="btp-container">

          <h2>Need SAP BTP Implementation or Support?</h2>

          <p>
            Contact us for SAP BTP implementation, integration,
            development, automation, migration, support, and consulting.
          </p>

          <div className="btp-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="btp-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="btp-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SAPBTP;