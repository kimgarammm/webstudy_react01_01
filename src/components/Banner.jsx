import React from "react";

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">"스트릿 출신" </h3>
        <p className="desc">
          누군가 키우다 버려져서 험난한 길거리 생활 끝에 집사를 만났다.
          <a href="/" title="유튜브 페이지 이동">
            http://www.instagram.com/myeng_eee
          </a>
        </p>
        <span className="small">배너 유형01</span>
      </div>
    </section>
  );
}

export default Banner;
