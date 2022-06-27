import React, { useState } from "react";
import axios from "axios";
import style from "./commentInput.module.css";
import { loginModal, setMessageModal } from '../action/index';
import { useDispatch } from 'react-redux';

const CommentInput = ({ getComment, post, isLogin }) => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const sendCommentToServer = () => {
        if (!isLogin) {
            dispatch(loginModal(true));
            return;
        } else if (comment === '') {
            dispatch(setMessageModal(true, '댓글을 입력해주세요.'));
            return;
        }

        axios
            .post(
                `${process.env.REACT_APP_SERVER_URL}/reviews/comment/${post.id}`,
                {
                    comment: comment,
                },
            )
            .then((res) => {
                if (res.status === 201) {
                    dispatch(setMessageModal(true, '댓글을 등록했습니다.'));
                    getComment();
                    setComment('');
                }
            })
            .catch((err) => {
                alert(err)
            });
    }

    return (
        <div className={style.commentBox}>
            <textarea
                className={style.commentText}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 입력해주세요"
                maxLength="300"
            ></textarea>
            <button
                className={style.btnOk}
                onClick={sendCommentToServer}
            >등록</button>
        </div>
    );
};

export default CommentInput;
