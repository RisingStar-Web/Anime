import React from "react";
import Menu from "components/Menu";
import Logo from "components/Logo";
import HeaderRight from "./HeaderRight";
import { Link, useLocation } from "react-router-dom";
export default function Header(props) {
  const menu = [
    { to: "/", label: "Homepage", submenu: [] },
    {
      to: "/",
      label: "Categories",
      submenu: [
        { to: "/", label: "Categories" },
        { to: "/", label: "Anime Details" },
        { to: "/", label: "Anime Watching" },
        { to: "/", label: "Blog details" },
      ],
    },
    { to: "/", label: "Our Blog", submenu: [] },
    { to: "/", label: "Contacts", submenu: [] },
  ];
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <Logo />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="header__nav">
                <nav className="header__menu mobile-menu">
                  <Menu menu={menu} />
                </nav>
              </div>
            </div>
            <div className="col-lg-2">
              <HeaderRight />
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
    </>
  );
}
