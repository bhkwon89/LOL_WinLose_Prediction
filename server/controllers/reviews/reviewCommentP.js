const { comments } = require("../../models");

module.exports = async (req, res) => {
  const { comment, id } = req.body;

  try{
    await comments.update( { comment: comment }, { where: { id: id } });

    return res.status(201).json({ message: "댓글 수정완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}