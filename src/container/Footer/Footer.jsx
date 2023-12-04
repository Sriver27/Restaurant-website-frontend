import React from "react";
// import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
// import { GoogleMap } from "react-google-maps";
import "./Footer.css";

const openExternalLink = (url) => {
  window.open(url, "_blank");
};

const Footer = (props) => (
  <div className="app__footer section__padding app__bg">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">{props.addr}</p>
        <p className="p__opensans">+91 8144110261</p>
        <p className="p__opensans">+91 9776948724</p>
      </div>
      <div className="app__footer-links_logo">
        <p className="med__cormorant">{props.resName}</p>
        <p className="p__opensans">
          {" "}
          "The best way to find yourself in the service of others"{" "}
        </p>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <div className="app__footer-links_icons">
          {/* add links to icons */}
          <span onClick={() => openExternalLink(`${props?.socials?.facebook}`)}>
            <FiFacebook />
          </span>{" "}
          <span onClick={() => openExternalLink(`${props?.socials?.twitter}`)}>
            <FiTwitter />
          </span>
          <span
            onClick={() => openExternalLink(`${props?.socials?.instagram}`)}
          >
            <FiInstagram />
          </span>
        </div>
      </div>
      <div className="app__footer-links_map">
        {/* <GoogleMap
          latitude={props.latitude}
          longitude={props.longitude}
          apiKey="YOUR_GOOGLE_MAPS_API_KEY"
          zoom={15}
        /> */}
      </div>
    </div>
    <div className="app__footer__copyright">
      <p className="p__opensans"> 2023 {props.resName} . All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
