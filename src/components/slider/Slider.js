import React from "react";
import piggy from "../assets/piggy.svg";
import "./slider.css";

const Slider = ({ onCollapse }) => {
  const slides = [1, 2, 3, 4, 5, 6, 7];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="">
      <div className="content">
        <div className="content-details">
          <h3>Watch your plans</h3>
          <p>A goal without a plan is just a wish</p>
        </div>
      </div>
      <div id="main-slider">
        <div className="slider-icon left" onClick={slideLeft}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div id="slider" className={`slider ${onCollapse ? "collapse" : ""}`}>
          {slides.map((slide) => (
            <div key={slide} className="slider-card">
              <div className="slider-content">
                <div className="slider-header">
                  <div className="icon">
                    <img src={piggy} alt="piggy" />
                  </div>
                  <h3>Saving for rainy days</h3>
                </div>
                <div className="slider-body">
                  <h3>N400.000</h3>
                  <div className="loader">
                    <div className="complete"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-icon right" onClick={slideRight}>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
