import style from "../page/myReviewsDetail.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPost } from "../action";

function MyPageReview({ review }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePostInfo = () => {
    dispatch(setPost(review));
    navigate(`/foryouview/:${review.id}`);
  };

  return (
    <>
      <button className={style.mydata}>
        <a className={style.goReview} onClick={handlePostInfo}>
          {review.title}
        </a>
      </button>
      <a className={style.goReview} onClick={handlePostInfo}>
        <span className={style.mydata_date}>
          <button className={style.goReview}>
            {review.updatedAt.split("T")[0]}
          </button>
        </span>
      </a>
    </>
  );
}

export default MyPageReview;
