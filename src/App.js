import React from "react";
import "./index.css";
import {
  Navbar,
  Hero,
  Achievements,
  StudentsAchievements,
  HallOfFame,
  Courses,
  OurProducts,
  Avengers,
  Partners,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Achievements />
        <StudentsAchievements title={"Our Achiever’s Work with"} />
        <HallOfFame />
        <Courses />
        <StudentsAchievements title={"Hackathon Companies"} />
        <OurProducts />
        <Avengers />
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default App;
