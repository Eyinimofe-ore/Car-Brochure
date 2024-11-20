// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth flexCenter  h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false); }}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/cars">Cars</Link>
            <Link to="/value">Our Value</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/get-started" state={{ initialState: 'signup' }}>Get Started</Link>
            <button className="button">
              <Link to="/sign">Login</Link>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
