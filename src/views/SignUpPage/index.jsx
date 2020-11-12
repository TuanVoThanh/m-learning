import React from "react";
import Bottombar from "../../components/Bottombar";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SignUp from "../../components/SignUp";
import "./styles.css";

const SignUpPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SignUp />
      <Footer />
      <Bottombar />
    </React.Fragment>
  );
};

export default SignUpPage;
