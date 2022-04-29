import { FC, useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useGlobal } from "../pages/store/globalStates";

const Navbar: FC = () => {
  const { isScroll, activateScroll } = useGlobal();
  const [isBurguerActive, setIsBurguerActive] = useState(false);
  const burguerMenuHandler = () => {
    setIsBurguerActive(!isBurguerActive);
  };
  const onisScrollHandler = () => {
    activateScroll();
  };
  return (
    <div>
      <nav
        className="navbar is-dark container is-fluid "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="./" className="mt-2">
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
            <a onClick={onisScrollHandler} className="navbar-item">
              PRODUCTS
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className=" "
                  target="_blank"
                  href="https://www.instagram.com/liberikids_/"
                  rel="noreferrer"
                >
                  <FaInstagram className="mr-3" size="2em" color="white" />
                </a>

                <a
                  className=""
                  target="_blank"
                  href="https://web.whatsapp.com/send?phone=+543426156014"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="" size="2em" color="#25D366" />
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
