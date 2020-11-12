import React from "react";
import "./styles.css";
import imgCourse from '../../assets/img/imgCourse.png';
import {ReactComponent as IconStars} from '../../assets/svg/stars.svg';

const CourseItem = () => {
  return (
    <div className="courseItem__item">
      <img src={imgCourse} className="courseItem__item_image" alt="course" />
      <div className="courseItem__item_text">
        <p className="courseItem__item_text_title">
          User Experience Design For Mobile Apps & Websites
        </p>
        <div className="courseItem__item_text_author">Chris Haroun</div>
      </div>
      <div className="courseItem__item_review">
        <div className="courseItem__item_review_stars">
          <IconStars />
        </div>
        <div className="courseItem__item_review_views">(3,923)</div>
      </div>
      <div className="courseItem__item_price">
        <div className="courseItem__item_price_default">$124.99</div>
        <div className="courseItem__item_price_discount">$99</div>
        <div className="bestseller">Bestseller</div>
      </div>
    </div>
  );
};

export default CourseItem;
