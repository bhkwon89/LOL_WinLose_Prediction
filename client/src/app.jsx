import "./app.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./page/mainPage";
import MyPage from "./page/myPage";
import ForYou from "./page/forYou";
import Contents from "./page/contents";
import Login from "./page/login";
import MyReviewsDetail from "./page/myReviewsDetail";
import MyLikesDetail from "./page/myLikesDetail";
import SignupModal from "./components/signupModal";
import ContentsModal from "./components/contentsModal";
import ForuModal from "./components/foruModal";
import ResponsiveNav from "./components/responsiveNav";

import ForYouWriting from "./page/forYouWriting";
import ForYouView from "./page/forYouView";
import axios from "axios";
import ForYouEdit from "./page/forYouEdit";

axios.defaults.withCredentials = true;

function App() {
  const { isModal } = useSelector((state) => state.loginModalReducer);
  const { isState } = useSelector((state) => state.signupModalReducer);
  const { isLogin } = useSelector((state) => state.loginReducer);
  const foru = useSelector((state) => state.foruReducer);
  const { messageModal, post } = foru;

  return (
    <BrowserRouter>
      <Nav />
      <ResponsiveNav />
      {/* <ContentsModal /> */}
      {isModal === true && isState === false ? <Login /> : null}
      {isState === true ? <SignupModal /> : null}
      <ForuModal
        isOpen={messageModal.isModalOpen}
        content={messageModal.content}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/foryou" element={<ForYou isLogin={isLogin} />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/foryouwriting" element={<ForYouWriting />} />
        <Route
          path="/foryouview/:reviewId"
          element={<ForYouView post={post} isLogin={isLogin} />}
        />
        <Route path="/foryouedit" element={<ForYouEdit post={post} />} />
        <Route path="/reviewsdetail" element={<MyReviewsDetail />} />
        <Route path="/likesdetail" element={<MyLikesDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
