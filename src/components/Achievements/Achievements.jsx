import React from "react";
import "./styles.css";

const Achievements = () => {
  return (
    <div className="section achievements">
      <div className="section-divider" />
      <h1 className="section-title">Pure Hardwork, No Shortcuts!</h1>
      <div className="achievements-list">
        <div className="achievements-list-item">
          <h5>{`400+`}</h5>
          <p>Different Courses</p>
        </div>
        <div className="achievements-list-item">
          <h5>{`400000+`}</h5>
          <p>Students Enrolled</p>
        </div>
        <div className="achievements-list-item">
          <h5>{`10000+`}</h5>
          <p>Successful Transition </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
