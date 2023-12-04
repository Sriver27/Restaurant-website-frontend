import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";
import ReactTyped from "react-typed";
const Header = (props) => {
  // map all the initiatives and store the name in a variable
  // console.log(props);
  const names = [];
  function initiativeNames() {
    props.initiatives.map((initiative) =>
      names.push(initiative.name));
  }
  initiativeNames();
  console.log(names);
  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Your Fine Dining</h1>
        <p className="h2__cormorant header_text">
          <ReactTyped strings={names} typeSpeed={100} loop />
        </p>
        {/* <button className="custom__button header__button">Explore Now</button> */}
      </div>
      <div className="app__wrapper_img">
        {" "}
        <img src={images.welcome} alt="welcome" className="welcome__img" />
      </div>
    </div>
  );
};

export default Header;
