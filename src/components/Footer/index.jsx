import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Video */}
      <div className={classes.videoWrapper}>
        <div className={classes.videoInnerWrapper}>
          <div className={classes.videoGroup}>
            <div className={classes.video}></div>
            <div className={classes.button}></div>
          </div>
        </div>

        {/* Content */}
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.headline}>Transform your life through education</div>
            <div className={classes.text}>Mohamad Alaloush launched a new career in software development by taking courses on M-learning. What will you be able to do?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
