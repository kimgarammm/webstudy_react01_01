import React from "react";
import $ from "jquery";
import { Component } from "react";

function HeaderLogo({ menu }) {
  return (
    <li>
      <a href="/">{menu}</a>
    </li>
  );
}
const headerLogo = {
  title: ["kim", "myengee"],
};
const headerMenu = [
  { menu: "헤더 영역" },
  { menu: "슬라이드 영역" },
  { menu: "배너 영역" },
  { menu: "컨텐츠 영역" },
  { menu: "푸터 영역" },
];

function Header(props) {
  function mobileMenu() {
    $(".mobile_menu").slideToggle();
    console.log(true);
  }
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          {headerLogo.title[0]} <em>{headerLogo.title[1]}</em>
        </div>
        <nav className="header__menu">
          <ul>
            {headerMenu.map((txt) => (
              <headerLogo menu={txt.menu} key={txt.menu} />
            ))}
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">로그인</a>
          <button className="mbtn" onClick={mobileMenu}></button>
        </div>
        <div className="mobile_menu">
          <button className="cbtn" onClick={mobileMenu}></button>
          <div class="sub">
            <li>
              <a href="/">헤더 영역</a>
            </li>
            <li>
              <a href="/">슬라이드 영역</a>
            </li>
            <li>
              <a href="/">배너 영역</a>
            </li>
            <li>
              <a href="/">컨텐츠 영역</a>
            </li>
            <li>
              <a href="/">푸터 영역</a>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
