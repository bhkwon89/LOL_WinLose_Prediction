const { reviews } = require('../../models');

module.exports = async (req, res) => {
    const id = req.cookies.id;
    try {
        let { offset, limit } = req.query;

        // 페이지네이션 : 리미트의 기본 조회 값은 10 이다.
        if (isNaN(limit)) limit = 10;
        else {
            if (limit < 1) limit = 1;
            else limit = Number(limit);
        }

        const total = await reviews.count();
        const lastPage = Math.ceil(total / limit);

        // 페이지네이션 : 오프셋은 문자, 음수 조회 시 최소값으로, 페이지 범위 초과 조회 시 최대값으로 적용된다.
        if (isNaN(offset) || Number(offset) < 1) offset = 1;
        else if (Number(offset) > lastPage) offset = lastPage;
        else offset = Number(offset);

        const myReview = await reviews.findAndCountAll({
            where: { user_id: id },
            order: [['updatedAt', 'DESC']],
            offset: (offset - 1) * limit,
            limit: limit
        });

        // 모든 게시물을 반환한다.
        return res.status(200).json({ data: { count: myReview.count, page: offset, row: myReview.rows }, message: "내 리뷰리스트 전달 완료." });
    } catch (err) {
        return res.status(500).json({ data: err, message: "서버 오류." })
    }
};
