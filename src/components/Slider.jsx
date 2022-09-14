import React from "react";

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
      <h2 className="blind">슬라이드 유형</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>극강의 귀여움</span>
              <h3>KIM MYENG EE</h3>
              <p>
                너무 놀리지 말아요! 뚱뚱하다고!
                <br />
                그저 귀여울 뿐이에요!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            <a href="/" className="left">
              <span className="ir">이전 이미지</span>
            </a>
            <a href="/" className="right">
              <span className="ir">다음 이미지</span>
            </a>
          </div>
          <div className="slider__dot">
            <a href="/" className="dot active">
              <span className="ir">1</span>
            </a>
            <a href="/" class="dot">
              <span class="ir">2</span>
            </a>
            <a href="/" class="dot">
              <span class="ir">3</span>
            </a>
            <a href="/" class="play">
              <span class="ir">플레이</span>
            </a>
            <a href="/" class="stop">
              <span class="ir">정지</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
