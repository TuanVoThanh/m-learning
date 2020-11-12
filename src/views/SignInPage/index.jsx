import React from "react";
import Bottombar from "../../components/Bottombar";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SignIn from "../../components/SignIn";
import "./styles.css";

const SignInPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SignIn />
      <Footer />
      <Bottombar />
    </React.Fragment>
  );
};

export default SignInPage;
