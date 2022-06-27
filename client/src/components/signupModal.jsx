import React, { useState } from "react";
import style from "./signupModal.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signupModal, loginModal, setMessageModal } from "../action";

const SignupModal = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [signupInfo, setSignUpInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    repassword: "",
  });

  const handleInputValue = (key) => (e) => {
    setSignUpInfo({ ...signupInfo, [key]: e.target.value });
  };

  const handleSignUp = () => {
    const { email, nickname, password, repassword } = signupInfo;
    if (!email || !nickname || !password || !repassword) {
      setErrorMessage("이메일, nickname, 비밀번호 모두 다 입력해야합니다.");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
    } else if (password.length < 8 || repassword.length < 8) {
      setErrorMessage("비밀번호는 8글자 이상이어야합니다.");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
    } else if (repassword !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
    } else {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/users/signup`, signupInfo)
        .then((res) => {
          if (res.status === 201) {
            handleModal();
            dispatch(signupModal(false));
            dispatch(loginModal(false));
            dispatch(setMessageModal(true, "회원가입이 완료되었습니다."));
          }
        })
        .catch((err) => {
          if (err.response.data === "이메일 중복입니다.") {
            setErrorMessage("이미 사용하고 있는 이메일입니다");
            setTimeout(function () {
              setErrorMessage("");
            }, 3000);
          } else if (err.response.data === "닉네임 중복입니다.") {
            setErrorMessage("이미 사용하고 있는 닉네임입니다");
            setTimeout(function () {
              setErrorMessage("");
            }, 3000);
          }
        });
    }
  };

  const handleModal = () => {
    dispatch(signupModal(false));
    dispatch(loginModal(true));
  };

  const EnterSignup = (e) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  const modalOutSide = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(signupModal(false));
    }
  };

  const handleCancelBtn = () => {
    dispatch(signupModal(false));
  };

  return (
    <div className={style.body} onClick={modalOutSide}>
      <div className={style.container}>
        <button className={style.cancelBox}>
          <img
            className={style.cancelBtn}
            src="/image/x_icon.png"
            onClick={handleCancelBtn}
          />
        </button>
        <img
          className={style.img}
          src="/image/logo(background-white).png"
          alt=""
        />
        <input
          className={style.myInfo}
          type="text"
          placeholder="이메일"
          required
          onChange={handleInputValue("email")}
        />
        <div className={style.itemText}>이메일</div>
        <input
          className={style.myInfo}
          type="text"
          placeholder="닉네임"
          required
          onChange={handleInputValue("nickname")}
        />
        <div className={style.itemText}>닉네임</div>
        <input
          className={style.myInfo}
          type="password"
          placeholder="비밀번호"
          required
          onChange={handleInputValue("password")}
        />
        <div className={style.itemText}>비밀번호</div>
        <input
          className={style.myInfo}
          type="password"
          placeholder="비밀번호 확인"
          required
          onChange={handleInputValue("repassword")}
        />
        <div className={style.itemText}>비밀번호 확인</div>
        <button className={style.membership} onClick={handleSignUp}>
          회원가입
        </button>
        <span className={style.message}>{errorMessage}</span>
        <span className={style.login_text}>
          이미 All For You 회원이신가요 ?
        </span>
        <button className={style.login_bnt} onClick={handleModal}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
