import React from "react";
import { styles } from "./styles";
import slide1 from "../../assets/img/hero-shot.jpg";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Carousel = () => {
  const classes = useStyles();

  return <CardMedia className={classes.imgSlide1} image={slide1} href="#" />;
};

export default Carousel;
