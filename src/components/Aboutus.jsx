import "./Aboutus.css";

function Aboutus() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">
          <span className="section-tag">ABOUT  SAP SERVER ACCESS</span>

          <h2>India's Trusted  SAP Server Access Platform</h2>

          <p>
             SAP Server Access provides affordable and reliable SAP
            practice environments for students, working professionals,
            trainers, institutes and organizations.
          </p>

          <p>
            We offer live enterprise SAP systems that help you gain
            practical experience without setting up your own SAP servers.
            Practice anytime, anywhere with secure cloud access.
          </p>

          <a href="#products" className="about-btn">
            Explore Products
          </a>
        </div>

        <div className="about-right">

          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              Make SAP learning affordable, practical and accessible for
              everyone.
            </p>
          </div>

          <div className="about-card">
            <h3>👨‍💻 Our Vision</h3>
            <p>
              Become India's most trusted SAP Server Access platform for
              learning and professional practice.
            </p>
          </div>

          <div className="about-card">
            <h3>🌐 Enterprise Infrastructure</h3>
            <p>
              Secure cloud-hosted SAP servers with dedicated user access,
              high uptime and regular maintenance.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Why Choose RR?</h3>
            <p>
              Latest SAP versions, expert support, affordable pricing,
              instant activation and real enterprise environments.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Aboutus;