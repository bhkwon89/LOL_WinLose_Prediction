import React from "react";
import style from "./contentsPage_carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { contentsModal } from "../action";

const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-arrow {
    transition: all 200ms ease-in;
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

const ContentsPage_carousel = ({ select_1_category }) => {
  const dispatch = useDispatch();

  const handleContentsInfo = (info) => {
    dispatch(contentsModal(true, info));
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <Wrap>
        <Slider {...settings} className={style.slick_list}>
          {select_1_category.map((el) => (
            <div className={style.contents_container} key={el.id}>
              <img
                className={style.img_card}
                src={el.image}
                alt=""
                onClick={() => handleContentsInfo(el)}
              />
              <span className={style.title}>{el.title}</span>
              <span className={style.like}>좋아요 {el.like}</span>
            </div>
          ))}
        </Slider>
      </Wrap>
    </div>
  );
};

export default ContentsPage_carousel;
