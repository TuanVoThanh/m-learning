import React from "react";
import "./styles.css";

import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';

const CourseList = () => {
  return (
    <div className="courseList">
      {/* Text */}
      <div className="courseList_text">
        <h5 className="courseList__text_title">
          The world's largest selection of courses
        </h5>
        <p className="courseList__text_description">
          Choose from 130,000 online video courses with new additions published
          every month
        </p>
      </div>
      <div className="courseList__container">
        {/* Main Courses */}
        <div className="courseList__background">
          <div className="courseList__tab">
            <ScrollableTabsButtonAuto />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
