import React from "react";
import "./styles.css";
import { ReactComponent as Logo } from "../../assets/svg/m_learning_logo.svg";
import { ReactComponent as IconSearch } from "../../assets/svg/mdi_search.svg";
import { ReactComponent as IconCart } from "../../assets/svg/mdi_shopping_cart.svg";

import MenuListComposition from "./MenuListComposition";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Navbar Left */}
      <div className="nbLeft">
        <Logo className="logo" />
        <div className="categories">
          <MenuListComposition className="nbCategories" />
        </div>
      </div>
      {/* Navbar Search */}
      <form className="nbSearch">
        <input type="text" placeholder="Search for anything"></input>
        <i>
          <IconSearch className="icon" />
        </i>
      </form>
      {/* Group Right */}
      <div className="nbRight">
        <i>
          <IconCart className="icon" />
        </i>
        <button className="btnSecondary mlr">Sign in</button>
        <button className="btnPrimary">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
