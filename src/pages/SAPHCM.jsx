import React from "react";
import "./SAPHCM.css";

const SAPHCM = () => {
  return (
    <div className="sap-hcm-page">

      {/* HERO */}
      <section className="hcm-hero">
        <div className="hcm-container">

          <span className="hcm-badge">
            SAP HUMAN CAPITAL MANAGEMENT
          </span>

          <h1>SAP HCM & SuccessFactors</h1>

          <p className="hcm-hero-text">
            SAP HCM and SAP SuccessFactors help organizations manage
            employees, organizational structures, recruitment, payroll,
            performance, learning, employee data, workforce planning,
            and the complete employee lifecycle.
          </p>

          <div className="hcm-buttons">

            <a href="#hcm-services" className="hcm-primary-btn">
              SAP HCM Services
            </a>

            <a href="#hcm-contact" className="hcm-secondary-btn">
              Contact SAP Expert
            </a>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="hcm-section">

        <div className="hcm-container">

          <h2>What is SAP HCM?</h2>

          <p>
            SAP HCM stands for Human Capital Management. It provides
            functionality for managing employee information, organizational
            structures, personnel administration, time management,
            payroll, and other human resources processes.
          </p>

          <p>
            SAP SuccessFactors is SAP's cloud-based human experience
            management suite that supports modern HR processes such as
            recruiting, onboarding, performance, learning, compensation,
            employee experience, and workforce management.
          </p>

          <p>
            SAP HCM and SuccessFactors can integrate with SAP S/4HANA,
            finance, controlling, and other enterprise processes.
          </p>

        </div>
      </section>

      {/* MODULES */}
      <section className="hcm-section hcm-light">

        <div className="hcm-container">

          <h2>Major SAP HCM & SuccessFactors Areas</h2>

          <div className="hcm-grid">

            <div className="hcm-card">
              <h3>Personnel Administration</h3>
              <p>
                Manages employee master data, personnel information,
                organizational assignments, and employment-related data.
              </p>
            </div>

            <div className="hcm-card">
              <h3>Organizational Management</h3>
              <p>
                Supports organizational structures, positions, jobs,
                departments, reporting relationships, and hierarchies.
              </p>
            </div>

            <div className="hcm-card">
              <h3>Time Management</h3>
              <p>
                Supports employee attendance, working time, absences,
                leave, time recording, and related processes.
              </p>
            </div>

            <div className="hcm-card">
              <h3>Payroll</h3>
              <p>
                Supports payroll processing, salary calculations,
                deductions, payments, and payroll-related activities.
              </p>
            </div>

            <div className="hcm-card">
              <h3>Recruiting</h3>
              <p>
                SAP SuccessFactors Recruiting supports recruitment,
                candidate management, job postings, and hiring processes.
              </p>
            </div>

            <div className="hcm-card">
              <h3>Employee Central</h3>
              <p>
                Provides a cloud-based core HR platform for employee
                information, organizational data, and HR processes.
              </p>
            </div>

            <div className="hcm-card">
              <h3>Performance & Goals</h3>
              <p>
                Supports employee goals, performance reviews, feedback,
                and performance management.
              </p>
            </div>

            <div className="hcm-card">
              <h3>Learning</h3>
              <p>
                Helps organizations manage employee training, learning
                programs, courses, and development activities.
              </p>
            </div>

            <div className="hcm-card">
              <h3>Compensation</h3>
              <p>
                Supports compensation planning and management of
                employee compensation processes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BUSINESS PROCESSES */}
      <section className="hcm-section">

        <div className="hcm-container">

          <h2>Important SAP HCM Business Processes</h2>

          <div className="hcm-process-grid">

            <div className="hcm-process">
              <h3>Hire to Retire</h3>
              <p>
                Manages employee processes throughout the employment
                lifecycle, from hiring through separation.
              </p>
            </div>

            <div className="hcm-process">
              <h3>Recruitment</h3>
              <p>
                Supports job requisitions, candidate applications,
                interviews, selection, and hiring.
              </p>
            </div>

            <div className="hcm-process">
              <h3>Employee Onboarding</h3>
              <p>
                Helps organizations onboard new employees and provide
                required information and activities.
              </p>
            </div>

            <div className="hcm-process">
              <h3>Time & Attendance</h3>
              <p>
                Manages employee working hours, attendance, absences,
                holidays, and leave processes.
              </p>
            </div>

            <div className="hcm-process">
              <h3>Payroll Processing</h3>
              <p>
                Processes employee compensation and payroll-related
                calculations according to configured rules.
              </p>
            </div>

            <div className="hcm-process">
              <h3>Performance Management</h3>
              <p>
                Supports goal setting, employee evaluations, feedback,
                and performance reviews.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRANSACTIONS */}
      <section className="hcm-section hcm-light">

        <div className="hcm-container">

          <h2>Important SAP HCM Transactions</h2>

          <div className="hcm-transactions">

            <div>
              <span>PA20</span>
              <p>Display Personnel Data</p>
            </div>

            <div>
              <span>PA30</span>
              <p>Maintain Personnel Data</p>
            </div>

            <div>
              <span>PA40</span>
              <p>Personnel Actions</p>
            </div>

            <div>
              <span>PP01</span>
              <p>Maintain Organizational Objects</p>
            </div>

            <div>
              <span>PPOME</span>
              <p>Organizational Management</p>
            </div>

            <div>
              <span>PT60</span>
              <p>Time Evaluation</p>
            </div>

            <div>
              <span>PC00_MXX_CALC</span>
              <p>Payroll Processing</p>
            </div>

            <div>
              <span>SE16</span>
              <p>Data Table Display</p>
            </div>

          </div>

        </div>
      </section>

      {/* INTEGRATION */}
      <section className="hcm-section">

        <div className="hcm-container">

          <h2>SAP HCM Integration With Other Modules</h2>

          <div className="hcm-integration-grid">

            <div className="hcm-integration-card">
              <h3>HCM + FI</h3>
              <p>
                Payroll and employee-related financial postings can
                integrate with financial accounting.
              </p>
            </div>

            <div className="hcm-integration-card">
              <h3>HCM + CO</h3>
              <p>
                Employee-related costs can be integrated with controlling
                and cost center processes.
              </p>
            </div>

            <div className="hcm-integration-card">
              <h3>HCM + MM</h3>
              <p>
                HR and enterprise processes can interact with purchasing
                and organizational requirements where applicable.
              </p>
            </div>

            <div className="hcm-integration-card">
              <h3>HCM + S/4HANA</h3>
              <p>
                HR solutions can integrate with enterprise business
                processes running on SAP S/4HANA.
              </p>
            </div>

            <div className="hcm-integration-card">
              <h3>SuccessFactors + HCM</h3>
              <p>
                Cloud HR processes can integrate with existing SAP HR
                landscapes and enterprise systems.
              </p>
            </div>

            <div className="hcm-integration-card">
              <h3>SuccessFactors + Payroll</h3>
              <p>
                Employee and HR data can support integrated payroll and
                workforce processes depending on the solution landscape.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SUCCESSFACTORS */}
      <section className="hcm-dark">

        <div className="hcm-container">

          <h2>SAP SuccessFactors</h2>

          <p>
            SAP SuccessFactors is a cloud-based human experience
            management suite designed to support modern HR processes
            throughout the employee lifecycle.
          </p>

          <div className="hcm-feature-grid">

            <div>Employee Central</div>
            <div>Recruiting</div>
            <div>Onboarding</div>
            <div>Performance & Goals</div>
            <div>Learning</div>
            <div>Compensation</div>
            <div>Succession Planning</div>
            <div>Workforce Analytics</div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="hcm-section" id="hcm-services">

        <div className="hcm-container">

          <h2>SAP HCM & SuccessFactors Services</h2>

          <div className="hcm-service-grid">

            <div className="hcm-service-card">
              <h3>SAP HCM Implementation</h3>
              <p>
                SAP HCM implementation covering personnel administration,
                organizational management, time management, payroll,
                configuration, testing, and deployment.
              </p>
            </div>

            <div className="hcm-service-card">
              <h3>SuccessFactors Implementation</h3>
              <p>
                Implementation and configuration support for cloud HR
                processes and SuccessFactors solutions.
              </p>
            </div>

            <div className="hcm-service-card">
              <h3>SAP HCM Support</h3>
              <p>
                Production support, troubleshooting, issue resolution,
                monitoring, and ongoing HR system maintenance.
              </p>
            </div>

            <div className="hcm-service-card">
              <h3>SuccessFactors Integration</h3>
              <p>
                Integration of SuccessFactors with SAP and non-SAP
                enterprise systems.
              </p>
            </div>

            <div className="hcm-service-card">
              <h3>SAP HCM Migration</h3>
              <p>
                Assistance with HR transformation and migration from
                traditional SAP HCM environments to modern cloud HR
                solutions.
              </p>
            </div>

            <div className="hcm-service-card">
              <h3>SAP HCM Consulting</h3>
              <p>
                HR process analysis, solution design, optimization,
                configuration, and SAP HCM consulting services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="hcm-section hcm-light">

        <div className="hcm-container">

          <h2>Benefits of SAP HCM & SuccessFactors</h2>

          <ul className="hcm-benefits">

            <li>Centralized employee information</li>
            <li>Improved HR process automation</li>
            <li>Better workforce management</li>
            <li>Improved recruitment processes</li>
            <li>Efficient payroll management</li>
            <li>Better employee performance management</li>
            <li>Improved learning and development</li>
            <li>Better workforce analytics</li>
            <li>Cloud-based HR capabilities</li>
            <li>Improved employee experience</li>

          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="hcm-section">

        <div className="hcm-container">

          <h2>Frequently Asked Questions About SAP HCM</h2>

          <div className="hcm-faq">

            <details>
              <summary>What is SAP HCM?</summary>
              <p>
                SAP HCM is used to manage employee information,
                organizational structures, time, payroll, and other
                human resource processes.
              </p>
            </details>

            <details>
              <summary>What is SAP SuccessFactors?</summary>
              <p>
                SAP SuccessFactors is SAP's cloud-based human experience
                management suite covering multiple HR processes.
              </p>
            </details>

            <details>
              <summary>What is Employee Central?</summary>
              <p>
                Employee Central is the core HR component of
                SAP SuccessFactors for managing employee and
                organizational information.
              </p>
            </details>

            <details>
              <summary>Is SAP HCM different from SuccessFactors?</summary>
              <p>
                Yes. Traditional SAP HCM and SuccessFactors are different
                solution approaches, although they can be integrated in
                certain system landscapes.
              </p>
            </details>

            <details>
              <summary>Is SAP HCM a good career option?</summary>
              <p>
                SAP HCM and SuccessFactors offer career opportunities in
                implementation, configuration, integration, support,
                consulting, and HR technology.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="hcm-contact" id="hcm-contact">

        <div className="hcm-container">

          <h2>Need SAP HCM or SuccessFactors Support?</h2>

          <p>
            Contact us for SAP HCM implementation, SuccessFactors,
            configuration, integration, migration, support, and
            consulting requirements.
          </p>

          <div className="hcm-contact-buttons">

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

export default SAPHCM;