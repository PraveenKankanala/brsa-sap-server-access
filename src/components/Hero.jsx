import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-badge">
            🚀 India's Trusted SAP Practice Platform
          </span>

          <h1>
            Practice SAP on
            <br />
            Live Enterprise Servers
          </h1>

          <p>
             SAP Server Access provides affordable access to
            SAP S/4HANA, SAP ECC, SAP BTP, SuccessFactors,
            Fiori and more. Learn with real enterprise systems,
            not simulations.
          </p>

          <div className="hero-buttons">
            <a href="#pricing" className="btn-primary">
              Subscribe Now
            </a>

            <a href="#contact" className="btn-secondary">
              Talk to Us
            </a>
          </div>

          <div className="hero-stats">

            <div>
              <h2>40+</h2>
              <span>SAP Modules</span>
            </div>

            <div>
              <h2>24×7</h2>
              <span>Server Access</span>
            </div>

            <div>
              <h2>99.9%</h2>
              <span>Server Uptime</span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="server-card">

            <h2>Live SAP Servers</h2>

            <ul>
              <li>✅ SAP S/4HANA 2025</li>
              <li>✅ SAP ECC 6.0 EHP8</li>
              <li>✅ SAP SuccessFactors</li>
              <li>✅ SAP Business Technology Platform</li>
              <li>✅ SAP Fiori Launchpad</li>
              <li>✅ SAP Analytics Cloud</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;