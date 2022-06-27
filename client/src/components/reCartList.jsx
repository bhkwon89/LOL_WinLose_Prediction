import React from "react";
import style from "./reCartList.module.css";

const ReCartList = ({ content, handleDeleteList }) => {

    return (
        <div className={style.container}>
            <span className={style.list_title}>{content.title}</span>
            <span className={style.list_part}>{content.type}</span>
            <button
                className={style.list_btn}
                onClick={() => { handleDeleteList(content.title) }}
            >삭제</button>
        </div>
    );
};

export default ReCartList;
