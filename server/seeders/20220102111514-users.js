'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id : 1,
        email : "test1234@naver.com",
        nickname : "스마일",
        // password : test1234
        password : "$2b$10$Nvx6XKJlENkGQp4cCZIM5O5uxXH9qj5qOTXRcUYZqXjhKi3GluGmy",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id : 2,
        email : "mytest@google.com",
        nickname : "물방울",
        // password : 1q2w3e4r
        password : "$2b$10$1AF/AuobtlW66iVcMLaZOeOR2dnuHBfD/9XCFNzEtEeVR.GCMupaa",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 3,
        email : "allforyou@hanmail.net",
        nickname : "올포유",
        // password : allfor1234
        password : "$2b$10$5VNvM9TxRqyzsEI1uhBIF.QjjAcudJLwy2FtIikQzCElJlNeY4Vnu",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 4,
        email : "dummy@naver.com",
        nickname : "건빵",
        // password : dummy1234
        password : "$2b$10$6k6fpa3Vp4X4n1yj6sDUL.pTJKnDCk7Y/eZOLhGXrr2w.TV4pFuj.",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 5,
        email : "candytest@google.com",
        nickname : "캔디",
        // password : candy1234
        password : "$2b$10$vvsPcwael/9DKHFbo7kwf.NjvwmIDIjU/b91UwxaQa0n2wlyNcDF6",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 6,
        email : "mycat@naver.com",
        nickname : "우리집고양이",
        // password : mycat1234
        password : "$2b$10$o1gJHH/RiunqEDFGBryz..ZO71UwFN4/XsAzWZl3B/oIMWRLPLGGO",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 7,
        email : "rhythm@naver.com",
        nickname : "리듬세상",
        // password : rhythm1234
        password : "$2b$10$D3UnchacMrzaRIoFeMIF9.6vabxIYBFf8touu2awRLMWkkOSOyR7O",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 8,
        email : "flower@google.com",
        nickname : "플라워",
        // password : flower1234
        password : "$2b$10$1srz1fQ8a9eVfTeW5RGrae3R3l1KnoacotDZ1/yQMTEzADLjz2BN2",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 9,
        email : "winner@naver.com",
        nickname : "승리",
        // password : winner1234
        password : "$2b$10$Vs7BHZrYLu.jz1AQzjH0Tu3qtoHTaetOswegUVjgYh46cKDFq4BBa",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 10,
        email : "vitamin@naver.com",
        nickname : "비타민",
        // password : vitamin1234
        password : "$2b$10$XeWhH/JWu76zFn4uHHDJyOg8CxiUMmtVpoacUxj1m3k1936y80FGS",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 11,
        email : "popcorn@naver.com",
        nickname : "카라멜팝콘",
        // password : popcorn1234
        password : "$2b$10$wo9LUW2dRJmkkfuaBECJe.TMfuV3stsCLKTmysxGKbGrpM0/MHwy.",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 12,
        email : "whisper@naver.com",
        nickname : "귓속말",
        // password : whisper1234
        password : "$2b$10$hPJjRsyCeNyS0Swfmz7CiuAS//7.bgKya9sM0Sm8pBHl3YohDfbQC",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 13,
        email : "kingsalt@naver.com",
        nickname : "왕소금",
        // password : kingsalt1234
        password : "$2b$10$JrkGqH4FwM/041qNDtOUqeXPHVl2S/foO9HQZnNv8FJqx0zb8KP.e",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 14,
        email : "rabbit@naver.com",
        nickname : "내토끼",
        // password : rabbit1234
        password : "$2b$10$N1yySUAyYXLHHoU4mlzVludLIPLiZgCZo1yoPvWM.xix1V0bQ77VO",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 15,
        email : "snowwhite@naver.com",
        nickname : "백설공주",
        // password : snowwhite1234
        password : "$2b$10$sMaUNANFYO8I1PCmVPnsQuP6YF0SFJTgOyz8uZ2zA4MbGIYDnDV0W",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 16,
        email : "darkclouds@naver.com",
        nickname : "먹구름",
        // password : darkclouds1234
        password : "$2b$10$YMHSKa9Cbwu6ywRyTv4qGuPlKqU76befuXCUFC6efDFN3hQjrVYjG",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 17,
        email : "beerking@naver.com",
        nickname : "퇴근후맥주",
        // password : beerking1234
        password : "$2b$10$iWxeD1ZTDbJXjxM4mU6e/udir5oateKwwTW2cCT/ag7YrTzszMZRC",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 18,
        email : "mintchocolate@naver.com",
        nickname : "민트초코",
        // password : mincho1234
        password : "$2b$10$FyHgZR64geekL/wD6s509OUuChfSkCDHguKTsI7b.wi807SAPv69W",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 19,
        email : "magician@naver.com",
        nickname : "마술사",
        // password : magician1234
        password : "$2b$10$OJpM.mKMovXjqh5nHBPFoODLmAAmuv/6/OVe1zzj7IU74ThW2u60a",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 20,
        email : "chocobar@naver.com",
        nickname : "초코바",
        // password : chocobar1234
        password : "$2b$10$M514E/NZwS3KWVplR/zif./s1vQqQ/zshPpnNpKHYLKeu6dzhJeA2",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
