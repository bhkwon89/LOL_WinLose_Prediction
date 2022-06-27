import React, {useEffect, useState} from "react";
import style from "./landingPage_4.module.css";
import PostBox from "../../components/postBox";

const LandingPage_4 = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		// 컴포넌트가 언마운트 되기 직전에 이벤트를 끝낸다. 메모리 누수 방지
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

return (
	<div className={style.container}>
		<div className={style.wrapper}>
			<p className={style.title}>For U에서 직접 리스트를 만들고 공유, 공감을 나눠보세요.</p>
			<ul className={style.postWrapper}>
				<PostBox />
			</ul>
		</div>
	</div>
	);
};

export default LandingPage_4;
