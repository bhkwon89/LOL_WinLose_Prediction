import React from "react";
import style from "./mypageProfilebox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setUpdateInfo, setWithdrawModal } from "../action";

function ProfileBox() {
  const dispatch = useDispatch();
  const { nickname } = useSelector((state) => state.loginReducer);
  const { profileImage } = useSelector((state) => state.loginReducer);

  const withModalHandler = () => {
    dispatch(setWithdrawModal(true));
  };
  const handleUpdateModal = () => {
    dispatch(setUpdateInfo(true));
  };

  return (
    <div className={style.container}>
      <div className={style.info}>
        <img className={style.img} src={profileImage} alt="" />
        <p className={style.nickname}>{nickname}</p>
        <button className={style.update} onClick={handleUpdateModal}>
          회원정보 수정
        </button>
        <button className={style.withdraw} onClick={withModalHandler}>
          회원탈퇴
        </button>
      </div>
    </div>
  );
}

export default ProfileBox;
