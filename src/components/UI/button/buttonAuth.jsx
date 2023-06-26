import React from "react";
import classes from "./buttonAuth.module.css";

const ButtonAuth = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.BtnAuthOpen}>
      {children}
    </button>
  );
};

export default ButtonAuth;
