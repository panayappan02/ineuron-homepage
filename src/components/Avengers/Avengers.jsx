import React, { useState } from "react";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "../utils/ButtonGroup/ButtonGroup";

const Avengers = () => {
  const [data, setData] = useState([
    {
      name: "Hitesh Choudhary",
      role: "CTO",
      img: require("../../assets/images/a1.png"),
    },
    {
      name: "Sudhanshu Kumar",
      role: "AI Engineer & CEO",
      img: require("../../assets/images/a2.png"),
    },
    {
      name: "Krish Naik ",
      role: "CIO",
      img: require("../../assets/images/a3.png"),
    },
    {
      name: "Kiran Sahu ",
      role: "Mentor",
      img: require("../../assets/images/a4.png"),
    },
  ]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1619 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1619, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1072, min: 640 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="section avengers">
      <div className="section-divider" />
      <h1 className="section-title">Tech Avengers</h1>
      <div className="avengers-carousel-wrapper">
        <Carousel
          itemClass=""
          responsive={responsive}
          partialVisible={false}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          autoPlay={true}
        >
          {data.map((item, index) => {
            return (
              <div className="hof-card-wrapper" key={index}>
                <div className="hof-card-container a-card">
                  <div className="a fame-img-container">
                    <img className="a fame-img" src={item.img} />
                  </div>
                  <h5 className="a-name">{item.name}</h5>
                  <p className="a-role">{item.role}</p>
                  <div className="social-icons">
                    <img
                      src={require("../../assets/images/linkedin.png")}
                      alt=""
                    />
                    <img
                      src={require("../../assets/images/youtube1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Avengers;
