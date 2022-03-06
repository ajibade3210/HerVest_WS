import React from "react";
import "./mainmenuItem.css";

const menuItems = [
  { name: "Dashboard", to: "/", class: "bi bi-grid-fill" },
  { name: "Plans", to: "/", class: "bi bi-book-fill" },
  { name: "Purse", to: "/", class: "bi bi-handbag-fill" },
  { name: "Transactions", to: "/", class: "bi bi-file-earmark-ppt-fill" },
  { name: " Banks & Cards", to: "/", class: "bi bi-credit-card-2-back-fill" },
  { name: "Girl Code", to: "/", class: "bi bi-people-fill" },
  { name: "Profile", to: "/", class: "bi bi-person-fill" },
  { name: "Portfolio", to: "/", class: "bi bi-pie-chart-fill" },
  { name: "About Harvest", to: "/", class: "bi bi-info-square-fill" },
  { name: "Support", to: "/", class: "bi bi-chat-dots-fill" },
  { name: "Logout", to: "/", class: "bi bi-door-closed-fill" },
];

const MainmenuItem = ({ onClick, inactive }) => {
  return (
    <div className="main-menu" onClick={onClick}>
      {inactive ? (
        <h4 className="main-header">{""}</h4>
      ) : (
        <h4 className="main-header">Menu</h4>
      )}
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.to}
              className={`main-item ${inactive ? "inactive" : ""}`}
            >
              <div className="main-icon">
                <i className={item.class}></i>
              </div>
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainmenuItem;
