const express = require("express");
const router = express.Router();
const auth = require("./auth/accessToken");
const userRouter = require("./users/userRouter");
const reviewRouter = require("./reviews/reviewRouter");
const contentRouter = require("./contents/contentRouter");
const adminRouter = require("./admin/adminRouter");

//users
router.post("/users/signup", userRouter.signUp); // 회원가입(완료)
router.post("/users/signin", userRouter.signIn); // 로그인(완료)
router.post("/users/signout", auth.accessToken, userRouter.signOut); // 로그아웃(완료)

//oauth
router.get("/users/kakao", userRouter.kakao); //  kakao 로그인(완료)
router.get("/users/kakaoCallback", userRouter.kakaoCallback); 
router.get("/users/google", userRouter.google); // google 로그인(완료)
router.get("/users/googleCallback", userRouter.googleCallback);

//mypage
router.get("/users/mypage", auth.accessToken, userRouter.userInfo); // 유저정보 확인, 좋아요 누른 컨텐츠 5개, 내가쓴 리뷰글 5개(완료)
router.patch("/users/mypage", auth.accessToken, userRouter.img, userRouter.modifyUser); // 회원정보 수정(이미지 제외 완료)
router.delete("/users/mypage", auth.accessToken, userRouter.withdrawal); // 회원탈퇴(완료)

router.get("/users/mypage/myLike", auth.accessToken, userRouter.myLike); // 내가 좋아요 누른 컨텐츠 more(완료)
router.get("/users/mypage/myReview", auth.accessToken, userRouter.myReview); // 내가쓴 리뷰글 more(완료)

//reviews
router.get("/reviews", reviewRouter.reviewList); // 리뷰 전체 불러오기(완료)
router.get("/reviews/get/userlist", auth.accessToken, reviewRouter.reviewUserList); // 사용자가 좋아요 한 리뷰 전체 불러오기(완료)
router.get("/reviews/:postId", reviewRouter.reviewRead); // 리뷰 하나 불러오기(완료)

router.get("/reviews/like/:postId", auth.accessToken, reviewRouter.reviewLikeG); // 사용자가 좋아요 했는지 여부(완료)
router.get("/reviews/comment/:postId", reviewRouter.reviewCommentG); // 리뷰 댓글 불러오기(완료)
router.get("/reviews/content/:postId", reviewRouter.reviewContent); // 리뷰 컨텐츠 불러오기(완료)

router.post("/reviews", auth.accessToken, reviewRouter.img, reviewRouter.reviewWrite); // 리뷰 작성하기(완료)
router.delete("/reviews/:postId", auth.accessToken, reviewRouter.reviewDelete); // 리뷰 삭제(완료)
router.patch("/reviews/:postId", auth.accessToken, reviewRouter.img, reviewRouter.modifyRewiew) // 리뷰 수정하기(완료)

router.post("/reviews/like/:postId", auth.accessToken, reviewRouter.reviewLikeC) // 리뷰에 좋아요(완료)
router.post("/reviews/comment/:postId", auth.accessToken, reviewRouter.reviewCommentC) // 리뷰에 댓글 작성 (시간값 오류)

router.delete("/reviews/like/:postId", auth.accessToken, reviewRouter.reviewLikeD); // 리뷰 좋아요 지우기(완료)
router.delete("/reviews/comment/:postId", auth.accessToken, reviewRouter.reviewCommentD); // 리뷰 댓글 지우기(완료)

router.patch("/reviews/comment/:postId", auth.accessToken, reviewRouter.reviewCommentP); // 리뷰 댓글 수정(완료)

//contents
router.get("/contents", contentRouter.listAll); // 컨텐츠 전체 불러오기(완료)
router.get("/contents/category/:categoryName", contentRouter.firstfilter); // 컨텐츠 카테고리 필터링(완료)
router.get("/filter", contentRouter.secondfilter); // 컨텐츠 카테고리&타입 최신순, 좋아요 순 필터링(완료)
router.get("/contents/:contentId", contentRouter.detail); // 컨텐츠 하나 선택(완료)
router.get("/search", contentRouter.search); // 컨텐츠 검색(완료)contentsLikeC
router.get("/contents/like/:contentsId", auth.accessToken, contentRouter.contentsLikeG); // 사용자가 좋아요 했는지 여부
router.get("/contents/get/userlike", auth.accessToken, contentRouter.contentsUserLike); // 사용자가 좋아요 한 콘텐츠리스트
router.post("/contents/like/:contentsId", auth.accessToken, contentRouter.contentsLikeC) // 콘텐츠에 좋아요
router.delete("/contents/like/:contentsId", auth.accessToken, contentRouter.contentsLikeD); // 콘텐츠 좋아요 지우기

//admin
router.post("/admin/contents", auth.accessToken, adminRouter.contentC); // 컨텐츠 추가
router.delete("/admin//contents/:contentsId", auth.accessToken, adminRouter.contentD); // 컨텐츠 제거
router.delete("/admin/reviews/:postId", auth.accessToken, adminRouter.reviewsD); // 리뷰 제거
router.delete("/admin/comment", auth.accessToken, adminRouter.commnetD); // 댓글 제거

module.exports = router;