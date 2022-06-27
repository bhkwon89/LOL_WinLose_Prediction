const { users, comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;

  try{
    const reviewCommentData = await comments.findAll({ 
      where: { review_id: review_id },
      include: [{ model: users, attributes: ["nickname", "user_picture"] }],
      order: [['createdAt', 'DESC']]
    })

    const reviewComments = reviewCommentData.map((el) => {
      return {
        id: el.id,
        review_id: el.review_id,
        user_id: el.user_id,
        nickname: el.user.nickname,
        user_picture: el.user.user_picture,
        comment: el.comment,
        createdAt: (el.createdAt).toISOString().split("T")[0] + " " + (el.createdAt).toISOString().split("T")[1].split(".")[0]
      }
    })

    return res.status(200).json({ data: reviewComments, message: "리뷰정보 전달 완료." })
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}