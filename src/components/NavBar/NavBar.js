import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <a>
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          ></img>
        </a>
      </Link>
      <ul className="header__categories">
        <a>
          <li className="header__categories__item">
            <NavLink to={`/category/1`}>CAT1</NavLink>
          </li>
        </a>
        <a>
          {" "}
          <li className="header__categories__item">
            <NavLink to={`/category/2`}>CAT2</NavLink>
          </li>
        </a>
        <a>
          {" "}
          <li className="header__categories__item">
            <NavLink to={`/category/3`}>CAT3</NavLink>
          </li>
        </a>
        <a>
          {" "}
          <li className="header__categories__item">
            <NavLink to={`/category/4`}>CAT4</NavLink>
          </li>
        </a>
      </ul>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIcon">Search</div>
      </div>

      <div className="header__nav">
        <a className="header__link">
          <div className="header__basketItem">
            <Link to="/cart">CART</Link>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
