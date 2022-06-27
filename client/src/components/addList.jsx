import React from "react";
import style from "./addList.module.css";

const AddList = ({ content, handleClick }) => {
    return (
        <>
            <div className={style.container}>
                <span className={style.list_title}>{content.title}</span>
                <span className={style.list_part}>{content.type}</span>
                <button
                    className={style.list_btn}
                    onClick={(e) => handleClick(e, content.id)}
                >추가</button>
            </div>
        </>
    );
};

export default AddList;
