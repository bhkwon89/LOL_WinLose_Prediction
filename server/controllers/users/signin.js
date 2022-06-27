const { sign } = require("jsonwebtoken");
const { users } = require("../../models");
const bcrypt = require('bcrypt'); // 비밀번호 암호화

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try{
    const userInfo = await users.findOne({ where: { email: email }});
    if(!userInfo) {
      return res.status(403).json({ message: "존재하지 않는 계정입니다."})
    }
  
    if(!bcrypt.compareSync(password, userInfo.dataValues.password)) {
      return res.status(403).json({ message: "비밀번호가 일치하지 않습니다."})
    }
    
    const userData = {
        id: userInfo.dataValues.id,
        email: userInfo.dataValues.email,
        nickname: userInfo.dataValues.nickname,
        user_picture: userInfo.dataValues.user_picture,
        admin: userInfo.dataValues.admin
    }
    
    const token = sign(userData, process.env.ACCESS_SECRET, { expiresIn: "2d" });
  
    return res.status(201).cookie("jwt", token, {
      sameSite: "None",
      httpOnly: true,
      secure: true
    }).json({ data: userData, message: "로그인에 성공하였습니다."});
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}