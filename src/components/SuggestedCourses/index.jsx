import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Course from "../Course";
import { Typography } from "@material-ui/core";
import imgExpoloring from '../../assets/img/imgExpoloring.png';

const useStyles = makeStyles(styles);

const SuggestedCourses = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography>Maybe you will be interested</Typography>
      </div>

      <div className={classes.container}>
        <div className={classes.cardGroup}>
          {/* Course */}
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div>

      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <div className="headline">
            <Typography>Expand your career opportunities</Typography>
          </div>
          <div className="text">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nisl
              et pharetra fermentum semper. In blandit euismod suscipit gravida.
              Maecenas tempus nisl, vestibulum dis vulputate. Et sit venenatis
              eget tempus, tincidunt at. Non malesuada viverra suspendisse
              massa...
            </Typography>
          </div>
          <div className={classes.button}>
            <Typography>Explore Now</Typography>
          </div>
        </div>
        <img className={classes.imgExpoloring} src={imgExpoloring}></img>
      </div>
    </div>
  );
};

export default SuggestedCourses;
