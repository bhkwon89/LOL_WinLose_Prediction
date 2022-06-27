import React from "react";
import style from "./foruModal.module.css";
import { useDispatch } from 'react-redux';
import { setMessageModal } from '../action/index';

const ForuModal = ({ isOpen, content }) => {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(setMessageModal(false, ''));
    };
    return (
        <div>
            {isOpen ? (
                <div className={style.modal}>
                    <div
                        className={style.close}
                        onClick={closeModal} />
                    <div className={style.modalBox}>
                        <div className={style.modal_content}>{content}</div>
                        <button
                            className={style.btnClose}
                            onClick={closeModal}>
                            확인
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ForuModal;
