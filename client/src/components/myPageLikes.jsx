import React from "react";
import style from "./mypageBox.module.css";
import MyLikesContentModal from "./myLikesContentModal";
import { useState } from "react";

function MyPageLikes({ info }) {
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
              contentsInfo={info}
              handleContentInfo={handleContentInfo}
            />
          ) : null}
          <span>{info.content.title}</span>
        </button>
        <button className={style.mydata_likeDate} onClick={handleContentInfo}>
          <span>{info.createdAt.split("T")[0]}</span>
        </button>
      </div>
    </div>
  );
}

export default MyPageLikes;
