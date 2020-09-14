import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./Footer.scss";
import {ReactComponent as Linkedin} from "../../assets/contact/linkedin.svg";
import {ReactComponent as Github} from "../../assets/contact/github.svg";
import {ReactComponent as Email} from "../../assets/contact/email.svg";
const Footer = () => {
  return (
    <div className="container Footer">
      <hr />
      <div className="LogoContainer">
          <Link to={'/'}>
              <img src={Logo} alt="logo" />
          </Link>
          <div className="LogoText">Cora Wang · 2020</div>
          <div className="contact">
              <a href={"https://linkedin.com/in/corawang"} target="_blank" rel="noopener noreferrer"> <Linkedin/> </a>
              <a href={"https://github.com/wcora"} target="_blank" rel="noopener noreferrer"> <Github/> </a>
              <a href="mailto: corawang@cmu.edu"> <Email/> </a>
          </div>
      </div>
    </div>
  );
};

export default Footer;
