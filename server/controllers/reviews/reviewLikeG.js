const { likes } = require("../../models");

module.exports = async (req, res) => {
  const review_id = req.params.postId;
  const id = req.cookies.id;

  try{
    const likeData = await likes.findOne({ 
      where: { user_id: id, review_id: review_id },
      attributes: [ "id", "review_id"],
    })

    if(likeData) {
      return res.status(200).json({ data: true, message: "좋아요 확인." });
    }
    else {
      return res.status(200).json({ data: false, message: "좋아요 확인." });
    }
    
  }
  catch(err){
    return res.status(500).json({ data: err, message: "서버 오류." });
  }

}