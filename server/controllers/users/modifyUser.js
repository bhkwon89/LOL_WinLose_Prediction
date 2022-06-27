const { sign } = require("jsonwebtoken");
const { users } = require("../../models");
const bcrypt = require('bcrypt'); // 비밀번호 암호화
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRTETKEY,
  region: process.env.S3_REGION,
});

function deleteFile(data) {
  return s3.deleteObject({ Bucket: process.env.S3_BUCKET_NAME, Key: data }).promise();
}

module.exports = async (req, res) => { 
  const id = req.cookies.id;
  const { nickname, password } = req.body;
  try{
    if(!nickname) {
      return res.status(409).json({ data: null, message: "닉네임 입력은 필수입니다." })
    }
    const checkNickname = await users.findOne({ 
      where: { nickname : nickname }
    })

    if(checkNickname) {
      return res.status(409).json({ data: null, message: "중복된 닉네임입니다." })
    }

    const userInfo = await users.findOne({ 
      where: { id: id }
    })

    if(!bcrypt.compareSync(password, userInfo.dataValues.password)){
      const newPassword = await bcrypt.hash(password, 10);
      await users.update({ password: newPassword }, { where: { id: id } })
    }

    await users.update({ nickname: nickname, updateAt: new Date() }, { where: { id: id } })
    
    if (req.file) {
      if(userInfo.dataValues.user_picture) {
        // 이미지가 있다면 이미지를 지웁니다.
        deleteFile(`userInfoImage/${id}/${userInfo.dataValues.user_picture.split('/')[6]}`);
      }
      await users.update({ user_picture: req.file.location }, { where: { id: id } })
    }

    const userData = {
      id: userInfo.dataValues.id,
      nickname: userInfo.dataValues.nickname,
      user_picture: userInfo.dataValues.user_picture
    }

    const token = sign(userData, process.env.ACCESS_SECRET, { expiresIn: "2d" });
    return res.status(200).cookie("jwt", token, {
      sameSite: "None",
      httpOnly: true,
      secure: true
    }).json({ data: userData, message: "회원정보 수정이 완료되었습니다."});

  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}