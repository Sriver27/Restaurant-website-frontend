import React from "react";
import { data } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";
import images from "../../constants/images";

const Laurels = (props) => {
  const names = [];
  function awardNames() {
    props.awards.map((award) => {
      names.push({
        title: award.award,
        subtitle: award.organization,
        year: award.year,
      });
    });
    return names;
  }
  awardNames();

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognitions" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {names.map((award) => {
            return (
              <div className="app__laurels_awards-card">
                <img src={images.award01} alt="award" />
                <div className="app__laurels_awards-card_content">
                  <p className="p__cormorant" style={{ color: "#dcca87" }}>
                    {award.title}
                  </p>
                  <p className="p__cormorant">{award.subtitle}</p>
                  <p className="p__cormorant">{`{${award.year}}`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
