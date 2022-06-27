import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./forYouView.module.css";
import Comment from "../components/comment";
import CommentInput from "../components/commentInput";
import Recommend from "../components/recommend";
import { useDispatch, useSelector } from 'react-redux';
import { setMessageModal, loginModal, setPost } from "../action";
import { useNavigate } from "react-router-dom";

const ForYouView = ({ post, isLogin }) => {
  const { title, category, image } = post
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname } = useSelector((state) => state.loginReducer);
  const [comment, setComment] = useState([]);
  const [content, setContent] = useState([]);
  const [likeColor, setLikeColor] = useState(false);

  function getPostDetail() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/${post.id}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(setPost(res.data.data));
        }
      })
      .catch((err) => {
        alert(err)
      });
  }

  function getContent() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/content/${post.id}`)
      .then((res) => {
        if (res.status === 200) {
          setContent(res.data.data);
        }
      })
      .catch((err) => {
        alert(err)
      });
  }

  const getLikeInfo = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/like/${post.id}`)
      .then((res) => {
        console.log(res.data.data)
        if (res.data.data) {
          setLikeColor(true);
        } else {
          setLikeColor(false);
        }
      })
      .catch((err) => {
        alert(err)
      });
  };

  //좋아요를 클릭했을 때, 실행
  const checkLoginStatus = (callback) => {
    if (isLogin) {
      callback();
    } else {
      dispatch(loginModal(true));
      return;
    }
    return;
  };

  const likeCheck = () => {
    if (likeColor === false) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/reviews/like/${post.id}`)
        .then(() => {
          setLikeColor(true);
        })
        .catch((err) => {
          alert(err)
        });
    } else {
      axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/reviews/like/${post.id}`)
        .then(() => {
          setLikeColor(false);
        })
        .catch((err) => {
          alert(err)
        });
    }
  };

  const getComment = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/comment/${post.id}`)
      .then((res) => {
        setComment(res.data.data);
      })
      .catch((err) => {
        alert(err)
      });
  };

  const deletePost = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/reviews/${post.id}`)
      .then(() => {
        navigate('/foryou')
        dispatch(setMessageModal(true, '게시글을 삭제했습니다.'));
      })
      .catch((err) => {
        alert(err)
      });
  };

  const handleShareUrl = () => {
    let dummy = document.createElement("input");
    let text = process.env.REACT_APP_CLIENT_URL + `/foryouview/:${post.id}`;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    dispatch(setMessageModal(true, `클립보드 복사 완료 🙌🏻`));
  };

  const handleShareKakao = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title,
        description: `${category}(때)의 추천 리스트를 공유했습니다!`,
        imageUrl: image,
        link: {
          mobileWebUrl: `${process.env.REACT_APP_CLIENT_URL}/foryouview/:${post.id}`,
          androidExecParams: "test",
        },
      },
      buttons: [
        {
          title: "추천 리스트 공유해서 보기",
          link: {
            mobileWebUrl: `${process.env.REACT_APP_CLIENT_URL}/foryouview/:${post.id}`,
          },
        },
      ],
    });
  };

  useEffect(() => {
    getPostDetail();
    getContent()
    getComment();
    if (isLogin) {
      getLikeInfo();
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getComment();
  }, [comment]);

  return (
    <div className={style.container}>
      <div className={style.viewBox}>
        {isLogin && post.nickname === nickname ? (
          <>
            <button
              className={style.cancelBtn}
              onClick={deletePost}
            >삭제</button>
            <button
              className={style.editBtn}
              onClick={() => navigate('/foryouedit')}
            >수정</button>
          </>
        ) : null}
        <div className={style.titleBox}>
          <p className={style.title}>{post.title}</p>
          <div className={style.subtitleBox}>
            <span className={style.category}>{post.category}</span>
            <span className={style.date}>{post.createdAt}</span>
            <span className={style.writer}>by {post.nickname}</span>
          </div>
        </div>
        <div className={style.imgBox}>
          <img className={style.img} src={post.image} />
        </div>
        <div className={style.textBox}>
          <p className={style.textTittle}>소개글</p>
          <div className={style.textContent}
            dangerouslySetInnerHTML={{ __html: post.text }}
          >
          </div>
        </div>
        <div className={style.listBox}>
          <div className={style.texthead}>
            <p className={style.listTitle}>추천 리스트</p>
            <div
              onClick={() => checkLoginStatus(likeCheck)}
              className={`${likeColor ? style.like : style.unlike}`}
            >
              <i className="fas fa-heart"
              ></i>
            </div>
          </div>
          <div className={style.listContent}>
            <div className={style.listHeader}>
              <span className={style.list_num}>번호</span>
              <span className={style.list_title}>타이틀</span>
              <span className={style.list_part}>구분</span>
              <span className={style.list_like}>좋아요</span>
            </div>
            {content.map((content) => (
              <Recommend
                content={content}
                key={content.content_id}
              />
            ))}
          </div>
          <div className={style.shareBox}>
            <button className={style.btnUrl} onClick={handleShareUrl}>URL 공유하기</button>
            <button className={style.btnKakao} onClick={handleShareKakao}>카톡 공유하기</button>
          </div>
        </div>
        <div className={style.commentBox}>
          <CommentInput
            getComment={getComment}
            post={post}
            isLogin={isLogin}
          />
          <Comment
            comment={comment}
            getComment={getComment}
          />
        </div>
      </div>
    </div>
  );
};

export default ForYouView;