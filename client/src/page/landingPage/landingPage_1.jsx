import React from "react";
import style from "./landingPage_1.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { keyframes } from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Wrap = styled.div`
  slick-slide{
    display: none;
  }

  .slick-prev {
    width: 0;
    position: absolute;
    left: 10px;
    z-index: 900;
  }
  .slick-next {
    width: 0;
    position: absolute;
    right: 35px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 90px;
    font-weight: 700;
    line-height: 0.01;
    opacity: 0.6;
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  .slick-prev:hover,
  .slick-next:hover {
    opacity: 0.3;
  }

  .slick-prev:before {
    content: "‹";
  }
  [dir="rtl"] .slick-prev:before {
    content: "›";
  }

  [dir="rtl"] .slick-next {
    left: -10px;
    top: 70px;
    right: auto;
  }
  .slick-next:before {
    content: "›";
  }
  [dir="rtl"] .slick-next:before {
    content: "‹";
  }

  .slick-dots {
    display: absolute;
    bottom: 4em;
    z-index: 950;
  }
  .slick-dots li button:before {
    color: white;
  }
  .slick-list {
    background-color: black;
  }
  @media screen and (max-width: 820px) {
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
    .slick-prev,
    .slick-next {
      display: none;
    }
  }
`;

const boxFade = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  50% {
    transform: translate3d(0, -25px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }
  80% {
    transform: translate3d(0, -9px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
`;
const Box = styled.div`
  animation: ${boxFade} 1.5s ease infinite;
`;

const LandingPage_1 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
  };

  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.container}>
      <div
        className={style.text_2}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1500"
      ></div>
      <Wrap>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <Slider {...settings}>
            <div className={style.carousel_container}>
              <img
                className={style.img_1}
                src="/landingPage_image/landingPage_1/함께.jpg"
                alt=""
              />

              <span className={style.text_3}>
                All For You와 함께 극복할 수 있습니다
              </span>
            </div>
            <div className={style.carousel_container}>
              <img
                className={style.img_1}
                src="/landingPage_image/landingPage_1/고뇌.jpg"
                alt=""
              />
              <span className={style.text_3}>인생이 힘들고 외로울때 ,</span>
            </div>
            <div className={style.carousel_container}>
              <img
                className={style.img_1}
                src="/landingPage_image/landingPage_1/용기.jpg"
                alt=""
              />
              <span className={style.text_3}>힘을 내고 싶을 때 , </span>
            </div>
            <div className={style.carousel_container}>
              <img
                className={style.img_1}
                src="/landingPage_image/landingPage_1/슬픔.jpg"
                alt=""
              />
              <span className={style.text_3}>한 없이 울고 싶을 때 , </span>
            </div>
            <div className={style.carousel_container}>
              <img
                className={style.img_1}
                src="/landingPage_image/landingPage_1/멘토1.jpg"
                alt=""
              />
              <span className={style.text_3}>내 삶에 조언이 필요할 때 ,</span>
            </div>
            <div className={style.carousel_container}>
              <img
                className={style.img_1}
                src="/landingPage_image/landingPage_1/웃음.jpg"
                alt=""
              />
              <span className={style.text_3}>아무 생각없이 웃고 싶을 때 ,</span>
            </div>
          </Slider>
        </div>
      </Wrap>
      <Box>
        <div className={style.scroll}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </Box>
    </div>
  );
};

export default LandingPage_1;
