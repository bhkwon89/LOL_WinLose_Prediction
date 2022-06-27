const sequelize = require("sequelize");
const Op = sequelize.Op;
const { contents, likes, users } = require("../../models");

module.exports = async (req, res) => {
  const categoryFilter = req.query.c;
  const typeFilter = req.query.t;
  const type = req.query.s;
  try {
    const categoryData = await contents.findAll({
      where: {
        [Op.and]: [
          {
            category: {
              [Op.like]: `${categoryFilter}%`,
            },
          },
          {
            type: {
              [Op.like]: `${typeFilter}%`,
            },
          },
        ],
      },
      include: [{ model: likes, attributes: ["id"] }],
    });

    let contentsList = categoryData.map((el) => {
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
    if (type === "like") {
      contentsList = contentsList.sort((a, b) => b.like - a.like);
    } else {
      contentsList = contentsList.sort((a, b) => b.year - a.year);
    }

    return res
      .status(200)
      .json({
        data: contentsList,
        message: "successfully viewed the data type individual page",
      });
  } catch (err) {
    return res.status(500).json({ data: null, message: "server error" });
  }
};
