import React from "react";
import "./SAPSD.css";

const SAPSD = () => {
  return (
    <div className="sap-sd-page">

      {/* HERO */}
      <section className="sd-hero">
        <div className="sd-container">
          <span className="sd-badge">SAP SALES & DISTRIBUTION</span>

          <h1>SAP SD – Sales & Distribution</h1>

          <p className="sd-hero-text">
            SAP SD helps organizations manage sales, customer orders,
            deliveries, shipping, billing, pricing, and customer-related
            distribution processes in an integrated SAP environment.
          </p>

          <div className="sd-buttons">
            <a href="#sd-services" className="sd-primary-btn">
              SAP SD Services
            </a>

            <a href="#sd-contact" className="sd-secondary-btn">
              Contact SAP Expert
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="sd-section">
        <div className="sd-container">

          <h2>What is SAP SD?</h2>

          <p>
            SAP SD stands for Sales and Distribution. It is a core SAP
            business module used to manage sales and distribution processes
            from customer inquiry through sales order, delivery, shipment,
            and billing.
          </p>

          <p>
            SAP SD helps organizations manage customers, products, pricing,
            sales orders, deliveries, shipping, invoices, and related
            business processes.
          </p>

          <p>
            SAP SD integrates closely with SAP FI, MM, PP, WM/EWM, CO, and
            other SAP modules to provide an end-to-end business process.
          </p>

        </div>
      </section>

      {/* COMPONENTS */}
      <section className="sd-section sd-light">
        <div className="sd-container">

          <h2>Major SAP SD Components</h2>

          <div className="sd-grid">

            <div className="sd-card">
              <h3>Sales</h3>
              <p>
                Manages inquiries, quotations, sales orders, contracts,
                scheduling agreements, and other sales documents.
              </p>
            </div>

            <div className="sd-card">
              <h3>Shipping</h3>
              <p>
                Supports outbound deliveries, picking, packing, shipment,
                and goods issue processes.
              </p>
            </div>

            <div className="sd-card">
              <h3>Billing</h3>
              <p>
                Manages customer billing documents, invoices, credit memos,
                debit memos, and related billing processes.
              </p>
            </div>

            <div className="sd-card">
              <h3>Pricing</h3>
              <p>
                Supports pricing conditions, discounts, surcharges, taxes,
                and customer-specific pricing requirements.
              </p>
            </div>

            <div className="sd-card">
              <h3>Customer Master Data</h3>
              <p>
                Maintains important customer information used across sales
                and distribution processes.
              </p>
            </div>

            <div className="sd-card">
              <h3>Sales Output</h3>
              <p>
                Supports communication of sales documents and business
                information to customers and business partners.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESS */}
      <section className="sd-section">
        <div className="sd-container">

          <h2>Important SAP SD Business Processes</h2>

          <div className="sd-process-grid">

            <div className="sd-process">
              <h3>Order to Cash (O2C)</h3>
              <p>
                The complete sales cycle from customer order through delivery,
                goods issue, billing, and financial processing.
              </p>
            </div>

            <div className="sd-process">
              <h3>Inquiry</h3>
              <p>
                Captures a customer's request for information about products,
                services, prices, or availability.
              </p>
            </div>

            <div className="sd-process">
              <h3>Quotation</h3>
              <p>
                Provides customers with proposed pricing and sales
                conditions before an order is placed.
              </p>
            </div>

            <div className="sd-process">
              <h3>Sales Order</h3>
              <p>
                Records the customer's confirmed requirement for products or
                services.
              </p>
            </div>

            <div className="sd-process">
              <h3>Outbound Delivery</h3>
              <p>
                Manages preparation and delivery of products to customers.
              </p>
            </div>

            <div className="sd-process">
              <h3>Billing</h3>
              <p>
                Creates billing documents for delivered products or services
                and integrates with financial accounting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRANSACTIONS */}
      <section className="sd-section sd-light">
        <div className="sd-container">

          <h2>Important SAP SD Transactions</h2>

          <div className="sd-transactions">

            <div>
              <span>VA01</span>
              <p>Create Sales Order</p>
            </div>

            <div>
              <span>VA02</span>
              <p>Change Sales Order</p>
            </div>

            <div>
              <span>VA03</span>
              <p>Display Sales Order</p>
            </div>

            <div>
              <span>VA11</span>
              <p>Create Inquiry</p>
            </div>

            <div>
              <span>VA21</span>
              <p>Create Quotation</p>
            </div>

            <div>
              <span>VL01N</span>
              <p>Create Outbound Delivery</p>
            </div>

            <div>
              <span>VL02N</span>
              <p>Change Outbound Delivery</p>
            </div>

            <div>
              <span>VL03N</span>
              <p>Display Outbound Delivery</p>
            </div>

            <div>
              <span>VF01</span>
              <p>Create Billing Document</p>
            </div>

            <div>
              <span>VF02</span>
              <p>Change Billing Document</p>
            </div>

            <div>
              <span>VF03</span>
              <p>Display Billing Document</p>
            </div>

            <div>
              <span>VK11</span>
              <p>Create Condition Record</p>
            </div>

          </div>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="sd-section">

        <div className="sd-container">

          <h2>SAP SD Integration With Other Modules</h2>

          <div className="sd-integration-grid">

            <div className="sd-integration-card">
              <h3>SD + FI</h3>
              <p>
                Billing and sales processes can generate accounting
                information for financial accounting.
              </p>
            </div>

            <div className="sd-integration-card">
              <h3>SD + MM</h3>
              <p>
                Sales processes interact with material availability,
                inventory, and goods movement processes.
              </p>
            </div>

            <div className="sd-integration-card">
              <h3>SD + PP</h3>
              <p>
                Customer demand and sales requirements can influence
                production planning processes.
              </p>
            </div>

            <div className="sd-integration-card">
              <h3>SD + EWM</h3>
              <p>
                Outbound deliveries and warehouse activities can integrate
                with extended warehouse management.
              </p>
            </div>

            <div className="sd-integration-card">
              <h3>SD + CO</h3>
              <p>
                Sales and revenue information can support profitability and
                management accounting analysis.
              </p>
            </div>

            <div className="sd-integration-card">
              <h3>SD + CRM</h3>
              <p>
                Customer and sales-related processes can connect with
                customer experience and relationship processes.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* S4HANA */}
      <section className="sd-dark">

        <div className="sd-container">

          <h2>SAP SD in S/4HANA</h2>

          <p>
            SAP S/4HANA provides modern sales and distribution capabilities
            for organizations managing customer orders, deliveries,
            billing, pricing, and related business processes.
          </p>

          <p>
            Businesses can use integrated sales information and real-time
            data to improve order management, customer service, fulfillment,
            and financial visibility.
          </p>

          <div className="sd-feature-grid">

            <div>Sales Orders</div>
            <div>Pricing</div>
            <div>Customer Management</div>
            <div>Delivery Management</div>
            <div>Shipping</div>
            <div>Billing</div>
            <div>Order-to-Cash</div>
            <div>Sales Analytics</div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="sd-section" id="sd-services">

        <div className="sd-container">

          <h2>SAP SD Services</h2>

          <div className="sd-service-grid">

            <div className="sd-service-card">
              <h3>SAP SD Implementation</h3>
              <p>
                SAP SD implementation covering sales processes, pricing,
                delivery, billing, testing, configuration, and deployment.
              </p>
            </div>

            <div className="sd-service-card">
              <h3>SAP SD Configuration</h3>
              <p>
                Configuration of sales documents, pricing, shipping,
                delivery, billing, and related SD processes.
              </p>
            </div>

            <div className="sd-service-card">
              <h3>SAP SD Support</h3>
              <p>
                Production support, troubleshooting, incident resolution,
                monitoring, and ongoing SAP SD maintenance.
              </p>
            </div>

            <div className="sd-service-card">
              <h3>SAP SD Migration</h3>
              <p>
                Assistance with sales and distribution process transformation
                and migration to SAP S/4HANA.
              </p>
            </div>

            <div className="sd-service-card">
              <h3>SAP SD Integration</h3>
              <p>
                Integration of SAP SD with FI, MM, PP, EWM, CO, CRM, and
                external business systems.
              </p>
            </div>

            <div className="sd-service-card">
              <h3>SAP SD Consulting</h3>
              <p>
                Sales process analysis, solution design, optimization,
                configuration guidance, and SAP SD consulting.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="sd-section sd-light">

        <div className="sd-container">

          <h2>Benefits of SAP SD</h2>

          <ul className="sd-benefits">

            <li>Improved sales order management</li>
            <li>Better customer order visibility</li>
            <li>Integrated delivery and shipping processes</li>
            <li>Efficient billing management</li>
            <li>Centralized pricing processes</li>
            <li>Better customer information management</li>
            <li>Integration with finance and inventory</li>
            <li>Improved order-to-cash visibility</li>
            <li>Better sales reporting</li>
            <li>Real-time business information in S/4HANA</li>

          </ul>

        </div>

      </section>

      {/* FAQ */}
      <section className="sd-section">

        <div className="sd-container">

          <h2>Frequently Asked Questions About SAP SD</h2>

          <div className="sd-faq">

            <details>
              <summary>What is SAP SD?</summary>
              <p>
                SAP SD is the Sales and Distribution module used to manage
                sales orders, pricing, deliveries, shipping, billing, and
                related customer sales processes.
              </p>
            </details>

            <details>
              <summary>What is the SAP SD Order-to-Cash process?</summary>
              <p>
                Order-to-Cash generally covers sales order creation,
                delivery, picking and packing where applicable, goods issue,
                billing, and financial processing.
              </p>
            </details>

            <details>
              <summary>Does SAP SD integrate with SAP FI?</summary>
              <p>
                Yes. Billing and other sales-related processes can integrate
                with SAP Financial Accounting.
              </p>
            </details>

            <details>
              <summary>Does SAP SD integrate with SAP MM?</summary>
              <p>
                Yes. SAP SD interacts with material availability, inventory,
                procurement, and goods movement processes.
              </p>
            </details>

            <details>
              <summary>Is SAP SD available in SAP S/4HANA?</summary>
              <p>
                Yes. Sales and distribution capabilities are an important
                part of SAP S/4HANA.
              </p>
            </details>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="sd-contact" id="sd-contact">

        <div className="sd-container">

          <h2>Need SAP SD Implementation or Support?</h2>

          <p>
            Contact us for SAP SD implementation, configuration, integration,
            migration, support, and consulting requirements.
          </p>

          <div className="sd-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="sd-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="sd-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SAPSD;