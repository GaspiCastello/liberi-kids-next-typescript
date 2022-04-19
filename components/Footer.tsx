import styles from "./Footer.module.css";
import "bulma/css/bulma.min.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer(props) {
  return (
    <footer class="footer is-dark">
      <div className="columns">
        <div className="column">
          <div class="content has-text-LEFT">
            <p>
              <strong>LANDING PAGE</strong> by{" "}
              <a href="https://github.com/GaspiCastello">Gaspar Castello</a>.
            </p>
          </div>
        </div>
        <div className="column">
          <div class="content has-text-right">
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
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
