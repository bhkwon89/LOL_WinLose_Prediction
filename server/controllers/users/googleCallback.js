const { sign } = require("jsonwebtoken");
const { users } = require("../../models");
require("dotenv").config();
const axios = require("axios");

module.exports = async (req, res) => {
  const code = req.query.code;
  try {
    const result = await axios.post(
      `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&grant_type=authorization_code`
    );

    const userInfo = await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${result.data.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${result.data.access_token}`,
        },
      }
    );

    const [user, created] = await users.findOrCreate({
      where: {
        email: userInfo.data.email,
      },
      defaults: {
        email: userInfo.data.email,
        nickname: userInfo.data.email.split("@")[0] + "=@google!",
        password: "",
        socialtype: "google",
        user_picture: userInfo.data.picture,
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
