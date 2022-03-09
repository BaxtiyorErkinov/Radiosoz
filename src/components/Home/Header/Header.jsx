import React, { useState, useEffect } from "react";
import "./Header.scss";
import { IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isBoxActive, setIsBoxActive] = useState(false);
  const [offset, setOffset] = useState(0);
  const [shadow, setShadow] = useState(false);
  const NavItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "About Us",
      url: "/aboutus",
    },
    {
      id: 4,
      title: "Prices",
      url: "/prices",
    },
  ];

  const getNewPage = () => {
    setIsBoxActive(false);
    window.scroll(0, 0);
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [offset]);
  useEffect(() => {
    if (offset > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }, [offset]);

  return (
    <header className={`${shadow ? "scrolled" : "navbar"}`}>
      <div className="navbar__logo">
        <h3 className="navbar__logo__title">Radiosoz</h3>
      </div>
      <nav
        className={`navbar__nav ${isBoxActive ? "navbar__nav__isMenu" : ""}`}
      >
        <ul>
          {NavItems.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.url}
                onClick={getNewPage}
                className={({ isActive }) =>
                  isActive ? "active__link" : undefined
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="navbar__toggle">
        <span
          className={`navbar__toggle__icon ${
            isBoxActive ? "active_toggle" : ""
          }`}
          onClick={() => setIsBoxActive(!isBoxActive)}
        >
          {isBoxActive ? (
            <Close sx={{ fontSize: "30px" }} />
          ) : (
            <Menu sx={{ fontSize: "30px" }} />
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
