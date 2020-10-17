import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Partners = () => {
  const classes = useStyles();
  return (
    <div className="root">
      <div className={classes.divider}></div>
      <div className={classes.title}>Trusted by companies of all sizes</div>

      <div className={classes.logoGroup}>
        <div className={classes.logo}>Logo</div>
        <div className={classes.logo}>Logo</div>
        <div className={classes.logo}>Logo</div>
        <div className={classes.logo}>Logo</div>
      </div>
    </div>
  );
};

export default Partners;
