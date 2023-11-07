import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href="#/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links popFonts">
            <NavLink to="/" className="link-1 ">
              Home
            </NavLink>
            <NavLink to="/products" className="link ">
              Products
            </NavLink>
            <NavLink to="/form" className="link ">
              Register
            </NavLink>
            <NavLink to="/584647" className="link ">
              Admin
            </NavLink>
          </p>

          <p>ebay &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
