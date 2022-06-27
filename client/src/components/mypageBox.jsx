import { Link } from "react-router-dom";
import style from "./mypageBox.module.css";
import MyPageLikes from "./myPageLikes";
import MyPageReview from "./myPageReview";
import { useEffect, useState } from "react";
import axios from "axios";

function MyPageBox({ reviews }) {
  const [review, setReview] = useState([]);
  const [postItems, setPostItems] = useState([]);

  const hadlePages = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/users/mypage/myLike`)
      .then((res) => {
        const { row } = res.data.data;

        setPostItems(row);
      });
  };

  useEffect(() => {
    hadlePages();
  }, []);

  const sortContent = postItems.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  const fiveContentData = sortContent.slice(0, 5);

  const handleMyReviewData = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/reviews`).then((res) => {
      if (res.status === 200) {
        setReview(res.data.data);
      }
    });
  };

  const filterData = review.filter((item, i) => {
    return (
      reviews.findIndex((item2, j) => {
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
      <span className={style.reviews_title}>내가 쓴 글</span>
      <Link to="/reviewsdetail">
        <button className={style.reviewsMore_button}>
          more
          <p className={style.more_icon}>
            <i className="fas fa-angle-right" />
          </p>
        </button>
      </Link>
      <div className={style.reviewsBox}>
        {sortData ? (
          <>
            {sortData.map((reviewData) => (
              <MyPageReview review={reviewData} />
            ))}
          </>
        ) : (
          <p className={style.empty_reviewbox}>등록 된 리뷰가 없습니다.</p>
        )}
      </div>
      <span className={style.likes_title}>좋아요 표시한 콘텐츠</span>
      <Link to="/likesdetail">
        <button className={style.likesMore_button}>
          more
          <p className={style.more_icon}>
            <i className="fas fa-angle-right" />
          </p>
        </button>
      </Link>
      <div className={style.likesBox}>
        {fiveContentData ? (
          <>
            {fiveContentData.map((info) => (
              <MyPageLikes info={info} />
            ))}
          </>
        ) : (
          <p className={style.empty_likesbox}>
            좋아요를 표시한 콘텐츠가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}

export default MyPageBox;
