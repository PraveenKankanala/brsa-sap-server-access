import React from "react";
import "./SAPPP.css";

const SAPPP = () => {
  return (
    <div className="sap-pp-page">

      {/* HERO */}
      <section className="pp-hero">
        <div className="pp-container">
          <span className="pp-badge">SAP PRODUCTION PLANNING</span>

          <h1>SAP PP – Production Planning</h1>

          <p className="pp-hero-text">
            SAP PP helps manufacturing organizations plan production,
            manage materials, schedule operations, monitor production orders,
            and control manufacturing processes.
          </p>

          <div className="pp-buttons">
            <a href="#pp-services" className="pp-primary-btn">
              SAP PP Services
            </a>

            <a href="#pp-contact" className="pp-secondary-btn">
              Contact SAP Expert
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="pp-section">
        <div className="pp-container">

          <h2>What is SAP PP?</h2>

          <p>
            SAP PP stands for Production Planning. It is an SAP module
            designed to support manufacturing organizations in planning,
            scheduling, executing, and monitoring production activities.
          </p>

          <p>
            SAP PP helps organizations determine what needs to be produced,
            how much needs to be produced, when production should take place,
            and what materials and resources are required.
          </p>

          <p>
            SAP PP integrates closely with SAP MM, SD, CO, QM, PM, EWM,
            and other SAP business processes.
          </p>

        </div>
      </section>

      {/* COMPONENTS */}
      <section className="pp-section pp-light">
        <div className="pp-container">

          <h2>Major SAP PP Components</h2>

          <div className="pp-grid">

            <div className="pp-card">
              <h3>Production Planning</h3>
              <p>
                Supports production planning based on demand, available
                materials, capacity, and manufacturing requirements.
              </p>
            </div>

            <div className="pp-card">
              <h3>Material Requirements Planning</h3>
              <p>
                Helps determine material requirements and supports planning
                of procurement and production activities.
              </p>
            </div>

            <div className="pp-card">
              <h3>Bill of Materials</h3>
              <p>
                Defines the components and materials required to manufacture
                a finished or semi-finished product.
              </p>
            </div>

            <div className="pp-card">
              <h3>Work Centers</h3>
              <p>
                Represents production resources and work locations used to
                perform manufacturing operations.
              </p>
            </div>

            <div className="pp-card">
              <h3>Routing</h3>
              <p>
                Defines the sequence of operations required to manufacture
                a product.
              </p>
            </div>

            <div className="pp-card">
              <h3>Production Orders</h3>
              <p>
                Controls and monitors production execution, component
                consumption, operations, confirmations, and completion.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="pp-section">
        <div className="pp-container">

          <h2>Important SAP PP Business Processes</h2>

          <div className="pp-process-grid">

            <div className="pp-process">
              <h3>Demand Management</h3>
              <p>
                Supports planning of expected product demand using planned
                independent requirements and related planning processes.
              </p>
            </div>

            <div className="pp-process">
              <h3>MRP</h3>
              <p>
                Material Requirements Planning determines material and
                procurement requirements based on demand and supply.
              </p>
            </div>

            <div className="pp-process">
              <h3>Production Order</h3>
              <p>
                Production orders control the execution of manufacturing
                activities and provide detailed production information.
              </p>
            </div>

            <div className="pp-process">
              <h3>Production Confirmation</h3>
              <p>
                Records production activities, operation confirmations,
                quantities, and relevant manufacturing information.
              </p>
            </div>

            <div className="pp-process">
              <h3>Goods Issue</h3>
              <p>
                Records the consumption of components and materials used
                during production.
              </p>
            </div>

            <div className="pp-process">
              <h3>Goods Receipt</h3>
              <p>
                Records the receipt of manufactured products into inventory.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IMPORTANT TRANSACTIONS */}
      <section className="pp-section pp-light">

        <div className="pp-container">

          <h2>Important SAP PP Transactions</h2>

          <div className="pp-transactions">

            <div>
              <span>MD01</span>
              <p>MRP Run</p>
            </div>

            <div>
              <span>MD02</span>
              <p>MRP Run for Single Material</p>
            </div>

            <div>
              <span>MD04</span>
              <p>Stock / Requirements List</p>
            </div>

            <div>
              <span>MD61</span>
              <p>Create Planned Independent Requirements</p>
            </div>

            <div>
              <span>CS01</span>
              <p>Create Bill of Material</p>
            </div>

            <div>
              <span>CS02</span>
              <p>Change Bill of Material</p>
            </div>

            <div>
              <span>CS03</span>
              <p>Display Bill of Material</p>
            </div>

            <div>
              <span>CR01</span>
              <p>Create Work Center</p>
            </div>

            <div>
              <span>CA01</span>
              <p>Create Routing</p>
            </div>

            <div>
              <span>CO01</span>
              <p>Create Production Order</p>
            </div>

            <div>
              <span>CO02</span>
              <p>Change Production Order</p>
            </div>

            <div>
              <span>CO03</span>
              <p>Display Production Order</p>
            </div>

          </div>

        </div>

      </section>

      {/* INTEGRATION */}
      <section className="pp-section">

        <div className="pp-container">

          <h2>SAP PP Integration With Other Modules</h2>

          <div className="pp-integration-grid">

            <div className="pp-integration-card">
              <h3>PP + MM</h3>
              <p>
                Production depends on materials, inventory, procurement,
                goods movements, and material availability.
              </p>
            </div>

            <div className="pp-integration-card">
              <h3>PP + SD</h3>
              <p>
                Sales demand and customer requirements can influence
                production planning and manufacturing activities.
              </p>
            </div>

            <div className="pp-integration-card">
              <h3>PP + CO</h3>
              <p>
                Production activities can generate cost information used
                for controlling and product cost analysis.
              </p>
            </div>

            <div className="pp-integration-card">
              <h3>PP + QM</h3>
              <p>
                Quality inspection processes can be integrated with
                manufacturing and production activities.
              </p>
            </div>

            <div className="pp-integration-card">
              <h3>PP + PM</h3>
              <p>
                Production resources and equipment can interact with plant
                maintenance processes.
              </p>
            </div>

            <div className="pp-integration-card">
              <h3>PP + EWM</h3>
              <p>
                Warehouse processes can support component staging,
                consumption, and finished goods handling.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* S4HANA */}
      <section className="pp-dark">

        <div className="pp-container">

          <h2>SAP PP in S/4HANA</h2>

          <p>
            SAP S/4HANA provides modern production planning and manufacturing
            capabilities that help organizations manage production,
            materials, capacity, and manufacturing execution.
          </p>

          <p>
            Organizations can use integrated planning information and
            real-time data to improve production visibility and manufacturing
            decision-making.
          </p>

          <div className="pp-feature-grid">

            <div>MRP</div>
            <div>Production Planning</div>
            <div>Production Orders</div>
            <div>Bill of Materials</div>
            <div>Work Centers</div>
            <div>Routings</div>
            <div>Capacity Planning</div>
            <div>Production Analytics</div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="pp-section" id="pp-services">

        <div className="pp-container">

          <h2>SAP PP Services</h2>

          <div className="pp-service-grid">

            <div className="pp-service-card">
              <h3>SAP PP Implementation</h3>
              <p>
                SAP PP implementation covering production planning,
                manufacturing processes, MRP, production orders,
                configuration, testing, and deployment.
              </p>
            </div>

            <div className="pp-service-card">
              <h3>SAP PP Configuration</h3>
              <p>
                Configuration of MRP, production orders, BOMs, routings,
                work centers, scheduling, and related PP processes.
              </p>
            </div>

            <div className="pp-service-card">
              <h3>SAP PP Support</h3>
              <p>
                Production support, troubleshooting, issue resolution,
                monitoring, and ongoing SAP PP maintenance.
              </p>
            </div>

            <div className="pp-service-card">
              <h3>SAP PP Migration</h3>
              <p>
                Assistance with production planning and manufacturing
                transformation during migration to SAP S/4HANA.
              </p>
            </div>

            <div className="pp-service-card">
              <h3>SAP PP Integration</h3>
              <p>
                Integration of SAP PP with MM, SD, CO, QM, PM, EWM,
                and other business processes.
              </p>
            </div>

            <div className="pp-service-card">
              <h3>SAP PP Consulting</h3>
              <p>
                Manufacturing process analysis, solution design,
                optimization, and SAP PP consulting services.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="pp-section pp-light">

        <div className="pp-container">

          <h2>Benefits of SAP PP</h2>

          <ul className="pp-benefits">

            <li>Improved production planning</li>
            <li>Better material availability</li>
            <li>Efficient MRP processes</li>
            <li>Improved production scheduling</li>
            <li>Better manufacturing visibility</li>
            <li>Integrated inventory and production processes</li>
            <li>Improved capacity planning</li>
            <li>Better production cost visibility</li>
            <li>Improved manufacturing control</li>
            <li>Real-time information in S/4HANA</li>

          </ul>

        </div>

      </section>

      {/* FAQ */}
      <section className="pp-section">

        <div className="pp-container">

          <h2>Frequently Asked Questions About SAP PP</h2>

          <div className="pp-faq">

            <details>
              <summary>What is SAP PP?</summary>
              <p>
                SAP PP is the Production Planning module used to plan,
                schedule, execute, and monitor manufacturing activities.
              </p>
            </details>

            <details>
              <summary>What are the main components of SAP PP?</summary>
              <p>
                Major areas include MRP, demand management, BOM,
                work centers, routings, production orders, and production
                execution.
              </p>
            </details>

            <details>
              <summary>What is MRP in SAP PP?</summary>
              <p>
                MRP, or Material Requirements Planning, helps determine
                material requirements based on demand, supply, inventory,
                and planning parameters.
              </p>
            </details>

            <details>
              <summary>Does SAP PP integrate with SAP MM?</summary>
              <p>
                Yes. SAP PP and SAP MM are closely integrated for materials,
                procurement, inventory, and production-related processes.
              </p>
            </details>

            <details>
              <summary>Is SAP PP available in SAP S/4HANA?</summary>
              <p>
                Yes. Production planning and manufacturing capabilities are
                available in SAP S/4HANA.
              </p>
            </details>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="pp-contact" id="pp-contact">

        <div className="pp-container">

          <h2>Need SAP PP Implementation or Support?</h2>

          <p>
            Contact us for SAP PP implementation, configuration, integration,
            migration, support, and consulting requirements.
          </p>

          <div className="pp-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="pp-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="pp-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SAPPP;