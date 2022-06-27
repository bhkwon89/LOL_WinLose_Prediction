require("dotenv").config();

module.exports = async (req, res) => {
  return res.redirect(
    `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&&response_type=code`
  );
};
