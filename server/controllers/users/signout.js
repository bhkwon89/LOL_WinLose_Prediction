module.exports = (req, res) => {
    try {
      return res.clearCookie("jwt").status(205).json({ message: "로그아웃에 성공했습니다." });
    } 
    catch {
      return res.status(500).json({ message: "서버 오류." });
    }
  };