const { reviews } = require("../../models");
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
  const review_id = req.params.postId;
  const id = req.cookies.id;
  
  try {
    const rewiewUpdate = await reviews.findOne({
      where: { id: review_id }
    })

    deleteFile(`userReviewImage/${id}/${rewiewUpdate.image.split('/')[6]}`)

    await reviews.destroy({ where: { id: review_id } });
    return res.status(204).json({ message: "리뷰 삭제 완료." });
  } catch {
    return res.status(500).json({ message: "서버 오류." });
  }
}