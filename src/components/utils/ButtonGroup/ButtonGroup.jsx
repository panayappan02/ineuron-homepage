import React from "react";
import "./styles.css";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-btn-group">
      <div className="prev" onClick={previous}>
        <IoArrowBackSharp />
      </div>
      <div className="next" onClick={next}>
        <IoArrowForwardSharp />
      </div>
    </div>
  );
};

export default ButtonGroup;
