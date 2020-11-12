import React from "react";
import "./styles.css";
import {ReactComponent as IconWorld} from '../../assets/svg/world.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container_upper">
        <iframe title="video" src="https://player.vimeo.com/video/39635139?title=0&byline=0&portrait=0" width="436" height="240" allow="autoplay; fullscreen" ></iframe>
          <div className="footer__container_upper_text">
            <h4>Transform your life through education</h4>
            <p>
              Mohamad Alaloush launched a new career in software development by
              taking courses on M-learning. What will you be able to do?
            </p>
          </div>
        </div>
        <div className="footer__container_below">
          <div className="footer__container_below_col">
            <p>M-learning for Business</p>
            <p>Teach on U-sight</p>
            <p>Get the app</p>
            <p>About us</p>
          </div>
          <div className="footer__container_below_col">
            <p>Terms</p>
            <p>Privacy policy and cookie policy</p>
            <p>Sitemap</p>
            <p>Featured courses</p>
          </div>
          <div className="footer__container_below_col">
            <p>Careers</p>
            <p>Blog</p>
            <p>Help and Support</p>
            <p>Contact us</p>
          </div>
          <div className="footer__container_below_col"></div>
          <div className="footer__container_below_col">
            <div className="language">
              <IconWorld className="iconWorld" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
