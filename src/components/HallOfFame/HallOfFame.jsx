import React, { useState } from "react";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup } from "../../components";

const HallOfFame = () => {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto laborum molestiae repudiandae ullam !"
  );
  const [fameList, setFameList] = useState([
    {
      img: require("../../assets/images/person1.jpeg"),
      name: "Sameer Kumar",
      role: "Data Scientist, Bajaj Finserv",
      desc: description,
    },
    {
      img: require("../../assets/images/person2.jpeg"),
      name: "Aakash B",
      role: "Software  Engineer 1, Amazon",
      desc: description,
    },
    {
      img: require("../../assets/images/person3.jpeg"),
      name: "Jay Prakash Bind",
      role: "Program Associate, Wells Fargo",
      desc: description,
    },
    {
      img: require("../../assets/images/person2.jpeg"),
      name: "Aakash B",
      role: "Software  Engineer 1, Amazon",
      desc: description,
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
    <div className="section hof">
      <div className="section-divider" />
      <h1 className="section-title">Hall of fame</h1>
      <div className="carousel-wrapper">
        <Carousel
          itemClass=""
          responsive={responsive}
          partialVisible={false}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          autoPlay={true}
        >
          {fameList.map((fame, index) => {
            return (
              <div className="hof-card-wrapper" key={index}>
                <div className="hof-card-container">
                  <div className="fame-img-container">
                    <img className="fame-img" src={fame.img} alt={fame.name} />
                  </div>
                  <h5 className="fame-name">{fame.name}</h5>
                  <p className="fame-role">{fame.role}</p>
                  <p className="fame-desc">{fame.desc}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HallOfFame;
