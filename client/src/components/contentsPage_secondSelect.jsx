import React from "react";
import style from "./contentsPage_secondSelect.module.css";
import { useDispatch } from "react-redux";
import { contentsModal } from "../action";

const ContentsPage_secondSelect = ({ dataLikeSort }) => {
  const dispatch = useDispatch();
  const handleContentsInfo = (info) => {
    dispatch(contentsModal(true, info));
  };
  return (
    <div className={style.container}>
      {dataLikeSort.map((el) => (
        <div className={style.contents_container} key={el.id}>
          <img
            className={style.img_card}
            src={el.image}
            alt=""
            onClick={() => handleContentsInfo(el)}
          />
          <span className={style.title}>{el.title}</span>
          <div className={style.like}>좋아요 {el.like}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentsPage_secondSelect;
