import React, { useState } from "react";
import style from "./contentsSearchList.module.css";

import { useDispatch } from "react-redux";
import { contentsModal } from "../action";

const ContentsSearchList = ({ contentsSearch, showText }) => {
  const dispatch = useDispatch();

  const handleContentsInfo = (info) => {
    dispatch(contentsModal(true, info));
  };
  return (
    <div className={style.main}>
      <div className={style.search_container}>
        "<em className={style.search_text}>{showText}</em>" (으)로 검색한
        결과입니다
      </div>
      <div className={style.container}>
        {contentsSearch.map((el) => (
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
      </div>
    </div>
  );
};

export default ContentsSearchList;
