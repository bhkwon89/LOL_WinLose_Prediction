import style from "./mypageBox.module.css";
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
    <div className={style.reviewBox}>
      <button className={style.myReviewData}>
        <a onClick={handlePostInfo}>{review.title}</a>
      </button>
      <a onClick={handlePostInfo}>
        <button className={style.mydata_reviewDate}>
          <a onClick={handlePostInfo}>{review.createdAt.split("T")[0]}</a>
        </button>
      </a>
    </div>
  );
}

export default MyPageReview;
