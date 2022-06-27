const axios = require("axios");
const { sign } = require("jsonwebtoken");
const { users } = require("../../models");
require("dotenv").config();

module.exports = async (req, res) => {
  const code = req.query.code;
  try {
    const result = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${code}`
    );

    const userInfo = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${result.data.access_token}`,
      },
    });

    const [user, created] = await users.findOrCreate({
      where: {
        email: userInfo.data.kakao_account.email,
      },
      defaults: {
        email: userInfo.data.kakao_account.email,
        nickname: userInfo.data.kakao_account.email.split("@")[0] + "=@kakao!",
        password: "",
        socialtype: "kakao",
        user_picture: userInfo.data.kakao_account.profile.is_default_image
          ? null
          : userInfo.data.kakao_account.profile.profile_image_url,
      },
    });

    const payload = {
      id: user.dataValues.id,
      email: user.dataValues.email,
      nickname: user.dataValues.nickname,
      socialtype: user.dataValues.socialtype,
      user_picture: user.dataValues.user_picture,
    };

    const token = await sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "2d",
    });

    res
      .status(200)
      .cookie("jwt", token, {
        sameSite: "None",
        httpOnly: true,
        secure: true,
        expires: new Date(Date.parse(new Date()) + 1000 * 3600 * 24 * 3),
      })
      .redirect(`${process.env.CLIENT_URL}/`);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};
