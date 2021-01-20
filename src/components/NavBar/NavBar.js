import React from "react";
import "./NavBar.css";

export const Header = () => {
  return (
    <nav className="header">
      <a>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </a>
      <ul className="header__categories">
        <a>
          <li className="header__categories__item">Category 1</li>
        </a>
        <a>
          {" "}
          <li className="header__categories__item">Category 2</li>
        </a>
        <a>
          {" "}
          <li className="header__categories__item">Category 3</li>
        </a>
        <a>
          {" "}
          <li className="header__categories__item">Category 4</li>
        </a>
      </ul>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIcon">Search</div>
      </div>

      <div className="header__nav">
        <a className="header__link">
          <div className="header__basketItem">
            <div>Cart</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
