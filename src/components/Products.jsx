import "./Products.css";

function Products() {
  return (
    <section className="products" id="products">

      <div className="container">

        <span className="section-tag">OUR PRODUCTS</span>

        <h2>Professional SAP Server Access Solutions</h2>

        <p className="section-description">
          Practice on live enterprise SAP environments with dedicated user access,
          cloud hosting, and the latest SAP releases.
        </p>

        {/* Featured Product */}

        <h3 className="category-title">⭐ Featured Product</h3>

        <div className="products-grid">

          <div className="product-card featured">

            <span className="badge">Most Popular</span>

            <h3>SAP S/4HANA 2025</h3>

            <p>
              Experience the latest SAP S/4HANA 2025 with SAP Fiori,
              Embedded Analytics and AI-powered business processes.
            </p>

            <ul>
              <li>✔ Latest SAP S/4HANA 2025</li>
              <li>✔ SAP Fiori Launchpad</li>
              <li>✔ Functional Modules</li>
              <li>✔ Technical Modules</li>
              <li>✔ Dedicated User Login</li>
              <li>✔ 24×7 Cloud Access</li>
              <li>✔ Practice Exercises</li>
              <li>✔ Technical Support</li>
            </ul>

            <button>Get Access</button>

          </div>

        </div>

        {/* ERP Products */}

        <h3 className="category-title">ERP Systems</h3>

        <div className="products-grid">

          <div className="product-card">
            <h3>SAP ECC 6.0 EHP8</h3>
            <p>Complete ERP Practice Server.</p>
          </div>

          <div className="product-card">
            <h3>SAP Business One</h3>
            <p>ERP Solution for Small & Medium Businesses.</p>
          </div>

        </div>

        {/* Cloud Products */}

        <h3 className="category-title">Cloud Products</h3>

        <div className="products-grid">

          <div className="product-card">
            <h3>SAP BTP</h3>
            <p>Business Technology Platform.</p>
          </div>

          <div className="product-card">
            <h3>SAP SuccessFactors</h3>
            <p>Cloud HXM Solution.</p>
          </div>

          <div className="product-card">
            <h3>SAP Analytics Cloud</h3>
            <p>Analytics & Planning.</p>
          </div>

          <div className="product-card">
            <h3>SAP Datasphere</h3>
            <p>Business Data Cloud.</p>
          </div>

        </div>

        {/* Business Solutions */}

        <h3 className="category-title">Business Solutions</h3>

        <div className="products-grid">

          <div className="product-card">SAP Ariba</div>
          <div className="product-card">SAP Concur</div>
          <div className="product-card">SAP Fieldglass</div>
          <div className="product-card">SAP Build Apps</div>
          <div className="product-card">SAP Build Process Automation</div>
          <div className="product-card">SAP Integration Suite</div>
          <div className="product-card">SAP HANA Database</div>

        </div>

      </div>

    </section>
  );
}

export default Products;