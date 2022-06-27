import React, { useCallback, useState } from "react";
import style from "./login.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  loginModal,
  signupModal,
  setGoogleLogin,
  setKakaoLogin,
  setMessageModal,
} from "../action/index";

const Login = () => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  const [failMessage, setFailMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginModal = () => {
    dispatch(loginModal(false));
  };

  const checkEmail = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }
    return false;
  };

  const handleLogin = () => {
    const userData = { email, password };
    if (!email || !password) {
      setFailMessage(true);
      setTimeout(function () {
        setFailMessage(false);
      }, 3000);
    } else {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/users/signin`, userData)
        .then((res) => {
          dispatch(login(true));
          setEmail("");
          setPassword("");
          handleLoginModal();
          dispatch(setMessageModal(true, "정상적으로 로그인 되었습니다."));
          window.location.reload("/");
        })
        .catch((err) => {
          if (err.response.data.message === "존재하지 않는 계정입니다.") {
            setErrorMessage("존재하지 않는 계정입니다.");
            setTimeout(function () {
              setErrorMessage("");
            }, 3000);
          } else if (
            err.response.data.message === "비밀번호가 일치하지 않습니다."
          ) {
            setErrorMessage("올바른 비밀번호가 아닙니다.");
            setTimeout(function () {
              setErrorMessage("");
            }, 3000);
          }
        });
    }
  };

  const modalOutSide = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(loginModal(false));
    }
  };

  const handleClick = useCallback(() => {
    if (email === "") {
      setErrorMessage("이메일을 입력해주세요.");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
    } else if (!checkEmail(email)) {
      setErrorMessage("올바른 메일 양식으로 입력해주세요.");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
      return;
    } else if (password === "") {
      setErrorMessage("비밀번호를 입력해주세요.");
      setTimeout(function () {
        setErrorMessage("");
      }, 3000);
    } else {
      handleLogin();
      setErrorMessage("");
      return;
    }
  }, [email, password, errorMessage]);

  const handleSignup = () => {
    dispatch(signupModal(true));
    dispatch(loginModal(false));
  };

  const handlekakaoLogin = async () => {
    await window.location.assign(
      `${process.env.REACT_APP_SERVER_URL}/users/kakao`
    );
    dispatch(login(true));
    dispatch(loginModal(false));
    dispatch(setKakaoLogin(true));
    dispatch(setMessageModal(true, "정상적으로 로그인 되었습니다."));
  };

  const handlegoogleLogin = async () => {
    await window.location.assign(
      `${process.env.REACT_APP_SERVER_URL}/users/google`
    );
    dispatch(login(true));
    dispatch(loginModal(false));
    dispatch(setGoogleLogin(true));
    dispatch(setMessageModal(true, "정상적으로 로그인 되었습니다."));
  };

  const handleCancelBtn = () => {
    dispatch(loginModal(false));
  };

  return (
    <>
      <div className={style.body} onClick={modalOutSide}>
        <div className={style.container}>
          <button className={style.cancelBox}>
            <img
              className={style.cancelBtn}
              src="/image/x_icon.png"
              onClick={handleCancelBtn}
            />
          </button>
          <img className={style.logo} src="/image/logo(background-white).png" />
          <input
            className={style.myInfo}
            type="text"
            placeholder="이메일"
            // value={email}
            onChange={onChangeEmail}
          />
          <div className={style.itemText}>이메일</div>
          <input
            className={style.myInfo}
            type="password"
            placeholder="비밀번호"
            // value={password}
            onChange={onChangePassword}
          />
          <div className={style.itemText}>비밀번호</div>
          <button className={style.loginButton} onClick={() => handleClick()}>
            로그인
          </button>
          <span className={style.message}>{errorMessage}</span>
          <span className={style.oauth_message}>
            SNS 계정으로 간편 로그인 / 회원가입
          </span>
          <button className={style.google} onClick={handlegoogleLogin}>
            <img className={style.google_icon} src="/image/google_icon.png" />
          </button>
          <button className={style.kakao} onClick={handlekakaoLogin}>
            <img className={style.kakao_icon} src="/image/kakao_icon.png" />
          </button>
          <span className={style.membership}>
            All for you의 회원이 아니신가요?
          </span>
          <button className={style.membership_btn} onClick={handleSignup}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
