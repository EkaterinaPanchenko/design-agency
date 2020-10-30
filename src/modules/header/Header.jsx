import React from "react";
import logo from "img/logo.png";
import { store } from "store";

export const Header = ({ isAbsolute = false }) => {
  const listItems = store.header.listItems;

  return (
    <header className={`header ${!isAbsolute ? "header--static" : ""}`}>
      <div className="header__block">
        <div className="header__img">
          <a href="/">
            <img src={logo} alt="not found" />
          </a>
        </div>
        <ul className="header__list">
          {listItems.map((item) => {
            return (
              <li className="header__list-item" key={item.id}>
                <a className="header__list-link" href={item.url}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
