// SpecialMenu.js
import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = (props) => {
  const [category, setCategory] = useState(props.menu?.categories[0].name);

  const handleCategory = (category) => () => {
    setCategory(category);
  };

  const getCategoryData = () => {
    const selectedCategory = props.menu.categories.find(
      (cat) => cat.name === category
    );
    return selectedCategory ? selectedCategory.items : [];
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu That Fits Your Palate" />
        <h1 className="headtext__cormorant">Our Menu</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__speacialMenu-menu_wine flex__center">
          <div className="btn-container">
            {props.menu.categories.map((cat) => (
              <button
                key={cat.name}
                className={`filter-btn ${category === cat.name && "active"}`}
                onClick={handleCategory(cat.name)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <p className="app__speacialMenu-menu_heading">{category}</p>
          <div className="app__specialMenu-menu_items">
            {getCategoryData().map((item, index) => (
              <MenuItem
                key={item.name + index}
                title={item.name}
                price={item.price}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
