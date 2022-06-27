const { likes } = require("../../models");

module.exports = async (req, res) => {
  const content_id = req.params.contentsId;
  const id = req.cookies.id;

  try {
    await likes.create({
      user_id: id,
      content_id: content_id,
    });
    return res.status(201).json({ data: true, message: "좋아요 완료." });
  } catch (err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
};
