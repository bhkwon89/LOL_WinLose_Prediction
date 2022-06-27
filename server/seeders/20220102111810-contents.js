'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('contents', [
            {
                id: 1,
                title: "Butterfly(영화 '국가대표' OST 삽입곡)",
                director: "러브홀릭스",
                year: "2008-12-11",
                summary:
                    `어리석은 세상은 너를 몰라
        누에속에 감춰진 너를 못 봐
        나는 알아 내겐 보여
        그토록 찬란한 너의 날개
        겁내지 마 할 수 있어
        뜨겁게 꿈틀거리는
        날개를 펴 날아올라
        세상 위로
        태양처럼 빛을 내는 그대여
        이 세상이 거칠게 막아서도
        빛나는 사람아
        난 너를 사랑해
        널 세상이 볼 수 있게 날아 저 멀리
        꺾여버린 꽃처럼 아플때도
        쓰러진 나무처럼 초라해도
        너를 믿어 나를 믿어
        우리는 서로를 믿고 있어
        심장에 소릴 느껴봐
        힘겹게 접어 놓았던
        날개를 펴 날아올라
        세상 위로
        벅차도록 아름다운 그대여
        이 세상이 차갑게 등을 보여도
        눈부신 사람아 난 너를 사랑해`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/1729/172906.jpg?version=undefined",
                category: "도전",
                detail: "can;자신과의싸움,노력",
                link: "https://music.bugs.co.kr/track/1668865?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 2,
                title: "행운을 빌어요",
                director: "페퍼톤스",
                year: "2012-4-24",
                summary:
                    `반짝 눈부신 날 짠하고 나타날 것 같아
          방금 짖궂은 그 표정
          문득 머리위로 차가운 공기가 흐른다
          이젠 인사를 할 시간
          시작하는 여행자여 안녕
          언젠가 우리 다시 만날때
          오 그대로 내가 사랑한
          너의 말투 너의 웃음 그대로
          생각해보면 똑같은 풍경
          이 하늘과 바람, 복잡한 도시
          오 그대여 눈을 감으면
          나는 늘 여기서 널 기다리고 있을 테니까
          행운을 빌어줘요 웃음을 보여줘요
          눈물은 흘리지 않을게, 굿바이
          뒤돌아 서지마요 쉼없이 달려가요
          노래가 멈추지 않도록
          수많은 이야기 끝없는 모험만이
          그대와 함께이길 -
      
          안녕 고마웠어 짧았던 너와 나의 계절
          끝은 또 하나의 시작
          잔뜩 배낭을 멘 작은 어깨를 두드린다
          이젠 떠나야 할 시간
          숨가쁜 시간의 강을 건너
          엇갈린 축의 바람이 분다
          오 그대 작은 별이 되기를
          망설였던 나의 서툰 노래 이젠 할 수 있어
          행운을 빌어줘요 웃음을 보여줘요
          눈물은 흘리지 않을게, 굿바이
          뒤돌아 서지마요 쉼없이 달려가요
          노래가 멈추지 않도록
          수많은 이야기 끝없는 모험만이
          그대와 함께이길
      
          행운을 빌어요
          빛나기 시작한 별
          세차게 부는 바람
          눈물은 흘리지 않을게, 굿바이
          오랜 시간이 흘러
          쓰러질 듯 벅찬 날
          이 서툰 노래가 닿기를
          긴 여행의 날들 끝없는 행운만이
          그대와 함께이길`,
                genres: "인디;일렉트로닉",
                image: "https://image.bugsm.co.kr/album/images/original/3274/327424.jpg?version=undefined",
                category: "도전",
                detail: "can;자신과의싸움;위로;밝음",
                link: "https://music.bugs.co.kr/track/2635423?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 3,
                title: "으라차차",
                director: "럼블피쉬",
                year: "2005-7-21",
                summary:
                    `다시 내게 찾아 온거야
          너무 빨리 돌아 온거야
          네 모습을 보여봐
          쑥쓰러워 그런거야
          빗소리를 듣고 온거야
          밤이 너를 다시 불러 낸거야
          너를 밀어내려고
          이렇게 난 소리질러
      
          으라차차 한 번 더 참아볼께
          으하하하 웃으며 넘겨볼께
          혼자여서 좋은 일이
          아직도 너무 많은데
          나는 법을 잊어버렸다해도
          내일 향해 걸어가는 이길이
          언젠가는 더 커다란
          날개가 되어 줄테니
      
          나를 긴장하게 한거야
          지루하게 보였던거야
          네모습을 보여줘
          수줍어서 그런거야
          혼자라는 사실 때문에
          고독이란 너의 이름만으로
          다시 밀어내려고
          이렇게 난 소리질러
      
          으라차차 한 번 더 참아볼께
          으하하하 웃으며 넘겨볼께
          혼자여서 좋은 일이
          아직도 너무 많은데
          나는 법을 잊어버렸다해도
          내일 향해 걸어가는 이길이
          언젠가는 더 커다란
          날개가 되어 줄테니
      
          차가운 그 날의 기억들도
          다시는 가질 수 없는
          내 안에서 들려오는 소리만
      
          나를 잊으란 그 말들도
          다시 떠나란 그 말들도
          한숨속에 모두 다 날릴테니
      
          라랄라라 신나게 살아볼께
          으하하하 더 크게 웃는거야
          혼자여서 좋은 일이
          아직도 너무 많은데
          이젠 나를 다신 찾아오지마
          가끔 내가 너를 찾아갈테니
          나란 사람 있다는 것만
          잊지 말고 잘 살아줘
      
          라랄라라 라라랄라라라
          라랄라라 라랄라라라`,
                genres: "락;메탈",
                image: "https://image.bugsm.co.kr/album/images/original/80095/8009572.jpg?version=undefined",
                category: "도전",
                detail: "can;기운;위로",
                link: "https://music.bugs.co.kr/track/80107075?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 4,
                title: "거꾸로 강을 거슬러 오르는 저 힘찬 연어들처럼",
                director: "강산에",
                year: "1998-2-28",
                summary:
                    `흐르는 강물을 거꾸로 거슬러 오르는 연어들의
          도무지 알 수 없는 그들만의 신비한 이유처럼
          그 언제서부터인가 걸어 걸어 걸어오는 이 길
          앞으로 얼마나 더 많이 가야만 하는지
      
          여러 갈래 길 중 만약에 이 길이 내가 걸어가고 있는
          돌아서 갈 수밖에 없는 꼬부라진 길 일지라도
          딱딱해지는 발바닥 걸어 걸어 걸어 가다보면
          저 넓은 꽃밭에 누워서 난 쉴 수 있겠지
      
          여러 갈래 길 중 만약에 이 길이 내가 걸어가고 있는
          막막한 어둠으로 별빛조차 없는 길 일지라도
          포기할 순 없는거야 걸어 걸어 걸어 가다보면
          뜨겁게 날 위해 부서진 햇살을 보겠지
      
          그래도 나에겐 너무나도 많은 축복이란 걸 알아
          수없이 많은 걸어 가야 할 내 앞길이 있지 않나
          그래 다시 가다보면 걸어 걸어 걸어 가다보면
          어느날 그 모든 일들을 감사해 하겠지
      
          보이지도 않는 끝
          지친 어깨 떨구고 한숨짓는 그대 두려워 말아요
          거꾸로 강을 거슬러 오르는 저 힘찬 연어들처럼
          걸어가다보면 걸어가다보면 걸어가다보면..`,
                genres: "락;메탈",
                image: "https://image.bugsm.co.kr/album/images/original/30/3034.jpg?version=undefined",
                category: "도전",
                detail: "can;위로;긍정",
                link: "https://music.bugs.co.kr/track/38793?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 5,
                title: "근.자.감",
                director: "포이트리",
                year: "2012-1-25",
                summary:
                    `뭐라도 되겠지
          내 걱정은 하지마 니 걱정부터 좀 해
          내 눈에 이 눈물
          기뻐서 흐른거야 행복해 나온거야
      
          기죽지 않는걸 어두운 밤도 잠시
          하룻밤 자고 나면 태양은 다시 뜨니까
      
          I can be anything 무엇도 아닌 난
          I'm Candy I don't cry 울지 않을 거야
          이룬 게 난 없어서 망가질 것도 없어
          I wanna do I wanna do I wanna do uh~
      
              더이상 낮아질 곳 없어
          올라갈 일들만 남은 걸
          자유롭게 텅빈 내 마음 이게 나야
      
          뭘그리 심각해
          밥이되지 못하면 죽이라도 되면 돼
          누가 뭐래도 난 죽이니까
      
          I can be anything 무엇도 아닌 난
          I'm Candy I don't cry 울지 않을 거야
          이룬 게 난 없어서 망가질 것도 없어
          I wanna do I wanna do I wanna do uh~
      
              더이상 낮아질 곳 없어
          올라갈 일들만 남은 걸
          자유롭게 텅빈 내 마음
      
          아무 근거 없는 자신감이 좋아
          그게 우릴 버티게 하니까
      
          I can be anything 무엇도 아닌 난
          I'm Candy I don't cry 울지 않을 거야
          이룬 게 난 없어서 망가질 것도 없어
          I wanna do I wanna do I wanna do uh~
      
              더이상 낮아질 곳 없어
          올라갈 일들만 남은 걸
          자유롭게 텅빈 내 마음 이게 나야`,
                genres: "알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/3191/319141_cf001.jpg?version=undefined",
                category: "도전",
                detail: "can;위로;긍정",
                link: "https://music.bugs.co.kr/track/2561600?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 6,
                title: "비상",
                director: "임재범",
                year: "1997-7-1",
                summary:
                    `누구나 한번쯤은 자기만의 세계로
          빠져들게 되는 순간이 있지
          그렇지만 나는 제자리로 오지 못했어
          되돌아 나오는 길을 모르니
      
          너무 많은 생각과 너무 많은 걱정에
          온통 내자신을 가둬두었지
          이젠 이런 내모습 나조차 불안해 보여
          어디부터 시작할지 몰라서
      
          나도 세상에 나가고 싶어
          당당히 내 꿈들을 보여줘야 해
          그토록 오랫동안 움츠렸던 날개
          하늘로 더 넓게 펼쳐 보이며 날고싶어
      
          감당할 수 없어서 버려둔 그 모든건
          나를 기다리지 않고 떠났지
          그렇게 많은 걸 잃었지만 후회는 없어
          그래서 더 멀리 갈 수 있다면
      
          상처받는 것보단 혼자를 택한거지
          고독이 꼭 나쁜 것은 아니야
          외로움은 나에게 누구도 말하지 않은
          소중한 것 깨닫게 했으니까
      
          이젠 세상에 나갈 수 있어
          당당히 내 꿈들을 보여줄거야
          그토록 오랫동안 움츠렸던 날개
          하늘로 더 넓게 펼쳐 보이며
      
          다시 새롭게 시작할거야
          더이상 아무것도 피하지 않아
          이세상 견뎌낼 그 힘이 되줄거야
          힘겨웠던 방황은`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/46/4657.jpg?version=undefined",
                category: "도전",
                detail: "can;위로;소울",
                link: "https://music.bugs.co.kr/track/74600?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 7,
                title: "Slow Starter (With 이승기)",
                director: "윤종신",
                year: "2021-10-21",
                summary:
                    `다 그랬어 다 뭐든지 늦었어
          뭐든 빨리 깨닫지 못했던 나
          너의 소중함들도 내게 온 그 기회들도
          그땐 바보처럼
          앞서가던 그 친구들의
          뒷모습은 내게 거대한 그늘로
          애써 따라가려던 버거웠던 그 몸부림 속에
          나도 모르게 좁혀지던 그 거리는
          난 아니라고 타고 난 게 없다고
          가진 게 없는 나라고 매일 부르던 노래
          너무 부족하다고 매일 메꾸려 했던
          그 팔에 흐르던 땀은
          증발하지 않아 차곡차곡
          내 빈틈에 이야기들로 차 난 이제서야
          두려웠어 뭐든 안 될 때
          이것저것 핑계 만을 떠올릴 때
          나를 바라보는 눈
          남의 눈에 나를 맞추려던
          길었던 날들 거쳐야 했던 그 날들
          난 아니라고 타고 난 게 없다고
          가진 게 없는 나라고 매일 부르던 노래
          너무 부족하다고 매일 메꾸려 했던
          그 팔에 흐르던 땀은
          증발하지 않아 차곡차곡
          내 빈틈에 이야기들로 차 난 이제서야
          좁은 가슴들이 던졌던
          그 원망들과 쉬웠던 외면
          다행히도 늦지 않아서
          포기하지 마 아프면 아픈 얘기
          그 모든 순간순간 나만의 이야기야
          멈추려 하지 마
          분명 날아오를 기회가 와 좀 늦더라도
          내 눈가의 주름 깊은 곳엔 뭐가 담길지
          궁금하지 않니 답은 조금 미룬 채
          지금은 조금 더 부딪혀봐`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/204270/20427070.jpg?version=undefined",
                category: "도전",
                detail: "can;위로;동감",
                link: "https://music.bugs.co.kr/track/32359996?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 8,
                title: "마라토너",
                director: "조규찬",
                year: "2020-6-8",
                summary:
                    `해는 저물어버리고
          코스 곁에 사람들은 떠나고
          절룩거리는 두 다리에
          나의 시선은 희미해져 간다
          난 그렇지만 멈추지 않아
          내게 주어진 이 길을 달린다
          쓰러진 대도 다시 난 일어난다
          그리고 난 다시 달린다
          아무나 할 수 없다고
          이젠 그만 포기해도 된다고
          사람 없는 차가운 길이
          혀를 끌끌 차며 나를 말린다
          난 그렇지만 멈추지 않아
          내게 주어진 이 길을 달린다
          쓰러진 대도 다시 난 일어난다
          그리고 나는 다시 달린다
          저 멀리 어딘가에 골인지점이
          나를 기다리고 있다
          굽은 허릴 편다
          고갤 들어올린다
          난 날아오른다 다신 포기하지 않는다
          내게 주어진 이 길을 나는 달린다
          쓰러진 대도 다시 난 일어난다
          나와의 약속을 난 지킨다
          널 생각하며 나는 달린다
          나를 믿어준 널 위해 달린다
          쓰러진 대도 다시 난 일어난다
          끝까지 다시 나는 달린다
          주어진 나의 길을 달린다`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/203291/20329152.jpg?version=undefined",
                category: "도전",
                detail: "can;위로;동감",
                link: "https://music.bugs.co.kr/track/31931597?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 9,
                title: "Dreaming(드라마 “드림하이” OST)",
                director: "김수현",
                year: "2011-2-14",
                summary:
                    `저 멀리 희미해지는
          나의 꿈을 바라보며
          멍하니 서있었죠
          더 이상 남은 게 없어
          모두 포기할까 했었지만
          다시 일어나요
      
          한 걸음 한 걸음 오늘도
          조심스럽게 내디뎌요
          가슴 가득히 두려움과
          설레임을 안은 채
          비틀거리고 흔들려도
          난 또 한 걸음을 내디뎌요
          언젠가 만날 내 꿈을 향해
      
          이대로 끝나는 건 아닐지
          두려움이 날 자꾸만
          망설이게 하지만
          가슴 속 깊은 곳에서
          멈추지 않는 울림이 날
          앞으로 이끌죠
      
          한 걸음 한 걸음 오늘도
          조심스럽게 내디뎌요
          가슴 가득히 두려움과
          설레임을 안은 채
          비틀거리고 흔들려도
          난 또 한 걸음을 내디뎌요
          언젠가 만날 내 꿈을 향해
      
          언젠간 만날 내 꿈을 향해`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/2641/264185.jpg?version=undefined",
                category: "도전",
                detail: "can;꿈;응원",
                link: "https://music.bugs.co.kr/track/2251403?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 10,
                title: "거위의 꿈",
                director: "인순이",
                year: "2007-1-29",
                summary:
                    `난 난 꿈이 있었죠
          버려지고 찢겨 남루하여도
          내 가슴 깊숙히 보물과 같이
          간직했던 꿈
      
          혹 때론 누군가가 뜻 모를 비웃음
          내 등뒤에 흘릴때도
          난 참아야 했죠 참을수 있었죠
          그 날을 위해
      
          늘 걱정하듯 말하죠
          헛된 꿈은 독이라고
          세상은 끝이 정해진 책처럼
          이미 돌이킬수 없는
          현실이라고...
      
          그래요 난 난 꿈이 있어요
          그 꿈을 믿어요.
          나를 지켜봐요
          저 차갑게 서 있는 운명이란 벽앞에
          당당히 마주칠 수 있어요
      
          언젠가 나 그벽을 넘고서
          저 하늘을 높이 날을수 있어요
          이 무거운 세상도 나를 묶을 순 없죠
          내 삶의 끝에서
          나 웃을 그날을 함께해요,,,,
      
          늘 걱정하듯 말하죠
          헛된 꿈은 독이라고
          세상은 끝이 정해진 책처럼
          이미 돌이킬수 없는
          현실이라고...
      
          그래요 난 난 꿈이 있어요
          그 꿈을 믿어요.
          나를 지켜봐요
          저 차갑게 서 있는 운명이란 벽앞에
          당당히 마주칠 수 있어요
      
          언젠가 나 그벽을 넘고서
          저 하늘을 높이 날을수 있어요
          이 무거운 세상도 나를 묶을 순 없죠
          내 삶의 끝에서
          나 웃을 그날을 함께해요,,,,`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/80244/8024431.jpg?version=undefined",
                category: "도전",
                detail: "can;꿈;응원;용기",
                link: "https://music.bugs.co.kr/track/80298311?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 11,
                title: "Dreamer",
                director: "레떼아모르",
                year: "2021-6-17",
                summary:
                    `알 수 없었지만
          시작하고 있던 발걸음
          끝은 어디인지
          어떻게 해내야만 하는지
      
          실수도 하겠지 실패란
          익숙하게 되겠지
          다른 누군가와 비교하며
          좌절도 하겠지
      
          그러나 나는
      
          꿈꾸고 있어
          여전히 세상은
          나를 바보 취급하고
          내 가는 이 길이 틀렸다 하지만
      
          꿈꾸고 있어
          여전히 세상은
          내게 잠에서 깬 후엔
          다 사라져 버릴 꿈이라 하지만
          난 꿈꾸고 있어
      
          꿈꿀 수 없었던 이유는
          너무나도 많았지
          타협해야 했던 세상과
          짊어졌던 현실이
      
          다 이겨내기에
          다 견뎌내기에
          나는
          너무나 가혹했던 시간들을
          버텨야만 했지
          그리고 나는
      
          꿈꾸고 있어
          여전히 세상은
          나를 바보 취급하고
          내 가는 이 길이 틀렸다 하지만
      
          꿈꾸고 있어
          여전히 세상은
          내게 잠에서 깬 후엔
      
          다 사라져 버릴 꿈이라 하지만
          난 꿈꾸고 있어
      
          그래 아직 꿈꾸고 있어(아직 꿈꾸고 있어)
          여전히 세상 속에서(세상 속에서)
          몰아치는 바람(몰아치는)
          다 흩어져 버릴 먼지와 같지만(먼지와 같지만)
      
          꿈이란 내게(내게)
          살아가는 이유가 되고(그 이유가 되고)
      
          힘겨운 하루를 버틸 수 있는 힘
          눈물이 되니까
          (이미 빛을 잃은 빛바래져버린 꿈이라)
          꿈이라 하지만
          (난 여전히 이 세상 속에서)
      
          난 꿈꾸고 있어`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/40473/4047332.jpg?version=undefined",
                category: "도전",
                detail: "can;꿈;응원;용기",
                link: "https://music.bugs.co.kr/track/6114938?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 12,
                title: "꿈을 꾼다(드라마 “김과장” OST)",
                director: "서영은",
                year: "2017-3-15",
                summary:
                    `때론 마음먹은 대로 되지 않을 때도 있지만
          지나간 세월을 돌아보면
          괜히 웃음이 나와
      
          정신없는 하루 끝에 눈물이 날 때도 있지만
          지나간 추억을 뒤돌아보면
          입가엔 미소만 흘러
      
          꿈을 꾼다 잠시 힘겨운 날도 있겠지만
          한 걸음 한 걸음 내일을 향해 나는 꿈을 꾼다
      
          혹시 너무 힘이 들면 잠시 쉬어가도 괜찮아
          천천히 함께 갈 수 있다면
          이미 충분하니까
      
          자꾸 못나 보이는 나 맘에 들지 않는 오늘도
          내일의 나를 숨 쉬게 하는 소중한 힘이 될 거야
      
          꿈을 꾼다 잠시 힘겨운 날도 있겠지만
          한 걸음 한 걸음 내일을 향해 나는 꿈을 꾼다
      
          꿈을 꾼다 잠시 외로운 날도 있겠지만
          세월이 흘러서 시간이 가면 모두 지나간다
      
          꿈을 꾼다 잠시 힘겨운 날도 있겠지만
          한 걸음 한 걸음 내일을 향해 나는 꿈을 꾼다
          행복한 꿈을 꾼다`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/200868/20086842.jpg?version=undefined",
                category: "도전",
                detail: "can;꿈;응원;위로;동감",
                link: "https://music.bugs.co.kr/track/30584570?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 13,
                title: "꿈이 뭐야(feat.Dok2 & 크러쉬)",
                director: "GRAY(그레이)",
                year: "2013-10-25",
                summary:
                    `넌 꿈이 뭐야 ?
          계속 그렇게 고개 숙일거야 ?
          넌 꿈이 뭐야 ?
          네 자신에게 물어봐 꿈이 뭐야 ?
      
          자신감을 가져 넌 대체 꿈이 뭐야 ?
          네 인생의 주인공은 너 바로 너야
          원하는 삶을 살어 웅크리지 말어
          모두의 성공의 잣대가 왜 돈인거야 ?
          Why ? 묻고 싶어 넌 행복해 ?
          그래 인생은 사실은 좀 불공평해
          출발선은 모두 달라도
          어릴 때 배웠잖아 인생은 Marathon
          위기는 위험과 기회의 합성어
          위기를 기회로 삼고 싶다면 받아쳐 지금
          활짝 펴 축 쳐진 어깨를
          사람으로 태어났음 남겨봐 이름
          Yeah 덧칠해봐 기름
          녹슬었던 꿈 이제 거머쥐기를
          넘어지고 포기하기엔
          인생은 길어
          네가 품은 꿈은 어디에 ?
      
          왜그리 고민이 많아 ?
          네 눈에 보이는 것보다
          훨씬 재밌는 게 많아
          Life's so good
      
          Yeah Yeah Yeah I'll be the one
          Survival game 이야 뭐가 그리 두려워
          Yeah Yeah Yeah I'll be the one
          부잣집 아들 한 개도 안 부러워
      
          집이 잘 살아야 니가 잘사는거니 ?
          부모 탓 하지마 네 능력이 원인
          뭘 하든 혼자서 하는 습관을 길러
          잘 되든 못 되든 니 탓
          원래 다 쉬운 일은 없어
          전부를 걸어봐 All -in 해봐 몽땅
          도전해 또 뭐가 그리도 겁나 ?
          허세만 부리다 니 앞을 못 봐
          많은 사람들이 자기 길 놔두고 옆 사람 따라 걷지
          첫술부터 배부르겠다는 욕심 땜에
          부려보는 땡깡 혹은 억지
          가슴이 뭉클해지거나 두근거릴 일이 없지
          넌 시스템의 부품
          아직 늦지 않았으니 키워봐 너의 꿈
          세상이 알아줄 거야 네가 바래온 꿈
      
          왜 그리 고민이 많아 ?
              네 눈에 보이는 것보다
          훨씬 재밌는 게 많아
          Life's so good
      
          넌 꿈이 뭐야 ?
          계속 그렇게 고개 숙일거야 ?
          넌 꿈이 뭐야 ?
          네 자신에게 물어봐 꿈이 뭐야 ?
      
          너무 고민할 필요 없지 빠지면 빠질수록
          복잡해지는 게 삶이니 조심해 그 수렁
          모두가 꿈꾸는 완벽은 존재하지 않아
          정답은 가까이 있어 주위를 둘러봐봐
          나만 혼자인듯한 생각들은 외로움의 지름길
          한 발짝만 물러나 제 3의 눈을 뜨면
          쉽게 알게 될 거야 여태 뭘 놓치고 잃은지
          앓지 말고 도움을 청해 모르면 물어
          세상은 넓고 넘치는 게 시간
          늦음 따윈 없어 담배 대신 펴 네 미간
          지난 일에 대해 미련은 다 버려
          새로 다가올 날들을 위해 외쳐 wattup
          Wassup young world what it do 절대 포기하지마
          숨을 쉬는 한 우린 특별해 어디까지나
          여기까지 왔으니 더 멀리까지 가
          따라가기만 해 너의 머리 아닌 맘
      
          따라 잡히기만 했던 머리와 기억
          이 모든 게 다 내 탓이라고 믿어
          족쇄는 내 맘 안에 악
          때문에 맘먹기에 달렸어
          전에도 얘기했었지
          from the bottom to the top
          이젠 더 한발 내달릴 준비가 끝났어
          yeah I'll be the one
      
          왜 그리 고민이 많아 ?
          네 눈에 보이는 것보다
          훨씬 재밌는 게 많아
          Life's so good
      
          Yeah Yeah Yeah I'll be the one
          Survival game 이야 뭐가 그리 두려워
          Yeah Yeah Yeah I'll be the one
          부잣집 아들 한 개도 안 부러워`,
                genres: "랩;힙합",
                image: "https://image.bugsm.co.kr/album/images/original/3938/393823.jpg?version=undefined",
                category: "도전",
                detail: "can;꿈;용기;응원",
                link: "https://music.bugs.co.kr/track/3250785?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 14,
                title: "너도(feat.Cha Cha Malone)",
                director: "로꼬",
                year: "2016-4-5",
                summary:
                    `누구나 떨리지 처음엔
          맞닥뜨린 적 없기에
          확신을 못해
          나도 마찬가지였네
          하지만 이 목소리를
          듣고 있다면
          무대 위에 나의 모습을 봤다면
          아마도 난 꿈꿔왔던
          내가 되어가고 있는 거겠지
          너도 상상했던 너가 될 거야
          아무도 지금의 너를 몰라본대도
          한 겨울밤의 꿈은 아닐 거야
          지금 너의 가슴의 온기가
          느껴진다면
          모를 수밖에 부딪혀 보기 전 까진
          철이 없었던 게 득이 될진 몰랐지
          시작은 반지하
          좀 올라오니
          아스팔트 바닥 위였던 걸
          나는 기억하지
          날 둘러쌌던 어른들은 나에게
          그저 모든 게
          한 때일 뿐이라고 말했지
          그들이 잠을 잘 때
          내가 깨어있던 시간을
          허송세월이라고 불렀으니까
          근데 넌 결국 내 노랠 듣고 있잖아
          그들이 말한 허송세월에 대한
          대가가 이런 거라면
          너도 마음껏 낭비하길 바래
          그 미래에 너의 목소리가
          닿길 바래
          누구나 떨리지 처음엔
          맞닥뜨린 적 없기에
          확신을 못해
          나도 마찬가지였네
          하지만 이 목소리를 듣고 있다면
          무대 위에 나의 모습을 봤다면
          아마도 난 꿈꿔왔던
          내가 되어가고 있는 거겠지
          너도 상상했던 너가 될 거야
          아무도 지금의 너를 몰라본대도
          한 겨울밤의 꿈은 아닐 거야
          지금 너의 가슴의 온기가
          느껴진다면
          If you reach for the stars
          Just hold on, you won't fall
          You can have it all
          You will fly, you will fly
          Don't you throw it all out
          You're so close to the line
          Things will change in due time
          You will fly, you will fly
          you will fly
          너도 상상했던 너가 될 거야
          아무도 지금의 너를 몰라본대도
          한 겨울밤의 꿈은 아닐 거야
          지금 너의 가슴의 온기가
          느껴진다면`,
                genres: "랩;힙합",
                image: "https://image.bugsm.co.kr/album/images/original/200292/20029218.jpg?version=undefined",
                category: "도전",
                detail: "can;꿈;용기;응원",
                link: "https://music.bugs.co.kr/track/30209129?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 15,
                title: "Try Everything(애니메이션 “주토피아” OST)",
                director: "Shakira",
                year: "2016-2-12",
                summary:
                    `I messed up tonight I lost another fight
          I still mess up but I'll just start again
          I keep falling down I keep on hitting the ground
          I always get up now to see what's next
          Birds don't just fly they fall down and get up
          Nobody learns without getting it wrong
          I won't give up no I won't give in
              Till I reach the end and then I'll start again
          No I won't leave I wanna try everything
          I wanna try even though I could fail
          I won't give up no I won't give in
              Til I reach the end and then I'll start again
          No I won't leave I wanna try everything
          I wanna try even though I could fail
          Try everything
          Try everything
          Try everything
          Look at how far you've come
          you filled your heart with love
          Baby you've done enough that cut your breath
          Don't beat yourself up don't need to run so fast
          Sometimes we come last but we did our best
          I won't give up no I won't give in
              Til I reach the end and then I'll start again
          No I won't leave I wanna try everything
          I wanna try even though I could fail
          I won't give up no I won't give in
              Til I reach the end and then I'll start again
          No I won't leave I wanna try everything
          I wanna try even though I could fail
          I'll keep on making those new mistakes
          I'll keep on making them every day
          Those new mistakes
          Try everything
          Try everything
          Try everything
          Try everything`,
                genres: "댄스;팝",
                image: "https://image.bugsm.co.kr/album/images/original/5475/547533.jpg?version=undefined",
                category: "도전",
                detail: "can;꿈;용기;응원",
                link: "https://music.bugs.co.kr/track/4674464?wl_ref=list_tr_08_search",
                type: "music"
            },
            // 동기부여
            {
                id: 16,
                title: "CHAMPION",
                director: "Bishop Briggs",
                year: "2019-11-8",
                summary:
                    `Alone in my car
          I'm in a parking lot
          Darkest spot in my mind
          My tongue is dry
          Why do I crumble quickly
          Stumble swiftly
          Cursing myself
          I burned the furniture
          A million times in my head
          I'm feeling low
          Got nowhere to go
          But back up again
          You gotta get bruised
          Before you get mad
          You gotta fall down
          Before you fight back
          Was feeling so weak
          But baby I'm strong
          Little did I know
          I'm a champion
          I'm a champion
          I'm a champion
          I'm a champion
          Nobody said
          It'd be a easy ride
          Obstacles in my way
          Scars never change
          Why do I crumble quickly
          Stumble swiftly
          Cursing the world
          I burned the songs I wrote
          A billion times in my head
          I'm feeling low
          Got nowhere to go
          But back up again
          You gotta get bruised
          Before you get mad
          You gotta fall down
          Before you fight back
          Was feeling so weak
          But baby I'm strong
          Little did I know
          I'm a champion
          I'm a champion
          I'm a champion
          I'm a champion
          You gotta get bruised
          Before you get mad
          You gotta fall down
          Before you fight back
          Was feeling so weak
          But baby I'm strong
          Little did I know
          I'm a champion
          I'm a champion
          I'm a champion
          I'm a champion
          I'm a champion
          I'm a champion
          I'm a champion
          I'm a champion
          I'm a champion`,
                genres: "락",
                image: "https://image.bugsm.co.kr/album/images/original/9513/951330.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;위로;응원;용기",
                link: "https://music.bugs.co.kr/track/5793617?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 17,
                title: "Legend",
                director: "The Score",
                year: "2017-4-14",
                summary:
                    `Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah
          Here we go here we go
          It's about time that we set it off
          Here we go here we go
          Red lights I could never stop
          A dreamer with the fever to be great was
          All I ever want was all I ever wanted
          A finder with the fever for the fame was
          All I ever want was all I ever wanted
          Got me singin' like
          Bang bang
          Bang bang
          Bang bang
          This fire's the weapon
          Bang bang
          Bang bang
          Bang bang
          Won't stop till we're legend
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah
          Won't stop till we're legend
          Here we go here we go
          It's my turn to make history
          Here we go here we go
          When I'm gone they'll remember me yeah
          A dreamer with the fever to be great was
          All I ever want was all I ever wanted
          A finder with the fever for the fame was
          All I ever want was all I ever wanted
          Got me singin' like
          Bang bang
          Bang bang
          Bang bang
          This fire's the weapon
          Bang bang
          Bang bang
          Bang bang
          Won't stop till we're legend
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah
          Won't stop till we're legend
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah
          Won't stop till we're legend
          Blood sweat I'll break my bones
          Till all my scars bleed golden
          My name's forever known
          Woah oh woah oh
          Blood sweat I'll break my bones
          Till all my scars bleed golden
          My name's forever known
          Woah oh woah oh
          Blood sweat
          I'll break my bones (Bang bang)
          Till all my scars bleed golden
          My name's forever known
              (Bang bang won't stop till we're legend)
          Woah oh woah oh
          Bang bang won't stop till we're legend
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah
          Won't stop till we're legend
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah nah nah nah
          Nah nah nah nah`,
                genres: "락",
                image: "https://image.bugsm.co.kr/album/images/original/6352/635284.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;응원;용기",
                link: "https://music.bugs.co.kr/track/4899410?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 18,
                title: "말하는대로",
                director: "처진 달팽이(유재석 & 이적)",
                year: "2011-7-2",
                summary:
                    `나 스무살 적에 하루를 견디고
          불안한 잠자리에 누울 때면
          내일 뭐하지 내일 뭐하지 걱정을 했지
      
          두 눈을 감아도 통 잠은 안 오고
          가슴은 아프도록 답답할 때
          난 왜 안 되지 왜 난 안 되지 되뇌었지
      
          말하는 대로 말하는 대로
          될 수 있다곤 믿지 않았지
          믿을 수 없었지
          마음먹은 대로 생각한 대로
          할 수 있단 건 거짓말 같았지
          고개를 저었지
      
          그러던 어느 날 내 맘에 찾아온
          작지만 놀라운 깨달음이
          내일 뭘 할지 내일 뭘 할지 꿈꾸게 했지
      
          사실은 한 번도 미친 듯 그렇게
          달려든 적이 없었다는 것을
          생각해 봤지 일으켜 세웠지 내 자신을
      
          말하는 대로 말하는 대로
          될 수 있단 걸 눈으로 본 순간
          믿어보기로 했지
          마음먹은 대로 생각한 대로
          할 수 있단 걸 알게 된 순간
          고갤 끄덕였지
      
          마음먹은 대로 생각한 대로
          말하는 대로 될 수 있단 걸
          알지 못했지 그 땐 몰랐지
          이젠 올 수도 없고 갈 수도 없는
          힘들었던 나의 시절 나의 20대
          멈추지 말고 쓰러지지 말고
          앞만 보고 달려 너의 길을 가
          주변에서 하는 수많은 이야기
          그러나 정말 들어야 하는 건
          내 마음 속 작은 이야기
          지금 바로 내 마음속에서 말하는 대로
      
          말하는 대로 말하는 대로
          될 수 있다고 될 수 있다고
          그대 믿는다면
      
          마음먹은 대로(내가 마음먹은 대로)
          생각한 대로(그대 생각한 대로)
          도전은 무한히 인생은 영원히
          말하는 대로 말하는 대로
          말하는 대로 말하는 대로`,
                genres: "댄스;팝",
                image: "https://image.bugsm.co.kr/album/images/original/2920/292068.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;위로;동감",
                link: "https://music.bugs.co.kr/track/2389002?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 19,
                title: "다시 쓰는 이력서",
                director: "다이나믹 듀오",
                year: "2007-5-31",
                summary:
                    `Double d we back again
          with amoebaculture
          이건 새로 쓰는 이력서
          우린 다시 불을 지폈어
          Ok 최자 let's go tell them
          유난히도 추웠었던
          2003년 겨울이 돼서
          우린 녹음을 시작했어 겨우
          빈털터리 아니 빚쟁이
          텅 벼버린 키 체인
          집도 없는 떠돌이로
          여러 밤을 지샜지
          억울해서 독을 품고 작업했어
          난 굶주린 늑대 같이
          매일 새벽까지
          소리를 물어 뜯고
          갈갈이 찢어 발개서
          내 뜻대로 재조합하며
          재기의 칼을 갈았지
          somebody said 니네 둘론 안돼
          but somebody said 기대할게
          우리는 준비했어 완전한 반전
          꼭 받고 싶었어 만점
          2004 년 봄 첫 번째 앨범 발표
          It was bomb 다시 내 자릴 찾고
          거칠고 더러운 이 바닥에서
          뿌리내리고
          다시 커갔어 우린 잡초
          Double d we back on the mic
          We're gonna have a party
          Rock all night
          Wanna go Higher
          같이 가요 Yeh
          We're gonna be Sittin' on top
          Double d we back on the mic
          We're gonna have a party
          Rock all night
          Wanna go Higher
          같이 가요 Yeh
          We're gonna be Sittin' on top
          2005년 늦은 가을
          폭탄 두 개를 떨어뜨리며
          1년 반 공백을 깨 bang
          그 달의 음반 판매 1위
          서울 시티 전체를 흔들어
          소포모어 징크스를 깨 bang
          그토록 소원했던
          전국투어 관객 만 명을 돌파 후
          겸손치 못하게도
          전혀 만족을 못하고
          새로운 돌파구
          더 완벽한 몽타주를 원해
          이 길에 우리 미래를
          통째로 던지네
          계약이 끝날쯤에
          빗발치는 전화들
          달콤한 조건들에
          묵묵히 침묵으로 일관해
          많은 사람들은 우리들의 행보에
          그저 물음표 물음표
          물음표 물음표 물음표
          We finally
          독립의 길을 결정했지
          그건 위대한 솔로몬의
          선택보다 더 신중했지
          마치 우리는
          정든 둥지를 박차며
          더 높은 비상을 위해
          어미 손을 뿌리친 새
          Double d we back on the mic
          We're gonna have a party
          Rock all night
          Wanna go Higher
          같이 가요 Yeh
          We're gonna be Sittin' on top
          Double d we back on the mic
          We're gonna have a party
          Rock all night
          Wanna go Higher
          같이 가요 Yeh
          We're gonna be Sittin' on top
      
          우리네 보금자리
          녹음실까지 딸린 사무실
          크기는 열네 평
          조금은 협소 하지만
          큰 뜻을 같이할 동지들은
          벌써 일곱 명
          시작은 비록 미약하지만
          끝까지가 쉽진 않을 걸 알지만
          난 기필코 이뤄낼래
          우리의 광대한 마지막
          쉬운길 지름길 따위
          난 절대 안 택해
          똑바로 한걸음 한걸음씩
          제대로 갈래
          사람들에 질투가 거칠게
          압박수비를 해도
          내 무릎과 땅은 절대로
          입맞추지 않고
          승리를 위한 문전쇄도
          마치 쉐바첸코
          우린 two desperados
          사막에 떨어뜨려놔도
          지켜봐라 거센 바람도
          가를 테니까
          그 어떤 커다란 언덕도
          넘을 테니까
          가벼워진 주머니 위로하며
          꼭대기로 간다
          비로소 완벽한 둘
          최자 개코니까
      
          Double d we back on the mic
          We're gonna have a party
          Rock all night
          Wanna go Higher
          같이 가요 Yeh
          We're gonna be Sittin' on top
          Double d we back on the mic
          We're gonna have a party
          Rock all night
          Wanna go Higher
          같이 가요 Yeh
          We're gonna be Sittin' on top`,
                genres: "인디;랩;힙합",
                image: "https://image.bugsm.co.kr/album/images/original/80271/8027124.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;위로;동감;경험",
                link: "https://music.bugs.co.kr/track/80333131?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 20,
                title: "Fly (Feat. Amin. J of Soulciety)",
                director: "에픽하이",
                year: "2005-10-4",
                summary:
                    `힘들죠? (힘들죠)
          오늘도 잔인한 세상은 너를 비웃고
          거울 앞에서도 기죽고 또 홀로 술잔을 비우고
          don't know where to go
          단 한 번의 실수로 모든 것을 잃고
          고개를 숙일땐 손을 모아
          날개를 피고 you can fly
      
          눈을 뜨며 맞는 아침
          똑같은 방향뿐인 삶의 나침반
          만만한 세상에 쉽게 무릎 꿇고
          쉴 새 없이 신세 타 타타 타령만
          아아아아 아련한 옛 꿈을 쫓던
          가련한 두 팔로 화려한 날개를 피고
      
          You can fly higher
          하얀 저 하늘 위에 새들보다
          You Can Fly Higher
          단 하나뿐인 그대와 나
      
          Fly(My Baby) 세상이 뭐라고 말해도
          Fly, fly, get em up high
          누가 뭐래도 가라고 go go
          Fly(My Baby) 사랑이 널 두고 떠나도
          Fly, fly get em up high
      
          Fly 그대가 가진 것은 없어도
          You Can Fly 사랑이 차갑게 널 버려도
          You Can Fly 아픈 가슴에 숨이 멎어도
          You Can Fly You got to fly sky high!
      
          눈을 뜨고 바라봐도 빛은 없고
          꿈을 꾸며 살아가도 길은 멀고
          내 뜻대로 가도 숨을 몰아쉬었고
          진실을 말해도 돌아섰죠
          아직도 찾는 것을 못 찾았고
          아무도 너를 사랑하지 못한다고
          낙오감에 빠져도 Never die
          날개를 피고 Let's go everybody Fly!
          come on and yo!
      
          You Can Fly(누가 뭐래도) Higher(나는 절대로)
          저 하늘위에 새들보다(내 꿈을 포기 못해)
          You Can Fly(누가 뭐래도) Higher(나는 절대로)
          단 하나뿐인 그대와 나(내 꿈을 포기 못해)
      
          Fly(My Baby) 세상이 뭐라고 말해도
          Fly, fly, get em up high
          누가 뭐래도 가라고 go go
          Fly(My Baby) 사랑이 널 두고 떠나도
          Fly, fly get em up high
      
          괜한 한숨에 지워지는 단 한 번의 꿈
          몇 만 번의 시도 위에 갈라서는 문
          눈을 뜨며 살아감에 보여 희망의 연기가
          모두 털어 날려버려 비관의 먼지 다
          역시 나도 때론 괜한 겁이나
          천천히 가 왜 꿈을 쉽게 버리나
          때론 낮게 나는 새도 멀리 봐
          어두운 밤일수록 밝은 별은 더 빛나
      
          Fly 세상이 뭐라고 말해도
          Fly 사랑이 널 두고 떠나도 EPIK
          Fly 세상이 뭐라고 말해도
      
          Fly, fly get em up high
          Fly 사랑이 널 두고 떠나도
          Fly, fly get em up high EPIK`,
                genres: "랩;힙합",
                image: "https://image.bugsm.co.kr/album/images/original/80113/8011346.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;위로;동감",
                link: "https://music.bugs.co.kr/track/80122082?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 21,
                title: "밑바닥에서 여기까지",
                director: "염따",
                year: "2019-1-9",
                summary:
                    `나는 밑바닥에서 여기까지
          나는 밑바닥에서 여기까지
          다들 안된다고 해도
          밤새 녹음을 떴지
          나는 밑바닥에서 여기까지
          나는 밑바닥에서 여기까지
          난 이제 좋은 흐름을 타지
          다들 내게 말해 좋아 보여
          그땐 그랬지 난 너무 무서웠지
          넘어지고 쓰러지고 실패만 하던 내 매일매일
          두 눈을 감아도 지워지지가 않던
          깜깜한 슬픔 안에서 난 허우적 거렸어 늘
          나는 이젠 두렵지가 않아
          내 꿈은 부자가 아냐
          언젠간 이루어진다는걸 아니까
          난 출렁대는 거친 파도 위에 다시 올라서
          나를 막는다면 가만두지 않아
          그만둘 수는 없지 너무 좋아 이 짓이
          너무 잘해 난 이 짓을
          나는 밑바닥에서 여기까지
          나는 밑바닥에서 여기까지
          다들 안된다고 해도
          밤새 녹음을 떳지
          나는 밑바닥에서 여기까지
          나는 밑바닥에서 여기까지
          난 이제 좋은 흐름을 타지
          다들 내게 말해 좋아 보여
          너무 오랫동안 이 날을 기다려왔어
          이젠 Cubase money 손가락엔 빨간 반지
          소리를 질러난 Yeah yeah yeah
          국민은행 챙 챙 챙
          돈이 없어 여자친구 생일엔 일부러 싸우고
          그랬는데
          난 이제 인스타 여신을 만나
          나보다 팔로워가 많아 그녀는 말해
          우리는 왜 맨날 밤에만 밤에만 만나
          Ay 사랑은 싫어 출세하고 싶어
          나는 더 더 올라가야 돼
          내 여친은 Cash
          초록색이 빳빳하지 목에다가 깁스를 하지
          마이너 메이저 어쩌라고 난 쌈마이로
          난 이제 전화기가 두 개
          첫 번째는 트로피(Win win)
          두 번째는 여친(Cach)
          나는 밑바닥에서 여기까지
          나는 밑바닥에서 여기까지
          다들 안된다고 해도
          밤새 녹음을 떳지
          나는 밑바닥에서 여기까지
          나는 밑바닥에서 여기까지
          난 이제 좋은 흐름을 타지
          다들 내게 말해 좋아 보여`,
                genres: "랩;힙합",
                image: "https://image.bugsm.co.kr/album/images/original/202210/20221079.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;위로;동감",
                link: "https://music.bugs.co.kr/track/31404278?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 22,
                title: "I Go",
                director: "럼블 피쉬",
                year: "2006-6-13",
                summary:
                    `잘 살아보자고 남들 놀때 일해도
          주위 에선 그저 요령없는 거라고
          두눈이 쾡하도록 밤새고 기를 써도 아이쿠~I go~
      
              앞뒤 안가리고 사랑찾아 떠나고
          친구들은 모두 나를 뜯어 말리고
          허리가 휘어지게 정주고 다바쳐도 I go~
      
              아직 내삶에 가장 눈부시던 그날은 오지 않은 거라고
          거울에 비친 내게 말을해 그래 믿을께
      
          오~오~내 인생은 Beautiful 가끔 쓰러져도 Wonderful
          구겨진 가슴을 펴고 걷는거야 Smiley Smiley
          라랄라 웃는거야 언젠가 하나될 그날위해
          움츠린 어깨를 펴고 가는거야 Smiley Smiley With U
      
          얼굴 잠깐이야 맘 이쁜게 최고지
          어른들은 항상 그렇게들 말하지
          그 말만 철썩 믿고 마음만 가꿨더니 I go~
      
              아직 내 삶의 가장 아름다운 노래는 부른적이 없다고
          거울에 비친 내게 말을해 그래 믿을께
      
          오~오~내 인생은 Beautiful 가끔 쓰러져도 Wonderful
          구겨진 가슴을 펴고 걷는거야 Smiley Smiley With U
      
          때로는 세상이 날 속이고 나 혼자 남겨져도
          언제나 내 곁엔 그 날의 니가 있어 언제나
      
          슬픈 날이여 안녕 나를 떠난 그대도 안녕
          구겨진 가슴을 펴고 걷는거야 Smiley Smiley
          라랄라 웃는거야 언젠가 하나될 그 날 위해
          움츠린 어깨를 펴고 가는거야
          언제나 행복한 일들만 가득히 With U`,
                genres: "락",
                image: "https://image.bugsm.co.kr/album/images/original/80191/8019117.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;위로;동감",
                link: "https://music.bugs.co.kr/track/80229563?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 23,
                title: "내가 제일 잘 나가",
                director: "2NE1",
                year: "2011-6-24",
                summary:
                    `내가 제일 잘 나가(X4)
          Bam Ratatata Tatatatata(X4)
          Oh my god
      
          누가 봐도 내가 좀 죽여주잖아
          둘째가라면 이 몸이 서럽잖아
          넌 뒤를 따라오지만 난 앞만 보고 질주해
          네가 앉은 테이블 위를 뛰어다녀 I don’t care
      
          건드리면 감당 못해 I’m hot hot hot hot fire
          뒤집어지기 전에 제발 누가 날 좀 말려
      
          옷장을 열어 가장 상큼한 옷을 걸치고
          거울에 비친 내 얼굴을 꼼꼼히 살피고
          지금은 여덟 시 약속시간은 여덟 시 반
          도도한 걸음으로 나선 이 밤
      
          내가 제일 잘 나가(X4)
      
          내가 봐도 내가 좀 끝내주잖아
          네가 나라도 이 몸이 부럽잖아
      
          남자들은 날 돌아보고 여자들은 따라해
          내가 앉은 이 자리를 매일 넘봐 피곤해
      
          선수인척 폼만 잡는 어리버리한 Playa
          넌 바람 빠진 타이어처럼 보기 좋게 차여
      
          어떤 비교도 난 거부해 이건 겸손한 얘기
          가치를 논하자면 나는 Billion dollar baby
          뭘 쫌 아는 사람들은 다 알아서 알아봐
          아무나 잡고 물어봐 누가 제일 잘 나가 ?
      
              내가 제일 잘 나가(X4)
      
          누가 ? 네가 나보다 더 잘 나가 ?
              No no no no!
          Na na na na!(X4)
          Bam Ratatata Tatatatata(X4)
          Oh my god`,
                genres: "댄스",
                image: "https://image.bugsm.co.kr/album/images/original/2912/291231.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;자신감",
                link: "https://music.bugs.co.kr/track/2376722?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 24,
                title: "Higher(Feat. 이루마)",
                director: "에일리",
                year: "2013-9-16",
                summary:
                    `누군가 나에게 절대로 하지 말라고
          그래도 난 기어코 하고 말 거야
          그 누가 뭐라 해도 아무것도 들리지 않아
          모든 걸 내 뜻에 날 맡길 거야
      
          Going higher 날 막을 수는 없어
          내가 가는 이 길에 더 이상 두려움은 없어
          Going higher 내가 바라던 순간
          눈부시게 빛나는 또 다른 나를 보게 될 거야
      
          내가 넘을 수 없는 큰 벽이 있을지라도
          뛰어 넘을 수 있어 할 수 있어
          그 어떤 시련이 와도 절대 난 흔들리지 않아
          이겨낼 수 있어 난 문제 없어
      
          내 가슴 속에 숨쉬는 타오르는 열정이
          날 데려가 저 멀리 더 높은 곳으로
      
          Going higher 날 막을 수는 없어
          내가 가는 이 길에 더 이상 두려움은 없어
          Going higher 내가 바라던 순간
          눈부시게 빛나는 또 다른 나를 보게 될 거야
      
              (Find a way to my heart)
      
          Going higher 날 막을 수는 없어
          내가 가는 이 길에 더 이상 두려움은 없어
          Going higher 내가 바라던 순간
          눈부시게 빛나는 또 다른 나를 보게 될 거야
      
          Going higher 날 막을 수는 없어
          내가 가는 이 길에 더 이상 두려움은 없어
          Going higher 내가 바라던 순간
          눈부시게 빛나는 또 다른 나를 보게 될 거야`,
                genres: "락;메탈",
                image: "https://image.bugsm.co.kr/album/images/original/3885/388528.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;자신감;용기",
                link: "https://music.bugs.co.kr/track/3205065?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 25,
                title: "끝까지 끝은 아니야(뮤지컬 '어쩌면 해피엔딩')",
                director: "강혜인",
                year: "2013-8-16",
                summary:
                    `끝까지 끝은 아니야
          너무 걱정 마 너무 걱정 마
          지금껏 늘 잘해 왔잖아
          괜찮을 거야 괜찮을 거야
          끝이라 생각한 순간
          항상 찾아왔던 시작
          그러니 포긴 말아
          끝까지 끝은 아니야
          시간은 멈추지 않아
          계속 흘러가 계속 흘러가
          모든 건 다 끝을 향해가
          점점 가까이 점점 가까이
          차창 너머 지는 노을
          작별은 나쁜 게 아냐
          슬퍼할 이윤 없어
          원래 이게 그런 거야
          정말 마지막 순간 그 순간이 찾아오면
          조용히 눈 감겠지
          그때까지 내가 할 수 있는 건 오직
          일분일초 매 순간 나답게 살아가는 것
          끝까지 끝은 아니야
          너무 걱정 마 너무 걱정 마
          여태껏 온 것도 대견해
          너무 슬퍼 마 너무 슬퍼 마
          괜한 걱정 따윈 말아
          어차피 똑같은 결말
          그저 지금에 집중해
          끝까지 끝은 아니야
          끝까지 끝은 아니야
          끝까지 끝은 아니야
          끝까지 끝은 아니야`,
                genres: "뮤지컬",
                image: "https://image.bugsm.co.kr/album/images/original/203440/20344021.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;긍정;용기",
                link: "https://music.bugs.co.kr/track/31995728?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 26,
                title: "For Good(뮤지컬 '위키드')",
                director: "Kristin Chenoweth, Idina Menzel",
                year: "2019-2-8",
                summary:
                    `I'm limited
          Just look at me
          I'm limited
          And just look at you
          You can do all I couldn't do
          Glinda
      
          So now it's up to you
          For both of us
          Now it's up to you
          I've heard it said
          That people come into our lives
          For a reason
      
          Bringing something we must learn
          And we are led to those
          Who help us most to grow if we let them
          And we help them in return
          Well, I don't know if I believe that's true
          But I know I'm who I am today
          Because I knew you
      
          Like a comet pulled from orbit
          As it passes the sun
          Like a stream that meets a boulder
          Halfway through the wood
          Who can say if I've been changed for the better
          But because I knew you
          I have been changed for good
      
          It well may be
          That we will never meet again
          In this lifetime
          So, let me say before we part
      
          So much of me
          Is made of what I learned from you
      
          You'll be with me
          Like a handprint on my heart
          And now whatever way our stories end
          I know you have rewritten mine
      
          By being my friend
          Like a ship blown from its mooring
          By a wind off the sea
          Like a seed dropped by a sky bird
          In a distant wood
          Who can say if I've been changed for the better
          But because I knew you
          Because I knew you
          I have been changed for good
              
          And just to clear the air
          I ask forgiveness
          For the things I've done, you blame me for
          But then I guess
          We know there's blame to share
          And none of it seems to matter anymore
          Like a comet pulled from orbit(like a ship blown from its mooring)
      
          As it passes the sun(by a wind off the sea)
          Like a stream that meets a boulder(like a seed dropped by a bird)
          Halfway through the wood(in the wood)
          Who can say if I've been changed for the better
          I do believe I have been changed for the better
      
          And because I knew you
          Because I knew you
          Because I knew you
          I have been changed
          For good`,
                genres: "뮤지컬",
                image: "https://image.bugsm.co.kr/album/images/original/8489/848972.jpg?version=undefined",
                category: "동기부여",
                detail: "자존감;긍정;용기",
                link: "https://music.bugs.co.kr/track/5561599?wl_ref=list_tr_08_ab",
                type: "music"
            },
            {
                id: 27,
                title: "오르막길(feat. 정인)",
                director: "윤종신",
                year: "2013-1-3",
                summary:
                    `이제부터 웃음기 사라질거야
          가파른 이 길을 좀 봐
          그래 오르기 전에 미소를 기억해두자
          오랫동안 못 볼 지 몰라
          완만했던 우리가 지나온 길엔
          달콤한 사랑의 향기
          이제 끈적이는 땀 거칠게 내쉬는 숨이
          우리 유일한 대화일지 몰라
          한걸음 이제 한걸음일 뿐
          아득한 저 끝은 보지마
          평온했던 길처럼 계속 나를 바라봐줘
          그러면 견디겠어
          사랑해 이 길 함께 가는 그대
          굳이 고된 나를 택한 그대여
          가끔 바람이 불 때만 저 먼 풍경을 바라봐
          올라온 만큼 아름다운 우리 길
          기억해 혹시 우리 손 놓쳐도
          절대 당황하고 헤매지 마요
          더 이상 오를 곳 없는 그 곳은 넓지 않아서
          우린 결국엔 만나 오른다면
      
          한걸음 이제 한걸음일 뿐
          아득한 저 끝은 보지마
          평온했던 길처럼 계속 나를 바라봐줘
          그러면 난 견디겠어
          사랑해 이 길 함께 가는 그대여
          굳이 고된 나를 택한 그대여
          가끔 바람이 불 때만 저 먼 풍경을 바라봐
          올라온 만큼 아름다운 우리 길
          기억해 혹시 우리 손 놓쳐도
          절대 당황하고 헤매지 마요
          더 이상 오를 곳 없는 그 곳은 넓지 않아서
          우린 결국엔 만나 크게 소리 쳐
          사랑해요 저 끝까지`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/3534/353463.jpg?version=undefined",
                category: "동기부여",
                detail: "위로;긍정;용기;공감",
                link: "https://music.bugs.co.kr/track/2852486?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 28,
                title: "시작(드라마 “이태원 클라쓰”) OST",
                director: "가호",
                year: "2020-2-1",
                summary:
                    `새로운 시작은 늘 설레게 하지
          모든 걸 이겨낼 것처럼
          시간을 뒤쫓는 시계바늘처럼
          앞질러 가고 싶어 하지
          그어 놓은 선을 넘어
          저마다 삶을 향해
          때론 원망도 하겠지
          그 선을 먼저 넘지 말라고
          I can fly the sky
          Never gonna stay
          내가 지쳐 쓰러질 때까진
          어떤 이유도
          어떤 변명도
          지금 내겐 용기가 필요해
          빛나지 않아도 내 꿈을 응원해
          그 마지막을 가질 테니
          부러진 것처럼 한 발로 뛰어도
          난 나의 길을 갈 테니까
          지금 나를 위한 약속
          멈추지 않겠다고
          또 하나를 앞지르면
          곧 너의 뒤를 따라잡겠지
          원하는 대로
          다 가질 거야
          그게 바로 내 꿈일 테니까
          변한 건 없어
          버티고 버텨
          내 꿈은 더 단단해질 테니
          다시 시작해
          Ah ah ah ah ah
          Ah ah ah ah ah ah
          Ah ah ah ah ah
          Ah ah ah ah
          다시는 나를 잃고 싶지 않아
          내 전부를 걸었으니까
          원하는 대로
          다 가질 거야
          그게 바로 내 꿈일 테니까
          변한 건 없어
          버티고 버텨
          내 꿈은 더 단단해질 테니
          다시 시작해
          Ah ah ah ah ah
          Ah ah ah ah ah ah
          Ah ah ah ah ah
          Ah ah ah ah`,
                genres: "댄스;팝",
                image: "https://image.bugsm.co.kr/album/images/original/203033/20303385.jpg?version=undefined",
                category: "동기부여",
                detail: "설렘;긍정;용기",
                link: "https://music.bugs.co.kr/track/31820337?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 29,
                title: "소우주",
                director: "방탄소년단",
                year: "2019-4-12",
                summary:
                    `반짝이는 별빛들
          깜빡이는 불 켜진 건물
          우린 빛나고 있네
          각자의 방 각자의 별에서
          어떤 빛은 야망
          어떤 빛은 방황
          사람들의 불빛들
          모두 소중한 하나
          어두운 밤(외로워 마)
          별처럼 다(우린 빛나)
          사라지지 마
          큰 존재니까
          Let us shine
          어쩜 이 밤의 표정이
          이토록 또 아름다운 건
          저 별들도 불빛도 아닌
          우리 때문일 거야
          You got me
          난 너를 보며 꿈을 꿔
          I got you
          칠흑 같던 밤들 속
          서로가 본 서로의 빛
          같은 말을 하고 있었던 거야 우린
          가장 깊은 밤에 더 빛나는 별빛
          가장 깊은 밤에 더 빛나는 별빛
          밤이 깊을수록 더 빛나는 별빛
          한 사람에 하나의 역사
          한 사람에 하나의 별
          70억 개의 빛으로 빛나는
          70억 가지의 World
          70억 가지의 삶 도시의 야경은
          어쩌면 또 다른 도시의 밤
          각자만의 꿈 Let us shine
          넌 누구보다 밝게 빛나
          One
          어쩜 이 밤의 표정이
          이토록 또 아름다운 건
          저 어둠도 달빛도 아닌
          우리 때문일 거야
          You got me
          난 너를 보며 꿈을 꿔
          I got you
          칠흑 같던 밤들 속
          서로가 본 서로의 빛
          같은 말을 하고 있었던 거야 우린
          가장 깊은 밤에 더 빛나는 별빛
          가장 깊은 밤에 더 빛나는 별빛
          밤이 깊을수록 더 빛나는 별빛
          도시의 불 이 도시의 별
          어릴 적 올려본 밤하늘을 난 떠올려
          사람이란 불 사람이란 별로
          가득한 바로 이 곳에서
          We shinin'
          You got me
          난 너를 보며 숨을 쉬어
          I got you
          칠흑 같던 밤들 속에
          Shine dream smile
          Oh let us light up the night
          우린 우리대로 빛나
          Shine dream smile
          Oh let us light up the night
          우리 그 자체로 빛나
          Tonight
          Na na na na na na
          Na na na na na na na`,
                genres: "랩;힙합;알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/202460/20246036.jpg?version=undefined",
                category: "동기부여",
                detail: "응원;긍정;용기",
                link: "https://music.bugs.co.kr/track/31548669?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 30,
                title: "돌덩이(드라마 '이태원 클라쓰' OST)",
                director: "하현우(국가스텐)",
                year: "2020-2-7",
                summary:
                    `Hit me harder Make me strong
          그저 정해진 대로 따르라고
          그게 현명하게 사는 거라고
          쥐 죽은 듯이 살라는 말
          같잖은 말 누굴 위한 삶인가
          뜨겁게 지져봐
          절대 꼼짝 않고 나는 버텨낼 테니까
          거세게 때려봐
          네 손만 다칠 테니까
          나를 봐
          끄떡없어
          쓰러지고 떨어져도
          다시 일어나 오를 뿐야
          난 말야
          똑똑히 봐
          깎일수록 깨질수록
          더욱 세지고 강해지는 돌덩이
          감당할 수 없게 벅찬 이 세상
          유독 내게만 더 모진 이 세상
          모두가 나를 돌아섰고
          비웃었고 아픔이 곧 나였지
          시들고 저무는
          그런 세상 이치에 날 가두려 하지 마
          틀려도 괜찮아
          이 삶은 내가 사니까
          나를 봐
          끄떡없어
          쓰러지고 떨어져도
          다시 일어나 오를 뿐야
          난 말야
          똑똑히 봐
          깎일수록 깨질수록
          더욱 세지고 강해지는 돌덩이
          누가 뭐라 해도 나의 길
          오직 하나뿐인 나의 길
          내 전부를 내걸고서 Hey
          걸어가
          계속해서
          부딪히고 넘어져도
          다시 일어나 걷는 거야
          언젠가
          이 길 끝에 서서
          나도 한 번 크게 한 번
          목이 터져라 울 수 있을 때까지`,
                genres: "댄스;팝",
                image: "https://image.bugsm.co.kr/album/images/original/203046/20304638.jpg?version=undefined",
                category: "동기부여",
                detail: "응원;용기;강인함",
                link: "https://music.bugs.co.kr/track/31825866?wl_ref=list_tr_08_search",
                type: "music"
            },
            //멘토
            {
                id: 31,
                title: "괜찮아",
                director: "결(KYUL)",
                year: "2021-5-20",
                summary:
                    `바람은 다시 불고
          지쳐서 보는 하늘은 지겨워
          천천히 가리키던
          시침이 알리는 하루는 길어
          요즘 난여전히 예전 그때에게서
          벗어나지 못해
          난 생각을 넓히고 싶어
          다시 일어나 보이고 싶어
          우린 좀 더 괜찮아질 거야
          다시 견뎌내야 할 테지만
          우린 좋은 사람이 될 거야
          그때 웃고서 추억할 거야
          상상이 마주치던
          손가락질은 두렵고 싫어
          한때는 아름다웠던모습이
          과거가 된 게 무서워
          이제 난어떤 누구와 만나서
          맘을 털어야 할지
          참아내고 돌아와 말하고 싶어
          다시 일어나 보이고 싶어
          우린 좀 더 괜찮아질 거야
          다시 견뎌내야 할 테지만
          우린 좋은 사람이 될 거야
          그때 웃고서 추억할 거야`,
                genres: "인디;알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/203975/20397550.jpg?version=undefined",
                category: "멘토",
                detail: "응원;용기;위로",
                link: "https://music.bugs.co.kr/track/32236720?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 32,
                title: "그려려니",
                director: "선우정아",
                year: "2016-2-29",
                summary:
                    `만나는 사람은 줄어들고
          그리운 사람은 늘어간다
          끊어진 연에 미련은 없더라도
          그리운 마음은 막지 못해
      
          잘 지내니
          문득 떠오른 너에게
          안부를 묻는다
          잘 지내겠지
          대답을 들을 수 없으니
          쓸쓸히 음 음
          그러려니
      
          잘 지내니
          문득 떠오른 너에게
          안부를 묻는다
          잘 지내겠지
          대답을 들을 수 없으니
          쓸쓸히 음 음
          그러려니
          그러려니
      
          만나는 사람은 줄어들고
          그리운 사람은 늘어간다
          끊어진 연에 미련은 없더라도
          그리운 마음은 막지 못해
      
          만나는 사람은 줄어들고
          그리운 사람은 늘어간다
          끊어진 연에 미련은 없더라도
          그리운 마음은
          그리운 마음은
          그러려니`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/200234/20023458.jpg?version=undefined",
                category: "멘토",
                detail: "용기;위로;공감",
                link: "https://music.bugs.co.kr/track/30169054?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 33,
                title: "토닥토닥",
                director: "백아(Baek A)",
                year: "2019-8-22",
                summary:
                    `금이 가버린 내 마음속
          이젠 굳이 말할 필요가 있나
          익숙해지지 못한 내 탓인걸
          다들 참고 산다더라
      
          토닥 토닥 토닥
          어깰 두드려줘
          그럴 수도 있지
          상상하지 못할
          무거운 짐을 갖고 있을 너에게
      
          토닥 토닥 토닥
          어깰 두드려줘
          털어내지 않아도
          가벼워질 수 있도록
          토닥 토닥 토닥
      
          토닥 토닥 토닥
          어깰 두드려줘
          그럴 수도 있지
          상상하지 못할
          무거운 짐을 갖고 있을 너에게
      
          토닥 토닥 토닥
          어깰 두드려줘
          털어내지 않아도
          가벼워질 수 있도록
          토닥 토닥 토닥
          토닥 토닥 토닥`,
                genres: "인디;포크;어쿠스틱",
                image: "https://image.bugsm.co.kr/album/images/original/9215/921532.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감",
                link: "https://music.bugs.co.kr/track/5723242?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 34,
                title: "잘 먹고 잘 사는 법",
                director: "더블V(송은이, 김숙), 셀럽파이브, 옥상달빛, 요조, 선우정아, CHEEZE, 박문치",
                year: "2021-10-28",
                summary:
                    `잘 먹고 잘 사는게 뭔지는 모르지만
          오늘은 사고 싶은 걸 샀어
          어떻게 생각해 ?
              나를 위한 건 점점 줄어들고
          도망가고 싶은 날은 많아져
          수고한 날 위해 할수있는 위로는 없는걸까 ?
              잘먹고 잘 사는 법
          그게뭔지 아직은 몰라도
          오지는 하루를 살 수 있다면 된거야
          난 잘해야만 했고 또 잘 되어야만 했어
          그렇게 살면서 여기까지 왔는데
          여전히 모르겠어 시간은 흘러가는데
          에구구구 나 계속 잘할 수 있을까
          인생의 다비 있긴한지
          나름 잘 살고 있다고 생각 했는데
          전화할 사람은 줄어들고 조금씩 외로워져
          잘 먹고 잘 사는 법
          그게뭔지 아직은 몰라도
          오지는 하루를 살 수 있다면 된거야
          고민했던 시간이 있어 잘 산 게 아닐까 ?
              혼자선 의미 없더라
          서로를 지켜주며 같은 시간을 걷는 것
          잘 먹고 잘 사는 법
          그게뭔지 아직은 몰라도
          오지는 하루를 살 수 있다면 된거야
          서로를 살피며
          같은 시간을 걸어가는 것
          오지게 웃으며
          그렇게 같이 잘 살자
          오늘도 같이 가 보자`,
                genres: "댄스;팝",
                image: "https://image.bugsm.co.kr/album/images/original/204282/20428247.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감;경험",
                link: "https://music.bugs.co.kr/track/32364597?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 35,
                title: "그때 그 아이들은",
                director: "악동뮤지션",
                year: "2017-1-3",
                summary:
                    `지친 꿈을 이끌고 계속 걷다 보니
          첫발을 함께 떼어 달려왔던 친구들이 곁에 없다는 걸
          어느 순간 깨닫게 되지
      
          함께 이뤄갈까 성공해 다시 보자
          지금쯤 현실의 처음을 겪고 있다면
          그때완 다른 웃음 짓고 있으려나
      
          그땐 함께 영원할 것만 같았지
          어렸던 세상을 걷어내면
          비탈지던 저 좁은 길가로 흩어져
          화려하고 순수했던 꿈
          너의 두 손에 넘쳐 흘렀던 그 한 움큼은
          꼭 쥐고 살아가길
      
          나로 시작될 거야 하늘을 날아보자
          지금쯤 턱 막힌 장벽에 날개를 숨긴
          그때 그 아이들과 우리의 꿈이
      
          그땐 함께 영원할 것만 같았지
          어렸던 세상을 걷어내면
          비탈지던 저 좁은 길가로 흩어져
          화려하고 순수했던 꿈
          너의 두 손에 넘쳐 흘렀던 그 한 움큼과
          그 두 손 모아 기도했던 시간이
          이루어질 수 있도록
      
          그땐 함께 이룰 거라고 믿었지
      
          작은 손과 발로 서로를 잡고
          뛰던 세상이 다였던 우리 어린 시절의
          간절하고 행복했던 꿈
          너의 두 손에 넘쳐 흘렀던 그 한 움큼은
          꼭 쥐고 살아가길
      
          서투른 삶 걸음으로 상처를 입고
          새로운 만남에 세상이 낯설어도
          훗날 모두 이뤄 보일거야
          내가 알던 그때 그 아이들은`,
                genres: "포크;어쿠스틱;발라드;락",
                image: "https://image.bugsm.co.kr/album/images/original/200752/20075281.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감",
                link: "https://music.bugs.co.kr/track/30506351?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 36,
                title: "괜찮아요",
                director: "우주히피",
                year: "2014-10-28",
                summary:
                    `외롭더라도 그렇데도
          누구나 아무나 안돼요
          물론 알아요 밥을 먹어도
          뭔가 계속 허전 한거죠
          오 채워지지 않아요
          아무래도 혼자는
          오 외로운 데로 둬요
      
          이유도 없이 우울한가요
          몇일이고 계속 되나요
          그리운 것이
          너의 밤에 잊지 않고 찾아 오나요
          오 사랑이면은 돼요
          그런 병은 곧 나아요
          오 잠은 오지 않겠죠
          괜찮아
      
          계절이 와도 늘 혼자라서
          되도록 무심히 지내다
          밤새 열이나 아픈 눈으로
          텅 빈 방을 둘러 보나요
          오 혼자 울지는 마요
          내가 그 맘 다 알아요
          오 지금 내 말 들어요
          괜찮아
      
          오 혼자라 생각 마요
          나도 많이 아팠어요
          오 오늘은 그만 자요
          괜찮아
      
          아무래도 혼자는 그래
          아무래도 혼자는 그래
          아무래도 혼자는 그래
          아무래도 혼자는 그래`,
                genres: "인디;락",
                image: "https://image.bugsm.co.kr/album/images/original/4593/459335.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감",
                link: "https://music.bugs.co.kr/track/3734296?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 37,
                title: "내가 위로해줄게",
                director: "송희란",
                year: "2020-7-20",
                summary:
                    `매일 똑같이 웃고만 있는 너
          지칠 법도 한데
          속을 보이질 않아
          혼자 다 참아내는 너
          꾹꾹꾹꾹 눌러 담고 가두기만 해
          그럼 왜 터져버리는데
          참은 게 참은 게 아냐
          지금 너 위험해 보이는
          내가 예민한가
          오늘 좀 어때 기분은 어때
          넌 좀 솔직해도 돼
          좀 쉬는 게 어때 너 지금 뭐해
          오늘은 내가 위로해줄게
          뚜뚜뚜뚜
          난 또 오늘만 그런 줄 알았지
          매번 그랬듯이
          별일 아닌 듯 웃었어
          분명 그 속은 바짝 타고 있는데
          뭐가 좋아 웃는 건지
          넌 사람이 너무 좋아 걱정스러워
          오늘 좀 어때 기분은 어때
          너는 좀 솔직해도 돼
          좀 쉬는 게 어때 너 지금 뭐해
          오늘은 내가 위로해줄게
          조그만한 게 가눌 수 없이
          마음만 꽉 차선 뭐해
          넌 괜찮은지
          아프진 않은지
              (내일) 그냥 울어주면 안 되겠니
          사는 건 어때 맘은 좀 어때
          한번 내려두는 건 어때
          좀 쉬는 게 어때 지금 뭐해
          오늘은 내가 위로할게
          오늘은 어때
          뚜뚜뚜뚜
          오늘 좀 어때
          내가 위로해줄게`,
                genres: "인디;포크;어쿠스틱",
                image: "https://image.bugsm.co.kr/album/images/original/203385/20338591.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감",
                link: "https://music.bugs.co.kr/track/31973029?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 38,
                title: "문턱",
                director: "권진아",
                year: "2021-4-18",
                summary:
                    `이제는 너무 지친 것 같아
          아무래도 나 더는 못할 것 같아
          막연한 내일과 똑같은 하루
          잠시도 놓을 수 없던 생각들
      
          저 높은 문턱 너머에
          내가 바라는 게 있을까
          손에 쥐고 나면 행복해질까
          대체 얼마나 더 달려야 하는지
      
          난 집에 가고 싶은데
          마음 둘 곳이 필요한데
          어디에도 보이지 않는 걸
          가끔 빛나는 날들로
          그렇게 오늘도 견디려 해
      
          조급한 마음 달랠 길 없이
          하루를 버틸 너마저 없다는 게
          날 너무도 외롭고 슬프게 만들어
          더 그리워져 그때가
      
          저 높은 문턱 너머에
          내가 바라는 게 있을까
          손에 쥐고 나면 행복해질까
          대체 얼마나 더 달려야 하는지
      
          난 집에 가고 싶은데
          마음 둘 곳이 필요한데
          어디에도 보이지 않는 걸
          가끔 빛나는 날들로
          그렇게 오늘도 견디려 해
      
          자꾸만 힘이 빠지는데도
          도저히 멈추는 법을 모르겠어
      
          내가 날 믿어주는 게
          이렇게 힘든 건지 정말
          몰랐어 난 가끔 네가 떠오르면
          잠시 머물러있을 수 있어
      
          네가 날 믿었던 만큼
          나도 나를 믿어주고 싶어`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/40416/4041640.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감;용기",
                link: "https://music.bugs.co.kr/track/6104618?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 39,
                title: "위로가 필요한 나에게",
                director: "투앤비(2NB), by me",
                year: "2021-1-10",
                summary:
                    `괜찮아 지금까지 잘해왔어
          어깨를 두드려주며
          그동안 수고했다고 말해줘
      
          한 치 앞도 보이지 않는 미래와
          무엇이든 해낼 거라는 열정만
          난 지금 어디쯤 있는 걸까
      
          가끔은 모두 내려놓고 떠나고 싶어
          너무 무거워진 짐을 떠넘기고 싶어
          저기 흔들리는 나뭇잎처럼
          바람에 맡긴 채
      
          멀어진 나의 꿈과 바램들은
          희미 해지고 어디로 가야 할지 모르는 나
      
          그대가 내 기댈 곳이 되어줘
          지친 마음 쉬어갈 위로가 되어줘
          난 아직 준비가 필요해
      
          조금 더 단단해지기
          사소한 일은 물 흐르듯 그냥 넘기기
          어렵게 생각할 것 하나 없어
          그렇게 그렇게 다 사는 거니까
      
          기나긴 시간 앞만 보고 달려온 내게
          따뜻한 한마디 말과 용기를 줘
          꽃길만 걸을 수는 없겠지만
          괜찮다 괜찮다 말해줘`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/40237/4023732.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감;용기",
                link: "https://music.bugs.co.kr/track/6049856?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 40,
                title: "항상 엔진을 켜둘께",
                director: "델리 스파이스",
                year: "2001-9-14",
                summary:
                    `휴일을 앞둔 밤에 아무도 없는 새벽
          도로를 질주해서 바닷가에
          아직은 어두운 하늘 천평궁은 빛났고
          차안으로 스며드는 찬공기들
      
          기다릴께 언제라도 출발할 수 있도록
          항상 엔진을 켜둘께
      
          너와 만난 시간보다 많은 시간이 흐르고
          그 바닷가에 다시 또 찾아와
      
          만약 그때가 온다면
          항상 듣던 스미스를 들으며 저 멀리로 떠나자
      
          기다릴께 언제라도 출발할 수 있도록
          항상 엔진을 켜둘께
          돌아오지 않더라도 난 여기에 서 있겠지
          아마 엔진을 켜둔채`,
                genres: "인디;락",
                image: "https://image.bugsm.co.kr/album/images/original/32/3280.jpg?version=undefined",
                category: "멘토",
                detail: "위로;용기",
                link: "https://music.bugs.co.kr/track/91846?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 41,
                title: "What Makes You Beautiful",
                director: "One Direction",
                year: "2011-11-21",
                summary:
                    `You are insecure
          Don't know what for
          You're turning heads when you walk through the door,
          Don't need make-up,
          To cover up,
          Being the way that you are is enough,
      
          Everyone else in the room can see it,
          Everyone else but you,
      
          Baby you light up my world like nobody else,
          The way that you flip your hair gets me overwhelmed,
          But when you smile at the ground it ain't hard to tell,
          You don't know,
          Oh oh,
          You don't know you're beautiful,
          If only you saw what I can see,
          You'll understand why I want you so desperately,
          Right now I'm looking at you and I can't believe,
          You don't know,
          Oh oh,
          You don't know you're beautiful,
          Oh oh,
          That's what makes you beautiful
      
          So c - come on,
          You got it wrong,
          To prove I'm right,
          I put it in a song,
          I don't know why,
          You're being shy,
          And turn away when I look into your eye eye eyes,
      
          Everyone else in the room can see it,
          Everyone else but you,
      
          Baby you light up my world like nobody else,
          The way that you flip your hair gets me overwhelmed,
          But when you smile at the ground it ain't hard to tell,
          You don't know,
          Oh oh,
          You don't know you're beautiful,
          If only you saw what I can see,
          You'll understand why I want you so desperately,
          Right now I'm looking at you and I can't believe,
          You don't know,
          Oh oh,
          You don't know you're beautiful,
          Oh oh,
          That's what makes you beautiful
      
          Na Na Na Na Na Na Naaa,
          Na Na Na Na Na Na Na Na
      
          Baby you light up my world like nobody else,
          The way that you flip your hair gets me overwhelmed,
          But when you smile at the ground it ain't hard to tell,
          You don't know,
          Oh oh,
          You don't know you're beautiful,
      
          Baby you light up my world like nobody else,
          The way that you flip your hair gets me overwhelmed,
          But when you smile at the ground it ain't hard to tell,
          You don't know,
          Oh oh,
          You don't know you're beautiful,
          If only you saw what I can see,
          You'll understand why I want you so desperately,
          Right now I'm looking at you and I can't believe,
          You don't know,
          Oh oh,
          You don't know you're beautiful,
          Oh oh,
          You don't know you're beautiful,
          Oh oh,
          That is what makes you beautiful`,
                genres: "팝",
                image: "https://image.bugsm.co.kr/album/images/original/3412/341219.jpg?version=undefined",
                category: "멘토",
                detail: "위로;칭찬;공감",
                link: "https://music.bugs.co.kr/track/2755609?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 42,
                title: "My Everything",
                director: "브라운 아이드 소울",
                year: "2003-9-17",
                summary:
                    `이제 나 알게됐죠
          늘 부족했던 나를 감싸준 당신이죠
          기다림에 지쳐있던 그대 내손을 잡아봐요
          힘겨웠던 우리 지난 날 모두다 잊을수 있죠
              (우 그대 곁에 내가 있어요)
          쓸쓸하게 혼자였던 그길도
          이젠 내가 함께 할게요
          You are my everything
          For always my everything
          언제나 내 맘속에 My everything
          영원히 그대 My everything
          You are my everything
          언제나 내 맘속에 My everything
          영원히 그대
          이제 나 깨달았죠
          늘 부족했던 내게 소중한 당신이죠
          그리움에 늘 기대왔던 그대
          내 품에 안겨봐요
          오랜시간 나를 지켜준 당신께 말할수 있죠
              (우 그대 항상 나 고마워요)
          수 많았던 그대 외로운 날들
          이제는 함께 할게요
          You are my everything
          For always my everything
          언제나 내 맘속에 My everything
          영원히 그대 My everything
          You are my everything
          언제나 내 맘속에 My everything
          영원히 그대
          뒤 돌아보면 참 바보같던 내 모습이죠
              (고갤 들어 그대 나를 봐요)
          힘들었나요 용서해요 이젠 내 손을 잡고
          나 영원토록 그대
          You are my everything
          For always my everything
          언제나 내 맘속에 My everything
          영원히 그대 My everything
          You are my everything
          언제나 내 맘속에 My everything
          영원히 그대 영원히 그대
          My everything you are my everything
          언제나 내 맘속에 My everything
          영원히 그대 My everything
          You are my everything
          언제나 내 맘속에 My everything
          영원히 그대 My everything`,
                genres: "발라드;알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/326/32695.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감",
                link: "https://music.bugs.co.kr/track/485715?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 43,
                title: "여러분('서바이벌 나는 가수다' 경연곡)",
                director: "임재범",
                year: "2011-5-22",
                summary:
                    `네가 만약 괴로울때면 내가 위로해 줄께
          네가 만약 서러울때면 내가 눈물이 되리
          어두운 밤 험한 길 걸을 때
          내가 내가 내가 너의 등불이 되리
          허전하고 쓸쓸할 때 내가 너의 벗 되리라
          나는 너의 영원한 형제야
          나는 너의 친구야
          나는 너의 영원한 노래야
          나는 나는 나는 나는 너의 기쁨이야
          어두운 밤 험한 길 걸을 때
          내가 내가 내가 너의 등불이 되리
          허전하고 쓸쓸할 때 내가 너의 벗 되리라
          나는 너의 영원한 형제야
          나는 너의 친구야
          나는 너의 영원한 노래야
          나는 나는 나는 나는 너의
          내가 만약 외로울때면
          누가 나를 위로해주지 바로 여러분
          나는 너의 영원한 형제야
          나는 너의 친구야
          나는 너의 영원한 노래야
          바로 여러분 감사합니다`,
                genres: "발라드;팝",
                image: "https://image.bugsm.co.kr/album/images/original/2859/285909.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감",
                link: "https://music.bugs.co.kr/track/2340808?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 44,
                title: "안아줄게",
                director: "스탠딩 에그",
                year: "2014-12-5",
                summary:
                    `그런 날이 있지
          눈물이 막 날것 같은 그런 날
          걷는 것마저 힘겹다고 느껴질 때
          네 곁에 그 누구도 몰라줄 때
      
          It's alright It's alright
          내가 널 안아줄게
          내 품에 안겨 마음껏 울어 안아줄게
          It's alright It's alright
          내가 다 들어줄게
          아무에게도 말 못한 네 맘
          내가 들어줄게
      
          그런 날이 있지
          모든 걸 다 놓고 싶은 그런 날
          걸어가던 길이 버겁다고 느껴질 때
          네 곁에 그 누구도 몰라줄 때
      
          It's alright It's alright
          내가 널 안아줄게
          내품에 안겨 마음껏 울어 안아줄게
          It's alright It's alright
          내가 다 들어줄게
          아무에게도 말 못한 네 맘
          내가 들어줄게
      
          It's alright It's alright
          내가 널 안아줄게
          내품에 안겨 마음껏 울어 안아줄게
          It's alright It's alright
          내가 다 들어줄게
          아무에게도 말 못한 네 맘
          내가 들어줄게`,
                genres: "인디;포크;어쿠스틱",
                image: "https://image.bugsm.co.kr/album/images/original/4672/467283.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감",
                link: "https://music.bugs.co.kr/track/3790731?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 45,
                title: "내가 니 편이 되어줄게(feat. 하은)",
                director: "커피소년",
                year: "2013-3-6",
                summary:
                    `누가 내 맘을 위로할까
          누가 내 맘을 알아줄까
          모두가 나를 비웃는것같아
          기댈곳 하나 없네
          이젠 괜찮다 했었는데
          익숙해진줄 알았는데
          다시 찾아온 이 절망에
          나는 또 쓰러져 혼자 남아있네
          내가 니 편이 되어줄게
          괜찮다 말해줄게
          다 잘될거라고 넌 빛날거라고
          넌 나에게 소중하다고
          모두 끝난것같은 날엔
          내 목소릴 기억해
          괜찮아 다 잘될거야
          넌 나에게 가장 소중한 사람
          이젠 괜찮다 했었는데
          익숙해진줄 알았는데
          다시 찾아온 이 절망에
          나는 또 쓰러져 혼자 남아있네
          내가 니 편이 되어줄게
          괜찮다 말해줄게
          다 잘될거라고 넌 빛날거라고
          넌 나에게 소중하다고
          모두 끝난것같은 날엔
          내 목소릴 기억해
          괜찮아 다 잘될거야
          넌 나에게 가장 소중한 사람
          내가 니 편이 되어줄게
          괜찮다 말해줄게
          다 잘될거라고 넌 빛날거라고
          넌 나에게 소중하다고
          모두 끝난것같은 날엔
          내 목소릴 기억해
          괜찮아 다 잘될거야
          넌 나에게 가장 소중한 사람`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/3604/360435.jpg?version=undefined",
                category: "멘토",
                detail: "위로;공감",
                link: "https://music.bugs.co.kr/track/2911533?wl_ref=list_tr_08_search",
                type: "music"
            },
            //편안함
            {
                id: 46,
                title: "여행",
                director: "김동률",
                year: "2007-3-13",
                summary:
                    `언제나 그높은 회색빌딩 속에
          달리듯 지나가 버린 날들은
          이제는 떠나고싶은 나의 하루하루
          창밖에 쏟아지는 햇살 따라
          어두운 내 작은 방을 나서면
          기차에 설레이는 내 마음을 싣고
          하늘에 흘러가는 사랑은 나의 가슴 속에 담을까
          거리마다 가득 피어나는 추억들을 담을까
          오랜만에 불러보는 그 옛날의 노래는
          나를 스쳐가는 바람을 따라
          난 그저 다시 돌아 길을 가네
          아무도 없는 작은 마을을
          라라라라 날 부르는 너의 세상 향해
          하늘에 흘러가는 사랑은 나의 가슴 속에 담을까
          거리마다 가득 피어나는 추억들을 담을까
          오랜만에 불러보는 그 옛날의 노래는
          나를 스쳐가는 바람을 따라
          난 그저 다시 돌아 길을 가네
          아무도 없는 작은 마을을
          라라라라 날 부르는 너의 세상 향해
          날 부르는 널 향한 여행을 접기`,
                genres: "발라드;팝",
                image: "https://image.bugsm.co.kr/album/images/original/80254/8025429.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링",
                link: "https://music.bugs.co.kr/track/80311264?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 47,
                title: "밤편지",
                director: "아이유",
                year: "2017-3-24",
                summary:
                    `이 밤 그날의 반딧불을
          당신의 창 가까이 보낼게요
          음 사랑한다는 말 이에요
      
          나 우리의 첫 입맞춤을 떠올려
          그럼 언제든 눈을 감고
          음 가장 먼 곳으로 가요
      
          난 파도가 머물던 모래 위에 적힌 글씨처럼
          그대가 멀리 사라져 버릴 것 같아
          늘 그리워 그리워
      
          여기 내 마음속에
          모든 말을 다 꺼내어 줄 순 없지만
          사랑한다는 말 이에요
      
          어떻게 나에게 그대란 행운이 온 걸까
          지금 우리 함께 있다면 아 얼마나 좋을까요
      
          난 파도가 머물던 모래 위에 적힌 글씨처럼
          그대가 멀리 사라져 버릴 것 같아
          또 그리워 더 그리워
      
          나의 일기장 안에
          모든 말을 다 꺼내어 줄 순 없지만
          사랑한다는 말
      
          이 밤 그날의 반딧불을 당신의
          창 가까이 띄울게요
          음 좋은 꿈 이길 바라요`,
                genres: "발라드;팝",
                image: "https://image.bugsm.co.kr/album/images/original/200890/20089092.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;잔잔함",
                link: "https://music.bugs.co.kr/track/30598121?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 48,
                title: "가을 아침",
                director: "아이유",
                year: "2017-9-22",
                summary:
                    `이른 아침 작은 새들 노랫소리 들려오면
          언제나 그랬듯 아쉽게 잠을 깬다
          창문 하나 햇살 가득 눈부시게 비쳐오고
          서늘한 냉기에 재채기할까 말까(음)
          눈 비비며 빼꼼히 창밖을 내다보니
          삼삼오오 아이들은 재잘대며 학교 가고
          산책 갔다 오시는 아버지의 양손에는
          효과를 알 수 없는 약수가 하나 가득(음)
          딸각딸각 아침 짓는 어머니의 분주함과
          엉금엉금 냉수 찾는 그 아들의 게으름이
          상큼하고 깨끗한 아침의 향기와
          구수하게 밥 뜸드는 냄새가 어우러진
          가을 아침 내겐 정말 커다란 기쁨이야
          가을 아침 내겐 정말 커다란 행복이야
          응석만 부렸던 내겐
          파란 하늘 바라보며 커다란 숨을 쉬니
          드높은 하늘처럼 내 마음 편해지네
          텅 빈 하늘 언제 왔나 고추잠자리 하나가
          잠 덜 깬 듯 엉성히 돌기만 비잉비잉(음)
          토닥토닥 빨래하는 어머니의 분주함과
          동기동기 기타 치는 그 아들의 한가함이
          심심하면 쳐대는 괘종시계 종소리와
          시끄러운 조카들의 울음소리 어우러진
          가을 아침 내겐 정말 커다란 기쁨이야
          가을 아침 내겐 정말 커다란 행복이야
          응석만 부렸던 내겐
          가을 아침 내겐 정말 커다란 기쁨이야
          가을 아침 내겐 정말 커다란 행복이야
          뜬구름 쫓았던 내겐
          이른 아침 작은 새들 노랫소리 들려오면
          언제나 그랬듯 아쉽게 잠을 깬다
          창문 하나 햇살 가득 눈부시게 비쳐오고
          서늘한 냉기에 재채기할까 말까(음)`,
                genres: "발라드;팝;포크",
                image: "https://image.bugsm.co.kr/album/images/original/201196/20119646.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;산뜻",
                link: "https://music.bugs.co.kr/track/30784473?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 49,
                title: "웃으며 넘길래",
                director: "제이레빗",
                year: "2012-4-25",
                summary:
                    `거리에 많은 사람들 어딘가로 향하는
          빠른 발걸음 모두 그렇게 살아가지
          가슴 속 깊은 사연들 저마다 아픈 구석
          하나쯤은 있네 그렇게 모두 살아가지
      
          가끔은 뭐 하나 되는 일이 없고
          한없이 작아지고 주저앉고 싶어도
          하지만 단 한 가지 나에게 꿈이 있다네
          힘들다 뭐래도 난 그냥 웃으며 넘길래
      
          세상을 모른다 해도
          아직 많은 길이 남았대도
          내 가슴이 뛰네 언제나 그렇듯
          웃으며 넘길래
      
          스쳐간 많은 사람들
          언제부턴지 기억나질 않네
          그런게 모두 추억이지
      
          가끔은 뭐 하나 되는 일이 없고
          한없이 작아지고 주저앉고 싶어도..
          하지만 단 한 가지 나에게 꿈이 있다네
          힘들다 뭐래도 난 그냥 웃으며 넘길래
      
          세상을 모른다 해도
          아직 많은 길이 남았대도
          내 가슴이 뛰네 언제나 그렇듯
          웃으며 넘길래`,
                genres: "인디",
                image: "https://image.bugsm.co.kr/album/images/original/3275/327530.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;공감;위로",
                link: "https://music.bugs.co.kr/track/2636437?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 50,
                title: "아로하(드라마 '슬기로운 의사생활' OST Part3)",
                director: "조정석",
                year: "2020-3-27",
                summary:
                    `어두운 불빛아래 촛불 하나
          와인 잔에 담긴 약속하나
          항상 너의 곁에서 널 지켜줄거야
          날 믿어준 너였잖아
          나 바라는 건 오직 하나
          영원한 행복을 꿈꾸지만
          화려하지 않아도 꿈같진 않아도
          너만 있어주면 돼
          걱정 마(I believe)
          언제나(I believe)
          이 순간을 잊지 않을게
          내 품에(I believe)
          안긴 너의 미소가
          영원히 빛을 잃어 가지 않게
          Cause your love is so sweet
          You are my everything
          첫날 밤에 단 꿈에 젖어
          하는 말이 아냐 난 변하지 않아
          오직 너만 바라볼거야 Oh
          You're light of my life
          You are the one in my life
          내 모든걸 다 잃는대도
          후회하지 않아
          오직 너를 위한
          변하지 않는 사랑으로
          나 바라는 건 오직 하나
          영원한 행복을 꿈꾸지만
          화려하지 않아도 꿈같진 않아도
          너만 있어주면 돼
          약속해(I believe)
          힘들 땐(I believe)
          너의 그늘이 되어줄게
          내품에(I believe)
          안긴 너의 미소가
          영원히 빛을 잃어 가지 않게
          Cause your love is so sweet
          You are my everything
          첫날 밤에 단 꿈에 젖어
          하는 말이 아냐 난 변하지 않아
          오직 너만 바라볼거야 Oh
          You're light of my life
          You are the one in my life
          내 모든걸 다 잃는대도
          후회하지 않아
          오직 너를 위한
          변하지 않는 사랑으로
          You're light of my life
          You are the one in my life
          내 모든걸 다 잃는대도
          후회하지 않아
          오직 너를 위한
          변하지 않는 사랑으로
          All I ever want is your love`,
                genres: "인디",
                image: "https://image.bugsm.co.kr/album/images/original/203142/20314288.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;위로",
                link: "https://music.bugs.co.kr/track/31867170?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 51,
                title: "i'll be a virgin i'll be a mountain(드라마 '커피프린스 1호점' OST)",
                director: "Maximilian Hecker",
                year: "2007-9-12",
                summary:
                    `My thoughts are flowing
          My love is growing
          My dreams have ended
          And my soul is stranded
          내 생각은 흐르고
          내 사랑은 자라고
          내 꿈은 끝장이 났다
          그리고 내 영혼은 갈 곳이 없다
      
          Now that it’s over
          Now that it’s over
          다 끝나버렸기에
          이젠 다 끝난 일이기에
      
          I’ll leave my island
          I’ll swim to you
          I’ll leave my prison
          To swim to you
          난 내 섬을 떠날 것이다
          그리고 너를 향해 헤엄쳐갈 것이다
          내가 갇혀있던 감옥을 떠나
          그렇게 너에게로 헤엄쳐갈 것이다
      
          Now that it’s over
          Now that it’s over
          다 끝나버렸기에
          이젠 다 끝난 일이기에
      
          I’ll be a virgin
          When I reach you
          I’ll be a mountain
          When I touch you
          그리하여 내가 널 만났을 때
          나는 순결한 몸이리라
          내가 널 만질 때 나는
          산이 되리라
      
          Now that it’s over
          Now that it’s over
          다 끝나버렸기에
          이젠 다 끝난 일이기에`,
                genres: "팝;발라드",
                image: "https://image.bugsm.co.kr/album/images/original/80298/8029849.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;잔잔",
                link: "https://music.bugs.co.kr/track/80361994?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 52,
                title: "오늘 하루는 어땠나요",
                director: "러브 페이지",
                year: "2016-4-27",
                summary:
                    `'러브 페이지'의 2nd single[오늘 하루는 어땠나요]
          '러브 페이지'가 두번째 이야기를 가지고 찾아왔습니다.
          고된 하루를 마치고, 집에 돌아오면서 느꼈던 감정을 표현한 곡으로
          "오늘 하루도 잘했어"라고 자신을 위로하는 마음을 이야기하고 있습니다. 
          '러브페이지'의 잔잔한 연주를 통해 잠시나마 마음의 힐링을 얻으면 좋겠습니다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/200326/20032686.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;잔잔함",
                link: "https://music.bugs.co.kr/track/30234840?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 53,
                title: "Happy Day",
                director: "그린 다이어리(Green Diary)",
                year: "2015-5-11",
                summary:
                    `[듣기 편안하고 마음이 편안해지는 'Green Diary'의 음악]
          "Happy Day"는'오늘 하루도 기분좋게 시작하자'라는 마음을 이야기한곡입니다.
          세상살이 많이 힘들지만 그래도 긍정적이고 행복한 생각를 가진다면 모든일이 잘될거라 생각됩니다.
              Piano : Just Piano`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/5020/502005.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;치유",
                link: "https://music.bugs.co.kr/track/4329243?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 54,
                title: "Blue Sea",
                director: "Bird",
                year: "2014-7-15",
                summary:
                    `바다와의 교감을 말하는 Bird's story
          바다앞에서 눈을 감고, 출렁거리는 파도소리를 들으며 떠오르는 감성을 풀어놓은 곡으로
          자연에 대한 교감과 사랑을 잔잔하게 풀어놓은 음악이다.특히 파도소리 효과음은 듣는이로
          하여금 곡의 이야기를 더 효과적으로 전달해주고 있다.
          나혼자 바다를 느끼고 싶거나 사색에 잠기고 싶을때, 추천해주고 싶은 곡이다
          Just Piano`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/4399/439936.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;치유",
                link: "https://music.bugs.co.kr/track/3589242?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 55,
                title: "달아요",
                director: "박정현",
                year: "2007-12-11",
                summary:
                    `우 참으려 해도 웃음이 나와
          샴페인이 터지듯
          좋아 낮은 목소리 장난스러운 그대 걸음도
          Oh you & I oh you & I
          왜 이렇게 왜 이렇게 좋아요
          I can see the sunlight in your eyes
          Everyday oh everyday
          웃게 해줄게 서툴겠지만 그댈 위해서만
          그대 이름 혀끝에 녹아 내릴듯 달아요
          그댈 몰랐다면 몰랐어요
          이런 기분을 이런 행복을
          Oh you & I oh you & I
          왜 이렇게 왜 이렇게 좋아요
          I can see the sunlight in your eyes
          Everyday oh everyday
          웃게 해줄게 서툴겠지만 그댈 위해서만
          생각만 해도 아파요 나를 떠나면 안되요
          그대 없었다면 없었어요
          이런 노래도 이런 사랑도
          Oh you & I oh you & I
          부끄럽게 간지럽게
          이대로 아무것도 숨기지 마요
          Everyday oh everyday
          믿게 해줄게 언제까지 그댈 사랑해요
          우 감추려해도 다 보이나 봐 햇살이 퍼지듯
          이런 바보같은 날 온 세상이 다 놀려도 좋아`,
                genres: "알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/80322/8032225.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;상큼",
                link: "https://music.bugs.co.kr/track/80391502?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 56,
                title: "행복의 주문",
                director: "커피소년",
                year: "2015-3-30",
                summary:
                    `버스에서 택시에서 자가용안에서
          주방에서 혹은 야근하고 있나요
      
          어깨는 축 쳐지고 다리는 쑤셔오고
          머리는 천근만근 마음도 누르는데
      
          내 속삭임으로 행복의 주문 걸어
          그대 맘을 밝혀줄게요
      
          따라하면 돼요
          카운터줄게요
          어렵지 않아요
      
          단순하긴해도
          힘이 될거에요
          행복의 주문 하나 둘 셋 넷
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          우울한 사람도
          지친 사람들도
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          따라하면 돼요
          카운터줄게요
          어렵지 않아요
      
          단순하긴해도
          힘이 될거에요
          행복의 주문 하나 둘 셋 넷
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          우울한 사람도
          지친 사람들도
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          우울한 사람도
          지친 사람들도
      
          행복해져라 행복해져라
          행복해져라 행복해져라
      
          버스에서 택시에서 자가용안에서
          주방에서 혹은 야근하고 있나요
      
          모두 떠난 사무실에 홀로 앉아
          한숨 쉬며 늦게까지 끙끙대나요
      
          사랑은 언제 해봤는지
          외로움에 답답함에
          오늘도 그냥 버텨내나요
      
          내 속삭임으로 행복의 주문 걸어
          그대 맘을 밝혀줄게요
      
          행복해져라 행복해져라
          행복해져라 행복해져라
          행복해져라 행복해져라
          행복해져라 행복해져라`,
                genres: "인디",
                image: "https://image.bugsm.co.kr/album/images/original/4925/492520.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;발랄",
                link: "https://music.bugs.co.kr/track/3981176?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 57,
                title: "소확행",
                director: "스탠딩 에그",
                year: "2018-5-11",
                summary:
                    `알람이 울리고도
          한참이 지나도록
          늦잠을 잤을 때
          또 지각일까
          걱정을 했지만 주말일 때
          잡힌 약속도 없고
          딱히 할 일도 없어
          버스를 탔을 때
          내 옆자리에 앉게 된 사람이
          바로 너였을 때
          행복한걸 행복한걸
          어제와 똑같은 하루지만
          오늘 하루가 왠지 조금
          행복하게 느껴지는 건
          Because of you
          Because of you
          이런 내 맘을 모르겠지만
          잠깐이라도 잔잔하게
          미소 짓게 만드는 순간
          그건 너 때문인 걸
          평소 안 쓰던 일기를 다 쓰네
              (널 생각하며)
          잘 안 치던 기타를 다치네
          평소랑 다른 시간
          생각도 못 했지만
          너와 마주칠 때
          많은 사람들 속에서
          우리만 서로 느껴질 때
          행복한걸 행복한걸
          어제와 똑같은 하루지만
          오늘 하루가 왠지 조금
          행복하게 느껴지는 건
          Because of you
          Because of you
          이런 내 맘을 모르겠지만
          잠깐이라도 잔잔하게
          미소 짓게 만드는 순간
          그건 너 때문인 걸
          행복한걸 행복한걸
          너의 얼굴을 떠올릴 때면
          내일 하루가 오늘보다
          행복해질 것만 같은 걸
          Only for you
      Baby only for you
      이런 내 맘을 모르겠지만
          잠깐이라도 잔잔하게
          미소 짓게 만드는 순간
          너에게 주고 싶어
          다시 불을 켜 자꾸만
          가슴이 두근거려서
          손 글씨를 연습해
          몇 번씩 네 이름을 써
          네 이름을 화분에 붙일게
          물을 줄 때면
          곧 사랑이 시작될 것 같애`,
                genres: "포크;어쿠스틱",
                image: "https://image.bugsm.co.kr/album/images/original/201662/20166217.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;힐링;발랄",
                link: "https://music.bugs.co.kr/track/31067642?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 58,
                title: "spring i love you best(드라마 '신사의 품격' OST)",
                director: "	빅 베이비 드라이버(Big Baby Driver)",
                year: "2012-6-17",
                summary:
                    `I wish I had someone who
          suddenly arrive
          And show me how the flowers grow
          and come out in winter field
      
          I wish I had someone new
              tender to my heart
          Someone who will share me
          precious time
      
          Someday you will find me
              in the hands of the wind
          Somehow you will lead me
          to the warmer nights
      
          Someday you will find me
              in the hands of the wind
          Somehow you will lead me
          to the warmer nights
      
          If I had pretty spring at
          the corner of my heart
      
          I will say goodbye to winter land,
              you so cruel the winter wind
          and I will check the through the phone,
              the number is 131
      
          Don’t you know the truth is
              in fine weather
          I love you best
          I love you best
      
          Someday you will find me
              in the hands of the wind
          Somehow you will lead me
          to the warmer nights
      
          Someday you will find me
              in the hands of the wind
          Somehow you will lead me
          to the warmer nights`,
                genres: "팝",
                image: "https://image.bugsm.co.kr/album/images/original/3319/331915.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;상큼",
                link: "https://music.bugs.co.kr/track/2686695?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 59,
                title: "좋은 아침이야, 점심을 먹자",
                director: "한희정",
                year: "2013-4-8",
                summary:
                    `좋은 아침이야 참 좋은 아침이야
          늦잠을 자고 뒹굴거리기 참 좋은 아침
      
          일찍 자면 일찍 일어날 거라는 순진한 발상으로
          알람도 없이 애인의 모닝콜도 없이 서른 살으로
          인생의 햇살이 정수리에서 내리쬐는 이 순간
          좋아 속도 없이 웃을 수 있는 내가
      
          좋은 아침이야 참 좋은 아침이야
          늦잠을 자고 뒹굴거리기 참 좋은 아침
          좋은 아침이야 슬슬 일어나볼까
          점심을 먹자 이런 날엔 뭐든 다 좋아
      
          꿈도 없이 열 몇 시간을 자면 뭔가 손해 본 느낌
          꿈도 없이 열 몇 시간을 자면 뭔가 손해 본 느낌
          꿈도 없이 열 몇 시간을 자면 뭔가 손해 본 느낌
          꿈도 없이 열 몇 시간을 자면 뭔가 손해 본 느낌
      
          결말을 알고도 재밌는 책이 사실 가장 좋지 않니
          선착순을 하면 일부러 더 천천히 뛰게 되지 않니
          결말을 알기에 즐거운 삶을 살고 싶다는 생각
          좋아 한 끼 식사부터 시작해볼까
      
          좋은 아침이야 참 좋은 아침이야
          늦잠을 자고 뒹굴거리기 참 좋은 아침
          좋은 아침이야 슬슬 일어나볼까
          점심을 먹자 이런 날엔 뭐든 다 좋아`,
                genres: "포크;어쿠스틱;인디",
                image: "https://image.bugsm.co.kr/album/images/original/3643/364323.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;공감;위로",
                link: "https://music.bugs.co.kr/track/2941811?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 60,
                title: "On A Sunny Day(매일 그대와)",
                director: "웅산",
                year: "2008-9-16",
                summary:
                    `On a sunny day
          Waking up to the sounds of birds
          Looking st the sky
          Who could ask for more
      
          On a rainy day
          Sitting on my cozy chair
          Listen to the rain
          It's a song of love
      
          Rainbows in my sight I can see
          Colors of tender light sets me free
          If l could show you that this I know
          Life is just like a breeze
      
          On a cloudy day
          When I'm feeling sad and blue
          Walking through the night
          Wanna fall in love
      
          Rainbow in my sight Ican see
          Colors of tender light sets me free
          If I could show you that this I know
          Life is just like a breeze
      
          On a cloudy day
          When I'm feeling sad and blue
          Walking through the night
          Wanna fall in love
      
          Wanna sunny day, On a rainy day
          Wanna fall in love`,
                genres: "발라드;재즈",
                image: "https://image.bugsm.co.kr/album/images/original/1636/163602.jpg?version=undefined",
                category: "편안함",
                detail: "편안함;잔잔함",
                link: "https://music.bugs.co.kr/track/1599352?wl_ref=list_tr_08_search",
                type: "music"
            },
            //웃음
            {
                id: 61,
                title: "happy things",
                director: "제이레빗",
                year: "2012-4-25",
                summary:
                    `둥근 해가 뜨면 제일 먼저
          기분 좋은 상상을 하지
          하나 둘 셋! 자리에 일어나
          하마처럼 입을 쫙 하품을 한번 하고

          두 눈을 크게 뜨고
          번쩍 기지개를 한번 쭉 켜고
          즐거운 상상을 맘껏 즐겨 잊지 말고
          Happy Happy Things

          상쾌한 바람이 부는 아침에
          한껏 여유 부릴 때
          유난히 안색이 좋아 뭘 입어도
          다 잘어울리고 다 예뻐 보일 때

          좋아하는 노랠 들으며 걸어갈 때
          시간 맞춰 버스를 탈 때
          유난히 사람이 많은 출근길
          딱 내 앞에서 자리 났을 때

          예상대로 일이 술술 풀려갈 때
          이제부터 뭐든 내 멋대로 맘 먹을 때
          아주 맛있는걸 먹었을 때
          세상에나~!힘도 안 줬는데 쾌변

          오! 보너스 휴가 떠날 때
          사랑하는 그대와 함께
          모두 상상만 해도 정말 기분 좋아
          잊지 말고 Happy Happy Things

          오랜만에 친구들을 만났을 때
          괜히 기분이 좋아서 혼자 막 춤 출 때
          아주 머리가 잘 돌아갈 때
          말도 안돼~!공부 안 했는데 백점

          오! 누군가 보고 싶을 때
          그대가 내 맘 알아줄 때
          모두 상상만 해도 정말 기분 좋은
          Happy Happy Things

          누구나 할 수 있는 일
          행복한 삶을 원한다면
          모두 상상만 해도 정말 기분 좋아
          잊지 말고 Happy Happy Things`,
                genres: "인디",
                image: "https://image.bugsm.co.kr/album/images/original/3275/327530.jpg?version=undefined",
                category: "웃음",
                detail: "행복;웃음;긍정",
                link: "https://music.bugs.co.kr/track/2636436?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 62,
                title: "행복",
                director: "H.O.T",
                year: "1997-7-5",
                summary:
                    `한번도 난 너를 잊어본적 없어 오직그대만을 생각했는걸
          그런 너는 뭐야 날 잊었던 거야
          지금 내 눈에선 눈물이 흘러 배신감 느껴

          널 찾아갈까 생각했어 난 난 잘 모르겠어
          이 세상이 돌고있는 지금 내 눈에는 너밖에 뭐지
          할말이 없어 갈 수도 없어 눈물도 없어 느낌도 없어
          네 앞에 서 있는 날 바라봐 이렇게 널 위해 살아있는 날

          약속된 시간이 왔어요 그대 앞에 있어요 두려움에 울고 있지만
          눈물을 닦아주었어요 그때 내 손잡았죠
          일어날거야 함께 해준 그대에게 행복을

          눈감고 그댈 그려요 맘속 그댈 찾았죠 나를 밝혀주는 빛이 보여
          영원한 행복을 놓칠 순 없죠 그대 나 보이나요 나를 불러줘요
          그대곁에 있을꺼야 너를 사랑해 함께해요 그대와 영원히


          한번도 난 너를(너를) 잊어 본적 없어(없어)
          오직 그대만을 생각했는걸(몰라 몰라)
          그런 너는 뭐야(뭐야) 날 잊었던 거야(거야)
          지금 내 눈에선 눈물이 흘러 배신감 느껴

          약속된 시간이 왔어요 그대 앞에 있어요 두려움에 울고 있지만
          눈물을 닦아주었어요 그때 내 손잡았죠
          일어날거야 함께 해준 그대에게 행복을

          눈감고 그댈 그려요 맘속 그댈 찾았죠 나를 밝혀주는 빛이 보여
          영원한 행복을 놓칠 순 없죠 그대 나 보이나요 나를 불러줘요
          그대곁에 있을꺼야 너를 사랑해
          함께해요 그대와 영원히


          눈감고 그댈 그려요 맘속 그댈 찾았죠 나를 밝혀주는 빛이 보여
          영원한 행복을 놓칠 순 없죠 그대 나 보이나요 나를 불러줘요
          언제라도 그대 마음을 열어 보아요 앞엔 내가 있어요
          나를 불러줘요 그대 곁에 있을꺼야 너를 사랑해
          함께해요 그대와 영원히`,
                genres: "댄스;팝",
                image: "https://image.bugsm.co.kr/album/images/original/52/5284.jpg?version=undefined",
                category: "웃음",
                detail: "행복;웃음",
                link: "https://music.bugs.co.kr/track/91264?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 63,
                title: "Happy",
                director: "태연",
                year: "2020-5-4",
                summary:
                    `Happy La La La
          Happy La La La
          Happy La La La
          Happy Happy Happy
          계절이 번져와 두드린 꿈일까
          그대는 내 귓가에 달콤하게
          Tell me baby baby
          손꼽아 왔던 밤 널 상상할 때마다
          아무도 모르게 미소를 짓곤 해
          Thinking about you lately
          수없이 기다린 우리의 이 밤이
          일 년을 돌고 돌아 내게 와준 기적 같아
          오늘 밤 난 Happy 포근한 이 꿈
          얼어있던 계절은
          너와 내 온기에 녹아들고
          그대 품에 안겨 꿈꾸는 멋진 밤
          오랜 시간 속 둘만의 소원을 속삭여 봐
          함께 있어 난 Happy 영원할 이 꿈
          Happy La La La
          Happy La La La
          Happy La La La
          Happy Happy Happy
          끝없는 얘기들 멈추고픈 순간들
          아쉬워질 듯한 숨결마다
          Kiss me baby baby
          너만의 온도로 빈틈없이 날 감싸 줘
          이 밤 가득한 떨림이
          잠들 때까지 Oh I'm crazy
          밤새워 속삭인 눈부신 설렘이
          그 어떤 장면보다 잊지 못할 선물 같아
          오늘 밤 난 Happy 포근한 이 꿈
          얼어있던 계절은
          너와 내 온기에 녹아들고
          그대 품에 안겨 꿈꾸는 멋진 밤
          오랜 시간 속 둘만의 소원을 속삭여 봐
          함께 있어 난 Happy 영원할 이 꿈
          계절이 지나 모든 게 흘러도
          변치 않을 이 순간 Promise you
          이대로 오늘의 행복한 기억은 녹지 않게
          널 보면 난 Happy 깨기 싫은 꿈
          따스한 이 사랑은
          추억의 한 편에 쌓여가고
          그대 품에 안겨 잠이 들 깊은 밤
          오랜 시간 속 둘만의 소원을 속삭여 봐
          함께 있어 난 Happy 영원할 이 꿈
          Happy La La La
          Happy La La La
          Happy La La La
          Happy Happy Happy`,
                genres: "알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/203225/20322552.jpg?version=undefined",
                category: "웃음",
                detail: "행복;긍정",
                link: "https://music.bugs.co.kr/track/31903378?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 64,
                title: "나른한 오후에 취해",
                director: "러브앤팝",
                year: "2005-11-17",
                summary:
                    `참 따스한 햇살이 담긴
          투명한 창문너머에
          새들은 마냥 즐거워
          간지럽히듯 꿈을 꾸는 듯
          나른한 오후에 취해

          넌 오늘도 창가에 앉아
          아무런 표정도 없이
          또 다른 생각에 잠겨
          외로운 눈엔 하얀 구름이
          살며시 녹아 내리네

          아 꿈결처럼
          오래 전 그 노래가 들려와
          넌 관심없는듯 또 잠이 드네
          나른한 오후에 취해

          아 꿈결처럼
          오래 전 그 노래가 들려와
          넌 관심없는듯 또 잠이 드네
          나른한 오후에 취해

          참 따스한 햇살이 담긴
          투명한 창문너머에
          새들은 마냥 즐거워
          간지럽히듯 꿈을 꾸는 듯
          나른한 오후에 취해`,
                genres: "인디;일렉트로닉",
                image: "https://image.bugsm.co.kr/album/images/original/80134/8013485.jpg?version=undefined",
                category: "웃음",
                detail: "행복;긍정;나른",
                link: "https://music.bugs.co.kr/track/80152301?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 65,
                title: "레몬 트리",
                director: "박혜경",
                year: "2013-4-16",
                summary:
                    `또 아침이 오는 그 소리에
          난 놀란 듯이 바빠져야 하겠죠
          또 무언갈 위해서 걸어가고
          답답한 버스 창에 기대있죠
          더 새로울 게 없는 하루겠죠
          난 쉬고 싶고 자고 싶고
          참 오래된 친구도 보고 싶죠
          그 흔해 빠지던 남자도
          나 오늘따라 안 보이는거죠
          막 울고 싶어지면 밤이 오죠
          더 새롭게 더 예쁘게
          나의 맘을 상큼하게 할거야
          내 꿈에 숨겨온 노란 빛깔 Lemon Tree
          나 약속할게 언제나
          기분 좋은 상쾌함에 웃을래
          환하게 반기는 노란 빛깔 Lemon Tree

          또 아침이 오면 노래를 해
          똑같은 거릴 걸어가도
          난 즐거움에 빠져 버리는
          그 신비함에 놀라 웃었죠
          내 웃음소리 퍼져 향기롭죠
          웃어봐요 모두 즐겁게
          노래해요 싱그러운 나만의 Lemon Tree
          사랑이 많아서 힘든가요
          웃고 있는 얼굴이 아픈가요
          오 환한 미소 내가 줄게요
          더 새롭게 더 예쁘게
          나의 맘을 상큼하게 할거야
          내 꿈에 숨겨온 노란 빛깔 Lemon Tree
          나 약속할게 언제나
          기분 좋은 상쾌함에 웃을래
          환하게 반기는 노란 빛깔 Lemon Tree
          오 조금만 더욱더 새롭게 더 예쁘게
          온 세상을 상큼하게 할거야
          가슴에 가득히 내 꿈에 숨겨온
          널 위해 가꿔온 노란 빛깔 Lemon Tree`,
                genres: "댄스;팝;발라드",
                image: "https://image.bugsm.co.kr/album/images/original/3654/365444.jpg?version=undefined",
                category: "웃음",
                detail: "편안함;힐링;상큼",
                link: "https://music.bugs.co.kr/track/2949881?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 66,
                title: "Sunny Days",
                director: "정유진",
                year: "2021-12-5",
                summary:
                    `암만 애를 써도 달라 지지 않던
          나의 허전함이 Oh
          함께 했던 시간 지난 후에는
          웃음이 보여 행복이 넘쳐
          오늘도 똑같은 하루가 흘러
          모든 게 변함없어 어제처럼
          너에게 다가갈 용기가 없어
          지웠다 썼다, 망설일 때
          따르릉 전화가 나에게 걸려와
          나를 위해 비워둔 자리가 있대
          자리를 박차고 너에게 달려가
          지금이 아니면 기회가 없어
          암만 애를 써도 달라 지지 않던
          나의 허전함이 Oh
          함께 했던 시간 지난 후에는
          웃음이 보여 행복이 넘쳐나
          Oh ohohoh
          너때매 Sunny Days
          아무도 모른대도 괜찮아 정말
          어쩌면 모두 나를 위한 거니까
          그대의 웃는 모습 하나로
          너무 고마워 행복해져
          따르릉 전화를 나에게 걸어봐
          너를 위해 비워둔 자리가 있어
          자리를 박차고 나에게 달려와
          지금이 아니면 기회가 없어
          암만 애를 써도 달라 지지 않던
          나의 허전함이 Oh
          함께 했던 시간 지난 후에는
          웃음이 보여 행복이 넘쳐
          암만 애를 써도 달라 지지 않던
          나의 허전함이 Oh
          함께 했던 시간 지난 후에는
          웃음이 보여 행복이 넘쳐나
              (One Three Six Five)
          오늘도 Sunny day
              (One Three Six Five)
          너때매 Sunny days
              (One Three Six Five)
          매일이 Sunny days
              (One Three Six Five)
          Oh~Sunny days`,
                genres: "댄스;발랄",
                image: "https://image.bugsm.co.kr/album/images/original/40684/4068486.jpg?version=undefined",
                category: "웃음",
                detail: "행복;긍정;친구",
                link: "https://music.bugs.co.kr/track/6138681?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 67,
                title: "기분 좋은 날",
                director: "알렉스",
                year: "2008-6-11",
                summary:
                    `햇살이 가득 그댈 향한 가벼운 발걸음
          콧노래 부르며
          쇼인도에 비친 내 모습을
          한번 점검해시간은 충분해

          오늘 그대와 어떤 얘기를 나눌까 어딜 가볼까
          저기에 그녀가 보이네요
          오늘은 정말 너무 기분 좋은날

          미소가 가득 나도 모르게 웃음이나
          그녈 생각하면
          지금 내 모습 그녀 맘에 들지 않을까
          자꾸 신경쓰여

          오늘 그대와 팔짱을 끼면 어떨까
          손잡아 볼까 저기에 그녀가 보이네요
          오늘은 정말 너무 기분 좋은날

          하늘 위를 날으는 기분이 이런걸까
          그대 너무 새콤달콤
          내 마음은 두근두근 기분이 좋아
          분홍빛 장미를 닮은
          아름다운 그녀의 모습 오늘은 어떨까
          상상만으로 터져버릴듯한 이 기분 어쩌면 좋아

          오늘 그대와 어떤 얘기를 나눌까 어딜 가볼까
          저기에 그녀가 보이네요
          나를 향해 손을 흔드네요
          눈 앞에 그녀가 보이네요

          오늘은 정말 너무 기분 좋은날`,
                genres: "발라드;팝",
                image: "https://image.bugsm.co.kr/album/images/original/1567/156755.jpg?version=undefined",
                category: "웃음",
                detail: "행복;발랄",
                link: "https://music.bugs.co.kr/track/1554474?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 68,
                title: "커피 한잔 어때?(feat.요조)",
                director: "HUS(허밍어반스테레오)",
                year: "2007-7-24",
                summary:
                    `난 말야 크림 가득 담겨있는
          커피 한 잔과 너만 곁에 둘래
          나른한 날엔 더욱 생각이 드는
          그런 나의 위로이니까
          나의 위로이니까
          햇살 가득 몸에 받아 손을 뻗으면
          하늘위로 나는 느낌도 들 테지
          네가 이런 내 곁에서
          입맞추면 더 좋을 거야
          머리 속 하얗게 지워져도 난
          좋을 거야
          그냥 밤을 세울 수도 있을 거야
          볼그라진 네 뺨 아름다워
          나와 행복해 질 거야

          라라라라라라라라라
          라라라라라라라라라
          스파라밥 스파라밥 스파라밥
          스파라밥 스파라밥 스파파라
          스파라밥 스파라밥 스파라밥
          스파라밥 스파라밥 스파
          쇼꼬라 캬라멜은
          너보다도 달콤하지만
          너만 필요해
          나른한 날엔 더욱 생각이 드는
          그런 나의 위로이니까
          나의 위로이니까
          햇살 가득 몸에 받아 손을 뻗으면
          하늘위로 나는 느낌도 들테지
          네가 이런 내 곁에서
          입 맞추면 더 좋을 거야
          머리 속 하얗게 지워져도 난
          좋을 거야
          그냥 밤을 세울 수도 있을 거야
          볼그라진 네 뺨 아름다워
          나와 행복해 질 거야
          우린 맺어질 수 밖에 없는 거야
          처음부터 우린 하나니까
          나와 행복해 질 거야
          나와 커피한잔 어때`,
                genres: "발라드;팝",
                image: "https://image.bugsm.co.kr/album/images/original/80287/8028730.jpg?version=undefined",
                category: "웃음",
                detail: "행복;발랄;여유",
                link: "https://music.bugs.co.kr/track/80349686?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 69,
                title: "상상더하기",
                director: "라붐",
                year: "2016-4-6",
                summary:
                    `1, 2 Come On R U Ready
          3, 4 Do It I'm Ready
          5, 6 Baby Are You Ready

          지금 나와 어디든 가자
          지루한 하루 여기까지만 All Stop
          작은 가방 운동화 챙겨
          자 더 크게 Radio를 높이고

          코발트블루 물결 눈부신 바다
          달빛 가득 묻은 작은 섬
          야경이 눈부신 도시는 어때 ?
              함께라면 어디든 좋아
          난 너와 나 그곳으로

          떠나는 거야
          상상에 상상에 상상을 더해서
          어머 깜짝야
          눈부셔 눈부셔 눈부셔 이건 뭐
          Oh Hello New World
          두 손 모아 소리치면
          푸른 하늘이 내게로 와

          날아가볼래
          상상의 상상의 미래로 가볼까
          바람을 타고
          새로운 눈빛에 가슴이 붐 붐 붐
          Oh 발견했어 우리들만의 Paradise

          흑백영화 같은 하루에
          레몬 터지듯 짜릿함이 필요해
          지금 당장 널 데려갈게
          꿈꿔오던 사진 속 그곳으로

          민트그린빛 바람 가득한 숲 속
          달콤한 향기의 칵테일
          지도를 벗어나 Ticket To The Dream
          함께라면 어디든 좋아
          난 너와 나 그곳으로

          떠나는 거야
          상상에 상상에 상상을 더해서
          어머 깜짝야
          눈부셔 눈부셔 눈부셔 이건 뭐
          Oh Hello New World
          두 손 모아 소리치면
          푸른 하늘이 내게로 와

          날아가볼래
          상상의 상상의 미래로 가볼까
          바람을 타고
          새로운 눈빛에 가슴이 붐 붐 붐
          Oh 발견했어 우리들만의 Paradise

          너와 나의 비밀스런 풍경들
          언제라도 다시 와 주겠니
          은하수 아래 밤새 부른 노래
          영원히 잊지 않을 거야

          이 시간 속에 영원히
          네 품에 안기고 싶은걸
          단 둘이 이순간 잠들고 싶은걸
          지도엔 없는 이 곳을 꼭 기억해줘
          우리들만의 Paradise

          상상에 상상에 상상을 더해서
          어머 깜짝야
          눈부셔 눈부셔 눈부셔 이건 뭐
          oh Hello New World
          처음 만난 세상 속에
          나의 가슴이 라 라 라 라

          날아가볼래
          상상의 상상의 미래로 가볼까
          바람을 타고
          새로운 눈빛에 가슴이 붐 붐 붐
          Oh 발견했어 우리 들만의 Paradise

          1, 2 Come On R U Ready
          3, 4 Do It I'm Ready
          5, 6 Baby Are You Ready`,
                genres: "댄스;팝",
                image: "https://image.bugsm.co.kr/album/images/original/200293/20029341.jpg?version=undefined",
                category: "웃음",
                detail: "행복;발랄",
                link: "https://music.bugs.co.kr/track/30210331?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 70,
                title: "HAPPY TOGETHER",
                director: "박효신",
                year: "2014-11-24",
                summary:
                    `세상을 몰랐었던
          마냥 웃기만 했던

          푸른 하늘 닮은 꿈을 가진
          키 작은 꼬마가 어느새
          담을 넘는다

          언덕위로 좁게 트인(그 작은 길 따라)
          어디로 가는 걸까 ?

              작은 돌에 그만 넘어져도
          일어나 다시 그 길 따라 걸어보렴
          좀 더디면 어때 ? 어디든 좋아

          한걸음씩 so happy together
          너의 손을 잡고서
          너와 발을 맞추며 가자

          we are dancing together
          서두르진 마
          조금 익숙한 멜로디를 불러봐

          루루루 루루루
          너를 위한 멜로디
          루루루 루루루

          누구도 상상 못할
          내일이 또 오겠지 ?

              소나기에 자라난 무지개를
          빌려다 포켓 속에 가득 꼭 넣어두렴
          주문을 외워 it’s gonna be alright!

          한걸음씩 so happy together
          너의 손을 잡고서
          너와 발을 맞추며 가자

          we are dancing together
          서두르진 마
          이제 익숙한 멜로디를 불러봐

          루루루 루루루
          너를 위한 멜로디
          루루루 루루루

          하늘아래 누워 잠깐 쉬어가도 돼
          눈을 감아도 보이는

          너를 닮은 별 찾아
          고맙다는 인사를 건넨다
          그게 바로 너야

          한걸음 더 so happy together
          다시 밝아온 아침
          머나먼 여행을 떠나자

          we belong together
          혼자가 아냐
          영원히 너를 위해 불러줄 이 멜로디

          루루루 루루루
          우릴 위한 멜로디
          루루루 루루루

          지금 내 앞에 있는
          내가 찾던 세상`,
                genres: "댄스;팝;발라드",
                image: "https://image.bugsm.co.kr/album/images/original/4654/465480.jpg?version=undefined",
                category: "웃음",
                detail: "행복;희망",
                link: "https://music.bugs.co.kr/track/3776965?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 71,
                title: "하하하쏭",
                director: "자우림",
                year: "2004-10-16",
                summary:
                    `모든 게 그대를 우울하게 만드는 날이면
          이 노래를 불러 보게
          아직은 가슴에 불꽃이 남은 그대여
          지지말고 싸워주게

          라라라라 후회는 저 하늘에 날리고
          라라라라라라라라, 친구여 새롭게 태어나게

          비굴한 인생은 그대에게는 어울리지 않는다네
          당당히 고개를 들게, 친구여 지금이 시작이라네

          라라라라, 마음에 가득히 꽃 피우고
          라라라라라라라, 친구여, 마음껏 웃어보게
          하하하하하 하하하하하
          하하하하하 하하하하하

          빛나는 그대 두 눈동자속에 푸른 바다가 있네
          파도의 노래를 듣게, 친구여 마음이 부르는 그 노래

          안녕, 안녕, 안녕히, 다시는 울지 않아
          라라라라라라라, 내일은 새롭게 태어나리
          하하하하하 하하하하하
          하하하하하 하하하하하

          사람들의 시선에 맘 쓸것 하나 없네
          용기 없는 자들의 비겁한 눈초리에

          랄랄랄라, 친구여 마음에 꽃 피우면
          라라라라라라라라, 내일이 찬란히 빛나고.
              랄랄랄라, 친구여.가슴을 열어두게
          라라라라라라라라, 태양이 그 가슴에서 빛나게.

              하하하하하.하하하하하.하하하하하.`,
                genres: "락",
                image: "https://image.bugsm.co.kr/album/images/original/80008/8000806.jpg?version=undefined",
                category: "웃음",
                detail: "행복;위로;발랄",
                link: "https://music.bugs.co.kr/track/80012453?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 72,
                title: "Happy(Gru's Theme From Despicable Me 2)",
                director: "Pharrell",
                year: "2013-12-26",
                summary:
                    `It might seem crazy what I'm 'bout to say
          Sunshine she's here, you can take a break
          Mama hot air balloon that could go to space
          With the air like I don't care, baby, by the way

          Because I'm happy
          Clap along if you feel like a room without a roof
          Because I'm happy
          Clap along if you feel like happiness is the truth
          Because I'm happy
          Clap along if you know what happiness is to you
          Because I'm happy
          Clap along if you feel like that's what you want to do

          Here comes bad news, talkin' this and that
          But give me all you've got, and don't hold it back
          Well, I should probably warn you, I'll be just fine
          No offense to you, don't waste your time, here's why

          Because I'm happy
          Clap along if you feel like a room without a roof
          Because I'm happy
          Clap along if you feel like happiness is the truth
          Because I'm happy
          Clap along if you know what happiness is to you
          Because I'm happy
          Clap along if you feel like that's what you want to do

          Bring me down can't nothing
          Bring me down your love is too high
          Bring me down can't nothing
          Bring me down, I said(let me tell you now)
          Bring me down can't nothing
          Bring me down your love is too high
          Bring me down can't nothing
          Bring me down, I said

          Because I'm happy
          Clap along if you feel like a room without a roof
          Because I'm happy
          Clap along if you feel like happiness is the truth
          Because I'm happy
          Clap along if you know what happiness is to you
          Because I'm happy
          Clap along if you feel like that's what you want to do

          Because I'm happy
          Clap along if you feel like a room without a roof
          Because I'm happy
          Clap along if you feel like happiness is the truth
          Because I'm happy
          Clap along if you know what happiness is to you
          Because I'm happy
          Clap along if you feel like that's what you want to do

          Bring me down can't nothing
          Bring me down your love is too high
          Bring me down can't nothing
          Bring me down, I said(let me tell you now)

          Because I'm happy
          Clap along if you feel like a room without a roof
          Because I'm happy
          Clap along if you feel like happiness is the truth
          Because I'm happy
          Clap along if you know what happiness is to you
          Because I'm happy
          Clap along if you feel like that's what you want to do

          Because I'm happy
          Clap along if you feel like a room without a roof
          Because I'm happy
          Clap along if you feel like happiness is the truth
          Because I'm happy
          Clap along if you know what happiness is to you
          Because I'm happy
          Clap along if you feel like that's what you want to do`,
                genres: "알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/4043/404353.jpg?version=undefined",
                category: "웃음",
                detail: "행복;발랄",
                link: "https://music.bugs.co.kr/track/3327213?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 73,
                title: "Festival(인생은 아름다워)",
                director: "엄정화",
                year: "1999-6-17",
                summary:
                    `이제는 웃는거야 Smile again
          행복한 순간이야 Happy day
          움츠린 어깨를 펴고 이 세상속에
          힘든 일 모두 지워버려
          슬픔은 잊는거야 Never cry
          뜨거운 태양아래 Sunny day
          언제나 좋은일들만 가득하기를 바라면돼
          항상 똑같은 생활속에 지쳐가지만
          나를 누르는 힘든 일에 쓰러지지만
          고개를 숙일건 없어
          그 속에 행복있는 걸 찾으면돼
          나의 주의를 둘러봐 힘겹다 느낄때
          맑은 어린아이의 모습을 미솔 닮아봐
          이제는 웃는거야 Smile again
          행복한 순간이야 Happy day
          움츠린 어깨를 펴고 이 세상속에
          힘든 일 모두 지워버려
          슬픔은 잊는거야 Never cry
          뜨거운 태양아래 Sunny day
          언제나 좋은일들만 가득하기를 바라면돼
          아주 가끔은 사랑있어 즐겁게 웃고
          또 어떤날은 사랑으로 울기도 하고
          쉬운 건 하나도 없어
          그 속의 기쁨 느끼면 그걸로 돼
          조금 낮추어 돌아 봐 삶이 무거울땐
          아무 말없이 뛰고만 있는 많은 사람들
          이제는 웃는거야 Smile again
          행복한 순간이야 Happy day
          움츠린 어깨를 펴고 이 세상속에
          힘든 일 모두 지워버려
          슬픔은 잊는거야 Never cry
          뜨거운 태양아래 Sunny day
          언제나 좋은 일들만 가득하기를 바라면돼
          라랄라 라랄랄라 Smile again
          라랄라 라랄랄라 Happy day
          커다란 하늘 처럼만 더 크게 웃고
          더 크게 생각하는거야
          눈물은 잊는거야 Never cry
          푸르른 햇살처럼 Sunshine day
          언제나 좋은 일들만 가득하기를 기도할게`,
                genres: "팝;댄스;발라드",
                image: "https://image.bugsm.co.kr/album/images/original/43/4314.jpg?version=undefined",
                category: "웃음",
                detail: "행복;발랄",
                link: "https://music.bugs.co.kr/track/83471?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 74,
                title: "공원여행 (Vocal By 현민)",
                director: "페퍼톤스",
                year: "2009-12-17",
                summary:
                    `학교 앞 정류장을 지나
          작은 횡단보도를 건너면
          오른쪽 골목이 보이지 ?
              그 길로 쭉 들어가 봐

          살짝 젖어있는 길 위로
          조금 가벼워진 발걸음
          휴일 아침 맑은 공기가
          많은 것을 새롭게 할거야

          하낫! 둘! 셋! 넷! 씩씩하게
          더 밝게 더 경쾌하게
          둘! 둘! 셋! 넷! 튼튼하게
          아주 조금 더 기운차게

          널 따라오는 시원한 바람
          길가에 가득한 아카시아
          아무도 돌보지 않지만
          건강하게 흔들리고 있어

          어느새 너의 앞엔
          작은 비밀의 공원
          낡은 벤치에 앉아 눈을 감고
          마음 속으로 다섯을 센 뒤
          고개를 들어 눈을 뜰 때
          넌 최고의 오후를 만나게 될거야

          하낫! 둘! 셋! 넷! 씩씩하게
          더 밝게 더 경쾌하게
          둘! 둘! 셋! 넷! 튼튼하게
          아주 조금 더 기운차게

          하낫! 둘! 셋! 넷! 씩씩하게
          아무 걱정 없는 것처럼
          둘! 둘! 셋! 넷! 튼튼하게
          아주 조금 요란스럽게

          어때 기분이 좋아졌지 ?
          한결 마음이 후련해졌지 ?
          여기 숨찬 내가 보이니 ?
          너에게로 달려가고 있어

          거봐 너 아직 그런 미소
          지을 수 있잖아`,
                genres: "인디;일렉트로닉;팝",
                image: "https://image.bugsm.co.kr/album/images/original/2114/211404.jpg?version=undefined",
                category: "웃음",
                detail: "행복;발랄;상큼;긍정",
                link: "https://music.bugs.co.kr/track/1873319?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 75,
                title: "Happily Ever After",
                director: "David Choi",
                year: "2011-12-9",
                summary:
                    `I've been searching all my life,
          someone just like you.
          Don't know where I was goin' and my legs got time,
          but I think my strength has renewed.

          The way you smile is a mystery,
          Kiss me come back your the one for me.
          They said you know when you found the one,
          I find it hard to believe.

          I'm done looking around, I'm driving outta this town.
          I'm taking you away to a place we'll stay.
          Foreeeever, happily ever after
          I'm done looking around, I'm driving outta this town.
          I'm taking you away to a place we'll stay.
          Foreeeever, happily ever after

          Do you know how, lonely, my life has been.
          And to think that I'd never find someone,
          that true love could never exist.

          But life is hard as it is.
          You threw me a common twist
          You change my heart, you change my world.
          I love that you exist.yeahh

          I'm done looking around, I'm driving outta this town.
          I'm taking you away to a place we'll stay.
          Foreeeever, happily ever after
          I'm done looking around, I'm driving outta this town.
          I'm taking you away to a place we'll stay.
          Foreeeever, happily ever after, ooh ooh ooh oooh ooh

          I'm done looking around, I'm driving outta this town.
          I'm taking you away to a place we'll stay.
          Foreeeever(ooh oh oh), happily ever after

          ooh ooh oooh after
          ooh ooh ooooh

          woah woah wooah woahhh.`,
                genres: "락;팝",
                image: "https://image.bugsm.co.kr/album/images/original/3152/315284.jpg?version=undefined",
                category: "웃음",
                detail: "행복;발랄;긍정",
                link: "https://music.bugs.co.kr/track/2523939?wl_ref=list_tr_08_search",
                type: "music"
            },
            //눈물
            {
                id: 76,
                title: "비와 당신(드라마 '슬기로운 의사생활 시즌2' OST)",
                director: "이무진",
                year: "2021-6-18",
                summary:
                    `이젠 당신이 그립지 않죠
          보고 싶은 마음도 없죠
          사랑한 것도 잊혀 가네요
          조용하게
          알 수 없는 건 그런 내 맘이
          비가 오면 눈물이 나요
          아주 오래 전 당신 떠나던
          그날처럼
          이젠 괜찮은데 사랑 따윈 저버렸는데
          바보 같은 난 눈물이 날까
          아련해지는 빛 바랜 추억
          그 얼마나 사무친 건지
          미운 당신을 아직도 나는
          그리워하네
          이젠 괜찮은데 사랑 따윈 저버렸는데
          바보 같은 난 눈물이 날까
          다신 안 올 텐데 잊지 못한 내가 싫은데
          언제까지나 맘은 아플까`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/204032/20403298.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;눈물;그리움",
                link: "https://music.bugs.co.kr/track/32260966?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 77,
                title: "Gloomy Sunday",
                director: "자우림",
                year: "2005-9-29",
                summary:
                    `Sunday is gloomy
          My hours are slumberless
          Dearest the shadows, I live with are numberless
          Little white flowers
          Will never awaken you
          Not where the black coach, Of sorrow has taken you
          Angels have no thought, Of ever returning you
          Would they be angry, If I thought of joining you
          Gloomy Sunday

          Sunday is gloomy
          With shadows I spend it all
          My heart and I have decided, To end it all
          Soon there'll be candles and prayers
          That are said I know, But let them not weep
          Let them know, That I'm glad to go
          Death is no dream
          For in death I'm caressing you
          With the last breath of my soul
          I'll be blessing you
          Gloomy Sunday

          Dreaming, I was only dreaming
          I wake and I find you asleep
          In the deep of my heart dear
          Darling I hope
          That my dream never haunted you
          My heart is telling you, How much I wanted you
          Gloomy Sunday`,
                genres: "락;메탈",
                image: "https://image.bugsm.co.kr/album/images/original/80113/8011347.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;어두움",
                link: "https://music.bugs.co.kr/track/80122102?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 78,
                title: "가족사진",
                director: "김진호",
                year: "2013-2-14",
                summary:
                    `바쁘게 살아 온 당신의 젊음에
          의미를 더해줄 아이가 생기고
          그 날에 찍었던 가족 사진 속에
          설레는 웃음은 빛바래 가지만

          어른이 되어서 현실에 던져진
          나는 철이 없는 아들이 되어서
          이 곳 저 곳에서 깨지고 또 일어서다
          외로운 어느 날 꺼내본 사진 속 아빠를 닮아있네

          내 젊음 어느새 기울어 갈 때쯤
          그제야 보이는 당신의 날들이
          가족사진 속에 미소 띈 젊은 아가씨의
          꽃피던 시절은 나에게 다시 돌아와서

          나를 꽃피우기 위해 거름이 되어버렸던
          그을린 그 시간들을 내가 깨끗이 모아서
          당신의 웃음꽃 피우길
          피우길
          피우길
          피우길
          피우길`,
                genres: "락;메탈",
                image: "https://image.bugsm.co.kr/album/images/original/80113/8011347.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;눈물;가족",
                link: "https://music.bugs.co.kr/track/2890455?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 79,
                title: "숨",
                director: "김진호",
                year: "2016-10-3",
                summary:
                    `오늘 하루 쉴 숨이
          오늘 하루 쉴 곳이
          오늘만큼 이렇게 또 한번 살아가

          침대 밑에 놓아둔
          지난밤에 꾼 꿈이
          지친 맘을 덮으며 눈을 감는다 괜찮아

          남들과는 조금은 다른 모양 속에
          나 홀로 잠들어
          다시 오는 아침에 눈을 뜨면 웃고프다

          오늘 같은 밤
          이대로 머물러도 될 꿈이라면
          바랄 수 없는 걸 바라도 된다면
          두렵지 않다면 너처럼

          오늘 같은 날
          마른 줄 알았던 오래된 눈물이 흐르면
          잠들지 않는 내 작은 가슴이 숨을 쉰다

          끝도 없이 먼 하늘
          날아가는 새처럼
          뒤돌아 보지 않을래
          이 길 너머 어딘가 봄이
          힘없이 멈춰있던
          세상에 비가 내리고
          다시 자라난 오늘
          그 하루를 살아

          오늘 같은 밤
          이대로 머물러도 될 꿈이라면
          바랄 수 없는 걸 바라도 된다면
          두렵지 않다면 너처럼

          오늘 같은 날
          마른 줄 알았던 오래된 눈물이 흐르면
          잠들지 않는 이 어린 가슴이 숨을 쉰다
          고단했던 내 하루가 숨을 쉰다`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/200580/20058051.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;쓸쓸",
                link: "https://music.bugs.co.kr/track/30404027?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 80,
                title: "그리워 그리워",
                director: "노을",
                year: "2011-10-26",
                summary:
                    `늦은 저녁 하루를 보내고
          찬바람에 창문을 닫으니
          아득하게 조용한 방에서

          아주
          작은 조명하나를 켜놓고
          어둑해진 밖을 바라보니
          문득 너무도 슬퍼지네

          매일 듣는 노래 LIST 엔
          하나같이 다 우리얘기뿐
          이별은 모두 다 같으니까

          다시
          조심스럽게 행복했던 날
          아름답던 너를 그려보니
          나도 모르게 눈물이 나네

          그리워, 그리워 니가 너무나 그리워서
          보고 싶어서
          잊고 싶지 않아서 잊을 수가 없어서
          못해준 게 너무 많아서
          더 그리워

          너무나도 사랑했었기에
          아름답게 우린 헤어졌어
          현실 안에 서로를 위해서

          알아
          어차피 우린 안될걸
          누구보다 잘 알지만
          왜 이렇게도 눈물이 나는 건지

          그리워, 그리워 니가 너무나 그리워서
          보고 싶어서
          잊고 싶지 않아서 잊을 수가 없어서
          못해준 게 너무 많아서

          그리워, 그리워 니가 너무나 그리워서
          보고 싶어서
          정말 널 잊고 싶지 않아서
          널 다시 붙잡고 싶어서
          지금 너무나 난 니가 그리워`,
                genres: "발라드;알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/3108/310802.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;그리움;연인",
                link: "https://music.bugs.co.kr/track/2481114?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 81,
                title: "푸르른 계절도 내겐 의미 없어요(드라마 '지금, 헤어지는 중입니다' OST)",
                director: "정승환",
                year: "2021-11-21",
                summary:
                    `한동안 잘 지냈어요
          초조한 것도 없었죠
          그대와 듣던 노래들
          왠지 더 슬프게 들려
          음악도 듣지 않아요

          걷다가 숨이 막히면
          한숨을 크게 내쉬고 멍하니 하늘만 봐요
          이미 까맣게 타버렸던
          내 마음은 아물지 않아
          그대가 보고 싶어요

          푸르른 계절도 따스한 바람도
          아무런 의미가 없어요
          그대가 없어서
          머리를 비우려고
          무작정 거리를 헤매다 보면
          나도 모르게 그대 집 앞에
          와 있네요

          전화를 걸어볼까요
          떨리는 손으로 그대 이름을 찾아보다가
          다시 내려놓길 반복해
          어떤 말을 해야 할런지
          생각도 나질 않아서

          푸르른 계절도 따스한 바람도
          아무런 의미가 없어요
          그대가 없어서
          머리를 비우려고
          무작정 거리를 헤매다 보면
          나도 모르게 그대 집 앞에
          와 있네요

          처음엔 생각보다 담담했는데
          헤어짐보다 그리움이 아파
          버티는 하루뿐이에요
          지날수록 진해져요
          사랑은 가고 왜 이별만 남아요

          정말 바보 같은 내가
          아직도 이렇게 살아요
          보내지 못하고
          지우지 못했어요
          가슴 한쪽이 아파만 오네요
          다시 돌아서 가는 걸음이
          무거워요`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/40676/4067675.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;그리움;연인",
                link: "https://music.bugs.co.kr/track/6136523?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 82,
                title: "Fix You",
                director: "Coldplay",
                year: "2005-6-8",
                summary:
                    `When you try your best but you don't succeed
          When you get what you want but not what you need
          When you feel so tired but you can't sleep
          Stuck in reverse

          And the tears come streaming down your face
          When you lose something you can't replace
          When you love someone but it goes to waste
          Could it be worse ?

              Lights will guide you home
          And ignite your bones
          And I will try to fix you

          And high up above or down below
          When you're too in love to let it go
          But if you never try you'll never know
          Just what you're worth

          Lights will guide you home
          And ignite your bones
          And I will try to fix you

          Tears stream down your face
          when you lose something you cannot replace
          Tears stream down your face
          And I

          Tears stream down your face
          I promise you I will learn from my mistakes
          Tears stream down your face
          And I

          Lights will guide you home
          And ignite your bones
          And I will try to fix you`,
                genres: "락",
                image: "https://image.bugsm.co.kr/album/images/original/80089/8008959.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;치유;연인;가족",
                link: "https://music.bugs.co.kr/track/80098422?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 83,
                title: "I'm ok",
                director: "Call me karizma",
                year: "2019-7-26",
                summary:
                    `I haven't smiled very much today
          But I'm ok I'm ok
          All these tears are diamonds on my face
          And I'm ok I'm ok
          I think you were the
          First person who
          Gave me a shot
          I want you to
          Know that it meant
          A fuckin' liar yeah
          You listened when
          I needed you
          That sunday night
          You took that blade
          Threw it away
          And gave me life
          And I haven't smiled very much today
          But I'm ok I'm ok
          All these tears are diamonds on my face
          And I'm ok I'm ok
          I think you were the
          First person who
          Broke my damn heart
          I want you to
          Know I was thrown
          Back in the dark yeah
          I listened when
          You needed me
          That christmas night
          But you ran that blade
          Through all your veins
          Just one more time
          But I wasn't there for
          You in that bedroom
          When you decided
          The world didn't get you
          I heard the sirens
          I saw the message
          I'll keep your night stand
          The way that you left it yeah
          I haven't smiled very much today
          But I'm ok I'm ok
          All these tears are diamonds on my face
          And I'm ok I'm ok
              (Yeah yeah I'm ok yeah)
                  (Yeah I'm ok)
          I knew you were the
          Last person who
          I'd give my heart
          I want you to
          Know I loved you
          Right from the start yeah
          I listened when
          The pastor said
          You you would hurt no more
          I threw that blade
          Inside your grave
          And said once more
          That I haven't smiled very much today
          But I'm ok I'm ok
          All these tears are diamonds on my face
          And I'm ok I'm ok`,
                genres: "팝",
                image: "https://image.bugsm.co.kr/album/images/original/9107/910758.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;위로",
                link: "https://music.bugs.co.kr/track/5699507?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 84,
                title: "이렇게 난 오늘을 살아(드라마 '며느라기' OST)",
                director: "유희",
                year: "2021-1-16",
                summary:
                    `지친 하루의 끝에 홀로 남겨져있다
          문득 나를 스쳐간
          지난 날의 기억에 눈물이 맺혀
          까마득히 잊혀진 흘러간 시간 속엔
          텅 빈 내 마음 깊이 허무함만 가득히
          남겨져 있을 뿐
          이렇게 난 이렇게 난
          변해져가는 세상속에서 난 오늘을 살아
          소중했던 나날들의
          아련한 마음마저도
          차마 깨닫지 못한 채 살아
          오늘도 이렇게
          변하는 계절 끝에 서있는 줄 모르고
          나뭇가지의 끝에 매달려 있는 듯이
          하루를 살아
          어제의 미소들은 새벽녘 어둠 속에
          잠시 눈을 감으면 하룻밤의 꿈처럼
          기억에 지워져
          이렇게 난 이렇게 난
          변해져가는 세상속에서 난 오늘을 살아
          소중했던 나날들의
          아련한 마음마저도
          차마 깨닫지 못한 채 살아
          오늘도 이렇게`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/40253/4025384.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;가족;외루움",
                link: "https://music.bugs.co.kr/track/6056668?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 85,
                title: "지나간다(드라마 '시간' OST)",
                director: "유희",
                year: "2018-8-23",
                summary:
                    `저 멀리 혼자서 외로운
          달빛이 위태로워 보여
          기나긴 밤을 걱정하는
          내 마음을 알아챌 것 같아
          괜히 고개를 떨구고서
          지친 하루를 보내고 음
          아득히 져가는 꿈속에
          닿을 수 있도록 이대로
          오늘도 하루는 피고
          눈 뜨고 싶지가 않아
          언제쯤이면 편해질까
          다른 생각의 겨를도 없이
          또 시간은 흘러가고 있어
          해가 저무는 곳으로 돌아간다
          아득히 져가는 꿈속에
          닿을 수 있도록 이대로
          멀리 어딘가 있을까
          또 흘러가 버릴 시간이
          지난다 지난다
          지난다 지나간다`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/201886/20188662.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔",
                link: "https://music.bugs.co.kr/track/31200749?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 86,
                title: "노을(드라마 '허쉬' OST)",
                director: "유희",
                year: "2020-12-13",
                summary:
                    `꽃잎이 떨어진다
          새들이 날아간다
          사랑한 날의 기억들이
          사라져 버린다
          바람이 불어온다
          강물이 반짝인다
          말없이 바라보다 텅 빈
          두 눈을 감는다
          여기까질까 시간은 멈추지 않고
          가네 사랑이 노을이 저 멀리
          여기까질까 시간은 멈추지 않고
          가네 사랑이 노을이 멀리
          꽃잎이 떨어진다
          새들이 날아간다
          사랑한 날의 기억들이
          사라져 버린다
          사라져 버린다`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/203668/20366895.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;허무",
                link: "https://music.bugs.co.kr/track/32097903?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 87,
                title: "우리의 하루(드라마 '너의 장례식을 응원해' OST)",
                director: "김사월",
                year: "2020-12-3",
                summary:
                    `우리는 혼자야
          사실은 그렇지
          그래도 지금 우리
          함께 있잖아
          어제 잘 들어갔니 ?
              무엇을 먹었니
          장난스럽게 묻고
          실없이 대답해
          작별을 치르는 날에도
          이상해 조금은 머리칼이 자라
          너의 하루 하루를 살아줘
          그래 정말 잘했어
          나도 너와 함께 한 순간순간들이
          사라질 때까지 지킬게
          땀 흘려 일하고 춤추고
          어쩐지 조금은 기운이 나는걸
          너의 하루 하루를 살아줘
          그래 정말 잘했어
          나도 너와 함께 한 순간순간들이
          사라질 때까지 지킬게
          음
          음
          소중한 마음만큼은
          음
          음
          사라지지 않기를
          음
          음
          사라지지 않기를`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/203646/20364635.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;응원",
                link: "https://music.bugs.co.kr/track/32087709?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 88,
                title: "혜화동(드라마 '응답하라 1988' OST)",
                director: "박보람",
                year: "2015-11-28",
                summary:
                    `오늘은 잊고 지내던
          친구에게서 전화가 왔네
          내일이면 멀리 떠나간다고
          어릴 적 함께 뛰 놀던
          골목길에서 만나자 하네
          내일이면 아주 멀리 간다고
          덜컹거리는 전철을 타고
          찾아가는 그 길
          우리는 얼마나 많은 것을
          잊고 살아가는지
          어릴 적 넓게만 보이던 좁은 골목길에
          다정한 옛 친구 나를 반겨 달려 오는데
          어릴 적 함께 꿈꾸던
          부푼 세상을 만나자 하네
          내일이면 멀리 떠나간다고
          언젠가 돌아오는 날
          활짝 웃으며 만나자 하네
          내일이면 아주 멀리 간다고
          덜컹거리는 전철을 타고
          찾아가는 그 길
          우리는 얼마나 많은 것을
          잊고 살아가는지
          어릴 적 넓게만 보이던 좁은 골목길에
          다정한 옛 친구 나를 반겨 달려 오는데
          라라랄라라 랄라랄라라
          라랄랄라라라
          우린 얼마나 많은 것을
          잊고 살아가는지
          라라랄라라 랄라랄라라
          라랄랄라라라
          우린 얼마나 많은 것을
          잊고 살아가는지
          라라랄라라 랄라랄라라
          라랄랄라라라
          우린 얼마나 많은 것을
          잊고 살아가는지`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/200102/20010282.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;그리움;친구;가족",
                link: "https://music.bugs.co.kr/track/30074984?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 89,
                title: "엄마",
                director: "라디(Ra.D)",
                year: "2008-12-10",
                summary:
                    `처음 당신을 만났죠 만나자마자 울었죠
          기뻐서 그랬는지 슬퍼서 그랬는지
          기억도 나지 않네요

          드릴 것이 없었기에 그저 받기만 했죠
          그러고도 그땐 고마움을 몰랐죠
          아무것도 모르고 살아왔네요

          엄마 이름만 불러도 왜 이렇게 가슴이 아프죠
          모든 걸 주고 더 주지 못해
          아쉬워하는 당신께 나 무엇을 드려야 할지

          엄마 나의 어머니 왜 이렇게 눈물이 나죠
          가장 소중한 누구보다 아름다운
          당신은 나의 나의 어머니

          힘드셨다는 걸 이제 알아요
          나 때문에 많이 우셨죠
          그땐 왜 그랬는지 몇 번이나 그랬는지
          기억도 나지 않네요

          내 작은 선물을 너무 감동 마세요
          당신은 나에게 세상을 선물 했잖아요
          잘 할게요 내가 잘 할게요

          엄마 이름만 불러도 왜 이렇게 가슴이 아프죠
          모든 걸 주고 더 주지 못해
          아쉬워하는 당신께 나 무엇을 드려야할지

          엄마 나의 어머니 왜 이렇게 눈물이 나죠
          가장 소중한 누구보다 아름다운
          당신은 나의 나의 어머니

          처음 당신의 모습은 기억할 순 없지만
          마지막 모습만은 죽는날까지 기억하겠죠
          내 모든 맘 다해 사랑합니다

          엄마 이름만 불러도 왜 이렇게 가슴이 아프죠
          모든 걸 주고 더 주지 못해
          아쉬워하는 당신께 나 무엇을 드려야할지

          엄마 나의 어머니 왜 이렇게 눈물이 나죠
          가장 소중한 누구보다 아름다운
          당신은 나의 나의 어머니

          당신은 나의 나의 어머니`,
                genres: "알앤비;소울",
                image: "https://image.bugsm.co.kr/album/images/original/1729/172918.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;그리움;엄마;가족",
                link: "https://music.bugs.co.kr/track/1669813?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 90,
                title: "늘 그대",
                director: "양희은, 성시경",
                year: "2018-8-19",
                summary:
                    `어쩌면 산다는 건 말야
          지금을 추억과 맞바꾸는 일
          온종일 치운 집안 곳곳에
          어느새 먼지가 또 내려앉듯
          하루치의 시간은 흘러가
          뭐랄까 그냥 그럴 때 있지
          정말 아무것도
          내 것 같지 않다고 느껴질 때
          가만히 그대 이름을 부르곤 해
          늘 그걸로 조금 나아져
          모두 사라진다 해도 내 것인 한가지
          늘 그댈 향해서 두근거리는 내 맘
          오늘이 멀어지는 소리
          계절이 계절로 흐르는 소리
          천천히 내린 옅은 차 한잔
          따스한 온기가 어느새 식듯
          내 청춘도 그렇게 흐를까
          뭐랄까 그냥 그럴 때 말야
          더는 아무것도
          머무르지 않는 게 서글플 때
          숨 쉬듯 그대 얼굴을 떠올려봐
          늘 그걸로 견딜 수 있어
          모두 흘러가 버려도 내 곁에 한 사람
          늘 그댄 공기처럼 여기 있어
          또 가만히 그댈 생각해
          늘 그걸로 조금 나아져
          모두 사라진다 해도 내 것인 한가지
          늘 그댈 향해서 두근거리는 내 맘
          늘 그대 곁에서 그댈 사랑할 내 맘`,
                genres: "발라드",
                image: "https://image.bugsm.co.kr/album/images/original/201873/20187335.jpg?version=undefined",
                category: "눈물",
                detail: "슬픔;인생",
                link: "https://music.bugs.co.kr/track/31193755?wl_ref=list_tr_08_search",
                type: "music"
            },

            //================================================================================================================================
            //================================================================================================================================

            {
                id: 100,
                title: "결과를 만들어 내는 '진짜 노력' | 동기부여 영상",
                director: "멘탈훈련소",
                runtime: 3,
                summary:
                    `버티고 우직하게 나아가자
        인생은 남과의 비교의 문제가 아니라
        나의 선택의 문제이다.
        
        🎤 Speaker : 
        ＊이충권
        ＊ 고승덕
        ＊ 이영표
        ＊ 정승제`,
                image: "https://i.ytimg.com/vi/nqK_CF1IDPo/original.jpg",
                category: "멘토",
                detail: "노력;성실;열심",
                link: "https://www.youtube.com/watch?v=nqK_CF1IDPo",
                type: "video",
                genres: "노력;성실;열심",
                year: "2021-8-30"
            },
            {
                id: 101,
                title: "맥그리거의 패배자 인생을 바꾼 두문장",
                director: "잉글리쉬바englishiba",
                runtime: 8,
                summary:
                    `배관공 맥그리거는 어떻게 억만장자 맥그리거가 될 수 있었을까?
          1년 전 우연히 접한,
          맥그리거가 삶을 대하는 자세와 새로운 사고방식은
          무기력해지고 방향성을 잃은 내 삶을 변화시켰었어.
          
          특히 내가 오래전 시도하다 버렸던 '끌어당김의 법칙'을 통해 성공하고
          자신의 삶으로 그걸 증명하고 있는 모습은 뒷통수를 씨게 얻어맞는 기분이었어.
          덕분에 지금은 나도 끌어당김의 법칙을 통해 행복한 하루하루를 만들어 가고 있어!
          
          내가 맥그리거를 통해 그랬듯,
          내 영상으로 인해 주인님들이 피식 웃고
          긍정적인 에너지를 받아간다면 더 바랄게 없어.`,
                image: "https://i.ytimg.com/vi/7jdlFz4HX6U/hqdefault.jpg",
                category: "도전",
                detail: "노력;성장;발전;자신과싸움;can",
                link: "https://www.youtube.com/watch?v=7jdlFz4HX6U&t=25s",
                type: "video",
                genres: "노력;성장;발전",
                year: "2021-2-7"
            },
            {
                id: 102,
                title: "인생의 벽에 부딪혔을 때 | 동기부여 영상",
                director: "맨탈훈련소",
                runtime: 2.40,
                summary:
                    `지금의 나는 수많은 벽을 뛰어넘어 여기까지 왔다
        결국 인간은 더 큰 시련과 고통을 통해 성장한다
        이번에도 나는 기필코 이 벽을 뛰어 넘어 다음 단계로 나아간다.
        `,
                image: "https://i.ytimg.com/vi/rrbrrDw3zHI/original.jpg",
                category: "동기부여",
                detail: "슬럼프;벽;성장",
                link: "https://www.youtube.com/watch?v=rrbrrDw3zHI",
                type: "video",
                genres: "슬럼프;벽;성장",
                year: "2021-12-29"
            },
            {
                id: 103,
                title: "(우리가 잊고 있었던) 코너 맥그리거의 섹시한 성공마인드",
                director: "동기부여 충전소",
                runtime: 3.50,
                summary:
                    `1988년 7월 14일, 아일랜드 더블린의 크럼린(Crumlin)에서 태어났다. 
        초등학교로 Gaelscoil를 재학하고, 중등학교[5]로 Gaelcholáiste와 탈라에 있는 Coláiste de hÍde에 재학하였다. 
        유소년 축구팀에도 있었고, 만 12세 무렵에는 더블린에 있는 크럼린 복싱체육관에 들어가 올림픽에 2번 출전한 적 있는 필립 서트클리프[6]의 지도하에서 복싱을 배웠다. 
        인터뷰로는 이때 아일랜드 아마추어 복싱 유소년 대회에서 우승(All-Ireland Champion at Youth Level)을 차지했다고 말했는데, 이것이 아일랜드 국가대표 선발전(All Irish National Championships) 우승으로 와전되어 한 때 논란이 되기도 했다. 
        만16세 때 다른 무술 등을 배우기도 하다가 다시 복싱을 하면서 지냈는데, 유소년 대회 이후로는 딱히 입상성적이 없다.
        가족과 함께 더블린에 있는 루칸(Lucan)으로 이사를 가고 학교도 전학을 갔는데, 학교권유로 배관공 도제생활을 시작하였다. 이 무렵에 미래의 UFC의 파이터가 되는 톰 이건을 만나 MMA에 입문하고 다음해인 2007년 1월에 아마추어 종합격투가로 데뷔하여 1라운드 TKO승을 거두었다. 
        이후 배관공이 적성이 안맞아 관두고 존 카바나 밑에서 훈련하면서 팀 SGB 아일랜드 소속으로 2008년 MMA에 프로로 입성하였다.`,
                image: "https://i.ytimg.com/vi/pf9_Jw0RMYQ/original.jpg",
                category: "동기부여",
                detail: "노력;성장;발전;자신과싸움;can",
                link: "https://www.youtube.com/watch?v=pf9_Jw0RMYQ",
                type: "video",
                genres: "노력;성장;발전",
                year: "2021-5-2"
            },
            {
                id: 104,
                title: "인생에서 성공이 만들어지는 이유",
                director: "제임스비디오 James video",
                runtime: 6.07,
                summary:
                    `스타강사 정승제, 배우 오정세, 배우 김원해님의 수상소감에서
        그들의 성공을 만들어준 철학을 배워봅니다
        자신의 꿈과 목표 그리고 성공을 위해 흔들리지 않는 당신을 응원합니다.`,
                image: "https://i.ytimg.com/vi/kvEiYjIX9RU/original.jpg",
                category: "동기부여",
                detail: "자극;의지",
                link: "https://www.youtube.com/watch?v=kvEiYjIX9RU",
                type: "video",
                genres: "자극;의지",
                year: "2021-11-14"
            },
            {
                id: 105,
                title: "꽃은 겨울을 말하지 않는다｜이영표 동기부여",
                director: "LEGEND WEEK",
                runtime: 5.30,
                summary:
                    `#이영표 #동기부여 #마인드셋 
        예금통장 같은 노력은 없다. 즉, 오늘의 나의 노력은 내가 빼서 쓰고 싶을 때 마음대로 빼서 쓸 수 있는 예금통장 같은 것이 아니다. 
        노력은 그대로 응축되며, 그것이 터질 수 있는 때를 기다리고 있다. 우리에게 날개를 달아줄 때를. 
        긴 겨울을 버티고 트는 아름다운 꽃은 말이 없다. 무엇보다 아름다운 꽃은 겨울에 있었던 긴 이야기를 말하지 않는다. 
        다만, 세상 무엇 보다 아름다운 그 고고한 모습으로 자신을 말 없이 대변하고 있을 뿐! 감사합니다. 
        
        응축 (凝縮): 한데 엉겨 굳어서 줄어듦`,
                image: "https://i.ytimg.com/vi/VI5IJgPKoFQ/original.jpg",
                category: "멘토",
                detail: "노력;성장;발전;자신과싸움;can",
                link: "https://www.youtube.com/watch?v=VI5IJgPKoFQ",
                type: "video",
                genres: "노력;성장;발전",
                year: "2021-12-31"
            },
            {
                id: 106,
                title: "그 눈물 닦지 마｜피부와 뼈에 새기자｜LEGEND WEEK",
                director: "LEGEND WEEK",
                runtime: 8.22,
                summary:
                    `자이가닉 효과: 일단 시작하면 미완성이 되는 일에 대한 찝찝함에 계속 그것을 해결해나가게 되는 효과. 2021년도 너무 힘들었습니다. 
        그런데도 우리는 뜨겁게 살아있습니다. 다시 1년, 싫든 좋든 세상은 우리에게 또다시 선택지를 던집니다. 어떻게 할 것인가?! 전진 뿐입니다!
    
        포기하지 않는 사람을 이길 수는 없다. You just can't beat the person who won't give up.  
        - 22시즌 활약 통산 714 홈런의 베이브루스 
        
        성공한 사람들로부터 우리가 배우고, 우리의 레전드 데이즈를 만드는 것. 우리의 레전드데이즈입니다.  `,
                image: "https://i.ytimg.com/vi/WpHdgNYWuBA/original.jpg",
                category: "멘토",
                detail: "두려움;후회;변화",
                link: "https://www.youtube.com/watch?v=WpHdgNYWuBA",
                type: "video",
                genres: "두려움;후회;변화",
                year: "2021-12-18"
            },
            {
                id: 107,
                title: "당신의 인생을 바꿀 7분 동기부여영상 꼭 보세요",
                director: "마인드링크",
                runtime: "7.12",
                summary:
                    `고정뎃글 :
        말씀을 듣다보면 가슴에 박히는 말이 핑계입니다
        이거 안된다 저거 안된다 참 그런 의미없는 생각으로 보낸 지난 세월이 후회스럽긴합니다
        이제부터 핑계되지않고 무조건 할 수있다는 믿음을 가지고 한 번 사는 인생 제대로 살아봐야겠다는 강렬한 느낌을 받았습니다
        지금도 도전하고 있으며 벽에 부딪히는 것이 많지만 한 번 끝까지 해보려합니다
        정말 강렬하게 마음에 와 닿았습니다
        진심으로 감사드립니다`,
                image: "https://i.ytimg.com/vi/lQUlhD-v2Tc/original.jpg",
                category: "동기부여",
                detail: "일침;can",
                link: "https://www.youtube.com/watch?v=lQUlhD-v2Tc",
                type: "video",
                genres: "일침",
                year: "2021-4-12"
            },
            {
                id: 108,
                title: "강해져라, 인생은 원래 힘들다 | 동기부여 영상",
                director: "멘탈훈련소",
                runtime: 3,
                summary:
                    `힘든 일이 있을 때
        그것이 나아질 것이라고 믿는 사람과
        그것이 내 인생의 일부라고 생각하는 사람은
        분명 다른 인생을 살아가게 될 것입니다.
        Speaker : 
        * 박웅현(광고인/작가)
        * 박신양(배우)
        * 故신해철(가수)`,
                image: "https://i.ytimg.com/vi/SY2wVV1ICks/original.jpg",
                category: "멘토",
                detail: "멘탈;마인트셋",
                link: "https://www.youtube.com/watch?v=SY2wVV1ICks",
                type: "video",
                genres: "멘탈",
                year: "2021-10-14"
            },
            {
                id: 109,
                title: "성공하고 싶다면 이 영상을 매일 보세요 | 조던 피터슨 동기부여",
                director: "작심만일 : 성공 마인드 동반자",
                runtime: 11.21,
                summary:
                    `지치고 쓰러지고 힘든 시절을 이겨내고
        내가 원하는 것을 얻을 수 있는 삶을 위해서는
        어떠한 것이 필요할까요?
        
        조던피터슨 교수가 이야기하는
        그 원리를 매일 아침 가슴속에 새겨놓고
        하루를 시작하시기 바랍니다
        
        여러분들이 원하는 삶은
        바로 이것으로부터 시작될 것 입니다
        
        성공 마인드 동반자 작심만일에서
        동기부여 받고 마인드 전환하고 가세요 :)`,
                image: "https://i.ytimg.com/vi/Fa2ZCyc5HXo/original.jpg",
                category: "멘토",
                detail: "자기부정;비교",
                link: "https://www.youtube.com/watch?v=Fa2ZCyc5HXo",
                type: "video",
                genres: "자기부정;비교",
                year: "2021-7-13"
            },
            {
                id: 110,
                title: "도전을 망설이는 당신에게 | 동기부여 영상",
                director: "멘탈훈련소",
                runtime: 4.09,
                summary:
                    `힘들 때는 많은 생각을 하지마라
        누군가는 나를 보고 있다
        우리 부모님 만큼은 나를 주시하고 있다
        나는 그분들을 위해서라도 잘해야 된다
        뒤쳐지면 안된다
        
        🎤 Speaker : 
        ＊육진수 
        ＊박웅현 (광고인/작가)
        ＊이국종
        ＊이정구 상사
        ＊원동현 상사
        ＊안정환
        ＊로건`,
                image: "https://i.ytimg.com/vi/9eygMPbnEJQ/original.jpg",
                category: "도전",
                detail: "이겨냄",
                link: "https://www.youtube.com/watch?v=9eygMPbnEJQ",
                type: "video",
                genres: "이겨냄",
                year: "2021-8-25"
            },
            {
                id: 111,
                title: "(유지)안정환 화났을 때 나오는 인생 명언들. 실패와 좌절로 나태해진 사람들이 꼭 봐야 할 영상 [노력 동기부여]",
                director: "감성힐러 JAy",
                runtime: 4.15,
                summary:
                    `안정환 자신의 어렸웠던 시절을 생각하며 진심에서 나오는 인생 조언/ 인생 명언
        나태해진 당신이 챙겨봐야 할 동기부여 영상
        
        "지금 열심히 해야 돼!! 지금 최선을 다하고!!"
        "자신감은 다른 사람이 심어주는 것도 있지만, 본인이 자신감을 찾으면 돼!"
        "운동장에서 거짓말 없다고 얘기했지! 너는 거짓말처럼 운동하고 있다고!!"
        "자신을 속이지 말고 자신에게 부끄러운 사람이 되지 마라!"
        "생각을 바꾸는 거다!"
        `,
                image: "https://i.ytimg.com/vi/cDq3MaGMxSc/original.jpg",
                category: "멘토",
                detail: "일침;쓴소리;눈물",
                link: "https://www.youtube.com/watch?v=cDq3MaGMxSc",
                type: "video",
                genres: "일침;쓴소리",
                year: "2020-12-20"
            },
            {
                id: 112,
                title: "(유지)서장훈이 국보급 센터로 성공할 수밖에 없는 이유 ",
                director: "감성힐러 JAy",
                runtime: 4.26,
                summary:
                    `열정이 식고, 노력하지 않고 포기하는 당신을 다시 일으켜 세워 줄 영상
        서장훈 노력, 열정, 성공 동기부여 영상
        
        서장훈이 "즐겨라"라는 말을 제일 싫어하는 이유`,
                image: "https://i.ytimg.com/vi/-SIVV4G8LME/original.jpg",
                category: "멘토",
                detail: "무책임",
                link: "https://www.youtube.com/watch?v=-SIVV4G8LME",
                type: "video",
                genres: "무책임",
                year: "2021-7-23"
            },
            {
                id: 113,
                title: "(유지)사람이 죽는 진짜 이유! 그리고 살아야 하는 이유!",
                director: "감성힐러 JAy",
                runtime: 2.31,
                summary:
                    `사람이 죽는 진짜 이유는 암? 사고? 자살? 그거 다 아니다
        사람은 가난 때문에 죽는 거야
        - 나문희 명대사-
        
        죽어가는 사람 앞에서 그 순간만큼은 내가 마지노선이니깐...
        내가 물러서면 그 사람 죽는 거고
        내가 포기하지 않고 조금만 더 노력하면
        그 사람 사는 거고
        - 한석규 명대사-`,
                image: "https://i.ytimg.com/vi/B_bjBGzza7w/original.jpg",
                category: "눈물",
                detail: "명대사;삶;죽음;낭만",
                link: "https://www.youtube.com/watch?v=B_bjBGzza7w",
                type: "video",
                genres: "명대사;삶;죽음;낭만",
                year: "2021-5-26"
            },
            {
                id: 114,
                title: "과거에서 나오세요 - 당신을 다시 일으켜 세우는 영상",
                director: "제임스비디오 James video",
                runtime: 6.27,
                summary:
                    `백종원님의 골목식당에서 사장님들과의 대화를 중심으로 영상을 제작했습니다. 어려움을 극복하는 사장님들과 그들을 응원하는 백대표와의 대화를 통해 우리도 각자의 인생의 어려움을 극복하는데 조금이나마 자극과 솔루션을 그려보시기 바랍니다. 
        자신의 꿈과 목표 그리고 성공을 위해 흔들리지 않는 당신을 응원합니다.`,
                image: "https://i.ytimg.com/vi/w18P4cTkVvc/original.jpg",
                category: "멘토",
                detail: "악",
                link: "https://www.youtube.com/watch?v=w18P4cTkVvc",
                type: "video",
                genres: "악",
                year: "2020-5-21"
            },
            {
                id: 115,
                title: "백종원 명언 l 30살에 빚 ‘17억’.. 내가 죽으려던 결심을 멈춘 이유",
                director: "멘탈케어::힐링 심리학 채널",
                runtime: 5.26,
                summary:
                    `1966년 충남 예산군에서 집안의 종손으로 태어났다. 중학교 시절 상경해 서울고등학교[19]를 졸업하고 연세대학교에 입학했다. 고등학교 졸업 직후엔 잠시 서울특별시 장한평에 위치한 중고차 시장에서 자동차 중개업자로 활동하기도 했다.
        대화의 희열에서 어렸을 적 이야기를 많이 했는데, 만석꾼이었던 증조할아버지의 피를 이어받은 영향인지 어렸을 때부터 장사꾼 기질이 있다고 스스로 자각하고 있었다고 한다.
        처음 자신의 가게를 가지고 요식업에 뛰어든 것은 대학생 때로, 연세대학교 1학년 때[21] 아르바이트 삼아 일한 압구정동 호프집을 1달 만에 인수[22]하면서 이다. 아르바이트를 시작한 이유는 맥주를 마음껏 마실 수 있어서였다고 한다.
        전역 후 1993년에 원조 쌈밥집을 인수하며 요식업에 뛰어들었고 1994년에 더본코리아를 설립하기도 했지만, 당시 요식업(지금의 원조 쌈밥집)은 요리 좋아하는 취미로 돈 좀 버는 아르바이트 수준으로 가볍게 하는 수준이었다고 한다.
        그러나 여기에서 백종원 인생 최대의 굴곡이 시작되었는데 IMF로 주택 사업이 망하고 자신의 수중에는 17억원의 빚과 원조 쌈밥집 가게가 전부였었다고 한다. 상황을 타개할 방법이 없자 결국 인생을 마무리하기로 결심했는데 그 장소로 홍콩을 선택했다. 
        막상 출국해서는 일단 좀 먹고 봐야겠다는 생각으로 눈에 들어오는 식당에 가서 식사를 했고 이때 여러 가지 사업 아이템들이 떠오르면서 결국 마음을 고쳐먹고 귀국하게 된다. 귀국 이후 17억원의 채권자들을 모두 모은 뒤 그 앞에서 '기회를 주신다면 식당을 해서 모두 갚겠다'라고 말했고 채권자들은 그의 마음이 통했는지 전원 기회를 주기로 했다고 한다. 
        이후 백종원은 사업에 전력으로 덤벼들어, 망해가고 있던 원조 쌈밥집 가게부터 시작해서 그 진가를 발휘하기 시작한다. 1998년 한신포차를 시작으로 2002년 본가, 2004년 해물떡찜0410, 2005년 새마을식당, 2006년 빽다방, 홍콩반점0410 등 내놓는 아이템마다 대박을 치며 17억이나 하던 빚을 모조리 청산했고 지금의 자리까지 오르게 된다.
        `,
                image: "https://i.ytimg.com/vi/xn1OW7HM13k/original.jpg",
                category: "멘토",
                detail: "조언",
                link: "https://www.youtube.com/watch?v=xn1OW7HM13k",
                type: "video",
                genres: "조언",
                year: "2021-5-9"
            },
            {
                id: 116,
                title: "백종원이 수많은 실패에도 다시 일어날 수 있었던 이유",
                director: "글친구",
                runtime: 2.41,
                summary:
                    `1966년 충남 예산군에서 집안의 종손으로 태어났다. 중학교 시절 상경해 서울고등학교[19]를 졸업하고 연세대학교에 입학했다. 고등학교 졸업 직후엔 잠시 서울특별시 장한평에 위치한 중고차 시장에서 자동차 중개업자로 활동하기도 했다.
        대화의 희열에서 어렸을 적 이야기를 많이 했는데, 만석꾼이었던 증조할아버지의 피를 이어받은 영향인지 어렸을 때부터 장사꾼 기질이 있다고 스스로 자각하고 있었다고 한다.
        처음 자신의 가게를 가지고 요식업에 뛰어든 것은 대학생 때로, 연세대학교 1학년 때[21] 아르바이트 삼아 일한 압구정동 호프집을 1달 만에 인수[22]하면서 이다. 아르바이트를 시작한 이유는 맥주를 마음껏 마실 수 있어서였다고 한다.
        전역 후 1993년에 원조 쌈밥집을 인수하며 요식업에 뛰어들었고 1994년에 더본코리아를 설립하기도 했지만, 당시 요식업(지금의 원조 쌈밥집)은 요리 좋아하는 취미로 돈 좀 버는 아르바이트 수준으로 가볍게 하는 수준이었다고 한다.
        그러나 여기에서 백종원 인생 최대의 굴곡이 시작되었는데 IMF로 주택 사업이 망하고 자신의 수중에는 17억원의 빚과 원조 쌈밥집 가게가 전부였었다고 한다. 상황을 타개할 방법이 없자 결국 인생을 마무리하기로 결심했는데 그 장소로 홍콩을 선택했다. 
        막상 출국해서는 일단 좀 먹고 봐야겠다는 생각으로 눈에 들어오는 식당에 가서 식사를 했고 이때 여러 가지 사업 아이템들이 떠오르면서 결국 마음을 고쳐먹고 귀국하게 된다. 귀국 이후 17억원의 채권자들을 모두 모은 뒤 그 앞에서 '기회를 주신다면 식당을 해서 모두 갚겠다'라고 말했고 채권자들은 그의 마음이 통했는지 전원 기회를 주기로 했다고 한다. 
        이후 백종원은 사업에 전력으로 덤벼들어, 망해가고 있던 원조 쌈밥집 가게부터 시작해서 그 진가를 발휘하기 시작한다. 1998년 한신포차를 시작으로 2002년 본가, 2004년 해물떡찜0410, 2005년 새마을식당, 2006년 빽다방, 홍콩반점0410 등 내놓는 아이템마다 대박을 치며 17억이나 하던 빚을 모조리 청산했고 지금의 자리까지 오르게 된다.
        `,
                image: "https://i.ytimg.com/vi/LChZ1p3Jycw/original.jpg",
                category: "멘토",
                detail: "과거;현재",
                link: "https://www.youtube.com/watch?v=LChZ1p3Jycw",
                type: "video",
                genres: "과거;현재",
                year: "2020-10-4"
            },
            {
                id: 117,
                title: "[감동 동기부여] '타고난 재능이 없다고 느끼는 사람이 꼭 들어야 하는 말'",
                director: "I think so",
                runtime: 4,
                summary:
                    `‘나는 타고난 재능이 없다’ 라고 말하는 사람에게 꼭 하고 싶은 말
    
        재능을 찾는 사람들에게 이영표는 이렇게 말한다.
        누구에게나 재능은 있다. 하지만 재능은 노력과 인내 그리고 시간으로만 찾을 수 있다. 
        재능은 시작할 때부터 잘하는 것이 아니다. 할 수 있을 때까지 필요한 시간만큼 쓰는 것이다. 
        아무것도 못 하던 내가 몇 시간, 며칠, 몇 주를 연습하면 조금씩 익숙해지고, 할 수 있게 되는 것이다.`,
                image: "https://i.ytimg.com/vi/44Uu-QqdHe4/original.jpg",
                category: "멘토",
                detail: "can;실패;성공",
                link: "https://www.youtube.com/watch?v=44Uu-QqdHe4",
                type: "video",
                genres: "실패;성공",
                year: "2021-2-18"
            },
            {
                id: 118,
                title: "(수정-자르기)포기하고 싶다면 이 영상을 보세요! 당신을 절실하게 만들어줄 영상",
                director: "감성힐러 JAy",
                runtime: 3.47,
                summary:
                    `열정이 식고, 노력하지 않고 핑계만 대면서 포기하는 당신을 다시 일으켜 세워 줄 영상
        노력하는 당신을 따뜻하게 위로해 줄 영상
        
        스토브리그 명대사/명장면 동기부여 영상
        남궁민(백승수 역) 명대사/명장면
        
        자책하지 말고 포기하지 말자`,
                image: "https://i.ytimg.com/vi/0qgNCDHigFU/original.jpg",
                category: "동기부여",
                detail: "노력;의지;행동",
                link: "https://www.youtube.com/watch?v=0qgNCDHigFU",
                type: "video",
                genres: "노력;의지;행동",
                year: "2021-10-29"
            },
            {
                id: 119,
                title: "(유지)조승우 부산 사투리 동기부여 명대사 삼류와 일류의 차이",
                director: "감성힐러 JAy",
                runtime: 4.59,
                summary:
                    `열정이 식고, 노력하지 않고 핑계만 대면서 포기하는 당신을 다시 일으켜 세워 줄 영상
        노력하는 당신을 따뜻하게 위로해 줄 영상
        
        영화 퍼펙트 게임 명대사/명장면 동기부여 영상
        조승우(롯데 최동원 역), 양동근(해태 선동열 역), 조진웅 명대사/명장면
        
        노력, 투지, 책임감 동기부여
        
        일구일생
        일구일사
        
        공 하나에 죽고
        공 하나에 산다`,
                image: "https://i.ytimg.com/vi/0FsgWvPN_h0/original.jpg",
                category: "동기부여",
                detail: "노력;투지;책임감;일류;삼류",
                link: "https://www.youtube.com/watch?v=0FsgWvPN_h0",
                type: "video",
                genres: "노력;투지;책임감",
                year: "2021-11-10"
            },
            {
                id: 120,
                title: "실패란 없다 | 동기부여 영상",
                director: "멘탈훈련소",
                runtime: 3.30,
                summary:
                    `실수는 많이 하면 할수록 재산이 된다
        실패란 단어는 없다
        아직 성공하지 않은 것 뿐이다
        
        🎤 Speaker : 
        신철호 
        故이건희
        손웅정
        서정진
        이영표
        김난도`,
                image: "https://i.ytimg.com/vi/B3UTSPhBeLI/original.jpg",
                category: "도전",
                detail: "실패;실수;경험",
                link: "https://www.youtube.com/watch?v=B3UTSPhBeLI",
                type: "video",
                genres: "실패;실수;경험",
                year: "2021-9-4"
            },
            {
                id: 121,
                title: "해외를 울린 한 노인의 마지막 조언 (한영자막)",
                director: "성공비밀 : 대한민국 NO.1 멘토링 채널",
                runtime: 6.17,
                summary:
                    `All For you 추천 영상`,
                image: "https://i.ytimg.com/vi/f36t1uX03lA/original.jpg",
                category: "도전",
                detail: "인생;삶;can",
                link: "https://www.youtube.com/watch?v=f36t1uX03lA",
                type: "video",
                genres: "인생;삶",
                year: "2021-10-28"
            },
            {
                id: 122,
                title: "(유지)노력하지 않고 포기하는 당신이 꼭 봐야 할 영상 [남궁민 동기부여 명대사]",
                director: "감성힐러 JAy",
                runtime: 1.47,
                summary:
                    `열정이 식고, 노력하지 않고 핑계만 대면서 포기하는 당신을 다시 일으켜 세워 줄 영상
        스토브리그 명대사/명장면 동기부여 영상
        
        
        남궁민(백승수 역) 명대사/명장면`,
                image: "https://i.ytimg.com/vi/vN62QQyc1yA/original.jpg",
                category: "멘토",
                detail: "핑계;대처",
                link: "https://www.youtube.com/watch?v=vN62QQyc1yA",
                type: "video",
                genres: "핑계;대처",
                year: "2021-10-9"
            },
            {
                id: 123,
                title: "(유지)공부에 도전하지 않는 당신이 가져야 할 자세 [ 실패/좌절/도전/공부 동기부여 ]",
                director: "감성힐러 JAy",
                runtime: 4.27,
                summary:
                    `아직 미치지 않았다면 이 영상에 4분만 꼭 투자하세요
    
        불광불급不狂不及
        [한자 뜻과 음] 아닐 불, 미치광이 광, 미칠 급.
        [풀이] 어떤 일을 하는 데 있어서 미치광이처럼 그 일에 미쳐야 목표에 도달할 수 있다는 말.
        
        
        성공의 반대는 뭡니까? 실패입니까?
        도전하지 않는 거죠?
        다 알지 않습니까?
        성공의 반대는 실패가 아니라 도전하지 않는 거죠
        왜 도전을  안 하십니까?
        
        독하지 않으면 사람은 매력이 없고
        매력이 없으면 승부에서 지는 거예요
        
        -최진기-
        
        
        세상은 똑똑하거나 천재성이 있거나
        재능이 많은 사람들의 것이에요?
        아니면 즐기는 사람들의 것이에요?
        즐기는 사람들 것이에요
        재능이 부족하고 좀 덜 똑똑해도
        끈질기게 붙들고 늘어지는 사람들이
        항상 최고의 승자가 됨을 잊지 마시고요
        
        지금의 모습을 너무 신경 쓰지 마세요!
        
        -백인덕-`,
                image: "https://i.ytimg.com/vi/voJQo4dGCrc/original.jpg",
                category: "도전",
                detail: "고3;can;마인드셋",
                link: "https://www.youtube.com/watch?v=voJQo4dGCrc",
                type: "video",
                genres: "고3;can;마인드셋",
                year: "2021-3-11"
            },
            {
                id: 124,
                title: "내 인생 최고의 멘토를 찾는 방법 l 타이 로페즈 l 동기부여 l 한영자막",
                director: "동기부여소",
                runtime: 7.24,
                summary:
                    `오프라 윈프리, 아인슈타인, 간디, 빌 게이츠, 워렌 버핏, 랩퍼 제이지 등 세계적으로 성공한 모든 이들에게는 성공의 필수 요소인 '이것'이 있었습니다.  
    
        성공과 실패를 결정짓는 차이, 그것은 바로 '멘토'의 여부였습니다. 아무도 처음부터 성공하는 법을 알고 태어나지 않았으니까요. 
        
        "멘토를 따라 할 수 있는 능력은, 우리의 성공을 가늠할 수 있는 가장 큰 요소입니다" - 타이 로페즈
        
        성공을 하기 위해서 자신을 성공의 길로 이끌어 줄 멘토가 너무 중요합니다. 또한 멘토는
        우리가 확신을 갖지 못할 때 동기부여를 해줄 수도 있습니다.  
        
        우리가 탑이 되고 싶은 분야의 전문가를 직접 연락하거나, 찾아가서 멘토와 멘티 관계를 형성할 수도 있습니다.  물론 멘토를 구한다는 거는 간단하고 쉽지는 않습니다.
        
        만약 지금 당장 멘토를 만나서 멘토링을 받지 못하더라도 멘토를 가질 수 있는 법이 있는데요. 그것은  바로 책을 통해서 훌륭한 분들에게 간접 멘토링을 받는 것입니다.  
        이 영상의 강연자, 타이 로페즈는 150권의 본인의 멘토가 될 만한 책을 골라서, 읽고 또 읽으라고 강조합니다.
        
        성공의 지름 길로 이끌어 줄 수 있는 멘토에 관한 영상입니다.`,
                image: "https://i.ytimg.com/vi/a7FVkFwBc4k/maxresdefault.jpg",
                category: "멘토",
                detail: "멘티;멘토;멘토링",
                link: "https://www.youtube.com/watch?v=a7FVkFwBc4k",
                type: "video",
                genres: "멘티;멘토;멘토링",
                year: "2020-4-21"
            },
            {
                id: 125,
                title: "최고의 기회는 이미 내 안에 있다! 꿈의 멘토 김미경 강사 ",
                director: "KBS창원",
                runtime: 16.5,
                summary:
                    `대한민국 최고의 출연자와 멘토들이 
        농산어촌 청소년들과 소통하는 꿈의 무대, 
        꿈의 강연을 통해 지역 청소년들의 자존감을 높이고 
        꿈과 희망을 심어주기 위해 전국 지역을 순회하며 개최하는 
        청소년 멘토링 콘서트`,
                image: "https://i.ytimg.com/vi/iDK760vJ6_o/maxresdefault.jpg",
                category: "멘토",
                detail: "기회",
                link: "https://www.youtube.com/watch?v=iDK760vJ6_o",
                type: "video",
                genres: "기회",
                year: "2020-1-15"
            },
            {
                id: 126,
                title: "빚 10억 흙수저가 세계 최고 멘토를 찾은 방법 (맥도날드, 초밥장인)",
                director: "KELLY CHOI",
                runtime: 9.18,
                summary:
                    `켈리에게도 많은 멘토 분들이 계십니다. 
        아주 감사하고 존경하는 분들이십니다. 
        
        당시 이렇게 악조건인 켈리를 도와주셨는지 
        멘토 분들에게 여쭤보았어요. 
        
        멘토 분들은 어떻게 대답해 주셨을까요?`,
                image: "https://i.ytimg.com/vi/whNW0vlAddo/maxresdefault.jpg",
                category: "멘토",
                detail: "롤모델;멘토;멘티",
                link: "https://www.youtube.com/watch?v=whNW0vlAddo",
                type: "video",
                genres: "롤모델;멘토;멘티",
                year: "2021-5-13"
            },
            {
                id: 127,
                title: "당신에게 의미있는 1분을 선물해 줄 사람 | 1분 멘토링",
                director: "체인지그라운드",
                runtime: 3.15,
                summary:
                    `멘토는 생각하는 힘을 가진 사람이라는 뜻에서 비롯 됐다
        슬럼프가 찾아 왔다면 멘도를 찾아보자
        `,
                image: "https://i.ytimg.com/vi/6wT8I50JXFc/maxresdefault.jpg",
                category: "멘토",
                detail: "멘토;멘티",
                link: "https://www.youtube.com/watch?v=6wT8I50JXFc",
                type: "video",
                genres: "멘토;멘티",
                year: "2017-10-23"
            },
            {
                id: 128,
                title: "늦지 않았다, 지금 시작하라 | 공부자극·쓴소리",
                director: "멘탈훈련소",
                runtime: 2.50,
                summary:
                    `🎤 Speaker : 
        * 이충권
        * 강원우
        * 이지영`,
                image: "https://i.ytimg.com/vi/JevaoxP8Lqs/maxresdefault.jpg",
                category: "동기부여",
                detail: "공부;자극",
                link: "https://www.youtube.com/watch?v=JevaoxP8Lqs",
                type: "video",
                genres: "공부;자극",
                year: "2022-1-1"
            },
            {
                id: 129,
                title: "성공은 운이지만, 운을 뛰어넘는 성공 비밀",
                director: "마인드링크",
                runtime: 9.58,
                summary:
                    `▶Speakers
        -김영철
        -신해철
        -손석희
        -김태균
        -유시민
        -유희열
        -서장훈`,
                image: "https://i.ytimg.com/vi/cMkyJzPozl0/maxresdefault.jpg",
                category: "멘토",
                detail: "성공;쓴소리",
                link: "https://www.youtube.com/watch?v=cMkyJzPozl0",
                type: "video",
                genres: "성공;쓴소리",
                year: "2022-1-4"
            },
            {
                id: 130,
                title: "크리스티아노 호날두 성공철학, 동기부여. 보고 배울점은 배웁시다.",
                director: "동기부여 충전소",
                runtime: "4.17",
                summary:
                    `크리스티아누 호날두는 1985년 포르투갈의 가난한 작은 섬마을에서 태어났습니다. 
        어릴 적에는 제대로 먹지 못해 너무 말라서 말라깽이라는 별명을 가지고 있을 정도로 그의 집은 가난했습니다. 축구를 잘하기 위해 탄탄한 몸을 만들었고, 엄청난 연습의 연습을 거듭한 결과 그는 세계적인 축구 선수로 인정을 받기 시작했습니다. 
        
        많은 논란이 끊이지 않는 선수로도 유명하지만, 그가 최고의 선수가 되기 위해 끊임없는 노력과 희생을 했던 것만은 사실입니다.
        
        크리스티아누 호날두는 "희생 없이 얻는 것은 아무것도 없다."라고 말합니다.`,
                image: "https://i.ytimg.com/vi/fmKyP1K9xlo/maxresdefault.jpg",
                category: "도전",
                detail: "극복;시련;can",
                link: "https://www.youtube.com/watch?v=fmKyP1K9xlo",
                type: "video",
                genres: "극복;시련",
                year: "2018-12-11"
            },
            {
                id: 131,
                title: "NBA 농구 선수 스테판 커리 동기부여 영상",
                director: "잭스파이어 Jackspire",
                runtime: 1.44,
                summary:
                    `스테판 커리는 NBA의 최고로 꼽히는 선수들 중의 한 명입니다. 이런 그도 중학교 시절에는 키가 가장 작고 골을 못 넣는 선수 였다고 하는데요. 끊임없는 노력으로 정상에 오른 그의 말에 귀 기울여 보세요!`,
                image: "https://i.ytimg.com/vi/H6xlRUWZ7CU/maxresdefault.jpg",
                category: "동기부여",
                detail: "극복;노력",
                link: "https://www.youtube.com/watch?v=H6xlRUWZ7CU",
                type: "video",
                genres: "극복;노력",
                year: "2019-7-12"
            },
            {
                id: 132,
                title: "[위로.성장.감동] 혼자만 뒤처지는 것 같아 미래가 불안한 청춘들에게 전하는 유재석의 메시지...",
                director: "I think so",
                runtime: 5.41,
                summary:
                    `#동기부여 #감동 #위로 #성장 #유재석 #명언
        -
        혼자만 뒤처지는 것 같아 미래가 불안한 청춘들에게 전하는
        국민 MC유재석의 메시지...`,
                image: "https://i.ytimg.com/vi/OGa6zY6adgA/maxresdefault.jpg",
                category: "동기부여",
                detail: "버팀;can;불안함",
                link: "https://www.youtube.com/watch?v=OGa6zY6adgA",
                type: "video",
                genres: "버팀;불안함",
                year: "2021-2-23"
            },
            {
                id: 133,
                title: "동기부여 멘탈리티 ♣ Tomorrow is new ♣ Motivational Video",
                director: "제임스비디오 James video",
                runtime: 4.47,
                summary:
                    `닉부이치치와 마윈이 힘든 상황을 견디는 이들에게 보내는
        희망을 담은 강연을 재구성 했습니다
        항상 말했듯이
        이 영상은 님들의 간식중 하나이길 바랍니다.
        잠깐의 충전도 마음에 쌓이면
        뇌를 움직이는 법입니다 `,
                image: "https://i.ytimg.com/vi/7-yKX7w4EmA/maxresdefault.jpg",
                category: "동기부여",
                detail: "조언",
                link: "https://www.youtube.com/watch?v=7-yKX7w4EmA",
                type: "video",
                genres: "조언",
                year: "2019-3-3"
            },
            {
                id: 134,
                title: "하루 매출 '25조원' 남자의 반전 인생",
                director: "포크포크",
                runtime: 2.10,
                summary:
                    `알리바바의 창업자 마윈이 말하는 그의 인생 이야기`,
                image: "https://i.ytimg.com/vi/yMPEtQHRe_I/maxresdefault.jpg",
                category: "동기부여",
                detail: "can",
                link: "https://www.youtube.com/watch?v=yMPEtQHRe_I",
                type: "video",
                genres: "can",
                year: "2017-11-11"
            },
            {
                id: 135,
                title: "일론 머스크를 눈물 짓게 만든 질문 【동기부여】ㅣ한영자막",
                director: "잭스파이어",
                runtime: 4.54,
                summary:
                    `미국의 첫 민간 우주기업인 스페이스X는 최근 팔콘9를 성공적으로 발사하면서 전 세계의 이목을 끌었습니다. 하지만 성공적인 발사를 하기까지 수 많은 실패를 경험했는데요. 일론 머스크의 인터뷰를 통해 그의 기업가 정신을 만나 보세요.
        Speaker : 일론 머스크 (Elon musk)
        `,
                image: "https://i.ytimg.com/vi/ZukL_AoGJLA/maxresdefault.jpg",
                category: "도전",
                detail: "can;믿음",
                link: "https://www.youtube.com/watch?v=ZukL_AoGJLA",
                type: "video",
                genres: "can;믿음",
                year: "2020-6-1"
            },
            {
                id: 136,
                title: "박진영 l 제발 인맥 쌓는데 시간 쏟지 마세요, 왜냐면..",
                director: "멘탈케어::힐링 심리학 채널::",
                runtime: 4.19,
                summary:
                    `대한민국의 가수이자 대중음악 프로듀서, 작곡가, 작사가, 안무가, 기업인, 배우.
        발군의 춤실력과 끼로 한국 가요계 역대 최정상급 춤꾼이기도 하며, '최고의 딴따라'라는 단어 하나로 설명되는 댄스 가수이기도 하다. 실제로 딴따라의 인식과 이미지 자체를 크게 바꾼 장본인 이기도 하다.
        JYP엔터테인먼트의 최대주주로서 현재 JYP엔터테인먼트의 주식 17.72%를 보유하고 있으며, 이는 2019년 7월 주식시장에서 시가 기준으로 1천 3백억 원에 달한다. 
        박진영은 과거 JYP엔터테인먼트의 대표이사였지만 현재는 아니다. 그러나 사내 등기이사로서 경영상 법적인 책임을 지는 위치에 있다.`,
                image: "https://i.ytimg.com/vi/icqjw_LYgTY/maxresdefault.jpg",
                category: "멘토",
                detail: "조언",
                link: "https://www.youtube.com/watch?v=icqjw_LYgTY",
                type: "video",
                genres: "조언",
                year: "2021-8-22"
            },
            {
                id: 137,
                title: "가장 힘든 순간에서 도망치지 않는 법ㅣ스티브 잡스 레전드 연설",
                director: "잭스파이어 Jackspire",
                runtime: 3.23,
                summary:
                    `단순히 성공한 기업인을 넘어 21세기 혁신의 아이콘, 유비쿼터스 시대의 발판을 마련한 인물로 평가되고 있다.
        세계 최고의 전자 기기, 소프트웨어 회사 중 하나인 Apple의 창립자이지만 잡스가 디지털 시대의 아이콘으로 평가받는 것은 단순히 성능을 끌어올린 신제품을 만드는 것이 아니라 새로운 시도로 인류의 삶을 진보시킨 창의적인 제품을 고안한 것에 있다. 
        Apple II 컴퓨터로 데스크탑 시장을 개척했으며, Macintosh를 통해 PC 열풍을 불러와 대부분의 가정에 컴퓨터가 보급되도록 개인용 컴퓨터 시대를 연 인물이면서 iPhone을 통해 스마트폰이 보급되도록 하여 오늘날의 모바일 시대를 만든 인물이다.
        일개 기업인의 신분으로 창의적인 제품을 통해 인류의 삶을 두 번이나 바꾼, 21세기 혁신의 아이콘과도 같은 인물이라고 할 수 있다.`,
                image: "https://i.ytimg.com/vi/0077PIUU7RU/maxresdefault.jpg",
                category: "동기부여",
                detail: "can;조언",
                link: "https://www.youtube.com/watch?v=0077PIUU7RU",
                type: "video",
                genres: "can;조언",
                year: "2019-4-22"
            },
            {
                id: 138,
                title: "스티브잡스 동기부여",
                director: "Sungmin Lee",
                runtime: 1.37,
                summary:
                    `단순히 성공한 기업인을 넘어 21세기 혁신의 아이콘, 유비쿼터스 시대의 발판을 마련한 인물로 평가되고 있다.
        세계 최고의 전자 기기, 소프트웨어 회사 중 하나인 Apple의 창립자이지만 잡스가 디지털 시대의 아이콘으로 평가받는 것은 단순히 성능을 끌어올린 신제품을 만드는 것이 아니라 새로운 시도로 인류의 삶을 진보시킨 창의적인 제품을 고안한 것에 있다. 
        Apple II 컴퓨터로 데스크탑 시장을 개척했으며, Macintosh를 통해 PC 열풍을 불러와 대부분의 가정에 컴퓨터가 보급되도록 개인용 컴퓨터 시대를 연 인물이면서 iPhone을 통해 스마트폰이 보급되도록 하여 오늘날의 모바일 시대를 만든 인물이다.
        일개 기업인의 신분으로 창의적인 제품을 통해 인류의 삶을 두 번이나 바꾼, 21세기 혁신의 아이콘과도 같은 인물이라고 할 수 있다.`,
                image: "https://i.ytimg.com/vi/0Nym2u4CtL8/hqdefault.jpg",
                category: "멘토",
                detail: "조언",
                link: "https://www.youtube.com/watch?v=0Nym2u4CtL8",
                type: "video",
                genres: "조언",
                year: "2014-9-27"
            },
            {
                id: 139,
                title: "[스티브 잡스] 스탠포드 감동 연설ㅣMotivational Videoㅣ한영자막ㅣ동기부여영상",
                director: "동기부여공작소 Motivation for you",
                runtime: 10.30,
                summary:
                    `#스티브잡스연설#스티브잡스스탠포드연설#동기부여영상
    
        ▶ Speaker
            -  스티브 잡스 (Steve Jobs)`,
                image: "https://i.ytimg.com/vi/WjcKlWHMjcg/hqdefault.jpg",
                category: "멘토",
                detail: "조언;강연",
                link: "https://www.youtube.com/watch?v=WjcKlWHMjcg",
                type: "video",
                genres: "조언;강연",
                year: "2020-6-29"
            },
            {
                id: 140,
                title: "집중과 편안함에 도움을 주는 피아노 연주",
                director: "Cold Water",
                runtime: 600,
                summary:
                    `집중 공부 힐링 휴식 감성 명상 태교음악 카페음악
        삶에 지친, 여유가 없는, 과부화인 당신에게 편안함을 드릴 노래를 추천 드립니다
        `,
                image: "https://i.ytimg.com/vi/Q-iEfzaikBI/hqdefault.jpg",
                category: "편암함",
                detail: "노래;피아노",
                link: "https://www.youtube.com/watch?v=Q-iEfzaikBI&t=16663s",
                type: "video",
                genres: "노래;피아노",
                year: "2019-6-25"
            },
            {
                id: 141,
                title: "집중과 편안함에 도움을 주는 차분한 피아노 연주",
                director: "BeiGe Mellow 베이지멜로우",
                runtime: 307.2,
                summary:
                    `자극적이지 않은 피아노 연주로 편안함을 찾아보세요
        #상쾌함 #맑음 #밝음 #기분좋음`,
                image: "https://i.ytimg.com/vi/he_WPgp_D7Q/hqdefault.jpg",
                category: "편암함",
                detail: "연주;노래;피아노",
                link: "https://www.youtube.com/watch?v=he_WPgp_D7Q",
                type: "video",
                genres: "연주;노래;피아노",
                year: "2020-12-16"
            },
            {
                id: 142,
                title: " 60초안에 스트레스 해소되는 마음안정 치유음악",
                director: "21일만 들어라 기적음악-21 Day Miracle Music",
                runtime: 78.6,
                summary:
                    `#60초스트레스 #스트레스해소 #마음안정 #528HZ #432HZ
    
        그냥 듣고만 있어도 마음이 안정됩니다
        그냥 아무 생각없이 흘려 보냅니다
        이미 그렇게 되고 있습니다
        그저 노래의 멜로디에 편히 몸과 마음을 맡겨봅니다
        비소리가 들리고 파도소리가 느껴집니다
        그냥 그대로 모든것이 흘러갑니다
        곧 좋아집니다 
        조금만 더 우리 힘내요..그대`,
                image: "https://i.ytimg.com/vi/X28xMvQmRII/hqdefault.jpg",
                category: "편암함",
                detail: "피아노;주파수",
                link: "https://www.youtube.com/watch?v=X28xMvQmRII",
                type: "video",
                genres: "피아노;주파수",
                year: "2020-6-28"
            },
            {
                id: 143,
                title: "응답하라 1988 노래모음 총 11곡",
                director: "음악여우",
                runtime: 41.48,
                summary:
                    `1. 소녀 - 오혁
        2. 청춘 - 김필
        3. 걱정말아요 그대 - 이적
        4. 혜화동 - 박보람
        5. 네게 줄 수 있는 건 오직 사랑 뿐 - 디셈버
        6. 보라빛 향기 - WABLE
        7. 함께 - 노을
        8. 매일 그대와 - 소진
        9. 세월이 가면 - 기현
        10. 이젠 잊기로 해요 - 여은
        11. 기억날 그날이 와도 - 앤씨아`,
                image: "https://i.ytimg.com/vi/3IBybe-a6ps/hqdefault.jpg",
                category: "편암함",
                detail: "응답하라;1988",
                link: "https://www.youtube.com/watch?v=3IBybe-a6ps",
                type: "video",
                genres: "응답하라;1988",
                year: "2019-6-22"
            },
            {
                id: 144,
                title: "(응답하라, 슬기로운 시리즈) 훈훈, 신나는 또는 기분좋은 리메이크 ost 모음 ",
                director: "나만의 뮤직플레이어",
                runtime: 70,
                summary:
                    `(0:00)   1. 미도와 파라솔 - 너에게 난, 나에게 넌 (슬기로운 의사생활 ost)  (원곡가수: 자전거 탄 풍경)
        (3:51)   2. 곽진언 - 시청 앞 지하철 역에서 (슬기로운 의사생활 ost)  (원곡가수: 동물원)
        (8:48)   3. 제이레빗 - 넌 언제나 (슬기로운 의사생활 ost)  (원곡가수: 모노)
        (13:05)   4. 조이 - 좋은 사람 있으면 소개시켜줘 (슬기로운 의사생활 ost)  (원곡가수: 베이시스)
        (16:08)   5. 어반자카파 - 그대 고운 내사랑 (슬기로운 의사생활 ost)  (원곡가수: 이정열)
        (19:59)   6. 조정석 - 아로하 (슬기로운 의사생활 ost)  (원곡가수: 쿨)
        (24:04)   7. 에릭남 - Bravo, My Life (슬기로운 감빵생활 ost)  (원곡가수: 봄여름가을겨울)
        (28:10)   8. 앤씨아 - 기억날 그날이 와도 (응답하라 1988 ost)  (원곡가수: 홍성민)
        (31:56)   9. 소진 - 매일 그대와 (응답하라 1988 ost)  (원곡가수: 들국화)
        (35:12)   10. 오혁 - 소녀 (응답하라 1988 ost)  (원곡가수: 이문세)
        (38:59)   11. 박보람 - 혜화동 (혹은 쌍문동) (응답하라 1988 ost)  (원곡가수: 동물원)
        (43:23)   12. 여은 - 이젠 잊기로 해요 (응답하라 1988 ost)  (원곡가수: 이장희)
        (47:18)   13. 와블 - 보라빛향기 (응답하라 1988 ost)  (원곡가수: 강수지)
        (51:01)   14. 성시경 - 너에게 (응답하라 1994 ost)  (원곡가수: 서태지와 아이들)
        (54:55)   15. 고아라 - 시작 (응답하라 1994 ost)  (원곡가수: 박기영)
        (58:55)   16. 김예림 - 행복한 나를 (응답하라 1994 ost)  (원곡가수: 에코)
        (1:03:07)   17. B1A4 - 그대와 함께 (응답하라 1994 ost)  (원곡가수: 더 블루)
        (1:06:18)   18. 정우&유연석&손호준 - 너만을 느끼며 (응답하라 1994 ost)  (원곡가수: 더 블루)`,
                image: "https://i.ytimg.com/vi/nLv-DcqN_Z0/hqdefault.jpg",
                category: "편안함",
                detail: "응답하라;1988;1994;8090;추억",
                link: "https://www.youtube.com/watch?v=nLv-DcqN_Z0",
                type: "video",
                genres: "응답하라;1988;1994;8090;추억",
                year: "2020-6-12"
            },
            {
                id: 145,
                title: "마음이 편안해지는 힐링음악",
                director: "뮤직 메이트 Music Mate",
                runtime: 200,
                summary:
                    `#힐링음악 #명상음악 #편안한음악`,
                image: "https://i.ytimg.com/vi/ZQWrleq-NhQ/hqdefault.jpg",
                category: "편안함",
                detail: "힐링;명상",
                link: "https://www.youtube.com/watch?v=ZQWrleq-NhQ",
                type: "video",
                genres: "힐링;명상",
                year: "2021-1-3"
            },
            {
                id: 146,
                title: "하루 한번만 들어라! 되지 않던 일들도 술술 풀린다. 모든일들이 잘 해결된다",
                director: "귓전명상 채환TV Healing Meditation ChaeHwanTV",
                runtime: 180,
                summary:
                    `
        마음이 편안하면 
        안되던 일도 잘 된다
        내가 일이 잘 풀리지 않는것은
        내 마음이 편안하지 않아서이다
        
        마음이 편안하면 
        안색부터 달라지고
        마음이 불편하면 
        소화부터 잘 되지 않는다
        
        깊은 걱정과 괴로움은 
        사람의 뼈까지 상하게 한다
        
        팔만대장경을 다섯 글자로 줄이면
        "일체유심조(一切唯心造)" 
        즉, 모든것은 오로지 마음이 지어내는 것이며,
        단, 한 글자로 줄이면 마음 심(心)자 이다 
        
        꽃을 보며 이쁘다 하면 내가 좋고
        달을 보고 슬프다 하면 내가 슬픈것이다
        
        어떤 이가 나를 보고 욕을 하고 무시해도
        내가 그 욕을 마음에 담지 않으면
        그 욕은 욕한 사람의 것이 된다
        
        모든 고통과 괴로움은 그 자체가 문제가 아니라
        그것을 어떻게 받아들이느냐 에 따라 
        그 고통은 금새 사라질수도 있고
        평생 마음의 짐으로 살아갈수도 있다
        
        그러니 마음 하나하나 씀씀이에 다시 한번
        주의를 기울이고 알아차려야 한다
        
        그리고 마음을 쓸때는 항상 배려와 겸손을
        잊지 않아야 한다
        
        맹인 한 사람이 머리에 물동이를 이고 손에 
        등불을 든 채 걸어오고 있었다. 
        마주 오던 한 사람이 물었다. 
        
        앞도 못보는 맹인이 왜 등불을 들고 다닙니까?" 
        
        맹인이 대답했다. 
        
        "당신이 제게 부딪히지 않기 위해서입니다." 
        "이 등불은 내가 아닌 당신을 위한 것입니다."
        
        일본의 부모들은 자녀에게 항상 남에게 폐를 끼치
        지 말라고 가르친다.
        미국의 부모들은 자녀에게 항상 남에게 양보 하라고 
        가르친다.
        
        그에 달리 한국의 부모들은 자녀에게 절대 남에게
        지지 말고 기 죽지 말라고 가르친다.
        
        「욕심의 마음」은 부릴수록 더 부풀고 
        「미움의 마음」은 가질수록 더 거슬리며 
        「원망의 마음」은 보탤수록 더 분하고 
        「아픔의 마음」은 되씹을수록 더 아리며 
        「괴로움의 마음」은 느낄수록 더 깊어지고
        「집착의 마음」은 낼수록 더 질겨지는 것이니
        
        부정적인 마음은 지금 바로 물흐르듯 흘려보낸다 .
        흘려보내고 나면 불편하던 마음이 편안해지고, 
        마음이 평안해지면 살아가는 일이 평온하고 즐겁다.
        
        「칭찬의 마음」은 해줄수록 더 잘하게 되고… 
        「정의 마음」은 나눌수록 더 가까워지며… 
        「사랑의 마음」은 베풀수록 더 애틋해지고… 
        「몸의 마음」은 낮출수록 더 겸손해지며… 
        「마음의 공간」은 비울수록 더 편안해지니
        이렇게 마음의 눈을 매순간 알아차리고 깨어있으면 … 
        「행복의 크기」는 숨쉴때마다 더 커진다 `,
                image: "https://i.ytimg.com/vi/znr0HjgisQI/hqdefault.jpg",
                category: "편암함",
                detail: "명상;말씀",
                link: "https://www.youtube.com/watch?v=znr0HjgisQI",
                type: "video",
                genres: "명상;말씀",
                year: "2020-7-26"
            },
            {
                id: 147,
                title: "포기하지 마세요 (동기부여)",
                director: "피지컬갤러리",
                runtime: 3.41,
                summary:
                    `
        피지컬갤러리 동기부여 영상 Ep4
        포기하지 마세요. Never give up
        `,
                image: "https://i.ytimg.com/vi/Qd1MBEhkWU8/original.jpg",
                category: "동기부여",
                detail: "강함",
                link: "https://www.youtube.com/watch?v=Qd1MBEhkWU8",
                type: "video",
                genres: "강함",
                year: "2019-8-31"
            },
            {
                id: 148,
                title: "왜 3000시간이 필요한가? [동기부여 영상]",
                director: "체인지그라운드",
                runtime: 8.02,
                summary:
                    `인생을 바꾸고 싶다면 3,000시간은 기본이다`,
                image: "https://i.ytimg.com/vi/q2FV5HzIz3k/original.jpg",
                category: "동기부여",
                detail: "인생설계",
                link: "https://www.youtube.com/watch?v=q2FV5HzIz3k",
                type: "video",
                genres: "인생설계",
                year: "2021-3-21"
            },
            {
                id: 149,
                title: "50조 부자가 알려주는 당신이 가난한 이유 | 댄 페냐 동기부여",
                director: "작심만일 : 성공 마인드 동반자",
                runtime: 10.22,
                summary:
                    `#댄페냐 #동기부여 #동기부여영상
    
        댄 페냐는 70대 노인이지만
        엄청난 에너지를 내뿜습니다
        
        그가 엄청난 부자가 될 수 있었던 것은
        남 다른 마인드를 갖고 있었기 때문입니다
        
        그는 부자가 되기 위해서 
        '하지 말아야할 것'들을 소리칩니다
        
        조금은 과격한 표현들이 보이지만
        틀린 말은 하나도 없습니다
        
        우리가 무엇을 바꾸어야하고
        어떠한 마인드로 살아가야하는지
        알아보도록 합시다
        
        성공 마인드 동반자 작심만일에서
        동기부여 받고 마인드 전환하고 가세요 :)`,
                image: "https://i.ytimg.com/vi/RdPkYFBVkU4/original.jpg",
                category: "동기부여",
                detail: "가난;부자",
                link: "https://www.youtube.com/watch?v=RdPkYFBVkU4",
                type: "video",
                genres: "가난;부자",
                year: "2021-6-8"
            },
            {
                id: 150,
                title: "진짜 부자가 답답해서 알려주는 6가지 비밀",
                director: "무브마인드, 마음을 움직이는 소리",
                runtime: 9.42,
                summary:
                    `‘부자아빠 가난한 아빠’ 의 저자 로버트 기요사키의 핵심 메시지 6가지를 공유합니다
        자본주의 사회에서 꼭 필요한 것들이 무엇인지 우리는 배워야만 합니다
        그래야 적어도 돈 때문에 불행한 삶을 살진 않을 것 같습니다..
        많은 분들이 공감하고 깨닫고 더 나은 삶을 행복하게 사셨으면 좋겠습니다`,
                image: "https://i.ytimg.com/vi/9RMy2LHZQM0/original.jpg",
                category: "동기부여",
                detail: "돈;부;자본주의",
                link: "https://www.youtube.com/watch?v=9RMy2LHZQM0",
                type: "video",
                genres: "돈;부;자본주의",
                year: "2021-5-5"
            },
            {
                id: 151,
                title: "미루는 습관을 당장 고치는 확실한 방법",
                director: "체인지그라운드",
                runtime: 8.47,
                summary:
                    `며칠 뒤에 하겠다는 말은 하지 않겠다는 말이다`,
                image: "https://i.ytimg.com/vi/OWBQFK6m5N4/original.jpg",
                category: "동기부여",
                detail: "습관",
                link: "https://www.youtube.com/watch?v=OWBQFK6m5N4",
                type: "video",
                genres: "습관",
                year: "2021-2-9"
            },
            {
                id: 152,
                title: "동기부여 MINDSET ♣ 도전을 앞둔 사람들은 꼭 보세요 ♣",
                director: "제임스비디오 James video",
                runtime: 5.05,
                summary:
                    `도전을 앞둔, 도전중인, 도전을 계획중인 
        모든 도전자에게 보냅니다
        켈트족의 기도문처럼 저를 포함한 모든 도전자들의 꿈을 응원합니다    - 스승의날 2019 - `,
                image: "https://i.ytimg.com/vi/VVVexNYIc5Y/original.jpg",
                category: "도전",
                detail: "불편함;문제;해결",
                link: "https://www.youtube.com/watch?v=VVVexNYIc5Y",
                type: "video",
                genres: "불편함;문제;해결",
                year: "2019-5-15"
            },
            {
                id: 153,
                title: "엘리트가 결국 성공하는 이유는 단 '2가지' 때문이었다",
                director: "작심만일 : 성공 마인드 동반자",
                runtime: 11.13,
                summary:
                    `#홍정욱 #동기부여 #동기부여영상
    
        성공 마인드 동반자 작심만일에서
        동기부여 받고 마인드 전환하고 가세요!
        
        작심만일은 마인드코칭 서비스를 제공합니다.
        당신의 생각 행동 태도는 모두 마인드로부터 출발합니다.
        
        작심만일의 '적자생존 마인드'를 장착하여 성공의 길을 걸어가세요!
        '혼자'가 아닌 '함께' 성장합시다 :)
    
        All For You 추천
        `,
                image: "https://i.ytimg.com/vi/hAV72H75_-o/original.jpg",
                category: "도전",
                detail: "실패;두려움;공포;극복",
                link: "https://www.youtube.com/watch?v=hAV72H75_-o",
                type: "video",
                genres: "실패;두려움;공포;극복",
                year: "2021-11-6"
            },
            {
                id: 154,
                title: "(유지)유재석의 마법 같은 조언. 넘어진 사람도 다시 일으켜 버리는 감동 위로",
                director: "감성힐러 JAy",
                runtime: 3.12,
                summary:
                    `하는 말마다 위로와 동기부여가 되는 유재석의 명언
        넘어진 당신을 다시 일으켜 세워줄 최고의 명언
        위로가 되고 힘이 되어 주는 유재석의 조언
        
        포기하고 싶을 때
        그만두고 싶을 때
        도움이 되는 유재석 동기부여 영상
        
        "넘어지는 걸 두려워하지 마세요"
        스스로를 믿고 중심을 잡으면 돼요
        안되는 게 어딨어!! 하면 돼요!!
        
        세상에 안되는 일은 없다
        다만 시간이 걸릴 뿐이다`,
                image: "https://i.ytimg.com/vi/959n3K4Knmo/original.jpg",
                category: "도전",
                detail: "실패;포기;성공;자신감;두려움;can",
                link: "https://www.youtube.com/watch?v=959n3K4Knmo",
                type: "video",
                genres: "실패;포기;성공;자신감;두려움",
                year: "2021-3-30"
            },
            {
                id: 155,
                title: "일론 머스크를 눈물 짓게 만든 질문 【동기부여】ㅣ한영자막",
                director: "잭스파이어 Jackspire",
                runtime: 4.54,
                summary:
                    `미국의 첫 민간 우주기업인 스페이스X는 최근 팔콘9를 성공적으로 발사하면서 전 세계의 이목을 끌었습니다. 하지만 성공적인 발사를 하기까지 수 많은 실패를 경험했는데요. 일론 머스크의 인터뷰를 통해 그의 기업가 정신을 만나 보세요.`,
                image: "https://i.ytimg.com/vi/ZukL_AoGJLA/original.jpg",
                category: "도전",
                detail: "can",
                link: "https://www.youtube.com/watch?v=ZukL_AoGJLA&t=104s",
                type: "video",
                genres: "can",
                year: "2020-6-1"
            },
            {
                id: 156,
                title: "남들보다 뒤처진 것 같아 불안한 당신에게",
                director: "체인지그라운드",
                runtime: 5.07,
                summary:
                    `"여러분이 만약 절박하다면 
        남들보다 더 열심히 하고, 남들보다 더 공부 집중해서 하면 
        오히려 내가 초기값은 작았지만 기울기가 크기 때문에
        훨씬 큰 값을 만들 수 있는 거죠. 미래에는."
        `,
                image: "https://i.ytimg.com/vi/b84k3aSfaZM/original.jpg",
                category: "도전",
                detail: "절실;행동;노력",
                link: "https://www.youtube.com/watch?v=b84k3aSfaZM",
                type: "video",
                genres: "절실;행동;노력",
                year: "2019-4-12"
            },
            {
                id: 157,
                title: "어떤 상황에서도 나는 부딪혀 이길 수 있는 사람이 된다 ",
                director: "멘탈훈련소",
                runtime: 3.42,
                summary:
                    `다들 안된다고 할 때
        '나는 분명히 될 거야'라는 믿음을 가지고 나아가는 것
        
        * 손석희
        * 심우철
        * 신용한
        ＊이충권
        * 강원우
        * 권규호
        * 한석규
        ＊이지영
        ＊ 정승제
        * 한석원`,
                image: "https://i.ytimg.com/vi/I7-O1z8w9c8/original.jpg",
                category: "도전",
                detail: "can",
                link: 'https://www.youtube.com/watch?v=I7-O1z8w9c8',
                type: "video",
                genres: "can",
                year: "2021-10-9"
            },
            {
                id: 158,
                title: "노숙자가 내뱉은 뜻 밖의 한 마디",
                director: "잭스파이어 Jackspire",
                runtime: 5.22,
                summary:
                    `조셉 로버츠는 청소년기에 긴 방황을 하다 한 노숙자를 만나게 되는데..
        
          Speaker : 조셉 로버츠 (Joseph Roberts)
          Music by Audio Jungle
        `,
                image: "https://i.ytimg.com/vi/c3iJuLXa3io/original.jpg",
                category: "눈물",
                detail: "감동",
                link: "https://www.youtube.com/watch?v=c3iJuLXa3io",
                type: "video",
                genres: "감동",
                year: "2019-10-9"
            },
            {
                id: 159,
                title: "10분만 더 숨쉬다가... (감동실화)",
                director: "목소리예쁜눈나",
                runtime: 6.36,
                summary:
                    `더빙: 눈나
        그림: 안예쁨
        음악: 
        Tido Kang - 
        북극성, 
        별에서 보내는 메세지,
        흔적`,
                image: "https://i.ytimg.com/vi/UficZg7R7ss/original.jpg",
                category: "눈물",
                detail: "실화",
                link: "https://www.youtube.com/watch?v=UficZg7R7ss",
                type: "video",
                genres: "감동",
                year: "2021-4-23"
            },
            {
                id: 160,
                title: "669명의 생명을 구한 감동 실화 니콜라스 윈턴 이야기",
                director: "Helper's High 헬퍼스하이",
                runtime: 7.57,
                summary:
                    `영국의 쉰들러라고 불리는 니콜라스 윈턴경
        그가 50년동안 숨겨왔던 비밀이 세상에 알려지게 되는데요...
        어떤 일이 있었는지 영상에서 확인해보세요 :)
        #니콜라스윈턴 #감동영상 #선행영상 #touchingvideo
        `,
                image: "https://i.ytimg.com/vi/hQbQFRhRcmU/original.jpg",
                category: "눈물",
                detail: "실화",
                link: "https://www.youtube.com/watch?v=hQbQFRhRcmU",
                type: "video",
                genres: "실화",
                year: "2020-11-6"
            },
            {
                id: 161,
                title: "프리스턴 대학을 달군 레전드 졸업 연설ㅣ제프 베조스 동기부여",
                director: "잭스파이어 Jackspire",
                runtime: 4.54,
                summary:
                    `세계 1위 부자인 제프 베조스가 프린스턴 대학교에서 한 졸업 연설은 전 세계를 뜨겁게 달구는데..
    
        강연자 : 제프 베조스
        `,
                image: "https://i.ytimg.com/vi/_Z3xHCtYIYI/original.jpg",
                category: "동기부여",
                detail: "can",
                link: "https://www.youtube.com/watch?v=_Z3xHCtYIYI",
                type: "video",
                genres: "can",
                year: "2019-4-9"
            },
            {
                id: 162,
                title: "감동실화 어느 사형수 이야기 눈물없이 볼 수 없어요",
                director: "감동맨",
                runtime: 2.08,
                summary:
                    `감동실화 어느 사형수 이야기 입니다.
    
        *본 내용은 주변에서 벌어지는 일들을 중심으로
    각색하여 제작한 영상이므로 사실+픽션임을 알려드리며,
    영상속 사진도 실제와는 아무런 상관이 없음을 알려드립니다*
        `,
                image: "https://i.ytimg.com/vi/XxQBkxz7omA/original.jpg",
                category: "눈물",
                detail: "감동실화",
                link: "https://www.youtube.com/watch?v=XxQBkxz7omA",
                type: "video",
                genres: "감동실화",
                year: "2020-8-31"
            },
            {
                id: 163,
                title: "가난한 친구 아내가 보내온 눈물젖은 축의금 만 원] 감동실화 감동적인 이야기 명언 좋은글",
                director: "뷰티플 스토리",
                runtime: 9.44,
                summary:
                    `♡ 감동실화 감동적인 이야기 명언 좋은글 좋은글귀  좋은글 모음
    
        ♡ 마음이 풍요로워지는 좋은글귀  아름다운 글 감동의 글
        
        가난한 친구 아내가 보내온 눈물젖은 축의금 만 원
        
        친구야! 나대신 아내가 간다.
        가난한 내 아내의 눈동자에 내 모습도 함께
        담아 보낸다.
        
        하루를 벌어야지 하루를 먹고사는 
        리어카 사과장사가 이 좋은날 너와 함께 
        할 수 없음을 용서해다오!`,
                image: "https://i.ytimg.com/vi/C0gKn2pJIsg/original.jpg",
                category: "눈물",
                detail: "감동실화",
                link: "https://www.youtube.com/watch?v=C0gKn2pJIsg",
                type: "video",
                genres: "감동실화",
                year: "2021-1-28"
            },
            {
                id: 164,
                title: "전국민을 울린 이산가족 남매",
                director: "KOREAN DIASPORA KBS",
                runtime: 4.53,
                summary:
                    `■ 넌 김씨가 아니야 허씨란 말이야.
        83년 이산가족방송에서 가장 유명해진 허씨 남매.
        오빠는 고아원으로 보내고 여동생은 이발소에 맡겨졌다 다시 고아원으로...
        전쟁고아 남매의 슬픈 이야기는 전 국민을 울렸습니다.
        
        1983년 453시간 연속 생방송으로 방영되어
        유네스코 세계기록문화유산에 등재된 KBS '이산가족을 찾습니다'`,
                image: "https://i.ytimg.com/vi/9kk11wIkCB0/original.jpg",
                category: "눈물",
                detail: "가족;이산가족",
                link: "https://www.youtube.com/watch?v=9kk11wIkCB0",
                type: "video",
                genres: "가족;이산가족",
                year: "2019-8-3"
            },
            {
                id: 165,
                title: "노래로 찾은 일가족",
                director: "KOREAN DIASPORA KBS",
                runtime: 4.01,
                summary:
                    `가족을 찾다 부른 우리가족 18번 곡 
        그 노래를 듣고 찾아온 이산가족이 있다?! 
        가족이 보고 싶을 때마다 부른 노래, 기적을 만들어 내다.
        
        1983년 453시간 연속 생방송으로 방영되어 
        유네스코 세계기록문화유산에 등재된 KBS '이산가족을 찾습니다' `,
                image: "https://i.ytimg.com/vi/yxiSQQG4914/original.jpg",
                category: "눈물",
                detail: "가족;이산가족",
                link: "https://www.youtube.com/watch?v=yxiSQQG4914",
                type: "video",
                genres: "가족;이산가족",
                year: "2019-11-14"
            },
            {
                id: 166,
                title: "이 신부의 특별한 사연은 결혼식장을 눈물바다로 만들었다",
                director: "체인지그라운드",
                runtime: 6.20,
                summary:
                    `#감동실화 #감동이야기 #결혼식 #엄마와딸
    
        결혼식을 앞두고 서로에게 잊지 못할 선물을 했던 어머니와 딸.
        많은 하객들도 안타까움과 기쁨, 그리고 감동을 감추지 못했습니다.
        그 날 결혼식장에선 대체 무슨 일이 있었을까요?`,
                image: "https://i.ytimg.com/vi/cLR6x66N64o/original.jpg",
                category: "눈물",
                detail: "사연;감동실화",
                link: "https://www.youtube.com/watch?v=cLR6x66N64o",
                type: "video",
                genres: "사연;감동실화",
                year: "2019-1-27"
            },
            {
                id: 167,
                title: "중학생 전체가 눈물 바다 된 '한 엄마와 아들'의 사연",
                director: "포크포크",
                runtime: 5.29,
                summary:
                    `나를위해서 목숨도내놓을수있는 사람은 부모밖에없다
    
        The mother's breath is always sweet:어머니의 숨결은 언제나 달다.
    
    Without you, i have never existed: 당신이(부모님)이 없었으면 전 존재하지도 않았어요.
    
    The happiest thing of my life is that i am your son
    :당신의 아들로 태어난 것이 저의 가장 큰 행복입니다.
    
    Whatever happens, your parents are always on your side
    :무슨일이 있던간에 너의 부모님은 항상 너의 편이다.
    
    Wise son brings joy to his father, but a foolish man despises his mother:
    지혜로운 아들은 아버지를 즐겁게 하지만, 미련한 자는 어머니를 업신여긴다.
    ★업신여긴다:[동사] 교만한 마음에서 남을 낮추어 보거나 하찮게 여기다.★
    
    The father's love lasts to the grave; the mother's love is eternal
    :아버지의 사랑은 무덤까지 가고, 어머니의 사랑은 영원하다.
        `,
                image: "https://i.ytimg.com/vi/LuS804MdrCc/original.jpg",
                category: "눈물",
                detail: "감동실화;어머니;",
                link: "https://www.youtube.com/watch?v=LuS804MdrCc",
                type: "video",
                genres: "감동실화;어머니;",
                year: "2017-8-10"
            },
            {
                id: 168,
                title: "[감동실화] 너무 슬픈 라디오 사연 이야기",
                director: "감스",
                runtime: 8.36,
                summary:
                    `
        #감동 #감동이야기 #감동실화 #눈물
        라디오사연,
        자식의 죽음,
        딸을 지켜주지 못한 아빠의가 딸에게 보내는 편지
        `,
                image: "https://i.ytimg.com/vi/B8gUl_Pki7Y/original.jpg",
                category: "눈물",
                detail: "라디오사연",
                link: "https://www.youtube.com/watch?v=B8gUl_Pki7Y",
                type: "video",
                genres: "라디오사연",
                year: "2020-4-17"
            },
            {
                id: 169,
                title: "초등학교 졸업식에 어머니를 오지 못하게 한 이상준, 그리고 10년 후",
                director: "SBS TALK PLUS",
                runtime: 11.23,
                summary:
                    `어머니를 초등학교 졸업식에 오지 못하게 했던 이상준,
        10년 후 친구의 졸업식 사진에서 발견한 꽃다발을 들고 있는 엄마...
        그리고 20년 후, 어머니와의 진심이 담긴 통화..
        `,
                image: "https://i.ytimg.com/vi/DEhr_f_I9ps/original.jpg",
                category: "눈물",
                detail: "어머니;사연",
                link: "https://www.youtube.com/watch?v=DEhr_f_I9ps",
                type: "video",
                genres: "어머니;사연",
                year: "2020-06-10"
            },
            {
                id: 170,
                title: "공개되자마자 전세계 관중들의 눈물샘을 터트려버린 올해 마지막 최고의 영화",
                director: "Popcorn & Coke Review",
                runtime: 16.50,
                summary:
                    `안녕하세요! 영화리뷰채널의 팝콘&콜라 입니다. 
        이번 강력추천드릴 영화는 올해 마지막으로 여러분 모두에게 폭풍감동을 선사해 줄 영화 언포기버블 입니다. 
        살인죄로 20년형을 선고받은 주인공. 20년 뒤 그녀가 출소하게 되는데... 
        영상을 통해 놀라운 그녀의 사연을 확인해 보시기 바랍니다!`,
                image: "https://i.ytimg.com/vi/HrLYHV9-Oug/original.jpg",
                category: "눈물",
                detail: "영화추천",
                link: "https://www.youtube.com/watch?v=HrLYHV9-Oug",
                type: "video",
                genres: "영화추천",
                year: "2021-12-28"
            },
            {
                id: 171,
                title: "ENG SUB) To.말기암 아빠 마지막으로 하고 싶은 말 [무엇이든 물어보살 65화]",
                director: "MYSTIC TV",
                runtime: 11.49,
                summary:
                    ` 
        *MC: 서장훈, 이수근
        
        “말기암 아빠, 어떻게 하면 잘 보내드릴 수 있을까요?””
        한 달 시한부 선고를 받은 사랑하는 아빠
        갑작스레 다가온 이별이 아직 실감나지 않는데...
        진심을 담아 아빠에게 전하는 14살 딸의 편지`,
                image: "https://i.ytimg.com/vi/SftWsgpUfEs/original.jpg",
                category: "눈물",
                detail: "가족;사연;고민",
                link: "https://www.youtube.com/watch?v=SftWsgpUfEs",
                type: "video",
                genres: "가족;사연;고민",
                year: "2020-6-29"
            },
            {
                id: 172,
                title: "(폭풍눈물주의) 엄마의 시간",
                director: "올댓스토리",
                runtime: 5.01,
                summary:
                    `엄마는 왜 하고 있는데 자꾸 하라고 하는 걸까...?`,
                image: "https://i.ytimg.com/vi/3nwkbBhLSiQ/original.jpg",
                category: "눈물",
                detail: "어머니;걱정",
                link: "https://www.youtube.com/watch?v=3nwkbBhLSiQ",
                type: "video",
                genres: "어머니;걱정",
                year: "2018-5-16"
            },
            {
                id: 173,
                title: "눈물댐 개방하는 오열각 사연들💧 미안하다, 고맙다 반복하는 자기님들에 맴찢폭발,,",
                director: "tvN D ENT",
                runtime: 19.41,
                summary:
                    `#모아봤zip #Diggle
        눈물댐 개방하는 오열각 사연들💧 미안하다, 고맙다 반복하는 자기님들에 맴찢폭발,, |  유퀴즈온더블럭`,
                image: "https://i.ytimg.com/vi/egDP9TaNjIQ/original.jpg",
                category: "눈물",
                detail: "유퀴즈;사연;6.25",
                link: "https://www.youtube.com/watch?v=egDP9TaNjIQ&t=10s",
                type: "video",
                genres: "유퀴즈;사연;6.25",
                year: "2020-4-1"
            },
            {
                id: 174,
                title: "찐빵장수 부부의 눈물나는 아름다운 이야기",
                director: "뷰티플 스토리",
                runtime: 8.40,
                summary:
                    `♡ 감동실화 감동적인 이야기 명언 좋은글 좋은글귀  좋은글 모음
    
        ♡ 마음이 풍요로워지는 좋은글귀  아름다운 글 감동의 글
        
        찐빵장수 부부의 눈물나는 아름다운 이야기
        
        찐빵을 찌는 찜통의 새하얀 김이 모락모락 피어나는 뒤편으로 왠 아이 둘이 찐빵을 쌍아 놓은 진열장을 물끄러미 쳐다보고 있는 것이 보였습니다.
        
        큰애가 누나인 듯하고 작은 애가 남동생 인 듯한데 무슨 이유로 찐빵을 쳐다보고 가는지 알 수는 없지만 그날 이후 자주 그 애들이 가게 앞을 서성이다 가는 것이 보였습니다.
        
        저희 가게는 동네 어귀에서 찐빵이며 어묵, 떡볶이, 만두 등을 파는 작은 분식점입니다....
        
        #감동실화#감동적인이야기#좋은글#명언#좋은글모음`,
                image: "https://i.ytimg.com/vi/gS5e8IAkyaM/original.jpg",
                category: "눈물",
                detail: "사연",
                link: "https://www.youtube.com/watch?v=gS5e8IAkyaM",
                type: "video",
                genres: "사연",
                year: "2020-12-9"
            },
            {
                id: 175,
                title: "가족 그리고 눈물 모음 1탄",
                director: "nami nami",
                runtime: 5.53,
                summary:
                    `영상 만들면서 많이 울었어요..!
    
        지나고보니.. 언제나 묵묵히 밑도 끝도 없이 내 이야기를 진지하게 들어주길 바랬고, 나의 고민을 함께 나누고 응원해주길 바랬던..ㅠㅠ
        부모님 속을 썩인 적도 없는 저이지만.. 그것도 그것나름의 스트레스가 많았어요.. 기대만큼 보여줘야 했고.. 겉으로는 아니지만 내면의 방황을 많이 했던거 같아요ㅠㅠ 지금도 문득 문득 슬픔이 찾아와요
        
        제 영상을 보는 모든 분들의 앞날은 꽃길만 가득하길..🌹🌹🌹`,
                image: "https://i.ytimg.com/vi/6ByKsXV9Yws/original.jpg",
                category: "눈물",
                detail: "조언;사연",
                link: "https://www.youtube.com/watch?v=6ByKsXV9Yws",
                type: "video",
                genres: "조언;사연",
                year: "2019-8-26"
            },
            {
                id: 176,
                title: "실패가 두려워 도전을 주저하는 당신이 꼭 봐야할 영상",
                director: "체인지그라운드",
                runtime: 4.58,
                summary:
                    `"우리는 가끔 세상을 향해 "엿이나 먹어"라고 외치는 법을 배울 필요가 있습니다."  _ 베네딕트 컴버배치`,
                image: "https://i.ytimg.com/vi/uCjKHv6fEk8/original.jpg",
                category: "도전",
                detail: "실패;두려움;주저",
                link: "https://www.youtube.com/watch?v=uCjKHv6fEk8",
                type: "video",
                genres: "실패;두려움;주저",
                year: "2018-1-14"
            },
            {
                id: 177,
                title: "도전을 두려워하는 당신이 꼭 봐야할 영상",
                director: "체인지그라운드",
                runtime: 4.19,
                summary:
                    `"실패는 후회가 될 수도 추억이 될 수도 있어. 
        충분히 시간이 지나게 되면 대부분이 추억이 되지만 도전하지 않는 것은 후회가 되지 결코 추억이 될 수는 없는 것 같아. 
        오랜 시간이 더 지났을 때 심지어 원망으로 바뀔 수 있고. 그러니 일단 도전해 보는 게 좋지 않을까?"  
        (참고: 두근두근, 신영준) 
        `,
                image: "https://i.ytimg.com/vi/68vWCxAzhRQ/original.jpg",
                category: "도전",
                detail: "두려움;주저;실피",
                link: "https://www.youtube.com/watch?v=68vWCxAzhRQ",
                type: "video",
                genres: "두려움;주저;실피",
                year: "2018-1-28"
            },
            {
                id: 178,
                title: "도전하고 싶은 당신을 위한 8가지 조언",
                director: "체인지그라운드",
                runtime: 11.20,
                summary:
                    `유튜브 구독자 1,350,000명, 누적 조회수 2억 5천만 회
        최고의 자기계발 채널 체인지그라운드의 모든 것을 담다!
        성장에서 무엇보다 중요한 것은 기울기다. 
        매일 조금씩이라도 어제보다 나은 오늘을 만들 수 있다면, 
        그 작은 성장이 누적되어 엄청난 차이를 만들 수 있다.
        
        『하루공부 365』는 자기계발 유튜브 채널 체인지그라운드에서
        5년 동안 꾸준히 업로드한 콘텐츠 중 최고의 영상만 선별하여, 
        성장(Growth), 관계(Relation), 기회(Opportunity), 부(Wealth), 
        시도(Try), 건강(Health)의 6가지 카테고리로 나누어 한 권의 책에 담았다. 
        그 내용을 하루에 하나씩, 365일 동안 1일 1성장할 수 있도록 
        달력 형태로 제작되었다.
        
        『하루공부 365』와 함께 매일 조금씩, 하지만 꾸준히, 
        성장하는 미래를 만들어 가보면 어떨까?
        잘 보이는 곳에 두고 하루에 한 편씩 읽어나가자. 
        매일매일 성장하기를 원하는 모두에게 『하루공부 365』는 
        최고의 성장 아이템이 되어줄 것이다.`,
                image: "https://i.ytimg.com/vi/6Dy1blqpjLE/original.jpg",
                category: "도전",
                detail: "실패;조언;성공",
                link: "https://www.youtube.com/watch?v=6Dy1blqpjLE",
                type: "video",
                genres: "실패;조언;성공",
                year: "2022-1-2"
            },
            {
                id: 179,
                title: "난 할 수 있다, 그래 넌 실패할 것이다",
                director: "양혁용",
                runtime: 3.58,
                summary:
                    `#동기부여#성공#실패`,
                image: "https://i.ytimg.com/vi/b3hzn9G18BQ/original.jpg",
                category: "도전",
                detail: "can;실패",
                link: "https://www.youtube.com/watch?v=b3hzn9G18BQ",
                type: "video",
                genres: "can;실패",
                year: "2020-5-31"
            },
            {
                id: 180,
                title: "[나의 아저씨 최종화 엔딩] 편안함에 이르렀는가..? 네.. 네.",
                director: "tvN drama",
                runtime: 4.16,
                summary:
                    `나의 아저씨 (2018) / 연출 김원석 각본 박해영
        출연 이지은, 이선균, 송새벽, 이지아
        각자의 방법으로 삶의 무게를 무던히 버텨내고 있는 아저씨 삼형제와 거칠고 차갑게 살아온 20대 여성이 서로의 삶을 통해 치유되는 과정에 대한 이야기`,
                image: "https://i.ytimg.com/vi/gRKVvInmo_8/original.jpg",
                category: "편암함",
                detail: "인생;드라마",
                link: "https://www.youtube.com/watch?v=gRKVvInmo_8&t=3s",
                type: "video",
                genres: "인생;드라마",
                year: "2018-5-18"
            },
            {
                id: 181,
                title: "묘하게 만족스럽고 편안함을 주는 스트레스 해소 영상",
                director: "e편한영상",
                runtime: 10.50,
                summary:
                    `여러개의 짤막한 영상으로 구성되어 있습니다`,
                image: "https://i.ytimg.com/vi/1uQYHYkYOLs/original.jpg",
                category: "편안함",
                detail: "영상",
                link: "https://www.youtube.com/watch?v=1uQYHYkYOLs",
                type: "video",
                genres: "영상",
                year: "2020-8-28"
            },
            {
                id: 182,
                title: "사는 게 답답하고 힘들어하는 당신을 위로해 줄 영상",
                director: "감성힐러 JAy",
                runtime: 2.21,
                summary:
                    `이건 명령인데..
        다 처음 살아보는 인생이라서 서툴겠지만,
        지금 있는 그대로도 너무 멋지고 잘하고 있으니까
        후회하고 실패하는 것도 더 멋지게 하고
        실수 좀 해도 괜찮으니깐 너무 초조해하지 마
        
        천천히 기다리면 언젠가 가장 예쁘게 필 거야..
        쫄지말고.. 아주 네 멋대로 살아봐..
        
        - 감성힐러 JAy -
        
        사는게 답답하고 힘들때 조언으로 편안함을 주는 영상
        `,
                image: "https://i.ytimg.com/vi/ViW6BMpl_Rg/original.jpg",
                category: "편암함",
                detail: "조언",
                link: "https://www.youtube.com/watch?v=ViW6BMpl_Rg",
                type: "video",
                genres: "조언",
                year: "2021-1-10"
            },
            {
                id: 183,
                title: "집중과 편안함에 도움을 주는 부드러운 빗소리+피아노 연주",
                director: "편안한음악 - Peaceful Relaxing",
                runtime: 180,
                summary:
                    `집중과 편안함에 도움을 주는 부드러운 빗소리+피아노 연주 | 하루10분 만병을 치료 해주는 힐링 명상 기치료 음악 및 영상, 스트레스 해소 음악, 긴장이완음악, 편안한 음악 `,
                image: "https://i.ytimg.com/vi/cr5n3rwrh-g/original.jpg",
                category: "편안함",
                detail: "자연소리;피아노",
                link: "https://www.youtube.com/watch?v=cr5n3rwrh-g",
                type: "video",
                genres: "자연소리;피아노",
                year: "2021-9-2"
            },
            {
                id: 184,
                title: "KOREA, 통영, Tongyeong, 사색 (180)",
                director: "밝은미소 Brightsmile",
                runtime: 4.37,
                summary:
                    `사색 (180) KOREA, 통영, Tongyeong, Time of Contemplation, 4k UHD, 마음의 울림을 주는 영상, 마음이 밝아지는 영상, 머리가 맑아지는 영상, 사색의 시간, 동기부여, 긍정, 변화, 성장
    
        A. 오늘의 사색 주제 : 세상에서 가장 먼 거리가 머리에서 가슴까지다.
        B. 동영상의 소재 : 통영
        C. 동영상에 적용된 음악: We_ll_Meet_Again.mp3
        D. 동영상 화질 : 동영상은 4k UHD 3840 × 2160 해상도로 제작되었습니다. UHDTV의 대형 화면에서 2160p 4k로 설정하시고 감상하시면 최고의 화질로 보실 수 있습니다.
    
        사색에 관하여
    우리는 종종 삶의 깊이를 더하기 위해
    가벼운 즐거움에 취해있기 보다는
    어떤 것에 대하여 깊이 생각하고 이치를 따지는 
    사색의 시간이 필요하다 생각합니다.
    가끔은 마음을 울리는 진리의 명언을
    되새기며 깊이 사색하다 보면
    마음이 조금씩 밝아짐을 느낍니다.
        `,
                image: "https://i.ytimg.com/vi/oqY9qTDwcJg/original.jpg",
                category: "편안함",
                detail: "통영;자연;영상;피아노",
                link: "https://www.youtube.com/watch?v=oqY9qTDwcJg",
                type: "video",
                genres: "통영;자연;영상;피아노",
                year: "2021-3-19"
            },
            {
                id: 185,
                title: "강아지 너무 입양하고 싶지만, 벽에 부딪힌 자매의 반응",
                director: "포크포크",
                runtime: 2.36,
                summary:
                    `어느 날, 유기견 보호소에 들른 한 가족. 그들은 그곳에서 세상 귀여운 강아지를 만난다. 자매는 곧 사랑에 빠졌지만, 부모는 입양이 쉬운 일이 아니라며 자리를 일어서려 하는데..`,
                image: "https://i.ytimg.com/vi/FoRygTlzeOo/original.jpg",
                category: "편안함",
                detail: "강아지;입양",
                link: "https://www.youtube.com/watch?v=FoRygTlzeOo",
                type: "video",
                genres: "강아지;입양",
                year: "2019-12-17"
            },
            {
                id: 186,
                title: "대형견 vs 아기 고양이",
                director: "밀키복이탄이MilkyBokiTan",
                runtime:
                    `2.58`,
                summary:
                    `▶ Profile
        묘종 : 노르웨이 숲 고양이
        이름 : 광복이
        성별 : 수컷
        생년월일 : 2018.08.15 
        
        ▶ Profile
        견종 : 사모예드 
        이름 : 밀키
        성별 : 수컷
        생년월일 : 2018.12.03
        
        ▶ Profile
        묘종 : 길고양이(유기동물 보호소 구조묘, 코리안 숏헤어) 
        이름 : 탄이
        성별 : 수컷
        생년월일 : 2020년 4월 말 추정`,
                image: "https://i.ytimg.com/vi/OQngFB1DQcc/original.jpg",
                category: "편안함",
                detail: "강아지;고양이",
                link: "https://www.youtube.com/watch?v=OQngFB1DQcc",
                type: "video",
                genres: "강아지;고양이",
                year: "2021-3-29"
            },
            {
                id: 187,
                title: "막아주고 안아주고 대신 혼나고…우리는 환상의 짝꿍!",
                director: "연합뉴스 Yonhapnews",
                runtime: 1.45,
                summary:
                    `(서울=연합뉴스) 최근 중국 한 가정에서 엄마에게 혼나는 아이를 감싸고 돌보는 반려견의 재롱이 화제입니다.
        지난 9일 중국 장쑤성 쉬저우에서 엄마의 화장품을 갖고 장난치던 2살 짜리 딸이 꾸중을 듣습니다.
        그러자 곁을 지키던 반려견이 아이 엄마의 눈치를 보면서도 혼이 나 울고 있는 아이의 편을 드는데요.
        딸 아이와 함께 커온 이 개는 6살된 골든리트리버로 늘 아이 곁을 함께 하면서 엄마의 꾸중도 막아주는 둘도 없는 든든한 베프(베스트 프렌드)입니다`,
                image: "https://i.ytimg.com/vi/eXXN34UXilk/original.jpg",
                category: "편안함",
                detail: "아기;강아지",
                link: "https://www.youtube.com/watch?v=eXXN34UXilk",
                type: "video",
                genres: "아기;강아지",
                year: "2020-10-15"
            },
            {
                id: 188,
                title: "한국영화 속 웃긴장면 레전드",
                director: "달콤살벌한 영화이야기",
                runtime: 28.03,
                summary:
                    `롤러코스터 (Fasten Your Seatbelt , 2013)
        시실리 2Km (To Catch A Virgin Ghost , 2004)
        아티스트 봉만대 (Playboy BONG , 2013)
        시체가 돌아왔다 (Over My Dead Body , 2012)
        나쁜 녀석들 더 무비 (The bad guys: Reign of chaos, 2019)
        내부자들 (Inside Men, 2015)
        가문의 영광 2-가문의 위기 (Marrying The Mafia II, 2005)
        만남의 광장 (Underground Rendez-vous, 2007)
        광해-왕이 된 남자 (Masquerade, 2012)
        형 (My Annoying brother, 2016)
        범죄도시 (The Outlaws, 2017)
        해적-바다로 간 산적 (The Pirates, 2014)
        남자 사용 설명서 (How to Use Guys with Secret Tips, 2012)
        부라더 (The Bros, 2017)
        극한직업 (Extreme Job, 2018)
        건축학 개론 (Architecture 101 , 2012)
        럭키 (Luck-Key, 2015)
        사랑이 무서워 (Shotgun Love, 2012)
        관상 (The Face Reader, 2013)
        그것만이 내 세상 (Keys to the Heart , 2017)
        해치지 않아 (Secret Zoo, 2019)
        백두산 (Ashfall, 2019)
        아라한 장풍 대작전 (Arahan Jangpung Daejakjeon, 2004)
        품행 제로 (No Manners, 2002)
        커플즈 (Couples , 2011)
        이장과 군수 (Small Town Rivals , 2007)
        가문의 부활 (Marrying The Mafia 3 , 2006)
        플랜맨 (The Plan Man , 2013)
        좀비 크러쉬 헤이리 (Zombie Crush in Heyri , 2021)
        퍼펙트맨 (Man of Men , 2018)
        엑시트 (Exit, 2019)
        까불지마 (Shit Up! , 2004)
        쩨쩨한 로맨스 (Petty Romance , 2010)
        완벽한 타인 (Intimate Strangers , 2018)
        `,
                image: "https://i.ytimg.com/vi/zbUjqKwUbDo/original.jpg",
                category: "웃음",
                detail: "영화",
                link: "https://www.youtube.com/watch?v=zbUjqKwUbDo",
                type: "video",
                genres: "영화",
                year: "2021-9-14"
            },
            {
                id: 189,
                title: "박명수 - 전설이 될 238번 훈련병 Yes I Can!!",
                director: "TV-People",
                runtime: 18.18,
                summary:
                    `*이 영상은 편집본입니다*
        무한도전 537회 : 진짜사나이 1편 박명수 분량체크`,
                image: "https://i.ytimg.com/vi/pF_rqav38Z4/original.jpg",
                category: "웃음",
                detail: "무한도전",
                link: "https://www.youtube.com/watch?v=pF_rqav38Z4",
                type: "video",
                genres: "예능",
                year: "2017-7-11"
            },
            {
                id: 190,
                title: "신서유기 레전드 없대요? 아뇨 여기 있대요",
                director: "tvN D ENT",
                runtime: 15.21,
                summary:
                    `#신서유기 #유물발굴단 #Diggle 
        02:42 신서유기 웃참
        07:15 ........ 업데...없대요...? 
        07:55 언지원
        10:13 tvN 기둥뽑는 송가락 
        12:25 내 사랑 김상숭?  
        14:14 대한민국 최초 방귀 튼 아이돌 
        14:40 아무말 대잔치 `,
                image: "https://i.ytimg.com/vi/7tq0jEtdujI/original.jpg",
                category: "웃음",
                detail: "신서유기",
                link: "https://www.youtube.com/watch?v=7tq0jEtdujI",
                type: "video",
                genres: "신서유기",
                year: "2018-9-29"
            },

            {
                id: 191,
                title: "[컬투쇼 4차UCC] 최우수상 조폭 아저씨의 운전 가르침 (김재호)",
                director: "SBS Radio 에라오",
                runtime: 4.19,
                summary:
                    `컬투쇼 제4차 UCC 컨테스트 UCC수상작
        최우수상 조폭 아저씨의 운전 가르침  (김재호)`,
                image: "https://i.ytimg.com/vi/wK4K9icjEO4/sddefault.jpg",
                category: "웃음",
                detail: "사연;컬투쇼",
                link: "https://www.youtube.com/watch?v=wK4K9icjEO4",
                type: "video",
                genres: "사연;컬투쇼",
                year: "2013-10-17"
            },
            {
                id: 192,
                title: "화장실이 급했던 롤러스케이터의 최후? ",
                director: "디글 클래식 :Diggle Classic",
                runtime: 8.08,
                summary:
                    `#티비냥 #인생술집 #정찬우
        구작이 명작인 tvN 맛집의 콘텐츠를 마음껏 볼 수 있는 tvN 
        
        tvN [인생술집] : 재미있고 편안한 사장님과 종업원들. 그리고 "스타"가 아니라 "사람"으로서 찾아오는 손님들의 이야기! 실제 술을 마시며 게스트와 토크를 하는 형식의 프로그램`,
                image: "https://i.ytimg.com/vi/ZDTOJrp2eII/sddefault.jpg",
                category: "웃음",
                detail: "사연;컨투쇼",
                link: "https://www.youtube.com/watch?v=ZDTOJrp2eII",
                type: "video",
                genres: "사연;컨투쇼",
                year: "2019-7-2"
            },
            {
                id: 193,
                title: "재훍가족 모아보기(컬투쇼)",
                director: "재훍 영상툰",
                runtime: 36.37,
                summary:
                    `00:00 할머니
        01:42 배가 아픈 이유
        04:33 엄마의 젓
        06:53 올킬 목사님
        09:19 강아지와 아버지
        11:43 엄마의 살사
        13:19 외국인의 능욕
        15:15 귀가 어두운 아버지
        16:44 신혼부부 첫날밤에
        18:34 욕쟁이 아줌마
        20:08 형님! 어여 힘내서 지옥 가셔야죠!
        21:49 90살 할머니가 삼행시를 한다면?
        23:21 가족하고 물회 먹는데 아빠가 방송에 출연을?
        25:23 엄마가 접촉사고를 냈는데 하필이면...
        26:37 형수와 고모의 설날맞이 외모 디스전
        28:33 딸이 납치됐다는 협박전화를 받은 엄마의 대처는!?
        30:07 할머니의 틀니
        31:30 수상한 사람과 같이 엘리베이터를 탔다
        33:20 케이크한테 능욕(?)당한 아빠의 생일파티🎉
        34:32 음식으로 장난질하는 식당의 최후`,
                image: "https://i.ytimg.com/vi/Gbj6rvIua3M/sddefault.jpg",
                category: "웃음",
                detail: "컬투쇼",
                link: "https://www.youtube.com/watch?v=Gbj6rvIua3M&t=18s",
                type: "video",
                genres: "컬투쇼",
                year: "2021-9-24"
            },
            {
                id: 194,
                title: "공유도, 조인성도 못 피한 2000년대 패션 암흑기가 돌아온다 / 14F",
                director: "14F 일사에프",
                runtime: 4.45,
                summary:
                    `“본더치, 볼레로 싫지 않아요”
        “그럼 입으면 되겠네~”
        “그거랑 다르지 인마!!!!”
        올해 내 옷장에 다시 들어올까 겁나는 2000년대 패션 암흑기 잇템들ㄷㄷ
        
        #2000년대 #패션암흑기 #2000년대패션`,
                image: "https://i.ytimg.com/vi/srJG2Wt1K7w/sddefault.jpg",
                category: "웃음",
                detail: "2000년대;패션",
                link: "https://www.youtube.com/watch?v=srJG2Wt1K7w",
                type: "video",
                genres: "2000년대;패션",
                year: "2021-1-22"
            },
            {
                id: 195,
                title: "[몰카][ENG SUB]편의점에서 탈북민들의 비밀계획을 듣는다면? ㅋㅋㅋㅋㅋ",
                director: "피식대학Psick Univ",
                runtime: 2.50,
                summary:
                    `피식대학의 몰래카메라 시리즈입니다. 
        구독과 좋아요는 큰 힘이 됩니다!
        
        개그맨 김민수
        
        개그맨 정재형
        
        개그맨 이용주`,
                image: "https://i.ytimg.com/vi/nvDeL-KwRnI/sddefault.jpg",
                category: "웃음",
                detail: "피식대학",
                link: "https://www.youtube.com/watch?v=nvDeL-KwRnI",
                type: "video",
                genres: "피식대학",
                year: "2019-10-8"
            },
            {
                id: 196,
                title: "만나서 반갑습니다=미팅 이즈 나이스! 영어울렁증 극복에 나선 순재 | 거침킥",
                director: "오분순삭",
                runtime: 7,
                summary:
                    `#오분순삭 #거침없이하이킥 #거침킥`,
                image: "https://i.ytimg.com/vi/jKE7Ab3khnU/original.jpg",
                category: "웃음",
                detail: "거침없이 하이킥",
                link: "https://www.youtube.com/watch?v=jKE7Ab3khnU",
                type: "video",
                genres: "거침없이 하이킥",
                year: "2021-3-29"
            },
            {
                id: 197,
                title: "호.박.고.구.마악!!!! 호랑이보다 무서운 해미 등쌀에 문희 폭발하다?!",
                director: "오분순삭",
                runtime: 12.32,
                summary:
                    `호굼,, 
        호구마요?흐흣~ 호.박.고,,~^^*
        호.박. 고.구.마 호.박. 고구마아아아아악!!!!!!!!!
        참다참다 폭발해벌인 무니찡,,
        전설의 호박고구마 편!`,
                image: "https://i.ytimg.com/vi/uBG3iUHFSHA/original.jpg",
                category: "웃음",
                detail: "거침없이 하이킥",
                link: "https://www.youtube.com/watch?v=uBG3iUHFSHA",
                type: "video",
                genres: "거침없이 하이킥",
                year: "2019-11-15"
            },
            {
                id: 198,
                title: "탑승객과 스튜어디스 모두가 담배피는 비행기가 있다?! 생지옥 비행기썰",
                director: "KBS Entertain: 깔깔티비",
                runtime: 17.57,
                summary:
                    `게스트 : 컬투, 샘해밍턴, 헨리, B1A4(진영,바로)
    
        ☆TIMELINE★
        01:32 제일 무서웠던 공채 4기 개그맨 박명수! 잘나가기 위한 화장실 작전? 
        04:25 샘과 아내의 첫 만남!
        11:12 남 사연도 재밌지만 본인들 사연은 더 웃긴 컬투 레전드 썰ㅋㅋ
        
        다시 돌아온 꿀잼, 허니잼 레트로 예능
        깔깔티비, 자매채널 크큭티비`,
                image: "https://i.ytimg.com/vi/VsgRcxL9zfU/original.jpg",
                category: "웃음",
                detail: "해피두게더",
                link: "https://www.youtube.com/watch?v=VsgRcxL9zfU",
                type: "video",
                genres: "해피두게더",
                year: "2021-2-3"
            },
            {
                id: 199,
                title: "점점 중독되는 구수한 말투, 유해진의 매력은 이때부터였을까",
                director: "KBS Entertain: 깔깔티비",
                runtime: 13.02,
                summary: `2008년 9월 18일
        게스트 : 유해진, 김빈우, 컬투
        
        다시 돌아온 꿀잼, 허니잼 레트로 예능
        깔깔티비, 자매채널 크큭티비`,
                image: "https://i.ytimg.com/vi/e3SU3TpHrAg/original.jpg",
                category: "웃음",
                detail: "해피두게더;유해진",
                link: "https://www.youtube.com/watch?v=e3SU3TpHrAg",
                type: "video",
                genres: "해피두게더",
                year: "2020-8-7"
            },
            {
                id: 200,
                title: "1박2일 시즌1 레전드 #8] 이수근의 '애드립&몸개그 특강'",
                director: "KBS Entertain: 깔깔티비",
                runtime: 10.39,
                summary:
                    `2010년 6월 20일
        - 1차 단합대회편
        - 강호동, 이수근, 이승기, 은지원, 김C, MC몽
        
        - 말 한 마디로도 분량 뽑아내는 애드립 달인 클라스 
        - 그의 믿을 수 없는 특강이 시작된다
        
        웃기겠다고 예고한 다음 모두의 기대를 받는데
        어떻게 그 상황에서 저렇게 웃기지??
        
        "당신의 레전드는 언제였나요?"
        
        P.S. 주말 풀버전 정규 업로드는 계속 됩니다~
        
        이수근의 '애드립&몸개그 특강' 웃긴다고 예고하고 진짜 웃길 줄이야....
        
        다시 돌아온 꿀잼, 허니잼 레트로 예능
        깔깔티비, 자매채널 크큭티비
        `,
        image: "https://i.ytimg.com/vi/I2dOcmstwDw/original.jpg",
        category: "웃음",
        detail: "1박2일;이수근",
        link: "https://www.youtube.com/watch?v=I2dOcmstwDw",
        type: "video",
        genres: "1박2일",
        year: "2019-9-10"
      },

    //================================================================================================================================
    //================================================================================================================================

      {
          id: 201,
          title: "인턴",
          director: "낸시 마이어스",
          year: "2015-09-24",
          rating: 9.04,
          runtime: 121,
          summary: "창업 1년 반 만에 직원 220명의 성공신화를 이룬 줄스(앤 해서웨이). TPO에 맞는 패션센스, 업무를 위해 사무실에서도 끊임 없는 체력관리, 야근하는 직원 챙겨주고, 고객을 위해 박스포장까지 직접 하는 열정적인 30세 여성 CEO! 한편, 수십 년 직장생활에서 비롯된 노하우와 나이만큼 풍부한 인생경험이 무기인 만능 70세의 벤(로버트 드 니로)을 인턴으로 채용하게 되는데",
          genres: "코미디",
          image: "https://t1.daumcdn.net/cfile/tistory/23331144561231010B",
          category: "동기부여",
          detail: "따뜻함;재미;소통",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=118917",
          type: "movie"
      },
      {
          id: 202,
          title: "불량소녀, 너를 응원해!",
          director: "도히 노부히로",
          year: "2016-9-21",
          rating: 9.08,
          runtime: 117,
          summary: "친구들과 즐겁게 노는 것이 인생 최고의 낙인 ‘사야카’는 공부와 담을 쌓은 구제 불능 문제아로 학교에서 낙인찍힌다. 하지만 그녀를 절대적으로 믿어주는 엄마와 포기를 모르는 초긍정 ‘츠보타’ 선생을 만나 우등생도 꿈꾸기 힘든 명문대 진학 도전을 선포하게 되는데… 동서남북이 뭔가요? 무지의 여왕 ‘사야카’가 꿈꾸는 인생 최고의 반전! 초등학교 4학년 수준의 상식에 산타클로스의 존재를 아직도 믿고 있는 무지의 여왕 ‘사야카’ 그녀는 주위의 편견과 자신과의 싸움에서 승리하고 모두가 불가능이라고 말했던 목표를 이뤄낼 수 있을까? 지금! 꿈꾸는 모두를 위한 유쾌한 도전이 시작된다!",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/12a6fec45ea3dcc3f233407cc4763e2bc723dcb9",
          category: "동기부여",
          detail: "용기;희망;열정",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=138877",
          type: "movie"
      },
      {
          id: 203,
          title: "월터의 상상은 현실이 된다",
          director: "벤 스틸러",
          year: "2013-12-31",
          rating: 8.80,
          runtime: 114,
          summary: "‘라이프’ 잡지사에서 16년째 근무 중인 월터 미티. 반복되는 일상이지만 ‘상상’을 통해 특별한 순간을 꿈꾸는 그에게 폐간을 앞둔 ‘라이프’지의 마지막 호 표지 사진을 찾아오는 미션이 생긴다. 평생 국내를 벗어나 본 적 없는 월터는 문제의 사진을 찾아 그린란드, 아이슬란드 등을 넘나들며 평소 자신의 상상과는 비교할 수 없는 거대한 어드벤처를 시작한다. 누구보다 평범한 일상을 살던 월터, 그 누구도 겪은 적 없는 특별한 생애 최고의 순간을 맞이하게 된다!",
          genres: "모험;드라마;판타지",
          image: "http://t1.daumcdn.net/movie/c27bde87b19a727d44622dd3b6d0234c1b33f544",
          category: "동기부여",
          detail: "소통;힐링;대리만족",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=138877",
          type: "movie"
      },
      {
          id: 204,
          title: "위플래쉬",
          director: "데이미언 셔젤",
          year: "2015-3-12",
          rating: 8.88,
          runtime: 106,
          summary: "뉴욕의 명문 셰이퍼 음악학교에서 최고의 스튜디오 밴드에 들어가게 된 신입생 '앤드류' 최고의 지휘자이지만 동시에 최악의 폭군인 '플레쳐'교수는 폭언과 학대로 '앤드류'를 한계까지 몰아붙이고 또 몰아붙인다. 드럼 주위로 뚝뚝 떨어지는 피, 빠르게 달리는 선율 뒤로 아득해지는 의식, 그 순간, 드럼에 대한 앤드류의 집착과 광기가 폭발한다. 최고의 연주를 위한 완벽한 스윙이 시작된다!",
          genres: "드라마",
          image: "https://t1.daumcdn.net/movie/33284bb41aa57aba756588c526b20f483e79ae9f",
          category: "동기부여",
          detail: "꿈;열정;",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=119632",
          type: "movie"
      },
      {
          id: 205,
          title: "행복을 찾아서",
          director: "가브리엘 무치노",
          year: "2007-2-28",
          rating: 8.94,
          runtime: 117,
          summary: "한물간 의료기기를 판매하는 세일즈맨 크리스 가드너(윌 스미스)는 물건을 팔기 위해 매일 최선을 다하지만 일은 마음대로 되지 않는다. 결국 아내까지 집을 떠나고, 길거리로 나앉는 신세로 전락한다. 하지만 하나뿐인 아들 ‘크리스토퍼’(제이든 스미스)를 위해서라면 살아남아야 하는 그에게 인생 마지막 기회가 다가온다. 60대 1이라는 엄청난 경쟁 속에서 반드시 행복해져야 하는 그의 절실한 도전이 시작되는데…",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/cd87eb52410d9c20b0fd2b57c933b092e1547147",
          category: "동기부여",
          detail: "희망;용기;감동",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=64354",
          type: "movie"
      },
      {
          id: 206,
          title: "스티브 잡스",
          director: "대니 보일",
          year: "2016-1-21",
          rating: 7.80,
          runtime: 122,
          summary: "3번의 혁신을 선사한 프레젠테이션 무대 40분 전, 누구와도 같은 시각으로 세상을 바라보지 않았던 ‘스티브 잡스’는 타협 없는 완벽주의로 인해 그의 주변 인물들과 심각한 갈등을 겪게 된다. 지금까지 스티브 잡스는 전부가 아니다! 2016년 새해 첫 혁신적 영감과 열정을 선사할 최고의 영화!",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/daa40fff56bc316771ccc43198150ed94122e1b6",
          category: "동기부여",
          detail: "신념;창의적;실화;",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=64354",
          type: "movie"
      },
      {
          id: 207,
          title: "히든 피겨스",
          director: "데오도르 멜피",
          year: "2017-3-23",
          rating: 9.37,
          runtime: 127,
          summary: "천부적인 수학 능력의 흑인 여성 캐서린 존슨 NASA 흑인 여성들의 리더이자 프로그래머 도로시 본 흑인 여성 최초의 NASA 엔지니어를 꿈 꾸는 메리 잭슨 미국과 러시아의 치열한 우주 개발 경쟁으로 보이지 않는 전쟁이 벌어지고 있던 시절, 천부적인 두뇌와 재능을 가진 그녀들이 NASA 최초의 우주궤도 비행 프로젝트에 선발된다. 하지만, 흑인이라는 이유로 800m 떨어진 유색인종 전용 화장실을 사용해야 하고, 여자라는 이유로 중요한 회의에 참석할 수 없으며, 공용 커피포트 조차 용납되지 않는 따가운 시선에 점점 지쳐 간다. 한편, 우주궤도 비행 프로젝트는 난항을 겪게 되고, 해결방법은 오직 하나, 비전을 제시할 수 있는 새로운 수학 공식을 찾아내는 것뿐인데…. 천재성에는 인종이 없고, 강인함에는 남녀가 없으며, 용기에는 한계가 없다! 세계를 놀라게 한 그녀들의 이야기가 시작된다",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/fe4e62b8c6f824b751f46bd2c97870aa5cd6c771",
          category: "동기부여",
          detail: "차별;편견;극복",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=147092",
          type: "movie"
      },
      {
          id: 208,
          title: "머니볼",
          director: "베넷 밀러",
          year: "2011-11-17",
          rating: 8.42,
          runtime: 133,
          summary: "게임의 역사를 바꾼 감동의 리그가 시작된다! 메이저리그 만년 최하위에 그나마 실력 있는 선수들은 다른 구단에 뺏기기 일수인 ‘오클랜드 애슬레틱스’. 돈 없고 실력 없는 오합지졸 구단이란 오명을 벗어 던지고 싶은 단장 ‘빌리 빈(브래드 피트)’은 경제학을 전공한 ‘피터’를 영입, 기존의 선수 선발 방식과는 전혀 다른 파격적인 ‘머니볼’ 이론을 따라 새로운 도전을 시작한다. 그는 경기 데이터에만 의존해 사생활 문란, 잦은 부상, 최고령 등의 이유로 다른 구단에서 외면 받던 선수들을 팀에 합류시키고, 모두가 미친 짓이라며 그를 비난한다. 과연 빌리와 애슬레틱스 팀은 ‘머니볼’의 기적을 이룰 수 있을까?",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/1142834E4EA7FD161E",
          category: "동기부여",
          detail: "야구;선택;감동",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=147092",
          type: "movie"
      },
      {
          id: 209,
          title: "파운더",
          director: "존 리 행콕",
          year: "2017-4-20",
          rating: 8.23,
          runtime: 115,
          summary: "1954년 미국. 52세의 한 물 간 세일즈맨 레이(마이클 키튼)는 밀크셰이크 믹서기를 팔며 전국을 돌아다니던 중 캘리포니아에서 ‘맥도날드’라는 식당을 발견한다. 주문한 지 30초 만에 햄버거가 나오는 혁신적인 스피디 시스템과 식당으로 몰려드는 엄청난 인파, 그리고 강렬한 ‘황금아치’에 매료된 ‘레이’는 며칠 뒤 ‘맥도날드’ 형제를 찾아가 그들의 이름을 건 프랜차이즈를 제안한다. 오랜 설득 끝에 계약을 체결하지만 공격적인 사업가 ‘레이’와 원칙주의자 ‘맥도날드’ 형제는 사사건건 갈등을 빚는다. 답답함을 느낀 ‘레이’는 ‘맥도날드’ 형제의 의견을 무시한 채 사업을 확장하기 시작하는데…",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/15527323bf81cac56a3fdbef8cd70f3a9fed188b",
          category: "동기부여",
          detail: "이기적;야망;악함",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=147092",
          type: "movie"
      },
      {
          id: 210,
          title: "라스트 홀리데이",
          director: "웨인 왕",
          year: "2006-1-13",
          rating: 8.90,
          runtime: 112,
          summary: "뉴올리언스의 주방용품가게 점원 조지아 버드는 수줍음 많은 평범한 여성이다. 어느날 그녀는 직장에서 머리를 크게 부딪치는 일을 당하고 병원에 실려간다. 그리고 그녀는 자신이 큰 병에 걸려있으며 앞으로 살 날이 몇 주 남지않았다는 청천벽력 같은 선고를 듣게 된다. 낙심한 그녀는 그녀가 살아오면서 희망사항으로만 여기고 미처 해보지 못한 것들을 하나하나 실천에 옮기길 결심한다. 그녀는 꿈에 그리던 유럽의 휴양지로 '마지막 여행'을 결심하는데, 더 이상 잃을 것이 없다고 생각한 그녀는 그곳에서 대담한 모습으로 변신한다. 그런 그녀의 변신은 주위 사람들에게 큰 영향을 미치게 된다. 그녀는 꿈에 그리던 요리사 디디에를 만나고 마침 그 곳으로 휴가를 온 그녀의 악덕 업주, 상원의원 등을 만나게 된다. 그리고 그녀의 신분을 알지 못하는 그들은 그녀에 대한 호기심으로 가득하다.",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/cfile/136F1B10AB0F89D5E1",
          category: "동기부여",
          detail: "최선;삶",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=37234",
          type: "movie"
      },
      {
          id: 211,
          title: "벤자민 버튼의 시간은 거꾸로 간다",
          director: "데이빗 핀처",
          year: "2009-2-12",
          rating: 9.52,
          runtime: 166,
          summary: "1918년 제1차 세계 대전 말 뉴올리언즈. 80세의 외모를 가진 사내 아이가 태어난다. 그의 이름은 벤자민 버튼. 부모에게 버려져 양로원에서 노인들과 함께 지내던 그는 시간이 지날수록 젊어진다는 것을 알게 된다. 12살이 되어 60대의 외모를 가지게 된 그는 어느 날 6살 소녀 데이지를 만난 후 그녀의 푸른 눈동자를 잊지 못하게 된다. 청년이 되어 세상으로 나간 벤자민은 숙녀가 된 데이지와 만나 만남과 헤어짐을 반복하다 비로소 둘은 사랑에 빠지게 된다. 하지만 벤자민은 날마다 젊어지고 데이지는 점점 늙어가는데…",
          genres: "드라마;판타지;멜로;로맨스",
          image: "http://t1.daumcdn.net/movie/8f1bc65448ae0ea1d8413307206b2c8e00627124",
          category: "동기부여",
          detail: "시간;소중함;",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=73372",
          type: "movie"
      },
      {
          id: 212,
          title: "빌리 엘리어트",
          director: "스티븐 달드리",
          year: "2001-2-17",
          rating: 9.75,
          runtime: 110,
          summary: "영국 북부 탄광촌에 사는 11살 소년 빌리. 매일 복싱을 배우러 가는 체육관에서 우연히 발레 수업을 보게 된 그는 토슈즈를 신은 여학생들 뒤에서 동작을 따라한다. 그에게 재능을 발견한 발레 선생님 윌킨슨 부인은 빌리에게 특별 수업을 해주고 로얄발레학교의 오디션을 보라고 권유한다. 발레는 여자들이나 하는 거라며 반대하는 아버지 몰래 신나게 춤을 추던 어느 날, 빌리는 불쑥 체육관에 찾아온 아버지와 맞닥뜨리게 되는데...",
          genres: "드라마;가족;코미디",
          image: "http://t1.daumcdn.net/movie/e668f931ba4e35af61f675f737cc49d374898696",
          category: "동기부여",
          detail: "꿈;감동;열정",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=31013",
          type: "movie"
      },
      {
          id: 213,
          title: "포레스트 검프",
          director: "로버트 저메키스",
          year: "1994-10-15",
          rating: 9.52,
          runtime: 110,
          summary: "불편한 다리, 남들보다 조금 떨어지는 지능을 가진 외톨이 소년 ‘포레스트 검프’ 헌신적이고 강인한 어머니의 보살핌과 콩깍지 첫사랑 소녀 ‘제니’와의 만남으로 사회의 편견과 괴롭힘 속에서도 따뜻하고 순수한 마음을 지니고 성장한다. 여느 날과 같이 또래들의 괴롭힘을 피해 도망치던 포레스트는 누구보다 빠르게 달릴 수 있는 자신의 재능을 깨닫고 늘 달리는 삶을 살아간다. 포레스트의 재능을 발견한 대학에서 그를 미식축구 선수로 발탁하고, 졸업 후에도 뛰어난 신체능력으로 군에 들어가 누구도 예상치 못한 성과를 거둬 무공훈장을 수여받는 등 탄탄한 인생 가도에 오르게 된 포레스트. 하지만 영원히 행복할 것만 같았던 시간도 잠시, 어머니가 병에 걸려 죽음을 맞이하고 첫사랑 제니 역시 그의 곁을 떠나가며 다시 한번 인생의 전환점을 맞이하게 되는데… 과연, 포레스트는 진정한 삶의 행복을 발견할 수 있을까? 진정한 삶의 가치와 의미를 제시하는 감동 바이블! 올 가을, 다시 한번 세상에서 가장 눈부신 달리기가 시작된다! “Run! Forrest Run!”",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/ba17a2369a0c07eb7ddb03b120eaee03d68f21c5",
          category: "동기부여",
          detail: "감동",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=31013",
          type: "movie"
      },
      {
          id: 214,
          title: "말아톤",
          director: "정윤철",
          year: "2005-1-27",
          rating: 9.23,
          runtime: 115,
          summary: "자폐증인 초원은 하는 짓이나 말투는 다섯 살 어린애에 머물러 있지만 어린 시절부터 꾸준히 해온 달리기만큼은 누구에게도 뒤지지 않는다. 엄마 경숙은 자신의 목표를 아들 초원의 ‘마라톤 서브쓰리 달성’으로 정하고 아들의 훈련에 매달린다. 전직 유명 마라토너 정욱이 음주운전으로 사회봉사 명령을 받고 초원의 학교로 오자 애원하다시피 그에게 아들의 코치 역할을 떠맡긴다. 정욱은 지구력이 남다른 초원에게서 마라톤 서브쓰리의 가능성을 발견하고 본격적으로 훈련에 들어간다. 좌절, 포기, 실망, 절망을 거쳐 마라톤 완주에 성공한다.",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/15110210A90593A970",
          category: "동기부여",
          detail: "감동;행복;",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=39436",
          type: "movie"
      },
      {
          id: 215,
          title: "어바웃 타임",
          director: "리차드 커티스",
          year: "2013-12-5",
          rating: 9.30,
          runtime: 123,
          summary: "모태솔로 팀(돔놀 글리슨)은 성인이 된 날, 아버지(빌 나이)로부터 놀랄만한 가문의 비밀을 듣게 된다. 바로 시간을 되돌릴 수 있는 능력이 있다는 것! 그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수는 없지만, 여자친구는 만들어 줄 순 있으리.. 꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에 반하게 된다. 그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀. 어설픈 대시, 어색한 웃음은 리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이! 꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다. 하지만 그와 그녀의 사랑이 완벽해질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고, 예상치 못한 사건들이 여기저기 나타나기 시작하는데… 어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?",
          genres: "멜로;로맨스;코미디",
          image: "http://t1.daumcdn.net/cfile/2653C44F5285D86E2D",
          category: "동기부여",
          detail: "시간;행복;",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=92075",
          type: "movie"
      },
      {
          id: 216,
          title: "조이",
          director: "데이비드 O. 러셀",
          year: "2016-3-10",
          rating: 7.94,
          runtime: 121,
          summary: "이혼한 부모님과 전남편, 할머니와 두 아이까지 떠안고 간신히 하루하루를 살아가던 싱글맘 조이(제니퍼 로렌스). 자신이 꿈꿨던 인생과는 너무나 다른 현실에 지쳐가던 어느 날, 깨진 와인잔을 치우던 조이는 하나의 아이디어를 떠올리게 된다. 아주 멋진 것을 만들어 세상에 보여주겠다는 어릴 적 꿈을 이루겠다고 결심한 조이는 상품 제작에 돌입한다. \"그냥 집에서 가족 뒷바라지나 하세요\" \"넌 할 수 없을거라고 수없이 경고했잖아\" 그러나 사업 경험이 전무한 조이는 기업과 투자자로부터 외면받으며 여자에게 더욱 가혹한 비즈니스 세계의 벽 앞에서 매번 좌절하게 된다. 이 때 전 남편 토니의 소개로 홈쇼핑 채널 QVC의 경영 이사인 닐 워커(브래들리 쿠퍼)를 만나게 된 조이는 기적적으로 홈쇼핑 방송 기회를 얻게 되고 5만개의 제품을 제작한다. 하지만 단 한 개도 팔지 못한 채 처참한 상황을 맞게 된 조이는 결국 빚을 떠안고 파산 위기에 처하는데… 가난한 싱글맘에서 미국 최고의 여성 CEO가 된 조이! 세상을 놀라게 한 그녀의 기적 같은 실화가 펼쳐진다!",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/b281e7c76d938831617dd2d4a419f911cbceb8d2",
          category: "도전",
          detail: "성공;꿈",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=125458",
          type: "movie"
        },
        {
          id: 217,
          title: "아이 필 프리티",
          director: "에비 콘;마크 실버스테인",
          year: "2018-6-6",
          rating: 9.03,
          runtime: 110,
          summary: "뛰어난 패션센스에 매력적인 성격이지만 통통한 몸매가 불만인 ‘르네’ 하아.. 예뻐지기만 하면 뭐든 다 할 수 있을 것만 같다. 하늘에 온 마음을 담아 간절히 소원을 빌지만 당연히 달라지는 건 1%도 없고. 오늘도 헬스클럽에서 스피닝에 열중하는 ‘르네’! 집중! 또 집중! 난 할 수 있다! 예뻐질 수 있다..!!! 그러나 과도한 열정은 오히려 독이 되는 법. 미친 듯이 페달을 밟다가 헬스 클럽 바닥에 내동댕이쳐져 머리를 부딪히고.. 지끈지끈한 머리, 창피해서 빨개진 얼굴로 겨우 일어났는데 뭔가 이상하다! 헐, 거울 속의 내가… 좀 예쁘다?! 드디어 소원성취한 ‘르네’의 참을 수 없는 웃음이 터진다!",
          genres: "코미디",
          image: "http://t1.daumcdn.net/movie/86800ce7854a4ad563d1b4774ad16aa8bb21d080",
          category: "도전",
          detail: "메시지;자존감",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=168017",
          type: "movie"
        },
        {
          id: 218,
          title: "잉여들의 히치하이킹",
          director: "이호재",
          year: "2013-11-28",
          rating: 9.39,
          runtime: 110,
          summary: "파리, 로마, 이스탄불, 런던까지… 전 유럽을 발칵 뒤집어 놓은 무일푼 잉여들의 물물교환 유럽 평정기! 스스로를 '잉여인간'이라고 부르는 호재(24), 하비(22), 현학(20), 휘(20). 처음이자 마지막일지도 모를 잉여로운(?) 20대 보내기를 위해 네 친구들은 단돈 80만원과 카메라 1대만 들고 무작정 유럽 행 비행기에 몸을 싣는다. ‘잉여4’는 숙박업소 홍보영상을 찍어주고 '물물교환'으로 무료숙식을 제공받아 1년간 전 유럽을 일주하겠다는 야망과 동시에, 마지막에는 뮤직비디오를 한편 만들어 보겠다는 거창한(?) 계획을 세우고 드디어 프랑스 파리에 첫발을 내딛는 데…",
          genres: "다큐멘터리",
          image: "http://t1.daumcdn.net/cfile/23032F475277152A22",
          category: "도전",
          detail: "청춘",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=115298",
          type: "movie"
        },
        {
          id: 219,
          title: "프록시마 프로젝트",
          director: "앨리스 위노코",
          year: "2020-10-15",
          rating: 7.65,
          runtime: 107,
          summary: "유럽우주국 ‘프록시마’ 프로젝트의 대원으로 선발되어 평생의 소원이던 우주비행사가 된 사라 우주비행은 남성이 적합하다는 고정관념도, 여성이므로 나약할 것이라는 편견도 이겨낼 수 있지만 아직은 엄마가 필요한 일곱살 딸, 스텔라만큼은 눈에 밟힌다. 언젠가 우주보다 넓은 꿈을 꾸게 될 아이를 위해 쓴, 지구와 우주를 연결하는 러브레터를 만나다!",
          genres: "드라마;액션",
          image: "https://t1.daumcdn.net/movie/6a2c0bbe4a1adf5973e39c7b43a990241fa1c825",
          category: "도전",
          detail: "모성애;고정관념",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=115298",
          type: "movie"
        },
        {
          id: 220,
          title: "마션",
          director: "리들리 스콧",
          year: '2015-10-8',
          rating: 8.72,
          runtime: 144,
          summary: "NASA 아레스3탐사대는 화성을 탐사하던 중 모래폭풍을 만나고 팀원 마크 와트니가 사망했다고 판단, 그를 남기고 떠난다. 극적으로 생존한 마크 와트니는 남은 식량과 기발한 재치로 화성에서 살아남을 방법을 찾으며 자신이 살아있음을 알리려 노력한다. 마침내, 자신이 살아있다는 사실을 지구에 알리게 된 마크 와트니 NASA는 총력을 기울여 마크 와트니를 구출하기 위해 노력하고, 아레스 3 탐사대 또한 그를 구출하기 위해 그들만의 방법을 찾게 되는데…… 전세계가 바라는 마크 와트니의 지구 귀환! 그는 과연 살아 돌아올 수 있을 것인가?",
          genres: "드라마;모험;SF",
          image: "http://t1.daumcdn.net/movie/42d4e1f21810332ab6a86153005b30e8d902be21",
          category: "도전",
          detail: "긍정;멘탈",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=129049",
          type: "movie"
        },
        {
          id: 221,
          title: "블라인드 사이드",
          director: "존 리 행콕",
          year: '2010-4-15',
          rating: 9.33,
          runtime: 128,
          summary: "어린 시절 약물 중독에 걸린 엄마와 강제로 헤어진 후, 여러 가정을 전전하며 커가던 ‘마이클 오어’. 건장한 체격과 남다른 운동 신경을 눈여겨 본 미식축구 코치에 의해 상류 사립학교로 전학하게 되지만 이전 학교에서의 성적 미달로 운동은 시작할 수도 없게 된다. 급기야 그를 돌봐주던 마지막 집에서조차 머물 수 없게 된 마이클. 이제 그에겐 학교, 수업, 운동보다 하루하루 잘 곳과 먹을 것을 걱정해야 하는 날들만이 남았다. 추수감사절 하루 전날 밤, 차가운 날씨에 반팔 셔츠만을 걸친 채 체육관으로 향하던 ‘마이클’을 발견한 ‘리 앤’. 평소 불의를 참지 못하는 확고한 성격의 리 앤은 자신의 아이들과 같은 학교에 다닌다는 마이클이 지낼 곳이 없음을 알게 되자 집으로 데려와 하룻밤 잠자리를 내어주고, 함께 추수감사절을 보낸다. 갈 곳 없는 그를 보살피는 한편 그를 의심하는 마음도 지우지 못하던 리 앤. 하지만 시간이 흐르며 마이클의 순수한 심성에 빠져 든 리 앤과 그녀의 가족은 그를 마음으로부터 받아들이기 시작한다. 리 앤 가족의 도움으로 성적까지 향상된 마이클은 본격적으로 미식 축구 훈련을 시작하며 놀라운 기량과 실력을 발휘하고, 리 앤은 그의 법적 보호자를 자청하며 마이클의 진짜 가족이 되고자 한다. 주변의 의심 어린 편견, 그리고 마이클이 언젠가 자신을 떠나 사라질 지도 모른다는 불안감을 뒤로 한 채...",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/142252274BA81C45A2",
          category: "도전",
          detail: "가족;감동",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=71081",
          type: "movie"
        },
        {
          id: 222,
          title: "드래곤 길들이기",
          director: "딘 데블로이스;크리스 샌더스",
          year: '2010-5-20',
          rating: 9.33,
          runtime: 98,
          summary: "용맹한 바이킹과 사나운 드래곤들의 싸움이 끊이지 않는 버크섬. 바이킹 족장의 아들 ‘히컵’은 드래곤 사냥에 소질 없는 마을의 사고뭉치. 어느 날 그는 부상 당한 드래곤, ‘투슬리스’를 구하게 되고, 아무도 몰래 그를 돌본다. 서로를 알아가며, 드래곤들의 친구가 된 ‘히컵’. 그들과의 새로운 생활을 만끽하던 ‘히컵’은 드래곤들의 위험한 비밀을 알게 되는데…",
          genres: "애니메이션",
          image: "http://t1.daumcdn.net/movie/2db5bfece60741fb80b3ef614862e4991546396452879",
          category: "도전",
          detail: "우정;공존",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=70457",
          type: "movie"
        },
        {
          id: 223,
          title: "라따뚜이",
          director: "브래드 버드",
          year: '2007-7-25',
          rating: 9.31,
          runtime: 115,
          summary: "절대미각, 빠른 손놀림, 끓어 넘치는 열정의 소유자 ‘레미’. 프랑스 최고의 요리사를 꿈꾸는 그에게 단 한가지 약점이 있었으니, 바로 주방 퇴치대상 1호인 ‘생쥐’라는 것! 그러던 어느 날, 하수구에서 길을 잃은 레미는 운명처럼 파리의 별 다섯개짜리 최고급 레스토랑에 떨어진다. 그러나 생쥐의 신분으로 주방이란 그저 그림의 떡. 보글거리는 수프, 둑닥둑닥 도마소리, 향긋한 허브 내음에 식욕이 아닌 ‘요리욕’이 북받친 레미의 작은 심장은 콩닥콩닥 뛰기 시작하는데! 쥐면 쥐답게 쓰레기나 먹고 살라는 가족들의 핀잔에도 굴하지 않고 끝내 주방으로 들어가는 레미. 깜깜한 어둠 속에서 요리에 열중하다 재능 없는 견습생 ‘링귀니’에게 ‘딱’ 걸리고 만다. 하지만 해고위기에 처해있던 링귀니는 레미의 재능을 한눈에 알아보고 의기투합을 제안하는데. 과연 궁지에 몰린 둘은 환상적인 요리 실력을 발휘할 수 있을 것인가? 레니와 링귀니의 좌충우돌 공생공사 프로젝트가 아름다운 파리를 배경으로 이제 곧 펼쳐진다!",
          genres: "애니메이션",
          image: "http://t1.daumcdn.net/cfile/136F1B10AB93BA53F9",
          category: "도전",
          detail: "고정관념",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=65021",
          type: "movie"
        },
        {
          id: 224,
          title: "국가대표",
          director: "김용화",
          year: '2009-7-29',
          rating: 9.13,
          runtime: 137,
          summary: "1996년 전라북도 무주, 동계올림픽 유치를 위해 정식 종목 중 하나인 스키점프 국가대표팀이 급조된다. 이에 전(前) 어린이 스키교실 강사 방종삼(성동일 분)이 국가대표 코치로 임명되고, 그의 온갖 감언이설에 정예(?) 멤버들이 모인다. 전(前) 주니어 알파인 스키 미국 국가대표였다가 친엄마를 찾아 한국에 온 입양인 밥(하정우 분), 여자 없으면 하루도 못 버틸 나이트 클럽 웨이터 흥철(김동욱 분), 밤낮으로 숯불만 피우며 아버지가 시키는 대로 살아온 고깃집 아들 재복(최재환 분), 할머니와 동생을 돌봐야 하는 짐이 버거운 말 없는 소년 가장 칠구(김지석 분), 그런 형을 끔찍이 사랑하는 4차원 동생 봉구(이재응 분)까지! 방 코치는 마치 신이라도 된 것처럼 엄마와 같이 살 집이 필요한 밥에게는 아파트를, 사랑 때문에 또는 부양 가족 때문에 그들과 함께 있어야 하는 흥철, 칠구-봉구 형제, 그리고 재복에게는 군 면제를 약속한다. 단, 금메달 따면! 스키점프가 뭔지도 모르지만 한때 스키 좀 타봤다는 이유로 뽑힌 이들이 모이면서 대한민국 최초 스키점프 국가대표팀이 결성된다.",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/cfile/171B311D4A4D462A37",
          category: "도전",
          detail: "성취도;웃음;감동",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=47385",
          type: "movie"
        },
        {
          id: 225,
          title: "8 마일",
          director: "커티스 핸슨",
          year: '2003-2-21',
          rating: 9.00,
          runtime: 110,
          summary: "디트로이트 8 마일 313구역 힙합 클럽의 랩배틀, 단 45초! 그 안에 상대를 쓰러트려야 최고가 된다. 그의 희망은 분노에서 시작된다.",
          genres: "드라마;뮤지컬",
          image: "http://t1.daumcdn.net/movie/32565009d0c2f152dae030c8fe1020d6eec4de1f",
          category: "도전",
          detail: "꿈;힙합",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=35626",
          type: "movie"
        },
        {
          id: 226,
          title: "하늘을 걷는 남자",
          director: "로버트 저메키스",
          year: '2015-10-28',
          rating: 8.50,
          runtime: 123,
          summary: "어려서부터 하늘을 걷는 도전을 꿈꿔온 무명 아티스트 ‘필립’(조셉 고든 레빗). 그에게 꿈을 이룰 수 있는 단 한 번의 기회가 찾아온다. 바로 전세계 최고 높이를 자랑하는 412미터 높이의 월드 트레이드 센터가 정식 오픈하기 전에 두 빌딩 사이를 밧줄로 연결해서 걷겠다는 것. 이 세상 누구도 생각지 못한 도전을 실행하기 위해 ‘필립’은 그를 도와줄 조력자들과 함께 고군분투하지만, 디데이가 다가올수록 예상 밖의 위기를 맞이하게 되는데….",
          genres: "드라마;모험",
          image: "http://t1.daumcdn.net/movie/c3b5142368d1c5094ac9ece95dd56493c69e6f35",
          category: "도전",
          detail: "긴장감;실화",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=125405",
          type: "movie"
        },
        {
          id: 227,
          title: "보헤미안 랩소디",
          director: "브라이언 싱어",
          year: '2018-10-31',
          rating: 9.45,
          runtime: 134,
          summary: "공항에서 수하물 노동자로 일하며 음악의 꿈을 키우던 이민자 출신의 아웃사이더 ‘파록버사라’ 보컬을 구하던 로컬 밴드에 들어가게 되면서 ‘프레디 머큐리’라는 이름으로 밴드 ‘퀸’을 이끌게 된다. 시대를 앞서가는 독창적인 음악과 화려한 퍼포먼스로 관중들을 사로잡으며 성장하던 ‘퀸’은 라디오와 방송에서 외면을 받을 것이라는 음반사의 반대에도 불구하고 무려 6분 동안 이어지는 실험적인 곡 ‘보헤미안 랩소디’로 대성공을 거두며 월드스타 반열에 오른다. 그러나 독보적인 존재감을 뿜어내던 ‘프레디 머큐리’는 솔로 데뷔라는 유혹에 흔들리게 되고 결국 오랜 시간 함께 해왔던 멤버들과 결별을 선언하게 되는데… 세상에서 소외된 아웃사이더에서 전설의 록밴드 ‘퀸’이 되기까지, 우리가 몰랐던 그들의 진짜 이야기가 시작된다!",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/ce3cd6a875284e8b96414ef3696756a11544772388211",
          category: "도전",
          detail: "음악",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=156464",
          type: "movie"
        },
        {
          id: 228,
          title: "히말라야",
          director: "이석훈",
          year: '2015-12-16',
          rating: 8.67,
          runtime: 124,
          summary: "해발 8,750 미터 히말라야 에베레스트 데스존 인간의 접근을 허락하지 않은 신의 영역 그곳에 우리 동료가 묻혀있다. 산 아래 하나였고, 또 다른 가족이었던 사람들 생을 마감한 후배 대원의 시신을 찾기 위해 기록도, 명예도, 보상도 없는 가슴 뜨거운 여정을 시작한다. 그 누구도 시도하지 않았던 위대한 도전 엄홍길 대장과 휴먼원정대의 감동 실화가 공개된다!",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/c22dc952315e7187ab6f749046bb50f37470dc83",
          category: "도전",
          detail: "실화;휴머니즘",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=100647",
          type: "movie"
        },
        {
          id: 229,
          title: "스탠바이, 웬디",
          director: "벤 르윈",
          year: '2018-5-30',
          rating: 8.80,
          runtime: 93,
          summary: "우리처럼 똑같은 일상을 반복하는 웬디. 아침에 샤워를 하고 아침 먹고 아르바이트를 하고 동료들과 휴식시간을 갖고 집에 와서 TV를 보고 저녁 먹고 글을 쓰다가 자는 일상. 그런 웬디가 일탈을 한다!? 웬디 왜 그러는거야! 나에겐 목표와 꿈이 있으니까요! 스타 트렉 시나리오 공모전에 꼭 참가해야 해요 웬디의 일탈 시작! 나아갈 때 비로소 다가오는 것들이 있다! 웬디가 처음 접하는 모든 것들! 웬디를 따라 LA여행 모두 함께 해보실래요 여러분들 웬디의 일탈로 들어오세요~♥ 행복한 소확행을 맛보게 될거예요",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/76ad9679cf5d87ac0509d9b34e6ced959075840c",
          category: "도전",
          detail: "성장;희망",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=147388",
          type: "movie"
        },
        {
          id: 230,
          title: "브루클린",
          director: "존 크로울리",
          year: '2016-4-21',
          rating: 8.39,
          runtime: 93,
          summary: "낯선 뉴욕 브루클린에서 새로운 시작을 준비하는 에일리스(시얼샤 로넌). 낮에는 고급 백화점에서 일하고, 밤에는 야간 대학에서 공부하며 브루클린에 적응하려고 노력하고 있지만 아일랜드에 있는 가족에 대한 그리움으로 지독한 향수병에 시달린다. 한편, 공동 생활을 하는 아일랜드 커뮤니티 여성들의 도움과 격려로 차츰 안정을 찾아가던 에일리스는 이탈리아계 청년 토니(에모리 코헨)와의 운명적인 만남을 계기로 점차 독립적이고 세련된 뉴요커로 변해간다. 하지만 그런 그녀에게 갑작스럽게 날아온 언니의 부고. 급히 고향으로 날아간 에일리스는 그곳에서 또 다른 매력을 가진 짐(돔놀 글리슨)과의 만남으로 흔들리게 되는데…",
          genres: "드라마;멜로;로맨스",
          image: "http://t1.daumcdn.net/movie/8fcae1e5901d58fe3f2b7c9ab279259fbd349d4d",
          category: "도전",
          detail: "선택;운명;사랑",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=103657",
          type: "movie"
        },
        {
          id: 231,
          title: "예스맨",
          director: "페이튼 리드",
          year: '2008-12-17',
          rating: 8.85,
          runtime: 104,
          summary: "대출회사 상담 직원 칼 알렌(짐 캐리)은 ‘NO’라는 말을 입에 달고 사는 매사 부정적인 남자. 하지만 친구의 권유로 ‘인생역전 자립프로그램’에 가입하면서 그의 인생이 180도 뒤바뀐다! ‘긍정적인 사고가 행운을 부른다’는 프로그램 규칙에 따라 모든 일에 ‘YES’라고 대답하기로 결심하고 ‘뭐든지 할 수 있다’는 자세로 새로운 일에 도전하는 칼. 번지점프 하기, 한국어 수업 듣기, 모터사이클 타기, 남의 인생 간섭하기, 온라인으로 데이트상대 정하기… 정말로 ‘YES’라고 대답하니 지루했던 예전의 일상과 달리 인생이 너무나 유쾌하다. 하지만 이 남자, 접수되는 대출 신청서류마다 YES, 구매강요 온라인 쇼핑몰 메일에도 YES, 만나자는 여자들의 전화에도 YES, 무조건 YES를 남발하고. 정말 이렇게 ‘YES’ 해도 되는 걸까?",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/cfile/126B7E10B2292FA152",
          category: "멘토",
          detail: "긍정;웃음",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=45944",
          type: "movie"
        },
        {
          id: 232,
          title: "버킷리스트: 죽기 전에 꼭 하고 싶은 것들",
          director: "로브 라이너",
          year: '2008-4-9',
          rating: 9.10,
          runtime: 97,
          summary: "가난하지만 한평생 가정을 위해 헌신을 하며 살아온 정비사 ‘카터’(모건 프리먼) 자수성가한 백만장자이지만 괴팍한 성격에 아무도 주변에 없는 사업가 ‘잭’(잭 니콜슨) 공통점이라곤 티 끝조차 없는 이 두 사람의 유일한 공통점은 오로지 앞만 보고 달려온 인생과 그 끝이 얼마 남지 않았다는 것. 어느날 우연히 무언가를 작성하고 있던 ‘카터’에게 ‘잭’은 함께 모험을 떠나볼 것을 제안하는데… 이제껏 열심히만 살아온 자기 자신에게 바치는 특별한 ‘버킷 리스트’가 공개됩니다!",
          genres: "드라마;코미디;모험",
          image: "http://t1.daumcdn.net/movie/aacc5a6bcd7ab074de56a3fb0c74efd073146ff1",
          category: "멘토",
          detail: "버킷리스트",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=69102",
          type: "movie"
        },
        {
          id: 233,
          title: "보이후드",
          director: "리처드 링클레이터",
          year: '2014-10-23',
          rating: 8.90,
          runtime: 165,
          summary: "여섯 살 ‘메이슨 주니어’(엘라 콜트레인)와 그의 누나 ‘사만다’(로렐라이 링클레이터)는 싱글맘인 ‘올리비아’(패트리샤 아케이트)와 텍사스에 살고 있다. 아빠인 ‘메이슨 시니어’(에단 호크)는 일주일에 한 번씩 들러 ‘메이슨’과 ‘사만다’를 데리고 캠핑을 가거나 야구장에 데려 가며 친구처럼 놀아 주곤 하지만 함께 살 수는 없다. 게다가 엄마의 일 때문에 친구들과 헤어져 계속해서 낯선 도시로 이사를 다녀야 하는 메이슨은 외로운 나날을 보내며 점차 성장해가는데…….",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/231975505422498E24",
          category: "멘토",
          detail: "삶;인생",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=118348",
          type: "movie"
        },
        {
          id: 234,
          title: "세얼간이",
          director: "라지쿠마르 히라니",
          year: '2011-8-18',
          rating: 9.35,
          runtime: 141,
          summary: "천재들만 간다는 일류 명문대 ICE, 성적과 취업만을 강요하는 학교를 발칵 뒤집어 놓은 대단한 녀석 란초! 아버지가 정해준 꿈, `공학자`가 되기 위해 정작 본인이 좋아하는 일은 포기하고 공부만하는 파파보이 파르한! 찢어지게 가난한 집, 병든 아버지와 식구들을 책임지기 위해 무조건 대기업에 취직해야만 하는 라주! 친구의 이름으로 뭉친 `세 얼간이`! 삐딱한 천재들의 진정한 꿈을 찾기 위한 세상 뒤집기 한판이 시작된다!",
          genres: "코미디",
          image: "http://t1.daumcdn.net/movie/6bbdf372b0d6c49c75582332d986ff892dc10886",
          category: "멘토",
          detail: "용기;인생",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=73372",
          type: "movie"
        },
        {
          id: 235,
          title: "마당을 나온 암탉",
          director: "오성윤",
          year: '2011-7-28',
          rating: 8.88,
          runtime: 93,
          summary: "매일 알만 낳던 운명의 암탉 잎싹은 양계장을 탈출해, 나그네와 달수의 도움으로 자유를 만끽한다. 어느날, 주인 없이 버려진 뽀얀 오리알을 발견한 잎싹은 난생 처음 알을 품게 되고... 드디어 알에서 깨어난 아기 오리 초록은 잎싹을 '엄마'로 여긴다. 족제비의 위협으로부터 안전한 늪으로 여정을 떠나는 암탉 잎싹과 청둥오리 초록. 과연 이들은 험난한 대자연 속에서 더 자유롭고 더 높이 날고 싶은 꿈을 이루어 낼 수 있을까?",
          genres: "애미메이션;드라마;모험;가족",
          image: "http://t1.daumcdn.net/cfile/172DB3464E0812260E",
          category: "멘토",
          detail: "모성",
          link: "http://movie.naver.com/movie/bi/mi/basic.naver?code=41585",
          type: "movie"
        },
        {
          id: 236,
          title: "인사이드 아웃",
          director: "피트 닥터",
          year: '2015-7-9',
          rating: 9.05,
          runtime: 102,
          summary: "모든 사람의 머릿속에 존재하는 감정 컨트롤 본부 그곳에서 불철주야 열심히 일하는 기쁨, 슬픔, 버럭, 까칠, 소심 다섯 감정들. 이사 후 새로운 환경에 적응해야 하는 ‘라일리’를 위해 그 어느 때 보다 바쁘게 감정의 신호를 보내지만 우연한 실수로 ‘기쁨’과 ‘슬픔’이 본부를 이탈하게 되자 '라일리’의 마음 속에 큰 변화가 찾아온다. '라일리'가 예전의 모습을 되찾기 위해서는 ‘기쁨’과 ‘슬픔’이 본부로 돌아가야만 한다! 그러나 엄청난 기억들이 저장되어 있는 머릿속 세계에서 본부까지 가는 길은 험난하기만 한데… 과연, ‘라일리’는 다시 행복해질 수 있을까? 지금 당신의 머릿속에서 벌어지는 놀라운 일! 하루에도 몇번씩 변하는 감정의 비밀이 밝혀진다!",
          genres: "애미메이션;코미디",
          image: "http://t1.daumcdn.net/movie/df7ac19d3829b7e22f15a7a83eb335ccff0f6c06",
          category: "멘토",
          detail: "감정;성장",
          link: "https://movie.naver.com/movie/bi/mi/review.naver?code=115622",
          type: "movie"
        },
        {
          id: 237,
          title: "주토피아",
          director: "바이론 하워드;리치 무어",
          year: '2016-2-17',
          rating: 9.33,
          runtime: 108,
          summary: "누구나 살고 싶은 도시 1위, 주토피아 연쇄 실종 사건 발생! “미치도록 잡고 싶었다!” 교양 있고 세련된 라이프 스타일을 주도하는 도시 주토피아. 이 곳을 단숨에 혼란에 빠트린 연쇄 실종사건이 발생한다! 주토피아 최초의 토끼 경찰관 주디 홉스는 48시간 안에 사건 해결을 지시 받자 뻔뻔한 사기꾼 여우 닉 와일드에게 협동 수사를 제안하는데… 스릴 넘치는 추격전의 신세계가 열린다!",
          genres: "애미메이션;코미디;액션;모험;가족",
          image: "http://t1.daumcdn.net/movie/d0fb689037e15d26e4332bf931f5eca8e7f5cdd1",
          category: "멘토",
          detail: "편견;사회",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=130850",
          type: "movie"
        },
        {
          id: 238,
          title: "라이프 오브 파이",
          director: "이안",
          year: '2013-1-1',
          rating: 9.53,
          runtime: 127,
          summary: "인도에서 동물원을 운영하던 ‘파이’의 가족은 동물들을 싣고 이민을 떠나는 도중 거센 폭풍우를 만나고 배는 침몰한다. 혼자 살아남은 파이는 가까스로 구명보트에 올라 타지만 다친 얼룩말과 굶주린 하이에나, 그리고 오랑우탄과 함께 표류하게 된다. 하지만 모두를 놀라게 만든 진짜 주인공은 바로 보트 아래에 몸을 숨기고 있던 벵골 호랑이 ‘리처드 파커’! 배고픔에 허덕이는 동물들은 서로를 공격하고 결국 파이와 리처드 파커만이 배에 남게 되는데… 끝없이 펼쳐진 수평선, 거대하게 빛나는 고래 바다를 빛으로 물들인 해파리, 미어캣이 사는 신비의 섬까지, 파이와 리처드 파커 앞에 그 누구도 보지 않고서는 믿을 수 없는 놀라운 광경이 펼쳐진다!",
          genres: "드라마;판타지;모험",
          image: "http://t1.daumcdn.net/movie/5d4030b8b18a6f587aa756e7c962db524f6739a4",
          category: "멘토",
          detail: "믿음;철학",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=87309",
          type: "movie"
        },
        {
          id: 239,
          title: "넛잡: 땅콩 도둑들",
          director: "피터 레페니오티스",
          year: '2014-1-29',
          rating: 7.33,
          runtime: 86,
          summary: "도심 속 공원의 말썽쟁이 다람쥐 설리! 그만 나타나면 모든 일이 엉망이 되는 바람에 공원에 사는 동물들은 항상 걱정투성이다. 아니나 다를까, 공원에 사는 모든 동물들의 겨울나기 식량창고인 떡갈나무를 홀랑 태워먹는 설리. 제대로 된 재판도 없이 통솔자 라쿤의 주도 아래 공원식구들의 만장일치로 설리는 결국 공원에서 추방을 당하고, 그의 곁엔 마음 착한 생쥐 친구 버디만 남는다. 주린 배를 채우기 위해 식량을 찾아 떠나는 설리와 버디. 평온했던 공원과는 달리 텃세 심한 도심에는 여기저기 위험이 도사리고 있는데… 온갖 우여곡절 끝에 절망만이 남았다고 생각하던 바로 그 순간, 기적처럼 설리와 버디 앞에 짠~하고 나타난 땅콩가게! 보기만 해도 맛깔스런 땅콩이 수북수북! 설리와 버디는 땅콩가게를 털기로 결심한다. 한편, 먹을 거리가 없어진 공원식구들을 위해 라쿤은 여장부 앤디와 호기로운 그레이슨에게 식량을 구해올 것을 지시한다. 사명감을 가지고 도심으로 나선 그들이 도착한 곳은 다름 아닌 설리와 버디가 잠입한 바로 그 땅콩가게인데!? 그.러.나! 그 땅콩가게에는 숨겨진 비밀이 있으니… 그곳은 바로 은행털이 강도범들의 위장 은신처였던 것! 설리&버디 vs 앤디&그레이슨이 땅콩을 놓고 아웅다웅 하는 사이, 더 큰 위험이 그들에게 다가오는데! 설리와 친구들이 땅콩을 훔치기 위해 펼치는 좌충우돌 고군분투 스토리! 과연 그들은 땅콩을 차지해 올 겨울을 따뜻하게 보낼 수 있을까?",
          genres: "애니메이션;모험;코미디;가족",
          image: "http://t1.daumcdn.net/cfile/210B9E4852CAE2240A",
          category: "멘토",
          detail: "극복",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=76651",
          type: "movie"
        },
        {
          id: 240,
          title: "라라랜드",
          director: "데이미언 셔젤",
          year: '2016-12-7',
          rating: 8.91,
          runtime: 127,
          summary: "꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.",
          genres: "드라마;뮤지컬;멜로;로맨스",
          image: "https://t1.daumcdn.net/movie/0e371de6f342a66143c49af3dd2b204342bbb5aa",
          category: "멘토",
          detail: "예술;꿈",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=134963",
          type: "movie"
        },
        {
          id: 241,
          title: "업",
          director: "피트 닥터;밥 피터슨",
          year: '2009-7-29',
          rating: 9.33,
          runtime: 101,
          summary: "평생 모험을 꿈꿔 왔던 ‘칼’ 할아버지는 수천 개의 풍선을 매달아 집을 통째로 남아메리카로 날려 버리는데, ‘칼’ 할아버지의 이 위대한 모험에 초대 받지 않은 불청객이 있었으니, 바로 황야의 탐험가 ‘러셀’! 지구상에 둘도 없을 이 어색한 커플이 함께 하는 대모험. 그들은 과연 남미의 잃어버린 세계에서 사라져 버린 꿈과 희망, 행복을 다시 찾을 수 있을까?",
          genres: "애니이션;가족;모험;코미디;액션",
          image: "http://t1.daumcdn.net/cfile/116FF0164A6838ADC3",
          category: "멘토",
          detail: "인생;꿈",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=52120",
          type: "movie"
        },
        {
          id: 242,
          title: "드림걸즈",
          director: "빌 콘돈",
          year: '2007-2-22',
          rating: 8.51,
          runtime: 129,
          summary: "“신사 숙녀 여러분, ‘더 드림즈’를 소개합니다” 1960년대 세계를 뒤흔든 스타 탄생! 전설의 소울 트리오 ‘더 드림즈’ 같은 꿈을 키워온 세 친구 ‘디나’, ‘에피’, ‘로렐’의 드라마틱한 데뷔부터 화려한 성공, 아찔한 스캔들까지! 이들을 둘러싼 사랑과 우정, 박수와 환호가 히트송 퍼레이드와 함께 펼쳐진다. 꿈과 희망을 노래하는 환상의 무대가 지금 시작됩니다!",
          genres: "드라마;뮤지컬",
          image: "https://t1.daumcdn.net/movie/e4f98bccfb72790b319d30d2fa4303cd49eda578",
          category: "멘토",
          detail: "열정;노래",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=61450",
          type: "movie"
        },
        {
          id: 243,
          title: "레볼루셔너리 로드",
          director: "샘 멘데스",
          year: '2009-2-19',
          rating: 8.39,
          runtime: 118,
          summary: "첫눈에 반한 에이프릴(케이트 윈슬렛)과 프랭크(레오나르도 디카프리오)는 결혼을 해서 행복한 가정을 이룬다. 뉴욕 맨하탄에서 1시간 정도 걸리는 교외 지역인 ‘레볼루셔너리 로드’에서 가장 아름다운 집에 보금자리를 꾸리게 된 두 사람. 모두가 안정되고 행복해 보이는 길, 레볼루셔너리 로드에서 그들의 사랑과 가정도 평안해 보이지만, 잔잔하고 반복되는 일상에서 탈출을 원하는 에이프릴과 프랭크는 모든 것을 버리고 파리로의 이민을 꿈꾼다. 새로운 삶을 찾게 되는 것에 들뜨고 행복하기만 한 두 사람. 하지만, 회사를 그만두려는 찰나 프랭크는 승진 권유를 받게 된다. 모든 것을 뒤로 하고 파리로 가고자 하는 에이프릴, 그리고 현실에서 좀 더 안정된 삶을 살고자 하는 프랭크. 서로를 너무 사랑하지만 현실과 이상 사이에서 갈등하게 되는 두 사람. 그들은 과연 어떤 선택을 하게 될까…",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/14493010B29FA7EF4E",
          category: "멘토",
          detail: "이상;현실;선택;꿈",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=66584",
          type: "movie"
        },
        {
          id: 244,
          title: "괜찮아요, 미스터 브래드",
          director: "마이크 화이트",
          year: '2017-9-21',
          rating: 8.35,
          runtime: 118,
          summary: "비영리 단체에서 일하며 평범한 하루를 보내는 브래드는 사회에 영향력을 행세하는 크레이그, 절대 갑부 제이슨, 은퇴 후 안락한 삶을 살고 있는 빌리 등 잘나가는 대학 동창들의 SNS를 보며 열등감에 휩싸인다. 그러던 중 아이비리그에 지원하려는 아들 트로이와 함께 보스턴으로 캠퍼스 투어를 떠나게 되고 잠시나마 아들의 명문대 진학이 자신의 초라함을 보상해 줄거란 즐거운 상상을 하게 된다. 하지만 트로이의 실수로 하버드 입학 면접 기회를 잃게 되고 브래드는 아들을 위해 껄끄러운 사이인 크레이그에 연락해 도움을 청하게 되는데..",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/eb61d75e38890240b4d2e7974ee9f904ddf32253",
          category: "멘토",
          detail: "공감;욕망",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=163832",
          type: "movie"
        },
        {
          id: 245,
          title: "소울",
          director: "피트 닥터",
          year: '2021-1-20',
          rating: 9.32,
          runtime: 107,
          summary: "뉴욕에서 음악 선생님으로 일하던 ‘조’는 꿈에 그리던 최고의 밴드와 재즈 클럽에서 연주하게 된 그 날, 예기치 못한 사고로 영혼이 되어 ‘태어나기 전 세상’에 떨어진다. 탄생 전 영혼들이 멘토와 함께 자신의 관심사를 발견하면 지구 통행증을 발급하는 ‘태어나기 전 세상’ ‘조’는 그 곳에서 유일하게 지구에 가고 싶어하지 않는 시니컬한 영혼 ‘22’의 멘토가 된다. 링컨, 간디, 테레사 수녀도 멘토되길 포기한 영혼 ‘22’ 꿈의 무대에 서려면 ‘22’의 지구 통행증이 필요한 ‘조’ 그는 다시 지구로 돌아가 꿈의 무대에 설 수 있을까?",
          genres: "애니메이션",
          image: "https://t1.daumcdn.net/movie/71454256ae63506a7fee5e03cf929b9b65a4f433",
          category: "멘토",
          detail: "삶;인생",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=184517",
          type: "movie"
        },
        {
          id: 246,
          title: "리틀 포레스트",
          director: "임순례",
          year: '2018-2-28',
          rating: 9.01,
          runtime: 103,
          summary: "시험, 연애, 취업… 뭐하나 뜻대로 되지 않는 일상을 잠시 멈추고 고향으로 돌아온 혜원은 오랜 친구인 재하와 은숙을 만난다 남들과는 다른, 자신만의 삶을 살기 위해 고향으로 돌아온 ‘재하’, 평범한 일상에서의 일탈을 꿈꾸는 ‘은숙’과 함께 직접 키운 농작물로 한끼 한끼를 만들어 먹으며 겨울에서 봄, 그리고 여름, 가을을 보내고 다시 겨울을 맞이하게 된 혜원. 그렇게 특별한 사계절을 보내며 고향으로 돌아온 진짜 이유를 깨닫게 된 혜원은 새로운 봄을 맞이하기 위한 첫 발을 내딛는데…",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/3f9aae261c6ad6662e3bc4346821e4357ddff112",
          category: "편안함",
          detail: "청춘;힐링",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=154449",
          type: "movie"
        },
        {
          id: 247,
          title: "바닷마을 다이어리",
          director: "고레에다 히로카즈",
          year: '2015-12-17',
          rating: 8.82,
          runtime: 128,
          summary: "시험, 연애, 취업… 뭐하나 뜻대로 되지 않는 일상을 잠시 멈추고 고향으로 돌아온 혜원은 오랜 친구인 재하와 은숙을 만난다 남들과는 다른, 자신만의 삶을 살기 위해 고향으로 돌아온 ‘재하’, 평범한 일상에서의 일탈을 꿈꾸는 ‘은숙’과 함께 직접 키운 농작물로 한끼 한끼를 만들어 먹으며 겨울에서 봄, 그리고 여름, 가을을 보내고 다시 겨울을 맞이하게 된 혜원. 그렇게 특별한 사계절을 보내며 고향으로 돌아온 진짜 이유를 깨닫게 된 혜원은 새로운 봄을 맞이하기 위한 첫 발을 내딛는데…",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/900b053808abfdc869057a8bf6e8781c5feeba24",
          category: "편안함",
          detail: "따뜻함;가족애",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=132610",
          type: "movie"
        },
        {
          id: 248,
          title: "비긴 어게인",
          director: "존 카니",
          year: '2014-8-13',
          rating: 9.13,
          runtime: 104,
          summary: "싱어송라이터인 ‘그레타’(키이라 나이틀리)는 남자친구 ‘데이브’(애덤 리바인)가 메이저 음반회사와 계약을 하게 되면서 뉴욕으로 오게 된다. 그러나 행복도 잠시, 오랜 연인이자 음악적 파트너로서 함께 노래를 만들고 부르는 것이 좋았던 그레타와 달리 스타가 된 데이브의 마음은 어느새 변해버린다. 스타 음반프로듀서였지만 이제는 해고된 ‘댄’(마크 러팔로)은 미치기 일보직전 들른 뮤직바에서 그레타의 자작곡을 듣게 되고 아직 녹슬지 않은 촉을 살려 음반제작을 제안한다. 거리 밴드를 결성한 그들은 뉴욕의 거리를 스튜디오 삼아 진짜로 부르고 싶었던 노래를 만들어가는데…",
          genres: "드라마;멜로;로맨스;코미디",
          image: "https://t1.daumcdn.net/movie/1f1fac987d974fe4aea225f821659d99e7999887",
          category: "편안함",
          detail: "노래;재시작",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=96379",
          type: "movie"
        },
        {
          id: 249,
          title: "미 비포 유",
          director: "테아 샤록",
          year: '2016-6-1',
          rating: 8.78,
          runtime: 110,
          summary: "이별을 준비하는 마지막에 나타난 짜증나는 여자 내 평생 최고의 6개월을 선물했다 6년 동안이나 일하던 카페가 문을 닫는 바람에 백수가 된 루이자(에밀리아 클라크)는 새 직장을 찾던 중 촉망 받던 젊은 사업가였던 전신마비 환자 윌(샘 클라플린)의 6개월 임시 간병인이 된다. 루이자의 우스꽝스러운 옷, 썰렁한 농담들, 속마음을 그대로 드러내는 얼굴 표정이 신경 쓰이는 윌. 말만 하면 멍청이 보듯 두 살짜리처럼 취급하고 개망나니처럼 구는 윌이 치사하기만 한 루이자. 그렇게 둘은 서로의 인생을 향해 차츰 걸어 들어가는데...",
          genres: "멜로;로맨스",
          image: "http://t1.daumcdn.net/movie/915389db41e5ea5a6990ff6573f2435680ad249b",
          category: "편안함",
          detail: "사랑",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=137915",
          type: "movie"
        },
        {
          id: 250,
          title: "당신, 거기 있어줄래요",
          director: "홍지영",
          year: '2016-12-14',
          rating: 8.80,
          runtime: 111,
          summary: "2015년 현재 “간절히 바라는 소원이 있습니까?” 현재의 수현(김윤석)은 의료 봉사 활동 중 한 소녀의 생명을 구하고 소녀의 할아버지로부터 신비로운 10개의 알약을 답례로 받는다. 호기심에 알약을 삼킨 수현은 순간 잠에 빠져들고 다시 눈을 떴을 때, 30년 전 과거의 자신과 마주하게 된다. 1985년 과거 “분명 모르는 사람인데... 이상하게 낯이 익었어” 오래된 연인 연아(채서진)와 행복한 나날을 보내던 과거의 수현(변요한)은 우연히 길에 쓰러진 남자를 돕게 된다. 남자는 본인이 30년 후의 수현이라 주장하고 황당해하던 과거의 수현은 그가 내미는 증거들을 보고 점차 혼란에 빠진다. “과거는 되돌릴 수 없어. 지금 이 순간 역시, 되돌릴 수 없는 시간이고.” “당신에겐 과거지만 나한텐 미래에요. 그 미랜 내가 정하는 거고!” 사랑했던 연아를 꼭 한 번 보고 싶었다는 현재 수현의 말에 과거 수현은 알 수 없는 불안감을 느끼고 이어 믿기 힘든 미래에 대해 알게 되는데… 그 때로 돌아간다면… 지금의 내 인생도 바뀔 수 있을까요?",
          genres: "드라마;판타지",
          image: "http://t1.daumcdn.net/movie/ba9b7b1b37845d20df4ad04c91532bda656f3c99",
          category: "편안함",
          detail: "소중함;사랑",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=145292",
          type: "movie"
        },
        {
          id: 251,
          title: "미쓰 와이프",
          director: "강효진",
          year: '2015-8-13',
          rating: 8.68,
          runtime: 118,
          summary: "뉴욕 본사 발령을 앞두고, 연우(엄정화)는 갑작스러운 교통사고를 당한다. 생사의 위기에 놓인 연우 앞에 나타난 수상한 남자 ‘이소장’(김상호), 그는 한 달간 다른 사람의 인생을 살면 다시 원래의 삶으로 돌려 보내주겠다고 제안한다. 하지만 제안을 수락한 그녀에게 찾아온 건 지나치게 자상한 남편과 애 둘 딸린 아줌마의 전쟁 같은 일상! 연우는 청천벽력 같은 인생반전으로 패닉에 빠지고, 남편 ‘성환’(송승헌)과 아이들은 영문도 모른 채 변해버린 아내, 엄마로 인해 당황하기 시작하는데…! 딱 한달, 완벽하게 숨겨야만 하는 그녀의 반전 라이프가 시작된다!",
          genres: "코미디",
          image: "http://t1.daumcdn.net/movie/d55160aba12b379d6f8ab56cb59b6b8015e5ec33",
          category: "편안함",
          detail: "유쾌;가족",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=129406",
          type: "movie"
        },
        {
          id: 252,
          title: "미드나잇 인 파리",
          director: "우디 앨런",
          year: '2012-7-5',
          rating: 9.00,
          runtime: 94,
          summary: "약혼자 '이네즈'(레이첼 맥아담스)를 두고 홀로 파리의 밤거리를 배회하던 '길'(오웬 윌슨)은 종소리와 함께 홀연히 나타난 차에 올라타게 되고 그곳에서 1920년대를 대표하는 예술가들과 조우하게 된다. 그 날 이후 매일 밤 1920년대로 떠난 '길'은 평소에 동경하던 예술가들과 친구가 되어 꿈 같은 시간을 보내게 되고 헤밍웨이와 피카소의 연인이자 뮤즈인 ‘애드리아나’(마리옹 꼬띠아르)를 만나게 된다. 시간이 지날수록 ‘길’은 예술과 낭만을 사랑하는 매혹적인 그녀에게 빠져들게 되는데… 세기를 초월한 사랑은 이뤄질 수 있을까?",
          genres: "코미디;멜로;로맨스;판타지",
          image: "http://t1.daumcdn.net/movie/738cb1b8ed1705cbf165904a0093c874445cf359",
          category: "편안함",
          detail: "예술;낭만",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=74610",
          type: "movie"
        },
        {
          id: 253,
          title: "안녕,헤이즐",
          director: "조쉬 분",
          year: '2014-8-13',
          rating: 8.48,
          runtime: 125,
          summary: "산소통을 캐리어처럼 끌고 호흡기를 생명줄처럼 차고 있는 헤이즐. 집에 틀어박혀 리얼리티 쇼나 보며 하루를 축내는 자신을 걱정하는 가족에게 등 떠밀려 어쩔 수 없이 참석한 암 환자 모임에서 꽃미소가 매력적인 어거스터스를 만난다. 담배를 입에 물었지만 불은 붙이지 않는 ‘상징적인 행동’으로 헤이즐의 맹비난을 재치있게 받아넘긴 어거스터스는 시크하고 우울증마저 겪는 헤이즐을 두근거리게 만든다. 무한 설렘주의! 무엇도 방해할 수 없는 예측불허 로맨스~ 두 사람은 소설책을 나눠 읽으며 급속도로 가까워지고, 어거스터스는 헤이즐이 그토록 좋아하는 네덜란드의 작가를 만나게 해주기 위해 ‘지니의 소원’을 빌어 암스테르담 여행을 제안한다. 가족과 주변의 걱정과 만류에도 불구하고 생애 처음으로 여행길에 오른 두 사람. 자신을 시한폭탄이라 생각하고 사랑하는 것들 과 선을 그었던 그녀와, 거절당할까 두려워 진실을 감춰왔던 어거스터스는 서로에게 속마음을 털어놓기 시작하는데... 예측불허 이들의 사랑은 어떻게 될까?",
          genres: "드라마;멜로;로맨스",
          image: "http://t1.daumcdn.net/cfile/266BFB4953C734AF04",
          category: "편안함",
          detail: "사랑;아픔",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=118370",
          type: "movie"
        },
        {
          id: 254,
          title: "국제시장",
          director: "윤제균",
          year: '2014-12-17',
          rating: 9.16,
          runtime: 126,
          summary: "1950년대 한국전쟁 이후로부터 현재에 이르기까지 격변의 시대를 관통하며 살아온 우리 시대 아버지 ‘덕수’(황정민 분), 그는 하고 싶은 것도 되고 싶은 것도 많았지만 평생 단 한번도 자신을 위해 살아본 적이 없다. ‘괜찮다’ 웃어 보이고 ‘다행이다’ 눈물 훔치며 힘들었던 그때 그 시절, 오직 가족을 위해 굳세게 살아온 우리들의 아버지 이야기가 지금부터 시작된다.",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/2502AF49546B09E61F",
          category: "편안함",
          detail: "과거",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=102875",
          type: "movie"
        },
        {
          id: 255,
          title: "파파로티",
          director: "윤종찬",
          year: '2013-3-14',
          rating: 8.31,
          runtime: 127,
          summary: "성악천재 건달, 큰 형님보다 무서운 적수를 만나다 한 때 잘 나가던 성악가였지만 지금은 촌구석 예고의 음악 선생인 상진(한석규). 싸늘한 교육열, 까칠함만 충만한 그에게 청천벽력 같은 미션이 떨어진다. 천부적 노래 실력을 지녔으나, 일찍이 주먹세계에 입문한 건달 장호(이제훈)를 가르쳐 콩쿨에서 입상 하라는 것. 전학 첫날 검은 승용차에 어깨들까지 대동하고 나타난 것도 모자라, 수업 중에도 ‘큰 형님’의 전화는 챙겨 받는 무늬만 학생인 장호가 못마땅한 상진. 장호의 노래를 들어볼 필요도 없이 결론을 내린다. “똥인지 된장인지 꼭 찍어 먹어봐야 아냐?!” 주먹과 노래 두 가지 재능을 타고났으나 막막한 가정 환경으로 인해 주먹 세계에 뛰어든 장호. 비록 현실은 ‘파바로티’의 이름 하나 제대로 모르는 건달이지만 성악가가 되고픈 꿈만은 잊은 적 없다. 이런 자신을 가르쳐 주긴커녕 툭하면 개나 소나 취미로 하는 게 클래식이냐며 사사건건 무시하는 쌤 상진의 태도에 발끈하는 장호. 그래도 꿈을 포기할 수 없는 장호는 험난하고 까칠한 상진과의 관계를 이어가는데... “쌤요. 내 똥 아입니더!”",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/1565DF4B512F05C613",
          category: "편안함",
          detail: "힐링;음악",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=85640",
          type: "movie"
        },
        {
          id: 256,
          title: "반창꼬",
          director: "정기훈",
          year: '2012-12-19',
          rating: 8.58,
          runtime: 120,
          summary: "매일 목숨을 내놓고 사건 현장에 뛰어들지만 정작 자신의 아내를 구하지 못한 상처를 간직한 소방관 ‘강일’(고수). 매번 제 멋대로 말하고 거침없이 행동하며 상처도 사랑도 없는 척하지만 단 한번의 실수로 위기에 처한 의사 ‘미수’(한효주). 우연한 기회에 ‘미수’가 ‘119 구조대 의용대원’으로 일하게 되면서 같은 구조대에 있는 ‘강일’에게 처음으로 마음을 열고 적극적으로 다가간다. 모든 방법을 동원해 ‘강일’에게 애정공세를 펼치는 ‘미수’. 그리고 그런 그녀에게 까칠함으로 일관하던 강일 역시 조금씩 마음을 열기 시작한다. 가스 폭발 사고는 물론 차량 충돌 사고까지 쉴 틈 없이 이어지는 아찔한 사고 현장 속에서 생명을 구하고 기분 좋게 하루를 마무리 하며, 또 다른 내일을 준비하는 소방대원들. 생사가 오가는 치열한 현장에서 다른 이들의 생명은 구하며 살지만 정작 자신의 상처는 돌보지 못하는 ‘강일’과 ‘미수’. 과연 그들은 서로의 상처에 반창꼬를 붙여 줄 수 있을까? 12월, 사랑보다 더 ‘뜨거운’ 이야기가 시작된다!",
          genres: "드라마;멜로;로맨스",
          image: "http://t1.daumcdn.net/cfile/146E4B4C5098BA6B26",
          category: "편안함",
          detail: "상처;치료",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=91045",
          type: "movie"
        },
        {
          id: 257,
          title: "카모메 식당",
          director: "오기가미 나오코",
          year: '2007-8-2',
          rating: 8.35,
          runtime: 102,
          summary: "헬싱키의 길모퉁이에 새로 생긴 카모메 식당. 이곳은 야무진 일본인 여성 사치에(고바야시사토미)가 경영하는 조그만 일식당이다. 주먹밥을 대표 메뉴로 내놓고 손님을 기다리지만 한달 째 파리 한 마리 날아들지 않는다. 그래도 꿋꿋이 매일 아침 음식 준비를 하는 그녀에게 언제쯤 손님이 찾아올까? 일본만화 매니아인 토미가 첫 손님으로 찾아와 대뜸 ‘독수리 오형제’의 주제가를 묻는가 하면, 눈을 감고 세계지도를 손가락으로 찍은 곳이 핀란드여서 이곳까지 왔다는 미도리(가타기리 하이리)가 나타나는 등 하나 둘씩 늘어가는 손님들로 카모메 식당은 활기를 더해간다. 사치에의 맛깔스런 음식과 함께 식당을 둘러싼 사연 있는 사람들의 정체가 서서히 밝혀지는데….",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/3013ad48c45b49272b83f9d79e6ea27e5d665a39",
          category: "편안함",
          detail: "잔잔함;소소함",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=63969",
          type: "movie"
        },
        {
          id: 258,
          title: "마담 프루스트의 비밀정원",
          director: "실뱅 쇼메",
          year: '2014-7-24',
          rating: 8.84,
          runtime: 106,
          summary: "어릴 적에 부모를 여읜 폴은 말을 잃은 채 두 이모와 함께 산다. 이모들은 폴을 세계적인 피아니스트로 만들려고 했지만 33살의 폴은 댄스교습소에서 피아노 연주를 하는 것이 전부이다. 그러던 어느 날 우연히 이웃 마담 프루스트의 집을 방문한 폴은 그녀가 준 차와 마들렌을 먹고 과거의 상처와 추억을 떠올리게 되는데…",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/7bbc2de49fe643cfa50065992f892f3a1562893408714",
          category: "편안함",
          detail: "과거;치유",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=113170",
          type: "movie"
        },
        {
          id: 259,
          title: "줄리 & 줄리아",
          director: "노라 애프론",
          year: '2009-12-10',
          rating: 8.69,
          runtime: 122,
          summary: "전설의 프렌치 셰프 ‘줄리아 차일드’ (메릴 스트립). 외교관 남편과 함께 프랑스에 도착한 줄리아는 말도 잘 통하지 않는 외국생활에서 먹을 때 가장 행복한 자신을 발견하고 명문 요리학교 ‘르꼬르동 블루’를 다니며 요리 만들기에 도전, 마침내 모두를 감동시킨 전설적인 프렌치 셰프가 되는데... 사랑할 수 밖에 없는 뉴욕의 요리 블러거 ‘줄리’ (에이미 아담스). 한창 잘나가는 친구들과 잔소리 뿐인 엄마 사이에서 기분전환으로 시작한 요리 블로그. 유일한 지원군은 남편 뿐이지만 전설의 프렌치 셰프 ‘줄리아 차일드’의 요리책을 보며 365일 동안 총 524개의 레시피에 도전하는 그녀의 프로젝트는 점차 네티즌의 열렬한 반응을 얻게 되는데는 성공하지만...",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/1210ED0B4B13383B6C",
          category: "편안함",
          detail: "요리;훈훈함",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=52425",
          type: "movie"
        },
        {
          id: 260,
          title: "그린 북",
          director: "피터 패럴리",
          year: '2019-1-9',
          rating: 9.55,
          runtime: 130,
          summary: "1962년 미국, 입담과 주먹만 믿고 살아가던 토니 발레롱가(비고 모텐슨)는 교양과 우아함 그 자체인 천재 피아니스트 돈 셜리(마허샬라 알리) 박사의 운전기사 면접을 보게 된다. 백악관에도 초청되는 등 미국 전역에서 콘서트 요청을 받으며 명성을 떨치고 있는 돈 셜리는 위험하기로 소문난 미국 남부 투어 공연을 떠나기로 결심하고, 투어 기간 동안 자신의 보디가드 겸 운전기사로 토니를 고용한다. 거친 인생을 살아온 토니 발레롱가와 교양과 기품을 지키며 살아온 돈 셜리 박사. 생각, 행동, 말투, 취향까지 달라도 너무 다른 두 사람은 그들을 위한 여행안내서 ‘그린북’에 의존해 특별한 남부 투어를 시작하는데…",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/8b82fb1d2fde403696cdf774f8cf884e1547515052456",
          category: "편안함",
          detail: "차별;실화",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=171539",
          type: "movie"
        },
        {
          id: 261,
          title: "극한직업",
          director: "이변헌",
          year: '2019-1-23',
          rating: 9.20,
          runtime: 111,
          summary: "불철주야 달리고 구르지만 실적은 바닥, 급기야 해체 위기를 맞는 마약반! 더 이상 물러설 곳이 없는 팀의 맏형 고반장은 국제 범죄조직의 국내 마약 밀반입 정황을 포착하고 장형사, 마형사, 영호, 재훈까지 4명의 팀원들과 함께 잠복 수사에 나선다. 마약반은 24시간 감시를 위해 범죄조직의 아지트 앞 치킨집을 인수해 위장 창업을 하게 되고, 뜻밖의 절대미각을 지닌 마형사의 숨은 재능으로 치킨집은 일약 맛집으로 입소문이 나기 시작한다. 수사는 뒷전, 치킨장사로 눈코 뜰 새 없이 바빠진 마약반에게 어느 날 절호의 기회가 찾아오는데… 범인을 잡을 것인가, 닭을 잡을 것인가!",
          genres: "코미디",
          image: "http://t1.daumcdn.net/movie/4e00e81f2b6f4d2eb65b3387240cc3c01547608409838",
          category: "웃음",
          detail: "잠복근무",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=167651",
          type: "movie"
        },
        {
          id: 262,
          title: "킬러의 보디가드",
          director: "패트릭 휴즈",
          year: '2017-8-30',
          rating: 9.10,
          runtime: 118,
          summary: "세상 제일 잘난 맛에 사는 섭외 1순위 앵그리 보디가드가 지명수배 1순위 구강 액션 지존 킬러를 보호하게 되면서 벌어지는 누가 누구를 지키는 지 모를, 서로 못 죽여서 안달 난 브로맨스 제로, 환장 케미의 킬링 액션 블록버스터",
          genres: "액션;코미디",
          image: "https://t1.daumcdn.net/movie/8f59e96a7d9d81f65bfa01065a2d4c85f28fc23d",
          category: "웃음",
          detail: "브로맨스",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=152625",
          type: "movie"
        },
        {
          id: 263,
          title: "수상한 그녀",
          director: "황동혁",
          year: '2014-1-22',
          rating: 9.09,
          runtime: 124,
          summary: "아들 자랑이 유일한 낙인 욕쟁이 칠순 할매 오말순(나문희分)은 어느 날, 가족들이 자신을 요양원으로 독립(?)시키려 한다는 청천벽력 같은 사실을 알게 된다. 뒤숭숭한 마음을 안고 밤길을 방황하던 할매 말순은 오묘한 불빛에 이끌려 ‘청춘 사진관’으로 들어간다. 난생 처음 곱게 꽃단장을 하고 영정사진을 찍고 나오는 길, 그녀는 버스 차창 밖에 비친 자신의 얼굴을 보고 경악을 금치 못한다. 오드리 헵번처럼 뽀얀 피부, 날렵한 몸매... 주름진 할매에서 탱탱한 꽃처녀의 몸으로 돌아간 것! 아무도 알아보지 못하는 자신의 젊은 모습에 그녀는 스무살 ‘오두리’가 되어 빛나는 전성기를 즐겨 보기로 마음 먹는데... 2014년 새해, 대한민국에 웃음 보따리를 안겨줄 <수상한 그녀>가 온다!",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/cfile/2137974752CA000B2E",
          category: "웃음",
          detail: "꿈;청춘",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=107924",
          type: "movie"
        },
        {
          id: 264,
          title: "해적: 바다로 간 산적",
          director: "이석훈",
          year: '2014-8-6',
          rating: 8.51,
          runtime: 130,
          summary: "조선의 국새를 고래가 삼켜버렸다?! 전대미문 국새 강탈 사건으로 조정은 혼란에 빠지고, 이를 찾기 위해 조선의 난다긴다 하는 무리들이 바다로 모여든다! 바다를 호령하다 졸지에 국새 도둑으로 몰린 위기의 해적 고래는커녕 바다도 처음이지만 의기양양 고래사냥에 나선 산적 건국을 코앞에 두고 발등에 불이 떨어진 개국세력까지! 국새를 차지하는 자, 천하를 얻을 것이다!",
          genres: "모험;액션",
          image: "http://t1.daumcdn.net/cfile/2245CE4C53A8E30511",
          category: "웃음",
          detail: "유쾌;상쾌;통쾌",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=102817",
          type: "movie"
        },
        {
          id: 265,
          title: "데드풀",
          director: "팀 밀러",
          year: '2016-2-17',
          rating: 8.53,
          runtime: 106,
          summary: "전직 특수부대 출신의 용병 ‘웨이드 윌슨(라이언 레놀즈)’은 암 치료를 위한 비밀 실험에 참여 후, 강력한 힐링팩터를 지닌 슈퍼히어로 ‘데드풀’로 거듭난다. 탁월한 무술실력과 거침없는 유머감각을 지녔지만 흉측하게 일그러진 얼굴을 갖게 된 데드풀은 자신의 삶을 완전히 망가뜨린 놈들을 찾아 뒤쫓기 시작하는데…",
          genres: "액션",
          image: "http://t1.daumcdn.net/movie/d6e7e6d4bf9a6329352380775b6aef8a5bf28250",
          category: "웃음",
          detail: "마블;히어로",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=75426",
          type: "movie"
        },
        {
          id: 266,
          title: "킹스맨 : 시크릿 에이전트",
          director: "매튜 본",
          year: '2015-2-11',
          rating: 9.02,
          runtime: 128,
          summary: "세상에서 가장 위험한 면접이 시작된다! 높은 IQ, 주니어 체조대회 2년 연속 우승! 그러나 학교 중퇴, 해병대 중도 하차. 동네 패싸움에 직장은 가져본 적도 없이 별볼일 없는 루저로 낙인 찍혔던 ‘그’가‘젠틀맨 스파이’로 전격 스카우트 됐다! 전설적 베테랑 요원 해리 하트(콜린 퍼스)는 경찰서에 구치된 에그시(태런 애거튼)를 구제한다. 탁월한 잠재력을 알아본 그는 에그시를 전설적 국제 비밀정보기구 ‘킹스맨’ 면접에 참여시킨다. 아버지 또한 ‘킹스맨’의 촉망 받는 요원이었으나 해리 하트를 살리기 위해 죽었다는 사실을 알게 된 에그시. 목숨을 앗아갈 만큼 위험천만한 훈련을 통과해야 하는 킹스맨 후보들. 최종 멤버 발탁을 눈 앞에 둔 에그시는 최고의 악당 발렌타인(사무엘 L. 잭슨)을 마주하게 되는데… <엑스맨: 퍼스트 클래스> 감독과 마블 코믹스 인기작가의 만남! 스파이 액션의 새로운 시대가 열린다!",
          genres: "액션;스릴러",
          image: "http://t1.daumcdn.net/cfile/2478DE4B54DABBF023",
          category: "웃음",
          detail: "젠틀;신사;통쾌",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=114249",
          type: "movie"
        },
        {
          id: 267,
          title: "브루스 올마이티",
          director: "톰 새디악",
          year: '2003-7-11',
          rating: 9.07,
          runtime: 100,
          summary: "브루스는 뉴욕, 버펄로 지방 방송국의 뉴스 리포터. 재미있고 소박한 이웃들 얘기를 단골로 맡아 재미있는 입담으로 사람들을 즐겁게 해주지만 정작 자신은 자신에게 주어지는 별 볼일 없는 취재거리가 늘 불만이다. 그러던 어느 날 브루스에게 기회가 찾아온다. 나이아가라 폭포의 유명한 “Maid of the Mist (안개 속의 처녀)”호의 23주년 기념일 취재를 맡게 된 것. 하지만 방송 직전, 브루스는 공석으로 알고 있던 앵커 자리가 그와 늘 으르렁거리는 왕재수 라이벌에게 돌아갔다는 것을 알게 되자, 수 백만 시청자 앞에서 정신없이 욕을 퍼붓는다. 방송국에서 쫓겨난 건 불 보듯 뻔한 일. 하지만 바로 그날 설상가상으로 브루스는 건달들에게 몰매를 맞고, 차가 엉망이 되고, 재수 없어도 오부지게 없는 일들만 반복된다. 화가 나 폭발하기 일보직전엔 브루스는 하늘을 향해 삿대질을 해대며, 자신의 불행은 신 탓이라며 원망한다. 이때 삐삐가 울리고 번호 하나가 찍힌다. 몇 번을 무시한 끝에 그 정체 모를 번호에 전화를 걸게 된 브루스는 “Omni Presents 사”라는 이상한 낡은 건물로 향하게 되고, 거기서 정체불명의 청소부(모건 프리먼)을 만난다. 그런데 그 청소부는 놀랍게도 브루스에게 자신이 신이라고 소개한다. 브루스의 원망에 응답해 모습을 나타낸 신은, 이 열 잘 받는 전직 리포터에게 자신의 전지전능한 힘을 주고, 얼마나 더 나은 세상을 만들 수 있는지 보자고 한다. 이제 브루스 놀란은 우주에서 가장 강력한 망나니가 되고, 마음대로 손가락을 휘둘러대기 시작한다. 과연 브루스는 자신에게 가장 소중한 것을 찾아낼 수 있을 것인가.",
          genres: "액션;스릴러",
          image: "http://t1.daumcdn.net/cfile/12110210A90B2E57EB",
          category: "웃음",
          detail: "신;행복",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=36858",
          type: "movie"
        },
        {
          id: 268,
          title: "완벽한 타인",
          director: "이재규",
          year: '2018-10-31',
          rating: 9.08,
          runtime: 115,
          summary: "우리 게임 한 번 해볼까? 다들 핸드폰 올려봐 저녁 먹는 동안 오는 모든 걸 공유하는 거야 전화, 문자, 카톡, 이메일 할 것 없이 싹! 오랜만의 커플 모임에서 한 명이 게임을 제안한다. 바로 각자의 핸드폰을 테이블 위에 올려두고 통화 내용부터 문자와 이메일까지 모두 공유하자고 한 것. 흔쾌히 게임을 시작하게 된 이들의 비밀이 핸드폰을 통해 들통나면서 처음 게임을 제안했던 것과는 전혀 다른 상상치 못한 결말로 흘러가는데…. 상상한 모든 예측이 빗나간다!",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/eb9834885f7747d78e132b66c0cf46a21541478705054",
          category: "웃음",
          detail: "블랙코미디",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=167638",
          type: "movie"
        },
        {
          id: 269,
          title: "내안의 그놈",
          director: "강효진",
          year: '2019-1-9',
          rating: 8.76,
          runtime: 122,
          summary: "엘리트 아재 판수(박성웅)를 우연히 옥상에서 떨어진 고등학생 동현(진영)이 덮치면서 제대로 바뀐다. 게다가 판수는 동현의 몸으로 첫사랑 미선(라미란)과 존재도 몰랐던 딸 현정(이수민)을 만나게 되는데… 대유잼의 향연, 넌 이미 웃고 있다!",
          genres: "판타지",
          image: "http://t1.daumcdn.net/movie/4295e3725db4457a8c9d810416c7e7741543894164660",
          category: "웃음",
          detail: "통쾌",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=164172",
          type: "movie"
        },
        {
          id: 270,
          title: "탐정 : 더 비기닝",
          director: "김정훈",
          year: '2015-9-24',
          rating: 8.62,
          runtime: 120,
          summary: "국내 최대 미제살인사건 카페를 운영하는 파워블로거 ‘강대만’(권상우)은 아기 돌보랴, 만화방 운영하랴, 부인 눈치 보랴 일상에 치여, '셜록'급의 추리력은 당최 쓸 데가 없다. 유일한 낙은 경찰서 기웃거리며 수사에 간섭하기! 광역수사대 출신 레전드 형사 ‘노태수’(성동일)는 형사 뺨치는 실력의 대만이 눈엣가시 같기만 하다. 그러던 어느 날, 친구이자 강력계 형사인 ‘준수’가 살인 사건의 범인으로 체포되고, 그의 누명을 벗기기 위해 두 사람은 어쩔 수 없이 비공식 합동추리작전을 시작한다. 그렇게 사사건건 부딪히기만 하던 그들 앞에 두 번째 살인사건이 일어나는데… “이제 우리가 나설 때인가!” 9월, 최강의 추리 콤비가 온다!",
          genres: "코미디;범죄",
          image: "http://t1.daumcdn.net/movie/792e6c77d27abbcf518ddc345dcba2df242b5e61",
          category: "웃음",
          detail: "추리",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=124201",
          type: "movie"
        },
        {
          id: 271,
          title: "굿바이 싱글",
          director: "김태곤",
          year: '2016-6-29',
          rating: 8.42,
          runtime: 119,
          summary: "대한민국 대표 독거스타의 임신 스캔들! 이번엔 제대로 사고쳤다! 온갖 찌라시와 스캔들의 주인공인 톱스타 ‘주연’(김혜수) 그러나 점차 내려가는 인기와 남자친구의 공개적 배신에 충격을 받고, 영원한 내 편을 만들기 위해 대책 없는 계획에 돌입하게 되는데! 대표 독거스타의 임신 발표는 전국민 스캔들로 일이 커지고, ‘주연’(김혜수)의 불알친구이자 스타일리스트인 ‘평구’(마동석)와 소속사 식구들이 안절부절하며 뒷수습에 동분서주 하는데… 통제불능 여배우! 그녀의 무모한 계획은 계속 될까?!",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/8f8aa2452569c57fd840b510809ce6fb7721c3ed",
          category: "웃음",
          detail: "편견",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=139700",
          type: "movie"
        },
        {
          id: 272,
          title: "형",
          director: "권수경",
          year: '2016-11-23',
          rating: 8.92,
          runtime: 110,
          summary: "유도 국가대표 고두영(도경수)은 경기 도중 불의의 사고를 당하게 되고 이 소식을 들은 사기전과 10범의 형 고두식(조정석)은 눈물의 석방 사기극을 펼친다! “형은 개뿔, 제발 내 인생에서 꺼져!” 형이 돌아오고 인생이 더 깜깜해졌다! 하루 아침에 앞이 깜깜해진 동생을 핑계로 1년간 보호자 자격으로 가석방 된 두식!. 15년동안 단 한번도 연락이 없던 뻔뻔한 형이 집으로 돌아오고 보호자 노릇은커녕 ‘두영’의 삶을 더 엉망진창으로 만드는데…. 남보다 못한 형제의 예측불허 동거가 시작된다!",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/1ccfbf81991b24161a31fa2629380acb1c64b9c3",
          category: "웃음",
          detail: "형제",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=142803",
          type: "movie"
        },
        {
          id: 273,
          title: "우리는 동물원을 샀다",
          director: "카메론 크로우",
          year: '2012-1-18',
          rating: 8.89,
          runtime: 124,
          summary: "모험심 강하고 열정적인 칼럼니스트이자 두 아이들의 아버지 벤자민 미(맷 데이먼)! 최근, 사랑하는 아내를 잃은 그는 엄마의 빈자리를 슬퍼하는 아이들과 새롭게 시작하기 위해 이사를 결정하고, 마침내 마음에 쏙 드는 집을 찾게 된다. 하지만, 완벽하게만 보이는 그 집의 딱 한가지 문제는 바로 무려 200여 마리의 리얼 야생 동물들이 사는 폐장 직전의 동물원이 딸려 있는 것! 동물원의 '동'자도 모르는 벤자민은 모험심이 발동, 전 재산을 통틀어 동물원을 사기로 결심한다. 덜컥 동물원에 입성한 벤자민 가족은 헌신적인 사육사 켈리(스칼렛 요한슨)와 함께 동물원을 오픈하기 위한 인생 최고의 모험을 시작하게 되는데... 과연, 이들은 동물원 재개장 프로젝트에 성공할 수 있을까?",
          genres: "가족;코미디",
          image: "http://t1.daumcdn.net/cfile/153C46484EC4B64709",
          category: "웃음",
          detail: "긍정;용기",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=76627",
          type: "movie"
        },
        {
          id: 274,
          title: "럭키",
          director: "이계벽",
          year: '2016-10-13',
          rating: 8.76,
          runtime: 112,
          summary: "냉혹한 킬러 형욱(유해진)은 사건 처리 후 우연히 들른 목욕탕에서 비누를 밟고 넘어져 과거의 기억을 잃게 된다. 인기도, 삶의 의욕도 없어 죽기로 결심한 무명배우 재성(이준)은 신변 정리를 위해 들른 목욕탕에서 그런 형욱을 보게 되고, 자신과 그의 목욕탕 키를 바꿔 도망친다. 이후 형욱은 자신이 재성이라고 생각한 채, 배우로 성공하기 위해 노력하는데… 인생에 단 한번 찾아온 초대형 기회! 초특급 반전! 이것이 LUCK.KEY다!",
          genres: "코미디",
          image: "http://t1.daumcdn.net/movie/120d2a4dfbf67c46627f554472263b0578af77ae",
          category: "웃음",
          detail: "킬러",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=140695",
          type: "movie"
        },
        {
          id: 275,
          title: "패딩턴",
          director: "폴 킹",
          year: '2015-1-7',
          rating: 8.76,
          runtime: 95,
          summary: "폭풍우에 가족을 잃은 꼬마곰 ‘패딩턴’은 페루에서 영국까지 ‘나홀로’ 여행을 떠난다. 런던에 도착한 ‘패딩턴’은 우연히 브라운 가족을 만나게 되고 그들의 도움을 받아 새로운 가족을 찾아 나선다! 하지만 움직이기만 해도 사고! 만지기만 해도 사고! 1초에 한번씩 사고를 치는 ‘패딩턴’은 브라운 가족의 골칫거리가 되고 만다. 한편, 말하는 곰이 나타났다는 소식에 악당 박제사 ‘밀리센트’는 호시탐탐 ‘패딩턴’을 노리는데…",
          genres: "코미디;가족;모험",
          image: "http://t1.daumcdn.net/cfile/2362254E54A96EB415",
          category: "웃음",
          detail: "행복;곰",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=114248",
          type: "movie"
        },
        {
          id: 276,
          title: "7번방의 선물",
          director: "이환경",
          year: '2013-1-23',
          rating: 8.83,
          runtime: 127,
          summary: "최악의 흉악범들이 모인 교도소 7번방에 이상한 놈이 들어왔다! 그는 바로 6살 지능의 딸바보 '용구'! 평생 죄만 짓고 살아온 7번방 패밀리들에게 떨어진 미션은 바로 '용구' 딸 '예승'이를 외부인 절대 출입금지인 교도소에 반.입.하.는.것! 2013년 새해, 웃음과 감동 가득한 사상초유의 합동작전이 시작된다!",
          genres: "코미디",
          image: "http://t1.daumcdn.net/cfile/1861D74750F7FBA71B",
          category: "눈물",
          detail: "휴머니즘",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=94775",
          type: "movie"
        },
        {
          id: 277,
          title: "세상에서 가장 아름다운 이별",
          director: "민규동",
          year: '2011-4-20',
          rating: 9.28,
          runtime: 125,
          summary: "“피곤해” 병원 일에만 신경 쓰는 가장(김갑수) “밥 줘, 밥” 어린애가 되어버린 할머니(김지영) “알아서 할게요” 언제나 바쁜 큰 딸(박하선) “됐어요” 여자친구밖에 모르는 삼수생 아들(류덕환) “돈 좀 줘” 툭 하면 사고치는 백수 외삼촌 부부(유준상&서영희) 그리고.. 꿈 많고 할 일도 많은 엄마(배종옥) 영원히 반복될 것만 같았던 일상에 찾아온 이별의 순간. 그날 이후…우리는 진짜 ‘가족’이 되었습니다.",
          genres: "드라마;가족",
          image: "http://t1.daumcdn.net/cfile/147588514D88397534",
          category: "눈물",
          detail: "후회;이별",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=79762",
          type: "movie"
        },
        {
          id: 278,
          title: "인생은 아름다워",
          director: "로베르토 베니니",
          year: '1999-3-6',
          rating: 9.54,
          runtime: 116,
          summary: "로마에 갓 상경한 시골 총각 ‘귀도’는 운명처럼 만난 여인 ‘도라’에게 첫눈에 반한다. 넘치는 재치와 유머로 약혼자가 있던 그녀를 사로잡은 ‘귀도’는 ‘도라’와 단란한 가정을 꾸리며 분신과도 같은 아들 ‘조수아’를 얻는다. ‘조수아’의 다섯 살 생일, 갑작스레 들이닥친 군인들은 ‘귀도’와 ‘조수아’를 수용소 행 기차에 실어버리고, 소식을 들은 ‘도라’ 역시 기차에 따라 오른다. ‘귀도’는 아들을 달래기 위해 무자비한 수용소 생활을 단체게임이라 속이고 1,000점을 따는 우승자에게는 진짜 탱크가 주어진다고 말한다. 불안한 하루하루가 지나 어느덧 전쟁이 끝났다는 말을 들은 ‘귀도’는 마지막으로 ‘조수아’를 창고에 숨겨둔 채 아내를 찾아 나서는데… 전세계를 울린 위대한 사랑, 마법처럼 놀라운 이야기가 찾아온다!",
          genres: "드라마;코미디",
          image: "http://t1.daumcdn.net/movie/8b5139e82e30ab43b6306713d7f26c01053ad875",
          category: "눈물",
          detail: "인생;부성애",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=22126",
          type: "movie"
        },
        {
          id: 279,
          title: "남자가 사랑할때",
          director: "한동욱",
          year: '2014-1-22',
          rating: 8.48,
          runtime: 116,
          summary: "나이만 먹었을 뿐, 대책 없는 이 남자, 아직도 형 집에 얹혀 살며 조카한테 삥 뜯기는 이 남자, 빌려준 돈은 기필코 받아오는 이 남자, 목사라고 인정사정 봐 주지 않는 이 남자, 여자한테 다가갈 땐 바지부터 내리고 보는 막무가내 이 남자, 평생 사랑과는 거리가 멀었던 한 남자가 사랑에 눈 뜨다! 일생에 단 한번, 남자가 사랑할 때",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/256D1C4852CC0F572E",
          category: "눈물",
          detail: "사랑",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=106540",
          type: "movie"
        },
        {
          id: 280,
          title: "담보",
          director: "강대규",
          year: '2020-9-29',
          rating: 9.18,
          runtime: 113,
          summary: "1993년 인천 거칠고 까칠한 사채업자 두석(성동일)과 종배(김희원)는 떼인 돈 받으러 갔다가 얼떨결에 9살 승이(박소이)를 담보로 맡게 된다. “담보가 무슨 뜻이에요?” 뜻도 모른 채 담보가 된 승이와 승이 엄마의 사정으로 아이의 입양까지 책임지게 된 두석과 종배. 하지만 부잣집으로 간 줄 알았던 승이가 엉뚱한 곳에 있다는 것을 알게 된 두 사람은 승이를 데려와 돌보게 된다. 예고 없이 찾아온 아이에게 인생을 담보 잡힌 두석과 종배. 빚 때문에 아저씨들에게 맡겨진 담보 승이. 두석, 종배, 승이 세 사람은 어느덧 서로에게 특별한 존재가 되는데.. 돈 받으러 갔다가 인생의 보물을 만났다!",
          genres: "드라마",
          image: "https://t1.daumcdn.net/movie/0c2466f6f09ff51b8dee1c1a039aadb0d4adf991",
          category: "눈물",
          detail: "사랑;인류애",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=183866",
          type: "movie"
        },
        {
          id: 281,
          title: "나우 이즈 굿",
          director: "올 파커",
          year: '2012-11-8',
          rating: 8.85,
          runtime: 103,
          summary: "나쁜 짓은 다하고 다니는 그녀의 이름은 테사! 도둑질, 무면허 운전, 마약, 싸움, 유명해지기 등을 위시리스트로 삼고, 절친 조이와 실행에 옮기느라 바쁘다. 어느 날, 원나잇스탠드에 실패한 테사 앞에 운명처럼 나타난 옆집 훈남 아담. 테사는 점차 아담에게 끌리게 되고, 그와의 첫키스에서 살아있는 순간 자체의 소중함을 느낀다. 그러나, 첫 데이트를 앞두고 그에게만은 보이고 싶지 않았던 모습을 들키게 되는데… 하지만 그녀의 인생에 가장 빛나는 순간을 선물할 작전을 세우는 아담! 다음 날, 테사의 소원 중 하나가 기적처럼 이루어지고, 모두를 치유해 줄 마지막 순간은 곧 다가오는데…!",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/136A144F506256D015",
          category: "눈물",
          detail: "사랑;삶",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=86197",
          type: "movie"
        },
        {
          id: 282,
          title: "하모니",
          director: "강대규",
          year: '2010-1-28',
          rating: 9.05,
          runtime: 115,
          summary: "행형법상 여성수용자가 교정시설에서 출산할 경우, 유아를 교정시설내에서 양육할 수 있는 기간은 생후 18개월까지로 제한한다. 18개월이 되면 아기를 입양 보내야 하는 정혜(김윤진), 가족마저도 등을 돌린 사형수 문옥(나문희), 저마다 아픈 사연을 가진 채 살아가는 여자교도소에 합창단이 결성되면서 사랑하는 이들을 위해 가슴 찡한 감동의 무대를 만들어가는 이야기.",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/153F67124B29EEE054",
          category: "눈물",
          detail: "사람;노래",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=53034",
          type: "movie"
        },
        {
          id: 283,
          title: "아이 캔 스피크",
          director: "김현석",
          year: '2017-9-21',
          rating: 9.23,
          runtime: 119,
          summary: "온 동네를 휘저으며 무려 8천 건에 달하는 민원을 넣어 도깨비 할매라고 불리는 ‘옥분’. 20여 년간 누구도 막을 수 없었던 그녀 앞에 원칙주의 9급 공무원 ‘민재’가 나타나면서 팽팽한 긴장감이 흐른다. 민원 접수만큼이나 열심히 공부하던 영어가 좀처럼 늘지 않아 의기소침한 ‘옥분’은 원어민 수준의 영어를 구사하는 ‘민재’를 본 후 선생님이 되어 달라며 시간과 장소를 불문하고 부탁하기에 이른다. 둘만의 특별한 거래를 통해 결코 어울리지 않을 것 같았던 두 사람의 영어 수업이 시작되고, 함께하는 시간이 계속 될수록 서로를 이해하고 소통하게 되면서 친구이자 가족이 되어 간다. ‘옥분’이 영어 공부에 매달리는 이유가 내내 궁금하던 ‘민재’는 어느 날, 그녀가 영어로 꼭 하고 싶은 말이 있다는 것을 알게 되는데…",
          genres: "드라마",
          image: "http://t1.daumcdn.net/movie/de60ed83eff4d1910a6cd64ef8000e9e8aa9b212",
          category: "눈물",
          detail: "메시지",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=161850",
          type: "movie"
        },
        {
          id: 284,
          title: "하치 이야기",
          director: "라세 할스트롬",
          year: '2010-2-18',
          rating: 9.06,
          runtime: 93,
          summary: "대학교수인 파커 (리차드 기어)는 퇴근길 기차역 플랫폼에서 길 잃은 강아지를 발견하고 아내(조안 알렌)의 반대에도 불구하고 녀석을 극진히 보살피고 키운다. 품종이 일본의 아키타견인데 착안해 ‘하치’라는 이름을 얻게 되고, 하치는 주인을 따라 아침이면 출근길을 배웅하고 저녁이면 그 기차역에서 주인을 마중하기를 하루도 거르지 않는다. 그런 녀석이 너무도 사랑스러운 파커 교수, 그러나 어느날 파커가 강단에서 강연 중 쓰러지고 하치는 오지 않는 주인을 매일같이 기다리는데...",
          genres: "드라마;가족",
          image: "http://t1.daumcdn.net/cfile/186BFD184B6BA95070",
          category: "눈물",
          detail: "동물;교감",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=53881",
          type: "movie"
        },
        {
          id: 285,
          title: "베일리 어게인",
          director: "라세 할스트롬",
          year: '2018-11-22',
          rating: 9.42,
          runtime: 100,
          summary: "귀여운 소년 ‘이든’의 단짝 반려견 ‘베일리’는 행복한 생을 마감한다. 하지만 눈을 떠보니 다시 시작된 견생 2회차, 아니 3회차?! 1등 경찰견 ‘엘리’에서 찰떡같이 마음을 알아주는 소울메이트 ‘티노’까지! 다시 태어날 때마다 성별과 생김새, 직업(?)에 이름도 바뀌지만, 여전히 영혼만은 사랑 충만! 애교 충만! 주인바라기 ‘베일리’ 어느덧 견생 4회차, 방랑견이 되어 떠돌던 ‘베일리’는 마침내 자신이 돌아온 진짜 이유를 깨닫고 어딘가로 달려가기 시작하는데…",
          genres: "드라마;모험;코미디",
          image: "http://t1.daumcdn.net/movie/8d45d7a8cc2540d69f21fdf4d01dccb41540948817992",
          category: "눈물",
          detail: "동물;교감",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=144906",
          type: "movie"
        },
        {
          id: 286,
          title: "오직 그대만",
          director: "송일곤",
          year: '2011-10-20',
          rating: 9.14,
          runtime: 105,
          summary: "지켜주고 싶습니다. 그 여자... 보고 싶습니다. 그 남자… 잘나가던 복서였지만 어두운 상처 때문에 마음을 굳게 닫아버린 철민. 시력을 잃어가고 있지만, 늘 밝고 씩씩한 정화. 좁은 주차박스에서 외로운 시간을 보내고 있던 철민에게 꽃 같은 그녀, 정화가 나타났다. 나보다 나를 더 사랑해주는 사람. 두 눈을 감으면 선명해지는 그 얼굴, 오직 그대만.",
          genres: "멜로;로맨스",
          image: "http://t1.daumcdn.net/cfile/15533D3C4E7933521B",
          category: "눈물",
          detail: "사랑;",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=82219",
          type: "movie"
        },
        {
          id: 287,
          title: "친정엄마",
          director: "유성엽",
          year: '2010-4-22',
          rating: 9.25,
          runtime: 108,
          summary: "세상 모든 엄마들이 아들 자식부터 챙길 때, 홀로 딸 예찬론을 펼친 우리 엄마. 마음은 고맙지만 바쁘게 일하는데 그냥 전화하고, 보고 싶다 찾아오고, 별 이유 없이 귀찮게 구는 엄마가 답답하게 느껴졌다. 나도 결혼 5년 차에 딸까지 둔 초보 맘인데 엄마 눈에는 아직도 품 안의 자식으로만 보이는 모양이다. 만날 때마다 티격태격 하고 말았지만 이제 나도 그녀에게 사랑하는 마음을 보여줘야 할 때가 온 거 같다. 어린 시절부터 말도 잘하고 똑 부러지던 우리 딸, 지숙이. 공부만 잘하는 게 아니라 미스코리아 뺨치는 외모까지 무식하고 촌스러운 내 속에서 어떻게 이런 예쁜 새끼가 나왔을까 싶다. 혼자 서울 가서 대학 다니며 밥은 잘 챙겨 먹는지 걱정이 태산이지만… 일해서 번 돈으로 용돈도 보내주고, 결혼한다고 남자도 데려오고, 벌써 애기 엄마까지 되었다. 품 안의 자식 같았던 우리 딸이 이제 내 품에서 떠나려나 보다. 가을이 깊어지는 어느 날, 지숙은 연락도 없이 친정 집으로 내려와 미뤄왔던 효녀 노릇을 시작하고… 반갑기는 하지만 예전 같지 않은 딸의 행동에 엄마는 왠지 모를 불안감을 느끼는데…",
          genres: "드라마",
          image: "http://t1.daumcdn.net/cfile/17769B184B9E8C8525",
          category: "눈물",
          detail: "모성애",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=71932",
          type: "movie"
        },
        {
          id: 288,
          title: "이터널 선샤인",
          director: "미셸 공드리",
          year: '2005-11-10',
          rating: 9.26,
          runtime: 107,
          summary: "조엘은 아픈 기억만을 지워준다는 라쿠나사를 찾아가 헤어진 연인 클레멘타인의 기억을 지우기로 결심한다. 기억이 사라져 갈수록 조엘은 사랑이 시작되던 순간, 행복한 기억들, 가슴 속에 각인된 추억들을 지우기 싫어지기만 하는데... 당신을 지우면 이 아픔도 사라질까요? 사랑은 그렇게 다시 기억된다.",
          genres: "멜로;로맨스",
          image: "http://t1.daumcdn.net/movie/3d932b733259cd5fd31c35238793d823effb2856",
          category: "눈물",
          detail: "기억;추억",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=38444",
          type: "movie"
        },
        {
          id: 289,
          title: "혐오스런 마츠코의 일생",
          director: "나카시마 테츠야",
          year: '2007-4-12',
          rating: 9.14,
          runtime: 129,
          summary: "조엘은 아픈 기억만을 지워준다는 라쿠나사를 찾아가 헤어진 연인 클레멘타인의 기억을 지우기로 결심한다. 기억이 사라져 갈수록 조엘은 사랑이 시작되던 순간, 행복한 기억들, 가슴 속에 각인된 추억들을 지우기 싫어지기만 하는데... 당신을 지우면 이 아픔도 사라질까요? 사랑은 그렇게 다시 기억된다.",
          genres: "멜로;로맨스",
          image: "http://t1.daumcdn.net/cfile/116F1B10AB49E66EA5",
          category: "눈물",
          detail: "애정결핍",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=58333",
          type: "movie"
        },
        {
          id: 290,
          title: "노트북",
          director: "닉 카사베츠",
          year: '2004-11-26',
          rating: 9.48,
          runtime: 123,
          summary: "17살, ‘노아’는 밝고 순수한 ‘앨리’를 보고 첫눈에 반한다. 빠른 속도로 서로에게 빠져드는 둘. 그러나 이들 앞에 놓인 장벽에 막혀 이별하게 된다. 24살, ‘앨리’는 우연히 신문에서 ‘노아’의 소식을 접하고 잊을 수 없는 첫사랑 앞에서 다시 한 번 선택의 기로에 서게 되는데… 열일곱의 설렘, 스물넷의 아픈 기억, 그리고 마지막까지… 한 사람을 지극히 사랑했으니 내 인생은 성공한 인생입니다",
          genres: "드라마;멜로;로맨스",
          image: "https://t1.daumcdn.net/movie/a6c1c741b14f0914b85b170c38b405c1c16d4061",
          category: "눈물",
          detail: "첫사랑",
          link: "https://movie.naver.com/movie/bi/mi/basic.naver?code=38899",
          type: "movie"
        },

    //================================================================================================================================
    //================================================================================================================================

        {
          id: 301,
          title: "그릿",
          director: "앤절라 더크워스",
          year: '2019-2-20',
          rating: 8.75,
          summary: `성공의 정의는 ‘끝까지 해내는 것’이다!
          평균보다 떨어지는 IQ, 특별할 것 없는 재능, 불우한 가정환경에도 놀라운 성공을 일궈낸 사람들은 어떻게 그 모든 불리함을 극복하고 최고의 자리에 오를 수 있었을까? 반면, 일류대를 나온 부모, 천재적인 재능 등 성공할 수 있는 모든 조건을 갖춘 것 같아 보이는 사람들이 그저 그런 성취에 머물고 마는 까닭은 무엇일까? 펜실베이니아 대학교의 선구적인 심리학자 앤절라 더크워스는 성공을 추구하는 사람들의 필독서인 『그릿(GRIT)』에서 성공의 비결은 재능이 아니라 그녀가 ‘그릿’이라고 부르는 열정과 끈기의 조합에 있음을 보여준다.
          100쇄 기념 특별판으로 출간된 이번 책은 고급스러운 블랙 커버에 금박을 가미해 소장 가치를 높였다. ‘그릿’은 자신이 성취하고자 하는 목표를 끝까지 해내는 힘이자, 어려움, 역경, 슬럼프가 있더라도 그 목표를 향해 오랫동안 꾸준히 정진할 수 있는 능력이다. 저자는 미국 육군사관학교에 가서 어떤 사관생도가 훈련을 끝까지 받고 어떤 생도가 중도 탈락을 하는지, 문제아들만 있는 학교에 배정된 초임 교사들 중 누가 끝까지 포기하지 않고 아이들을 가르치고 성과를 이끌어내는지 연구했다.
          누구나 중요하다고 생각만 할 뿐, 그것이 성공에 있어서 어떻게 작용하는지 알지 못했던 ‘그릿의 힘’을 저자는 10년에 걸친 연구 결과와 실증 사례들, 각계각층의 사람들과의 인터뷰를 통해 생생하게 보여준다. 책은 그릿이 무엇이며 그것이 왜 중요한지를 다룬 1부, 그릿을 스스로 발달시키기 위한 방법론을 제시하는 2부, 마지막으로 성장기에 있는 아이들에게 어떻게 그릿을 키워줄 것인지 알려주는 3부로 구성돼 있다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/633/x9791162540633.jpg",
                category: "동기부여",
                detail: "노력;열정;can",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=14524825",
                type: "book"
            },
            {
                id: 302,
                title: "아주 작은 습관의 힘",
                director: "제임스 클리어",
                year: '2019-2-26',
                rating: 9.02,
                summary: `더 이상 아무것도 할 수 없을 것 같았던 때 조금씩 시도한 아주 작은 일들이 삶을 바꿨다!
          단계적이고 체계적인 자기계발 방법을 찾는 사람들을 위한 『아주 작은 습관의 힘』. 고교 시절 촉망받는 야구선수였던 저자는 연습 중 동료의 야구 배트에 얼굴을 정통으로 강타당하는 큰 사고를 당했고, 걸을 수조차 없었던 저자는 절망에 빠지는 대신 지금 당장 할 수 있는 아주 작은 일이라도 찾아 그것을 반복하자고 마음먹었다. 그 후 매일 걷기 연습을 해서 6개월 만에 운동을 할 수 있게 되었고, 6년 후에는 대학 최고 남자 선수가 되었다.
          그 후 자신을 인생의 나락에서 구해준 아주 작은 습관의 힘을 전 세계에 알리는 최고의 자기계발 전문가가 된 저자는 이 책에서 자신의 생생한 경험과 생물학, 뇌과학, 심리학의 최신 연구 결과를 집약해서 습관 하나로 인생을 변화시킬 수 있는 노하우를 제시한다. 저자는 더 나은 습관을 세우는 계획에 대해 단계별로 소개한다. 습관을 만들기 위해서는 결심이 분명해야 하고(제1법칙), 매력적이어야 하며(제2법칙), 쉬워야 하고(제3법칙), 만족스러워 하는데(제4법칙), 이 네 가지 법칙을 바탕으로 어떻게 하면 빠르고, 효율적이고, 확실하게 변화할 수 있는지 알려준다.
          금연, 다이어트에서부터 비즈니스에서 탁월한 성과를 이뤄내기까지 누구나 쉽게 이해하고 적용할 수 있는 방식으로 습관을 세우고 삶을 변화시키는 과학적인 방법을 설명한다. 저자는 사소하고 별것 아닌 일이라도 몇 년 동안 꾸준히 해나가면 정말로 놀랄 만한 결과가 나타난다고 이야기하며 이 책에서 제안하는 방법으로 매일 조금씩 좋은 습관을 만든다면 무엇을 결심하든 원하는 것을 얻을 수 있다는 용기와 희망을 전한다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/640/x9791162540640.jpg",
                category: "동기부여",
                detail: "노력;자신과싸움;습관",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=14531783",
                type: "book"
            },
            {
                id: 303,
                title: "럭키",
                director: "김도윤",
                year: '2021-8-25',
                rating: 9.81,
                summary: `"왜 내가 만난 모든 성공한 사람은 스스로 운이 좋았다고 말할까?” 소득 상위 1% 김작가가 밝히는 운과 성공의 모든 것
          10년 동안 성공한 인물 1,000명과 인터뷰를 해온 김작가. 그는 사람들을 만날 때마다 성공 비결을 물었는데, 신기하게도 그때마다 한 가지 공통된 대답이 돌아왔다. “운이 좋았어요.” 처음에는 그저 인사치레나 겸손의 말 정도로 생각했지만 인생에 대해 조금씩 더 알아갈수록 그 말의 이면에 성공에 관한 모든 비밀이 숨어 있음을 알게 되었다. 결국 모든 것이 남보다 늦었던 그였지만, 그 비밀에 조금씩 눈뜨기 시작하면서 자신이 하고자 하는 일에 엄청난 가속도가 붙기 시작했다. 그가 찾은 운을 만드는 일곱 가지 열쇠는 사람, 관찰, 속도, 루틴, 복기, 긍정, 시도다. 이 일곱 가지 열쇠가 당신이 인생에서 만나는 수많은 난관의 문을 활짝 열어줄 것이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/027/x9791191891027.jpg",
                category: "동기부여",
                detail: "노력;성공;can",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20870199",
                type: "book"
            },
            {
                id: 304,
                title: "5분 동기부여",
                director: "에릭 카플란",
                year: '2013-4-1',
                rating: 8.17,
                summary: `하루에 단 5분만 투자하면 당신의 인생이 바뀐다!
          나를 변화시키는 힘『5분 동기부여』. 평범한 가정에서 태어나 뉴저지의 거친 길거리를 지나 월스트리트로 진출하였으며, 현재 뉴트리 시스템이라는 유명 다이어트 식품 회사를 운영하고 있는 저자 에릭 카플란이 자신의 경험을 바탕으로 ‘5분 동기부여’로 성공과 건강, 행복에 이르는 방법들을 제시하였다.
          ‘5분 동기부여’는 우리가 보통 취하는 5분의 휴식시간을 동기를 부여하는 시간으로 바꿈으로써 엔돌핀을 계속 활성화시키는 것을 목표로 한다. 단 5분만 투자하여 스스로 마음속에 내재된 능력을 발휘해 성공으로 향하는데 도움을 줄 원칙들과 성공의 열쇠를 가르쳐줄 동기부여 기술들을 소개한다. 각 성공비법은 아이디어, 기법, 동기를 부여하는 이야기들로 구성하여, 개인들의 경험에서 비롯된 성공 비법을 고스란히 담아냈다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/121/x9788970802121.jpg",
                category: "동기부여",
                detail: "노력;습관;can",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=7181670",
                type: "book"
            },
            {
                id: 305,
                title: "김미경의 드림 온",
                director: "김미경",
                year: '2013-1-11',
                rating: 8.28,
                summary: `2013년, 당신의 꿈에 스위치를 켜라!
          김미경 원장이 알려주는 꿈의 연금술, 드림 온!
          유사 이래 가장 많은 사람들이 꿈을 말하고 꿈 언저리에서 얼쩡거리는 대한민국. 20대 때는 꿈이 없는 게 당연하고, 30대가 되어야 비로소 꿈 앞에서 방황하는 우리에게, 과연 꿈이란 무엇일까? 한때 자기계발서의 달콤한 구호에 속아 꿈에 설?던 적도 있으나, 이제 단물 빠진 껌처럼 씁쓸해진 꿈, 도대체 왜 이렇게 된 걸까? tvN ‘스타특강쇼’ 역대 최고 시청률을 기록한 대한민국 국민강사, 김미경 원장의 새 책 『김미경의 드림 온』이 그 모든 궁금증과 불안을 해소하고 명쾌한 해답을 제시한다.
          이 책에서 김미경 원장은 “꿈은 성공이 아니라 성찰의 언어이고, 성취가 아니라 성장의 언어다.”라고 선언한다. 꿈은 방향성이고, 테크닉이며, 기술이고, 공식이어서 법칙대로 이루어진다는 것. 그러므로 지금 당장 4가지 드림리소스로 꿈을 만들고, 7가지 법칙으로 꿈의 스위치를 켜라는 것이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/200/x9788965701200.jpg",
                category: "동기부여",
                detail: "노력;불안해소;can",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=7097074",
                type: "book"
            },
            {
                id: 306,
                title: "7번 읽기 공부법",
                director: "야마구치 마유",
                year: '2015-3-26',
                rating: 7.0,
                summary: `누구나 할 수 있는 ‘7번 읽기 공부법!’
          도쿄대를 수석으로 졸업하고, 재학 중에 사법시험과 1급 공무원 시험에 합격한 사람이 있다. 일류대도 모자라서 바늘구멍 같은 공무원시험까지 단번에 합격해버린 그녀의 공부 비법은 무엇일까. 『7번 읽기 공부법』은 어려서부터 공부에 흥미가 없었고 머리도 특별히 좋지 않았다고 밝힌 평범한 그녀가 일본 최고의 ‘공부의 신’이 되기까지 자신이 터득한 기적의 공부법을 들려준다.     
          저자가 제시하는 공부법은 책을 7번 읽는 것이다. 어떤 분야의 어떤 책이든지 가볍게 7번 통독하면 외우려고 애쓰지 않아도 책 한권의 내용이 머릿속에 들어온다고 한다. 책에서는 7번 읽기 공부법의 학습 원리와 읽기 단계별 구체적인 방법을 알려주고, 저자가 직접 검증한 합격의 노하우도 함께 제시하고 있다. 단순히 책을 읽는 것이므로 공부의 때를 놓친 성인들도 쉽게 따라할 수 있다. 처음에 가볍게 읽을 때 흐릿했던 기억은 읽는 횟수를 거듭할수록 내 것이 되어 뚜렷하게 뇌에 각인될 것이다.     
          공부는 그 자체가 목적이 아닌 철저한 수단이 되어야 한다. 최소한의 시간으로 좋은 성적을 내고 목표로 하는 시험에 합격하기 위해 자신만의 공부법을 확립하면 빛나는 성과를 낼 수 있을 것이다. 저자는 자신이 성과를 이뤄낸 공부 노하우를 공개하면서 그 과정 속에서 깨달은 공부의 힘, 흔들리지 않고 끝까지 공부할 수 있었던 마인드 컨트롤 방법도 함께 전하고 있다. 이를 통해 목표를 향한 철저한 자기관리를 보여주고, 독자들에게 확실한 동기부여를 제공하고 있다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/007/x9788960868007.jpg",
                category: "동기부여",
                detail: "노력;자신과싸움;can",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=8889749",
                type: "book"
            },
            {
                id: 307,
                title: "나는 할 수 있어",
                director: "루이스 L. 헤이",
                year: '2018-10-20',
                rating: 10.0,
                summary: `삶을 크게 변화시키는 긍정 확언 사용법
          생각과 마음 그리고 말은 어떻게 우리를 바꾸는가
          전 세계 5천만 부 베스트셀러 작가 루이스 L. 헤이의 성공 주문
          성공하고 싶으면 ‘성공하는 생각’을 하라
          즐겁게 살고 싶으면 ‘즐거운 생각’을 하라
          사랑하고 싶으면 ‘사랑하는 생각’을 하라
          그리고 이 모든 것을 입으로 소리 내어 말하라
          세계적인 베스트셀러 작가이자 심리 치료 전문가이자 루이스 L. 헤이는 이 책 ?나는 할 수 있어(I CAN DO IT)?를 통해 행복한 삶으로 이끌어 주는 긍정 확언 사용법을 설명한다. 자신의 생각을 긍정적인 방향으로 바꾼다면 이 세상에 못할 것이 없으며, ‘자기 확언’을 통해 누구나 변화할 수 있다는 것이다. 1장부터 8장까지 건강, 용서, 풍요로움, 창조성, 관계와 사랑, 직업에서의 성공, 스트레스 없는 삶, 자존감 등 우리가 삶에서 부딪치는 여러 주제들에서 긍정의 힘을 찾기 위한 조언들을 들려준다. (※본문의 내용을 저자의 육성으로 직접 담은 오디오 파일은 출판사 홈페이지에서 내려 받을 수 있다.)
          이 책에서 말하는 ‘자기 확언’은 자신이 원하는 것을 생각하고 말로 표현함으로써 이루어내는 것이다. 저자는 우리가 일상생활에서 생각하거나 말로 표현하는 것들 가운데 많은 부분이 꽤 부정적이며, 이는 좋은 경험을 가져다주지 못한다고 말한다. 따라서 부정적인 생각과 말을 긍정적으로 바꾸는 훈련을 꾸준히 한다면 우리의 삶을 완전히 변화시킬 수 있을 것이다.`,
                genres: "건강",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/999/x9788990517999.jpg",
                category: "동기부여",
                detail: "노력;자신과싸움;습관",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=14102049",
                type: "book"
            },
            {
                id: 308,
                title: "청소부 밥",
                director: "레이 힐버트, 토드 홉킨스",
                year: '2006-11-15',
                rating: 8.46,
                summary: `나이 든 청소부가 젊은 CEO에게 들려주는 인생의 진정한 행복과 지혜!
          젊은 나이에 CEO가 된 로저. 겉으로 보기엔 행복할 것 같지만 회사는 경영 위기에 처해있고, 아내와 아이들과 함께 할 시간조차 없어 불행하다. 이런 그의 앞에 청소부 밥이 나타난다. 밥은 로저와 친구가 되고, 직장생활과 가정생활 모두를 조화롭게 이끄는 삶으로 로저를 안내한다.
          『청소부 밥』은 오로지 성공을 위해 앞만 보고 달리다 지쳐버린 현대인들에게 진정한 삶의 행복, 또 인생에서 정말 소중한 것이 무엇인지를 생각할 기회를 선사한다. 많은 자기계발서들이 '지금 당장 바뀌지 않으면 미래는 없다'고 강요하는 것과 달리 '성공은 삶의 본질이 아니다'라는 기본 바탕아래 일상의 작은 일, 흥미로운 경험담을 부담 없이 보여준다.
          그래서 지금 자신이 행복한가를 되돌아볼 기회를 제공하며, 서두를 필요가 없다는 진리를 알려준다. 우리 주위에는 청소부 밥처럼 따로 시간을 내서 행복에 대해 들려줄 만큼 한가한 이도, 그럴 만큼 경험이 많은 이도, 지혜가 많은 이가 많지 않다. 이런 현실에서 재미있는 소설로 구성된 이 책은 읽는 시간이 짧은 것에 비해 큰 깨달음을 안겨준다.`,
                genres: "성공학",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/977/x9788989313977.jpg",
                category: "동기부여",
                detail: "극복;불안해소;습관",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=2538210",
                type: "book"
            },
            {
                id: 309,
                title: "백만장자 메신저",
                director: "브렌든 버처드",
                year: '2018-4-27',
                rating: 8.2,
                summary: `“ 왜 이 책은 중고서점에서 수십 만 원에 거래됐을까? ”
          이 책은 ‘누구나’ 1인 기업가로 성공할 수 있음을
          그야말로 완벽하게 보여주었다!
          입소문으로 퍼져나가 1인 기업가들의 경전으로 자리잡은 바로 그 책
          ★ 아마존 1위! 반스앤노블 1위! 뉴욕타임스 1위! ★
          ★ 미국, 프랑스, 일본, 이탈리아, 브라질 등 12개국 출간! ★
          ★ 전 세계 밀리언셀러『골든 티켓』실전편! ★
          중고서점 대란을 일으킨 『메신저가 되라』가 『백만장자 메신저』라는 제목으로 출간되었다. 이 책은 제목 그대로 ‘백만장자 메신저’가 되는 법이다. 자신의 ‘경험과 지식’을 ‘메시지’로 만들어 다른 사람을 도우면서 돈을 버는 1인 기업가의 세계로 안내한다. 세 아이를 키운 엄마는 초등학교 입학 상담사가 되고, 자동차 좋아하는 누군가는 중고차 컨설턴트가 된다. 책 좋아하는 동료는 기업교육 전문 북큐레이터가 되고, 퇴사한 금융회사 직원은 개인 자산관리사로 돈을 번다. 시간제 노동자가 아닌 일의 ‘가치’에 따라 돈을 벌기에 ‘돈과 행복과 자유’가 있는 새로운 인생을 살 수 있다.
          브렌드 버처드는 말한다. “조직에 몸담지 않아도 된다. 대단히 뛰어나지 않아도 된다. 모든 것을 잘할 필요도 없다. 하찮게 생각했던 당신의 경험, 당신의 이야기, 당신의 메시지는 수많은 사람들이 목말라하는 가치다. 당신의 이야기는 당신이 생각하는 것보다 훨씬 더 어마어마한 가치를 갖고 있다. 당신은 수백 만 명의 사람들에게 메시지를 전달할 수 있고, 그 대가로 수백만 달러를 벌 수 있다. 나 자신이 이를 증명해왔고, 내가 가르친 사람들도 그러했다.”
          이 책은 자신의 경험과 가치를 사업화하고자 하는 이들을 성공한 1인 사업가로 만드는 가장 강력한 동기부여서이자 실전서이자 창업가이드이자 마케팅전략서가 될 것이다.
          `,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/660/x9788901222660.jpg",
                category: "동기부여",
                detail: "노력;성공;습관",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=13552779",
                type: "book"
            },
            {
                id: 310,
                title: "문장 수집 생활",
                director: "이유미",
                year: '2018-4-30',
                rating: 9.13,
                summary: `새로운 카피로 재탄생한 소설 속 문장들!
          독서와 글쓰기에 대한 에세이이자 카피라이팅 노하우를 집약한 실용서 『문장 수집 생활』. 소설 읽기가 취미이고, 소설로 카피 쓰기가 특기인 29CM의 총괄 카피라이터 이유미가 편애하는 50편의 소설이 50개의 카피로 새롭게 바뀌는 과정과 함께 사적인 독서 습관과 창의적 필사 방법, 일상적 에세이를 쓰는 법 등을 소개하는 책이다.
          요즘 뜨는 유행어나 튀는 신조어는 최대한 지양하고 보는 카피가 아닌 읽는 카피를 추구하는 저자가 카피를 쓰는 원칙은 ‘다름’이다. 그 기본 바탕은 공감이다. 너무나 사소해서 쉽게 지나쳤을, 그러나 누구나 한 번쯤 겪어봤을 공감의 순간을 포착한 글들은 소비자의 이목을 끌기에도 충분했다.
          이처럼 내 얘기 같으면서도 뭔가 남다른 시선이 담긴 글, 공감되지만 흔하지 않게 써내려간 글을 선보이는 저자의 다르게 보고, 다르게 쓰고, 다르게 사는 법을 만나볼 수 있다. 부록으로 실린 ‘WRITING GUIDE : 29CM 카피라이터의 뭔가 다른 카피의 기술’은 책을 뒤집으면 처음부터 읽을 수 있도록 구성했다. 카피 쓰기 막막할 때 먼저 체크할 것, 상투적인 카피를 쓰지 않는 법, 급할 때 유용한 목차 활용법, 잘못 쓰기 쉬운 문법 등 실용적인 팁들을 만나볼 수 있다.
          `,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/435/x9788950974435.jpg",
                category: "동기부여",
                detail: "노력;can;학습",
                link: "hhttps://book.naver.com/bookdb/book_detail.naver?bid=13550071",
                type: "book"
            },
            {
                id: 311,
                title: "서툰 감정",
                director: "일자 샌드",
                year: '2017-7-18',
                rating: 7.67,
                summary: `우리는 왜 이토록
          감정에 서툰 사람들이 되었을까?
          “세상에 나쁜 감정은 없다, 서툰 감정만 있을 뿐!”
          전 세계 19개국에서 쏟아진 찬사
          『센서티브』저자 일자 샌드의 날카로운 통찰
          민감함에 대한 전혀 새로운 정의로 국내는 물론 19개국에서 찬사를 받은 『센서티브』의 저자 일자 샌드가 전 세계 독자들의 마음을 흔들 두 번째 책으로 돌아왔다. 인간의 내밀한 감정을 세밀하게 들여다보고 어루만지는 그녀는 이번 책에서도 우리가 미처 주목하지 못했던 숨은 감정들에 귀를 기울인다. 분노는 현실에 대한 오해에서 비롯되며, 질투는 행복에 대한 갈망에서 온다. 슬픔은 도움을 요청하는 구원의 메시지이고, 불안은 위험한 것이 존재한다는 경고일 수도 어떤 것이 내게 큰 의미가 있으니 그쪽을 향해 움직여야 한다는 신호일 수도 있다. 『서툰 감정』은 겉으로 드러난 감정이 전부라는 믿음을 완전히 뒤엎는다. 당신이 지금 느끼는 감정은 진짜가 아닐 수 있다는 경고를 주는 동시에 감정에 대한 기존의 인식을 환기한다.
          우리는 어째서 자신의 감정에조차 솔직하지 못한 사람이 돼버린 걸까. 세상은 직업, 결혼, 육아, 인간관계 등 모든 면에서 완벽을 요구한다. 하지만 감정은 노력과 의지로 바꿀 수 없다. 그저 모든 감정에는 이유가 있으며, 있는 그대로를 느끼고, 받아들이고, 표현할 수 있을 뿐이다. 그렇기 때문에 우리 모두는 감정에 서툴 수밖에 없다. 이 책은 자신의 감정을 더 깊고 풍부하게 이해하기 원하는 사람들을 위한 책이다. 감정을 이해하고, 해석하고, 반응하는 데 어려움을 겪었다면 이 책을 읽고 난 후 자신의 감정을 온전히 수용하고, 긍정적 감정으로 전환하는 방법을 찾게 될 것이다.
          `,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/529/x9791130613529.jpg",
                category: "동기부여",
                detail: "노력;극복;불안해소",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=12236132",
                type: "book"
            },
            {
                id: 312,
                title: "리더의 그릇",
                director: "나카지마 다카시",
                year: '2016-2-29',
                rating: 8.58,
                summary: `500년 전에 쓰인 명나라의 고전 《신음어》를 재해석하다!
          『리더의 그릇』은 경영컨설턴트로 활동하며 3만 명의 기업가와 만나 얻은 자신의 경험과 명나라 최고의 정치가 여곤의 《신음어》를 접목하여 현대에 맞게 재해석한 책이다. 이 책은 장기화 되고 있는 불황과 한 치 앞도 내다볼 수 없는 시대에 자기 성찰과 타인을 다스리는 지혜를 얻고자 하는 리더들에게 좋은 길잡이를 제시할 것이다.   
          명나라 말기의 정치가 여곤은 명문가 출신으로 서른다섯의 젊은 나이에 과거에 합격하고 관직을 지낼 만큼 비범한 인물이었다. 그러나 주변 관료들의 중상모략과 타락한 관료들의 행실에 개탄하며 관직을 버리고 은둔 생활을 하게 된다. 그리고 공직생활에서 느낀 바와 깨달음을 바탕으로 리더의 참된 자세와 마음가짐을 글로 써내려갔다. 30년이라는 긴 세월에 걸쳐 완성된 이것이 바로 《신음어》이다. 《신음어》에는 자기 자신을 수양하고 타인을 다스리는 비결 1976개의 문장이 수록되어 있다. 또한 인간이란 과연 어떤 존재인지를 다각도로 고민하며 여곤의 사상적 깊이를 보여준다.   
          우리는 흔히 사람의 됨됨이와 가능성의 크기를 ‘그릇’에 비유한다. 그리고 이런 표현에는 그릇은 모름지기 커야 한다는 고정관념이 내포되어 있다. 그러나 그릇은 채우는 것이 능사가 아니라 오히려 비울 때를 알아야 한다고 강조한다. 덕이란 얼마나 많이 버릴 수 있음을 아는 것이지만 단순히 이익에 대한 욕심을 버리는 게 아니라 자신을 버리는 것이 진정한 고수라고 말하고 있다. 책을 통해 3만 명의 기업가를 만나 얻은 비움의 힘을 살펴볼 수 있을 것이다. 더불어, 진정한 리더는 자신을 버리고 다른 사람의 능력을 활용할 줄 알아야 한다. 그러기 위해서는 사람마다 갖고 있는 고유의 색깔, 즉 적성을 발견해야 하는데, 훌륭한 리더는 이를 잘 포착하고 사람을 적재적소에 쓸 줄 아는 사람일 것이다.`,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/399/x9791130607399.jpg",
                category: "동기부여",
                detail: "노력;극복;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=10279350",
                type: "book"
            },
            {
                id: 313,
                title: "미러",
                director: "루이스 L.헤이",
                year: '2019-12-24',
                rating: 9.57,
                summary: `“거울 속 나에게 말을 거는 순간 삶은 바뀌기 시작한다.”전 세계 5천만 독자들의 삶을 바꾼 루이스 헤이 신작이 출간됐다. 미국의 대표적인 심리치료 전문가인 저자는 〈미러〉에서 거울 속 나에게 말을 거는 것만으로 자신을 위로하고 사랑하게 된다고 말한다. 거울 속 나에게 긍정적 암시를 반복하여 나를 위로하고 사랑하게 만드는 미러 워크mirror work는 저자 자신이 30년 이상 실천해왔고, 수많은 독자가 자신의 인생이 바뀌었다며 찬사를 보내고 있다. 거울이 주는 효과에 대해 저자는 암시로 설명한다. 저자는 우리가 하는 모든 말과 생각은 하나의 암시라고 주장한다. 긍정적인 암시는 자신감과 자존감을 북돋고 마음의 평화와 내면의 기쁨을 주어 상처를 치유한다. 그중에서 가장 강력한 암시는 거울 속 내 눈을 보면서 말하는 것이다. 거울을 통해 자신에게 긍정적 메시지를 반복함으로써 내면의 비판자를 잠재우고 자신을 위로하고 사랑하는 방법을 깨닫게 된다. 저자는 지금 당신의 삶이 뜻대로 풀리지 않는다면 우선 자신과의 관계부터 회복해야 한다고 조언한다. 당신이 자신을 사랑하지 않는데 누가 당신과 함께하고 싶어 하겠는가? 관계 회복을 위해 무엇보다 먼저 '당신 자신을 사랑하라'고 말한다. 모든 상처를 치유하는 방법은 바로 자신을 사랑하는 것임을 잊지 말아야 한다. 긍정적 암시를 반복하는 미러워크는 나를 사랑하게 만드는 데 가장 효과적인 방법이다.지금껏 거울 속 자신에게 한 번도 말을 걸어보지 않은 사람이라면, 거울 속 당신에게 '사랑해' 하고 말해보라. 당신의 삶을 변화시킬 수 있는 마법의 시간으로 들어가 보라. 발을 내딛는 데 1초도 걸리지 않는다.책에는 거울 속 자신에게 건네는 긍정적 암시의 구체적인 방법 외에도, 어긋난 관계를 회복하는 법, 과거의 상처를 떠나보내는 방법, 분노를 푸는 방법, 두려움을 극복하는 법 등을 자세히 소개한다.이 책은 당신이 자신에게 줄 수 있는 최고의 선물이 될 것이다. 그리고 자존감을 키워야 하는 아이들이나, 자기부정이 가득한 청소년에게도 자신을 사랑하는 방법을 깨닫게 해주는 지침서가 될 것이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/176/x9791190356176.jpg",
                category: "동기부여",
                detail: "노력;극복;불안해소",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=15916018",
                type: "book"
            },
            {
                id: 314,
                title: "당신의 꿈은 안녕하신가요?",
                director: "제준",
                year: '2019-8-15',
                rating: 9.43,
                summary: `“어른다운 어른이 되고자, 마음의 소리에 귀 기울이며 용기 있게 세상의 편견과 맞선 열여덟, 제준 작가의 힙한 어른 입문기! 『당신의 꿈은 안녕하신가요?』 열여덟, 누구나 한 번쯤 대한민국 교육 현실에 의문을 가졌을 나이이다. 저자는 이해할 수 없는 현실에 순응하지 않고 당당히 도전장을 내밀었다. 오전 9시, 평범한 고등학생이라면 바쁘게 첫 교시를 준비하고 있을 시각. 저자는 글을 쓰기 위해 도서관이나 카페로 향한다. 가끔 머리가 복잡하고 글이 막히는 날엔 큰맘 먹고 바다가 보이는 카페로. “오늘 재밌는 하루를 보냈나요?” 무사히 하루를 마무리하기도 벅찬 우리에게 누군가 이렇게 묻는다면, 우리는 어떤 대답을 할까? 이 책은 재미있는 인생을 살기 위해, 하고 싶은 일을 하기 위해 과감히 학교를 떠난 열여덟 작가의 유쾌하고 힙한 일상 이야기이다. 솔직하고 대범한 글이 기억 저편에 숨은 꿈에게 안부를 묻는 계기가 되고 우리의 하루에 소소한 재미를 더해 주리라 생각한다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/041/x9791190067041.jpg",
                category: "동기부여",
                detail: "노력;도전;can",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=15202467",
                type: "book"
            },
            {
                id: 315,
                title: "린치핀",
                director: "세스 고딘",
                year: '2019-12-28',
                rating: 8.25,
                summary: `“거대한 기계 속 톱니바퀴처럼 쉽게 대체되는 인재로 살아갈 것인가? 작지만 강한 예술가적 인재로 거듭날 것인가?
          노동과 임금을 맞바꾸는 데 머물지 않고, 자신의 넘치는 예술적 재능을 세상에 기부하며, 세상에 공헌할 수 있는, 세상 모든 크리에이터들이 탐내는, 새로운 시대의 새로운 권력을 가진 린치핀으로 거듭나기 위한 조언들을 담은 『린치핀』. 모든 인간에게 감춰진 예술가적 기질을 깨우는 이 책에서 저자는 기존의 시스템이 우리가 각자의 예술적 잠재력을 잊은 채 스스로를 단순히 돈을 버는 기계 속 톱니바퀴로 전락시켰다고 이야기하면서 누구도 대체할 수 없는 존재, 누구도 모방할 수 없는 존재, 누구도 싫어할 수 없는 존재, 린치핀으로 거듭나기 위한 조언들을 들려준다.
          저자는 이 책에서 자신들의 기업에 불만을 갖는 고객을 팬을 돌리는 능력, 새로운 사업 모델을 통해 시장에 혁명을 일으키는 아이디어, 매뉴얼에 나오지 않은 가치를 창출해 고객들에게 제공하는 창조성처럼 린치핀이 갖춰야 할 예술가적 기질에 대한 통찰력 넘치는 이야기를 들려준다. 무엇이 나를 평범한 사람으로 머물게 했는지 돌아봄으로써, 매뉴얼에 의지해 감춰왔던 창조적 예술가의 기질을 되찾는 작업에 한걸음 나아가도록 이끌어준다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/998/x9791185392998.jpg",
                category: "동기부여",
                detail: "도전;길잡이;can",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=15971213",
                type: "book"
            },
            {
                id: 316,
                title: "새로운 자본주의에 도전하라",
                director: "고영, 전병길",
                year: '2009-4-1',
                rating: 9.21,
                summary: `영악한 자본주의의 참 모습을 간파한, 경제 대안 총망라!! 세계를 지배하고 있는 자본주의의 참 모습을 아는 사람이 얼마나 될까? 우리가 직접 목격하고 있듯이, 자본주의의 폐단이 심각하게 노출되면서 많은 사람들이 빈곤의 나락으로 떨어지고 있다. 적지 않은 사람들이 자본주의의 문제점들을 분석하고 대안을 제시했지만, 점점 영악해져만 가는 그 괴물을 막아내는 일이란 결코 쉬워 보이지 않는다. 이 책은 이런 문제들을 극복하고자, ‘새로운 자본주의’를 외치는 사람들을 담았다. 공정무역, 사회적 기업, 사회책임투자 등의 효시가 된 인물들은 물론 현재 그들의 가치를 이어가는 이들의 이야기를 총망라했다. 영악한 자본주의에 맞서, 이를 뒤집어 새로운 자본주의를 꾸려나가는 것이 이 책의 목적이다. - 경제위기의 시대, 새로운 자본주의를 위한 ‘이론가’와 ‘실전가’의 만남 이 책의 공저자인 전병길 씨는 공익마케팅 전문가일뿐만 아니라, 대안경제아카데미 기획자로 탁월한 이론가다. 다른 저자인 고영 씨는 외국계 기업의 컨설턴트로 변호사, 마케터, 컨설턴트 40여 명으로 구성된 ‘사회적 컨설팅 그룹(SCG)’의 대표다. ‘아름다운 가게’를 컨설팅한 현장가 고영 씨와 국내 최고 규모의 대안경제아카데미를 기획한 이론가 전병길 씨의 만남은 책의 완성도를 높였다. 기존의 대안경제를 다룬 책들이 이론위주이거나, 협소한 현장의 이야기라서 독자들에게 쉽게 다가갈 수 없었다면 이 책은 두 저자가 만나면서 그 한계가 극복된 것이 큰 성과다. 특히 이론적으로는, 한번도 시도된 적이 없는 대안경제에 대한 큰 그림이 완성됐다. 사회적 기업, 공정무역, 사회책임투자 등의 상호 간 연관성을 심도 있게 다루어 알기 쉽게 생태계로 구성했다. 현장의 모습으로는, 국내 최초로 무료 컨설팅을 해주는 전문가그룹 SCG의 전략과 비전이 대대적으로 공개됐다. 특히 일반 독자들을 새로운 자본주의로 참여시키는 마지막 챕터는 이 책의 백미다. 착한 소비를 당부하고, 소박하지만 자신의 재능을 기부하라고 보통사람들에게 말을 건다. 새로운 자본주의에로 초대인 것이다.  - 박원순과 원희룡은 이 책을 왜 추천했나? 얼핏 달라 보이는 두 사람이 공통적으로 이 책을 추천했다. 바로 희망제작소 박원순 변호사와 한나라당 원희룡 의원. 가치관은 다르지만, 분명 이 책에서 제시되는 새로운 자본주의에 희망이 있다고 느꼈기때문이다. 박 변호사는 “대안경제를 큰 틀에서 이해해야 하는 독자들에게는 더 없이 큰 선물”이라며 이 책을 추천했다. 이 책 덕분에 더 열정적으로 강의할 수 있단다. 한편 원 의원은 “사회적 기업과 대안경제에 대한 광범위한 개념을 전달해 주는 책”이라며 경제위기에 “현실적 대안을 찾고 싶어하는 이들에게 많은 도움”이 될 것이라고 평했다. 그는 이 책이 세상을 착하게 만들 것이라는 기대의 말도 잊지 않았다.`,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/012/x9788993660012.jpg",
                category: "도전",
                detail: "도전;길잡이;극복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6003345",
                type: "book"
            },
            {
                id: 317,
                title: "나는 해외에서 먹고산다",
                director: "서주형, 서대규",
                year: '2018-6-28',
                rating: 8.67,
                summary: `한국에서 태어난 평범한 이들의 미국 독일 스웨덴 네덜란드 이탈리아 호주 홍콩 싱가포르 인도네시아 취업 성공기!
          해외취업 준비부터 현지생활 적응까지 솔직하고 흥미진진한 이야기!
          『나는 해외에서 먹고산다』는 스웨덴 스톡홀름 시내의 한 커피숍에서 기획되었다. 머리를 맞댄 직장인 두 남자는 뭔가 의미 있는 일을 찾다가, 책을 내기로 결심하고 해외취업에 성공한 저자들을 선정했다.  
          이 책은 9개국 10개 도시에서 먹고사는 10명의 해외취업 경험과 노하우를 엮은 것이다.
          각 나라의 취업 준비 과정부터 현지생활 적응까지 실제 체험담을 한 권에 담았다. 다양하고 의미 있는 정보를 전하기 위해 나라와 도시, 직업군 그리고 개인의 경력 특성 등을 고려하여 다채로운 내용을 구성했다.
          대학생과 취업 준비생, 이미 국내에서 회사를 다니고 있지만 해외로 이직이나 파견을 계획 중인 이들에게 도움을 주는 책이다.
          이 책에 나오는 저자들은 모두 한국에서 태어나 국내 정규 교육을 받은 평범한 이들이다. 여느 취업 준비생들과 전혀 다르지 않다. 저자들에게 한 가지 공통된 특성이 있다면 진취적인 자세로 본인의 진로를 고민하고 도전하여, 활동 무대를 해외로 키워나갔다는 점이다.
          누구나 해외취업에 도전할 수 있고 성공할 수 있다는 점을 알리려고 책을 출판했다.
          『나는 해외에서 먹고산다』는 해외취업과 외국생활에 대한 정보를 전해줄 뿐만 아니라, 적극적이고 긍정적인 자세로 자신의 인생을 계획하고 목표를 이루도록 돕는다. 최선을 다해 준비해야 할 것들이 있다면 끝까지 실행해야 한다.
          저자들이 해외생활을 하면서 깨달은 공통점은 ‘한국인들의 경쟁력이 정말 세계적으로 탁월하다’는 것이다. 전 세계 어떤 국민보다 근면하고 성실하게 살아온 우리나라 인재들이라면 세계 어느 곳에서라도 뛰어난 경쟁력을 지닐 수 있다.
          기회는 기다리지 않고 잡는 것이며, 복권도 사야 당첨이 되듯이 인생의 모든 문은 두드려야 열린다. ‘재지 말고 저지르는 것’이 해외취업의 성공 비결인 셈이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/008/x9791189325008.jpg",
                category: "도전",
                detail: "도전;성공;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=13733324",
                type: "book"
            },
            {
                id: 318,
                title: "처칠처럼 도전하고 오바마처럼 성공하라",
                director: "조희전",
                year: '2017-10-30',
                rating: 10.0,
                summary: `『그럼에도 불구하고 다시 시작하는 용기』, 『세계 천재를 찾아서』, 『화려한 비상을 꿈꾸어라』, 『100인 100색 북 콘서트』 등을 출간한 저자 조희전이 처칠과 오바마의 삶을 통해 보는 그들의 리더십에 대한 이야기, 『처칠처럼 도전하고 오바마처럼 성공하라』를 출간했다. 이 책은 ‘리더십에 본질은 무엇일까’에 대한 궁극적인 답을 그들의 삶을 통해 제시한다. 성격과 스타일은 다를 수 있으나 누구나 리더가 될 수 있다. 오바마와 처칠처럼 자신만의 장점을 살려 자신감 있게 나아가면 된다. 이 책을 통해 처칠과 오바마의 삶을 살펴보고 나의 삶을 되짚어본다면 나에게 맞는 리더십에 대해 깨달을 수 있을 것이다.`,
                genres: "사회",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/740/x9791162220740.jpg",
                category: "도전",
                detail: "도전;성공;깨닳음",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=12758080",
                type: "book"
            },
            {
                id: 319,
                title: "히트 리프레시",
                director: "사티아 나델라",
                year: '2018-3-19',
                rating: 8.47,
                summary: `본질이라는 토대 위에 변화와 혁신을 입히다!
          한때 IT 업계의 거인으로 군림했지만 한계에 봉착해 성장이 멈췄던 마이크로소프트를 다시 열정과 새로움으로 춤추게 하며 클라우드 통합 서비스 점유율 세계 1위 기업으로 재도약하게 만든 도전적이고 패기 넘치는 CEO 사티아 나델라. 그가 들려주는 놀라운 경영전략 스토리 『히트 리프레시』.
          사원으로 입사해 22년 간 마이크로소프트에 헌신해온 인도 출신의 엔지니어 사티아 나델라는 2014년 2월, 최대의 암흑기를 보내고 있었던 마이크로소프트 역사상 세 번째 CEO로 이름을 올렸다. 주위의 우려에도 불구하고 사티아 나델라 체제 출범 이후 마이크로소프트는 모바일 클라우드 기업으로 빠르게 변모하기 시작했다.
          그는 관료화된 조직문화의 틀을 깨고 관성에 물든 조직원들을 변화시키기 위해 ‘공감’이라는 가치를 내세워 사람과 사람, 사람과 기술을 연결하여 하나의 목표에 집중하게 함으로써 플랫폼과 생산성을 제공하는 기업으로의 전환을 이루어냈다. 폐쇄적으로 운영되던 마이크로소프트를 독점과 권위라는 무거운 옷을 벗어던지고 미래를 향한 협력과 연결을 추구하는 새로운 기업으로 바꾼 그는 이 책에서 변화와 혁신을 지향하는 리더를 위해 본인의 경험에서 얻은 교훈과 조언들을 솔직하게 제시한다.
          개인의 삶을 혁신하고, 개인이 몸담은 조직을 혁신하고, 조직이 모여 있는 이 세상에 대한 혁신을 이야기하면서 궁극적으로는 혁신이 만들어낼 미래를 말한다. 40여 년 동안 세계 최고 기업의 자리를 줄곧 지켜 왔던 마이크로소프트의 장점은 그대로 살리면서 시대에 맞추어 새로운 비전과 미션을 가진 기업으로 변모하는 과정을 생생하게 보여주는 이 책에서 역사에 남을 기업, 사회가 발전하는 길을 모색하고자 하는 리더가 갖춰야 할 비전을 엿볼 수 있을 것이다.`,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/502/x9788965962502.jpg",
                category: "도전",
                detail: "도전;성공;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=13410212",
                type: "book"
            },
            {
                id: 320,
                title: "도전하는 30대, 공부하라",
                director: "와다 히데키",
                year: '2010-1-25',
                rating: 7.0,
                summary: `30대여, 지금은 공부할 때다!
          일본국제의료복지대학 교수 와다 히데키의 『도전하는 30대, 공부하라』. 30대에 대한 생각과 가치가 달라진 우리 시대에 맞는, 30대를 위한 자기계발서다. 적절한 경험과 넘치는 의욕, 그리고 노화가 덜 진행된 뇌를 지닌 30대가 공부하기에는 가장 알맞은 때임을 일깨워준다. 특히 저자가 오랫동안 만들어온 전략적인 공부법 '와다식 공부법'을 30대에 맞게 특화시켜 공개하고 있다. 비전을 분명히 한 다음, 그것을 이루기 위해 전략적으로 공부하여 조직을 움직이고 사회를 주도하는 '문제해결형 인간'이 될 수 있도록 도전한다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/242/x9788993212242.jpg",
                category: "도전",
                detail: "노력;can;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6223862",
                type: "book"
            },
            {
                id: 321,
                title: "킵고잉",
                director: "주언규",
                year: '2020-7-24',
                rating: 8.7,
                summary: `재테크 채널 중 가장 인기 있는, 80만 유튜버 신사임당이 전하는
          돈 모으는 게 처음인 사람들을 위한 경제 독립 가이드
          “부자가 될 확률을 높이고, 부자의 운을 끌어당겨라!”
          『킵고잉(KEEP GOING)』은 경제 재테크 유튜브 채널 중 가장 신뢰받는 유튜버로 잘 알려져 있는 신사임당이 돈 모으는 게 처음인 사람, 내 사업을 하고 싶은 사람들을 위해 한국에서 돈 버는, 가장 현실적인 방법 공개한 책이다. 재테크 초보자가 돈 모으는 법부터 100만 원으로 스마트스토어 시작하는 법, 인맥 없는 사람이 사업하는 법, 멘탈 흔들리지 않는 마인드 관리법까지 평범한 사람들이 부의 길로 들어설 수 있도록 재테크 방법과 철학을 전한다.
          저자는 단돈 100만 원으로 스마트스토어를 시작해 내 사업을 키우는 법, 포기하고 싶을 때 행동, 추진력을 키우는 법, 온라인쇼핑몰을 키우는 핵심 노하우를 이 책에서 모두 공개한다. 실제 저자의 코칭을 받은 ‘창업 다마고찌’는 스마트스토어를 무일푼으로 시작해 8개월 만에 월 수익 1,000만 원 이상을 달성했다. 스마트스토어는 월급쟁이나 가정주부도 소자본 부업으로 시작할 수 있고 실패하더라도 다시 일어날 수 있어 리스크가 적다. 저자는 누구보다 월급쟁이의 애환을 잘 이해하고 있기에 이들을 위한 경제 독립 플랜을 정리해 소개한다.
          `,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/487/x9788950988487.jpg",
                category: "도전",
                detail: "노력;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16416952",
                type: "book"
            },
            {
                id: 322,
                title: "김미경의 리부트",
                director: "김미경",
                year: '2020-7-1',
                rating: 9.22,
                summary: `코로나 이후 낯선 세상에서 ‘나는 어떻게 살 것인가’
          달라진 세상에서 개인의 일과 삶과 성장에 관해 답하는 최초의 책!
          코로나 재앙이 실업, 폐업, 파산 위기를 예고하고 있는 지금, 우리는 어떤 미래를 준비하고 있는가. 언제까지 우왕좌왕하며 주식시장의 요동만을 관전하고 있을 것인가. 미래학자와 투자 전문가들의 거시적인 전망과 예측만이 난무한 지금, 우리 개인들에게 절실한 것은 ‘나’의 생존 방법이다! 앞당겨진 미래, 달라진 세상에서 ‘나는 어떻게 일하고, 어떻게 살 것인가’에 대해 답해야 하는 지금, 110만 구독 유튜브 채널 〈김미경TV〉의 크리에이터이자 자기계발 강사 김미경이 코로나 위기를 넘어서는 일자리와 비즈니스의 현실적인 해법을 제시한다.
          『김미경의 리부트』는 강사라는 직업을 가진 개인이자 직원들의 생계를 책임지는 CEO로서 김미경 강사가 온몸을 던져 기록한 ‘코로나 생존 일기’이자, 그녀가 공부하고 연구해 깨닫게 된 인사이트를 말이 아닌 글로 전하는 ‘코로나 시대의 강연장’이기도 하다. 이 책에는 코로나로 앞당겨진 미래를 이해하는 법, 코로나 이후 세상의 ‘바뀐 생존 공식’, 달라진 세상으로 빠르게 진입해 ‘기회를 잡는 법’, 이를 위해 바꿔야 할 공부법과 습관법, 마인드에 이르기까지 우리의 일상을 아우르는 혜안이 가득 담겨 있다.
          김미경 강사가 이 책에서 제시한 ‘바뀐 생존 공식’은 네 가지다. 비대면ㆍ비접촉의 언택트(UN-TACT) 시대에 ‘초연결’이라는 인간의 필요를 더한 ‘온택트(ON-TACT)’, 4차 산업혁명의 일상화를 이끌어내는 ‘디지털 트랜스포메이션(DIGITAL TRANSFORMATION)’, 조직에 연연하지 않고 자유롭고 독립적으로 일하는 미래형 인재 ‘인디펜던트 워커(INDEPENDENT WORKER)’, 그리고 일과 사업을 가장 안전한 형태로 바꿈으로써 브랜드 가치를 더해줄 ‘세이프티(SAFETY)’까지. 쉽고 빠르게 이해하고 적용할 수 있는 이 네 가지 공식을 제대로 공부하고 일과 삶에 대입할 수 있다면 멈춰가던 많은 것이 다시 시작될 것이라는 게 김미경 강사의 해법이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/665/x9788901243665.jpg",
                category: "도전",
                detail: "습관;극복;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16387306",
                type: "book"
            },
            {
                id: 323,
                title: "일취월장",
                director: "고영성, 신영준",
                year: '2017-12-7',
                rating: 7.74,
                summary: `생애 절반을 함께하는 ‘일’을 제대로 즐겁게 하며 성장하고 싶은 분들에게일의 8가지 핵심 원리를 알고, 일을 성취하여 월등히 성장한다《완벽한 공부법》과 ‘일을 잘하고 싶은 마음’ 전작 《완벽한 공부법》이 베스트셀러가 되면서 두 저자는 다양한 사람들을 만나 이야기를 나눌 수 있었다. 그런데 흥미롭게도 공부법에 관심이 있는 사람들은 학생, 학부모만이 아니라 취업 준비생, 직장인, 스타트업 종사자, 자영업자 등 각종 ‘일’과 관련된 분들이 상당히 많았다. 이들은 왜 공부법에 관심을 가졌던 것일까? 그 이유는 일을 잘하고 싶은 마음이 있었기 때문이었다. 일을 잘하기 위해서는 학습 능력이 필요하다는 사실을 깨달았기에 일과 관련된 다양한 사람들이 공부법에 큰 관심을 주었던 것이다.공부와 다른 ‘일’ 우리는 공부를 잘하기 위해 사교육까지 받아가며 불철주야 노력했다. 그렇게 보통 15년 넘게 열심히 공부하고 졸업한 후 취업하거나 혹은 창업하면서 일을 시작한다. 하지만 힘들게 얻은 직장에 들어간 신입 사원의 절반 이상은 퇴사를 생각하고 있고, 또 창업자들은 5년 안에 대부분 문을 닫는다고 하니 우리가 과연 무엇을 위해 그렇게 공부했는지 의문이 든다. 학습능력은 일을 잘하기 위한 핵심 요소 중에 하나임은 틀림이 없다. 하지만 그것만으로는 턱없이 부족하다. 일은 너무 많은 요소들이 유기적으로 얽혀있기 때문에 일을 잘하는 법을 배운다는 것은 생각보다 어려운 일이다. 일을 하는 많은 사람들은 평소에 일을 하면서 그러한 점을 느끼고 있었고 동시에 일을 잘하는 법에 대한 갈망이 있었던 것이다.일을 제대로 그리고 즐겁게 할 수 있는 방법 하지만 안타깝게도 우리는 학교에서 일을 잘하는 법에 대해 배운 적이 없다. 그렇기 때문에 일을 잘하는 방법에 대해 갈망하면서도 실질적으로 도움이 되는 방법론에 대해 잘 모르고 있다. 《일취월장》은 일을 잘하기 위한 방법을 총체적인 관점에서 설명한다. 과연 일은 어떤 방식으로 작용하고 어떤 방향으로 움직이는지, 또 우리는 그런 일에 대해 어떤 전략을 수립해야 하는지, 이 책은 일의 본질을 이해하고 더 나아가 제대로 그리고 즐겁게 일하기 위해 치열하게 고민하고 연구한 8가지 핵심 원리를 제시하고 있다. 모두가 이 책을 통해 ‘일취월장’하기를 기원한다.`,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/506/x9791129429506.jpg",
                category: "도전",
                detail: "도전;학습;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=12864064",
                type: "book"
            },
            {
                id: 324,
                title: "완벽한 공부법",
                director: "고영성, 신영준",
                year: '2017-1-6',
                rating: 8.53,
                summary: `지금까지 이런 ‘공부법’ 책은 없었다! 모두를 위한 최고의 공부 지침서
          수많은 공부법 책이 있지만 많은 책들이 한 사람의 인지적 활동인 공부에 대한 본질적인 이해가 ‘결여’된 상태에서 개인의 특정 ‘경험’을 과학적 근거 없이 경솔하게 일반화시키거나 공부를 ‘시험’이라는 협소한 영역에 국한시키고 있다. 하지만 《완벽한 공부법》은 다르다. 이 책은 교육학, 인지심리학, 뇌과학, 행동경제학 등이 밝혀낸 이론을 통한 과학적 접근뿐만 아니라 실제 수천 명의 학생 및 직장인들과의 상담을 통해 축적된 실전적 노하우가 함께 녹여져 있다. 공부의 본질에 그 어떤 책보다 가깝게 다가섰으며 실질적으로 도움이 되는 공부법을 종합적으로 제시하고 있다.
          또한 《완벽한 공부법》은 박사와 독학자라는 뚜렷이 대비되는 학습자 둘이 만든 작품이다. 신영준 박사는 아시아 최고대학인 싱가포르국립대학에서 박사학위를 받고 200회 이상 인용되는 수많은 논문을 썼다. 그 논문 중 하나는 노벨 물리학상을 받은 안드레 가임경과 공저를 했고 그 논문은 [네이처 커뮤니케이션]에 게재가 됐다. 대학교를 중퇴한 고영성 작가는 1년에 200권 이상의 책을 읽고 하루에 수십 개의 보고서와 논문을 읽으며 홀로 공부한 독학자이다. 경제, 경영, 자기계발, 독서법, 자녀 양육 및 교육, 공부법과 관련된 8권의 책을 썼다. 엘리트 코스를 밟은 박사와 제도 밖에서 홀로 공부한 독학자가 협업한 이 책은 거의 모든 학습자의 고민이 고스란히 담겨져 있다고 해도 과언이 아니다. 지금까지 이런 ‘공부법’ 책은 없었다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/735/x9791160486735.jpg",
                category: "도전",
                detail: "노하우;학습;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=11433426",
                type: "book"
            },
            {
                id: 325,
                title: "바보아저씨의 경제 이야기 1",
                director: "바보아저씨",
                year: '2018-5-11',
                rating: 10.0,
                summary: `사회초년생, 직장인, 부모님께 꼭 들려주고 싶은 이야기사회초년생, 직장인, 결혼 시 증여, 노후 부동산까지 총망라브런치 기고 30일 만에 구독자 1,100명40일 만에 브런치 누적조회수 100만을 돌파한 필명 바보아저씨돈 모으고 싶은 직장인들의 필독서! 은행 창구에 가도 쉽게 알려주지 않는 생활경제 정보! 최신 정책을 이해하기 쉽게 풀어쓴 실속 있는 경제 이야기 이외에도 직장생활을 한다면 누구나 겪을 수 있는 에피소드, 은행 이용하기 좋은 시간대 등의 소소한 팁이 실려 있다.대기업과 은행을 모두 경험한 저자의 독특한 시선으로 풀어내는 경제 이야기이며 사회초년생부터 자녀를 둔 은퇴 시점의 직장인, 은퇴 후 자영업 시기까지 생애 시간의 흐름에 따라 구성되었으며, 생애 생활경제를 총망라한 책이다.`,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/468/x9791189040468.jpg",
                category: "도전",
                detail: "도전;학습;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=13602987",
                type: "book"
            },
            {
                id: 326,
                title: "바보아저씨의 경제 이야기 2",
                director: "바보아저씨",
                year: '2018-10-19',
                rating: 9.6,
                summary: `사회초년생, 직장인, 결혼 시 증여, 노후 부동산까지
          생애 생활경제를 총망라한 경제 비법서
          온라인 기고 6개월 만에 구독자 7,000명, 누적 조회수 400만을 돌파한 필명 바보아저씨
          돈 모으고 싶은 직장인들의 필독서! 은행 창구에 가도 쉽게 알려주지 않는 생활경제 정보! 최신 정책을 이해하기 쉽게 풀어쓴 실속 있는 경제 이야기 이외에도 직장생활을 한다면 누구나 겪을 수 있는 에피소드, 은행 이용하기 좋은 시간대 등의 소소한 팁이 실려 있다.
          대기업과 은행을 모두 경험한 저자의 독특한 시선으로 풀어내는 경제 이야기이며 현실에서 척박하게 씨름하며 살고 계시는 전국의 많은 사회초년생, 직장인분들이 이 책을 통하여 필요한 생활경제 정보를 습득하여 실생활에서 돈 낭비를 막고, 돈을 아끼는 데 도움이 되었으면 하는 바람으로 집필하게 되었다.
          책 전반부에서는 1권에 이어서 다양한 은행 내부 시선으로 이야기를 다루면서 은행원들이 예금, 적금, 카드 고객을 어떻게 대하는지, 은행 우수고객제도를 활용해 대출금리를 낮추는 방법, 승진하거나 연봉이 상승했을 경우 은행에 가서 대출금리를 낮추기 위해 협상을 잘하는 방법, 보이스피싱을 당할 뻔한 사례 및 그 예방법, ATM 기계에서 돈 흘렸을 때와 그 돈을 주웠을 때, 타인에게 계좌이체를 잘못했을 때 실제 은행원의 대처 방법 등 다양한 은행 이야기를 다루었다.
          책 중반부에서는 필자가 직장생활을 하며 억척스럽게 돈을 모았던 이야기와 전셋집을 구할 때 전세사기 예방법, 주택청약저축을 들어놔야 하는 이유와 아파트 청약에 당첨되어 놓고 나중에 중도금 대출이 거절된 사례와 그 예방법, 3~4천만 원 소액으로 오피스텔 같은 소액부동산을 투자를 시작하는 방법과 집 고를 때 주의사항, 진짜 부자들이 땅 투기를 어떻게 하는지 등을 다루었다.
          책 후반부에서는 결혼할 때, 아파트를 증여받거나 노후에 자녀에게 재산을 증여할 때 증여세, 상속세를 획기적으로 줄일 수 있는 절세 이야기를 다루었고 필자가 사회생활을 하면서 경험했던 다양한 이야기들, 은행수익구조, 수출경제, 달러 이야기, 국부론, 경제관 등 다양하고 소소한 경제 에세이 글들로 구성하였다.`,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/449/x9791163560449.jpg",
                category: "도전",
                detail: "도전;학습;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=14094648",
                type: "book"
            },
            {
                id: 327,
                title: "당신의 꿈에 질문하라!",
                director: "잭 캔필드, 브라이언 트레이시",
                year: '2020-6-5',
                rating: 9.0,
                summary: `『당신의 꿈에 질문하라!』는 21명의 다양한 직업에 종사하면서, 나름대로 인생에서 시련을 이겨내고 성공한 사람들이 자신의 경험을 근거로 이야기를 전해주는 자전적인 고백 요소가 가미된 에세이 형태의 글들이다. 잭 주펠트(JACK M. ZUFELT), 브라이언 트레이시(BRIAN TRACY), 잭 캔필드(JACK CANFIELD)와 같은 책 속의 저자들은 이미 수십 년 동안 자기개발서의 강사와 저자로 세계적인 명성을 쌓아온 작가들이며, 이들과 더불어 직간접적으로 연관을 맺고 있는 의사, 교사, 회사 경영자, 엔지니어, 싱글맘 등 여러 유형의 직업에 종사하는 일반 사람들이 그들의 삶 속에서 체험하고 발견한 성공에 대한 이야기를 때론 담담하게, 때론 강한 호소력과 진정성을 가지고 그들이 생각하는 인생의 성공에 대한 비밀을 독자에게 전달하고 있다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/324/x9791187436324.jpg",
                category: "도전",
                detail: "성공;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16375637",
                type: "book"
            },
            {
                id: 328,
                title: "당신의 도전은 언제 멈췄습니까?",
                director: "권태현",
                year: '2019-4-25',
                rating: 9.29,
                summary: `“이제는 성공하지 말고 성장하자”
          성공해야만 반드시 훌륭한 삶인 건 아니다. 성공했다고 해서 완전한 행복을 만날 수 있는 것도 아니다. 세상은 급변하고 있고 삶은 갈수록 더 팍팍해지고 있다. 이런 상황에서 성공이라는 단어는 우리를 더 지치게 만드는 건지도 모른다. 나로 살겠다거나 대충 살겠다고 하는 말도 그래서 생겨난 말인지도 모른다.
          지금 중요한 것은 성공이 아니다. 성장이다. 꼭 성공하지 않아도 괜찮다. 매일 조금씩 성장하는 것만으로도 우리는 더 나은 삶을 살 수 있다. 성장하려면 도전해야 한다. 도전함으로써 우리는 성장할 수 있다. 도전의 결과가 반드시 좋아야만 성장할 수 있는 것이 아니다. 오히려 실패를 통해 더 많이 배우고 깨달을 수 있다. 중요한 것은 성공도 실패도 아니다. 도전 그 자체에 있다.
          불가능해 보이는 거대한 꿈도 좋지만 우선은 지금 할 수 있는 일을 하는 것이 중요하다. 먼 훗날의 성공이 아닌 지금 당장 이룰 수 있는 작은 성공이 먼저다. 물이 모여 강을 이루고 바다를 이루듯 작은 성공이 모여야 큰 성공을 이룰 수 있다.
          일상 속 사소한 모든 것들이 다 작은 성공이 될 수 있다. 매일 책 5페이지 읽기, 아침에 10분 일찍 일어나기, 운동하기, 자격증 취득하기 등등 주위를 둘러보면 지금 당장 실천할 수 있는 것들이 많다. 목표를 낮게 설정하여 작은 것부터 실천해나가야 한다. 아무리 크고 훌륭한 목표라 해도 실천하지 않으면 의미가 없다. 사람마다 가지고 있는 역량의 크기가 다르다. 그 역량에 맞춰서 계획을 세우고 실천해나가야 한다.
          이제는 큰 성공이 아니라 작은 성공을 해야 할 때이다. 작은 성공을 통해 성공 경험을 쌓아야 한다. 그 경험이 바탕이 되어야만 더 큰 꿈을 향해 나아갈 수 있다. 꿈을 이루지 못해 좌절하던 지난날은 훌훌 털어버리고 이제 손에 잡히는 작은 성공을 하자. 작은 성공을 통해 우리는 어제보다 더 성장할 수 있다. 분명 지금보다 더 행복한 삶을 살 수 있다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/306/x9791163380306.jpg",
                category: "도전",
                detail: "도전;성장;노력",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=14791976",
                type: "book"
            },
            {
                id: 329,
                title: "나는 1%의 가능성에 도전한다",
                director: "김정기",
                year: '2002-4-8',
                rating: 10.0,
                summary: `"영어황제", "디지털영웅"으로 불리는 김정기 KCU 한국싸이버대학교 학장의 에세이. 영어강사에서부터 CEO, 국제협상 전문 미국변호사를 거쳐 대학 총수가 되기까지 가난과 역경을 딛고 보여준 용기와 도전정신을 담았다. 운명을 개척하는 삶에 대한 지침과, 정보화 시대의 성공조건을 제시하는 책이다.`,
                genres: "자기계발",
                image: "http://image.yes24.com/momo/TopCate05/MidCate07/460739.jpg",
                category: "도전",
                detail: "도전;성공;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=1279212",
                type: "book"
            },
            {
                id: 330,
                title: "챔피언이 되기 위한 50가지 도전",
                director: "피에르도메니코 바칼라리오, 마시모 프로스페리",
                year: '2021-1-10',
                rating: 10.0,
                summary: `점프! 패스! 드리블!
          힘껏 달리고, 가쁜 숨을 내쉬자나와 동료를 믿고, 경기를 즐기며, 포기하지 않는다!
          지루한 규칙과 틀에 박힌 고정관념에 맞서는 능동적인 어린이가 되기 위한 필수 과제 〈열세 살까지 해야 할 50가지〉 시리즈의 네 번째 책 『챔피언이 되기 위한 50가지 도전』이 출간되었다. 세계적인 아동 판타지 문학 작가 피에르도메니코 바칼라리오가 제안하는 50가지 도전을 수행해 나가는 동안 아이들의 평범했던 일상은 박진감과 성취감, 자신감이 가득한 한 편의 판타지 동화로 변모한다!
          『챔피언이 되기 위한 50가지 도전』은 운동을 좋아하는 아이들을 위한 경기장 밖 훈련 지침서다. 경기에서 승리하기 위해 필요한 요소들을 글로 ‘가르쳐 주는’ 대신 스스로 움직여 성취하고 성장해 나가도록 아이들의 도전 의식을 자극한다.
          ‘스트레칭하기’, ‘계단 뛰어오르기’, ‘뒤로 달리기’, ‘자전거 타기’처럼 일상에서 도전할 수 있는 훈련법들이 소개된다. 너무 간단하다고 생각할 수도 있지만 친구들과 함께 즐길 수 있는 심화 훈련법을 알려 주고, 이 손쉬운 도전이 어떤 점에서 우리 신체에 이로운지를 아이들의 눈높이에 맞게 설명해 준다. 손과 발, 라켓을 이용한 여러 종류의 공놀이 도전으로 즐겁게 기술을 연마할 수 있으며, 친구와 호흡을 맞추는 과정 속에서 자연스럽게 팀워크와 동료애의 중요성을 깨달을 수 있게 된다. 또한, ‘잘 먹는 법’과 ‘잘 자는 법’, ‘잘 씻는 법’ 같은 건강한 생활 습관에도 흥미롭게 다가갈 수 있게 한다.
          신체 훈련뿐만 아니라 ‘챔피언’으로서 지녀야 할 마음가짐과 관련한 여러 도전도 소개된다. ‘두려움에 맞서 긍정적으로 생각하기’, ‘감정을 표출하기’, ‘비판을 올바르게 마주하기’, ‘모르는 사람의 해복을 빌어 주기’에 도전하는 것은 승자를 넘어 ‘행복한 선수’, ‘마음이 건강한 사람’으로서의 자세를 배우는 시간이 되어 줄 것이다.
          경기가 끝나도 챔피언의 마음가짐을 잊지 마!
          『챔피언이 되기 위한 50가지 도전』이 말하는 진정한 챔피언은 단순히 스포츠 경기에서 승리를 거둔 자만을 의미하지 않는다. 몸과 마음 사이의 균형을 바로 잡고, 동료들과의 조화로운 협력에 솔선수범하는 진정한 리더십과 승리했을 때 자만하지 않고, 패배했을 때 승복할 줄 아는, 상대 팀과 심판을 존중하는 스포츠맨십을 갖춘 ‘내면의 챔피언’을 최종 목표로 제안한다.
          그 과정이 지루하지 않도록 각 도전에 어울리는 노래와 영화, 책을 추천해 주며, 도전 과정과 기록을 자유롭게 적어 두고 시간이 흐른 뒤에도 도전을 통해 이루어 낸 결과를 확인할 수 있는 ‘너만의 기록’ 공간을 마련해 두었다. 또한, 도전에 성공하면 훈련 점수를 얻을 수 있는데, 모든 도전을 마치고 각각의 점수를 합산한 뒤 책의 마지막에 실린 부록을 보면 나만의 강점과 내가 닮은 스포츠 스타가 누구인지를 확인해 볼 수 있다.`,
                genres: "어린이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/096/x9791190869096.jpg",
                category: "도전",
                detail: "도전;학습;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=17604091",
                type: "book"
            },
            {
                id: 331,
                title: "인생에서 가장 소중한 것",
                director: "이태형",
                year: '2012-5-29',
                rating: 8.64,
                summary: `언론계에서 일한 지 2012년 올해로 24년 된 이태형 「국민일보」 선임기자가 지난 두 해 동안 순례하듯 우리 시대의 대표적인 멘토들을 만났다. 한비야 월드비전 세계시민학교 교장부터 혜민 스님, 김난도 서울대학교 교수, 고은 시인, 이어령 전 문화부 장관, 강영우 전 백악관 국가장애인위원회 정책차관보….
          열일곱 명의 거장은 각자 분야에서 탁월한 결실을 맺고 그 안에서 충만해지기 위해, 기꺼이 오랜 시간 고독과 싸웠고 자신의 편견과 안일과 두려움을 극복했다. 그들은 삶의 어느 지점에서든 깊은 통찰과 현명한 선택, 인내와 책임감을 느끼면서 우직하게 발걸음을 내딛으며 생을 움직여 왔다.
          저자는 인터뷰를 진행하며 모든 이에게 빠짐없이 물었다. 이른바 '이태형표 질문'이라고도 불리는, 바로 '인생에서 가장 소중한 것이 무엇입니까?'라는 단순하지만 결코 쉽게 대답하기 어려운 질문을 던졌다. 이때 그들은 대부분 잠시 멈추었다. 깊이 생각하고 나서, 자세를 곧추세우고 혼신의 힘을 다해 이야기했다.
          거장들 삶의 원칙이 담긴 그 대답은 그간 월간지 「좋은생각」의 그에게 묻다라는 꼭지에 소개되었으나, 한정된 지면으로 아쉽게도 미처 담아내지 못했던 귀한 이야기들이 많았다. 이제 그 진수를 맛볼 책이 <인생에서 가장 소중한 것>이라는 제목을 달고 세상에 나왔다.`,
                genres: "시/에세이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/453/x9788965701453.jpg",
                category: "멘토",
                detail: "노력;자신과싸움;극복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6896927",
                type: "book"
            },
            {
                id: 332,
                title: "훔쳐라",
                director: "이도준",
                year: '2012-5-29',
                rating: 8.0,
                summary: `평범한 것에 자신만의 이름표를 붙여라!
          유능한 창조자는 모방하고 위대한 창조자는 훔친다『훔쳐라』. 이 책은 어떤 일에 있어서 꿈을 이룬 위대한 대가들이 어떻게 성공할 수 있었는지 사례를 통해 분석하고, 그 들의 삶속에 숨어있는 성공 키워드를 제시하였다. 저자는 어떤 일을 하려고 할 때 잘 모르는 것이 있으며 그 분야의 대가의 것을 따라하는 것만으로도 큰 도움이 된다고 말하며, 여기서 멈추지 말고 그의 핵심 기술을 베끼고 훔쳐서 온전히 자신의 것으로 만들어야만 더 나은 창조적인 삶을 살 수 있다고 강조한다. 윈스턴 처칠, 유재석, 손석희, 힐러리 클린턴, 박태준 등 위대한 인물들의 생활과 일화 등을 통해 꿈을 만드는 방법, 자신감, 유머, 설득력, 창조력, 자기 확신, 배려심, 심플한 인생법 등 독자들이 훔쳐야만 하는 값진 성공 노하우들을 소개한다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/185/x9788997092185.jpg",
                category: "멘토",
                detail: "성공;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6896444",
                type: "book"
            },
            {
                id: 333,
                title: "멘토의 시대",
                director: "강준만",
                year: '2012-5-22',
                rating: 7.56,
                summary: `한국 사회는 왜 멘토를 갈망하는가?
          강준만이 전하는 대한민국 멘토들의 이야기『멘토의 시대』. 2011년 ‘강남 좌파’란 용어를 공론의 장으로 끄집어내 강남 좌파 현상에 대한 본격적인 논의를 전개한 강준만 교수가 이번에는 ‘멘토 열풍’에 주목하여, 한국 사회가 멘토 열풍에 빠진 이유를 탐색하였다. 안철수, 문재인, 박원순, 김어준, 문성근, 박경철, 김제동, 공지영, 이외수 등 사회 각 분야에서 멘토로 인정받는 인물 열두 명을 논의 대상으로 삼고, 그들이 걸어온 삶의 궤적과 철학을 집중 탐구하여 그들이 대중에게 사랑받을 수밖에 없는 이유를 분석하였다. 더불어 대통령 안철수론, 김어준과 <나는 꼼수다>열풍, 이익공유제와 관련된 이건희와 박경철의 입장 차이 등 각각의 인물을 통해 한국 사회의 뜨거운 이슈를 예리하게 통찰하여 독자들이 사회를 꿰뚫어보는 안목을 기를 수 있도록 도와준다.`,
                genres: "사회",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/157/x9788959062157.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6928855",
                type: "book"
            },
            {
                id: 334,
                title: "내가 알고 있는걸 당신도 알게 된다면",
                director: "칼 필레머",
                year: '2012-5-12',
                rating: 8.4,
                summary: `1000명의 현자가 전하는 인생의 30가지 지혜!
          전세계가 주목한 코넬대학교의 인류 유산 프로젝트『내가 알고 있는 걸 당신도 알게 된다면』. 코넬대학교에서 저명한 사회학자로서 30년간 ‘인간학’을 연구해온 저자 칼 필레머가 2006년부터 지금까지 1000명이 넘는 70세 이상의 사람들을 대상으로 진행해온 프로젝트를 통해 총 30가지의 지혜의 정수를 뽑아 이 책에 고스란히 담아냈다.
          수천 년 세월동안 ‘검증된 지혜’들은 시대가 강요하는 행복에 휘둘릴 필요는 없으며, 보다 더 나은 미래를 선택하기 위해 지켜야 할 것들은 생각보다 작은 것임을 보여준다. 잘 맞는 짝과 살아가는 법, 평생 하고픈 일을 찾아가는 법, 나머지 인생을 헤아리는 법 등 인생의 현자들의 실천적인 조언들을 통해 어떻게 사는 것이 과연 잘 사는 것이며, 무엇이 우리의 삶에서 우선 시 되어야 하는지를 제시하였다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/015/x9791158510015.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6891984",
                type: "book"
            },
            {
                id: 335,
                title: "돈의 속성",
                director: "김승호",
                year: '2020-6-15',
                rating: 9.11,
                summary: `한인 기업 최초 글로벌 외식 그룹인 SNOWFOX GROUP 의 회장이다. 한국과 전 세계를 오가며 각종 강연과 수업을 통해 ‘사장을 가르치는 사장’으로 알려져 있다. 지난 2019년, SNOWFOX 사는 전 세계 11개국에 3,878개의 매장과 10,000 여 명의 직원을 지닌 글로벌 기업으로 자리매김했으며 연 매출 1조 원의 목표를 이루고 미국 나스닥 상장을 앞두고 있다. 외식 기업 이외에도 출판사와 화훼 유통업과 금융업, 부동산업의 회 사를 소유하고 있고, 글로벌 외식 그룹의 대주주로서 한국과 미 국을 오가며 활동하고 있다. 미국 중견기업인 협회 회장과 중앙 대학교 글로벌 경영자 과정 교수로 활동한 적이 있으며 지난 5 년 동안 3,000여 명의 사업가 제자들을 양성했고 현재 농장 경 영자로도 일하고 있다.
          비즈니스 이력 : 1987년 대학 중퇴 후 미국으로 건너간 뒤 흑인 동네 식품점을 시작으로 이불가게, 한국 식품점, 지역 신문사, 컴퓨터 조립회사, 주식 선물거래소, 유기농 식품점 등을 운영하며 실패를 거듭하다 2005년 식당 체인을 6억 원 에 분납조건(OWNER FINANCING)으로 인수한 후 2008년 100 개 매장 돌파, 미 전역에 1,000여 개의 매장으로 확장했다. 이후, 영국, 캐나다 등의 연관 업체들과의 합병을 통해 전 세 계 11개국, 총 매장 3,878개, 임직원 9,000여 명의 그룹사로 성장했다. 저서로는 『자기경영 노트』 『김밥 파는 CEO』 『생각 의 비밀』 『알면서도 알지 못하는 것들』이 있으며 장기 베스 트셀러 작가이기도 하다. 현재, 한국에는 스노우폭스 도시락 매장과 스노우폭스 플라워 매장이 서울 강남 중심으로 20여 개가 있다.`,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/796/x9791188331796.jpg",
                category: "멘토",
                detail: "성공;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16371940",
                type: "book"
            },
            {
                id: 336,
                title: "굿 멘토",
                director: "데이비드 코트렐",
                year: '2021-12-20',
                rating: 9.5,
                summary: `시행착오를 줄이고 가장 빠르게 앞서나가는 9가지 인생 전략
          미국 최대의 자기계발, 리더십, 경영 철학을 제공하는 코너스톤 연구소의 CEO이자 파산 직전의 11개의 기업을 성공적으로 회생시킨 데이비드 코트렐은 수백 명의 성공한 사람들을 만나 그 비밀을 알아내고 연구해 왔다. 40만 명의 선택을 받으며 현재 최고의 성과를 이끄는 방법을 강의하는 그가 인생을 성공으로 바꾸는 9가지 전략을 완벽하게 정리해 이 책에 담았다. 혹시 목표 주변만 떠돌고 있지 않은가? 어떻게 하면 더 나아질 수 있는지 모른 채 고민만 끝도 없이 이어지고 있지 않은가? 스스로 원하는 사람이 될 수 있도록 용기와 지혜를 주는 성공 지침서가 바로 여기에 있다. 다음 결정은 당신 손에 달렸다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/918/x9791188469918.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=21369355",
                type: "book"
            },
            {
                id: 337,
                title: "이 한마디가 나를 살렸다",
                director: "김미경",
                year: '2020-3-25',
                rating: 9.29,
                summary: `이 시대 최고의 여성 멘토 김미경의 ‘말’ 베스트 컬렉션
          ‘나를 일으켜 세워, 결국 나를 살린’ 김미경의 한마디
          『꿈이 있는 아내는 늙지 않는다』, 『언니의 독설』, 『엄마의 자존감 공부』 등 여러 권의 책으로 수십 만 독자들의 마음을 두드린 이 시대 최고의 여성 멘토 김미경이 3년 만의 신작 『이 한마디가 나를 살렸다』로 돌아왔다. 이번에는 ‘혼자’가 아닌 ‘함께’다. ‘강사 김미경’에서 ‘유튜버 김미경’이 된 지 여러 해, 유튜브 김미경TV를 통해 각각의 영상마다 빼곡하게 달린 댓글로 구독자들과 소통하며, 비로소 그녀는 자신의 영상이 완성된다는 사실을 깨달았다.
          그녀가 만든 영상이 절반이라면, 나머지 절반은 구독자들이 달아준 댓글로 채워지는 셈이다. 이 책은 수천 개가 넘는 유튜브 김미경TV 영상 중 김미경과 구독자들이 가장 진솔하게 마음을 나누었던 최고의 공감 영상을 선정해서 담아냈다. 마음, 일상, 관계, 꿈 4개의 파트로 구분된 내용을 천천히 따라가다 보면 머지않아 ‘나를 살리는 한마디’를 나도 모르는 사이에 마주하게 될 것이다. 이 책은 ‘함께’함으로써 ‘혼자’서도 당당히 일어설 수 있는, 바로 그런 힘을 선물하는 책이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/919/x9788950986919.jpg",
                category: "멘토",
                detail: "극복;공감;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16275248",
                type: "book"
            },
            {
                id: 338,
                title: "역사멘토 최태성의 한국사 근현대편",
                director: "최태성",
                year: '2018-6-1',
                rating: 10.0,
                summary: `한국사 대중화 붐을 일으킨 최태성의 감동적인 근현대사 강의를 만나다!
          역사는 사람을 만나 대화하고 그들의 꿈을 이해하는 학문이다!
          『역사 멘토 최태성의 한국사 근현대편: 꿈을 찾는 한국사』에서는 ‘꿈’이라는 키워드를 통해 근현대사를 만난다. 저자는 한국 근현대사를 세 시기로 구분한다. 1876년 개항부터 1910년까지의 개항기, 국권 피탈 이후부터 1945년까지의 일제 강점기, 광복부터 지금에 이르는 시기까지의 현대인데, 각 시기마다 주어진 특별한 과제가 있었다. 그리고 무엇보다 중요한 점은 역사를 움직인 사람들에게 그 과제를 해결하고자 하는 간절한 꿈이 있었다는 사실이다. 가령 개항기의 과제는 신분제로부터의 해방이었다. 갑신정변이나 동학농민운동을 통해 그들이 왜 그렇게 목숨까지 내놓으며 신분제 폐지를 외친 것인지 생각해보자. 일제 강점기의 시대적 과제는 말할 것도 없이 식민지로부터의 해방이다. 나라를 빼앗긴 슬픔 속에서 몸 바쳐 항일독립운동을 벌인 무수한 지사들이 있었다는 것을 확인하면서 그들이 흘린 피가 우리의 자랑스러운 역사를 이룩하는 데 얼마나 든든한 버팀목이 되었는지 이해할 수 있다. 현대사로 오면 가난과 독재로부터의 해방이라는 과제 앞에서 민주주의를 위해 거리로 뛰쳐나간 윗세대들의 의지를 엿볼 수 있다. 이처럼 시대별 과제를 되새기면서 우리는 그때 그 사람들이 왜 그랬는지 이해할 수 있게 된다. 우리의 전근대사 공부가 과거 사람들을 만나 소통하면서 기록의 행간을 읽는 작업이었다면, 근현대사는 역사를 추동한 주인공과 그보다 훨씬 더 많은 이름 없는 영웅들의 꿈을 읽는 작업이다. 그들의 꿈이 만든 역사가 지금의 대한민국이고, 그 이야기를 기록한 것이 바로 근현대사이며, 오늘의 역사는 이전 세대가 그들의 세상과 처절하게 맞서 싸운 끝에 얻어낸 내일이다. 따라서 우리는 선배들의 꿈이 낳은 결과물을 역사의 선물로 받았듯이 다음 세대에게 보다 나은 시대를 물려줄 의무가 있음을 인지해야 할 것이다.
          저자 최태성은 근 20여 년 동안 교사로 봉직하다가 2017년, ‘전 국민을 위한 역사 교사’로서 활동하겠다고 선언한 후 [별★별한국사 연구소]를 설립하여 온라인 사이트에서 한국사 무료 강의를 선보이고 있다. 그는 “역사를 잊은 민족에게 미래는 없다”는 말을 가슴에 각인하고, 역사 앞에 바로 서기 위해 스스로 노력하는 진정성 넘치는 역사 멘토다. 그는 또한 한국사 공부가 ‘나’를 알아가는 중요한 도구라고 말한다. ‘나’라는 사람이 만들어지기까지 얼마나 많은 사람의 희생이 있었는지 확인하게 되는 과정이 바로 역사임을 믿는 까닭이다. 초중고를 거쳐 대학을 졸업할 때까지 수없이 많은 시간을 역사와 함께하며, 한국사 대중화 붐과 더불어 여러 채널에서 역사 공부를 할 수 있는 상황에 이른 지금, 우리는 저마다의 목적을 가지고 역사 앞에 선다. 공부를 위해, 순수한 학구열을 채우고자, 좋은 성적을 받고자…. 이렇듯 이유와 목적은 다르지만 우리가 역사와 마주하는 순간 기억해야 할 게 하나 있다. 바로 “나의 오늘은 역사 속에 어떤 모습으로 기록될까?” 하는 점이다. 이야기체로 되어 있는 이 책은 외세에 의해 나라의 문을 열게 된 개항기로부터 오늘에 이르는 격동의 현대사를 다룬다. “역사를 잊은 민족에게 미래는 없다”, “역사에 무임승차하지 마라”는 경구를 가슴에 새기고 지금 우리의 삶과 가장 밀접한 관계에 놓인 역사이기에 더 뜨겁고 더 감동적인 근현대사 여행을 떠나보자. 한국사 대중화의 선봉에 선 저자의 교양서 『역사 멘토 최태성의 한국사 근현대편 : 꿈을 찾는 한국사』가 역사 앞에 바로 서기를 바라는 모든 독자에게, “한 번뿐인 인생 어떻게 살 것인가?”를 고민하는 모든 독자에게 반듯하고 정의로운 길잡이가 되었으면 좋겠다.`,
                genres: "역사/문화",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/379/x9791159253379.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=13650369",
                type: "book"
            },
            {
                id: 339,
                title: "아이 마음을 읽는 단어",
                director: "새벽달",
                year: '2019-9-4',
                rating: 9.0,
                summary: `‘몰아세우지 않고 화내지 않으면서
          아이를 따뜻하게 감싸는 방법’
          수십만 엄마들의 육아·교육 멘토,
          ‘영어책 읽어주는 새벽달’의
          따끔하지만 따뜻한 엄마 지침서!
          『엄마표 영어 17년 보고서』, 『엄마표 영어 17년 실전노트』 시리즈로 전국 수십만 엄마들의 찬사를 받아온 ‘영어책 읽어주는 새벽달’의 첫 번째 육아 에세이. 지난 20년 동안 두 아들을 키우며 쌓아 올린 육아 철학을 바탕으로 아이의 마음을 읽고 소통하는 방법을 한 권에 집약했다. 한마디로 ‘아이를 다그치지 않고 상처 주지 않는 새벽달 자녀교육법’을 소개한다.
          저자는 강연, SNS, 유튜브 등 다양한 매체를 통해 아이의 교육과 육아 전반에 대한 고민을 상담하면서 대부분의 엄마들이 아이 마음을 이해하는 방법을 몰라서 많은 시행착오를 겪고 있다는 것을 깨달았다. 답답한 마음에 아이를 혼낸 후, 돌아서서 엄마 스스로를 자책하는 악순환. 아이도 엄마도 힘든 이 악순환의 고리를 어떻게 하면 끊어낼 수 있을지 고민한 저자는 ‘엄마와 아이 사이를 연결하는 27가지 단어들’을 만들었다.
          새벽달이 가려 뽑은 27가지 단어들은 크게 세 가지 종류로 나뉜다. 1부 ‘아이를 다그치기 전, 엄마가 기억해야 할 마법의 단어들’, 2부 ‘엄마이기 전, 진정한 나를 만나게 해주는 마음의 단어들’, 3부 ‘엄마와 아이의 가능성을 발견해주는 단어들’이다. 이 단어들은 강아지, 카메라, 새벽 운동, 일기, 무관심, 글쓰기 등 우리가 일상에서 자주 접하는 평범한 말들이다. 하지만 이 단어들을 육아와 연결하여 재해석한 저자의 통찰을 따라가면 독자들은 자연스럽게 ‘아이 마음을 이해하는 감각’을 배우게 될 것이다. 저자의 20년 육아 에피소드와 좌충우돌 엄마 성장기를 바탕으로 솔직하게 써내려간 『아이 마음을 읽는 단어』를 통해 육아라는 예술의 잔잔한 감동을 느껴보자.`,
                genres: "가정/생활/요리",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/493/x9791188700493.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=15369120",
                type: "book"
            },
            {
                id: 340,
                title: "프로그래머의 길, 멘토에게 묻다",
                director: "데이브 후버, 애디웨일 오시나이",
                year: '2010-7-26',
                rating: 8.0,
                summary: `소프트웨어 개발 분야 새내기를 위한 프로그래머 가이드
          견습 프로그래머가 숙련 프로그래머로 성장하는 과정을 알려주는 가이드 『프로그래머의 길, 멘토에게 묻다』. 경험이 많지 않은 프로그래머들이 소프트웨어 개발 분야에서 경력을 쌓고, 탁월한 개발자가 될 수 있도록 자기 자신을 관리하는 이상적인 길을 안내한다. 프로그래밍을 생업으로 삼기위해 가져야 할 마음가짐부터 커뮤니티를 어떻게 활용해야 도움이 되는 지 등 구체적인 상황과 해결책을 제시한다. 초보 프로그래머들이 참고할 여러 가지 조언을 패턴이라는 형식으로 엮어 내, 구체적인 상황을 제시하고 어떻게 대처해야하는지 멘토의 목소리를 통해 들려준다.`,
                genres: "컴퓨터/IT",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/807/x9788991268807.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6332442",
                type: "book"
            },
            {
                id: 341,
                title: "부동산 공부",
                director: "레비앙",
                year: '2020-8-5',
                rating: 9.43,
                summary: `부동산 공부,
          인생에서 한 번쯤은 열심히 해 볼 만한 가치가 있다!
          이제껏 부동산에 관심 없던 사람들까지 올라가는 전세값과 집값에 박탈감을 느끼고 있다. ‘너무 늦게 부동산에 관심을 가졌나’ 하는 후회와 함께 지금이라도 내 집을 마련해야 할 것 같은 불안한 마음에 3040세대에서 ‘패닉바잉’ 현상이 나타난다는 기사도 나온다. 하지만 이런 시기일수록 성급하게 판단하면 후회가 남는 선택을 할 수도 있다. 당장 무엇인가를 선택하기 전에 차분한 마음으로 준비하고, 자신의 상황에 맞게 공부할 필요가 있다.
          이 책의 저자는 2006년 버블세븐 때 첫 집을 마련한 후 떨어진 집값이 원래 금액으로 회복되기까지 무려 10년이라는 세월을 견뎌야 했다. 똑같은 실수를 반복하지 않기 위해 부동산 공부를 하기로 마음먹고, 책을 읽기 시작했다. 무조건 책을 빨리 많이 읽기보다 자신만의 독서법과 정리법을 활용해 조금 더디더라도 꾸준히 그리고 꼼꼼히 읽어 나갔고, 이제는 부동산 투자를 할 때 확신을 갖고 선택할 수 있는 수준에 이르렀다. 그동안의 과정을 기록한 ‘레비앙의 블로그’는 부동산 공부를 시작하는 사람들뿐 아니라 경제 전문가, 부동산 책 저자들도 즐겨 찾을 정도로 많은 사람이 모인다.
          《책으로 시작하는 부동산 공부》는 처음 부동산 공부를 시작하는 사람들을 위해 저자의 경험을 살려 400여권 중에서 엄선한 70권을 추천하고, 책 내용을 내 것으로 만드는 독서법과 정리법, 책을 활용해 더 깊이 공부하는 방법들을 자세하게 그리고 아낌없이 소개한다.
          많은 사람들이 책을 읽은 후에 금방 내용을 잊어버리거나 막상 투자할 때 어떻게 접목해야 할지 어려워 한다는 점에서 이 책은 단순히 책을 소개하는 도서와 달리 더욱 유용하게 다가올 것이다.
          늦었다고 생각할수록 더욱 신중하게 생각하고 행동해야 한다. 지금이 아니라도 기회는 다시 온다. 떠나버린 기회를 잡으려고 하기보다 다음에 올 기회를 놓치지 않겠다는 마음으로 준비하는 것이 더 현명한 행동이다. 이 책이 이제 막 부동산 공부를 시작하는 여러분에게 작은 등불이 되어 안내할 것이다.`,
                genres: "경제/경영",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/629/x9791161252629.jpg",
                category: "멘토",
                detail: "학습;도전;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16440297",
                type: "book"
            },
            {
                id: 342,
                title: "어떻게 말해줘야 할까",
                director: "오은영",
                year: '2020-10-25',
                rating: 9.67,
                summary: `국민 육아멘토 오은영 박사가 알려주는 ‘부모의 말’
          육아 현실을 200퍼센트 반영한 130가지 한마디
          ‘국민 육아멘토’ ‘대한민국 엄마·아빠들의 엄마’ 오은영 박사의『어떻게 말해줘야 할까』. 쉽게 따라 할 수 있는 ‘부모의 말’을 친절하게 소개하는 육아서이다. 오은영 박사가 이전에 낸 책들과 비교하면 크기는 작고 내용은 쉽다. 그렇다고 내용이 부실하진 않다. 육아 현실에 즉각 활용할 수 있는 현실밀착형 말 130가지를 빼곡히 담았다. 동화책 《꽝 없는 뽑기 기계》(비룡소문학상 수상작)의 그림작가 차상미의 그림을 여럿 넣어 따스하면서 친근한 분위기도 더했다.
          당장 외출해야 하는데 다른 옷을 입겠다며 떼쓰는 아이, 남의 집 물건을 함부로 만지는 아이, 친구 혹은 남매와 자주 다투는 아이, 심하게 고집부리는 아이, 감정적으로 예민한 아이 등등…. 이 책은 아이와 함께 생활하는 사람이면 누구나 경험하고 공감하는 상황을 구체적으로 제시한다. 그리고 상황마다 적절히 교육할 수 있는 말을 국내 최고의 육아 전문가인 오은영 박사가 제시한다. 책에서 제시한 말에는 아이의 말을 먼저 듣고 그 감정을 수긍해준 다음, 아이가 배워야 할 점을 분명하게 알려준다는 공통점이 있다. 부모가 덩달아 화내지 않으면서 간결하게 말하는 것이 핵심이다. 물론 쉽지 않다. 그래서 저자는 ‘육아회화’를 연습하고 반복하면서 아이에게 기회를 계속 주어야 한다고 강조한다. 그렇게 조금만 더 노력하면 아이에게 하는 말이 잔소리가 아니라 효과적인 훈육이 된다. 그 결과 아이는 자존감과 자기 주도성이 높은 사람으로 성장하며 가족관계도 더욱 건강해진다.
          책 앞부분에는 비교적 쉽게 따라 하고 이해할 수 있는 말을, 뒷부분에는 더 구체적이고 생각할 거리가 많은 말을 다루었으며 유아기부터 청소년까지, 다양한 연령의 아이에게 적용할 수 있는 내용을 담았다. 좋은 육아를 꾸준히 노력하는 독자에게 오은영 박사는 따스한 격려도 보낸다. 이렇게 이 책은 ‘부모의 말’에 대한 실용적인 정보와 함께 위안과 위로를 전한다.`,
                genres: "가정/생활/요리",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/652/x9788934986652.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16823099",
                type: "book"
            },
            {
                id: 343,
                title: "0~7세 판타스틱 그림책 육아",
                director: "박지현",
                year: '2016-11-21',
                rating: 9.2,
                summary: `『0~7세 판타스틱 그림책 육아』는 유아기 부모가 알아야 할 그림책에 대한 모든 것을 담았다. 연령별로 어떤 주제의 책을 준비해야 하는지, 전집은 어떻게 고르고 어떤 루트를 통해 구입해야 최고의 선택인 건지, 그림책으로 아이의 공부까지 도모하려면 어떤 책과 방법이 가장 좋은지 등이 책 속에 꼼꼼하게 정리되어 있다.`,
                genres: "가정/생활/요리",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/590/x9791186117590.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=11332197",
                type: "book"
            },
            {
                id: 344,
                title: "아빠 육아로 달라지는 것들",
                director: "이상범",
                year: '2019-10-25',
                rating: 8.0,
                summary: `육아하는 아빠의 잠 못 드는 밤
          이제 정말 엄마 마음을 알겠어요!
          ‘육아가 여성, 엄마에게만 집중되는 현실은 뭔가 잘못되어 있다’라는 깨달음을 얻은 아빠육아 이야기. 육아휴직 1년을 꼬박 아이 돌보는 데 바친 그는 그동안 문제 제기된 적이 없어 더 이상한, ‘육아가 얼마나 힘든 일인지에 대한 사회적 공감대’가 형성되어야 한다고 말한다. 누가 해도 힘든 육아를 여성이 혼자 하는 현실부터 고쳐나가는 게 순서라는 것이다. 저자는 엄마육아만 이야기하는 시대를 끝내고 아빠육아는 선택이 아닌 필수라고 주장한다. 출산하고 모유 수유하는 것 외에 남자들이, 아빠들이 육아를 하지 못할 이유는 없다고 생각한다.
          이 책의 아빠육아는 단지 아이를 잘 키우는 데 그치지 않으며, 육아가 그 누구도 대신할 수 없는 부모 고유의 일이라는 당위론과 함께 주 양육자를 배려하는 육아로 나아가야 한다고 말한다. 또한 아이를 끊임없이 ‘변화하는 존재’로 바라보는 저자의 인식은 육아를 넘어 보육과 교육의 차원까지 아우르는 것이기에 더욱 놀랍다.`,
                genres: "가정/생활/요리",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/166/x9788965292166.jpg",
                category: "멘토",
                detail: "학습;노하우;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=15652921",
                type: "book"
            },
            {
                id: 345,
                title: "웰씽킹",
                director: "켈리 최",
                year: '2021-11-10',
                rating: 9.6,
                summary: `10억 빚더미를 연매출 6,000억과 맞바꾼 부의 원리
          “왜 누구는 부자로, 누구는 빈자로 사는가?
          그 모든 비밀은 웰씽킹에 있다!”
          가난했던 소녀공 시절부터 글로벌 기업 회장이 되기까지, 최상위 부자 켈리 최가 말하는 진정한 부에 대한 모든 것!『웰씽킹』. 지방의 가난한 농가에서 태어난 흙수저 중의 흙수저, 열여섯 나이에 낮엔 소녀공으로 밤엔 야간 고등학교로 주경야독, 난독증이 심해 제대로 읽을 수 없는 삶, 사업 실패로 남은 건 10억 원의 빚. 그런 그녀에게 어떤 희망이 있었을까? 차라리 죽는 게 더 낫다고 생각한 날들의 연속이었다. 하지만 몇 년 뒤, 그녀는 6천 개의 일자리를 창출하고 세계 12개국 30개가 넘는 비즈니스와 계열사를 거느린 글로벌 기업 회장으로 다시 태어났다. 10억 원의 빚을 안고 파리의 센강에 몸을 던지려고까지 했던 그녀는 어떻게 영국 상위 0.1%의 부자에 꼽히고, 인생의 대역전극을 이뤄냈을까?
          그녀는 예전의 자신을 버리고 새로운 사람으로 재탄생하기 위해 뼈아프지만 스스로 실력이 부족했다는 사실을 솔직하게 인정했다. 그리고 자신과 비슷한 배경과 실패를 딛고 성공한 1,000명의 부자를 공부하기 시작했다. 부자들의 공통된 사고방식을 하나씩 따라 하고 완전히 체득하기로 마음먹은 것이다. 그녀는 부자들이 했던 방법을 그대로 따라 하면 자신도 그렇게 될 수 있다고 믿었다. 믿음에서 그치지 않고 몸소 실천한 결과 5년 만에 100년을 일해도 못 이룰 거대한 부를 갖게 되었다. 이를 가능케 했던 것이 바로 부(WEALTH)의 생각(THINKING), 웰씽킹(WEALTHINKING)이다.
          책의 1부에서는 ‘인생의 밑바닥에서 싹튼 부의 씨앗’이라는 주제로, 누구에게나 부자가 될 씨앗이 있다는 메시지를 담고 있다. 단지 그것을 아직 발견하지 못 했을 뿐, 이 책을 읽는 독자들이 자신만의 부의 씨앗을 찾을 수 있도록 돕는, 한마디로 말하면 ‘이론편’이다. 2부에서는 ‘부를 창조하는 생각의 뿌리, 웰씽킹’이라는 주제로 부의 생각을 몸에 체득하기 위한 ‘실천편’이다. 그녀가 1,000명의 부자들을 공부해서 체득한 ‘7가지 생각의 뿌리’, 웰씽킹의 정수라고 말할 수 있는 ‘6가지 시각화’, 그리고 진정한 부자는 공헌의 힘에서 나온다는 ‘웰씽커’의 이야기를 강조하고 있다. 생각의 뿌리, 시각화, 웰씽커, 이 세 가지를 삶의 완전한 변화를 일으킬 마중물이라고 힘주어 말한다.
          사람들은 흔히 결과물만 보고 판단하고 쉽게 포기한다. 하지만 결과물이 산출된 뿌리를 온전히 내 것으로 만들 수 있다면 포기할 수 없게 된다. 부를 창조하는 생각의 뿌리를 제대로 내리면 절대 흔들리지 않는 삶을 살 수 있기 때문이다. 성공하고 싶거나 시간의 자유를 이루고 싶은 사람, 무엇보다 부자가 되고 싶은 사람들에게 이 책이 인생의 지침서가 될 것이다. 바라던 삶에 가까워져라. 부자가 될 사람은 따로 있고, 이제 당신 차례여야만 한다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/775/x4801130677775.jpg",
                category: "멘토",
                detail: "노하우;성공;극복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=21262555",
                type: "book"
            },
            {
                id: 346,
                title: "나는 왜 친구와 있어도 불편할까?",
                director: "에노모토 히로아키",
                year: '2020-2-2',
                rating: 8.75,
                summary: `대화 중 친구의 표정이나 말투까지 신경 쓰다가혼자 지치는 나, 이상한가요?∨내 의견과 다른 이야기도 고개를 끄덕이며 듣게 된다∨가족 안의 ‘나’와 친구들 사이의 ‘나’가 다른 것이 이상하게 느껴진다∨주변 사람들의 부탁을 거절하기가 힘들다∨메뉴를 고를 때마다 선택권을 다른 사람에게 넘긴다∨아예 모르는 사람보다 적당히 아는 사람과 있을 때가 더 부담스럽다마케팅 리서치 연구회사 마크로밀 엠브레인에 따르면, Z세대(1995~2003년생)는 Y세대나 X세대보다 타인과의 관계 형성에 어려움을 크게 느낀다고 한다. 설문조사에 따르면 ‘평소 일상에서 외로움을 느낀다’고 응답한 비율이 20대는 67.2%에 달한 반면 50대는 49.6%에 불과했다. 또한 최근 한 교복 업체에서 청소년 278명을 대상으로 설문조사한 결과 ‘친구들과의 관계’에서 우울감을 느낀다는 답변이 33.5%로, 성적(42.8%)에 이어 2번째로 높게 나타났다.이처럼 많은 이들이 인간관계에서 불편함이나 불안감을 느낀다. 문제는 이 감정을 처음 만난 사람뿐 아니라 일정 정도 이상으로 친한 사람들에게도 똑같이 느낀다는 사실이다. 도쿄대 출신 유명 심리학자이자 대학교 등에서 활발하게 강연과 상담 활동을 하고 있는 저자는 이를 ‘대인불안’이라는 용어로 정의하고, 이러한 감정의 원인과 양상에 대해 알려준다. 『나는 왜 친구와 있어도 불편할까?』는 대인불안이라는 개념을 대중에게 처음 소개하는 책으로, 평소 인간관계에 고민하고 있던 이들에게 큰 도움이 될 것이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/724/x9791189856724.jpg",
                category: "편안함",
                detail: "학습;길잡이;극복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16214220",
                type: "book"
            },
            {
                id: 347,
                title: "정리만 했을 뿐인데, 마음이 편안해졌다",
                director: "다네이치 쇼가쿠",
                year: '2018-7-20',
                rating: 8.2,
                summary: `나쁜 감정이 저절로 사라지고 내일이 기대되는 인생을 만드는 비책
          주변을 정리정돈하면 감정도, 인생도 평온해진다!
          잠시 숨을 고르고 몸과 마음을 재충전하는 공간을 말하는 ‘케렌시아’, 사무실 책상 위를 자신의 취향에 맞게 바꿈으로써 업무 스트레스를 줄이고 심리적 위안을 받고자 하는 ‘데스크테리어’처럼 공간을 통해 안정감을 느끼거나 업무 효율을 높이려는 트렌드가 일상 속에 자리 잡았다. 이것은 공간의 상태에 따라 감정이 크게 영향받는다는 점을 이용한 것이다. 『정리만 했을 뿐인데, 마음이 편안해졌다』에서는 환경을 통해 감정뿐만 아니라 생각의 패턴, 행동을 바꾸고, 나아가서는 인생까지 바꿀 수 있다고 말하며, 그러기 위해서는 무의식에 긍정적인 영향을 주는 ‘최적의 환경’을 만들어야 한다고 이야기한다.
          저자는 환경을 최적의 상태로 만들기 위해 풍수에서 그 힌트를 얻었다. 풍수는 환경의 힘을 내 편으로 만들어 무의식에 개입시킴으로써 감정을 정리하는 방법이다. 이 책에서는 이러한 풍수 기술을 토대로 한 정리정돈법과, 자신이나 타인의 감정, 욕망을 부정하지 않고 그대로 받아들여 어떠한 상황에도 평상심을 잃지 않도록 하는 습관을 함께 소개하고 있다. 이 두 가지를 바탕으로 저자 다네이치 쇼가쿠는 개인이나 기업의 주거공간, 사무공간 선택 및 감정, 리모델링 감수 등을 담당해왔고, 실제로 수많은 고객들의 삶을 변화시켜 유명해지기 시작했다. 이에 대해 저자는 이 책에 나온 방법들로 집이나 직장 환경을 정리하도록 도왔을 뿐, 특별히 어려운 방법을 사용한 것은 아니라고 말한다. 이처럼 환경은 우리의 감정과 인생에 지대한 영향을 주기 때문에, 환경을 바꾸면 자신의 생각과 감정, 그리고 인생까지도 쉽게 바꿀 수 있다.
          『정리만 했을 뿐인데, 마음이 편안해졌다』에서는 단순히 물건을 치우고 청소하는 행위를 넘어, 몸, 마음, 인생을 대하는 자세로까지 정리의 의미를 확장하면서, 정리란 내가 머무는 공간을 돌보는 것과 같으며, 그것은 결국 나 자신을 소중히 아끼는 행위임을 깨닫게 한다. 이 책에서 알려주는 방법들을 하나씩 따라 하며 집과 직장을 최적의 상태로 만들어보자. 그리고 정리라는 행위를 통해 자신과 인생을 대하는 자세를 바꾸어보자. 감정에 휘둘리지 않고 나답고 자유로운 삶, 언제나 내일이 기다려지고 매일 설레는 삶이 당신을 기다릴 것이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/468/x9791158462468.jpg",
                category: "편안함",
                detail: "휴식;길잡이;변화",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=13786389",
                type: "book"
            },
            {
                id: 348,
                title: "낯선 일상을 찾아, 틈만 나면 걸었다",
                director: "슛뚜",
                year: '2020-1-16',
                rating: 9.0,
                summary: `45만 구독자를 사로잡은 인기 유튜버 슛뚜특유의 감성을 그대로 담은 여행 이야기를 엮다.감각적인 영상과 사진으로 인기를 얻고 있는 유튜버 슛뚜. 유튜브 채널 구독자 45만, 인스타그램 팔로워 7만에 육박하는 그녀가 감성 여행 에세이를 출간한다. 쳇바퀴같이 지루한 일상을 보내다 ‘여행’이라는 핑계를 대고 무작정 떠난 그가 처음으로 도착한 도시 런던부터 제주에 이르기까지 4년간의 여정을 고스란히 담았다. 여행을 하며 자신이 진정 좋아하는 게 무엇인지 스스로 알아가는 과정과 함께 여행에서 마주한 찬란하고 아름다운 순간을 나누고자 한다. 유럽, 일본, 한국 등 각 나라 총 21개 도시를 거닐며 슛뚜가 보고, 듣고, 느낀 이야기를 담은 이 책은 총 53편으로 이루어져 있다. 런던, 로마, 파리, 시체스, 발리, 레이캬비크, 제주까지 그간 발자국을 남겨온 곳에서 포착한 아름다운 이국의 풍경에 잔잔한 글을 덧붙였다. 첫 여행지였던 영국 런던에서 시작해 4년간의 여행을 시간순으로 정리해 슛뚜가 여행을 통해 성장하는 모습을 잔잔하게 느낄 수 있을 것이다.`,
                genres: "시/에세이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/717/x9791189856717.jpg",
                category: "편안함",
                detail: "휴식;공감;여행",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16108705",
                type: "book"
            },
            {
                id: 349,
                title: "오늘은 이만 좀 쉴게요",
                director: "손힘찬",
                year: '2018-7-26',
                rating: 8.25,
                summary: `내 안의 쉼터를 되찾아주는 마음의 교과서!
          SNS 7만 명의 독자가 공감하는 손힘찬 작가의 첫 단독 에세이 『오늘은 이만 좀 쉴게요』. 인간관계·자존감·사랑·인생 4가지 파트로 구성된 책으로, 주로 우리 일상에서 겪고 고민하는 부분에 대해 이야기한다. 정답을 제시하기보다는 다양한 관점에서 생각할 수 있도록 영감을 자극하고, 담백하고 깔끔한 말투로 따뜻한 위로의 말들을 건넨다. 자신을 합리적으로 점검하게 도움을 주는 통찰력으로 어쩔 때는 정곡을 찌르고, 내면이 바닥을 치닫고 있을 때 치고 올라갈 수 있는 힘을 주고, 관계 속에서 남을 신경 쓰느라 잊고 있었던 ‘나’를 우선순위로 두고 생각하게 하게 해준다.`,
                genres: "시/에세이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/787/x4801162141787.jpg",
                category: "편안함",
                detail: "휴식;공감;변화",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=18123516",
                type: "book"
            },
            {
                id: 350,
                title: "쓸 만한 인간",
                director: "박정민",
                year: '2019-9-2',
                rating: 7.78,
                summary: `배우 박정민의 『쓸 만한 인간』이 3년여 만에 개정증보판으로 돌아왔다. 영화 [파수꾼]의 홍보용 블로그에 촬영 비하인드 스토리를 연재하면서 ‘글 좀 쓰는 배우’로 이름을 알렸던 그는 2013년부터 매거진 [topclass]에 칼럼을 실으며 독자층을 넓혀 갔다. ‘말로 기쁘게 한다’는 뜻의 언희(言喜)라는 필명처럼 재치 있는 필력과 유머러스한 이야기는 많은 사람들을 사로잡았고, 그 글을 모아 출간된 『쓸 만한 인간』은 ‘위로가 필요할 때마다 찾게 되는 책’ ‘나에게도, 누군가에게도 너무나 좋은 선물이 될 책’ ‘유쾌하지만 결코 가볍지 않다’ 등 공감과 위로를 자아내며 많은 이들에게 사랑받았다. 여기에 새 글과 일러스트를 더해 3년 만에 개정증보판으로 출간됐다.
          이번 개정증보판에서 가장 눈에 띄는 변화는 박정민이 직접 쓰고 그린 일러스트와 손글씨가 추가됐다는 점이다. ‘글을 말로 옮기는 일을 하다가 말을 글로 옮기고 싶어졌다’고 말했던 그가 이번에는 일러스트까지 더해 좀 더 솔직한 자신의 이야기를 담았다.
          또한 작가 특유의 유머러스한 문체를 유지하면서도 시간이 흐름을 반영하기 위해 문장을 꼼꼼하게 다시 들여다보며 수정하는 작업을 거쳤다. 기존 도서에는 실리지 않았던 [topclass] 연재분은 물론, 최근의 기록까지 총 9편의 글도 새롭게 수록됐다.`,
                genres: "시/에세이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/502/x9791189856502.jpg",
                category: "편안함",
                detail: "휴식;공감;위로",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=15342857",
                type: "book"
            },
            {
                id: 351,
                title: "멈추면, 비로소 보이는 것들",
                director: "혜민",
                year: '2017-3-15',
                rating: 8.25,
                summary: `『멈추면, 비로소 보이는 것들』은 편안하고 따뜻한 소통법으로 많은 이들에게 위로와 용기의 메시지를 전달하는 ‘동네 스님’ 혜민 스님은 이 책을 통해 관계에 대해, 사랑에 대해, 마음과 인생에 대해, 머리로는 알지만 마음으론 잘 안 되는 문제들을 하나하나 해결해나갈 수 있도록 돕는다. 마음이 힘들 때, 위로받고 싶을 때, 용기 내고 싶을 때 펼쳐보면 좋은 책이다.`,
                genres: "시/에세이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/100/x9791187498100.jpg",
                category: "편안함",
                detail: "휴식;공감;위로",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=11792110",
                type: "book"
            },
            {
                id: 352,
                title: "꽃의 지혜",
                director: "모리스 마테를링크",
                year: '2017-4-7',
                rating: 9.4,
                summary: `『파랑새』작가 · 노벨문학상 수상자 · 벨기에 셰익스피어
          모리스 마테를링크의 경이를 비로소 만나다!
          국내 초역 모리스 마테를링크 선집
          천천히 읽고 오래 음미하는 명상의 말
          “꽃이 당신처럼 살아가는데,
          당신의 삶도 꽃처럼 활짝 피어나지 않겠습니까?”
          ‘벨기에의 셰익스피어’라고 불리는 모리스 마테를링크는 우리에게 『파랑새』로 잘 알려져 있는 작가이다. 시인이자 희곡 작가인 그는 많은 산문을 남겼고, 이번에 출간된 [모리스 마테를링크 선집]은 그의 산문 가운데서도 엄선한, 오랜 세월 가장 사랑받은 작품들이다. 『파랑새』를 통해 ‘행복은 우리 가까이에 있는 것’이라는 메시지를 전한 그는, 희곡 작가로서 성공을 거두고 노벨문학상을 수상한 뒤에도 고독과 은둔을 지향하며 스스로 낮추는 삶을 택했다. 죽을 때까지 자연 속에 살면서 삶의 근원적 가치를 탐색했고, 삶과 죽음, 사랑, 행복, 운명 등에 대해 깊이 사색하며 생각의 단상들을 엮어 시적인 문체로 산문에 담았다.
          [모리스 마테를링크 선집]은 어떤 철학 사상이나 종교에 얽매이지 않고 자기만의 시선으로 세상을, 자연을 바라보고 삶을 성찰한 결과물로, 우주적 진리를 자유롭게 탐구하는 시선과 신비주의적 관점이 어우러지는 가운데 과학자와 같은 세밀한 관찰이 녹아 있다. 모리스 마테를링크는 사유 속에서 솟아나는 물음과 대답들을 한 조각씩 이어가며 큰 그림을 완성해간다. 그리고 그 깨달음의 파편들을 독자들의 손에 쥐어주며 새로운 차원의 사색의 세계로 초대한다. 길가에 핀 꽃 한 송이 속에서 발견한 미시의 세계(『꽃의 지혜』)부터 온 삶과 우주를 아우르는 거시의 세계(『지혜와 운명』,『운명의 문 앞에서』)를 넘나들면서 시인의 영혼으로 써 내려간 아름답고도 장대한 사색의 파노라마가 펼쳐진다.
          어린 시절 우리 곁의 ‘파랑새’를 알려주었던 그는, 파랑새를 찾지 못한 채 어른이 되어버린 우리에게 아직도 우리 곁에 ‘파랑새’가 있을지 다시 한 번 삶을 돌아보며 생각해볼 기회를 마련해준다.`,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/509/x9788950969509.jpg",
                category: "편안함",
                detail: "휴식;공감;행복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=11912993",
                type: "book"
            },
            {
                id: 353,
                title: "곰돌이푸,인생의 맛",
                director: "벤저민 호프",
                year: '2019-3-5',
                rating: 10.0,
                summary: `‘가장 애쓰지 않는 곰’ 곰돌이 푸가 자기만의 속도로 사는 법1982년 미국에서 출간된 뒤로 35년이 넘도록 베스트셀러 자리에서 움직이지 않는 책이 있다. 출간 당시에는 연속 49주간 뉴욕타임스 베스트셀러 목록에 올라 있기도 했다. 2019년 새해에도 아마존의 MOST SOLD 섹션에는 이 책이 있다. 반가운 건 이 책의 주인공이다. 바로 세계에서 가장 사랑받는 곰 ‘곰돌이 푸’다. 놀라운 건 푸가 동양철학, 더 정확하게는 도가철학의 지혜를 전달한다는 점이다. 당황스럽고 의아할 수도 있지만, 잠깐 곰곰이 생각해보면 그러지 못할 것도 없다. 동화 속 ‘곰돌이 푸’는 늘 느긋하면서도 눈앞에 닥친 일들을 기가 막히게 헤쳐 나가는 숲속의 철학자 같지 않았던가?곰돌이 푸가 몸소 보여주는 삶의 지혜가 동양철학의 ‘도道’와 이어진다니, 어떻게 된 일일까? 푸는 삶의 방식이 독특하다. 스스로 ‘머리가 나쁜 곰’이라고 부르지만 ‘뭔가 좀’ 먹을 시간은 귀신같이 알아채고, 길을 잃어도 당황한 기색 없이 ‘꿀단지들이 부르는 소리(!)’를 듣고 집으로 가는 길을 찾아낸다. 바람이 거센 날이면 친구가 무사한지 찾아가보고, 누군가 어려운 일을 겪으면 특별히 애쓰는 것 같지 않으면서도 모두가 만족하는 해결책을 찾아내며, 종종 ‘생각하는 자리’에 앉아 말 그대로 ‘아무것도 하지 않는다’. 가끔은 크리스토퍼 로빈과 탐험대를 조직해 북극을 찾아가기도 하지만 말이다. 이 거부하기 힘든 매력 때문인가, 푸는 긴 세월을 뛰어넘어 세상에서 가장 사랑받는 곰이 됐다. ‘푸의 방식’을 한 줄로 축약하면 이렇다. ‘애쓰지 않고도 평온하고, 있는 그대로 존재하며, 자기만의 속도로 사색하는 곰’. 그래서 《곰돌이 푸, 인생의 맛》의 지은이 벤저민 호프는 ‘푸의 방식’ 속에서 신기하게도 도가철학에서 말하는 인생의 지혜가 빛나는 것을 발견한다.`,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/225/x9791160507225.jpg",
                category: "편안함",
                detail: "휴식;공감;행복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=14593298",
                type: "book"
            },
            {
                id: 354,
                title: "예민한 사람도 마음이 편안해지는 작은 습관",
                director: "니시와키 순지",
                year: '2021-6-23',
                rating: 9.33,
                summary: `스스로 예민한 정신과의사가 찾은마음이 편해지는 가장 구체적인 방법 57작가 새벽 세시, 뮤지션 슈가볼 추천!“이 책을 읽고, 오랜만에 한 번도 깨지 않고 단잠을 잤다”예민한 사람의 장점인 섬세함은 살리고, 일과 생활을 방해하는 괴로움은 없애는 확실한 습관을 소개하며 일본 독자들의 큰 사랑을 받은 책이 국내에 출간되었다. 《예민한 사람도 마음이 편안해지는 작은 습관》은 스스로 극도의 예민함에 시달리는 증후군을 겪은 정신과의사가, 독자와 같은 눈높이로 공감과 해결을 동시에 제시한다. 예민한 사람들은 타인과 세상의 자극에 마음의 상처를 쉬이 입는다. 옆사람의 말 한마디, 먹는 소리, 옷의 감촉, 때론 글자의 줄맞춤까지 모든 게 크게 다가오기 때문이다. 그래서 인간관계 때문에 침울하거나 매사에 완벽주의 경향으로 일의 시작을 어려워하기도 한다. 저자는 처방의 핵심을 ‘스몰스텝’으로 잡는다. 기획서를 쓰기 막막하다면 오늘은 새문서를 켜기만 해도 성공, 대화가 긴장되거나 모임에서 자신이 한 말을 자꾸 후회한다면 말하는 양을 10분의 1로 줄이기만 해도 성공, 이와 같은 식으로 자잘한 성공체험을 쌓는 것이다. 그래서 책에 소개된 모든 습관들은 눈에 보이는 범위만 치우기, 간단 릴랙스 체조 등 한번 해볼까? 싶은 마음이 드는 쉬운 시도들이다.저자는 예민한 사람에겐 자신을 과소평가하는 편견이 자리 잡고 있다며 인간관계, 업무, 일상생활에서 작은 성공을 쌓아갈수록 스스로에게 너그러워지며 자신감이 생긴다고 설명한다. “맘에 든 습관을 몸에 익히면 반드시 편안해지실 겁니다”라는 저자의 말처럼, 전문의가 실제로 효과 본 습관들 중 내가 끌리는 것부터 골라 시작하는 한 걸음만으로 독자는 훨씬 쾌적하고 살기 편한 인생을 만나게 될 것이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/835/x9791165215835.jpg",
                category: "편안함",
                detail: "휴식;노하우;행복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20731454",
                type: "book"
            },
            {
                id: 355,
                title: "내 마음 먼저 챙기고 싶을 때 읽는 책",
                director: "이시노 미도리",
                year: '2018-4-18',
                rating: 8.44,
                summary: `마음속 깊이 박힌 고민을 단숨에 가볍게 만드는 방법!
          유난히 걱정과 고민이 많다면 단순하게 생각하고 간단한 방법으로 풀어내는 연습이 필요하다. 『내 마음 먼저 챙기고 싶을 때 읽는 책』은 상담 사례와 심리학을 통해 이 시대를 살아가는 사람이라면 누구나 공감할 만한 스트레스, 관계, 돈, 연애, 꿈 등 83가지 현실적인 고민거리들의 속 시원한 처방전을 전한다.
          심리상담사인 저자는 이 책에서 한계치까지 쌓인 마음의 짐을 하루에 하나씩 덜어내는 ‘마이크로 비하인드(MICRO BEHIND)’ 방법을 제시한다. 우울증과 콤플렉스에 시달렸던 자신의 경험을 바탕으로 한 번에 모든 짐을 제거하는 것은 어렵지만 작은 짐부터 조금씩 덜어내는 일은 누구나 충분히 할 수 있다고 이야기하면서 일상생활에서 겪는 보편적인 마음의 문제들을 질문과 대답 형식으로 풀어내 삶이 가벼워지고 마음이 편해지는 직접적인 고민정리법을 전한다.`,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/707/x9791187749707.jpg",
                category: "편안함",
                detail: "휴식;극복;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=13504505",
                type: "book"
            },
            {
                id: 356,
                title: "라울 따뷔랭",
                director: "장 자끄 상뻬",
                year: '1998-7-25',
                rating: 8.36,
                summary: `<꼬마 니콜라>와 <좀머씨 이야기>의 삽화를 그린 프랑스 작가의 원색소설. 자전거 수리점 주인 라울 따뷔랭은 존경받는 수리공이지만 그에게는 비밀이 있다. 그 것은 그가 자전거를 타지 못한다는 사실. 어느날 그 마을에 사진사가 들어오는데. 원색의 삽화가 이채롭다`,
                genres: "소설",
                image: "http://image.yes24.com/momo/TopCate01/MidCate02/10423.jpg",
                category: "편안함",
                detail: "휴식;극복;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=1333233",
                type: "book"
            },
            {
                id: 357,
                title: "행복한 출근길",
                director: "법륜",
                year: '2009-4-22',
                rating: 8.59,
                summary: `당신 인생의 주인은 누구인가요? 주어진 조건에서 행복을 찾고, 내 인생의 주인이 되는 법!
          직장인이 겪는 다양한 문제에 대한 해결 방법을 제시하는 『행복한 출근길』. 불투명한 미래에 대한 두려움, 인간관계로 인한 괴로움, 가정생활과 직장생활의 불균형. 현대인 이라면 누구나 겪고 있는 문제들에 대해 가슴 후련해지는 진리를 전한다. 하루의 대부분을 직장에서 보내는데 일로 인해 스트레스만 받는다면 우리의 삶이 제대로 가고 있는 것일까? 법륜스님은 우리를 조급하게 만드는 능력 밖의 자기계발이 아닌 자기 자신을 사랑하고 자신의 일을 즐기는 법을 알려준다.
          직장에서의 삶과 자신의 행복한 삶을 서로 별개의 것이라고 생각한다면 절대 행복한 삶을 누릴 수 없다. 법륜스님은 직장이 돈 버는 수단에 불과하고 그렇게 번 돈으로 행복과 자유를 따로 구하려한다면 행복과 자유는 점점 더 멀리 달아나 버릴 것이라고 전한다. 그렇다면 어떻게 해야 할까? 스님은 ‘월급을 많이 주는 곳’을 찾을 것이 아니라 ‘무슨 일을 하는 곳’인지를 먼저 생각해서 직장을 구하라고 충고한다.
          아시아의 노벨평화상이라 불리는 「라몬 막사이사이상」을 수상한 법륜스님은 1988년 수행공동체 정토회를 설립한 이래 평화, 인권, 통일 운동을 실천해왔다. 공허함과 인간성 상실이 일탈을 넘어 사회문제로 대두되고 있는 가운데 자신의 자리에서부터 행복해지는 방법이 펼쳐진다. 스님은 내일을 위해서 오늘을 희생해야 한다는 생각을 버리라고 전한다. 먹고사는 것을 넘어 타인을 이해하고, 진정으로 자유롭게 사는 법을 살펴보자.`,
                genres: "시/에세이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/585/x9788934934585.jpg",
                category: "편안함",
                detail: "휴식;극복;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6010334",
                type: "book"
            },
            {
                id: 358,
                title: "부모와 아이 사이",
                director: "하임 G. 기너트",
                year: '2003-8-16',
                rating: 8.8,
                summary: `지난 35년간 자녀 교육 지침서로 사랑받아 왔고, 전 세계 30개 언어로 번역되어 읽혀지고 있는 부모 교육 관련 '우리들 사이' 시리즈 중 첫 번째 책이다. 2006년 MBC 스페셜 '내 아이를 위한 사랑의 기술'에 소개되면서 '감정코치법'과 관련, 새롭게 조명을 받고 있다. 저자의 오랜 임상경험을 토대로 제시된 사례들은 그동안 단순하게만 생각해왔던 우리 아이들의 생각과 사고의 층위가 얼마나 섬세하고 또 속깊은지 새삼 깨닫게 한다. 그런 아이의 감정을 다치지 않게 코치하고 대화하는 기술을 담았다.
          아이가 모욕감을 느끼지 않고 규칙을 지키게 하는 법, 인격을 훼손하지 않고 비판하는 법, 판결을 내리지 않고 칭찬하는 법, 마음에 상처를 주지 않고 분노를 표현하는 법, 아이의 감정과 판단, 그리고 의견에 대해 평가하지 않고 인정하는 방법 등 훌륭한 부모가 되기 위한 방법을 제시한다.
          이 책은 1965년에 초판이 출간된 뒤 부인 앨리스 기너트와 월리스 고더드 박사에 의해 2003년 개정 증보판으로 다시 발행되었으며, 개정판에서는 1965년 판에서 다룬 부모 교육의 틀을 유지하고 있으나 대화법에 대해 특별히 보완했고, 대화의 기술 이면에 흐르는 부모와 아이 사이의 심리의 흐름과 감정적 교감에 대해 좀더 자세하게 다뤘다.`,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/127/x9788990220127.jpg",
                category: "편안함",
                detail: "휴식;학습;길잡이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=129643",
                type: "book"
            },
            {
                id: 359,
                title: "도망치고 싶을 때 읽는 책",
                director: "이시하라 가즈코",
                year: '2018-12-11',
                rating: 8.0,
                summary: `심리학에 관한 내용을 담은 서적입니다.`,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/632/x9788970656632.jpg",
                category: "편안함",
                detail: "휴식;극복;행복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=14257868",
                type: "book"
            },
            {
                id: 360,
                title: "풍덩!",
                director: "우지현",
                year: '2021-6-18',
                rating: 9.0,
                summary: `데이비드 호크니부터 파블로 피카소까지
          보기만 해도 편안해지는 다채로운 회화 100여 점 수록!
          “우리는 늘 완전한 휴식을 꿈꾼다.”
          고전부터 현대까지 시대를 초월하여 깊은 감동을 준 명화들을 소개하고 글을 써온 우지현 작가의 신작 에세이 『풍덩!』이 위즈덤하우스에서 출간되었다. ‘완전한 휴식 속으로’라는 부제가 붙은 이 책은, 국내는 물론 중국, 대만 등에 번역되어 많은 독자의 사랑을 받은 『혼자 있기 좋은 방』 이후 3년 만에 펴내는 네 번째 에세이로, 수영을 소재로 한 회화를 소개하며 읽는 이에게 진정한 휴식을 권한다. 작가는 이 책에서 “모두가 지쳐 있다.”라고 말하며 “내가 사랑하는 이에게, 나 자신에게, 그리고 모든 독자들에게.” “쉬어야 한다. 삶을 위해 쉬어야 한다.”라는 메시지를 전한다. 담담하면서도 서정적인 사유가 돋보이는 우지현 작가의 글과 보기만 해도 시원해지는 100여 점의 다채로운 회화를 감상하며 완전한 휴식 속으로 “풍덩!” 뛰어들 수 있을 것이다.`,
                genres: "시/에세이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/984/x9791191583984.jpg",
                category: "편안함",
                detail: "휴식;깨닳음;행복",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20634307",
                type: "book"
            },
            {
                id: 361,
                title: "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
                director: "이치조 미사키",
                year: '2021-6-28',
                rating: 7.6,
                summary: `밤에 자고 일어나면 기억이 리셋되는 ‘선행성 기억상실증’을 앓는 소녀 히노 마오리와 무미건조한 인생을 살고 있는 평범한 고등학생 가미야 도루의 풋풋하고 애틋한 사랑 이야기.
          선행성 기억상실증이라는 익숙한 소재를 매우 수준 높은 청춘 소설로 탄생시켰다는 극찬을 받으며 제26회 전격소설대상 ‘미디어워크스문고상’을 수상한 이 작품은 간질간질한 청춘의 로맨스를 전혀 예측할 수 없는 국면으로 끌고 가, 깐깐하고 엄격한 심사위원 모두를 눈물 흘리게 만들었다는 흥미로운 뒷이야기를 남긴 소설이기도 하다.
          “날 모르겠지만, 사귀어줄래…?” 어쩔 수 없이 건넨 도루의 거짓 고백을 “날 정말로 좋아하지 말 것. 지킬 수 있어?”라는 조건을 걸고 허락한 히노. 조건부 연애였던 두 사람의 관계는, 연인이지만 연인이 아닌 이 특수한 관계는 ‘매일 기억이 사라지는’ 잔혹한 현실을 극복해나갈 수 있을까? 이들 사랑의 끝에 어떤 결과가 기다리고 있을까?`,
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/297/x9791191043297.jpg",
                category: "눈물",
                detail: "휴식;공감;슬픔",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20657805",
                type: "book"
            },
            {
                id: 362,
                title: "미움받을 용기 1",
                director: "고가 후미타케, 기시미 이치로",
                year: '2014-11-17',
                rating: 8.43,
                summary: `심리학 제3의 거장 ‘아들러’, 용기의 심리학을 이야기하다!
          어릴 때부터 성격이 어두워 사람들과 쉽게 친해지지 못하는 사람이 있다. 언제까지 다른 사람들과의 관계 때문에 전전긍긍하며 살아야 할지, 그는 오늘도 고민이다. 이런 그의 고민에 “인간은 변할 수 있고, 누구나 행복해 질 수 있다. 단 그러기 위해서는 ‘용기’가 필요하다”고 말한 철학자가 있다. 바로 프로이트, 융과 함께 ‘심리학의 3대 거장’으로 일컬어지고 있는 알프레드 아들러다.
          『미움받을 용기』는 아들러 심리학에 관한 일본의 1인자 철학자 기시미 이치로와 베스트셀러 작가인 고가 후미타케의 저서로, 아들러의 심리학을 ‘대화체’로 쉽고 맛깔나게 정리하고 있다. 아들러 심리학을 공부한 철학자와 세상에 부정적이고 열등감 많은 청년이 다섯 번의 만남을 통해 ‘어떻게 행복한 인생을 살 것인가’라는, 모두가 궁금해하는 질문에 답을 찾아가는 여정을 그렸다.
          첫 번째 밤부터 다섯 번째 밤까지의 순서로 진행되는 동안 철학자와 청년의 대화는 점점 긴장감을 불러일으키며 재미를 더한다. 특히 철학자의 주장에 이어지는 청년의 반박은 공감대를 한껏 불러일으킨다. 여기에 시대를 읽는 유쾌한 문화심리학자이자 《남자의 자격》, 《에디톨로지》의 저자 김정운 교수가 감수를 맡아 내용의 깊이까지 더해졌다.`,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/342/x9788996991342.jpg",
                category: "눈물",
                detail: "공감;극복;꺠닳음",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=8339910",
                type: "book"
            },
            {
                id: 363,
                title: "미움받을 용기 2",
                director: "고가 후미타케, 기시미 이치로",
                year: '2016-5-2',
                rating: 8.28,
                summary: `역대 최장기간 베스트셀러 1위, 문화계 파워 100인이 선정한 2015년 올해의 책, 네이버 2015년 검색어 책 분야 1위 등 2015년을 ‘아들러’와 ‘용기’ 열풍으로 물들인 『미움받을 용기』가 더 새롭고, 더 강렬하게 돌아왔다.『미움받을 용기 2』는 ‘용기 2부작’의 완성편으로 ‘행복으로 가는 길’을 제시했던 전작에 이어 ‘행복으로 가는 구체적인 방법’에 대해서 다룬다.
          3년 전 홀가분하고 희망 찬 마음으로 철학자의 서재를 떠났던 청년. 그랬던 그가 ‘중대한 고민’이 있다며 다시 철학자의 서재를 찾았다. 그 3년 동안 청년에게는 무슨 일이 생겼던 것일까? 도대체 그의 ‘중대한 고민’은 무엇일까? 그것은 바로 ‘아들러 심리학을 현실에 적용하는 문제’였다. 실제로 『미움받을 용기 2』는 “아들러 심리학을 이해할 뿐 아니라 실천할 수 있을까?” 하는 문제제기에서 집필되었고, 때문에 전작보다 더 구체적이고 실천적인 해법을 제시한다.`,
                genres: "인문",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/129/x9791186560129.jpg",
                category: "눈물",
                detail: "공감;극복;꺠닳음",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=10462578",
                type: "book"
            },
            {
                id: 364,
                title: "고래 옷장",
                director: "박은경",
                year: '2021-4-27',
                rating: 10.0,
                summary: `마음 속 깊이 눌러 둔 슬픔을 다정하게 안아 주는 그림책
          누구에게나 울고 싶은 순간이 있다. 누구에게도 들키고 싶지 않은 울음을 품어 줄 공간이 있다면 얼마나 좋을까. 언제든 가서 마음껏 울음을 쏟으면 기꺼이 나를 따라 깊은 소리로 울어 줄 이가 있는 곳이라면? 『고래 옷장』은 박은경 시인의 시 [울고 싶은 친구에게]에 김승연 작가의 그림을 더해, 울고 싶은 모든 이들에게 전하는 깊은 위로를 담은 그림책이다.
          이야기는 고요한 방에서 시작된다. 소녀는 돌연 비밀의 문을 열듯 짙은 어둠이 깔린 옷장 안으로 자취를 감춘다. 시간이 정지된 듯 고요한 곳, 오롯이 소녀만을 위해 존재하는 공간, 소녀는 고래 배 속을 헤매인다. 옷에 배인 바람 냄새에 스르르 마음을 놓은 순간, 찰랑이는 눈물을 참지 않고 마음껏 울다 보면 저 멀리서 나지막이 소녀를 따라 우는 고래 울음 소리가 들린다. ‘뿌우, 뿌우.’ 어느새 눈물 바다가 된 저 아래 심연에서 묵직하게 들리는 고래 소리. 상처를 치유해 주는 또 다른 상처 자국에, 눈물이 멎고 울렁이던 마음이 잠잠해진다.
          마음 놓고 앉아서 펑펑 울기 좋은 곳, 누군가 깊은 소리로 함께 울어 주는 곳.      
          바다처럼 눈물을 쏟기 좋은 곳, 누군가 시원하게 함께 뿜어 주는 곳.      
          어떤 슬픔도 시원하게 해소되는 곳, 바로 고래 옷장이다.
          『고래 옷장』은 혼자 있고 싶지만 외롭고 싶지는 않은, 우는 모습을 보이고 싶지 않지만 함께 울어 줄 누군가를 찾는 모두를 위한 그림책이다.`,
                genres: "유아",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/199/x9788901250199.jpg",
                category: "눈물",
                detail: "공감;휴식;위로",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20477522",
                type: "book"
            },
            {
                id: 365,
                title: "당신은 아무 일 없던 사람보다 강합니다",
                director: "김창옥",
                year: '2016-10-8',
                rating: 8.8,
                summary: `삶의 쉼표와 느낌표를 주는 이야기!
          스타강사, 소통의 달인, 강사들의 롤모델, 힐링 퍼포먼스의 일인자라는 숱한 수식어를 지닌 김창옥. 유튜브 누적뷰 3,000만을 훌쩍 넘어서고, TVN 〈어쩌다 어른〉, CBS 〈세상을 바꾸는 시간, 15분〉, KBS 〈아침마당〉, 〈여유만만〉, EBS 〈60분 부모〉 등에 출연해 많은 이들을 웃기고 울리는 명강사 김창옥. 정신과의사, 컨설턴트, 강사, 교수가 찾아듣는 강의로도 유명한 그의 명강의 35편이 책으로 엮였다.
          삶이 보내는 사인을 듣는 법, 진정으로 사랑하는 일을 찾는 법, 내 안의 소리 ‘셀프텔러’ 이야기를 듣는 법, 열등감의 가죽을 벗겨내는 법, 내 삶을 종합 편집해 바라보는 법, 그 누구보다 나 자신을 먼저 돕는 법, 지금 이 순간을 사는 법, 삶에서 남는 장사를 하는 법, 감정근육을 키우고 진짜 휴가를 떠나는 법… 김창옥은 삶의 작은 변화를 위한 구체적인 실험과 방법을 제안한다. 자신의 어둡고 초라한 모습마저 감추지 않고 기꺼이 드러내는 김창옥의 진정성 있는 메시지는 공감의 힘이 있다. 삶이 권태로울 때, 뭘 해도 행복하지 않을 때, 이제 그만두고 싶을 때, 하지만 진심은 진짜 제대로 한번 살아보고 싶을 때 이 책이 위로와 응원, 힘 있는 자극이 될 것이다.`,
                genres: "자기계발",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/056/x9791187498056.jpg",
                category: "눈물",
                detail: "공감;휴식;위로",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=11172497",
                type: "book"
            },
            {
                id: 366,
                title: "키친",
                director: "요시모토 바나나",
                year: '1999-2-6',
                rating: 7.9,
                summary: `1987년 데뷔한 이래 가이엔 신인 문학상, 이즈미 교카상, 야마모토 슈고로상 등 여러 문학상을 수상하면서 일본 현대 문학의 대표적인 작가로 꼽히고 있는 요시모토 바나나의 대표작으로, 사랑하는 사람의 죽음, 그로 인한 상처와 상실감, 남겨진 사람들의 고통을 위로하는 따뜻한 구원의 손길을 보낸다. 전 세계 30여 개국에 번역 출간되었으며, 200만 부 이상 판매되었다.`,
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/170/x9788937403170.jpg",
                category: "눈물",
                detail: "공감;슬픔;위로",
                link: "hhttps://book.naver.com/bookdb/book_detail.naver?bid=4556",
                type: "book"
            },
            {
                id: 367,
                title: "무릎딱지",
                director: "샤를로트 문드리크",
                year: '2010-10-20',
                rating: 9.62,
                summary: `걱정 마, 아빠. 내가 아빠를 잘 돌봐 줄게!
          엄마의 죽음을 아이의 관점에서 담담하게 풀어낸 그림동화 『무릎딱지』. 아직 정서적으로 성숙하지 못한 아이가 엄마의 죽음이라는 큰 문제를 겪게 되면서 느끼는 감정변화와 극복의 과정을 섬세하게 그려냈다. 특히 ‘엄마의 죽음’이라는 큰 문제를 다루고 있지만 무겁지 않고 절제된 언어로 아이의 변화를 보여주고, 살아가면서 누구나 겪게 되는 죽음과 이별을 무조건 피하기보단 자연스럽게 받아들일 수 있도록 인도한다. 아이 스스로 엄마의 죽음을 받아들이고 성숙해져가는 과정에서 깊은 감동을 전한다.`,
                genres: "유아",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/670/x9788991871670.jpg",
                category: "눈물",
                detail: "공감;슬픔;위로",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6386101",
                type: "book"
            },
            {
                id: 368,
                title: "쇼코의 미소",
                director: "최은영",
                year: '2019-6-20',
                rating: 8.81,
                summary: `2013년 겨울, 『작가세계』 신인상에 중편소설 「쇼코의 미소」가 당선되어 등단, 그 작품으로 다음해 젊은작가상을 수상하면서 많은 사람들에게 특별한 인상으로 다가갔던 바로 그 신인 소설가 말이다. 그러나 이 ‘특별한 인상’은, 발표한 작품이라고는 등단작 「쇼코의 미소」 한 편밖에 없는 신인 작가가, 등단한 지 채 두 달이 되지 않은 시점에 젊은작가상을 수상했다는 것만을 의미하지 않는다. 저마다의 날카로운 감식안을 지닌 소설가와 평론가들로부터 공통의 감상을 이끌어냈다는 점에 그 특별함이 있다. 어떤 갑론을박도 없이 모두에게서 동일한 평가를 받는 작품이 탁월한 소설이라 말하려는 것이 아니다. 등단작에 대해 흔히 우리가 걸게 되는 기대―기존 작품과 구별되는 ‘낯섦’과 ‘전위’에 대한 요구―로부터 물러나, 별다른 기교 없이 담백하게 이야기를 풀어나가고, 그 정통적인 방식을 통해 읽는 이의 마음을 움직였다는 것에 「쇼코의 미소」가 지닌 특별함이 담겨 있다. 그러니까, “고레에다 히로카즈나 이누도 잇신 감독의 어떤 영화들처럼 거의 모든 영역에서 ‘진실하다’라는 느낌”(문학평론가 신형철)을 준다는 것, 그로부터 “소설이 주는 감동이란 무엇인가를 새삼 생각해보게 만들었다”(소설가 임철우)라는 것.
          최은영은 등단 초기부터, “선천적으로 눈이나 위가 약한 사람이 있듯이 마음이 특별히 약해서 쉽게 부서지는 사람도 있는 법”이라고, 전혀 짐작할 수 없는 타인의 고통 앞에 겸손히 귀를 열고 싶다고 밝혀왔다. 최은영의 시선이 가닿는 곳 어디에나 사람이 자리해 있는 것은 바로 이 때문일 터. 총 7편의 작품이 수록된 최은영의 첫 소설집 『쇼코의 미소』는 사람의 마음이 흘러갈 수 있는 정밀한 물매를 만들어냄으로써, 우리들을 바로 그 ‘사람의 자리’로 이끈다.`,
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/630/x9788954641630.jpg",
                category: "눈물",
                detail: "공감;슬픔;휴식",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=10785953",
                type: "book"
            },
            {
                id: 369,
                title: "바보 엄마",
                director: "권미나",
                year: '2020-4-27',
                rating: 10.0,
                summary: `“하나님, 어떻게 해요? 도와주세요!” 막막한 육아, 일이 생기면 일단 울며 기도부터 시작했다!주님 뜻 따라 여섯 아이를 출산, 입양하고 믿음으로 길러낸바보 엄마 권미나 선교사의 눈물콧물 기도와 말씀 양육기`,
                genres: "종교",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/789/x9791165040789.jpg",
                category: "눈물",
                detail: "공감;슬픔;휴식",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16341086",
                type: "book"
            },
            {
                id: 370,
                title: "우리들의 행복한 시간",
                director: "공지영",
                year: '2016-8-20',
                rating: 9.0,
                summary: `생명의 이유는 무엇이고 삶의 이유는 무엇이며 상처받은 우리의 내면을 치유하는 것은 무엇인가!
          삶과 죽음, 죄와 벌, 그리고 진정한 사랑과 용서의 의미를 묻는 공지영의 장편소설 『우리들의 행복한 시간』. 영화로도 만들어져 300만이 넘는 관객을 동원하기도 한 작품으로, 2005년 첫 출간 후 100만 부 이상 판매되며 지금까지도 꾸준히 사랑받고 있는 소설을 새롭게 만나본다. 젊은 사형수 윤수와 대학 교수라는 외형은 화려하지만 세 번이나 자살을 기도했던 여인 유정. 윤수가 유정을 만나면서 적어 내려갔던 일기 '블루노트'와 함께 그들의 1년간의 작은 만남과 엄청난 이별의 이야기가 펼쳐진다.
          젊은 사형수 윤수와 대학교수 유정. 처음의 만남에서부터 마치 자신을 보는 듯 닮아 있는 서로의 모습을 알아본 두 사람은 거듭되는 만남 속에서 누구와도 공유하지 못했던 진짜 이야기를 나누고, 이로써 자신들의 어두운 방을 찬찬히 들여다보게 된다. 불우한 사형수와 불안하고 냉소적인 젊은 여자가 만나 어긋나버린 자신들의 삶을 처음으로 들여다보고 힘겹게 서로의 상처를 치유해가는 이야기인 동시에, 저자가 취재 기간 만났던 세상의 그늘진 곳을 찾아다니며 그들과 함께 울고 아파하는 충만한 사람들의 이야기이며, 우리 자신에게 진정한 생명과 삶의 이유를 묻고 있는 이야기이다.`,
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/723/x9788965745723.jpg",
                category: "눈물",
                detail: "공감;슬픔;꺠닳음",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=10965306",
                type: "book"
            },
            {
                id: 371,
                title: "그대를 사랑합니다",
                director: "강풀",
                year: '2012-2-15',
                rating: 8.0,
                summary: `온라인 만화가 대세가 되어버린 후 많은 인터넷 만화들이 책의 모습으로 나왔지만, 기존 인터넷 만화의 화면 구성을 그대로 책에 옮겨 놓은 탓에 인기에도 불구하고 독자들의 외면을 받는 경우가 많았다. 이번 새롭게 출간되는 강풀 작가의 <그대를 사랑합니다>는 종전의 편집방식과는 다르게 모든 컷을 독서에 적합하게 출판만화의 순서대로 재배열하고, 원고를 다시 수정해서 다소 읽기 어려웠던 가독성 문제를 말끔하게 해결하여 소장가치를 높였다. 또한 새롭게 리뉴얼된 표지와 추가된 박스로 독자들의 만족도를 높였다. 이 방식은 향후 ‘재미주의’라는 브랜드에서 온라인 만화에 모두 동일하게 적용될 예정이다. <그대를 사랑합니다>는 총 3권으로 이루어져 있다.`,
                genres: "만화",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/477/x9788901127477.jpg",
                category: "눈물",
                detail: "공감;슬픔;휴식",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6831437",
                type: "book"
            },
            {
                id: 372,
                title: "1리터의 눈물",
                director: "키토 아야",
                year: '2011-11-28',
                rating: 8.6,
                summary: `넘어지면 어때, 다시 일어나면 되잖아!
          ‘척수소뇌변성증’이라는 불치병으로 25살의 짧은 생을 마감한 키토 아야의 투병일기『1리터의 눈물』. 이 책은 드라마와 영화로 만들어져 많은 이들의 눈물샘을 자극한 저자의 소소한 일상을 담고 있다. 평범한 소녀였던 15살의 저자가 이름마저 생소한 불치병에 걸린 후 손가락이 굳어 더는 글씨를 쓸 수 없게 된 20대 초반까지 병과 싸우며 힘겹게 한 글자 한 글자 써내려간 투병일기를 엮었다. 자신에게 닥친 시련을 받아들이지 못하고 고통 속에서 눈물의 시간을 보내던 저자가 다른 장애인 친구들을 만나고 자신을 위해 헌신하는 가족과 친구를 보며 절망스러운 상황에서도 좌절하지 않고 하루하루 최선을 다해 살아가는 저자의 이야기는 우리에게 스스로의 삶을 되돌아보게 하며 살아 있다는 것의 의미와 가족의 소중함을 생각하는 기회를 전해준다. 책의 마지막에 엄마가 전하는 글과 저자가 앓았던 병에 대해 정리하여 저자가 살아온 삶을 이해하는데 도움을 준다.`,
                genres: "청소년",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/346/x9788993952346.jpg",
                category: "눈물",
                detail: "공감;슬픔;위로",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=6780499",
                type: "book"
            },
            {
                id: 373,
                title: "천 개의 찬란한 태양",
                director: "할레드 호세이니",
                year: '2007-11-25',
                rating: 9.05,
                summary: `절망의 끝에서 희망을 피워낸 두 여자가 만들어내는 인간드라마
          아프가니스탄에 남겨진 여성들의 삶. 이 책은 아프가니스탄 출신의 작가 할레드 호세이니의 작품으로, 절망의 끝에서 희망을 피워낸 두 여자가 만들어내는 인간드라마를 탄탄한 구성과 흡입력 강한 문체로 그려내고 있다.
          전란의 소용돌이에 남겨진 두 여자, 마리암과 라일라. 한 남자의 아내들로 만나게 된 두 여자는, 어쩌면 불가능할 듯도 싶은 연대를 만들어간다. 가난과 차별, 그리고 끊임없는 폭력과 생명의 위협 속에서도 서로에 대한 믿음과 희생으로 희망을 가꿔가는 그들의 이야기가 눈물겹게 펼쳐진다.`,
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/015/x9788972754015.jpg",
                category: "눈물",
                detail: "공감;슬픔;위로",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=3311332",
                type: "book"
            },
            {
                id: 374,
                title: "열한번째 사과나무 1",
                director: "이용범",
                year: '2009-4-10',
                rating: 8.19,
                summary: `이 소설은 한 여인을 평생동안 사랑하는 한 남자의 이야기로 멜로의 형식을 갖추고 있다.1985년 스물 세살의 나이로 <문예중앙> 신인상 중편소설 부문에 당선되면서 문단에 나온 작가 김용범이 9년만에 펴낸 장편소설이다.
          주인공은 어린시절 한 마을에서 자란 상은을 짝사랑한다. 그리고 상은과 같은 대학에 들어가고자 공부를 한다. 같은 대학에 들어가서도 여전히 상은만을 바라보며 곁을 맴돈다. 하지만 상은은 함께 운동권에 몸담고 있는 오선배를 사랑하게 되고 오선배가 시위도중 투신하여 척추를 다치자 그를 정성껏 간호한다.
          오선배는 그런 상은의 사랑을 받아들이지 않고, 주인공에게는 민지라는 여학생이 적극적으로 구애를 하게 된다. 결국 주인공과 상은의 만남은 엇갈리고, 상은이 아닌 민지와 결혼하게 되는데 이들의 인연은 여기에서 끝나지 않는다. 얽히고 ?힌 모든 인연들에서 주인공과 상은의 인연은 끊어지지 않고 이어지게 된다.
          이런 설정들은 독자의 눈물샘을 자극하게 하는, 일명 '최루소설'의 구도와 크게 다를 바가 없는 셈이다. 하지만 이 작품이 그러한 소설들과 다른 점은 단순히 슬픔을 자극하는 이야기의 나열이 아니라 한 편의 사랑 이야기 안에 삶을 살아가는 인간의 모습을 그리고 있다는 것이다.
          상은의 해외 유학이나 민지 아버지의 제주도 호텔 소유 등 현실적인 부분에서 부유함을 전제로한 설정, 인물들 간의 갈등에 있어서 그 요인이 작위적인 부분도 몇 군데 눈에 띄긴 하지만 전체적인 구성을 볼 때 큰 무리는 없다.
          이 작품은 사랑을 주제로 하는 연애소설이다. 하지만 80년대를 배경으로 한 운동권의 모습이나, 당당한 커리어 우먼으로 살아가는 주인공의 아내 민지의 모습에서 80년대부터 2001년 현재까지 우리 사회가 어떠한 모습으로 변화해 왔는지를 선명하게 보여준다. 또한 등장인물들의 직업으로 보여지는 교수, 광고 카피라이터, 인터넷 벤처 사업가등 그 직업세계의 문제점 및 풍토를 잘 드러내고 있다.
          그 밖에 이 책의 장점은 편집이 눈에 잘 들어오도록 깔끔하고 산뜻하게 되어있어 읽기에도 편하다는 것이다. 사랑에 빠져있는 사람들이나, 사랑이 힘겨워 지친 사람들에게 선물용으로도 좋을 듯 하다.
          두 권 분량의 긴 내용의 이 소설에서 지은이가 사랑에 대해서 말하고자 하는 바는 '사랑은 양보하는 게 아니라는 것, 사랑하니까 잊어야 한다는 건 거짓말이라는 것'이라고 보여진다.
          한가지 흥미로운 에피소드를 말하자면 지은이가 1985년 <문예중앙> 신인 소설상에 당선되었을 때 함께 상을 받은 작가는 신경숙인데 지은이와 신경숙의 생년월일시가 정확하게 일치한다고 한다. 그래서 사주의 문운을 놓고 문단에서 두고두고 회자되어 왔다. 이번 작품을 계기로 지은이가 신경숙에게 빼았겼던 사주의 문운을 되찾을 수 있을지는 지켜볼 일이다.`,
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/242/x9788984980242.jpg",
                category: "눈물",
                detail: "공감;슬픔;휴식",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=71212",
                type: "book"
            },
            {
                id: 375,
                title: "자기 앞의 생",
                director: "로맹 가리",
                year: '2003-5-6',
                rating: 8.76,
                summary: `‘휴머니즘의 작가’로 알려진 로맹 가리는 러시아 이민자 출신의 유태인이다. 2차세계대전 후 그는 세계 각지에서 외교관으로 일하면서 1956년에는 소설 『하늘의 뿌리』로 공쿠르 상을 수상했다. 그는 가명으로도 여러 소설을 발표했는데, 아자르의 이름으로 발표한 두번째 소설 『자기 앞의 생』으로 한 작가에게 결코 두 번 주어지지 않는다는 공쿠르 상을 수상하게 되면서 공쿠르 상을 두 번 받은 작가가 되었다.
          작가는 자기의 실제 나이보다 많은 나이를 살고 있는 열네 살 모모의 눈을 통해 이해하지 못할 세상을 바라본다. 모모의 눈에 비친 세상은 결코 꿈같이 아름다운 세상이 아니다. 아이의 눈으로 바라보기 때문에 세상은 더욱 각박하고 모진 곳이다. 아랍인, 아프리카인, 창녀들, 노인... 모모가 사랑하는 사람들은 모두 사회로부터 소외되어 밑바닥 인생을 살아가는 사람들이다. 하지만 그들은 누구보다도 사랑에 가득 차서 살아간다. 그를 맡아 키워주는 창녀 출신의 유태인 로자 아줌마를 비롯해 이 소외된 사람들은 모두 소년을 일깨우는 스승들이다. 소년은 이들을 통해 슬픔과 절망을 딛고 살아가는 동시에, 삶을 껴안고 그 안의 상처까지 보듬을 수 있는 법을 배운다.
          『자기 앞의 생』은 ‘삶에 대한 무한하고도 깊은 애정’이 담겨 있는 소설이다. 그럼에도 불구하고 또한 아픈 소설이다. 모모의 등에 지워진 삶의 무게는 산을 오르기는커녕 어린 그에겐 가만히 서 있기도 쉬운 것이 아니다. 그러나 정작 가슴 아픈 것은 어린 모모의 인생을 짓누르는 그 삶의 무게가 아니다. 하지만 어린 모모는 그 무거움을, 너무 일찍 알아버린 인생의 슬픔을 내색하지 않는다. 그는 오히려 시니컬한 냉소로 그 무게를 떨쳐내려 한다.
          새롭게 번역 출간된 『자기 앞의 생』은 프랑스 메르퀴르 드 프랑스 사와 정식으로 계약을 맺고 새롭게 번역된, 그야말로 정본이라 할 수 있다. 이 책에는 로맹 가리 사후에 갈리마르 출판사에서 출간된, 로맹 가리의 유서라 할 수 있는 『에밀 아자르의 삶과 죽음』도 함께 수록되어 있다.`,
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/635/x4808982816635.jpg",
                category: "눈물",
                detail: "공감;슬픔;휴식",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=123586",
                type: "book"
            },
            {
                id: 376,
                title: "오빠를 위한 최소한의 맞춤법",
                director: "이주윤",
                year: '2016-11-30',
                rating: 9.40,
                summary: "최소한의 맞춤법조차 어긋난 문장으로는 상대의 신뢰를 얻을 수 없다. 이 책은 자신이 뭘 틀리고 있는지조차 모르는 ‘맞알못’(맞춤법을 알지 못하는 사람)들과 상대방의 틀린 맞춤법 때문에 울화통이 터져도 막상 설명할 방법을 찾지 못했던 독자들을 위해 기획되었다. 이쯤 되고 보니 비단 남자들만을 위한 책은 아니라는 생각이 든다. 고로 맞춤법을 자주 틀리는 여자 사람은 물론 오빠 말고 남동생, 남자 사람 친구도 환영한다.",
                genres: "맞춤법/띄어쓰기",
                image: "http://image.yes24.com/goods/33514133/XL",
                category: "웃음",
                detail: "사연;부끄러움",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=11345984",
                type: "book"
            },
            {
                id: 377,
                title: "욱해서 쓴 편지",
                director: "박소예",
                year: '2021-12-7',
                rating: 10.00,
                summary: "걸핏하면 사회의 문제적 캐릭터로 호출되어 입방아에 오르내리는 ‘요즘 것들’. 한쪽에서는 이들을 분석해 새로운 시대를 이끌어나갈 주체라며 칭송하고 다른 한쪽에서는 부족함 없이 편하게 자란 세대라 끈기 없고 버릇도 없다며 물어뜯기 바쁘지만 정작 그들이 직접적인 발언의 기회를 얻는 일은 많지 않다. 이러한 분위기 속에서 대한민국 청년 대표는 아니지만 서울시 관악구의 한 동네책방 대표는 되는 박소예 작가가 사회의 섣부른 편견과 훈수에 반박한다!",
                genres: "시/에세이",
                image: "http://image.yes24.com/goods/105517597/XL",
                category: "웃음",
                detail: "성격;화",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=21354160",
                type: "book"
            },
            {
                id: 378,
                title: "소개팅 심리 수업",
                director: "닥터 고양이",
                year: '2021-11-25',
                rating: 10.00,
                summary: "소개팅에서 막막한 상황에 놓이거나 잘해보고 싶은데 방법을 모를 때 든든한 지원군이 되어줄 ‘개념 원리 소개팅 안내서’. 소개팅은 연애를 위한 좋은 기회지만 어려움도 존재한다. 단둘이 처음 만나 호감 쌓는 법을 우리는 제대로 배운 적이 없기 때문이다. 저자인 ‘닥터 고양이’는 대학에서 심리학을 공부한 소개팅 주선 덕후로서, 간단한 조언이나 개입만으로도 소개팅 결과가 달라졌던 경험을 책으로 풀어냈다. 분위기가 좋았는데 연락이 없었던 이유, 왜 웃기려고 할수록 소개팅이 잘 안 풀렸는지 등등 소개팅을 심리학의 관점으로 바라보는 재미가 쏠쏠하다. 뼈 때리는 조언에 공감하고 무릎을 ‘탁’ 치는 동안 지난 소개팅을 돌아보고 상대의 관점으로 나를 바라보게 된다. 그리고 그제야 무엇이 나의 문제점이었는지 정확하게 알고 성공률을 높일 수 있다. 실수를 만회하는 기적의 한마디나 두 번째 만나서 하기 좋은 활동 등 센스가 돋보이는 참신한 팁도 만나볼 수 있다. 재미있게 술술 읽다 보면 소개팅 능력치가 확 ‘끌어올림’ 되는 신기한 책.",
                genres: "인간관계",
                image: "http://image.yes24.com/goods/105279945/XL",
                category: "웃음",
                detail: "심리;경험",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=21307315",
                type: "book"
            },
            {
                id: 379,
                title: "웃기지만, 생물 수업입니다",
                director: "이지윤",
                year: '2021-10-30',
                rating: 10.00,
                summary: "알파카가 침을 뱉는 이유는?! 하마가 그렇게 위험하다며?! 토끼는 당근을 싫어한다고?! 우리가 지금까지 잘못 알고 있었던 생물 상식을 버섯 박사님이 콕 짚어줘요! 눈이 번쩍 뜨일 만큼 놀랍고 재미있는 생물들의 반전 이야기 50편을 코믹한 만화와 일러스트로 풀어내 시간 가는 줄 모르고 읽게 되지요. 그냥 웃고 즐기다 보면 어느새 생물 지식이 머릿속에 쏙쏙 들어올 거예요.",
                genres: "학습/학습만화",
                image: "http://image.yes24.com/goods/104666482/XL",
                category: "웃음",
                detail: "생물;지식",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=21176961",
                type: "book"
            },
            {
                id: 380,
                title: "배드 가이즈",
                director: "애런 블레이비",
                year: '2021-11-10',
                rating: 10.00,
                summary: "세계적 인기를 누리고 있는 그래픽노블 시리즈 「배드 가이즈」가 비룡소에서 출간된다. 늑대, 뱀, 피라냐, 상어 등, 오래전부터 전래 동화나 공포 영화 등을 통해 무섭고 위험한 존재로 낙인찍힌 이들이 ‘나쁜 놈’이라는 오명을 씻겠다며 한자리에 모였다. 악당 이미지를 탈출하기 위해 착한 일을 하고, 마침내 ‘영웅’으로 거듭나겠다는 이들의 계획은 순조롭게 이루어질 것인지? ‘나쁜 놈’인지 ‘착한 친구’인지는 더 지켜봐야겠지만, ‘진짜 웃기는 놈들’인 것만은 확실한 이들의 이야기를 만나 보자.",
                genres: "동화",
                image: "http://image.yes24.com/goods/102461134/XL",
                category: "웃음",
                detail: "착한;영웅",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20683100",
                type: "book"
            },
            {
                id: 381,
                title: "맥아더 보살님의 특별한 하루",
                director: "유기농볼셰비키",
                year: '2021-6-17',
                rating: 10.00,
                summary: "개그에 진심이 작가들이 뭉쳐 만든 웃음 가득한 현실 풍자 단편 소설집! 상상력 지평선을 아득하게 넘어서는 이야기들을 만나다",
                genres: "한국소설",
                image: "http://image.yes24.com/goods/102367421/XL",
                category: "웃음",
                detail: "모음집",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20660734",
                type: "book"
            },
            {
                id: 382,
                title: "문명 1",
                director: "베르나르 베르베르",
                year: '2021-5-30',
                rating: 9.53,
                summary: "『문명』은 인류 문명이 벼랑 끝에 다다른 세상을 무대로 『고양이』의 주인공이었던 고양이 바스테트가 모험을 펼치는 소설이다. 고양이들의 일차 목표는 기하급수적으로 불어난 쥐 떼의 공격을 물리치고 열악한 환경에서 살아남는 것이지만, 최종 목표는 인류 문명을 대신할 새로운 문명을 건설하는 것이다. 그 과정에서 만난 돼지, 소, 개, 비둘기 등 다양한 동물들은 고양이의 아군이 되기도 하고 적이 되기도 한다. 과연 바스테트는 서로 다른 동물종의 소통과 협력을 이끌어 내고 목표를 이룰 수 있을까?",
                genres: "세계문학",
                image: "http://image.yes24.com/goods/101758671/XL",
                category: "웃음",
                detail: "고양이",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20541262",
                type: "book"
            },
            {
                id: 383,
                title: "몹시 대단히 엄청나게 웃긴 동물 친구들",
                director: "알렉상드라 가리발",
                year: '2021-3-8',
                rating: 9.75,
                summary: "200마리가 넘는 동물들이 쏙 들어 있는 보드북! 깨알처럼 작고, 집채보다 큰 동물 친구들이 가득가득 한가득! 하늘을 날아다니고 숲속과 물속, 농장에 살고 있는 200종이 넘는 동물 친구들의 이야기. 조금은 소란스럽고 톡톡 튀는, 귀여운 동물들의 세계로 초대합니다!",
                genres: "그림책",
                image: "http://image.yes24.com/goods/98853741/XL",
                category: "웃음",
                detail: "동물",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=18831113",
                type: "book"
            },
            {
                id: 384,
                title: "독소 소설",
                director: "히가시노 게이고",
                year: '2020-4-30',
                rating: 10.00,
                summary: "첫 편 ‘유괴 천국’은 작가가 본래 장편으로 구상했던 작품으로, 돈 많은 재벌 할아버지가 학교공부에 시달리는 다섯 살짜리 손자를 구출하려고 자신의 친구들과 모의해 ‘유괴’를 실행에 옮기는 이야기다. 어릴 때부터 부모에 의해 사육되다시피 하는 일본 교육의 문제점을 신랄하게 풍자한 이 작품은 비슷한 처지에 놓인 한국 교육의 현실을 떠올리게 한다. ‘에인절’은 남태평양 작은 섬 주변에서 발견된 새로운 생물체를 둘러싸고 벌어지는 소동 통해 방사능을 비롯한 환경 문제의 심각성을 고발한다. 이밖에도 남편의 직장 상사 부인이 주재하는 티 파티에 참석해 그녀가 만드는 맛없는 음식을 억지로 먹으며 찬사를 바쳐야 하는 아내들의 고통을 다룬 ‘핸드메이드 사모님’, 교사 출신 할아버지가 어느 날 식구들이 모두 외출한 틈을 타 손자 방에 들어가서 평소 로망이던 포르노 비디오를 보려고 시도하지만 리모컨 조작법을 몰라 우왕좌왕하는 이야기 ‘나 홀로 집에 할아버지’ 등, “유머소설에는 작가의 공격적인 악의가 있어야 독자들이 재미있어 한다.”라는 히가시노 게이고의 말처럼 『독소 소설』은 그가 세상을 향해 날리는 독하고도 통쾌한 메시지로 가득한 책이다. “웃음 스위치와 눈물 스위치는 바로 옆에 붙어 있다.”",
                genres: "세계고전",
                image: "http://image.yes24.com/goods/90535965/XL",
                category: "웃음",
                detail: "모음집",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=16379612",
                type: "book"
            },
            {
                id: 385,
                title: "슬기로운 소시지 도둑",
                director: "알렉상드라 가리발",
                year: '2021-3-30',
                rating: 10.00,
                summary: "셸은 온 가족이 도둑입니다. 엄마, 아빠, 형과 할머니까지 모두 다 남의 물건을 훔치는 게 일이지요. 셸은 남들처럼 돈을 벌어서 필요한 것을 사면 안 되느냐고 묻지만 소용없습니다. 아빠는 직업이 도둑이니 남의 물건을 열심히 훔치는 게 당연하다고 하고, 엄마는 도둑질이 하기 싫어 쓰레기만 훔쳐 오는 셸이 도둑 대신 청소부가 되려는 게 아닌지 걱정이지요. 어느 날, 셸에게 커다란 위기가 닥칩니다. 친구인 소시지 페르의 물건을 훔쳐야 하는 상황이 된 거예요. 소시지 페르의 가족이 멀리 여행을 떠난 사이, 셸의 가족이 빈집을 털러 가기로 했거든요. 셸은 친구의 물건을 훔치기 싫다고 발버둥 치지만 어쩔 수 없습니다. 도둑 가족은 소시지 가족의 집 안에 있던 모든 물건을 탈탈 털어 오지요. 그날 밤, 셸은 고민 끝에 소시지 페르의 사진만이라도 돌려주리라 맘먹고 숲을 건너 친구네 집으로 향합니다. 그런데 숲속에서 수상쩍은 무리들을 만납니다. 하고 싶지 않은 일을 하지 않으려고 혹은 하고 싶은 일을 찾으려고 도시를 떠나 이 숲속에 모여 사는 이들이었지요. 그들은 도둑질을 하고 싶어 하지 않는 셸의 마음을 이해해 줍니다. 그리고 다 함께 힘을 합쳐 셸을 돕기로 하지요. 셸은 새로운 친구들의 도움으로 마지막 도둑질에 나섭니다.",
                genres: "그림책",
                image: "http://image.yes24.com/goods/97778117/XL",
                category: "웃음",
                detail: "도둑;나답게",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=18058271",
                type: "book"
            },
            {
                id: 386,
                title: "공중그네",
                director: "오쿠다 히데오",
                year: '2005-1-16',
                rating: 8.17,
                summary: "뾰족한 물건만 보면 오금을 못 펴는 야쿠자 중간보스, 어느 날부턴가 공중그네에서 번번이 추락하는 베테랑 곡예사, 장인이자 병원 원장의 가발을 벗겨버리고 싶은 충동에 시달리는 젊은 의사. 그리고 그들을 맞이하는 하마 같은 덩치를 지닌 엽기 정신과 의사 '이라부'와 사계절 내내 핫팬츠 차림으로 나다니는 엽기 간호사 '마유미', 이들의 못 말리는 황금 콤비. 이 책은 일본 현지에서 ‘최고의 이야기꾼’으로 평가받는 작가 오쿠다 히데오의 131회 나오키상 수상 장편소설 『공중그네』. 엽기적인 행동과 유쾌한 사건들로 이어지는 이 책은 결국 '이라부' 박사만의 독특한 치료법이 환자들에게 돌파구를 찾아 주는 과정을 통해 독자들에게 '행복 바이러스'를 퍼뜨린다.",
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/021/x9788956601021.jpg",
                category: "웃음",
                detail: "행복;휴식",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=1490661",
                type: "book"
            },
            {
                id: 387,
                title: "만화로 배우는 의학의 역사",
                director: "장 노엘 파비아니",
                year: '2021-11-15',
                rating: 9.0,
                summary: `교양 과학만화의 스테디셀러!
          놀랍고 유쾌한 의학의 역사, 개정판 출간!
          의사가 꿈인 자녀에게 부모가 추천하는 교양서 《만화로 배우는 의학의 역사》 개정판이 출간됐다. 이전 판에서 작가가 미처 다루지 못한 이야기, 독자들의 요청으로 추가된 이야기, 오늘의 시점에서 더 의미를 가질 의학사가 추가되어 총 8장 분량이 늘어났다.
          최초의 여성 의사는 누굴까? 인류 역사상 처음으로 병원을 세운 사람은 누굴까? 위드 코로나 시대에 다시 주목하게 된 간호사의 역할과 응급처치의 역사까지, 꼭 알아야 할 의학사가 추가되어 장대한 역사의 완성도를 더한다.
          인류 역사의 큰 획을 그은 의사들의 일화가 중심이 된 스토리텔링의 매력은 여전하다. 히포크라테스 선서가 소크라테스의 유언에서 시작된 이야기, 의사들에게 손 소독을 권유하다 정신병원에 갇힌 의사의 이야기 등 크고 작은 일화가 ‘배우는 맛’을 더한다. 비전문가로서 의학에 관한 얘기를 나눌 때 쏠쏠한 바탕이 되어 주는 의학교양서다.`,
                genres: "역사/문화",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/484/x9791157845484.jpg",
                category: "웃음",
                detail: "행복;학습;유머",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=21289480",
                type: "book"
            },
            {
                id: 388,
                title: "무기모토 산포는 오늘이 좋아",
                director: "스미노 요루",
                year: '2021-7-27',
                rating: 8.5,
                summary: `늦잠, 치즈 빵, 그리고 책.좋아하는 것이 아주 많으니까 오늘도 틀림없이 즐거울 거야.★ 2019년 스무 살이 가장 많이 읽은 소설 2위!★ 스미노 요루 작품 사상 세상에서 가장 귀여운 주인공 등장!○ “작품 속 등장인물이 될 수 있다면, 나는 무기모토 산포가 되고 싶다”_작가 트위터베스트셀러 작가 스미노 요루의 신작, 『무기모토 산포는 오늘이 좋아』가 소미미디어에서 출간되었다. 서점 대상 2위에 오르며 일본 내에서만 250만 부 이상 판매된 『너의 췌장을 먹고 싶어』 이후 청춘 소설의 대표 작가로 떠오른 스미노 요루는 사회생활을 하지 않은 학생이 주인공이었던 전작들과는 달리, 학교 밖에서 일상을 스스로 꾸려나가는 사회인 캐릭터 ‘산포’를 내세우며 새롭게 주목받았다. 『무기모토 산포는 오늘이 좋아』는 대학 도서관에서 일하는 20대 여성 무기모토 산포의 ‘아무 일이 일어나지 않는’ 소소한 일상 속 이모저모를 담은 단편집이다. 무미건조한 일상을 긍정적인 에너지로 색칠하는 독보적인 매력을 지닌 주인공을 통해 저자는 자신이 동경하는 일상을 친근하게 그려냈다.『무기모토 산포는 오늘이 좋아』는 단권 완결로 기획되었지만 많은 독자들의 사랑을 받아 일본 종합 서점 honto에서 선정한 ‘스무 살이 가장 많이 읽은 소설 랭킹’ 2위에 올랐다. 2020년 9월에는 만화로도 제작되었으며, 꾸준한 공감과 관심에 힘입어 2021년 2년 후속작이 나오며 스미노 요루 최초의 시리즈물이 되었다. 2021년 3월에는 산포의 라이프 스타일을 가깝게 느낄 수 있는 ‘산포가 좋아하는 노래 모음곡’ 테마로 기획된 컴필레이션 음반도 출시되는 등 산포의 일상 열풍은 지금도 계속되고 있다.○ 인생을 즐기는 천재! 20대 도서관 사서 무기모토 산포의 일상 힐링 브이로그!수수께끼도, 사건도, 판타지도 없는 어디에나 있는 일상 속에서도 즐거움을 찾아내는 산포. 산포의 이야기 하나하나에는 평범한 일상이니까 특별한 거라는 산포의 가치관으로 가득하다.친구의 안 좋은 소식을 듣고 조용히 눈물짓거나, 일터에서 좋아하는 과자를 발견한 것으로 하루 종일 행복해하거나, 이별의 아픔으로 울다가도 애인 없이 보내는 주말의 상쾌함을 느끼는 산포의 매일. 주변에서는 ‘멍하다’, ‘많이 먹는다’, ‘얼빠졌다’ 등의 잔소리를 듣지만 이런 자신의 모습까지 사랑하며 있는 그대로 받아들이는 산포는 ‘산포’ 자신이기에 행복하다. 주말에는 꼭 낮잠을 자거나, 짠 음식을 먹었을 때는 반드시 달달한 디저트를 먹거나, 어떨 땐 과감하게 꾀병을 부리며 출근을 빼먹었음에도 죄책감에 몸부림치는 인간적인 면모까지. 남의 의견에 휘둘리지 않는 대신 스스로에게 취하는 산포의 독특한 행보는 읽으면 읽을수록 독자를 산포의 사랑스러운 매력 속으로 이끈다.`,
                genres: "소설",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/855/x9791138400855.jpg",
                category: "웃음",
                detail: "행복;공감;유머",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=20790933",
                type: "book"
            },
            {
                id: 389,
                title: "윔피키드 1",
                director: "제프 키니",
                year: '2008-4-7',
                rating: 9.35,
                summary: `『윔피 키드』는 초등학생인 그레그 헤플리의 학교 생활을 비롯한 이성문제, 폭력문제, 친구와의 갈등 문제, 부모님과 형과의 문제 등을 일기 형식으로 풀어 놓은 작품이다. 가장 시선을 끄는 것은 직접 손으로 써내려 간 듯한 노트와 글씨체, 그리고 군데군데 들어간 만화이다.`,
                genres: "어린이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/156/x9791170350156.jpg",
                category: "웃음",
                detail: "행복;유머",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=4513691",
                type: "book"
            },
            {
                id: 390,
                title: "윔피키드 2",
                director: "제프 키니",
                year: '2016-9-22',
                rating: 9.29,
                summary: `시니컬한 중학생 그레그의 일상을 개성 있는 흑백 일러스트와 재치 넘치는 문장으로 그려낸 어린이 문학 시리즈이다. 2007년 시리즈 1권이 출간과 동시에 전 세계적인 열풍을 일으켰다. 450주간 뉴욕 타임스 베스트셀러, 전 세계 48개국에서 1억 7천만 부 판매라는 전례 없는 대기록을 수립하면서, 워싱턴 포스트로부터 '역사상 가장 성공적인 어린이책'이라는 찬사를 받았다. 이번 개정판은 소장하고 싶은 고급스러운 디자인과 후가공, 읽는 재미를 더해 줄 새로운 번역으로 펴냈다.
          로드릭 형은 요즘 날 평소보다도 더 괴롭힌다. 날 지하실에 가두고, 자기가 부모님 몰래 연 파티의 뒷수습을 하라고 하고, 먹기 싫은 음식을 먹이고…. 하지만 나는 반항을 할 수가 없다. 형이 이번 여름 나한테 일어난 ‘그 사건’을 알고 있으니까. 요즘 엄마는 우리가 집안일을 도우면, 나중에 진짜 돈으로 바꿀 수 있는 가짜 돈을 준다. 나는 우연히 단짝 롤리의 보드게임에서 ‘엄마 돈’과 똑같은 가짜 돈을 발견하고 침대 밑에 숨겨둔다.
          어느 날 숙제를 급히 내야 해서 그 돈으로 형에게서 숙제를 샀는데, 숙제가 엉망이라 낙제를 하고 엄마에게 걸려서 벌을 받는다. 학교 장기 자랑 날, 형은 자기 밴드와 함께 무대에 올라 드럼을 연주한다. 나보고 연주 동영상을 찍어 달라는데, 난 그동안 괴롭힘당한 생각이 나서 거절한다.
          엄마가 나 대신 영상을 찍었는데, 죄다 흔들려 엉망이다. 게다가 누군가가 찍어 올린 카메라를 들고 춤추는 엄마 영상이 인터넷에서 유명해지면서 형은 놀림감이 된다. 형은 자기 연주가 웃음거리가 된 게 내 탓이라며, 내 비밀을 폭로하겠다고 한다. 전학, 아니 이민이라도 가고 싶은 심정인 나. 과연 나는 비밀 사수와 동생 노릇, 두 마리 토끼를 다 잡을 수 있을까?`,
                genres: "어린이",
                image: "http://image.kyobobook.co.kr/images/book/xlarge/023/x9788993055023.jpg",
                category: "웃음",
                detail: "행복;유머",
                link: "https://book.naver.com/bookdb/book_detail.naver?bid=11054802",
                type: "book"
            },

            //================================================================================================================================
            //================================================================================================================================

            {
                id: 401,
                title: "실내 장작 난로의 모닥불 소리",
                director: "Baby Lion Nana",
                year: '2017-12-16',
                summary:
                    `숙면, 휴식, 집중, 명상을 위한 힐딜되는 겨울 소리 입니다.
              Sounds for Sleep, Relaxation and Meditation`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201378/20137898.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리",
                link: "https://music.bugs.co.kr/track/30893590?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 402,
                title: "답답한 마음이 탁 트이는 바람 소리",
                director: "ASMR 자장가(ASMR Lullaby)",
                year: '2018-4-12',
                summary:
                    `[마음의 안정과 스트레스 해소를 위한 바람소리 (힐링, 자장가, 수면, 숙면, 휴식, 요가, 불면증 치료 음악, 수면음악, ASMR)] 앨범은
            시원하고 깨끗한 자연의 바람 소리를 통해 걱정, 고민이 많은 현대인들의 답답한 마음을 탁 트이게 하여 스트레스 해소에 도움을 주며,
            특히 잠이 오지 않아 뒤척일 때 깊은 숙면에 취할 수 있도록 도와주는 기능성 사운드만 담아 구성된 힐링 앨범이다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201589/20158901.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리;수면",
                link: "https://music.bugs.co.kr/track/31022481?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 403,
                title: "상쾌한 숲속의 아침",
                director: "해솔",
                year: '2014-3-12',
                summary:
                    `몸과 마음을 깨끗하게 정화하는 싱그러운 멜로디
                해솔의 새로운 싱글 앨범 [상쾌한 숲 속의 아침]
            
                숲이 전하는 생명력과 싱그러움을 담은 몸과 마음을 치유하고 안아주는 감미로운 멜로디를 가득 담은
                해솔의 이번 싱글 앨범 [상쾌한 숲 속의 아침]에는 타이틀 곡 [상쾌한 숲 속의 아침]과
                두 번째 트랙 [싱그러운 향기로 가득한 하루] 2곡이 수록되어있다.
            
                자연이 전하는 살아 숨 쉬는 생명력을 가득 담은 타이틀 곡 [상쾌한 숲 속의 아침]과
                잔잔히 퍼지는 숲의 향이 느껴지는 두 번째 트랙 [싱그러운 향기로 가득한 하루]는 해솔의 감성적인 피아노 연주가 돋보이는
                몸과 마음을 치유하는 피아노 연주 앨범이다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/4184/418414.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리",
                link: "https://music.bugs.co.kr/track/3423022?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 404,
                title: "캠핑장 모닥불 소리 (백색소음 화이트노이즈 자장가)",
                director: "백색소음",
                year: '2017-6-28',
                summary:
                    `백색소음과 자연의 소리를 들으면서 숙면을 취해 보세요
                안정을 취할 수 있는 백색소음 사운드 입니다.
                듣기 편안한 백색소음과 함께 숙면을 취해 보세요`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201051/20105104.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리;야외;모박불",
                link: "https://music.bugs.co.kr/track/30699737?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 405,
                title: "우울감이 완화되는 릴렉스 빗소리",
                director: "수면 연구소",
                year: '2019-1-17',
                summary:
                    `깊은 수면을 위한 빗소리 모음 - 자연에 있는 빗소리를 그대로 담아낸 기능성 앨범이다.
                수면과 휴식에 적합한 빗소리가 담겨 있어, 명상과 사색을 위한 B.G.M(Back Groud Music)용으로도 활용할 수 있다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/202223/20222314.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리;야외;모박불",
                link: "https://music.bugs.co.kr/track/31412332?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 406,
                title: "연필로 글씨 쓰는 소리",
                director: "ASMR 자장가(ASMR Lullaby)",
                year: '2018-3-22',
                summary:
                    `[힐링을 위한 ASMR 자장가 (현장 녹음, 암기, 백색소음, 힐링, 자장가, 수면, 숙면, 휴식, 요가, 불면증 치료 음악, 수면음악, ASMR)] 앨범은 
                팅글을 느낄 수 있는 생생한 소리를 통해 수면을 유도하고 집중력 향상에 도움을 주며, 지친 하루 휴식이 필요한 현대인들에게
                기분전환은 물론 짜릿함까지 느낄 수 있도록 리얼 사운드만 담아 구성된 힐링 앨범이다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201543/20154321.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리",
                link: "https://music.bugs.co.kr/track/30991933?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 407,
                title: "밤의 풀벌레 소리",
                director: "백색소음 피아노자장가",
                year: '2018-9-12',
                summary:
                    `심신 안정과 심리 안정을 위한 '백색소음 피아노자장가'의 백색소음(자연의 소리) 깃든 피아노를 만나보세요.
                '백색소음 피아노자장가'는 뇌파에 안정을 주는 주파수와 소리들을 연구하며 직접 녹음한 고퀄리티의 백색소음 화이트 노이즈 사운드입니다.
                피로와 스트레스를 해소시켜주고 일상에 편안함과 행복을 안겨드림과 동시에 깊은 잠을 잘 수 있도록 해주는 수면의 선율이 수면 중 하루의 피곤함을 다 사라지게 해드립니다.
                숙면과 동시에 내일의 상쾌함을 드릴 백색소음 피아노자장가는 비 갠 후 무지개 같은, 산책 후의 개운함 같은, 평온함으로 당신의 마음에 행복을 드릴 것입니다.
                이제, 여러분의 낮과 밤의 숙면을 책임지고 심신의 바이오리듬에 안정과 안락함을 안겨줄 '백색소음 피아노 자장가'의 자연을 담은 편안한 화이트 노이즈 멜로디를 만나보세요`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201929/20192931.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리",
                link: "https://music.bugs.co.kr/track/31226950?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 408,
                title: "가을길을 걷는 낙엽 밟는 소리",
                director: "힐링 ASMR",
                year: '2018-4-10',
                summary:
                    `자연과 풍경의 소리들 (힐링,휴식,수면,태교)`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201590/20159093.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;자연",
                link: "https://music.bugs.co.kr/track/31023445?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 409,
                title: "캐나다 호수의 강물소리와 까마귀와 썰매개 소리",
                director: "백색소음 ASMR(White Nosie ASMR)",
                year: '2019-3-26',
                summary:
                    `백색소음이란 사람에게 도움이 되는 소리입니다.
                화이트 노이즈라고 알려진 좋은 소음을 뜻하는 백색소음은 ASMR이라고도 불립니다.
                이제 생활주변에서 들려오는 심리적 안정을 주는 생활환경음 자연환경음을 녹음하고 데시벨의 높낮이를 조절하여 뇌파 안정에 도움이 되는 음파, 예를 들면 숙면에 도움을 주는
                세타파, 긴장완화에 도움을 주는 델타파 등 일상 속 무의식의 시간과 심신 안정을 필요로 하는 휴식 시간에 탁월한 백색소음으로 만들어서 들려드립니다.
                이제 백색소음 ASMR의 백색소음으로 진정 편안하고 행복한 마음을 얻을 수 있습니다.
                일상 속의 명상, 휴식, 숙면.. 등 사람들이 살아가는 현대 시대에 꼭 필요한 마음의 안정을 주는 백색음으로 한번 지나가면 다시 오지 않은 오늘을 나 자신에게 선물하세요.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/202400/20240039.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;자연",
                link: "https://music.bugs.co.kr/track/31516611?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 410,
                title: "자갈있는 해변의 빗소리",
                director: "방용석",
                year: '2014-10-14',
                summary:
                    `헐리우드 매너가 출시하는 자연의 소리 앨범 시리즈 [ 힐링되는 바다소리 (자연의 소리) ]는 
                심신의 편안함과 집중을 도와드릴 수 있는 기능성 힐링음악입니다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/4565/456561.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;자연",
                link: "https://music.bugs.co.kr/track/3713352?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 411,
                title: "텐트안에서 듣는 자연의 소리",
                director: "힐링 네이쳐",
                year: '2014-5-19',
                summary:
                    `빅밴드가 출시한 자연의소리 앨범 시리즈 "밤과 귀뚜라미 소리로 듣는 힐링사운드(캠핑사운드,캠핑음악)"는 
                자연속의 귀뚜라미 소리를 통해 심신의 편안함과 집중을 도와드릴수 있는 기능성 힐링음악입니다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/4305/430509.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;자연",
                link: "https://music.bugs.co.kr/track/3513232?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 412,
                title: "제주도 애월읍 수풀속의 밤 귀뚜라미 소리방 안에서 듣는 빗소리",
                director: "힐링 네이쳐",
                year: '2015-9-23',
                summary:
                    `밤과 귀뚜라미소리로 듣는 힐링사운드 3 (현장녹음, 캠핑사운드, 자연의소리)`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/5335/533590.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;자연",
                link: "https://music.bugs.co.kr/track/4580903?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 413,
                title: "탕후루 먹는 소리 (팅글, 힐링 ASMR)",
                director: "ASMR 자장가(ASMR Lullaby)",
                year: '2018-5-3',
                summary:
                    `[힐링을 위한 ASMR 자장가 2 (현장 녹음, 암기, 백색소음, 힐링, 자장가, 수면, 숙면, 휴식, 요가, 명상, 불면증 치료 음악, 잠잘때, ASMR)] 앨범은
                팅글을 느낄 수 있는 생생한 소리를 통해 수면을 유도하고 집중력 향상에 도움을 주며,
                지친 하루 휴식이 필요한 현대인들에게 기분전환은 물론 짜릿함까지 느낄 수 있도록 리얼 사운드만 담아 구성된 힐링 앨범이다.
                특히 이번 앨범에선 들으시는 분들의 더 높은 만족감을 위해 리스너 분들께서 직접 앨범 댓글란에 작성해주신 의견들을 수렴하여 제작하였다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201638/20163844.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리",
                link: "https://music.bugs.co.kr/track/31052806?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 414,
                title: "꿀진주 액괴 슬라임 만지는 소리",
                director: "ASMR SHOWER",
                year: '2018-6-15',
                summary:
                    `'ASMR'은 Autonomous Sensory Meridian Response의 약자로 뇌를 자극해 심리적인 안정을 유도하는 sound이다.
                이 앨범에는 우리가 흔히 실생활에서 쉽게 접할 수 있는 소리들을 실제로 녹음하여 사실적이고 매우 디테일한 SOUND로 구성되어있다.
                바쁜 일상에 지친 현대인들에게 힐링 및 편안한 감성으로 마음의 안정과 집중력향상에 도움이 될 것입니다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201727/20172766.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리",
                link: "https://music.bugs.co.kr/track/31104531?wl_ref=list_tr_08_search",
                type: "music"
            },
            {
                id: 415,
                title: "주전자 물 끓이는 소리",
                director: "힐링 ASMR",
                year: '2018-4-17',
                summary:
                    `힐링이 되는 소리들, 기분좋은 느낌 '힐링 ASMR' 의 [일상속 다양한 소리들]
                바쁜 일상속, 힐링을 얻고자 하는 이들을 위한 소리 앨범으로 일상의 다양한 소리들을 담아내어 팅글(tingle)을 느끼게 해준다.
                작은 여유와 편안함을 느끼게 해주는 '힐링 ASMR'의 소리들과 함께 휴식같은 시간이 되어지길 바란다.`,
                genres: "뉴에이지",
                image: "https://image.bugsm.co.kr/album/images/original/201605/20160549.jpg?version=undefined",
                category: "백색소리",
                detail: "힐링;소리",
                link: "https://music.bugs.co.kr/track/31032368?wl_ref=list_tr_08_search",
                type: "music"
            },

            //================================================================================================================================
            //================================================================================================================================

            {
                id: 501,
                title: "잠 잘 오는 빗소리 - 부드러운 빗소리와 5분후 어두운 화면으로",
                director: "smilemedia",
                runtime: 600,
                summary: `깊은 수면  숙면을 위한  빗소리 영상 입니다. 
        오분 후엔 어두운 화면으로 변합니다. 
        숙면에 도움이 되신다면 구독 ~해주세요. 
        
        채널의 빗소리 영상은 불면증 개선 마음의 안정과 휴식을 위해 제작되었습니다.
        빗소리는 잠자기 전 청취하면 깊은 수면에 들게 도움을 줍니다.
        불면증으로 힘든 분들을 위해 지속적으로 제작하고 있습니다.
        그 외 공부할 때 집중을 위한 스터디 음악으로
        독서할 때 명상할 때 휴식을 위한 소리로 사용할 수 있습니다.
        채널을 찾는 구독자 여러분 모두에게 도움 되도록
        새로운 영상을 만들겠습니다. 행복한 시간 보내세요!`,
                image: "https://i.ytimg.com/vi/Egwxr9Hvls4/original.jpg",
                category: "백색소리",
                detail: "빗소리",
                link: "https://www.youtube.com/watch?v=Egwxr9Hvls4&t=8033s",
                type: "video",
                genres: "빗소리",
                year: "2018-6-17"
            },
            {
                id: 502,
                title: "조용한 새벽, 아무도 없는 공원, 쏟아지는 빗소리 ASMR",
                director: "피스풀모닝 Peaceful Morning",
                runtime: 420,
                summary:
                    `조용한 새벽, 아무도 없는 공원, 쏟아지는 빗소리
    
        늘 집중이 필요할 때 듣는 #빗소리 인데요.
        아무도 없는 새벽에 소나기처럼 쏟아지는 시원한 빗소리랍니다. 
        공부, 명상 등 집중이 필요할 때 활용하면 좋답니다. 
        
        📢 채널의 모든 동영상은 Peaceful Morning에 의해 직접 촬영된 영상입니다.  `,
                image: "https://i.ytimg.com/vi/HrO74lj5QBs/original.jpg",
                category: "백색소리",
                detail: "빗소리",
                link: "https://www.youtube.com/watch?v=HrO74lj5QBs&t=129s",
                type: "video",
                genres: "빗소리",
                year: "2020-9-23"
            },
            {
                id: 503,
                title: "서울대학교 도서관 백색소음 2시간",
                director: "백색소음",
                runtime: 180,
                summary:
                    `안녕하세요. J입니다 
    
        이 소리는 서울대학교 도서관 30분 버전을 
        반복해서 만든 2시간 버전의 백색소음입니다.
        녹음기를 가지고 처음 녹음했던 게 엊그제 같은데 
        벌써 2년이라는 시간이 흘렀습니다.
        오랜 시간이 지났음에도 꾸준히 해당 콘텐츠를 좋아해주시고,
        애용해주시는 모든 분들 언제나 감사합니다! :)
        
        다들 열공하세여!`,
                image: "https://i.ytimg.com/vi/InZ_XAs0-nM/maxresdefault.jpg",
                category: "백색소리",
                detail: "서울대학교",
                link: "https://www.youtube.com/watch?v=InZ_XAs0-nM",
                type: "video",
                genres: "서울대학교:도서관",
                year: "2016-9-26"
            },
            {
                id: 504,
                title: "백색 소음 (화이트 노이즈) 딥 스페이스 Sueno 8 시간 잠자는",
                director: "음악",
                runtime: 480,
                summary:
                    `연구 작업 등을 위해 악기 음악, 편안한 음악, 클래식 음악, 운동, 행복한 음악, 음악이 채널에서는 모든 종류의 음악을 찾을 수`,
                image: "https://i.ytimg.com/vi/xRuHxlUoy2s/maxresdefault.jpg",
                category: "백색소리",
                detail: "우주",
                link: "https://www.youtube.com/watch?v=xRuHxlUoy2s",
                type: "video",
                genres: "우주",
                year: "2016-6-13"
            },
            {
                id: 505,
                title: "흰색 소음기 전용 제트기",
                director: "Rain in the forest숲속의 비소리 새소리",
                runtime: 600,
                summary:
                    `흰색 소음기 전용 제트기 - 수면 또는 비행기 안에서 공부하는 비행기 소리 - 10 시간 동안 비행기 소음`,
                image: "https://i.ytimg.com/vi/L64t6tuJBXw/maxresdefault.jpg",
                category: "백색소리",
                detail: "비행기",
                link: "https://www.youtube.com/watch?v=L64t6tuJBXw",
                type: "video",
                genres: "비행기",
                year: "2018-7-5"
            },
            {
                id: 506,
                title: "텐트 안에서 듣는 빗소리 8시간",
                director: "dreamy sound",
                runtime: 480,
                summary:
                    `텐트에서 비가 내리는 소리에 대한 요청이 비교적 많았습니다. 전에 만들지 않고 이번에 만들고 업로드해서 죄송합니다. 텐트에서 내리는 빗소리가 정말 좋아요. 홍수가 날 정도의 비가 아니니 편하게 주무세요 ^^
    
        사용되는 프로그램 - 3dsmax
        - Premiere Pro
        - After effect
        - lumion
        - Photoshop`,
                image: "https://i.ytimg.com/vi/-N9rb2QDqrw/maxresdefault.jpg",
                category: "백색소리",
                detail: "텐트;빗소리",
                link: "https://www.youtube.com/watch?v=-N9rb2QDqrw&t=203s",
                type: "video",
                genres: "텐트;빗소리",
                year: "2020-9-15"
            },
            {
                id: 507,
                title: "ASMR 이런 카페 현실엔 없나요? 비 오는 밤, 부드러운 재즈가 흐르는 카페",
                director: "asmr soupe",
                runtime: 180,
                summary:
                    `수프 여러분, 안녕하세요!
        지난 모래시계 뽀모도로에서 휴식 시간에 나오는
        재즈 음악이 너무 좋다고 하신 분들이 많으셔서
        몇 곡 더 선곡해 음악만 따로 모아
        새로운 영상으로 만들어 봤어요.
        
        25/5 모래시계 뽀모도로 3시간
        수프™ 빗소리 패키지 + 쉬는 시간 분위기 좋은 재즈 음악
        25 /5 Pomodoro 3hr Session
    
        01:30:00 부터는 사람들이 모두 떠나고 
        음악과 빗소리만 들립니다. :)
        볼륨은 너무 크지 않게
        은은하게 들으시는 것을 추천합니다.
        
        수프가 준비한 아늑한 카페에서
        오늘도 편안한 밤 되세요.
        
        
        #재즈음악 #카페백색소음 #공부할때듣는
        
        `,
                image: "https://i.ytimg.com/vi/xym-gmq_rlw/maxresdefault.jpg",
                category: "백색소리",
                detail: "카페;빗소리;소음",
                link: "https://www.youtube.com/watch?v=xym-gmq_rlw",
                type: "video",
                genres: "카페;빗소리;소음",
                year: "2021-1-11"
            },
            {
                id: 508,
                title: "🔥 공부할 때 듣는 장작 타는 소리 / Fireplace sound",
                director: "카민Carmine",
                runtime: 180,
                summary:
                    `공부할 때 들으시면 차분하게 집중하도록 도와줄거에요.
    
        주의 : 침대에 누워서 듣지 말 것 😋`,
                image: "https://i.ytimg.com/vi/2TrgSww4Wf8/maxresdefault.jpg",
                category: "백색소리",
                detail: "장작타는소리",
                link: "https://www.youtube.com/watch?v=2TrgSww4Wf8",
                type: "video",
                genres: "장작타는소리",
                year: "2018-6-19"
            },
            {
                id: 509,
                title: "풀벌레 소리 ASMR 10분후소등",
                director: "숲이야기 김포스 Forest Story FosKim",
                runtime: 491,
                summary:
                    `예쁜 풀벌레소리 1시간 영상이후
        8시간으로 만들어 달라는 요청을 받아서 만들어보았습니다.
        한 분이라도 제 영상으로 도움이 된다면 영상 열심히
        만들자고 생각하고 있습니다ㅎ
        언제든 편하게 요청해주세요!
        그럼 꿀잠 주무세요!!!!
        (배경 소리도 다른 풀벌레 소리니 잡음이 아닙니다)
        
        Night Ambience Nature Crickets (8hours)`,
                image: "https://i.ytimg.com/vi/7ge_rh55RsA/maxresdefault.jpg",
                category: "백색소리",
                detail: "풀벌레",
                link: "https://www.youtube.com/watch?v=7ge_rh55RsA",
                type: "video",
                genres: "풀벌레",
                year: "2020-4-2"
            },
            {
                id: 510,
                title: "차에서 듣는 빗소리",
                director: "Healing Comma",
                runtime: 600,
                summary:
                    `차에서 듣는 빗소리, 자동차빗소리, 휴식 및 진정, 스트레스해소, 백색소음
    
        #빗소리#불면증#자동차빗소리
        
        때론 집 보다도 편한 자동차 그 안에서 들리는 
        빗소리를 듣고 있으면 마음이 진정이 됩니다.
        여러분들은 어떠신가요..?
        ------------------------------------------------------------------------------
        
        빗소리는 불면증이나 스트레스를 해소 하는 데 도움이 됩니다.
        그리고 정신 안정에 탁월한 효과가 있는 것은 백색소음 입니다.
        불면증으로 고생하고 있다면 이 영상을 보세요.
        숙면하시기 바랍니다.
        또한 비오는 소리는 사무실에서 
        공부하거나 휴식을 취하거나 일할 때 도움이 됩니다.
        
        여러분의 #힐링 에 작은 도움이 되었으면 합니다.
        달콤한 휴식과 달콤한 꿈을 꾸십시오.
        
        지칠 때 힘이 될 수 있는 채널이 될 수 있도록 최선을 다하겠습니다.
        영상을 시청해주신 모든 분들께 감사의 말씀을 전하고 싶습니다.
        좋은 하루 되세요.
        
        Thanks for watching!`,
                image: "https://i.ytimg.com/vi/F_FI-9rVXKA/maxresdefault.jpg",
                category: "백색소리",
                detail: "차;빗소리",
                link: "https://www.youtube.com/watch?v=F_FI-9rVXKA",
                type: "video",
                genres: "차;빗소리",
                year: "2021-5-1"
            },
            {
                id: 511,
                title: "비오는 날 캠프 파이어 – 빗소리, 장작 타는 소리",
                director: "dreamy sound",
                runtime: 600,
                summary:
                    `만약 당신이 비 오는 날 캠핑을 갔는데 비가온다면 불행일수 있지만 오히려 좋은 경험일수가 있습니다.
        비 내리는 운치있는 경치속에서 장작불을 피우고 빗소리를 들으면 캠핑의 참맛을 느낄수 있습니다.
        장작불 주변에 사람들이 모여서 대화를 나누는 것은 아주 좋을거 같습니다.
        만약 여름이라도 조금 추울수 있으니 겉옷을 하나 준비하는것은 필수입니다.
        
        저의 직업은 건축cg를 만드는 사람입니다.
        과거 유튜브 검색을 통해서 좋은 소리를 들으며 잠을 청했는데
        제가 직접 cg를 만들고 좋은 소리를 합쳐 좋은 ASMR 영상을 만들기로 했습니다.
        이 동영상이 시청자들에게 도움이 되기를 바랍니다.
        저의 비디오는 보통 3D 프로그램을 사용하여 만들어집니다.
        
        사용되는 프로그램 - 3dsmax
        - Premiere Pro
        - After effect
        - lumion
        - Photoshop`,
                image: "https://i.ytimg.com/vi/J5CeR3LrxbE/maxresdefault.jpg",
                category: "백색소리",
                detail: "비;장작",
                link: "https://www.youtube.com/watch?v=J5CeR3LrxbE",
                type: "video",
                genres: "비;장작",
                year: "2020-5-7"
            },
            {
                id: 512,
                title: "ASMR 수프가 엄선한 장작 타는 소리 3시간",
                director: "asmr soupe",
                runtime: 180,
                summary:
                    `수프 애청자, 구독자 여러분! 
        기존 영상에 장작 타는 소리는
        해리 포터나 반지의 제왕, 찰리와 초콜릿 공장 등 
        다양한 곳에서 분위기를 연출하기 위해 활용을 했었는데요,
        
        장작 타는 소리만 올린 적은 없는 것 같아
        이번엔 모닥불 소리만 오롯이
        3시간 동안 들려 드리는 영상을 제작해 보게 됐답니다.
        
        장작 타는 소리가 다 비슷하지뭐!라 생각하지 않고
        세심하게 소리를 선별하고 믹싱해
        꽤 마음에 드는 결과물을 얻은 것 같아요.
        
        공부하실 때도 사용하기 좋게
        타이머도 처음으로 넣어 보았습니다.
        
        볼륨은 각자의 취향과 목적에 맞게 조정한 뒤 들어 주세요!
        볼륨의 크기에 따라 느낌이 완전 다르게 느껴지실 거예요.
        
        잘 때 아주 작게 해서 들으니 잠이 솔솔 너무 잘 오구요
        조금 크게 해서 책 읽을 때 들으니 집중이 정말 잘 되는
        빗소리만큼 만능의 백색 소음이라는 생각이 들었답니다! :)`,
                image: "https://i.ytimg.com/vi/6ZSbWQkIYsU/maxresdefault.jpg",
                category: "백색소리",
                detail: "장작;캠프",
                link: "https://www.youtube.com/watch?v=6ZSbWQkIYsU",
                type: "video",
                genres: "장작;캠프",
                year: "2020-8-20"
            },
            {
                id: 513,
                title: "자연의소리 힐링사운드 숲속 새소리 바람소리 휴식명상",
                director: "smilemedia",
                runtime: 180,
                summary:
                    `오후 무렵 숲속에서 하늘을 보며 ~ 반짝이는 잎과 숲속의 새소리 
        바람소리 를 느끼며 힐링 명상 휴식 하는 영상 입니다. 눈에 부담없는 
        연한 나뭇잎이 햇빛에 반짝이는 연속으로 마음의 안정과  힐링 휴식을  취할수 있게 도움을 주는 영상입니다. 
         2시간 연속 버전 이고  백색소음 집중 공부  소리로 활용해도 될것 
        같습니다.`,
                image: "https://i.ytimg.com/vi/FtcFhABKdMY/maxresdefault.jpg",
                category: "백색소리",
                detail: "자연;숲;새",
                link: "https://www.youtube.com/watch?v=FtcFhABKdMY",
                type: "video",
                genres: "자연;숲;새",
                year: "2015-7-27"
            },
            {
                id: 514,
                title: "시험기간 필수 ASMR",
                director: "공부의신 강성태",
                runtime: 300,
                summary:
                    `#음악ASMR #빗소리ASMR # 강성태ASMR`,
                image: "https://i.ytimg.com/vi/Whx3bzrcr3c/maxresdefault.jpg",
                category: "백색소리",
                detail: "비;영화음악",
                link: "https://www.youtube.com/watch?v=Whx3bzrcr3c",
                type: "video",
                genres: "비;영화음악",
                year: "2019-6-30"
            },
            {
                id: 515,
                title: "[집중력 높이는 소리] 밤의 숲 소리 효과음 백색소음 ASMR ",
                director: "공부의신 강성태",
                runtime: 600,
                summary:
                    `10시간짜리 밤의 숲 ASMR~
        공부할 때 들어봐!`,
                image: "https://i.ytimg.com/vi/X66fLliWRgg/maxresdefault.jpg",
                category: "백색소리",
                detail: "밤;숲;벌레",
                link: "https://www.youtube.com/watch?v=X66fLliWRgg",
                type: "video",
                genres: "밤;숲;벌레",
                year: "2017-4-6"
            },

        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('contents', null, {});
    }
};
