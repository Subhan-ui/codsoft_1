import React from "react";
import classes from "./Welcome.module.css";

import welcome from "../../Assets/welcome.gif";

const Welcome = () => {
  return (
    <React.Fragment>
    <div className={classes.welcomePage}>
      <img src={welcome} alt="welcome-page" />
    </div>
    </React.Fragment>
  );
};

export default Welcome;
