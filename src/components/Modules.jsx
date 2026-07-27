import "./Modules.css";

function Modules() {
  return (
    <section className="modules" id="modules">

      <div className="container">

        <span className="section-tag">SAP MODULES</span>

        <h2>Practice on Live SAP Functional & Technical Modules</h2>

        <p className="section-description">
          BRSA SAP Server Access provides access to the latest SAP Functional,
          Technical and Cloud modules on live enterprise servers.
        </p>

        {/* Functional Modules */}

        <h3 className="module-heading">SAP Functional Modules</h3>

        <div className="modules-grid">

          <div className="module-card">SAP FI (Financial Accounting)</div>
          <div className="module-card">SAP CO (Controlling)</div>
          <div className="module-card">SAP MM (Materials Management)</div>
          <div className="module-card">SAP SD (Sales & Distribution)</div>
          <div className="module-card">SAP PP (Production Planning)</div>
          <div className="module-card">SAP QM (Quality Management)</div>
          <div className="module-card">SAP PM (Plant Maintenance)</div>
          <div className="module-card">SAP PS (Project System)</div>
          <div className="module-card">SAP WM (Warehouse Management)</div>
          <div className="module-card">SAP EWM (Extended Warehouse Management)</div>
          <div className="module-card">SAP TM (Transportation Management)</div>
          <div className="module-card">SAP HCM / HR</div>

        </div>

        {/* Technical Modules */}

        <h3 className="module-heading">SAP Technical Modules</h3>

        <div className="modules-grid">

          <div className="module-card">SAP ABAP</div>
          <div className="module-card">SAP BASIS</div>
          <div className="module-card">SAP Fiori</div>
          <div className="module-card">SAP BW/4HANA</div>
          <div className="module-card">SAP BTP</div>
          <div className="module-card">SAP CPI</div>
          <div className="module-card">SAP PI/PO</div>
          <div className="module-card">SAP GRC</div>
          <div className="module-card">SAP Solution Manager</div>
          <div className="module-card">SAP HANA Administration</div>
          <div className="module-card">SAP Security</div>
          <div className="module-card">SAP Workflow</div>

        </div>

        {/* Cloud Products */}

        <h3 className="module-heading">SAP Cloud Solutions</h3>

        <div className="modules-grid">

          <div className="module-card">SAP S/4HANA 2025</div>
          <div className="module-card">SAP ECC 6.0</div>
          <div className="module-card">SAP SuccessFactors</div>
          <div className="module-card">SAP Ariba</div>
          <div className="module-card">SAP Concur</div>
          <div className="module-card">SAP Fieldglass</div>
          <div className="module-card">SAP Analytics Cloud (SAC)</div>
          <div className="module-card">SAP Datasphere</div>
          <div className="module-card">SAP Integration Suite</div>
          <div className="module-card">SAP Build Apps</div>
          <div className="module-card">SAP Build Process Automation</div>
          <div className="module-card">SAP Business One</div>

        </div>

      </div>

    </section>
  );
}

export default Modules;