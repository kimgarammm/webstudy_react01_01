import React from "react";
import $ from "jquery";
import { Component } from "react";

function Header(props) {
  function mobileMenu() {
    $(".mobile_menu").slideToggle();
    console.log(true);
  }
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            kim <em>myengee</em>
          </a>
        </div>
        <nav className="header__menu">
          <ul>
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
