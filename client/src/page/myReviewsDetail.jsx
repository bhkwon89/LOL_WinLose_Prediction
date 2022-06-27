import React, { useState, useEffect } from "react";
import style from "./myReviewsDetail.module.css";
import PageNationReviewButton from "../components/paginationReviewButton";
import MyPageReviewDetail from "../components/myPageReviewDetail";
import axios from "axios";
import { useSelector } from "react-redux";

const MyReviewsDetail = () => {
  const { nickname } = useSelector((state) => state.loginReducer);
  const { profileImage } = useSelector((state) => state.loginReducer);

  const [review, setReview] = useState([]);
  const [isActive, setActive] = useState([]);
  const [postItems, setPostItems] = useState([]);
  const [postPages, setPostPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPostPages, setShowPostPages] = useState(0);
  const [querys, setQuerys] = useState({
    offset: 1,
    limit: 10,
  });
  const [reviewData, setReviewData] = useState([]);

  const hadlePages = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/users/mypage/myReview`)
      .then((res) => {
        const { row, count } = res.data.data;

        setReviewData(row);
        console.log(reviewData);
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
        `${process.env.REACT_APP_SERVER_URL}/users/mypage/myReview?${string}`
      );
      const { row, count, page } = res.data.posts;

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

  const handleMyReviewData = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/reviews`).then((res) => {
      if (res.status === 200) {
        setReview(res.data.data);
      }
    });
  };

  const filterData = review.filter((item, i) => {
    return (
      reviewData.findIndex((item2, j) => {
        return item.id === item2.id;
      }) === i
    );
  });

  const sortData = filterData.sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt)
  );

  useEffect(() => {
    handleMyReviewData();
  }, []);

  return (
    <div className={style.container}>
      {/* {alert("구현 준비중입니다.")} */}
      <div className={style.info}>
        <img className={style.img} src={profileImage} alt="" />
        <p className={style.nickname}>{nickname}</p>
      </div>
      <span className={style.reviews_title}>
        내가 쓴 글
        <div className={style.box}>
          {sortData ? (
            <>
              {sortData.map((reviewData) => (
                <MyPageReviewDetail review={reviewData} />
              ))}
            </>
          ) : (
            <p className={style.empty_reviewsbox}>작성한 리뷰가 없습니다.</p>
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
                      <PageNationReviewButton
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

export default MyReviewsDetail;
