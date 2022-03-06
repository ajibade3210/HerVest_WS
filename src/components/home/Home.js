import React from "react";
import profile from "../assets/profile.png";
import "./home.css";

const Home = ({ onCollapse }) => {
  return (
    <div className="home">
      <div className="hero">
        <img src={profile} alt="profile" />
        <div className="hero-details">
          <p>Hello</p>
          <h3>Oluwatobi</h3>
        </div>
      </div>

      <div
        className={`account-details-wrapper ${onCollapse ? "collapse" : ""}`}
      >
        <div className="account-details">
          <div className="account-details-contents">
            <div className="account-details-content1">
              <p>Available balance</p>
              <h4>₦1,063,345.04</h4>
            </div>
            <div className="account-details-content1">
              <p>Impact Investments</p>
              <h4>₦1,007,345.04</h4>
            </div>
            <div className="account-details-content1">
              <p>Total Savings</p>
              <h4>₦2,007,345.04</h4>
            </div>
            <div className="account-details-content1">
              <p>Total Returns</p>
              <h4>₦56,000.00</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
