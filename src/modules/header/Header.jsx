import React from "react";
import logo from "img/logo.png";
import { store } from "store";
import { NavLink } from "react-router-dom";

export const Header = ({ isAbsolute = false }) => {
  const listItems = store.header.listItems;

  return (
    <header className={`header ${!isAbsolute ? "header--static" : ""}`}>
      <div className="header__block">
        <div className="header__img">
          <NavLink to="/">
            <img src={logo} alt="not found" />
          </NavLink>
        </div>
        <ul className="header__list">
          {listItems.map((item) => {
            return (
              <li className="header__list-item" key={item.id}>
                <NavLink to={item.url} activeClassName="header__list-item--selected">
                  <span className="header__list-link">{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
