const { likes } = require("../../models");

module.exports = async (req, res) => {
  const content_id = req.params.contentsId;
  const id = req.cookies.id;

  try {
    const likeData = await likes.findOne({
      where: { user_id: id, content_id: content_id },
      attributes: ["id", "content_id"],
    });

    if (likeData) {
      return res.status(200).json({ data: true, message: "좋아요 확인." });
    } else {
      return res.status(200).json({ data: false, message: "좋아요 확인." });
    }
  } catch (err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
};
