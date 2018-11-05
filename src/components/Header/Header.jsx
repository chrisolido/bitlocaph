import React from "react";
import {
  WEBSITE_NAME,
  ABOUT_US,
  CONTACT_US,
  PASSENGER,
  DRIVER,
  HOW_TO
} from "../../constants/header";

const Header = () => {
  const navList = [
    {
      name: PASSENGER,
      url: "passenger"
    },
    {
      name: DRIVER,
      url: "driver"
    },
    {
      name: HOW_TO,
      url: "how-to"
    },
    {
      name: CONTACT_US,
      url: "contact-us"
    },
    {
      name: ABOUT_US,
      url: "about-us"
    }
  ];

  return (
    <header className="Header">
      <nav>
        <div>
          <span className="header-name">{WEBSITE_NAME}</span>
        </div>
        <div>
          <ul>
            {navList.map(({ name, url }) => (
              <li key={url}>
                <a href={`#${url}`}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
