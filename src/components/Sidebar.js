import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  const clicked = (sign) => {
    console.log(sign);
  };
  return (
    <div className="sidebar">
      <h2>Choose your astro sign</h2>
      <div className="card-cont">
        {props.Signs.map((sign, index) => {
          const s = { backgroundColor: sign.color };
          return (
            <div className="card" key={index} style={s} onClick={clicked}>
              <img src={sign.symbol} alt={sign.name} className="symbol-img" />
              <p className="name">{sign.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
