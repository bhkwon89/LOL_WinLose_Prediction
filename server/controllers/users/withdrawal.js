const { users, reviews } = require("../../models");
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
  try {
    const userInfo = await users.findOne({
      where: { id: id }
    })
    deleteFile(`userInfoImage/${id}/${userInfo.user_picture}`);

    const userRewiew = await reviews.findAll({
      where: { user_id: id }
    })

    userRewiew.map((el) => {
      deleteFile(`userReviewImage/${id}/${el.image.split('/')[6]}`)
    })
    
    await users.destroy({ where: { id: id } });
    return res
      .clearCookie("accesstoken")
      .status(204)
      .json({ message: "회원탈퇴 완료." });
  } catch {
    return res.status(500).json({ message: "서버 오류." });
  }
}