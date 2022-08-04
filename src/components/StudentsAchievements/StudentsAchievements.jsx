import React, { useState, useRef } from "react";
import "./styles.css";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

const StudentsAchievements = ({ title }) => {
  const [companies, setCompanies] = useState([
    require("../../assets/images/affine.png"),
    require("../../assets/images/bun&bradstreet.png"),
    require("../../assets/images/greendeck.png"),
    require("../../assets/images/informatica.png"),
    require("../../assets/images/learnyst.png"),
    require("../../assets/images/leventm.png"),
    require("../../assets/images/livspace.png"),
    require("../../assets/images/mindtree.png"),
    require("../../assets/images/musigma.png"),
    require("../../assets/images/odessa.png"),
    require("../../assets/images/robosoft.png"),
    require("../../assets/images/thoughtworks.png"),
    require("../../assets/images/wellnesys.png"),
    require("../../assets/images/wipro.png"),
  ]);

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="section sa">
      <div className="section-divider" />
      <div className="sa-header">
        <h1 className="section-title">{title}</h1>
        <div className="sa-controls">
          <div className="sa-control-left" onClick={() => scroll(-370)}>
            <IoArrowBackSharp fontSize={28} />
          </div>
          <div className="sa-control-right" onClick={() => scroll(370)}>
            <IoArrowForwardSharp fontSize={28} />
          </div>
        </div>
      </div>
      <div className="sa-list" ref={ref}>
        {companies.map((company, index) => {
          return (
            <div className="sa-list-item" key={index}>
              <div className="sa-img-container">
                <img src={company} alt="company-logo" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsAchievements;
