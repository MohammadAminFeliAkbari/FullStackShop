import React from "react";

import images from "./data/images";

import CustomSlider from "./components/custom.slider";

import "./components/custom.slider.css";

export default function Slider() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return (
            <img
              className="rounded-xl cursor-pointer"
              style={{
                height: "300px",
              }}
              key={index}
              src={image.imgURL}
              alt={image.imgAlt}
            />
          );
        })}
      </CustomSlider>
    </div>
  );
}
