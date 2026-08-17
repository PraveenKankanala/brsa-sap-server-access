import React from "react";
import "./SAPBW4HANA.css";

const SAPBW4HANA = () => {
  return (
    <div className="sap-bw-page">

      {/* HERO */}
      <section className="bw-hero">
        <div className="bw-container">
          <span className="bw-badge">SAP BW/4HANA</span>

          <h1>SAP BW/4HANA – Data Warehousing & Analytics</h1>

          <p className="bw-hero-text">
            SAP BW/4HANA is SAP's modern data warehouse platform designed
            for enterprise-wide reporting, data integration, analytics,
            data modeling, and business intelligence.
          </p>

          <div className="bw-buttons">
            <a href="#bw-services" className="bw-primary-btn">
              SAP BW/4HANA Services
            </a>

            <a href="#bw-contact" className="bw-secondary-btn">
              Contact SAP Expert
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bw-section">
        <div className="bw-container">

          <h2>What is SAP BW/4HANA?</h2>

          <p>
            SAP BW/4HANA is an enterprise data warehouse solution
            optimized for the SAP HANA database. It is used to collect,
            integrate, model, transform, and analyze business data.
          </p>

          <p>
            Organizations can bring data from SAP applications and
            external sources into a centralized analytical environment
            for reporting and decision-making.
          </p>

          <p>
            SAP BW/4HANA supports modern data modeling and integration
            approaches for enterprise analytics and can work with
            SAP Analytics Cloud and other analytical technologies.
          </p>

        </div>
      </section>

      {/* COMPONENTS */}
      <section className="bw-section bw-light">
        <div className="bw-container">

          <h2>Major SAP BW/4HANA Components</h2>

          <div className="bw-grid">

            <div className="bw-card">
              <h3>DataStore Objects</h3>
              <p>
                Used for storing and modeling data within BW/4HANA
                data warehouse scenarios.
              </p>
            </div>

            <div className="bw-card">
              <h3>CompositeProviders</h3>
              <p>
                Combine data from different providers into a unified
                analytical model.
              </p>
            </div>

            <div className="bw-card">
              <h3>Open ODS Views</h3>
              <p>
                Provide flexible access to external and other data
                sources without requiring traditional BW persistence.
              </p>
            </div>

            <div className="bw-card">
              <h3>BW Queries</h3>
              <p>
                Used to define analytical queries for reporting and
                business analysis.
              </p>
            </div>

            <div className="bw-card">
              <h3>Data Transfer Processes</h3>
              <p>
                Support movement and loading of data between BW
                objects and data sources.
              </p>
            </div>

            <div className="bw-card">
              <h3>Transformations</h3>
              <p>
                Define rules for transforming and mapping source data
                into target data structures.
              </p>
            </div>

            <div className="bw-card">
              <h3>Process Chains</h3>
              <p>
                Automate and schedule data loading, processing, and
                other BW operational activities.
              </p>
            </div>

            <div className="bw-card">
              <h3>Data Sources</h3>
              <p>
                Connect BW/4HANA with SAP and non-SAP data sources
                for enterprise analytics.
              </p>
            </div>

            <div className="bw-card">
              <h3>SAP HANA</h3>
              <p>
                Provides the in-memory database foundation on which
                BW/4HANA is optimized to operate.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DATA FLOW */}
      <section className="bw-section">
        <div className="bw-container">

          <h2>SAP BW/4HANA Data Flow</h2>

          <div className="bw-flow">

            <div className="bw-flow-box">
              SAP & External<br />Data Sources
            </div>

            <span>→</span>

            <div className="bw-flow-box">
              Data Extraction
            </div>

            <span>→</span>

            <div className="bw-flow-box">
              Transformation
            </div>

            <span>→</span>

            <div className="bw-flow-box">
              BW/4HANA<br />Data Models
            </div>

            <span>→</span>

            <div className="bw-flow-box">
              Reporting &<br />Analytics
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="bw-section bw-light">
        <div className="bw-container">

          <h2>Important SAP BW/4HANA Processes</h2>

          <div className="bw-process-grid">

            <div className="bw-process">
              <h3>Data Extraction</h3>
              <p>
                Extract business data from SAP and external systems
                for analytical processing.
              </p>
            </div>

            <div className="bw-process">
              <h3>Data Transformation</h3>
              <p>
                Clean, map, transform, and prepare source information
                for analytical models.
              </p>
            </div>

            <div className="bw-process">
              <h3>Data Loading</h3>
              <p>
                Load transformed information into BW/4HANA targets
                for reporting and analysis.
              </p>
            </div>

            <div className="bw-process">
              <h3>Data Modeling</h3>
              <p>
                Build analytical models using BW/4HANA modeling
                objects and providers.
              </p>
            </div>

            <div className="bw-process">
              <h3>Reporting</h3>
              <p>
                Provide business users with analytical queries and
                reporting capabilities.
              </p>
            </div>

            <div className="bw-process">
              <h3>Process Chain Scheduling</h3>
              <p>
                Automate recurring data loading and processing
                activities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="bw-section">
        <div className="bw-container">

          <h2>SAP BW/4HANA Integration</h2>

          <div className="bw-integration-grid">

            <div className="bw-integration-card">
              <h3>BW/4HANA + SAP S/4HANA</h3>
              <p>
                Enterprise data from S/4HANA can be integrated into
                BW/4HANA for analytical reporting.
              </p>
            </div>

            <div className="bw-integration-card">
              <h3>BW/4HANA + SAP HANA</h3>
              <p>
                BW/4HANA is optimized for SAP HANA and its
                in-memory processing capabilities.
              </p>
            </div>

            <div className="bw-integration-card">
              <h3>BW/4HANA + SAP Analytics Cloud</h3>
              <p>
                Analytical models can support dashboards, reports,
                and analytics scenarios using SAP Analytics Cloud.
              </p>
            </div>

            <div className="bw-integration-card">
              <h3>BW/4HANA + SAP ERP</h3>
              <p>
                Data from SAP ERP systems can be integrated into the
                enterprise data warehouse.
              </p>
            </div>

            <div className="bw-integration-card">
              <h3>BW/4HANA + External Databases</h3>
              <p>
                Organizations can integrate relevant external data
                sources into their analytical landscape.
              </p>
            </div>

            <div className="bw-integration-card">
              <h3>BW/4HANA + Cloud Data</h3>
              <p>
                Modern data landscapes can combine BW/4HANA with
                cloud-based data and analytics technologies.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DARK */}
      <section className="bw-dark">
        <div className="bw-container">

          <h2>Enterprise Analytics With SAP BW/4HANA</h2>

          <p>
            SAP BW/4HANA provides a centralized analytical foundation
            where organizations can integrate business information
            from multiple sources.
          </p>

          <p>
            It helps organizations create standardized data models,
            automate data processing, and provide reliable information
            for business reporting and decision-making.
          </p>

          <div className="bw-feature-grid">
            <div>Data Warehousing</div>
            <div>Data Integration</div>
            <div>Data Modeling</div>
            <div>Business Intelligence</div>
            <div>Enterprise Reporting</div>
            <div>Data Transformation</div>
            <div>Process Chains</div>
            <div>Analytics</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bw-section" id="bw-services">
        <div className="bw-container">

          <h2>SAP BW/4HANA Services</h2>

          <div className="bw-service-grid">

            <div className="bw-service-card">
              <h3>SAP BW/4HANA Implementation</h3>
              <p>
                Implementation of BW/4HANA data warehouse solutions,
                data models, data flows, reporting, testing, and
                deployment.
              </p>
            </div>

            <div className="bw-service-card">
              <h3>SAP BW/4HANA Configuration</h3>
              <p>
                Configuration of data sources, transformations,
                providers, queries, process chains, and related
                analytical components.
              </p>
            </div>

            <div className="bw-service-card">
              <h3>SAP BW/4HANA Support</h3>
              <p>
                Production support, monitoring, troubleshooting,
                performance analysis, and issue resolution.
              </p>
            </div>

            <div className="bw-service-card">
              <h3>SAP BW/4HANA Migration</h3>
              <p>
                Migration and modernization of existing SAP BW
                environments toward BW/4HANA.
              </p>
            </div>

            <div className="bw-service-card">
              <h3>SAP BW/4HANA Integration</h3>
              <p>
                Integration with SAP S/4HANA, SAP HANA, SAP Analytics
                Cloud, and external enterprise data sources.
              </p>
            </div>

            <div className="bw-service-card">
              <h3>SAP BW/4HANA Consulting</h3>
              <p>
                Data warehouse architecture, modeling, optimization,
                reporting, integration, and analytics consulting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bw-section bw-light">
        <div className="bw-container">

          <h2>Benefits of SAP BW/4HANA</h2>

          <ul className="bw-benefits">
            <li>Centralized enterprise data warehouse</li>
            <li>Improved data integration</li>
            <li>Faster analytical processing</li>
            <li>Modern data modeling</li>
            <li>Automated data loading</li>
            <li>Better reporting capabilities</li>
            <li>Improved data visibility</li>
            <li>Integration with SAP applications</li>
            <li>Support for enterprise analytics</li>
            <li>Better business decision-making</li>
          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="bw-section">
        <div className="bw-container">

          <h2>Frequently Asked Questions About SAP BW/4HANA</h2>

          <div className="bw-faq">

            <details>
              <summary>What is SAP BW/4HANA?</summary>
              <p>
                SAP BW/4HANA is an enterprise data warehouse platform
                optimized for SAP HANA and used for data integration,
                modeling, reporting, and analytics.
              </p>
            </details>

            <details>
              <summary>What is a CompositeProvider?</summary>
              <p>
                A CompositeProvider combines data from multiple
                providers into a unified analytical model.
              </p>
            </details>

            <details>
              <summary>What are Process Chains?</summary>
              <p>
                Process Chains automate and schedule data loading,
                processing, and other BW operational activities.
              </p>
            </details>

            <details>
              <summary>Can BW/4HANA integrate with S/4HANA?</summary>
              <p>
                Yes. BW/4HANA can integrate with SAP S/4HANA and
                other SAP and non-SAP data sources.
              </p>
            </details>

            <details>
              <summary>What is SAP BW used for?</summary>
              <p>
                SAP BW is used to consolidate enterprise data and
                provide structured reporting and analytics for
                business users.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="bw-contact" id="bw-contact">
        <div className="bw-container">

          <h2>Need SAP BW/4HANA Implementation or Support?</h2>

          <p>
            Contact us for SAP BW/4HANA implementation, configuration,
            migration, integration, support, and consulting requirements.
          </p>

          <div className="bw-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="bw-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="bw-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SAPBW4HANA;