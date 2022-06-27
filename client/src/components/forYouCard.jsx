import React from "react";
import style from "./forYouCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPost, setMessageModal } from "../action";

const ForYouCard = ({ review }) => {
    const { userlike, title, category, image } = review
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const likeColor = userlike

    const handleShareKakao = () => {
        dispatch(setPost(review));
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
        }
        window.Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title,
                description: `${category}(때)의 추천 리스트를 공유했습니다!`,
                imageUrl: image,
                link: {
                    mobileWebUrl: `${process.env.REACT_APP_CLIENT_URL}/foryouview/:${review.id}`,
                    androidExecParams: "test",
                },
            },
            buttons: [
                {
                    title: "추천 리스트 공유해서 보기",
                    link: {
                        mobileWebUrl: `${process.env.REACT_APP_CLIENT_URL}/foryouview/:${review.id}`,
                    },
                },
            ],
        });
    };

    const handleShareUrl = () => {
        let dummy = document.createElement("input");
        let text = process.env.REACT_APP_CLIENT_URL + `/foryouview/:${review.id}`;

        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        dispatch(setMessageModal(true, `클립보드 복사 완료 🙌🏻`));
        dispatch(setPost(review));
    };

    const handlePostInfo = () => {
        dispatch(setPost(review));
        navigate(`/foryouview/:${review.id}`)
    }

    return (
        <div className={style.container} >
            <div className={style.contentbox} onClick={handlePostInfo}>
                <img className={style.img}
                    src={review.image}
                    alt=""
                />
                <div className={style.textbox}>
                    <div className={style.titleBox}>
                        <p className={style.title}>{review.title}</p>
                        <div className={`${likeColor ? style.like : style.unlike}`}>
                            <i className="fas fa-heart"></i>
                            <div className={style.iconText}>좋아요<br />{review.like}개</div>
                        </div>
                    </div>
                    <p className={style.writer}>by {review.nickname}</p>
                    <div className={style.category}>{review.category}</div>
                </div>
            </div>
            <div className={style.sharebox} >
                <button
                    className={style.btnUrl}
                    onClick={handleShareUrl}
                >URL로 공유</button>
                <button
                    className={style.btnKakao}
                    onClick={handleShareKakao}
                >
                    카톡으로 공유
                </button>
            </div>
        </div>
    );
};

export default ForYouCard;