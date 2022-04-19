import "bulma/css/bulma.min.css";
import { FC, useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar: FC = () => {
  const [isBurguerActive, setIsBurguerActive] = useState(false);
  const burguerMenuHandler = () => {
    setIsBurguerActive(!isBurguerActive);
  };
  return (
    <div>
      <nav
        className="navbar is-dark container is-fluid "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="./home" className="mt-2">
            <Image src={logo} width="60" height="60" alt="COMO PONGO UN LOGO" />
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
            <a className="navbar-item"> CONTACTO</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-link is-rounded is-small"
                  target="_blank"
                  href="https://www.instagram.com/liberikids_/"
                  rel="noreferrer"
                >
                  <FaInstagram size="2em" />
                </a>

                <a
                  className="button is-primary is-rounded is-small"
                  target="_blank"
                  href="https://web.whatsapp.com/send?phone=+543426156014"
                  rel="noreferrer"
                >
                  <FaWhatsapp size="2em" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
