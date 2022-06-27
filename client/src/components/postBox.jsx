import React from "react";
import style from "./postBox.module.css";
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const SERVICES_POSTS = [
    {
        image:"/landingPage_image/landingPage_4/addList.png",
        title: 'MAKE',
        description:
            `나만 알고 있기에 아까운 컨텐츠를 리스트로 만들어 보세요. 나만의 리스트를 간직하고 아낌없이 다른 사람들과 나눌 수 있습니다.`,
    },
    {
        image:"/landingPage_image/landingPage_4/shareList.png",
        title: 'SHARE',
        description:
            `아직 Allforyou를 사용하지 않는 지인들에게 추천하고 싶은 리스트가 있어도 문제없이 링크, 카카오톡 공유로 쉽게 공유가 가능합니다.`,
    },
    {
        image:"/landingPage_image/landingPage_4/commentList.png",
        title: 'COMMUNICATE',
        description:
            `마음에 든 리스트와 컨텐츠를 발견했을 때, 이를 주제로 누군가와 소통하고 공감을 하고 싶으신가요? 좋아요와 댓글 기능을 통해 소통이 가능합니다.`,
    },
];

const PostBox = () => {
    const animatedItem = {
		0: useScrollFadeIn('up', 0.5, 0),
		1: useScrollFadeIn('up', 1, 0.3),
		2: useScrollFadeIn('up', 1, 0.5),
	};

    return (
        <>
        {SERVICES_POSTS.map((post, index) => (
            <li className={style.postBox} key={post.title} {...animatedItem[index]}>
                <img className={style.image} src={post.image} alt="image" />
                <div className={style.textBox}>
                    <p className={style.postTitle}>{post.title}</p>
                    <p className={style.postDescription}>{post.description}</p>
                </div>
            </li>
        ))}
    </>
    )
};

export default PostBox;
