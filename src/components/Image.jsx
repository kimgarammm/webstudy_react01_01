import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <h2>귀염뽀짝 김명이</h2>
      <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.</p>
      <div className="image__inner container">
        <article className="image img1">
          <h3 className="image__title">고양이계의 연예인</h3>
          <p className="image__desc">
            김명이 너무 귀엽죠 김명이 너무 사랑스럽죠 김명이 너무 이쁘죠
          </p>
          <a className="image__btn" href="/">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">고양이계의 마스코트</h3>
          <p className="image__desc">
            명이는 8kg 뚱냥이지만 큰만큼 더 귀여워요 이렇게 귀여울 수 있나 싶을
            정도로 귀여워요
          </p>
          <a className="image__btn yellow" href="/">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
