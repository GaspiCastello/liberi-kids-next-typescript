import styles from "./Navbar.module.css";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import logo from "./logo.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; 

function Navbar() {
  const [isBurguerActive, setIsBurguerActive] = useState(false);
  const burguerMenuHandler = () => {
    setIsBurguerActive(!isBurguerActive);
  };
  return (
    <div>
      <nav
        className={`${styles.navbar} navbar is-dark`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="./home">
            <div className={styles.anchorlogo}>
              <img src={logo} alt="COMO PONGO UN LOGO"></img>
            </div>
          </a>

          <a
            role="button"
            className={`navbar-burger ${isBurguerActive && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={burguerMenuHandler}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isBurguerActive && "is-active"}`}
        >
          <div className="navbar-start">
            <a className="navbar-item">INICIO</a>
            <a className="navbar-item">PRODUCTOS</a>
            <a className="navbar-item">CONTACTO</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-link is-rounded is-medium"
                  target="_blank"
                  href="https://www.instagram.com/liberikids_/"
                >
                  <FaInstagram />
                </a>
                <a
                  className="button is-primary is-rounded is-medium"
                  target="_blank"
                  href="https://web.whatsapp.com/send?phone=+543426156014"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
