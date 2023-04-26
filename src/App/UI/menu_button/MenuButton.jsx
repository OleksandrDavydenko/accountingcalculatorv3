import React from "react";
import classes from "./menuButton.module.scss";

export const MenuButton = ({ toggleHandler, toggleState }) => {
  const activeClass = toggleState ? classes.active : "";

  return (
    <div
      onClick={toggleHandler}
      className={`${classes.hamburger} ${activeClass}`}
    >
      <span className={classes.stick}></span>
      <span className={classes.stick}></span>
      <span className={classes.stick}></span>
    </div>
  );
};
