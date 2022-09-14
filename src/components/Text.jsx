import React from "react";

function Text(props) {
  return (
    <section
      id="textType"
      className={`card__wrap ${props.skill[0]} ${props.skill[1]}`}
    >
      <span>꿀팁</span>
      <h2 className="mb50">명이가 좋아하는 모든 것</h2>
      <div className="text__inner container">
        <div className="text t1">
          <h3 className="text__title">밥</h3>
          <p className="text__desc">
            오로지 밥, 그의 밥을 향한 열정은 그 누구도 막을 수 없다. 밥을 안주면
            옆에서 하염없이 울고 있는 그를 볼 수 있다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">집사</h3>
          <p className="text__desc">
            밥을 주는 집사는 명이의 사랑을 듬뿍받고 있다. 가끔 싸우고 서로 삐져
            있기도 하지만 서로를 너무 사랑한다.{" "}
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">이불 속</h3>
          <p className="text__desc">
            고양이판 mbti 덤불 속의 고양이 타입인 명이는 이불 속에서 안정을
            취하는 걸 좋아한다. 다만 이불 속에 들어가기 버거워해서 집사가
            도와줘야 한다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">창 틀</h3>
          <p className="text__desc">
            창 틀에 앉아 바깥세상을 구경하면서 감상에 빠진 명이는 그 누구도 말릴
            수 없다. 그의 하루 루틴 중 최고의 힐링타임
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">얼굴 쓰담쓰담</h3>
          <p className="text__desc">
            얼굴을 쓰다듬어주면 고롱고롱 거리며 입을 헤 벌린다. 특히 귀를
            만져주면 좋아 죽는다. 그 외에 발이나 배를 만지면 맹수를 만나볼 수
            있다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">캣닢</h3>
          <p className="text__desc">
            일주일에 한번 명이는 마약을 한다. 그건 바로 캣닢. 캣닢 냄새를 맡는
            명이는 진짜 마약하는 고양이를 보는 것 같다. 침을 흘리며 구룩구룩
            소리를 낸다.
          </p>
          <a className="text__btn" href="/">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
