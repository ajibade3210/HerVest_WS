import React from "react";
import awards from "../assets/awards.svg";
import garden from "../assets/garden.svg";
import women from "../assets/women.svg";
import "./card.css";

const Card = ({ onCollapse }) => {
  return (
    <div className={`card-wrapper ${onCollapse ? "collapse" : ""}`}>
      <div className="card">
        <div className="card-content awards">
          <h3>Create a savings plan</h3>
          <p>Earn up to 12%</p>
          <img src={awards} alt="awards" />
        </div>
      </div>

      <div className="card">
        <div className="card-content garden">
          <h3>
            Invest in a Female <br /> Farmer
          </h3>
          <p>Get up to 25% returns per anum</p>
          <img src={garden} alt="garden" />
        </div>
      </div>

      <div className="card">
        <div className="card-content women">
          <h3>
            Invite your girls to <br /> HerVest
          </h3>
          <p>Share you girl code.</p>
          <img src={women} alt="women" />
          <div className="coupons">
            <button className="card-btn fill">HG7FIB</button>
            <button className="card-btn">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
