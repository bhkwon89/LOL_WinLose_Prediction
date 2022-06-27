import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import style from "./forYouEdit.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { setMessageModal } from '../action/index';
import { useNavigate } from "react-router-dom";
import EditorComponent from "../components/editorComponent.jsx";
import ReSearchList from "../components/reSearchList";
import ReCartList from "../components/reCartList";

const ForYouEdit = ({ post }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { title, category, text, image } = post
    const fileInput = useRef(null);
    const [files, setFiles] = useState([]); //이미지 화면 띄우기
    const [imageEdit, setImageEdit] = useState([]); //이미지 파일 server 보내기
    const [categoryEdit, setCategoryEdit] = useState(category);
    const [titleEdit, setTitleEdit] = useState(title);
    const [textEdit, setTextEdit] = useState(text);
    const [search, setSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [list, setList] = useState([]);

    const content_id = list.map((el) => {
        return el.id
    })

    const handleText = (value) => {
        setTextEdit(value)
    }

    const fileHandle = (e) => {
        setImageEdit(e.target.files[0]);
        setFiles(URL.createObjectURL(e.target.files[0]))
    };

    const handleDeleteList = (title) => {
        const currentList = list.filter((el) =>
            el.title !== title)
        setList([...currentList])
    }

    const handleAddList = (content) => {
        if (!list.map((el) => el.id).includes(content.id)) {
            setList([...list, content])
        }
        else {
            dispatch(setMessageModal(true, '이미 추가된 리스트입니다.'));
        }
    }

    const uploadImage = (e) => {
        e.preventDefault();
        fileInput.current.click();
    };

    //search axios
    const handleSearchText = e => {
        setSearch(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    }
    const searchHandler = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/search?query=${search}`)
            .then(res => {
                setResultSearch(res.data.data);
            })
            .catch(err => {
                alert(err)
            });
    };

    const getContent = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/reviews/content/${post.id}`)
            .then((res) => {
                if (res.status === 200) {
                    setList(res.data.data);
                }
            })
            .catch((err) => {
                alert(err)
            });
    }

    //'등록'버튼 클릭시
    function submitForm(e) {
        e.preventDefault();
        if (
            titleEdit === '' ||
            textEdit === '' ||
            categoryEdit === '' ||
            content_id.length === 0
        ) {
            dispatch(setMessageModal(true, '빈 항목이 있습니다.'));
            return;
        } else {
            const formData = new FormData();
            formData.append('title', titleEdit);
            formData.append('category', categoryEdit);
            formData.append('text', textEdit); //글 소개
            formData.append('content_id', content_id); //컨텐츠 리스트 id 배열
            formData.append('img', imageEdit);

            axios
                .patch(`${process.env.REACT_APP_SERVER_URL}/reviews/${post.id}`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                .then(() => {
                    navigate('/foryou');
                    dispatch(setMessageModal(true, '게시글 수정이 완료되었습니다.'));
                })
                .catch((err) => {
                    alert(err)
                });
        }
    }

    useEffect(() => {
        getContent()
    }, [])

    return (
        <div className={style.container}>
            <div className={style.writingBox}>
                <p className={style.menu_p}>리스트 작성</p>
                <div className={style.imgBox}>
                    {files.length === 0 ? (
                        <img
                            className={style.img}
                            src={image}
                        />) : (<img
                            className={style.img}
                            src={files}
                        />)}
                    <input
                        className={style.imgFile}
                        type="file"
                        accept='image/*'
                        onChange={fileHandle}
                        ref={fileInput}
                    />
                    <button
                        className={style.btnImg}
                        onClick={uploadImage}
                    >사진 업로드</button>
                </div>
                <div className={style.titleBox}>
                    <div className={style.select}>
                        <p className={style.category_p}>카테고리</p>
                        <select
                            className={style.category}
                            name="category"
                            value={categoryEdit}
                            onChange={(e) => setCategoryEdit(e.target.value)}
                        >
                            <option value="동기부여를 받고 싶다면?">동기부여를 받고 싶다면 ?</option>
                            <option value="도전하고 싶은 나에게">도전하고 싶은 나에게</option>
                            <option value="현재 나의 상황에 멘토를 원하시나요?">현재 나의 상황에 멘토를 원하시나요 ?</option>
                            <option value="마음속 편안함을 찾는다면?">마음속 편안함을 찾는다면 ?</option>
                            <option value="생각없이 웃고 싶다면?">생각없이 웃고 싶다면 ?</option>
                            <option value="오늘 한 없이 눈물을 쏟고 싶다면?">오늘 한 없이 눈물을 쏟고 싶다면 ?</option>
                            <option value="백색소리">백색소리</option>
                        </select>
                    </div>
                    <div className={style.title}>
                        <p className={style.title_p}>제목</p>
                        <input
                            className={style.input}
                            type="text"
                            placeholder="제목을 입력해주세요"
                            value={titleEdit}
                            onChange={(e) => setTitleEdit(e.target.value)}
                        />
                    </div>
                </div>
                <div className={style.textBox}>
                    <p className={style.text_p}>소개글 입력</p>
                    <EditorComponent
                        value={textEdit}
                        onChange={handleText}
                    />
                </div>
                <div className={style.listBox}>
                    <p className={style.list_p}>리스트 만들기</p>
                    <div className={style.listAddBox}>
                        <div className={style.leftBox}>
                            <div className={style.searchBox}>
                                <input
                                    className={style.search}
                                    type="search"
                                    placeholder='키워드 또는 타이틀'
                                    onKeyPress={onKeyPress}
                                    onChange={handleSearchText}
                                />
                                <button
                                    className={style.btnSearch}
                                    onClick={() => searchHandler()}
                                >검색</button>
                            </div>
                            <div className={style.addListBox_search}>
                                <div className={style.listHeader}>
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                <ReSearchList
                                    resultSearch={resultSearch}
                                    handleAddList={handleAddList}
                                />
                            </div>
                        </div>
                        <div className={style.rightBox}>
                            <div className={style.addListBox_addlist}>
                                <div className={style.listHeader}>
                                    <span className={style.list_title}>타이틀</span>
                                    <span className={style.list_part}>구분</span>
                                </div>
                                {list.map((content, idx) => {
                                    return <ReCartList
                                        key={idx}
                                        handleDeleteList={handleDeleteList}
                                        content={content}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.buttonBox}>
                    <button
                        className={style.btnOk}
                        onClick={submitForm}
                    >수정</button>
                    <button
                        className={style.btnCancle}
                        onClick={() => navigate('/foryou')}
                    >취소</button>
                </div>
            </div>
        </div >
    );
};

export default ForYouEdit;