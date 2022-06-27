import React from "react";
import style from "./ModalWithdraw.module.css";
import axios from "axios";
import {
    setWithdrawModal,
    login,
    setKakaoLogin,
    setGoogleLogin,
    setMessageModal,
} from "../action";
import { useDispatch } from "react-redux";

function ModalWithdraw() {
const dispatch = useDispatch();

const handleDeleteUser = () => {
    let result = window.confirm("정말 탈퇴하시겠습니까?");
    if (result) {
    axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/users/mypage`)
        .then((res) => {
        if (res.status === 204) {
            dispatch(login(false));
            dispatch(setKakaoLogin(false));
            dispatch(setGoogleLogin(false));
            dispatch(setWithdrawModal(false));
            dispatch(setMessageModal(true, "정상적으로 회원탈퇴 되었습니다."));
            window.location.replace("/");
        }
        });
    } else {
    return false;
    }
};

const withModalHandler = () => {
    dispatch(setWithdrawModal(false));
};

const modalOutSide = (e) => {
    if (e.target === e.currentTarget) {
    dispatch(setWithdrawModal(false));
    }
};

return (
    <div className={style.container} onClick={modalOutSide}>
    <div className={style.modalBox}>
        <p className={style.title}>탈퇴 안내</p>
        <div className={style.textBox}>
        <p className={style.text}>탈퇴 후 회원 정보가 모두 삭제되며</p>
        <p className={style.text}>삭제된 정보는 복구가 불가능하니</p>
        <p className={style.text}>신중한 선택 후 진행 부탁드립니다.</p>
        <p className={style.text}>그동안 사용해 주셔서 감사합니다.</p>

        <button className={style.withdrawBtn} onClick={handleDeleteUser}>
            탈퇴하기
        </button>
        <button className={style.closeBtn} onClick={withModalHandler}>
            취소하기
        </button>
        </div>
    </div>
    </div>
    );
}

export default ModalWithdraw;
