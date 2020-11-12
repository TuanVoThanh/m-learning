import React from "react";
import Navbar from "../../components/Navbar";
import CheckOut from "../../components/CheckOut";
import "./styles.css";

const CheckOutPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <CheckOut />
    </React.Fragment>
  );
};

export default CheckOutPage;