import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import style from "./carousel.module.css";

export const CarouselWrapper = styled.div`
	max-width: 90vw;
	height: 30vw;
	padding-bottom: 2vw;
    margin: 0 auto;
`;
export const CarouselContents = styled(Slider)`
	width: 90vw;
	height: 30vw;
`;

export const CarouselItemWrapper = styled.div`
	focus {
		outline: none;
	}
`;

export const CarouselItem = styled.div`
	overflow: hidden;
	padding: 1.5vw;
	border-radius: 5px;
`;

const Carousel = () => {
    const [centerCard, setCenterCard] = useState(0);
    const [review, setReview] = useState([])

    const getPost = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/reviews`)
            .then((res) => {
                if (res.status === 200) {
                    setReview(res.data.data)
                }
            })
            .catch((err) => {
                alert(err)
            });
    }

    const Settings = {
        className: 'center',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        draggable: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        beforeChange: (current, next) => setCenterCard(next),
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "60px",
                    arrows: false,
                }
            }
        ]
    };

    useEffect(() => {
        getPost()
    }, [])

    return (
        <CarouselWrapper>
            <CarouselContents {...Settings}>
                {review.map((review, index) => (
                    <CarouselItemWrapper key={index}>
                        <CarouselItem className={style.container}
                            style={{
                                transform: `${index === centerCard ? 'scale(1)' : 'scale(0.8)'}`,
                                opacity: `${index === centerCard ? '1' : '0.5'}`,
                                transition: '0.3s',
                                boxShadow: 'rgb(24 70 23 / 15%) 0px 5px 1vw',
                            }}
                        >
                            <div className={style.contentbox}>
                                <img className={style.img}
                                    src={review.image}
                                    alt="image"
                                />
                                <div className={style.textbox}>
                                    <div className={style.titleBox}>
                                        <p className={style.title}>{review.title}</p>
                                        <div className={style.unlike}>
                                            <i className="fas fa-heart"></i>
                                            <div className={style.iconText}>좋아요<br />{review.like}개</div>
                                        </div>
                                    </div>
                                    <p className={style.writer}>by {review.nickname}</p>
                                    <div className={style.category}>{review.category}</div>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselItemWrapper>
                ))}
            </CarouselContents>
        </CarouselWrapper>
    );
};

export default Carousel;