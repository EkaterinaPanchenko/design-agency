import React from "react";
import { store } from "store";

export const Footer = () => {
  const footerMenu = store.footer.footerMenu;

  return (
    <footer className="footer">
      <div className="footer__rights">
        <h2 className="footer__rights-title">Piroll Design, Inc.</h2>
        <p className="footer__rights-description">
          © 2020 Piroll. All rights reserved. Designed by robirurk.
        </p>
      </div>
      <div className="footer__contacts">
        <p className="footer__email">hello@pirolltheme.com </p>
        <p className="footer__phone"> +44 987 065 908</p>
      </div>
      <div className="footer__menu">
        {footerMenu.map((footerItem) => {
          return (
            <div className="footer__item" key={footerItem.id}>
              <ul className="footer__list">
                {footerItem.list.map((item) => {
                  return (
                    <li className="footer__list-item" key={item.id}>
                      <a href={item.url} className="footer__list-link">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
