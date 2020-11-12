import React from "react";
import "./styles.css";
import { ReactComponent as IconClose } from "../../assets/svg/mdi_close.svg";

const Topbar = () => {
  return (
    <div className="topbar">
      <IconClose className="hide" />
      <p className="label white">
        <strong className="white">New student deal</strong> | Sign up now to get
        courses for as low as $12.99 each.
      </p>
      <IconClose className="iconRight" />
    </div>
  );
};

export default Topbar;
