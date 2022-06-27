const { users } = require("../../models"); // 유저테이블 가져오기
const bcrypt = require('bcrypt'); // 비밀번호 암호화
const sendEmail = require("../auth/sendEmail");

module.exports = async (req, res) => {
  const { email, nickname, password } = req.body;
  if (!email || !nickname || !password) {
    return res.status(400).send('모든 항목이 존재해야합니다.');
  }

  const existEmail = await users.findOne({ where: { email }});
  if(existEmail) {
    return res.status(409).send('이메일 중복입니다.');
  }
  const existNickname = await users.findOne({ where: { nickname }});
  if(existNickname) {
    return res.status(409).send('닉네임 중복입니다.');
  }

  const crypt_password = await bcrypt.hash(password, 10);

  try{
    const userInfo = await users.create({
        email,
        nickname,
        password: crypt_password,
        user_picture: "sample_image"
    })
      sendEmail(userInfo);
      return res.status(201).json({ message: "회원가입이 완료되었습니다." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}