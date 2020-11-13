import React from "react";
import "./styles.css";

import CourseItem from "../CourseItem/index";
import Carousel from "react-elastic-carousel";

const CourseSuggest = () => {
  return (
    <div className="courseSuggest">
      <div className="courseSuggest__container">
        {/* Text */}
        <div className="courseSuggest_text">
          <h5 className="courseSuggest__text_title">
            Maybe you will be interested
          </h5>
        </div>
        {/* Course List */}
        <div className="courseSuggest__content">
          <Carousel itemsToShow={1}>
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CourseSuggest;
