import "./Features.css";

function Features() {
  return (
    <section className="features" id="features">

      <div className="container">

        <span className="section-tag">FEATURES</span>

        <h2>Why Our SAP Server Access Stands Out</h2>

        <p className="section-description">
          SAP Server Access offers enterprise-grade SAP environments designed
          for Companies,Institutions and organizations.
        </p>

        <div className="features-grid">

          <div className="feature-card">
            <h3>🚀 Instant Activation</h3>
            <p>
              SAP accounts are activated within <strong>10–30 minutes</strong>
              after payment verification.
            </p>
          </div>

          <div className="feature-card">
            <h3>☁️ 24×7 Cloud Access</h3>
            <p>
              Access your SAP server anytime from anywhere with an internet connection.
            </p>
          </div>

          <div className="feature-card">
            <h3>🖥️ Live Enterprise Servers</h3>
            <p>
              Practice on real SAP enterprise systems instead of demo environments.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Dedicated User Login</h3>
            <p>
              Every subscriber receives a personal SAP User ID and Password.
            </p>
          </div>

          <div className="feature-card">
            <h3>📚 Latest SAP Versions</h3>
            <p>
              Access SAP S/4HANA 2025, SAP ECC 6.0 and SAP SuccessFactors.
            </p>
          </div>

          <div className="feature-card">
            <h3>💻 Functional & Technical Practice</h3>
            <p>
              Practice SAP Functional modules as well as Technical modules on live servers.
            </p>
          </div>

          <div className="feature-card">
            <h3>🛠 Technical Support</h3>
            <p>
              Get quick assistance for login, server access and technical issues.
            </p>
          </div>

          <div className="feature-card">
            <h3>💰 Affordable Pricing</h3>
            <p>
              Flexible monthly and long-term subscription plans for every learner.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;