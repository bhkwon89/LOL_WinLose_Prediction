import React, { useState, useRef } from "react";
import style from "./mypageUpdate.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setUpdateInfo, setMessageModal } from "../action";
import axios from "axios";

function MyPgaeUpdate() {
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const { emaildata } = useSelector((state) => state.loginReducer);
  const { nickname } = useSelector((state) => state.loginReducer);
  const { profileImage } = useSelector((state) => state.loginReducer);

  const [errorMessage, setErrorMessage] = useState("");
  const [updateInfo, setUpdataeInfo] = useState({
    nickname: "",
    password: "",
    repassword: "",
  });
  const [files, setFiles] = useState(profileImage); //이미지 화면 띄우기
  const [image, setImage] = useState([]); //이미지 파일 server 보내기

  const fileHandle = (e) => {
    setImage(e.target.files[0]);
    setFiles(URL.createObjectURL(e.target.files[0]));
  };

  const uploadImage = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  const handleInputValue = (key) => (e) => {
    setUpdataeInfo({ ...updateInfo, [key]: e.target.value });
  };

  function submitForm(e) {
    e.preventDefault();
    const { nickname, password, repassword } = updateInfo;
    if (!nickname || !password || !repassword) {
      setErrorMessage("nickname, 비밀번호 모두 다 입력해야합니다.");
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
      const formData = new FormData();
      formData.append("nickname", nickname);
      formData.append("password", password);
      formData.append("img", image);

      axios
        .patch(`${process.env.REACT_APP_SERVER_URL}/users/mypage`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          dispatch(setUpdateInfo(false));
          dispatch(setMessageModal(true, "회원정보 수정이 완료되었습니다."));
          window.location.reload("/");
        })
        .catch((err) => {
          if (err.response.status === 409) {
            setErrorMessage("이미 사용하고 있는 닉네임입니다");
            setTimeout(function () {
              setErrorMessage("");
            }, 3000);
          }
        });
    }
  }

  const handleUpdateModal = () => {
    dispatch(setUpdateInfo(false));
  };

  const modalOutSide = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(setUpdateInfo(false));
    }
  };

  const handleCancelBtn = () => {
    dispatch(setUpdateInfo(false));
  };

  return (
    <div className={style.body} onClick={modalOutSide}>
      <div className={style.container}>
        <button className={style.cancelBox}>
          <img
            className={style.xBtn}
            src="/image/x_icon.png"
            onClick={handleCancelBtn}
          />
        </button>
        <div className={style.imgBox}>
          <img className={style.img} src={files} />
          <input
            className={style.imgFile}
            type="file"
            accept="image/*"
            onChange={fileHandle}
            ref={fileInput}
          />
          <button className={style.imgUpdate} onClick={uploadImage}>
            변경
          </button>
        </div>
        <div className={style.itemText}>아이디</div>
        <div className={style.emailText}>{emaildata}</div>
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
        <span className={style.message}>{errorMessage}</span>
        <button className={style.cancel_bnt} onClick={handleUpdateModal}>
          취소하기
        </button>
        <button className={style.update_bnt} onClick={submitForm}>
          수정하기
        </button>
      </div>
    </div>
  );
}

export default MyPgaeUpdate;
