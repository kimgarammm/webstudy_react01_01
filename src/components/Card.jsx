import React from "react";

function card(props) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2>명이의 치명적인 포인트</h2>
      <p>
        명이의 다양한 모습 중 가장 치명적인 매력을 찾아볼 수 있는 사이트입니다.
        <br />
        #명이 #뚱냥이 #cat #white #8kg #스트릿출신 #개냥이
      </p>
      <div className="card__inner container">
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01.jpg" alt="뚱냥이의 길." />
          </figure>
          <div className="card__body">
            <h3 className="tit">뚱냥이의 길.</h3>
            <p className="desc">
              중형견 수준의 몸무게를 자랑하는 명이, 보통 고양이들은 츄르를
              좋아하지만 명이는 오로지 밥만을 사랑한다. 한국인은 밥심이라는
              모토로 살아가는 명이는 뚱뚱하고 사람을 좋아하지만 겁이 많고 잘
              삐진다
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg02.jpg" alt="타고난 사냥본능." />
          </figure>
          <div className="card__body">
            <h3 className="tit">타고난 사냥본능.</h3>
            <p className="desc">
              거대한 몸을 이끌고 가끔 사냥에 나선다. 특히 집사의 손은 명이가
              가장 탐을 내는 먹잇감. 하지만 그의 사냥 시간은 1분 남짓이다. 잠시
              우다다 뛴 후 헐떡거리며 누워서 그냥 가져오라는 눈빛을 보낸다.
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg03.jpg" alt="나는 겁쟁이랍니다." />
          </figure>
          <div className="card__body">
            <h3 class="tit">나는 겁쟁이랍니다.</h3>
            <p class="desc">
              거대한 몸짓에 어울리지 않는 겁쟁이의 면모를 가진 그. 특히 청소기
              소리나 큰 물건을 집에 들이면 화들짝 놀라며 이불 속으로 숨는다.
              밥먹을 때보다 더 빠른 속도로 이동하는 것이 특징이다.
            </p>
            <a class="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default card;
