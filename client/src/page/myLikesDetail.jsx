import React, { useState, useEffect } from "react";
import style from "./myLikesDetail.module.css";
import PageNationLikesButton from "../components/paginationLikesButton";
import MyPageLikesDetail from "../components/myPageLikesDetail";
import axios from "axios";
import { useSelector } from "react-redux";

const MyLikesDetail = () => {
  const { nickname } = useSelector((state) => state.loginReducer);
  const { profileImage } = useSelector((state) => state.loginReducer);

  const [isActive, setActive] = useState([]);
  const [postItems, setPostItems] = useState([]);
  const [postPages, setPostPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPostPages, setShowPostPages] = useState(0);
  const [querys, setQuerys] = useState({
    offset: 1,
    limit: 10,
  });

  const hadlePages = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/users/mypage/myLike`)
      .then((res) => {
        const { row, count } = res.data.data;

        let pageCount = Math.ceil(count / querys.limit);
        setPostPages(pageCount);
        const newPostPages = new Array(pageCount).fill(false).map((el, idx) => {
          if (idx === 0) return !el;
          return el;
        });
        setActive(newPostPages);
        setPostItems(row);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPostsQuerys = async (newQuerys) => {
    const keys = Object.keys(newQuerys);
    const values = Object.values(newQuerys);

    const string = keys.reduce((a, c, idx) => {
      if (values[idx]) {
        const query = keys[idx] + "=" + values[idx] + "&";
        return a + query;
      } else {
        return a;
      }
    }, "");

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/mypage/myLike?${string}`
      );
      const { row, count, page } = res.data.data;

      pageButtonCurrent(page - 1);
      let pageCount = Math.ceil(count / querys.limit);
      setPostPages(pageCount);
      setPostItems(row);
    } catch (err) {
      console.log(err);
    }
  };

  const pageNumberOnclickFn = (e) => {
    const newQuerys = {
      ...querys,
      offset: Number(e.target.innerText),
    };
    setQuerys(newQuerys);
    getPostsQuerys(newQuerys);
  };

  const pageArrowOnclickFn = (e) => {
    const target = e.target.name;
    let NextOffset = "";

    if (target === "left") {
      NextOffset = querys.offset > 1 ? querys.offset - 1 : 1;
    } else {
      NextOffset =
        querys.offset + 1 > postPages ? postPages : querys.offset + 1;
    }

    const newQuerys = {
      ...querys,
      offset: NextOffset,
    };

    setQuerys(newQuerys);
    // 여기서 GET 요청 후 postPages 업데이트 되면서 useEffect 실행
    getPostsQuerys(newQuerys);
    setCurrentPage(newQuerys.offset);
  };

  const pageButtonCurrent = (index) => {
    const newActive = new Array(postPages).fill(false);
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  useEffect(() => {
    hadlePages();
  }, []);

  useEffect(() => {
    pageButtonCurrent(0);
  }, [postPages]);

  useEffect(() => {
    if (currentPage <= 5) {
      setShowPostPages(0);
    } else {
      // current page 5의 배수로 증가
      if ((currentPage - 1) % 5 === 0 || currentPage % 5 === 0) {
        if (currentPage % 5 === 0) {
          // arrow left
          setShowPostPages(currentPage - 5);
        }
        if ((currentPage - 1) % 5 === 0) {
          // arrow right
          setShowPostPages(currentPage - 1);
        }
      }
    }
  }, [currentPage, postPages]);

  return (
    <div className={style.container}>
      <div className={style.info}>
        <img className={style.img} src={profileImage} alt="" />
        <p className={style.nickname}>{nickname}</p>
      </div>
      <span className={style.likes_title}>
        좋아요 표시한 콘텐츠
        <div className={style.box}>
          {postItems ? (
            <>
              {postItems.map((content) => (
                <MyPageLikesDetail content={content} />
              ))}
            </>
          ) : (
            <p className={style.empty_likesbox}>
              좋아요를 표시한 콘텐츠가 없습니다.
            </p>
          )}
        </div>
        <>
          {!postPages ? null : (
            <div className={style.pageNationWrap}>
              <div className={style.arrowBox}>
                <a className={style.arrow}>
                  <img
                    src="/image/arrow_left_previous_icon.png"
                    name="left"
                    onClick={(e) => {
                      pageArrowOnclickFn(e);
                    }}
                  />
                </a>
              </div>
              <ul>
                {isActive.map((el, index) => {
                  if (index >= showPostPages && index <= showPostPages + 4) {
                    return (
                      <PageNationLikesButton
                        key={index}
                        index={index}
                        isActive={el}
                        pageNumberOnclickFn={pageNumberOnclickFn}
                      />
                    );
                  }
                })}
              </ul>
              <div className={style.arrowBox}>
                <a className={style.arrow}>
                  <img
                    src="/image/arrow_right_next_icon.png"
                    name="right"
                    onClick={(e) => {
                      pageArrowOnclickFn(e);
                    }}
                  />
                </a>
              </div>
            </div>
          )}
        </>
      </span>
    </div>
  );
};

export default MyLikesDetail;
