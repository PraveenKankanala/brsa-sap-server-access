import React from "react";
import "./SAPGRC.css";

const SAPGRC = () => {
  return (
    <div className="grc-page">

      <section className="grc-hero">
        <div className="grc-container">
          <span className="grc-badge">SAP SECURITY & COMPLIANCE</span>

          <h1>SAP GRC – Governance, Risk & Compliance</h1>

          <p>
            SAP GRC helps organizations manage access, authorizations,
            segregation of duties, risks, controls, compliance, and
            security-related governance processes.
          </p>

          <div className="grc-buttons">
            <a href="#grc-services">GRC Services</a>
            <a href="#grc-contact">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="grc-section">
        <div className="grc-container">
          <h2>What is SAP GRC?</h2>

          <p>
            SAP Governance, Risk, and Compliance (GRC) is a group of
            capabilities used to help organizations manage access,
            compliance, risk, and internal controls.
          </p>

          <p>
            SAP GRC is commonly associated with areas such as Access
            Control, Risk Management, Process Control, and audit and
            compliance activities.
          </p>
        </div>
      </section>

      <section className="grc-section grc-light">
        <div className="grc-container">
          <h2>Major SAP GRC Areas</h2>

          <div className="grc-grid">

            <div className="grc-card">
              <h3>Access Control</h3>
              <p>
                Helps organizations manage user access, roles,
                authorizations, and access risks.
              </p>
            </div>

            <div className="grc-card">
              <h3>Access Risk Analysis</h3>
              <p>
                Identifies potential access risks and segregation of
                duties conflicts.
              </p>
            </div>

            <div className="grc-card">
              <h3>Business Role Management</h3>
              <p>
                Supports role design, role maintenance, and access
                governance processes.
              </p>
            </div>

            <div className="grc-card">
              <h3>Emergency Access Management</h3>
              <p>
                Supports controlled temporary access for users who need
                elevated privileges for specific activities.
              </p>
            </div>

            <div className="grc-card">
              <h3>Process Control</h3>
              <p>
                Supports management and monitoring of business controls
                and compliance processes.
              </p>
            </div>

            <div className="grc-card">
              <h3>Risk Management</h3>
              <p>
                Helps organizations identify, assess, monitor, and manage
                business risks.
              </p>
            </div>

            <div className="grc-card">
              <h3>Audit & Compliance</h3>
              <p>
                Supports governance and compliance activities across
                enterprise processes.
              </p>
            </div>

            <div className="grc-card">
              <h3>Identity & Access Governance</h3>
              <p>
                Helps organizations establish controlled and auditable
                access management processes.
              </p>
            </div>

            <div className="grc-card">
              <h3>SoD Analysis</h3>
              <p>
                Segregation of Duties analysis helps identify conflicting
                access combinations that may create business risks.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="grc-section">
        <div className="grc-container">
          <h2>SAP GRC Key Processes</h2>

          <div className="grc-process-grid">

            <div>
              <h3>User Access Request</h3>
              <p>
                Manage and control requests for access to SAP systems
                and applications.
              </p>
            </div>

            <div>
              <h3>Risk Analysis</h3>
              <p>
                Analyze users and roles for potential access risks.
              </p>
            </div>

            <div>
              <h3>Segregation of Duties</h3>
              <p>
                Identify conflicting permissions that could create
                business or compliance risks.
              </p>
            </div>

            <div>
              <h3>Role Management</h3>
              <p>
                Design and manage roles according to business
                requirements and security policies.
              </p>
            </div>

            <div>
              <h3>Emergency Access</h3>
              <p>
                Provide controlled temporary privileged access where
                appropriate and monitor its use.
              </p>
            </div>

            <div>
              <h3>Compliance Monitoring</h3>
              <p>
                Monitor controls and compliance requirements across
                business processes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="grc-dark">
        <div className="grc-container">

          <h2>SAP GRC Security & Compliance</h2>

          <p>
            Effective SAP access governance helps organizations control
            who can access systems, applications, transactions, and
            business data.
          </p>

          <p>
            GRC processes can help organizations identify access risks,
            establish approval processes, and maintain better visibility
            over security and compliance activities.
          </p>

          <div className="grc-features">
            <span>Access Control</span>
            <span>Risk Analysis</span>
            <span>SoD</span>
            <span>Role Management</span>
            <span>Emergency Access</span>
            <span>Compliance</span>
            <span>Audit</span>
            <span>Risk Management</span>
          </div>

        </div>
      </section>

      <section className="grc-section" id="grc-services">
        <div className="grc-container">

          <h2>SAP GRC Services</h2>

          <div className="grc-grid">

            <div className="grc-card">
              <h3>SAP GRC Implementation</h3>
              <p>
                GRC solution planning, configuration, testing, and
                implementation support.
              </p>
            </div>

            <div className="grc-card">
              <h3>SAP GRC Access Control</h3>
              <p>
                Access governance, role management, access analysis,
                and approval processes.
              </p>
            </div>

            <div className="grc-card">
              <h3>SAP GRC Support</h3>
              <p>
                Troubleshooting, monitoring, issue resolution, and
                ongoing technical support.
              </p>
            </div>

            <div className="grc-card">
              <h3>SAP GRC Risk Analysis</h3>
              <p>
                Analysis of access risks and segregation-of-duties
                conflicts.
              </p>
            </div>

            <div className="grc-card">
              <h3>SAP GRC Role Management</h3>
              <p>
                Role design, access review, authorization governance,
                and role maintenance.
              </p>
            </div>

            <div className="grc-card">
              <h3>SAP GRC Practice Environment</h3>
              <p>
                Hands-on environments for learning SAP security and
                GRC concepts.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="grc-section grc-light">
        <div className="grc-container">

          <h2>Benefits of SAP GRC</h2>

          <ul className="grc-benefits">
            <li>Improved access governance</li>
            <li>Better visibility into access risks</li>
            <li>Support for segregation-of-duties analysis</li>
            <li>Controlled privileged access</li>
            <li>Improved compliance processes</li>
            <li>Better role governance</li>
            <li>Centralized risk analysis</li>
            <li>Improved audit readiness</li>
            <li>Better security controls</li>
            <li>Improved access management processes</li>
          </ul>

        </div>
      </section>

      <section className="grc-section">
        <div className="grc-container">

          <h2>Frequently Asked Questions About SAP GRC</h2>

          <div className="grc-faq">

            <details>
              <summary>What is SAP GRC?</summary>
              <p>
                SAP GRC is a set of governance, risk, compliance, and
                access-management capabilities used to help organizations
                manage security and compliance processes.
              </p>
            </details>

            <details>
              <summary>What is SAP GRC Access Control?</summary>
              <p>
                Access Control supports processes related to user access,
                roles, authorization risks, and access governance.
              </p>
            </details>

            <details>
              <summary>What is SoD in SAP GRC?</summary>
              <p>
                SoD means Segregation of Duties. It helps identify
                conflicting access combinations that could create
                business risks.
              </p>
            </details>

            <details>
              <summary>What is Emergency Access Management?</summary>
              <p>
                It supports controlled temporary privileged access for
                specific users and situations, together with appropriate
                monitoring and review.
              </p>
            </details>

          </div>

        </div>
      </section>

      <section className="grc-contact" id="grc-contact">
        <div className="grc-container">

          <h2>Need SAP GRC Access or Support?</h2>

          <p>
            Contact us for SAP GRC practice environments, security,
            access control, role management, and technical support.
          </p>

          <div className="grc-contact-buttons">

            <a
              href="https://wa.me/918309820381"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 8309820381
            </a>

            <a href="mailto:erpserveraccess@gmail.com">
              erpserveraccess@gmail.com
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SAPGRC;