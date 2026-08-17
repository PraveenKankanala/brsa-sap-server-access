import React from "react";
import "./SAPQM.css";

const SAPQM = () => {
  return (
    <div className="sap-qm-page">

      {/* HERO */}
      <section className="qm-hero">
        <div className="qm-container">
          <span className="qm-badge">SAP QUALITY MANAGEMENT</span>

          <h1>SAP QM – Quality Management</h1>

          <p className="qm-hero-text">
            SAP QM helps organizations plan, inspect, control, and improve
            product and process quality across procurement, manufacturing,
            inventory, and customer delivery processes.
          </p>

          <div className="qm-buttons">
            <a href="#qm-services" className="qm-primary-btn">
              SAP QM Services
            </a>

            <a href="#qm-contact" className="qm-secondary-btn">
              Contact SAP Expert
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="qm-section">
        <div className="qm-container">

          <h2>What is SAP QM?</h2>

          <p>
            SAP QM stands for Quality Management. It supports organizations
            in managing quality planning, quality inspections, quality
            control, quality notifications, and corrective actions.
          </p>

          <p>
            SAP QM can be used throughout the supply chain, including
            incoming material inspections, in-process inspections,
            production-related quality activities, and customer returns.
          </p>

          <p>
            SAP QM integrates closely with SAP MM, PP, SD, EWM, PM, and
            other SAP business processes.
          </p>

        </div>
      </section>

      {/* COMPONENTS */}
      <section className="qm-section qm-light">
        <div className="qm-container">

          <h2>Major SAP QM Components</h2>

          <div className="qm-grid">

            <div className="qm-card">
              <h3>Quality Planning</h3>
              <p>
                Defines inspection requirements, characteristics, methods,
                plans, and quality specifications.
              </p>
            </div>

            <div className="qm-card">
              <h3>Quality Inspection</h3>
              <p>
                Supports inspection of materials, products, and processes
                against predefined quality requirements.
              </p>
            </div>

            <div className="qm-card">
              <h3>Quality Control</h3>
              <p>
                Helps organizations identify quality issues and manage
                actions required to maintain quality standards.
              </p>
            </div>

            <div className="qm-card">
              <h3>Quality Notifications</h3>
              <p>
                Records and manages quality problems, defects, complaints,
                and corrective actions.
              </p>
            </div>

            <div className="qm-card">
              <h3>Inspection Plans</h3>
              <p>
                Defines inspection operations and characteristics used
                during quality inspections.
              </p>
            </div>

            <div className="qm-card">
              <h3>Quality Certificates</h3>
              <p>
                Supports quality-related documentation and communication
                of inspection results and product quality information.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="qm-section">
        <div className="qm-container">

          <h2>Important SAP QM Business Processes</h2>

          <div className="qm-process-grid">

            <div className="qm-process">
              <h3>Incoming Inspection</h3>
              <p>
                Quality inspection of materials received from suppliers
                before they are accepted for use.
              </p>
            </div>

            <div className="qm-process">
              <h3>In-Process Inspection</h3>
              <p>
                Quality checks performed during manufacturing to identify
                issues before the production process is completed.
              </p>
            </div>

            <div className="qm-process">
              <h3>Final Inspection</h3>
              <p>
                Inspection of finished products before they are released
                for further use or delivery.
              </p>
            </div>

            <div className="qm-process">
              <h3>Customer Complaint</h3>
              <p>
                Supports recording and processing quality complaints and
                customer-related quality issues.
              </p>
            </div>

            <div className="qm-process">
              <h3>Defect Recording</h3>
              <p>
                Helps record defects and quality problems discovered during
                inspection or production.
              </p>
            </div>

            <div className="qm-process">
              <h3>Corrective Action</h3>
              <p>
                Supports investigation and management of actions required
                to resolve recurring or significant quality problems.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRANSACTIONS */}
      <section className="qm-section qm-light">

        <div className="qm-container">

          <h2>Important SAP QM Transactions</h2>

          <div className="qm-transactions">

            <div>
              <span>QA01</span>
              <p>Create Inspection Lot</p>
            </div>

            <div>
              <span>QA02</span>
              <p>Change Inspection Lot</p>
            </div>

            <div>
              <span>QA03</span>
              <p>Display Inspection Lot</p>
            </div>

            <div>
              <span>QE01</span>
              <p>Record Inspection Results</p>
            </div>

            <div>
              <span>QE02</span>
              <p>Change Inspection Results</p>
            </div>

            <div>
              <span>QE03</span>
              <p>Display Inspection Results</p>
            </div>

            <div>
              <span>QA11</span>
              <p>Usage Decision</p>
            </div>

            <div>
              <span>QA32</span>
              <p>Change Inspection Lots</p>
            </div>

            <div>
              <span>QM01</span>
              <p>Create Quality Notification</p>
            </div>

            <div>
              <span>QM02</span>
              <p>Change Quality Notification</p>
            </div>

            <div>
              <span>QM03</span>
              <p>Display Quality Notification</p>
            </div>

            <div>
              <span>QP01</span>
              <p>Create Inspection Plan</p>
            </div>

          </div>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="qm-section">

        <div className="qm-container">

          <h2>SAP QM Integration With Other Modules</h2>

          <div className="qm-integration-grid">

            <div className="qm-integration-card">
              <h3>QM + MM</h3>
              <p>
                Supports quality inspection of purchased materials,
                goods receipts, supplier quality, and inventory processes.
              </p>
            </div>

            <div className="qm-integration-card">
              <h3>QM + PP</h3>
              <p>
                Integrates quality inspections with manufacturing and
                production processes.
              </p>
            </div>

            <div className="qm-integration-card">
              <h3>QM + SD</h3>
              <p>
                Supports customer complaints, returns, outbound quality
                processes, and customer-related quality activities.
              </p>
            </div>

            <div className="qm-integration-card">
              <h3>QM + EWM</h3>
              <p>
                Quality processes can interact with warehouse activities,
                stock handling, and inspection-related movements.
              </p>
            </div>

            <div className="qm-integration-card">
              <h3>QM + PM</h3>
              <p>
                Supports quality-related processes associated with
                maintenance and technical objects.
              </p>
            </div>

            <div className="qm-integration-card">
              <h3>QM + FI/CO</h3>
              <p>
                Quality-related activities can connect with financial and
                controlling processes where applicable.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* S4HANA */}
      <section className="qm-dark">

        <div className="qm-container">

          <h2>SAP QM in S/4HANA</h2>

          <p>
            SAP S/4HANA provides integrated quality management capabilities
            for procurement, manufacturing, logistics, and customer-related
            quality processes.
          </p>

          <p>
            Organizations can use integrated quality information to improve
            inspection processes, identify defects, manage quality issues,
            and support continuous improvement.
          </p>

          <div className="qm-feature-grid">
            <div>Quality Planning</div>
            <div>Inspection Management</div>
            <div>Inspection Results</div>
            <div>Usage Decisions</div>
            <div>Quality Notifications</div>
            <div>Defect Management</div>
            <div>Supplier Quality</div>
            <div>Customer Quality</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="qm-section" id="qm-services">

        <div className="qm-container">

          <h2>SAP QM Services</h2>

          <div className="qm-service-grid">

            <div className="qm-service-card">
              <h3>SAP QM Implementation</h3>
              <p>
                SAP QM implementation covering inspection processes,
                quality planning, notifications, configuration, testing,
                and deployment.
              </p>
            </div>

            <div className="qm-service-card">
              <h3>SAP QM Configuration</h3>
              <p>
                Configuration of inspection types, inspection plans,
                characteristics, quality notifications, and related
                processes.
              </p>
            </div>

            <div className="qm-service-card">
              <h3>SAP QM Support</h3>
              <p>
                Production support, troubleshooting, issue resolution,
                monitoring, and ongoing SAP QM maintenance.
              </p>
            </div>

            <div className="qm-service-card">
              <h3>SAP QM Migration</h3>
              <p>
                Assistance with quality management transformation and
                migration to SAP S/4HANA.
              </p>
            </div>

            <div className="qm-service-card">
              <h3>SAP QM Integration</h3>
              <p>
                Integration of SAP QM with MM, PP, SD, EWM, PM, FI,
                CO, and other business processes.
              </p>
            </div>

            <div className="qm-service-card">
              <h3>SAP QM Consulting</h3>
              <p>
                Quality process analysis, solution design, optimization,
                and SAP QM consulting services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="qm-section qm-light">

        <div className="qm-container">

          <h2>Benefits of SAP QM</h2>

          <ul className="qm-benefits">
            <li>Improved quality control</li>
            <li>Better inspection management</li>
            <li>Early identification of defects</li>
            <li>Improved supplier quality management</li>
            <li>Better production quality monitoring</li>
            <li>Improved customer complaint handling</li>
            <li>Centralized quality information</li>
            <li>Better corrective-action management</li>
            <li>Improved compliance and documentation</li>
            <li>Integrated quality processes</li>
          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="qm-section">

        <div className="qm-container">

          <h2>Frequently Asked Questions About SAP QM</h2>

          <div className="qm-faq">

            <details>
              <summary>What is SAP QM?</summary>
              <p>
                SAP QM is the Quality Management module used to manage
                quality planning, inspections, defects, notifications,
                and quality-related business processes.
              </p>
            </details>

            <details>
              <summary>What is an inspection lot?</summary>
              <p>
                An inspection lot represents a quantity or group of
                materials or products that is subject to a quality
                inspection.
              </p>
            </details>

            <details>
              <summary>What is a usage decision?</summary>
              <p>
                A usage decision records the decision made after an
                inspection regarding how the inspected material should
                be handled.
              </p>
            </details>

            <details>
              <summary>Does SAP QM integrate with SAP MM?</summary>
              <p>
                Yes. SAP QM integrates with procurement and inventory
                processes for activities such as incoming inspection.
              </p>
            </details>

            <details>
              <summary>Does SAP QM integrate with SAP PP?</summary>
              <p>
                Yes. SAP QM can integrate with manufacturing processes
                for in-process and production-related inspections.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="qm-contact" id="qm-contact">

        <div className="qm-container">

          <h2>Need SAP QM Implementation or Support?</h2>

          <p>
            Contact us for SAP QM implementation, configuration,
            integration, migration, support, and consulting requirements.
          </p>

          <div className="qm-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="qm-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="qm-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SAPQM;