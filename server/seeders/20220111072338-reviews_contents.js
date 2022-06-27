'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('reviews_contents', [
      {
        id: 1,
        review_id: 1,
        content_id: 128
      },
      {
        id: 2,
        review_id: 1,
        content_id: 178
      },
      {
        id: 3,
        review_id: 2,
        content_id: 229
      },
      {
        id: 4,
        review_id: 2,
        content_id: 232
      },
      {
        id: 5,
        review_id: 3,
        content_id: 47
      },
      {
        id: 6,
        review_id: 3,
        content_id: 49
      },
      {
        id: 7,
        review_id: 3,
        content_id: 52
      },
      {
        id: 8,
        review_id: 3,
        content_id: 55
      },
      {
        id: 9,
        review_id: 4,
        content_id: 188
      },
      {
        id: 10,
        review_id: 4,
        content_id: 191
      },
      {
        id: 11,
        review_id: 4,
        content_id: 264
      },
      {
        id: 12,
        review_id: 4,
        content_id: 274
      },
      {
        id: 13,
        review_id: 5,
        content_id: 355
      },
      {
        id: 14,
        review_id: 5,
        content_id: 349
      },
      {
        id: 15,
        review_id: 5,
        content_id: 353
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews_contents', null, {});
  }
};
