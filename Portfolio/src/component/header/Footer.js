import React from "react";
import classes from './Footer.module.css';

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {BiLogoGmail} from 'react-icons/bi'
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={classes.CompleteFooter}>
      <div className={classes.footerCopyright}></div>
      <div className={classes.footerCopyright}>
      Copyright © {year} Subhan Shoukat
      </div>
    <div className={classes.Footer}>
        <a href="https://www.facebook.com/subhan.shoukat.7/" target="_blank" rel="noopener noreferrer">
      <FaFacebook />
        </a>
        <a href="https://github.com/Subhan-ui/" target="_blank" rel="noopener noreferrer">
      <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/subhan-shoukat-725aa0218/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin/>
        </a>
        <a href="mailto:subhanshoukat1908@gmail.com" target="_blank" rel="noopener noreferrer">
      <BiLogoGmail/>
        </a>

    </div>
    </div>
  );
};

export default Footer;
