import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-cont">
      <nav>
        <h2>Horoscope</h2>
        <div className="form-cont">
          <form action="#">
            <input
              type="text"
              className="search-field"
              placeholder="Your sunsign here..."
            />
            <button className="search-btn">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
