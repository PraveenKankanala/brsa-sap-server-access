import React from "react";
import "./SAPTM.css";

const SAPTM = () => {
  return (
    <div className="sap-tm-page">

      {/* HERO */}
      <section className="tm-hero">
        <div className="tm-container">
          <span className="tm-badge">SAP TRANSPORTATION MANAGEMENT</span>

          <h1>SAP TM – Transportation Management</h1>

          <p className="tm-hero-text">
            SAP TM helps organizations plan, execute, monitor, and optimize
            transportation operations, freight management, carrier
            collaboration, transportation costs, and logistics processes.
          </p>

          <div className="tm-buttons">
            <a href="#tm-services" className="tm-primary-btn">
              SAP TM Services
            </a>

            <a href="#tm-contact" className="tm-secondary-btn">
              Contact SAP Expert
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="tm-section">
        <div className="tm-container">

          <h2>What is SAP TM?</h2>

          <p>
            SAP TM stands for SAP Transportation Management. It is used to
            manage transportation planning, execution, freight settlement,
            carrier management, and transportation visibility.
          </p>

          <p>
            SAP TM helps organizations optimize transportation resources,
            routes, loads, carriers, and freight costs while coordinating
            logistics activities across the supply chain.
          </p>

          <p>
            SAP TM can integrate with SAP S/4HANA, SAP EWM, SAP SD,
            SAP MM, SAP GTS, and other logistics processes.
          </p>

        </div>
      </section>

      {/* COMPONENTS */}
      <section className="tm-section tm-light">
        <div className="tm-container">

          <h2>Major SAP TM Components</h2>

          <div className="tm-grid">

            <div className="tm-card">
              <h3>Transportation Planning</h3>
              <p>
                Plans transportation requirements, routes, resources,
                loads, and transportation schedules.
              </p>
            </div>

            <div className="tm-card">
              <h3>Transportation Execution</h3>
              <p>
                Supports execution and monitoring of transportation
                activities from planning through delivery.
              </p>
            </div>

            <div className="tm-card">
              <h3>Freight Management</h3>
              <p>
                Helps manage freight orders, freight costs, charges,
                and transportation-related processes.
              </p>
            </div>

            <div className="tm-card">
              <h3>Carrier Management</h3>
              <p>
                Supports carrier selection, collaboration, communication,
                and transportation service management.
              </p>
            </div>

            <div className="tm-card">
              <h3>Route Optimization</h3>
              <p>
                Helps determine efficient transportation routes based on
                business requirements and available resources.
              </p>
            </div>

            <div className="tm-card">
              <h3>Freight Settlement</h3>
              <p>
                Supports calculation and settlement of transportation
                charges with carriers and service providers.
              </p>
            </div>

            <div className="tm-card">
              <h3>Transportation Cockpit</h3>
              <p>
                Provides planners with visibility and tools for managing
                transportation planning and execution.
              </p>
            </div>

            <div className="tm-card">
              <h3>Event Management</h3>
              <p>
                Supports visibility into transportation events and
                shipment execution status.
              </p>
            </div>

            <div className="tm-card">
              <h3>Transportation Analytics</h3>
              <p>
                Helps organizations analyze transportation costs,
                performance, utilization, and operational efficiency.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="tm-section">
        <div className="tm-container">

          <h2>Important SAP TM Business Processes</h2>

          <div className="tm-process-grid">

            <div className="tm-process">
              <h3>Transportation Requirement</h3>
              <p>
                Transportation requirements are created from business
                processes that require goods to be transported.
              </p>
            </div>

            <div className="tm-process">
              <h3>Transportation Planning</h3>
              <p>
                Plans transportation orders, routes, loads, resources,
                and carrier assignments.
              </p>
            </div>

            <div className="tm-process">
              <h3>Carrier Selection</h3>
              <p>
                Supports selection and assignment of suitable carriers
                based on transportation requirements.
              </p>
            </div>

            <div className="tm-process">
              <h3>Load Planning</h3>
              <p>
                Helps optimize vehicle utilization and determine how
                goods should be loaded and transported.
              </p>
            </div>

            <div className="tm-process">
              <h3>Transportation Execution</h3>
              <p>
                Monitors transportation execution and shipment progress
                through relevant logistics events.
              </p>
            </div>

            <div className="tm-process">
              <h3>Freight Settlement</h3>
              <p>
                Calculates and settles transportation charges according
                to configured freight agreements and conditions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRANSACTIONS */}
      <section className="tm-section tm-light">
        <div className="tm-container">

          <h2>Important SAP TM Transactions</h2>

          <div className="tm-transactions">

            <div>
              <span>/SCMTMS/TOR</span>
              <p>Transportation Order Processing</p>
            </div>

            <div>
              <span>/SCMTMS/PLN</span>
              <p>Transportation Planning</p>
            </div>

            <div>
              <span>/SCMTMS/EXEC</span>
              <p>Transportation Execution</p>
            </div>

            <div>
              <span>/SCMTMS/CUI</span>
              <p>Transportation Cockpit</p>
            </div>

            <div>
              <span>/SCMTMS/RES01</span>
              <p>Resource Management</p>
            </div>

            <div>
              <span>/SCMTMS/LOC3</span>
              <p>Location Management</p>
            </div>

            <div>
              <span>/SCMTMS/FRD</span>
              <p>Freight Document Processing</p>
            </div>

            <div>
              <span>/SCMTMS/MON</span>
              <p>Transportation Monitoring</p>
            </div>

          </div>

          <p className="tm-note">
            Transaction availability can vary by SAP TM deployment,
            release, and system configuration.
          </p>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="tm-section">
        <div className="tm-container">

          <h2>SAP TM Integration With Other Modules</h2>

          <div className="tm-integration-grid">

            <div className="tm-integration-card">
              <h3>TM + SD</h3>
              <p>
                Transportation processes can integrate with sales orders,
                deliveries, shipments, and outbound logistics.
              </p>
            </div>

            <div className="tm-integration-card">
              <h3>TM + MM</h3>
              <p>
                Transportation processes can integrate with procurement,
                inbound deliveries, and material movements.
              </p>
            </div>

            <div className="tm-integration-card">
              <h3>TM + EWM</h3>
              <p>
                Transportation and warehouse processes can work together
                for coordinated loading, shipping, and logistics execution.
              </p>
            </div>

            <div className="tm-integration-card">
              <h3>TM + FI</h3>
              <p>
                Transportation costs and settlement processes can connect
                with financial accounting processes.
              </p>
            </div>

            <div className="tm-integration-card">
              <h3>TM + S/4HANA</h3>
              <p>
                SAP TM can operate as part of an integrated S/4HANA
                logistics landscape.
              </p>
            </div>

            <div className="tm-integration-card">
              <h3>TM + GTS</h3>
              <p>
                Transportation activities can interact with global trade
                compliance processes where required.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* S4HANA */}
      <section className="tm-dark">
        <div className="tm-container">

          <h2>SAP TM in S/4HANA</h2>

          <p>
            SAP TM capabilities within the SAP S/4HANA environment support
            integrated transportation planning, execution, freight
            management, and logistics visibility.
          </p>

          <p>
            Organizations can use transportation data to improve route
            planning, carrier utilization, freight cost control, and
            overall supply-chain performance.
          </p>

          <div className="tm-feature-grid">
            <div>Transportation Planning</div>
            <div>Route Optimization</div>
            <div>Load Planning</div>
            <div>Carrier Management</div>
            <div>Transportation Execution</div>
            <div>Freight Management</div>
            <div>Freight Settlement</div>
            <div>Transportation Monitoring</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="tm-section" id="tm-services">
        <div className="tm-container">

          <h2>SAP TM Services</h2>

          <div className="tm-service-grid">

            <div className="tm-service-card">
              <h3>SAP TM Implementation</h3>
              <p>
                SAP TM implementation covering transportation planning,
                execution, freight management, carrier processes,
                configuration, testing, and deployment.
              </p>
            </div>

            <div className="tm-service-card">
              <h3>SAP TM Configuration</h3>
              <p>
                Configuration of transportation processes, planning,
                freight agreements, resources, routes, and execution.
              </p>
            </div>

            <div className="tm-service-card">
              <h3>SAP TM Support</h3>
              <p>
                Production support, troubleshooting, monitoring,
                incident resolution, and ongoing SAP TM maintenance.
              </p>
            </div>

            <div className="tm-service-card">
              <h3>SAP TM Integration</h3>
              <p>
                Integration with SAP SD, MM, EWM, FI, S/4HANA, GTS,
                and other logistics solutions.
              </p>
            </div>

            <div className="tm-service-card">
              <h3>SAP TM Migration</h3>
              <p>
                Assistance with transportation transformation and
                migration to modern SAP TM and S/4HANA environments.
              </p>
            </div>

            <div className="tm-service-card">
              <h3>SAP TM Consulting</h3>
              <p>
                Transportation process analysis, solution design,
                optimization, configuration, and SAP TM consulting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="tm-section tm-light">
        <div className="tm-container">

          <h2>Benefits of SAP TM</h2>

          <ul className="tm-benefits">
            <li>Improved transportation planning</li>
            <li>Better route optimization</li>
            <li>Improved vehicle utilization</li>
            <li>Better carrier management</li>
            <li>Reduced transportation costs</li>
            <li>Improved freight visibility</li>
            <li>Better transportation execution</li>
            <li>Improved logistics coordination</li>
            <li>Better freight settlement</li>
            <li>Improved supply-chain visibility</li>
          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="tm-section">
        <div className="tm-container">

          <h2>Frequently Asked Questions About SAP TM</h2>

          <div className="tm-faq">

            <details>
              <summary>What is SAP TM?</summary>
              <p>
                SAP TM is a transportation management solution used to
                plan, execute, monitor, and optimize transportation
                operations.
              </p>
            </details>

            <details>
              <summary>What is transportation planning?</summary>
              <p>
                Transportation planning determines how goods should be
                transported, including routes, loads, resources, and
                carrier assignments.
              </p>
            </details>

            <details>
              <summary>What is freight settlement?</summary>
              <p>
                Freight settlement supports the calculation and settlement
                of transportation charges with carriers and service
                providers.
              </p>
            </details>

            <details>
              <summary>Does SAP TM integrate with EWM?</summary>
              <p>
                Yes. SAP TM and SAP EWM can work together to coordinate
                transportation and warehouse execution processes.
              </p>
            </details>

            <details>
              <summary>Is SAP TM used with S/4HANA?</summary>
              <p>
                Yes. SAP TM capabilities are available within SAP
                S/4HANA-based logistics landscapes.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="tm-contact" id="tm-contact">
        <div className="tm-container">

          <h2>Need SAP TM Implementation or Support?</h2>

          <p>
            Contact us for SAP TM implementation, configuration,
            integration, migration, support, and consulting requirements.
          </p>

          <div className="tm-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="tm-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="tm-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SAPTM;