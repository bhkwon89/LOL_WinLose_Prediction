const { contents, likes, users } = require("../../models");

module.exports = async (req, res) => {
  const filter = req.params.categoryName;
  try {
    const contentsFirstFilter = await contents.findAll({
      where: {
        category: filter,
      },
      include: [{ model: likes, attributes: ["id"] }],
    });

    let contentsList = contentsFirstFilter.map((el) => {
      return {
        id: el.id,
        title: el.title,
        director: el.director,
        year: el.year,
        rating: el.rating,
        runtime: el.runtime,
        summary: el.summary,
        genres: el.genres,
        image: el.image,
        category: el.category,
        like: el.likes.length,
        detail: el.detail,
        link: el.link,
        type: el.type,
        view: el.view,
      };
    });

    return res
      .status(200)
      .json({
        data: contentsList,
        message: "successfully viewed the category individual page",
      });
  } catch (err) {
    return res.status(500).json({ data: null, message: "server error" });
  }
};
