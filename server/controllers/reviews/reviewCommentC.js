const { comments } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  const id = req.cookies.id;
  const text = req.body.comment;

  try{
    await comments.create({
        user_id: id,
        review_id: review_id,
        comment: text
    })
    return res.status(201).json({ message: "댓글 작성완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}