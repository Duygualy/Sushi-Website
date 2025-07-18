import "../style/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Sushinn</div>

        <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>


        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu's</Link></li>
        </ul>
      </div>
      {isMobileMenuOpen && (
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu's</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
