import React, { useState, useEffect } from "react";
import style from "./contentsModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contentsModal } from "../action";
import { contentsLike } from "../action";
import { loginModal } from "../action/index";

import { LikeOutlined, LikeFilled } from "@ant-design/icons";

import axios from "axios";

const ContentsModal = () => {
  const dispatch = useDispatch();

  const contentsInfo = useSelector(
    (state) => state.contentsModalReducer.contentsModal.info
  );

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
        console.log(err);
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
          console.log(err);
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
          console.log(err);
        });
    }
  };

  const modalOff = () => {
    dispatch(contentsModal(false, {}));
  };

  return (
    <div className={style.main} onClick={modalOff}>
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <span className={style.close} onClick={modalOff}>
          &times;
        </span>
        <span className={style.title}>{contentsInfo.title}</span>
        <div className={style.info}>
          <span className={style.year}>
            개봉/출시/등록일: {contentsInfo.year}
          </span>
          <span className={style.runtime}>runtime: {contentsInfo.runtime}</span>
          <div className={style.link_container}>
            <a href={contentsInfo.link} target="_blank" className={style.link}>
              해당 컨텐츠로 바로가기
              <span className={style.pageMove}>
                <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
          </div>
        </div>
        <button
          className={style.like}
          onClick={() => checkLoginStatus(likeCheck)}
        >
          {like && isLogin ? <LikeFilled /> : <LikeOutlined />}
        </button>
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
            <span className={style.summary}>{contentsInfo.summary}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsModal;
