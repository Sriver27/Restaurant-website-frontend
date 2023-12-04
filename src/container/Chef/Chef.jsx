import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = (props) => (
  <div className="app__bg app__wrapper section__padding ">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant"> What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium.
          </p>
        </div>
        <p className="p__opensans"> {props.chefBio} </p>
      </div>
      <div className="app__chef-sign">
        <p>{props.chefName}</p>
        <p className="p__cormorant">Speciality - {props.signatureDish}</p>
        {/* <img src={images.sign} alt="sign" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
