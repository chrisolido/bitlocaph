import React, { useState } from "react";
import classNames from "classnames";

import {
  WEBSITE_NAME,
  ABOUT_US,
  CONTACT_US,
  PASSENGER,
  DRIVER,
  HOW_TO
} from "../../constants/header";

import { Button, Icon } from "../";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
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

  const handleOpenNav = () => setOpenNav(!openNav);

  return (
    <header className="Header">
      <nav>
        <div className="Header-left">
          <span className="header-left-name">{WEBSITE_NAME}</span>
        </div>
        <div className="Header-right">
          <div className="dropdown-panel">
            <Button block onClick={handleOpenNav}>
              <Icon name={openNav ? "times" : "bars"} size="lg" />
            </Button>
          </div>
          <div
            className={classNames("nav-list", {
              "is-open": openNav
            })}
          >
            <ul>
              {navList.map(({ name, url }) => (
                <li key={url}>
                  <a href={`#${url}`} onClick={handleOpenNav}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
