import React, { useState, useEffect } from "react";
import axios from 'axios';
import style from "./commentList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { setMessageModal } from '../action/index';

const Comment = ({ comment, getComment }) => {
    const { nickname } = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [commentValue, setCommentValue] = useState(comment.comment);

    const editComment = () => {
        axios
            .patch(
                `${process.env.REACT_APP_SERVER_URL}/reviews/comment/${comment.id}`,
                {
                    comment: commentValue,
                    id: comment.id
                },
            )
            .then(() => {
                setIsEdit(false);
                dispatch(setMessageModal(true, '댓글이 수정되었습니다.'));
                getComment();
            })
            .catch((err) => {
                alert(err)
            });
    };

    const deleteComment = () => {
        axios
            .delete(`${process.env.REACT_APP_SERVER_URL}/reviews/comment/${comment.id}`,
                {data:
                    {
                    id: comment.id
                }
            }
            )
            .then((res) => {
                if (res.status === 201) {
                    dispatch(setMessageModal(true, '댓글이 삭제되었습니다.'));
                    getComment();
                }
            })
            .catch((err) => {
                alert(err)
            });
    };

    return (
        <div className={style.box}>
            <div className={style.infoBox}>
                <div className={style.userBox}>
                    <img className={style.img} src={comment.user_picture} />
                    <div className={style.name}>{comment.nickname}</div>
                    {comment.nickname === nickname ? (
                        <>
                            <div className={`${isEdit ? null : style.hide}`}>
                                <span className={style.confirmBtn} onClick={editComment}>
                                    <i className="fas fa-check" ></i>
                                </span>
                                <span
                                    className={style.gobackBtn}
                                    onClick={() => {
                                        setIsEdit(false);
                                        setCommentValue(comment.comment);
                                    }}>
                                    <i className="fas fa-times"></i>
                                </span>
                            </div>
                            <div className={`${isEdit ? style.hide : null}`}>
                                <button
                                    className={style.editBtn}
                                    onClick={() => setIsEdit(true)}
                                >수정</button>
                                <button
                                    className={style.cancelBtn}
                                    onClick={deleteComment}
                                >삭제</button>
                            </div>
                        </>
                    ) : null}
                </div>
                <div className={style.date}>{comment.createdAt}</div>
            </div>
            <textarea
                className={`${isEdit ? null : style.hide}`}
                type="text"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                maxLength="300"
            ></textarea>
            <div className={`${isEdit ? style.hide : style.comment}`}>{comment.comment}</div>
        </div>
    );
};

export default Comment;