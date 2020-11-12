import React from "react";
import BannerOne from "../../components/BannerOne";
import BannerTwo from "../../components/BannerTwo";
import Bottombar from "../../components/Bottombar";
import Carousel from "../../components/Carousel";
import CourseList from "../../components/CourseList";
import CourseSuggest from "../../components/CourseSuggest";
import ExploreNow from "../../components/ExploreNow";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Navbar from "../../components/Navbar";
import Partners from "../../components/Partners";
import Topbar from "../../components/Topbar";
import TopCategories from "../../components/TopCategories";
import './styles.css';

const HomePage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Navbar />
      <Carousel />
      <Intro />
      <CourseList />
      <CourseSuggest />
      <ExploreNow />
      <BannerOne />
      <TopCategories />
      <Partners />
      <BannerTwo />
      <Footer />
      <Bottombar />
    </React.Fragment>
  );
};

export default HomePage;
