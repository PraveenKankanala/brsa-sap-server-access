import React from "react";
import "./SAPBasis.css";

const SAPBasis = () => {
  return (
    <div className="basis-page">

      <section className="basis-hero">
        <div className="basis-container">
          <span className="basis-badge">SAP TECHNICAL MODULE</span>

          <h1>SAP BASIS – System Administration</h1>

          <p>
            SAP BASIS is the technical administration foundation for SAP
            systems, covering system management, monitoring, users,
            transports, databases, security, performance, and operations.
          </p>

          <div className="basis-buttons">
            <a href="#basis-services">BASIS Services</a>
            <a href="#basis-contact">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="basis-section">
        <div className="basis-container">
          <h2>What is SAP BASIS?</h2>

          <p>
            SAP BASIS is the technical administration area responsible for
            the operation and management of SAP systems.
          </p>

          <p>
            BASIS administrators work with SAP application servers,
            databases, system monitoring, users, authorizations,
            transports, jobs, backups, connectivity, and system performance.
          </p>
        </div>
      </section>

      <section className="basis-section basis-light">
        <div className="basis-container">
          <h2>Important SAP BASIS Topics</h2>

          <div className="basis-grid">
            {[
              ["SAP System Administration", "Manage and maintain SAP system environments."],
              ["User Administration", "Create and manage SAP users and user-related settings."],
              ["Roles & Authorizations", "Manage access permissions and technical authorizations."],
              ["Transport Management", "Move development objects and configuration between SAP systems."],
              ["System Monitoring", "Monitor system health, processes, jobs, and performance."],
              ["Background Jobs", "Schedule, monitor, and troubleshoot SAP background jobs."],
              ["SAP Profiles", "Manage system and instance profile parameters."],
              ["RFC Connections", "Configure and manage communication between SAP systems."],
              ["Database Administration", "Monitor and maintain SAP database environments."],
              ["Kernel Administration", "Manage SAP kernel components and related technical updates."],
              ["Backup & Recovery", "Support database and SAP system backup and recovery procedures."],
              ["Performance Tuning", "Analyze system performance and identify technical bottlenecks."]
            ].map(([title, text]) => (
              <div className="basis-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="basis-section">
        <div className="basis-container">
          <h2>SAP BASIS Administration Areas</h2>

          <div className="basis-process-grid">
            <div>
              <h3>System Monitoring</h3>
              <p>Monitor application servers, work processes, system health, and alerts.</p>
            </div>

            <div>
              <h3>User Administration</h3>
              <p>Manage users, roles, permissions, and access-related activities.</p>
            </div>

            <div>
              <h3>Transport Management</h3>
              <p>Manage movement of SAP changes between development, quality, and production systems.</p>
            </div>

            <div>
              <h3>Job Management</h3>
              <p>Schedule and monitor background jobs and troubleshoot failed executions.</p>
            </div>

            <div>
              <h3>Database Management</h3>
              <p>Monitor database health, storage, backups, and technical performance.</p>
            </div>

            <div>
              <h3>Performance Management</h3>
              <p>Analyze workload and system performance to identify technical issues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="basis-dark">
        <div className="basis-container">
          <h2>SAP BASIS Practice Environment</h2>

          <p>
            A dedicated SAP environment can help BASIS learners practice
            system administration concepts such as user management,
            transports, jobs, monitoring, RFC connections, profiles,
            troubleshooting, and system operations.
          </p>

          <div className="basis-features">
            <span>User Administration</span>
            <span>Transport Management</span>
            <span>System Monitoring</span>
            <span>Background Jobs</span>
            <span>RFC</span>
            <span>Profiles</span>
            <span>Performance</span>
            <span>Troubleshooting</span>
          </div>
        </div>
      </section>

      <section className="basis-section" id="basis-services">
        <div className="basis-container">
          <h2>SAP BASIS Services</h2>

          <div className="basis-grid">

            <div className="basis-card">
              <h3>BASIS Administration</h3>
              <p>Technical SAP system administration and operational support.</p>
            </div>

            <div className="basis-card">
              <h3>BASIS Support</h3>
              <p>System monitoring, troubleshooting, incident analysis, and technical support.</p>
            </div>

            <div className="basis-card">
              <h3>SAP Server Access</h3>
              <p>Practice environments for learning SAP BASIS administration.</p>
            </div>

            <div className="basis-card">
              <h3>Transport Management</h3>
              <p>Support for SAP change and transport management activities.</p>
            </div>

            <div className="basis-card">
              <h3>Performance Monitoring</h3>
              <p>Technical analysis of SAP system performance and workload.</p>
            </div>

            <div className="basis-card">
              <h3>BASIS Training Environment</h3>
              <p>Hands-on SAP environments for BASIS learning and practice.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="basis-contact" id="basis-contact">
        <div className="basis-container">
          <h2>Need SAP BASIS Server Access or Support?</h2>

          <p>
            Contact us for SAP BASIS practice environments, technical
            support, administration, and training requirements.
          </p>

          <div className="basis-contact-buttons">
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

export default SAPBasis;