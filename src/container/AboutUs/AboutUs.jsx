import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = (props) => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">{props.desc}</p>
        <button className="custom__button know__more">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" className="knife__img" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus sed
          fuga dolorum voluptas, corrupti harum Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <button className="custom__button know__more">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
