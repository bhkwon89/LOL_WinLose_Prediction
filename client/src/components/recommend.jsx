import React, { useState, useEffect } from "react";
import style from "./recommend.module.css";
import ForYouContentModal from "./forYouContentModal";

const Recommend = ({ content }) => {
    const [contentModal, setContentModal] = useState(false);

    const handleContentInfo = () => {
        setContentModal(!contentModal);
    };

    return (
        <div className={style.container}>
            <p className={style.num}>{content.content_id}</p>
            <img className={style.img} src={content.image} alt="image" />
            <p className={style.title}
            onClick={handleContentInfo}
            >{content.title}</p>
            {contentModal ? (
                <ForYouContentModal
                handleContentInfo={handleContentInfo}
                contentsInfo={content}
                />
            ) : null}
            <p className={style.type}>{content.type}</p>
            <p className={style.like}>{content.like}</p>
        </div>
    );
};

export default Recommend;
