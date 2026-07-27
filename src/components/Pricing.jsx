import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing" id="pricing">

      <div className="container">

        <span className="section-tag">PRICING PLANS</span>

        <h2>Choose Your SAP Server Access Plan</h2>

        <p className="section-description">
          Affordable SAP server access with instant activation and 24×7 cloud availability.
        </p>

        <div className="pricing-grid">

          {/* SAP S/4HANA 2025 */}

          <div className="pricing-card featured">

            <span className="popular-badge">⭐ MOST POPULAR</span>

            <h3>SAP S/4HANA 2025</h3>

            <ul className="price-list">
              <li><strong>1 Month</strong> - ₹1000</li>
              <li><strong>3 Months</strong> - ₹2500</li>
              <li><strong>6 Months</strong> - ₹4500</li>
              <li><strong>12 Months</strong> - ₹9000</li>
            </ul>

            <ul className="features-list">
              <li>✔ SAP S/4HANA 2025 Server</li>
              <li>✔ SAP Fiori Launchpad</li>
              <li>✔ Functional Modules</li>
              <li>✔ Technical Modules</li>
              <li>✔ 24×7 Cloud Access</li>
              <li>✔ Dedicated User Login</li>
              <li>✔ Technical Support</li>
            </ul>

            <button>Subscribe Now</button>

          </div>

          {/* SAP ECC */}

          <div className="pricing-card">

            <h3>SAP ECC 6.0</h3>

            <ul className="price-list">
              <li><strong>1 Month</strong> - ₹500</li>
              <li><strong>3 Months</strong> - ₹1000</li>
              <li><strong>12 Months</strong> - ₹3500</li>
            </ul>

            <ul className="features-list">
              <li>✔ SAP ECC 6.0 EHP8</li>
              <li>✔ FI / CO / MM / SD</li>
              <li>✔ ABAP Practice</li>
              <li>✔ 24×7 Server Access</li>
              <li>✔ Dedicated User Login</li>
              <li>✔ Technical Support</li>
            </ul>

            <button>Subscribe Now</button>

          </div>

          {/* SAP SuccessFactors */}

          <div className="pricing-card">

            <h3>SAP SuccessFactors</h3>

            <ul className="price-list">
              <li><strong>1 Month</strong> - ₹3000</li>
              <li><strong>3 Months</strong> - ₹6000</li>
            </ul>

            <ul className="features-list">
              <li>✔ Employee Central</li>
              <li>✔ Recruiting</li>
              <li>✔ Learning Management</li>
              <li>✔ Performance & Goals</li>
              <li>✔ 24×7 Cloud Access</li>
              <li>✔ Technical Support</li>
            </ul>

            <button>Subscribe Now</button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Pricing;