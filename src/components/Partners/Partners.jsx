import React, { useState } from "react";
import "./styles.css";

const Partners = () => {
  const [data, setData] = useState([
    {
      img: require("../../assets/images/opi1.svg").default,
    },
    {
      img: require("../../assets/images/opi2.svg").default,
    },
    {
      img: require("../../assets/images/opi3.svg").default,
    },
    {
      img: require("../../assets/images/opi4.svg").default,
    },
    {
      img: require("../../assets/images/opi5.svg").default,
    },
  ]);

  return (
    <div className="section partners">
      <div className="section-divider" />
      <h1 className="section-title">Our Partnered Institutions</h1>
      <div className="opi-content">
        {data.map((item, index) => {
          return (
            <div className="opi-img-container">
              <img src={item.img} alt="" className="opi-img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
