import React from "react";
import "./SAPPS.css";

const SAPPS = () => {
  return (
    <div className="sap-ps-page">

      {/* HERO */}
      <section className="ps-hero">
        <div className="ps-container">
          <span className="ps-badge">SAP PROJECT SYSTEM</span>

          <h1>SAP PS – Project System</h1>

          <p className="ps-hero-text">
            SAP PS helps organizations plan, execute, monitor, and control
            complex projects by managing project structures, activities,
            schedules, budgets, costs, resources, procurement, and billing.
          </p>

          <div className="ps-buttons">
            <a href="#ps-services" className="ps-primary-btn">
              SAP PS Services
            </a>

            <a href="#ps-contact" className="ps-secondary-btn">
              Contact SAP Expert
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="ps-section">
        <div className="ps-container">

          <h2>What is SAP PS?</h2>

          <p>
            SAP PS stands for Project System. It is used to manage projects
            from planning and budgeting through execution, monitoring,
            settlement, and completion.
          </p>

          <p>
            SAP PS is especially useful for organizations involved in
            engineering, construction, infrastructure, manufacturing,
            energy, consulting, and other project-oriented industries.
          </p>

          <p>
            SAP PS integrates closely with SAP FI, CO, MM, SD, PP,
            HR, and other SAP business processes.
          </p>

        </div>
      </section>

      {/* COMPONENTS */}
      <section className="ps-section ps-light">

        <div className="ps-container">

          <h2>Major SAP PS Components</h2>

          <div className="ps-grid">

            <div className="ps-card">
              <h3>Project Definition</h3>
              <p>
                Represents the overall project and provides the framework
                for organizing project information.
              </p>
            </div>

            <div className="ps-card">
              <h3>Work Breakdown Structure</h3>
              <p>
                WBS divides a project into manageable elements for planning,
                budgeting, cost control, and execution.
              </p>
            </div>

            <div className="ps-card">
              <h3>Network Activities</h3>
              <p>
                Represents project activities and their relationships,
                durations, resources, and dependencies.
              </p>
            </div>

            <div className="ps-card">
              <h3>Project Planning</h3>
              <p>
                Supports planning of project schedules, resources,
                materials, activities, and costs.
              </p>
            </div>

            <div className="ps-card">
              <h3>Budget Management</h3>
              <p>
                Helps organizations plan, allocate, monitor, and control
                project budgets.
              </p>
            </div>

            <div className="ps-card">
              <h3>Project Settlement</h3>
              <p>
                Supports settlement of project costs and revenues to
                appropriate receivers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="ps-section">

        <div className="ps-container">

          <h2>Important SAP PS Business Processes</h2>

          <div className="ps-process-grid">

            <div className="ps-process">
              <h3>Project Creation</h3>
              <p>
                Create the project structure and define the overall project
                scope and organizational information.
              </p>
            </div>

            <div className="ps-process">
              <h3>WBS Planning</h3>
              <p>
                Break the project into work packages and planning elements
                for better control.
              </p>
            </div>

            <div className="ps-process">
              <h3>Network Planning</h3>
              <p>
                Define project activities, relationships, durations,
                resources, and dependencies.
              </p>
            </div>

            <div className="ps-process">
              <h3>Budgeting</h3>
              <p>
                Plan and control budgets assigned to project structures
                and WBS elements.
              </p>
            </div>

            <div className="ps-process">
              <h3>Project Procurement</h3>
              <p>
                Procure materials and services required for project
                execution through integrated SAP procurement processes.
              </p>
            </div>

            <div className="ps-process">
              <h3>Project Settlement</h3>
              <p>
                Transfer project costs and revenues to appropriate
                receivers according to project requirements.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRANSACTIONS */}
      <section className="ps-section ps-light">

        <div className="ps-container">

          <h2>Important SAP PS Transactions</h2>

          <div className="ps-transactions">

            <div>
              <span>CJ20N</span>
              <p>Project Builder</p>
            </div>

            <div>
              <span>CJ01</span>
              <p>Create Project Definition</p>
            </div>

            <div>
              <span>CJ02</span>
              <p>Change Project Definition</p>
            </div>

            <div>
              <span>CJ03</span>
              <p>Display Project Definition</p>
            </div>

            <div>
              <span>CJ11</span>
              <p>Create WBS Element</p>
            </div>

            <div>
              <span>CJ12</span>
              <p>Change WBS Element</p>
            </div>

            <div>
              <span>CJ13</span>
              <p>Display WBS Element</p>
            </div>

            <div>
              <span>CN21</span>
              <p>Create Network</p>
            </div>

            <div>
              <span>CN22</span>
              <p>Change Network</p>
            </div>

            <div>
              <span>CN23</span>
              <p>Display Network</p>
            </div>

            <div>
              <span>CJ30</span>
              <p>Project Planning</p>
            </div>

            <div>
              <span>CJ88</span>
              <p>Project Settlement</p>
            </div>

          </div>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="ps-section">

        <div className="ps-container">

          <h2>SAP PS Integration With Other Modules</h2>

          <div className="ps-integration-grid">

            <div className="ps-integration-card">
              <h3>PS + FI</h3>
              <p>
                Project-related financial postings and accounting
                transactions can integrate with financial accounting.
              </p>
            </div>

            <div className="ps-integration-card">
              <h3>PS + CO</h3>
              <p>
                Project costs, budgets, commitments, planning, and
                controlling activities integrate with SAP CO.
              </p>
            </div>

            <div className="ps-integration-card">
              <h3>PS + MM</h3>
              <p>
                Project procurement, materials, purchase requisitions,
                purchase orders, and goods movements can be integrated.
              </p>
            </div>

            <div className="ps-integration-card">
              <h3>PS + SD</h3>
              <p>
                Customer projects can integrate with sales, billing,
                customer requirements, and revenue processes.
              </p>
            </div>

            <div className="ps-integration-card">
              <h3>PS + PP</h3>
              <p>
                Project-driven manufacturing activities can interact
                with production planning and execution.
              </p>
            </div>

            <div className="ps-integration-card">
              <h3>PS + HR</h3>
              <p>
                Project activities can involve personnel, resource
                planning, and employee-related information.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* S4HANA */}
      <section className="ps-dark">

        <div className="ps-container">

          <h2>SAP PS in S/4HANA</h2>

          <p>
            SAP S/4HANA provides integrated project management and project
            control capabilities for organizations managing complex
            projects and project-driven business processes.
          </p>

          <p>
            Integrated project information can help organizations monitor
            project progress, budgets, costs, commitments, procurement,
            and financial performance.
          </p>

          <div className="ps-feature-grid">

            <div>Project Definitions</div>
            <div>WBS Structures</div>
            <div>Network Activities</div>
            <div>Project Planning</div>
            <div>Budget Management</div>
            <div>Project Procurement</div>
            <div>Project Cost Control</div>
            <div>Project Settlement</div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="ps-section" id="ps-services">

        <div className="ps-container">

          <h2>SAP PS Services</h2>

          <div className="ps-service-grid">

            <div className="ps-service-card">
              <h3>SAP PS Implementation</h3>
              <p>
                SAP PS implementation covering project structures, WBS,
                networks, planning, budgeting, configuration, testing,
                and deployment.
              </p>
            </div>

            <div className="ps-service-card">
              <h3>SAP PS Configuration</h3>
              <p>
                Configuration of project profiles, WBS structures,
                networks, planning, budgeting, settlement, and related
                project processes.
              </p>
            </div>

            <div className="ps-service-card">
              <h3>SAP PS Support</h3>
              <p>
                Production support, troubleshooting, issue resolution,
                monitoring, and ongoing SAP PS maintenance.
              </p>
            </div>

            <div className="ps-service-card">
              <h3>SAP PS Migration</h3>
              <p>
                Assistance with project system transformation and migration
                to SAP S/4HANA.
              </p>
            </div>

            <div className="ps-service-card">
              <h3>SAP PS Integration</h3>
              <p>
                Integration of SAP PS with FI, CO, MM, SD, PP, HR,
                and other business processes.
              </p>
            </div>

            <div className="ps-service-card">
              <h3>SAP PS Consulting</h3>
              <p>
                Project process analysis, solution design, optimization,
                and SAP PS consulting services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="ps-section ps-light">

        <div className="ps-container">

          <h2>Benefits of SAP PS</h2>

          <ul className="ps-benefits">

            <li>Improved project planning</li>
            <li>Better project cost control</li>
            <li>Centralized project information</li>
            <li>Improved budget management</li>
            <li>Better resource planning</li>
            <li>Improved project procurement</li>
            <li>Better schedule monitoring</li>
            <li>Improved financial visibility</li>
            <li>Better project performance tracking</li>
            <li>Integrated project management</li>

          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="ps-section">

        <div className="ps-container">

          <h2>Frequently Asked Questions About SAP PS</h2>

          <div className="ps-faq">

            <details>
              <summary>What is SAP PS?</summary>
              <p>
                SAP PS is the Project System module used to plan, execute,
                monitor, and control projects.
              </p>
            </details>

            <details>
              <summary>What is WBS in SAP PS?</summary>
              <p>
                WBS stands for Work Breakdown Structure. It divides a
                project into manageable elements for planning and control.
              </p>
            </details>

            <details>
              <summary>What is a network in SAP PS?</summary>
              <p>
                A network represents project activities, relationships,
                durations, resources, and dependencies.
              </p>
            </details>

            <details>
              <summary>Does SAP PS integrate with SAP CO?</summary>
              <p>
                Yes. SAP PS integrates with controlling for project
                planning, costs, commitments, budgeting, and settlement.
              </p>
            </details>

            <details>
              <summary>Which industries use SAP PS?</summary>
              <p>
                SAP PS is commonly used in project-oriented industries
                such as construction, engineering, infrastructure,
                energy, manufacturing, and professional services.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="ps-contact" id="ps-contact">

        <div className="ps-container">

          <h2>Need SAP PS Implementation or Support?</h2>

          <p>
            Contact us for SAP PS implementation, configuration,
            integration, migration, support, and consulting requirements.
          </p>

          <div className="ps-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              className="ps-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a
              href="mailto:erpserveraccess@gmail.com"
              className="ps-email"
            >
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SAPPS;