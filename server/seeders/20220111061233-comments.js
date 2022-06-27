'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        id: 1,
        review_id: 2,
        user_id: 1,
        comment: "저도 추천해주신 컨텐츠 봤었습니다. 좋은 작품이에요.",
        createdAt: "2022-01-02",
        updatedAt: new Date()
      },
      {
        id: 2,
        review_id: 3,
        user_id: 2,
        comment: "저도 한번 들어봐야겠네요.",
        createdAt: "2022-01-03",
        updatedAt: new Date()
      },
      {
        id: 3,
        review_id: 3,
        user_id: 3,
        comment: "좋은 노래네요.",
        createdAt: "2022-01-17",
        updatedAt: new Date()
      },
      {
        id: 4,
        review_id: 1,
        user_id: 4,
        comment: "좋은 자극이 되겠네요. 추천해주신거 보고 저도 마음가짐을 바꿔봐야겠습니다.",
        createdAt: "2022-01-12",
        updatedAt: new Date()
      },
      {
        id: 5,
        review_id: 2,
        user_id: 5,
        comment: "응원하겠습니다!",
        createdAt: "2022-01-03",
        updatedAt: new Date()
      },
      {
        id: 6,
        review_id: 2,
        user_id: 6,
        comment: "꼭 이루시길 바래요~",
        createdAt: "2022-01-03",
        updatedAt: new Date()
      },
      {
        id: 7,
        review_id: 4,
        user_id: 11,
        comment: "재밌는 영상이 많네요~",
        createdAt: "2022-01-03",
        updatedAt: new Date()
      },
      {
        id: 8,
        review_id: 4,
        user_id: 12,
        comment: "지친 하루를 잊게 해줄만큼 웃기네요",
        createdAt: "2022-01-03",
        updatedAt: new Date()
      },
      {
        id: 9,
        review_id: 4,
        user_id: 13,
        comment: "덕분에 좋은 영상 발견했네요",
        createdAt: "2022-01-03",
        updatedAt: new Date()
      },
      {
        id: 10,
        review_id: 5,
        user_id: 5,
        comment: "그러네요. 요즘 책이 주변에서 찾기 힘들어졌네요. 추천 감사합니다.",
        createdAt: "2022-01-08",
        updatedAt: new Date()
      },
      {
        id: 11,
        review_id: 5,
        user_id: 7,
        comment: "진짜 책이 주는 느낌을 느낀지가 오래됐네요.",
        createdAt: "2022-01-08",
        updatedAt: new Date()
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
