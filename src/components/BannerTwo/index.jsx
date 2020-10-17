import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import imgInstructor from "../../assets/img/imgInstructor.png";

const useStyles = makeStyles(styles);

const BannerTwo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* Content */}
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.title}>Become an instructor</div>
            <div className={classes.text}>
              Top instructors from around the world teach millions of students
              on M-learning. We provide the tools and skills to teach what you
              love.
            </div>
            <div className={classes.button}>Start teaching today</div>
          </div>
        </div>
        {/* Image */}
        <div className={classes.imgWrapper}>
          <img className={classes.imgInstructor} src={imgInstructor}></img>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
