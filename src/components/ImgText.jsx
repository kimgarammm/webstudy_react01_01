import React from "react";

function Imgtext(props) {
  return (
    <section
      id="imgTextType"
      className={`imageText__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2 className="blind">이미지 텍스트 유형</h2>
      <div className="imgText__inner container">
        <div className="imgText__txt">
          <span className="small"></span>
          <h3 className="title">명이의 매력에 빠져들기</h3>
          <p className="desc">
            명이의 매력에 빠져들 수 밖에 없는 사이트입니다.
          </p>
          <ul className="list">
            <li>
              <a href="/">♡잠자는 명이</a>
            </li>
            <li>
              <a href="/">♥애교부리는 명이</a>
            </li>
            <li>
              <a href="/">♡화난 명이</a>
            </li>
            <li>
              <a href="/">♥겁이 많은 명이</a>
            </li>
            <li>
              <a href="/">♡머쓱해하는 명이</a>
            </li>
            <li>
              <a href="/">♥호기심 많은 명이</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img">
          <div className="imgText__img img1">
            <a href="/">잠자는 명이</a>
          </div>
          <div className="imgText__img img2">
            <a href="/" className="blue">
              애교부리는 명이
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imgtext;
