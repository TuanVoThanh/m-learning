import React from "react";
import "./styles.css";

import CourseItem from "../CourseItem/index";

const CourseSuggest = () => {
  return (
    <div className="courseSuggest">
      <div className="courseSuggest__container">
        {/* Text */}
        <div className="courseSuggest_text">
          <h5 className="courseSuggest__text_title">Maybe you will be interested</h5>
        </div>
        {/* Course List */}
        <div className="courseSuggest__content">
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>
    </div>
  );
};

export default CourseSuggest;
