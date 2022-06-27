import style from "../page/myLikesDetail.module.css";

export default function paginationReviewButton({
  index,
  isActive,
  pageNumberOnclickFn,
}) {
  return (
    <li>
      <a
        className={isActive ? style.addClass : null}
        onClick={(e) => {
          pageNumberOnclickFn(e);
        }}
      >
        {index + 1}
      </a>
    </li>
  );
}
