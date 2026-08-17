import React from "react";
import "./SAPFI.css";

const SAPFI = () => {
  return (
    <div className="sap-module-page">

      {/* HERO */}
      <section className="sap-hero">
        <div className="sap-container">
          <span className="sap-badge">SAP FINANCE</span>

          <h1>SAP FI – Financial Accounting</h1>

          <p className="hero-subtitle">
            SAP FI (Financial Accounting) is a core SAP ERP and SAP S/4HANA
            Finance module used to manage financial transactions, accounting,
            reporting, and statutory financial processes.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-btn">
              SAP FI Services
            </a>

            <a href="#contact" className="secondary-btn">
              Contact SAP Expert
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="sap-section">
        <div className="sap-container">
          <h2>What is SAP FI?</h2>

          <p>
            SAP FI stands for SAP Financial Accounting. It is one of the most
            important SAP modules for organizations that need to manage their
            financial accounting operations in an integrated ERP environment.
          </p>

          <p>
            SAP FI helps companies record, process, monitor, and report
            financial transactions. It integrates financial information with
            other SAP business processes such as Materials Management,
            Sales and Distribution, Production Planning, Controlling, and
            Asset Management.
          </p>

          <p>
            In SAP S/4HANA, financial accounting capabilities are provided
            through SAP S/4HANA Finance, offering real-time financial
            processing and reporting.
          </p>
        </div>
      </section>

      {/* MAIN COMPONENTS */}
      <section className="sap-section light-section">
        <div className="sap-container">

          <h2>Major SAP FI Components</h2>

          <div className="module-grid">

            <div className="module-card">
              <h3>General Ledger (FI-GL)</h3>
              <p>
                Manages the company's general ledger accounts and provides the
                foundation for financial accounting and reporting.
              </p>
            </div>

            <div className="module-card">
              <h3>Accounts Payable (FI-AP)</h3>
              <p>
                Handles vendor invoices, vendor payments, outstanding
                liabilities, and supplier-related financial transactions.
              </p>
            </div>

            <div className="module-card">
              <h3>Accounts Receivable (FI-AR)</h3>
              <p>
                Manages customer invoices, incoming payments, receivables,
                credit-related processes, and customer account balances.
              </p>
            </div>

            <div className="module-card">
              <h3>Asset Accounting (FI-AA)</h3>
              <p>
                Used to manage company assets including acquisition,
                depreciation, transfers, retirement, and asset reporting.
              </p>
            </div>

            <div className="module-card">
              <h3>Bank Accounting</h3>
              <p>
                Supports bank-related financial transactions, bank accounts,
                statements, and reconciliation processes.
              </p>
            </div>

            <div className="module-card">
              <h3>Tax Accounting</h3>
              <p>
                Supports tax calculation, tax codes, tax reporting, and
                financial transactions involving applicable taxes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="sap-section">
        <div className="sap-container">

          <h2>Important SAP FI Business Processes</h2>

          <div className="process-list">

            <div>
              <strong>Record to Report (R2R)</strong>
              <p>
                Recording financial transactions, period closing, financial
                statements, and reporting.
              </p>
            </div>

            <div>
              <strong>Accounts Payable</strong>
              <p>
                Vendor invoice processing, payment processing, and liability
                management.
              </p>
            </div>

            <div>
              <strong>Accounts Receivable</strong>
              <p>
                Customer billing, incoming payments, receivables monitoring,
                and collections.
              </p>
            </div>

            <div>
              <strong>Asset Lifecycle Management</strong>
              <p>
                Asset acquisition, capitalization, depreciation, transfer,
                and retirement.
              </p>
            </div>

            <div>
              <strong>Financial Closing</strong>
              <p>
                Month-end, quarter-end, and year-end closing activities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* IMPORTANT TRANSACTIONS */}
      <section className="sap-section light-section">
        <div className="sap-container">

          <h2>Important SAP FI Transactions</h2>

          <div className="transaction-grid">

            <div>
              <span>FB50</span>
              <p>Enter G/L Account Document</p>
            </div>

            <div>
              <span>FB60</span>
              <p>Enter Vendor Invoice</p>
            </div>

            <div>
              <span>FB70</span>
              <p>Enter Customer Invoice</p>
            </div>

            <div>
              <span>F-53</span>
              <p>Post Outgoing Payment</p>
            </div>

            <div>
              <span>F-28</span>
              <p>Post Incoming Payment</p>
            </div>

            <div>
              <span>FBL1N</span>
              <p>Vendor Line Items</p>
            </div>

            <div>
              <span>FBL5N</span>
              <p>Customer Line Items</p>
            </div>

            <div>
              <span>FAGLL03</span>
              <p>G/L Account Line Items</p>
            </div>

            <div>
              <span>FS00</span>
              <p>G/L Account Master Data</p>
            </div>

            <div>
              <span>AS01</span>
              <p>Create Asset Master</p>
            </div>

          </div>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="sap-section">
        <div className="sap-container">

          <h2>SAP FI Integration With Other Modules</h2>

          <div className="integration-grid">

            <div className="integration-card">
              <h3>FI + MM</h3>
              <p>
                Procurement and inventory transactions can generate
                corresponding financial postings.
              </p>
            </div>

            <div className="integration-card">
              <h3>FI + SD</h3>
              <p>
                Sales and billing transactions can create accounting documents
                in Financial Accounting.
              </p>
            </div>

            <div className="integration-card">
              <h3>FI + CO</h3>
              <p>
                Financial Accounting and Controlling work together to provide
                financial and management accounting information.
              </p>
            </div>

            <div className="integration-card">
              <h3>FI + PP</h3>
              <p>
                Production activities can integrate with financial and
                controlling processes.
              </p>
            </div>

            <div className="integration-card">
              <h3>FI + PM</h3>
              <p>
                Maintenance-related activities can integrate with financial
                and controlling processes.
              </p>
            </div>

            <div className="integration-card">
              <h3>FI + EWM</h3>
              <p>
                Warehouse and inventory movements can integrate with
                financial processes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* S4HANA */}
      <section className="sap-section dark-section">
        <div className="sap-container">

          <h2>SAP FI in S/4HANA</h2>

          <p>
            SAP S/4HANA Finance provides modern financial management
            capabilities on the SAP HANA platform.
          </p>

          <p>
            Organizations can use real-time financial information,
            integrated accounting processes, simplified data structures,
            and modern financial reporting capabilities.
          </p>

          <div className="feature-grid">

            <div>Real-Time Financial Processing</div>
            <div>Financial Reporting</div>
            <div>Universal Journal</div>
            <div>Asset Accounting</div>
            <div>Accounts Payable</div>
            <div>Accounts Receivable</div>
            <div>Financial Closing</div>
            <div>Management Reporting</div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="sap-section" id="services">

        <div className="sap-container">

          <h2>SAP FI Services</h2>

          <div className="service-grid">

            <div className="service-card">
              <h3>SAP FI Implementation</h3>
              <p>
                SAP FI implementation services for organizations establishing
                or transforming their SAP financial processes.
              </p>
            </div>

            <div className="service-card">
              <h3>SAP FI Configuration</h3>
              <p>
                Financial accounting configuration including organizational
                structures, accounts, posting processes, and financial
                settings.
              </p>
            </div>

            <div className="service-card">
              <h3>SAP FI Support</h3>
              <p>
                Production support, incident resolution, troubleshooting,
                monitoring, and ongoing SAP FI maintenance.
              </p>
            </div>

            <div className="service-card">
              <h3>SAP FI Migration</h3>
              <p>
                Assistance with financial data migration and transition to
                SAP S/4HANA Finance.
              </p>
            </div>

            <div className="service-card">
              <h3>SAP FI Integration</h3>
              <p>
                Integration between SAP Finance and other SAP modules and
                business systems.
              </p>
            </div>

            <div className="service-card">
              <h3>SAP FI Consulting</h3>
              <p>
                Business process analysis, SAP solution design, optimization,
                and financial process consulting.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="sap-section light-section">

        <div className="sap-container">

          <h2>Benefits of SAP FI</h2>

          <ul className="benefits-list">
            <li>Centralized financial accounting</li>
            <li>Integrated financial transactions</li>
            <li>Improved financial visibility</li>
            <li>Faster financial reporting</li>
            <li>Better financial control</li>
            <li>Integrated accounts payable and receivable</li>
            <li>Asset lifecycle management</li>
            <li>Support for statutory reporting requirements</li>
            <li>Integration with other SAP business processes</li>
            <li>Real-time financial information in S/4HANA</li>
          </ul>

        </div>

      </section>

      {/* FAQ */}
      <section className="sap-section">

        <div className="sap-container">

          <h2>Frequently Asked Questions About SAP FI</h2>

          <div className="faq">

            <details>
              <summary>What is SAP FI?</summary>
              <p>
                SAP FI is the Financial Accounting module used to manage
                financial transactions, accounting, reporting, and financial
                processes within SAP.
              </p>
            </details>

            <details>
              <summary>What are the main components of SAP FI?</summary>
              <p>
                Major areas include General Ledger, Accounts Payable,
                Accounts Receivable, Asset Accounting, Bank Accounting,
                and Tax-related accounting processes.
              </p>
            </details>

            <details>
              <summary>Is SAP FI part of SAP S/4HANA?</summary>
              <p>
                Yes. Financial Accounting capabilities are available as part
                of SAP S/4HANA Finance.
              </p>
            </details>

            <details>
              <summary>Does SAP FI integrate with SAP MM?</summary>
              <p>
                Yes. SAP FI integrates with Materials Management for
                financial postings associated with procurement and inventory
                processes.
              </p>
            </details>

            <details>
              <summary>Does SAP FI integrate with SAP SD?</summary>
              <p>
                Yes. Sales and billing processes can generate corresponding
                accounting information in SAP Financial Accounting.
              </p>
            </details>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <div className="sap-container">

          <h2>Need SAP FI Implementation or Support?</h2>

          <p>
            Get in touch to discuss SAP FI implementation, configuration,
            migration, integration, support, or consulting requirements.
          </p>

          <div className="contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="hcm-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="hcm-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SAPFI;