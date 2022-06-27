'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('likes', [
      {
        id: 1,
        user_id : 1,
        review_id: null,
        content_id: 128,
        createdAt: new Date()
      },
      {
        id: 2,
        user_id : 1,
        review_id: null,
        content_id: 178,
        createdAt: new Date()
      },
      {
        id: 3,
        user_id : 1,
        review_id: null,
        content_id: 229,
        createdAt: new Date()
      },
      {
        id: 4,
        user_id : 2,
        review_id: null,
        content_id: 229,
        createdAt: new Date()
      },
      {
        id: 5,
        user_id : 1,
        review_id: null,
        content_id: 2,
        createdAt: new Date()
      },
      {
        id: 6,
        user_id : 3,
        review_id: null,
        content_id: 47,
        createdAt: new Date()
      },
      {
        id: 7,
        user_id : 3,
        review_id: null,
        content_id: 49,
        createdAt: new Date()
      },
      {
        id: 8,
        user_id : 3,
        review_id: null,
        content_id: 52,
        createdAt: new Date()
      },
      {
        id: 9,
        user_id : 3,
        review_id: null,
        content_id: 55,
        createdAt: new Date()
      },
      {
        id: 10,
        user_id : 2,
        review_id: null,
        content_id: 52,
        createdAt: new Date()
      },
      {
        id: 11,
        user_id : 2,
        review_id: null,
        content_id: 2,
        createdAt: new Date()
      },
      {
        id: 12,
        user_id : 2,
        review_id: null,
        content_id: 8,
        createdAt: new Date()
      },
      {
        id: 13,
        user_id : 2,
        review_id: null,
        content_id: 15,
        createdAt: new Date()
      },
      {
        id: 14,
        user_id : 2,
        review_id: null,
        content_id: 115,
        createdAt: new Date()
      },
      {
        id: 15,
        user_id : 3,
        review_id: null,
        content_id: 115,
        createdAt: new Date()
      },
      {
        id: 16,
        user_id : 3,
        review_id: null,
        content_id: 116,
        createdAt: new Date()
      },
      {
        id: 17,
        user_id : 3,
        review_id: null,
        content_id: 229,
        createdAt: new Date()
      },
      {
        id: 18,
        user_id : 3,
        review_id: null,
        content_id: 128,
        createdAt: new Date()
      },
      {
        id: 19,
        user_id : 4,
        review_id: null,
        content_id: 310,
        createdAt: new Date()
      },
      {
        id: 20,
        user_id : 4,
        review_id: null,
        content_id: 321,
        createdAt: new Date()
      },
      {
        id: 21,
        user_id : 4,
        review_id: null,
        content_id: 330,
        createdAt: new Date()
      },
      {
        id: 22,
        user_id : 4,
        review_id: null,
        content_id: 360,
        createdAt: new Date()
      },
      {
        id: 23,
        user_id : 5,
        review_id: null,
        content_id: 360,
        createdAt: new Date()
      },
      {
        id: 24,
        user_id : 5,
        review_id: null,
        content_id: 52,
        createdAt: new Date()
      },
      {
        id: 25,
        user_id : 5,
        review_id: null,
        content_id: 8,
        createdAt: new Date()
      },
      {
        id: 26,
        user_id : 1,
        review_id: null,
        content_id: 25,
        createdAt: new Date()
      },
      {
        id: 27,
        user_id : 1,
        review_id: null,
        content_id: 33,
        createdAt: new Date()
      },
      {
        id: 28,
        user_id : 5,
        review_id: null,
        content_id: 274,
        createdAt: new Date()
      },
      {
        id: 29,
        user_id : 5,
        review_id: null,
        content_id: 355,
        createdAt: new Date()
      },
      {
        id: 30,
        user_id : 5,
        review_id: null,
        content_id: 191,
        createdAt: new Date()
      },
      {
        id: 31,
        user_id : 5,
        review_id: 2,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 32,
        user_id : 5,
        review_id: 3,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 33,
        user_id : 6,
        review_id: 2,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 34,
        user_id : 6,
        review_id: 4,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 35,
        user_id : 6,
        review_id: 5,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 36,
        user_id : 7,
        review_id: 1,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 37,
        user_id : 7,
        review_id: 2,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 38,
        user_id : 7,
        review_id: 5,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 39,
        user_id : 8,
        review_id: 1,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 40,
        user_id : 9,
        review_id: 1,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 41,
        user_id : 10,
        review_id: 1,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 42,
        user_id : 11,
        review_id: 1,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 43,
        user_id : 12,
        review_id: 1,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 44,
        user_id : 12,
        review_id: 2,
        content_id: null,
        createdAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('likes', null, {});
  }
};
