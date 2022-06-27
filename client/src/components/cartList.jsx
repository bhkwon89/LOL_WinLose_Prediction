import React from "react";
import style from "./cartList.module.css";

const CartList = ({ content, handleDelete }) => {
    return (
        <div className={style.container}>
            <span className={style.list_title}>{content.title}</span>
            <span className={style.list_part}>{content.type}</span>
            <button
                className={style.list_btn}
                onClick={() => { handleDelete(content.id) }}
            >삭제</button>
        </div>
    );
};

export default CartList;
