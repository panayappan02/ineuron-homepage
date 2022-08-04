import React from "react";
import "./styles.css";

const OurProducts = () => {
  return (
    <div className="section op">
      <div className="section-divider" />
      <h1 className="section-title">Our Products</h1>
      <div className="op-content">
        <div className="op-card">
          <img
            src={require("../../assets/images/op1.svg").default}
            alt=""
            className="op-card-img"
          />
          <h5 className="op-title">Job Portal</h5>
          <p className="op-desc">
            Use exceptional templates for a stand-out resume minus the sign up
            process
          </p>
        </div>
        <div className="op-card">
          <img
            src={require("../../assets/images/op2.svg").default}
            alt=""
            className="op-card-img"
          />
          <h5 className="op-title">Internship Portal</h5>
          <p className="op-desc">
            Use exceptional templates for a stand-out resume minus the sign up
            process
          </p>
        </div>
        <div className="op-card">
          <img
            src={require("../../assets/images/op3.svg").default}
            alt=""
            className="op-card-img"
          />
          <h5 className="op-title">Become an affliate</h5>
          <p className="op-desc">
            Use exceptional templates for a stand-out resume minus the sign up
            process
          </p>
        </div>
        <div className="op-card">
          <img
            src={require("../../assets/images/op4.svg").default}
            alt=""
            className="op-card-img"
          />
          <h5 className="op-title">Hall of fame</h5>
          <p className="op-desc">
            Use exceptional templates for a stand-out resume minus the sign up
            process
          </p>
        </div>
        <div className="op-card">
          <img
            src={require("../../assets/images/op5.svg").default}
            alt=""
            className="op-card-img"
          />
          <h5 className="op-title">InBlog</h5>
          <p className="op-desc">
            Use exceptional templates for a stand-out resume minus the sign up
            process
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
