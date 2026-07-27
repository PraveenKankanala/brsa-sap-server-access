import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar" id="home">

      <div className="container">

        {/* Logo */}

        <div className="logo">
          <h2>RR SAP SERVER ACCESS</h2>
        </div>

        {/* Navigation Menu */}

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#products">Products</a>
          </li>

          <li>
            <a href="#modules">Modules</a>
          </li>

          <li>
            <a href="#features">Features</a>
          </li>

          <li>
            <a href="#why">Why Choose Us</a>
          </li>

          <li>
            <a href="#pricing">Pricing</a>
          </li>

          <li>
            <a href="#faq">FAQ</a>
          </li>


          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        {/* Subscribe Button */}

        <a href="#pricing" className="nav-btn">
          Subscribe
        </a>

      </div>

    </nav>
  );
}

export default Navbar;