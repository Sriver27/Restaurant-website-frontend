import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = (props) => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info" style={{ marginLeft: "1rem21" }}>
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginButtom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p
          className="p__cormorant"
          style={{ colot: "#dcca87", margin: "2rem 0" }}
        >
          Address
        </p>
        <p className="p__opensans">{props.addr}</p>
        <p
          className="p__cormorant"
          style={{ colot: "#dcca87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - fri : 10:00 AM - 10:00 PM</p>
        <p className="p__opensans">Sat - Sun : 10:00 AM - 02:00 PM</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        {" "}
        Visit US
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
