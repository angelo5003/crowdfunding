import "../NavBarStyles.css";
import { useState } from "react";
import logo from "../../../assets/images/logo.svg";
import MobileMenu from "../../../assets/images/icon-hamburger.svg";
import MobileCloseIcon from "../../../assets/images/icon-close-menu.svg";
import MobileNav from "../Mobile/MobileNav";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className="test">
      <header className="nav-outer-container">
        <nav className="nav-inner-container">
          <img src={logo} alt="logo" />
          <ul className="nav-links-container">
            <li className="nav-link">About</li>
            <li className="nav-link">Discover</li>
            <li className="nav-link">Get Started</li>
          </ul>

          <div className="nav-mobile-menu-btn-container">
            {mobileMenu ? (
              <button
                onClick={handleShowMobileMenu}
                className="mobile-menu-btn"
              >
                <img src={MobileCloseIcon} alt="mobile-close-icon" />
              </button>
            ) : (
              <button
                onClick={handleShowMobileMenu}
                className="mobile-menu-btn"
              >
                <img src={MobileMenu} alt="mobile-menu" />
              </button>
            )}
          </div>
          {mobileMenu ? <MobileNav /> : null}
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
