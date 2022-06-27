const { verify } = require("jsonwebtoken");
const { users } = require("../../models");

exports.accessToken = async (req, res, next) => {
  const cookie = req.cookies.jwt;
  try {
    if (!cookie) {
      return res.status(403).json({ message: "쿠키가 없습니다." });
    }
    await verify(cookie, process.env.ACCESS_SECRET, async (err, data) => {
      if (err) {
        return res.status(403).json({ message: "맞지않는 쿠키입니다." });
      }
      const userInfo = await users.findOne({ where: { id: data.id }});
      if (!userInfo) {
        return res.status(400).json({ message: "존재하지 않는 유저입니다." });
      }
      req.cookies.id = userInfo.id;
      next();
    });
  }
  catch(err) {
    return res.status(500).json({ data: null, message: "서버 오류."})
  }
}