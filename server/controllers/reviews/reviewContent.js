const { reviews_contents, contents, likes } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  try{
    // 리뷰에 등록한 컨텐츠 가져오기
    const content = await reviews_contents.findAll({ 
      where: { review_id: review_id },
      attributes: [ "review_id", "content_id" ],
      include: [ 
        { 
          model: contents,
          include: { model: likes, attributes: [ "id" ] }
        } 
      ]
    })

    // 리뷰에 등록된 컨텐츠 정보 + 그 컨텐츠의 좋아요 갯수
    // content_id는 1부터 1씩 증가되도록 만들기
    let contentId = 0;
    const contentData = content.map((el) => {
      contentId += 1;
      return {
        "id": el.content.id,
        "content_id": contentId,
        "title": el.content.title,
        "director": el.content.director,
        "year": el.content.year,
        "rating": el.content.rating,
        "runtime": el.content.runtime,
        "summary": el.content.summary,
        "genres": el.content.genres,
        "image": el.content.image,
        "category": el.content.category,
        "type": el.content.type,
        "like": el.content.likes.length,
        "detail": el.content.detail,
        "link": el.content.link,
        "type": el.content.type,
        "view": el.content.view,
      }
    })

    return res.status(200).json({data: contentData, message: "리뷰정보 전달 완료."})
  }
  catch(err){
    return res.status(500).json({ data: err, message: "서버 오류." }) 
  }
}