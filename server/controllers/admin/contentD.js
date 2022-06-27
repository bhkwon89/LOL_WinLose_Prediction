const { contents } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.contentsId;
  try{
    await contents.destroy({
      where: { id: id }
    })
    
    return res.status(201).json({ message: "컨텐츠 제거 완료" });
  }
  catch(err){
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}