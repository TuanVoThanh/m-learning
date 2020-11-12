import React from "react";
import "./styles.css";
import imgCarousel from "../../assets/img/bgImage.png";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__frame">
        <img className="carousel__frame_image" src={imgCarousel} alt="carousel" />
        <div className="carousel__frame_text">
          <h3 className="carousel__frame_text_title">
            Learn on <span className="carousel__frame_text_decor">your schedule</span>
          </h3>
          <h6 className="carousel__frame_text_description">
            Study any topic, anytime. Explore thousands of courses starting at
            $12.99 each.
          </h6>
          <button className="btnPrimary">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
