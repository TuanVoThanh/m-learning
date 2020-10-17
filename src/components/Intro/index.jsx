import React from "react";
import { styles } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

const useStyles = makeStyles(styles);

const Intro = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* Intro Left */}
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.icon}>
              <OndemandVideoIcon className={classes.iconProps} />
            </div>
            <div className={classes.text}>
              <Typography>130,000 online courses</Typography>
              <Typography>Enjoy a variety of fresh topics</Typography>
            </div>
          </div>
        </div>
        {/* Intro Center */}
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.icon}>
              <OndemandVideoIcon className={classes.iconProps} />
            </div>
            <div className={classes.text}>
              <Typography>130,000 online courses</Typography>
              <Typography>Enjoy a variety of fresh topics</Typography>
            </div>
          </div>
        </div>
        {/* Intro Right */}
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.icon}>
              <OndemandVideoIcon className={classes.iconProps} />
            </div>
            <div className={classes.text}>
              <Typography>130,000 online courses</Typography>
              <Typography>Enjoy a variety of fresh topics</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
