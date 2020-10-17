import React from "react";
import { Container, Typography } from "@material-ui/core";
import Alert from "../../components/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

// sections for this page
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Intro from "../../components/Intro";
import CourseList from "../../components/CourseList";
import SuggestedCourses from "../../components/SuggestedCourses";
import BannerOne from "../../components/BannerOne";
import TopCategories from "../../components/TopCategories";
import Partners from "../../components/Partners";
import BannerTwo from "../../components/BannerTwo";
import Footer from "../../components/Footer";

const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Alert />
      <Header />
      <Container className={classes.container}>
        <Carousel />
        <Intro />
        <CourseList />
        <SuggestedCourses />
      </Container>
      <BannerOne />
      <Container className={classes.container}>
        <TopCategories />
        <Partners />
      </Container>
      <BannerTwo />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
