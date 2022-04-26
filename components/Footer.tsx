import "bulma/css/bulma.min.css";
import { FC } from "react";
import { FaInstagram } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="has-text-centered">
        <p>
          <strong>LIBERI KIDS</strong>{" "}
          <span>
            <a
              className=""
              target="_blank"
              href="https://www.instagram.com/liberikids_/"
              rel="noreferrer"
            >
              <FaInstagram size="1em" />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
