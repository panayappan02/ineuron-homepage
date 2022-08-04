import React, { useState } from "react";
import "./styles.css";
import { IoCaretDown } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup } from "../../components";

const Courses = () => {
  const [courses, setCourses] = useState([
    {
      name: "Live Programs",
      desc: `Get your program with live "instructor led" learning.`,
    },
    {
      name: "Affordable Programs",
      desc: `Find your favourite courses in pocket-friendly ways.`,
      list: [
        {
          img: require("../../assets/images/course1.jpeg"),
          name: "Full Stack Django with React",
          instructor: "Hitesh Choudhary",
          price: "499.00",
        },
        {
          img: require("../../assets/images/course2.jpeg"),
          name: "Mastering DSA with Python",
          instructor: "Hitesh Choudhary",
          price: "499.00",
        },
        {
          img: require("../../assets/images/course4.jpeg"),
          name: "Mastering DSA with C++",
          instructor: "Hitesh Choudhary",
          price: "499.00",
        },
        {
          img: require("../../assets/images/course3.jpeg"),
          name: "Android P with Machine Learning Apps",
          instructor: "Hitesh Choudhary",
          price: "499.00",
        },
        {
          img: require("../../assets/images/course1.jpeg"),
          name: "Full Stack Django with React",
          instructor: "Hitesh Choudhary",
          price: "499.00",
        },
        {
          img: require("../../assets/images/course2.jpeg"),
          name: "Mastering DSA with Python",
          instructor: "Hitesh Choudhary",
          price: "499.00",
        },
        {
          img: require("../../assets/images/course4.jpeg"),
          name: "Mastering DSA with C++",
          instructor: "Hitesh Choudhary",
          price: "499.00",
        },
        {
          img: require("../../assets/images/course3.jpeg"),
          name: "Android P with Machine Learning Apps",
          instructor: "Hitesh Choudhary",
          price: "499.00",
        },
      ],
    },
    {
      name: "Community Programs",
      desc: `Open to all pro-live classes on Youtube for free.`,
    },
    {
      name: "One Neuron",
      desc: `New Neurons all day, every day.`,
    },
    {
      name: "Test Series",
      desc: `Quiz-based courses to prepare you for interviews.`,
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(courses[0].name);

  const getSelectedCourseItem = () =>
    courses.find((item) => item.name === selectedCourse);

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
      breakpoint: { max: 520, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="section courses">
      <div className="section-divider" />
      <h1 className="section-title">What you will learn</h1>
      <div className="select-container">
        <select
          value={selectedCourse}
          onChange={(e) => {
            setSelectedCourse(e.target.value);
          }}
        >
          {courses.map((option, index) => {
            return (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="course-info">
        <h5>{getSelectedCourseItem().name}</h5>
        <p>{getSelectedCourseItem().desc}</p>
      </div>
      <div className="course-carousel-wrapper">
        <Carousel
          itemClass=""
          responsive={responsive}
          partialVisible={false}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          autoPlay={true}
        >
          {courses[1].list.map((course, index) => {
            return (
              <div className="hof-card-wrapper" key={index}>
                <div className="hof-card-container">
                  <img src={course.img} alt="" className="course-img" />
                  <h5 className="course-name">{course.name}</h5>
                  <p className="course-instructor">{course.instructor}</p>
                  <div className="course-rupee">
                    <BiRupee />
                    {course.price}
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

export default Courses;
