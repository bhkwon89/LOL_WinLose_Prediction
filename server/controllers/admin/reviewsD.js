const { reviews } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  try {
    await reviews.destroy({ where: { id: review_id } });
    return res.status(204).json({ message: "리뷰 삭제 완료." });
  } catch {
    return res.status(500).json({ message: "서버 오류." });
  }
}