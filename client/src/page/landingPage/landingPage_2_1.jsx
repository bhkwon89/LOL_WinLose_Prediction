import React from "react";
import style from "./landingPage_2_1.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage_2_1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contents");
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={style.container}>
      <div className={style.words_us} data-aos="fade-up">
        The world is full of suffering but it is also full of people overcoming
        it.
      </div>
      <div className={style.words_kr} data-aos="fade-up">
        세상은 고통으로 가득하지만, 그것을 극복하는 사람들로도 가득하다
        <br />– 헨렌켈러 –
      </div>
      <div
        className={style.main_text}
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        contents for you
      </div>
      <div className={style.button_sort}>
        <button
          data-aos="flip-left"
          data-aos-duration="1500"
          className={style.contentsPageBtn}
          onClick={handleClick}
        >
          <div className={style.contentsPageBtn_text}>
            콘텐츠 페이지로 바로가기
          </div>
        </button>
      </div>
      <div className={style.imgCard_container_1}>
        <div
          className={style.img_container}
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="50"
        >
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/동기부여3.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#동기부여 #노력</div>
          <div className={style.img_text}>
            하고싶은 일을 생각만 하고 행동하지 않는다면 ,
            <br />
            해야할 일을 뒤로 미루고 있다면 ,
            <br />
            추천 컨텐츠로 동기부여를 얻어 보세요
          </div>
        </div>
        <div
          className={style.img_container}
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="150"
        >
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/도전.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#도전 #할수있다</div>
          <div className={style.img_text}>
            무언가 도전하고 싶은데,
            <br />
            망설여지거나 용기가 나질 않나요 ?
            <br />
            도전에 대한 컨텐츠로 용기를 가져보세요
          </div>
        </div>
        <div
          className={style.img_container}
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="250"
        >
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/멘토.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#멘토 #조언 #솔루션</div>
          <div className={style.img_text}>
            현재 나에게 조언을 해줄 사람이 필요하거나 ,
            <br />
            나보다 먼저 상황을 극복하고 이겨낸
            <br />
            선배들의 조언이 필요하다면 ,
            <br />
            다양한 컨텐츠로 많은 멘토분들에게 조언을 얻어 보세요
          </div>
        </div>
      </div>

      <div className={style.imgCard_container_2}>
        <div
          className={style.img_container}
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="50"
        >
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/웃음_1.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#웃음 #행복 #활력</div>
          <div className={style.img_text}>
            아무 생각없이 웃고 싶나요 ?
            <br />
            스트래스로 현재 상황을 잠시 잊고 싶다면 ,
            <br />
            all for you에서 준비한 컨텐츠로 현재를 잠시 잊어 보세요
          </div>
        </div>
        <div
          className={style.img_container}
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="150"
        >
          <img
            className={style.img_1}
            src="landingPage_image/landingPage_2/슬픔.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#눈물 #슬픔 #감동</div>
          <div className={style.img_text}>
            가끔 이유없이 울고 싶을때가 있을 겁니다
            <br />
            우리 주위의 감동스러운 사연이나 ,
            <br />
            영화, 음악, 책 등을 추천받아 보세요
          </div>
        </div>
        <div
          className={style.img_container}
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="250"
        >
          <img
            className={style.img_1}
            src="https://s3.ap-northeast-2.amazonaws.com/www.allforyou.life/landingPage_image/landingPage_2/%EB%B0%B1%EC%83%89%EC%86%8C%EB%A6%AC.jpg"
            alt=""
          />
          <div className={style.img_main_text}>#백색소리 #힐링</div>
          <div className={style.img_text}>
            불안한 심리상태나, 마음을 진정시켜 보세요
            <br />
            다양한 백색소리로 편안한 마음을 가질 수 있습니다
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage_2_1;
