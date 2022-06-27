const { contents, likes, users } = require("../../models");

module.exports = async (req, res) => {
  const contents_id = req.params.contentId;
  try {
    const contentData = await contents.findOne({
      where: {
        id: contents_id,
      },
      include: [{ model: likes, attributes: ["id"] }],
    });

    const contentsDetail = {
      id: contentData.id,
      title: contentData.title,
      director: contentData.director,
      year: contentData.year,
      rating: contentData.rating,
      runtime: contentData.runtime,
      summary: contentData.summary,
      genres: contentData.genres,
      image: contentData.image,
      category: contentData.category,
      like: contentData.likes.length,
      detail: contentData.detail,
      link: contentData.link,
      type: contentData.type,
      view: contentData.view,
    };

    return res
      .status(200)
      .json({
        data: contentsDetail,
        message: "successfully viewed the details page",
      });
  } catch (err) {
    return res.status(500).json({ data: err, message: "server error" });
  }
};
