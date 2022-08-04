import React from "react";
import "./styles.css";
import { iNeuronLogoWhite } from "../../assets/images";
import { IoChevronUp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="section footer">
      <div
        className="up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoChevronUp />
      </div>
      <div className="footer-content">
        <div className="content-item address">
          <div className="section-divider" />

          <img src={iNeuronLogoWhite} alt="" />
          <p className="address-text">
            17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli,
            Bengaluru, Karnataka 562129
          </p>
          <p className="email">
            <span className="email-bold">Email us: </span>contact@ineuron.ai
          </p>
        </div>
        <div className="content-item company">
          <div className="section-divider" />
          <h5>Company</h5>
          <div>
            <a href="#">About Us</a>
            <a href="#">Hackathon</a>
            <a href="#">Job guarantee</a>
            <a href="#">Privacy policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="content-item company">
          <div className="section-divider" />
          <h5>Products</h5>
          <div>
            <a href="#">Job Portal</a>
            <a href="#">Internship portal</a>
            <a href="#">Become an affliate</a>
            <a href="#">Hall of fame</a>
            <a href="#">InBlog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
