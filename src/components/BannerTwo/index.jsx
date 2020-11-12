import React from "react";
import "./styles.css";
import imgBannerTwo from "../../assets/img/imgBannerTwo.png";

const BannerTwo = () => {
  return (
    <div className="bannerTwo">
      <div className="bannerTwo_background">
        <div className="bannerTwo_background_grey"></div>
      </div>
      <div className="bannerTwo_container">
        <div className="bannerTwo__text">
          <h4>Become an instructor</h4>
          <p className="m-3">
            Top instructors from around the world teach millions of students on
            M-learning. We provide the tools and skills to teach what you love.
          </p>
          <button className="btnSecondary long">Start teaching today</button>
        </div>
        <div className="bannerTwo__image">
          <img src={imgBannerTwo} alt="bannerTwo" />
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
