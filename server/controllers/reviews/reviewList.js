const { users, reviews, likes } = require("../../models");

module.exports = async (req, res) => {
  const type = req.query.sort; //"like or date"

  try{
    const reviewData = await reviews.findAll({
      attributes: [
        "id",
        "title",
        "category",
        "image",
        "createdAt",
        "updatedAt"
      ],
      include: [
        { model: users, attributes: [ "nickname" ] },
        { model: likes, attributes: [ "id" ] }
      ]
    })

    let categoryFix = '';

    let reviewList = reviewData.map((el) => {
      if(el.category === '도전') categoryFix = '도전하고 싶은 나에게';
      if(el.category === '동기부여') categoryFix = '동기부여를 받고 싶다면?';
      if(el.category === '멘토') categoryFix = '현재 나의 상황에 멘토를 원하시나요?';
      if(el.category === '편안함') categoryFix = '마음속 편안함을 찾는다면?';
      if(el.category === '웃음') categoryFix = '생각없이 웃고 싶다면?';
      if(el.category === '눈물') categoryFix = '오늘 한 없이 눈물을 쏟고 싶다면?';

      return {
        "id": el.id,
        "nickname": el.user.nickname,
        "title": el.title,
        "category": categoryFix,
        "like": el.likes.length,
        "userlike" : false,
        "image": el.image,
        "createdAt": el.createdAt,
        "updatedAt": el.updatedAt,
      }
    })

    if(type === "like") {
      reviewList = reviewList.sort((a, b) => b.like - a.like)
    } 
    else {
      reviewList = reviewList.sort((a, b) => b.createdAt - a.createdAt)
    }
    
    return res.status(200).json({data: reviewList, message: "리뷰 전체 전달 완료."})
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." })
  }
}