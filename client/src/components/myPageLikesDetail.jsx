import React from "react";
import style from "./mypageBox.module.css";
import MyLikesContentModal from "./myLikesContentModal";
import { useState } from "react";

function MyPageLikesDetail({ content }) {
  const [contentModal, setContentModal] = useState(false);

  const handleContentInfo = (e) => {
    setContentModal(!contentModal);
  };

  return (
    <div>
      <div className={style.likeBox}>
        <button className={style.myLikeData} onClick={handleContentInfo}>
          {contentModal ? (
            <MyLikesContentModal
              contentsInfo={content}
              handleContentInfo={handleContentInfo}
            />
          ) : null}
          <span>{content.content.title}</span>
        </button>
        <button className={style.mydata_likeDate} onClick={handleContentInfo}>
          <span>{content.createdAt.split("T")[0]}</span>
        </button>
      </div>
    </div>
  );
}

export default MyPageLikesDetail;
