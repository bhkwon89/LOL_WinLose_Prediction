import React, { useEffect } from "react";
import style from "./forYouContentModal.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { contentsLike } from "../action";
import { loginModal } from "../action/index";

const ForYouContentModal = ({ contentsInfo, handleContentInfo }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.loginReducer);
  const like = useSelector((state) => state.contentsLikeReducer.likeOnOff);

  useEffect(() => {
    if (isLogin) {
      getLikeInfo();
    }
  }, [like]);

  const getLikeInfo = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/contents/like/${contentsInfo.id}`
      )
      .then((res) => {
        if (res.data.data) {
          dispatch(contentsLike(true));
        } else {
          dispatch(contentsLike(false));
        }
      })
      .catch((err) => {
        alert(err)
      });
  };

  const checkLoginStatus = (callback) => {
    if (isLogin) {
      callback();
    } else {
      dispatch(loginModal(true));
      return;
    }
    return;
  };

  const likeCheck = () => {
    if (!like && isLogin) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/contents/like/${contentsInfo.id}`
        )
        .then((data) => {
          console.log("data", data);
          dispatch(contentsLike(true));
        })
        .catch((err) => {
          alert(err)
        });
    } else {
      axios
        .delete(
          `${process.env.REACT_APP_SERVER_URL}/contents/like/${contentsInfo.id}`
        )
        .then(() => {
          dispatch(contentsLike(false));
        })
        .catch((err) => {
          alert(err)
        });
    }
  };

  return (
    <div className={style.main} onClick={handleContentInfo}>
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <div className={style.header}>
          <div className={style.close} onClick={handleContentInfo}>
            &times;
          </div>
          <button
            className={style.like}
            className={`${like ? style.like : style.unlike}`}
            onClick={() => checkLoginStatus(likeCheck)}
          >
            <i className="far fa-thumbs-up"></i>
          </button>
        </div>
        <div className={style.title}>{contentsInfo.title}</div>
        <div className={style.info}>
          <span className={style.year}>개봉/출시/등록일: {contentsInfo.year}</span>
          <span className={style.runtime}>runtime: {contentsInfo.runtime}</span>
          <a href={contentsInfo.link} target="_blank" className={style.link}>
            해당 컨텐츠로 바로가기
            <span className={style.pageMove}>
              <i className="fas fa-external-link-alt"></i>
            </span>
          </a>
        </div>
        <div className={style.list}>
          <img className={style.image} src={contentsInfo.image} alt="" />
          <div className={style.list_container}>
            <div className={style.genres_container}>
              <span className={style.genres_text}>장르</span>
              <span className={style.genres}> {contentsInfo.genres}</span>
            </div>
            <div className={style.director_container}>
              <span className={style.director_text}>감독</span>
              <span className={style.director}> {contentsInfo.director}</span>
            </div>
            <div className={style.summary}>{contentsInfo.summary}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYouContentModal;
