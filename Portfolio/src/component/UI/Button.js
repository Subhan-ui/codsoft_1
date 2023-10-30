import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link to={props.to} className={classes.btn}>
      {props.children}
    </Link>
  );
};

export default Button;
