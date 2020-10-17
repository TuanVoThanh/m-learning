import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import imgCourse01 from "../../assets/img/imgCourse01.png";

const useStyles = makeStyles(styles);

const Course = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <img className={classes.imgCourse} src={imgCourse01}></img>
      <div className={classes.content}>
        <div className="headline">
          <Typography>
            User Experience Design For Mobile Apps & Websites
          </Typography>
        </div>
        <div className={classes.author}>
          <Typography>Chris Haroun</Typography>
        </div>
        <div className={classes.rating}>
          <Typography>4.5</Typography>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <Typography>(41,916)</Typography>
        </div>
        <div className={classes.cardBottom}>
          <div className={classes.price}>
            <Typography>$124.99 &ensp;</Typography>
            <Typography>$10</Typography>
          </div>
          <div className={classes.chip}>
            <Typography>Bestseller</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
