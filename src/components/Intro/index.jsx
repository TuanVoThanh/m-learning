import React from "react";
import "./styles.css";
import { ReactComponent as IconIntro1 } from "../../assets/svg/mdi_intro_1.svg";
import { ReactComponent as IconIntro2 } from "../../assets/svg/mdi_intro_2.svg";
import { ReactComponent as IconIntro3 } from "../../assets/svg/mdi_intro_3.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__content">
          <div className="intro__item">
            <IconIntro1 />
          </div>
          <p className="intro__item_text">
            <p>
              <strong>130,000 online courses</strong>
            </p>
            <p>Enjoy a variety of fresh topics</p>
          </p>
        </div>
        <div className="intro__content">
          <div className="intro__item">
            <IconIntro2 />
          </div>
          <div className="intro__item_text">
            <p>
              <strong>Expert instruction</strong>
            </p>
            <p>Find the right instructor for you</p>
          </div>
        </div>
        <div className="intro__content">
          <div className="intro__item">
            <IconIntro3 />
          </div>
          <div className="intro__item_text">
            <p>
              <strong>Lifetime access</strong>
            </p>
            <p>Learn on your schedule</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
