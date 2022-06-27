const { contents } = require("../../models");

module.exports = async (req, res) => {
  const { title, director, year, rating, runtime, summary, genres, image, category, detail, link, type } = req.body;
  
  try{
    await contents.create({ 
      title: title, 
      director: director, 
      year: year, 
      rating: rating,
      runtime: runtime,
      summary: summary,
      genres: genres,
      image: image,
      category: category,
      detail: detail,
      link: link,
      type: type
    })
  
    return res.status(201).json({ message: "컨텐츠 추가 완료" });
  }
  catch(err) {
    return res.status(500).json({ data: err, message: "서버 오류." });
  }
}