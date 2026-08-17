import React from "react";
import "./SAPGTS.css";

const SAPGTS = () => {
  return (
    <div className="sap-gts-page">

      {/* HERO */}
      <section className="gts-hero">
        <div className="gts-container">

          <span className="gts-badge">
            SAP GLOBAL TRADE SERVICES
          </span>

          <h1>SAP GTS – Global Trade Services</h1>

          <p className="gts-hero-text">
            SAP GTS helps organizations manage international trade,
            import and export compliance, trade documentation, customs
            processes, sanctioned-party screening, and global trade
            requirements.
          </p>

          <div className="gts-buttons">
            <a href="#gts-services" className="gts-primary-btn">
              SAP GTS Services
            </a>

            <a href="#gts-contact" className="gts-secondary-btn">
              Contact SAP Expert
            </a>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="gts-section">
        <div className="gts-container">

          <h2>What is SAP GTS?</h2>

          <p>
            SAP GTS stands for SAP Global Trade Services. It helps
            organizations manage global trade processes and comply with
            applicable international trade regulations.
          </p>

          <p>
            SAP GTS can support import and export processes, trade
            compliance, customs management, embargo checks, and
            sanctioned-party screening.
          </p>

          <p>
            SAP GTS can integrate with SAP S/4HANA and other enterprise
            systems to exchange business partner, product, order,
            delivery, and trade-related information.
          </p>

        </div>
      </section>

      {/* COMPONENTS */}
      <section className="gts-section gts-light">
        <div className="gts-container">

          <h2>Major SAP GTS Components</h2>

          <div className="gts-grid">

            <div className="gts-card">
              <h3>Compliance Management</h3>
              <p>
                Supports trade compliance processes such as sanctioned
                party screening, embargo checks, and legal control.
              </p>
            </div>

            <div className="gts-card">
              <h3>Customs Management</h3>
              <p>
                Helps organizations manage customs-related processes,
                declarations, and trade documentation.
              </p>
            </div>

            <div className="gts-card">
              <h3>Trade Classification</h3>
              <p>
                Supports classification of products according to
                applicable customs and trade requirements.
              </p>
            </div>

            <div className="gts-card">
              <h3>Sanctioned Party Screening</h3>
              <p>
                Supports screening of business partners against
                relevant sanctioned-party lists.
              </p>
            </div>

            <div className="gts-card">
              <h3>Embargo Management</h3>
              <p>
                Helps organizations check transactions against
                applicable embargo restrictions.
              </p>
            </div>

            <div className="gts-card">
              <h3>Legal Control</h3>
              <p>
                Supports export-control processes and determination of
                whether specific trade transactions require controls.
              </p>
            </div>

            <div className="gts-card">
              <h3>Import Management</h3>
              <p>
                Helps manage import-related trade and customs processes
                within the global supply chain.
              </p>
            </div>

            <div className="gts-card">
              <h3>Export Management</h3>
              <p>
                Supports export compliance and documentation processes
                for international shipments.
              </p>
            </div>

            <div className="gts-card">
              <h3>Trade Documentation</h3>
              <p>
                Supports generation and management of documents required
                for international trade processes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="gts-section">
        <div className="gts-container">

          <h2>Important SAP GTS Business Processes</h2>

          <div className="gts-process-grid">

            <div className="gts-process">
              <h3>Export Compliance</h3>
              <p>
                Checks export transactions against configured trade
                compliance requirements before execution.
              </p>
            </div>

            <div className="gts-process">
              <h3>Import Compliance</h3>
              <p>
                Supports import-related compliance and customs processes
                for international shipments.
              </p>
            </div>

            <div className="gts-process">
              <h3>Sanctioned Party Screening</h3>
              <p>
                Screens relevant business partners and transactions
                against applicable restricted-party information.
              </p>
            </div>

            <div className="gts-process">
              <h3>Embargo Check</h3>
              <p>
                Helps determine whether a transaction is affected by
                applicable country or regional restrictions.
              </p>
            </div>

            <div className="gts-process">
              <h3>Product Classification</h3>
              <p>
                Supports classification of products for international
                trade and customs requirements.
              </p>
            </div>

            <div className="gts-process">
              <h3>Customs Declaration</h3>
              <p>
                Supports customs-related declaration and documentation
                processes for international movements.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRANSACTIONS */}
      <section className="gts-section gts-light">
        <div className="gts-container">

          <h2>Common SAP GTS Transactions & Tools</h2>

          <div className="gts-transactions">

            <div>
              <span>/SAPSLL/SPL_CHECK</span>
              <p>Partner Screening</p>
            </div>

            <div>
              <span>/SAPSLL/CLSNR</span>
              <p>Classification-Related Processing</p>
            </div>

            <div>
              <span>/SAPSLL/CD</span>
              <p>Customs Documents</p>
            </div>

            <div>
              <span>/SAPSLL/LEGAL</span>
              <p>Legal Control Processing</p>
            </div>

            <div>
              <span>/SAPSLL/EMBARGO</span>
              <p>Embargo Processing</p>
            </div>

            <div>
              <span>/SAPSLL/PR</span>
              <p>Product-Related Processing</p>
            </div>

          </div>

          <p className="gts-note">
            Transaction names and availability can vary by SAP GTS
            release, edition, deployment, and system configuration.
          </p>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="gts-section">
        <div className="gts-container">

          <h2>SAP GTS Integration With Other Modules</h2>

          <div className="gts-integration-grid">

            <div className="gts-integration-card">
              <h3>GTS + SD</h3>
              <p>
                Supports export compliance checks associated with sales
                orders, deliveries, and international shipments.
              </p>
            </div>

            <div className="gts-integration-card">
              <h3>GTS + MM</h3>
              <p>
                Supports trade compliance for procurement and
                import-related material processes.
              </p>
            </div>

            <div className="gts-integration-card">
              <h3>GTS + TM</h3>
              <p>
                Global trade compliance can interact with transportation
                processes for international logistics.
              </p>
            </div>

            <div className="gts-integration-card">
              <h3>GTS + EWM</h3>
              <p>
                Trade processes can integrate with warehouse and
                logistics execution activities.
              </p>
            </div>

            <div className="gts-integration-card">
              <h3>GTS + S/4HANA</h3>
              <p>
                SAP GTS can integrate with SAP S/4HANA business
                processes in global trade scenarios.
              </p>
            </div>

            <div className="gts-integration-card">
              <h3>GTS + Business Partners</h3>
              <p>
                Business partner information can be used for trade
                compliance and sanctioned-party screening.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DARK */}
      <section className="gts-dark">
        <div className="gts-container">

          <h2>SAP GTS for Global Trade Compliance</h2>

          <p>
            SAP GTS helps organizations establish controlled and
            standardized processes for international trade compliance.
          </p>

          <p>
            By connecting trade compliance with business transactions,
            organizations can identify potential trade restrictions
            before goods are moved across borders.
          </p>

          <div className="gts-feature-grid">

            <div>Trade Compliance</div>
            <div>Sanctioned Party Screening</div>
            <div>Embargo Management</div>
            <div>Legal Control</div>
            <div>Product Classification</div>
            <div>Customs Management</div>
            <div>Import Compliance</div>
            <div>Export Compliance</div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="gts-section" id="gts-services">
        <div className="gts-container">

          <h2>SAP GTS Services</h2>

          <div className="gts-service-grid">

            <div className="gts-service-card">
              <h3>SAP GTS Implementation</h3>
              <p>
                SAP GTS implementation covering compliance, customs,
                classification, screening, configuration, testing,
                and deployment.
              </p>
            </div>

            <div className="gts-service-card">
              <h3>SAP GTS Configuration</h3>
              <p>
                Configuration of trade compliance, legal control,
                screening, customs, and classification processes.
              </p>
            </div>

            <div className="gts-service-card">
              <h3>SAP GTS Support</h3>
              <p>
                Production support, troubleshooting, monitoring,
                incident resolution, and ongoing SAP GTS maintenance.
              </p>
            </div>

            <div className="gts-service-card">
              <h3>SAP GTS Integration</h3>
              <p>
                Integration with SAP S/4HANA, SD, MM, TM, EWM,
                and other enterprise systems.
              </p>
            </div>

            <div className="gts-service-card">
              <h3>SAP GTS Migration</h3>
              <p>
                Assistance with global trade transformation and
                migration projects.
              </p>
            </div>

            <div className="gts-service-card">
              <h3>SAP GTS Consulting</h3>
              <p>
                Trade process analysis, compliance solution design,
                optimization, configuration, and consulting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="gts-section gts-light">
        <div className="gts-container">

          <h2>Benefits of SAP GTS</h2>

          <ul className="gts-benefits">

            <li>Improved global trade compliance</li>
            <li>Better export control</li>
            <li>Improved import management</li>
            <li>Automated partner screening</li>
            <li>Better embargo checking</li>
            <li>Improved product classification</li>
            <li>Better customs process management</li>
            <li>Reduced compliance risks</li>
            <li>Improved trade visibility</li>
            <li>Better international logistics coordination</li>

          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="gts-section">
        <div className="gts-container">

          <h2>Frequently Asked Questions About SAP GTS</h2>

          <div className="gts-faq">

            <details>
              <summary>What is SAP GTS?</summary>
              <p>
                SAP GTS is a global trade solution that supports
                international trade compliance, customs, and
                import/export processes.
              </p>
            </details>

            <details>
              <summary>What is sanctioned party screening?</summary>
              <p>
                It is a compliance process used to check relevant
                business partners against applicable restricted-party
                information.
              </p>
            </details>

            <details>
              <summary>What is legal control in SAP GTS?</summary>
              <p>
                Legal control supports export-control processes and
                helps determine whether transactions are subject to
                configured legal restrictions.
              </p>
            </details>

            <details>
              <summary>Does SAP GTS integrate with SAP S/4HANA?</summary>
              <p>
                Yes. SAP GTS can integrate with SAP S/4HANA and other
                enterprise systems depending on the solution landscape.
              </p>
            </details>

            <details>
              <summary>Which companies use SAP GTS?</summary>
              <p>
                SAP GTS is particularly relevant to organizations
                involved in international trade, importing, exporting,
                manufacturing, distribution, and global supply chains.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="gts-contact" id="gts-contact">

        <div className="gts-container">

          <h2>Need SAP GTS Implementation or Support?</h2>

          <p>
            Contact us for SAP GTS implementation, configuration,
            integration, migration, support, and consulting requirements.
          </p>

          <div className="gts-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="gts-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="gts-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SAPGTS;