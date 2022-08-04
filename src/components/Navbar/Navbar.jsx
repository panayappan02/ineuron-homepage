import React, { useState } from "react";
import "./styles.css";
import {
  IoArrowForwardSharp,
  IoSearchOutline,
  IoCaretForwardOutline,
} from "react-icons/io5";
import { iNeuronLogoWhite } from "../../assets/images";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSubListActive, setIsSubListActive] = useState(false);

  const toggleNav = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav className="nav" id="nav">
      <a href="/" className="nav-brand">
        <img src={iNeuronLogoWhite} alt="logo" className="nav-brand-logo" />
      </a>
      <div className="nav-right">
        <div className="nav-search web">
          <IoSearchOutline fontSize={18} />
          <input type="text" placeholder="What do you want to learn" />
          <div className="nav-search-icon-end">
            <IoArrowForwardSharp fontSize={18} />
          </div>
        </div>
        <div
          onClick={toggleNav}
          className={`menu-toggler ${open ? "open" : ""}`}
        >
          <div className="bar half start"></div>
          <div className="bar"></div>
          <div className="bar half end"></div>
        </div>
      </div>
      <nav className={`top-nav ${open ? "open" : ""} nav-mob section`}>
        <a href="/" className="nav-brand">
          <img src={iNeuronLogoWhite} alt="logo" className="nav-brand-logo" />
        </a>
        <div className="nav-mob-content ">
          <div className="nav-search mob">
            <IoSearchOutline fontSize={18} />
            <input type="text" placeholder="What do you want to learn" />
            <div className="nav-search-icon-end">
              <IoArrowForwardSharp fontSize={18} />
            </div>
          </div>
          <div className="btn-container">
            <div className="signin-btn">
              <p>Sign in</p>
            </div>
            <div className="signup-btn">
              <p>Sign up</p>
            </div>
          </div>
          <ul className="nav-mob-list">
            <li
              className="nav-mob-list-item"
              onClick={() => setIsSubListActive(!isSubListActive)}
            >
              Courses
              <IoCaretForwardOutline
                className={`sub-list-icon ${isSubListActive ? "active" : ""}`}
              />
              <ul className={`sub-list ${isSubListActive ? "active" : ""}`}>
                <li className="sub-list-item">Data Science</li>
                <li className="sub-list-item">Big Data</li>
                <li className="sub-list-item">Data Analytics</li>
                <li className="sub-list-item">Web Development</li>
                <li className="sub-list-item">BlockChain</li>
              </ul>
            </li>
            <li className="nav-mob-list-item">One Neuron</li>
            <li className="nav-mob-list-item">Job Portal</li>
            <li className="nav-mob-list-item">Become an affliate</li>
            <li className="nav-mob-list-item">Half of fame</li>
            <li className="nav-mob-list-item">Internship</li>
            <li className="nav-mob-list-item">Company</li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
