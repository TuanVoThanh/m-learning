import React from "react";
import "./styles.css";
import imgBannerEx from "../../assets/img/imgBannerEx.png";
import {ReactComponent as IconArrowRight} from '../../assets/svg/mdi_arrow_forward.svg';

const ExploreNow = () => {
  return (
    <div className="exploreNow">
      <div className="exploreNow__container">
        <div className="exploreNow__image">
          <img src={imgBannerEx} alt="bannerEx"></img>
        </div>
        <div className="exploreNow__text">
          <h6 className="exploreNow__text_title">
            Expand your career opportunities
          </h6>
          <p className="exploreNow__text_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nisl et
            pharetra fermentum semper. In blandit euismod suscipit gravida.
            Maecenas tempus nisl, vestibulum dis vulputate. Et sit venenatis
            eget tempus, tincidunt at. Non malesuada suspendisse massa...
          </p>
          <div className="btnExploreNow">Explore now <IconArrowRight /></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNow;
