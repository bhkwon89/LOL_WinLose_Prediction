import React, { useRef, useState, useEffect } from "react";
import style from "./landingPage_3.module.css";
import Carousel from '../../components/carousel';
import useScrollCount from '../../hooks/useScrollCount'

const LandingPage_3 = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const countUserNumber = useScrollCount({ end: 1853, start: 1085, duration: 30 });
	const countContentsNumber = useScrollCount({ end: 1000, start: 689, duration: 20 });

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
			<div className={style.content}>
				<div className={style.countMessage}>
					<div className={style.countBox}>
						<div className={style.contentsCounter} {...countContentsNumber} />
						<div className={style.contentsText}>개 이상의 컨텐츠를</div>
						<div className={style.userCounter} {...countUserNumber} />
						<div className={style.userText}>명의 유저들의</div>
					</div>
					<div className={style.text}>카테고리 별로 경험을 담긴 추천하는 리스트를 확인해보세요.</div>
				</div>
			</div>
			<div>
				<Carousel />
			</div>
		</div>
	);
};

export default LandingPage_3;
