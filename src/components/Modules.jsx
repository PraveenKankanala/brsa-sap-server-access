import React from "react";
import { Link } from "react-router-dom";
import "./Modules.css";

function Modules() {
  return (
    <section className="module-section">
      <h2>SAP Modules</h2>

      <div className="module-links">

        <Link to="/SAPFI" className="module-card">
          SAP FI
        </Link>

        <Link to="/SAPCO" className="module-card">
          SAP CO
        </Link>

        <Link to="/SAPMM" className="module-card">
          SAP MM
        </Link>

        <Link to="/SAPSD" className="module-card">
          SAP SD
        </Link>

        <Link to="/SAPPP" className="module-card">
          SAP PP
        </Link>

        <Link to="/SAPQM" className="module-card">
          SAP QM
        </Link>

        <Link to="/SAPHCM" className="module-card">
          SAP HCM
        </Link>

        <Link to="/SAPPS" className="module-card">
          SAP PS
        </Link>

        <Link to="/SAPPM" className="module-card">
          SAP PM
        </Link>

        <Link to="/SAPEWM" className="module-card">
          SAP EWM
        </Link>

        <Link to="/SAPTM" className="module-card">
          SAP TM
        </Link>

        <Link to="/SAPGTS" className="module-card">
          SAP GTS
        </Link>

        <Link to="/SAPAriba" className="module-card">
          SAP Ariba
        </Link>

        <Link to="/SAPSuccessFactors" className="module-card">
          SAP SuccessFactors
        </Link>

        <Link to="/SAPBW4HANA" className="module-card">
          SAP BW4HANA
        </Link>

        <Link to="/SAPBTP" className="module-card">
          SAP BTP
        </Link>

        <Link to="/SAPABAP" className="module-card">
          SAP ABAP
        </Link>

        <Link to="/SAPBasis" className="module-card">
          SAP BASIS
        </Link>

        <Link to="/SAPGRC" className="module-card">
          SAP GRC
        </Link>

      </div>
    </section>
  );
}

export default Modules;