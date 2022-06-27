'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('reviews', [
      {
        id :1,
        user_id: 1,
        category: "동기부여",
        title: "공부할 생각만 하고 실행은 뒷전인 우리",
        text: 
        `공부를 지속해서 한다는 것은 쉬운 일이 아닙니다.
        개인마다 동기가 부여되는 요소가 다를 수 있습니다.

        저는 이 컨텐츠를 AllForYou를 통해 발견하게 되고 나만의 동기부여가 생겼습니다.

        자기 자신이 스스로 동기부여를 상기시키고 공부한다면 좋겠지만 제가 추천하는 컨텐츠를 통해서나 또는,
        AllForYou에서 소개해주는 컨텐츠들을 통해서 동기부여를 찾을수도 있습니다.

        저는 이 리뷰를 남기고 상기된 마음을 갖고 다시 공부하러 갑니다. 그리고 이 상기된 마음이 식으면
        다시 이곳으로 돌아와 식은 마음을 다시 뜨겁게 만들고 가겠습니다.`,
        image: "https://s3.ap-northeast-2.amazonaws.com/www.allforyou.life/userReviewImage/1/review1.jpeg",
        createdAt: "2022-01-11",
        updatedAt: new Date()
      },
      {
        id :2,
        user_id: 2,
        category: "도전",
        title: "도전은 젊은이들만의 특권이 아니다",
        text: 
        `안녕하세요.
        저는 늦은 나이에 잊고있던 꿈에 도전하려 합니다.

        AllForYou에서 추천하는 컨텐츠를 보고 '나이가 도전에 발목을 잡는다면 이들은 도전을 시작도 못하겠구나'를 느꼈습니다.
        다시 가슴이 뜨거워지고 젊었을 시절 품었던 꿈에 다시 도전해보려 합니다.

        제가 추천하는 컨텐츠를 보시고 여러분들도 저와 같은 생각, 같은 느낌을 받으셨으면 좋겠습니다.`,
        image: "https://s3.ap-northeast-2.amazonaws.com/www.allforyou.life/userReviewImage/2/review2.png",
        createdAt: "2022-01-01",
        updatedAt: new Date()
      },
      {
        id :3,
        user_id: 3,
        category: "편안함",
        title: "복잡하거나 답답할때 들으면 좋은 노래",
        text: 
        `사회생활이나 다른 어딘가에서 느끼는 안좋은 감정들을 빠르게 환기시키기위해서는 노래만한게 없죠.
        AllForYou에서 찾은 노래 몇개 추천합니다.
        몇개는 제 리스트에 있던거라 반갑더라구요 ㅎㅎ`,
        image: "https://s3.ap-northeast-2.amazonaws.com/www.allforyou.life/userReviewImage/3/review3.jpeg",
        createdAt: "2022-01-16",
        updatedAt: new Date()
      },
      {
        id :4,
        user_id: 19,
        category: "웃음",
        title: "사회생활에 지친 당신을 위해",
        text: 
        `오늘도 피곤한 하루를 보내고 집에와서 TV를 켜보지만 재밌거나 볼만한게 없죠.
        넷서칭을 통해 찾은 AllForYou에서 많은 컨텐츠를 추천하더라구요.
        리뷰글을 보고 저도 추천글을 작성합니다. 아래 추천컨텐츠는 우울하거나 지쳐있는 제게 큰 웃음을 주었던 컨텐츠들입니다.
        `,
        image: "https://s3.ap-northeast-2.amazonaws.com/www.allforyou.life/userReviewImage/19/review19.jpeg",
        createdAt: "2022-01-19",
        updatedAt: new Date()
      },
      {
        id :5,
        user_id: 12,
        category: "편안함",
        title: "미디어 컨텐츠의 피로감을 풀어줄 책",
        text: 
        `휴대폰, PC, TV등 미디어로 접근하는 컨텐츠들이 많아지면서 책의 존재가 점점 희미해지는 요즘
        저는 책이 주는 편안함을 추천하고자 리뷰글을 작성해봤습니다.
        여러분들도 제가 추천해드리는 책에 흥미를 느끼시고 책에 조금 더 가까워지셨으면 좋겠습니다.
        `,
        image: "https://s3.ap-northeast-2.amazonaws.com/www.allforyou.life/userReviewImage/12/review12.jpeg",
        createdAt: "2022-01-07",
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
