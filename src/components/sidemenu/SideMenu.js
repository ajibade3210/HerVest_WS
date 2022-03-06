import React, { useEffect, useState } from "react";
import "./sidemenu.css";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logomini.svg";
import MainmenuItem from "../mainmenu/MainmenuItem";

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    props.onCollapse(inactive);
  }, [inactive]);

  return (
    <div className={`sidemenu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          {inactive ? (
            <img src={logo2} alt="HerVest" />
          ) : (
            <img src={logo} alt="HerVest" />
          )}
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-left-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-right-square-fill"></i>
          )}
        </div>
      </div>

      <MainmenuItem
        onClick={() => {
          if (inactive) {
            setInactive(false);
          }
        }}
        inactive={inactive}
      />

      <div className="sidemenu-footer"></div>
    </div>
  );
};

export default SideMenu;
