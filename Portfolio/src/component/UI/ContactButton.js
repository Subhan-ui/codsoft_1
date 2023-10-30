import React from "react";
import classes from "./Contact.module.css";

const ContactButton = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={classes.Btn}
    >
      <span className={classes.svgContainer}>{props.children}</span>
      <span className={classes.BG}></span>
    </a>
  );
};

export default ContactButton;
