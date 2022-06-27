const { reviews, reviews_contents } = require("../../models");
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
  const { title, text, content_id } = req.body; // 컨텐츠 데이터 id를 받아온다.
  let category = req.body.category;

  try{
    if( !category || !title || !text || !content_id ) {
      return res.status(409).send('데이터가 비어있습니다.');
    }

    if(category === '도전하고 싶은 나에게') category = '도전';
    if(category === '동기부여를 받고 싶다면?') category = '동기부여';
    if(category === '현재 나의 상황에 멘토를 원하시나요?') category = '멘토';
    if(category === '마음속 편안함을 찾는다면?') category = '편안함';
    if(category === '생각없이 웃고 싶다면?') category = '웃음';
    if(category === '오늘 한 없이 눈물을 쏟고 싶다면?') category = '눈물';
    
    await reviews.update(
      { category: category, title: title, text: text, updateAt: new Date() },
      { where: { id: review_id } }
    );

    const rewiewUpdate = await reviews.findOne({
      where: { id: review_id }
    })

    const contents = content_id.split(',');

    console.log(id, rewiewUpdate.image.split('/')[6])
    
    if(req.file) {
      // 이미지를 지운 뒤 새로운 이미지를 넣자
      deleteFile(`userReviewImage/${id}/${rewiewUpdate.image.split('/')[6]}`)
      await reviews.update({ image: req.file.location }, { where: { id: review_id } })
    }
    
    // reviews_contents 테이블 클리어
    await reviews_contents.destroy({ 
      where: { review_id: review_id }
    })

    // 받아온 id값을 이용하여 테이블 재생성
    contents.map(async (el) => {
      await reviews_contents.create({ 
        review_id: review_id,
        content_id: el
      })
    })

    return res.status(201).json({ data: review_id, message: "리뷰 수정완료." });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}