import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import Category from "../Category/Category";
export const Header = ({ cats }) => {
  console.log(cats);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        ></img>
      </Link>
      <ul className="listContainer">
        {cats.map((item) => (
          <li className="listContainer__item" key={item}>
            <NavLink to={`/category/${item}`}>{item}</NavLink>
          </li>
        ))}
      </ul>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIcon">Search</div>
      </div>

      <div className="header__nav">
        <a className="header__link">
          <div className="header__basketItem">
            <Link to="/cart">
              <CartWidget />
            </Link>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
