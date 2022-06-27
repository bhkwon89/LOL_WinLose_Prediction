import React, { useCallback, useLayoutEffect, useRef } from 'react';

const useScrollCount = ({ end, start, duration }) => {
    const element = useRef();
	const countTime = Math.abs(Math.floor(duration / (end - start)));

	const onScroll: IntersectionObserverCallback = useCallback(
		([entry]) => {
			const { current }: React.RefObject = element;

			//화면이랑 교차 되는 시점에 시작한다.
			if (entry.isIntersecting && current) {
				let currentNumber = start;
				const counter = setInterval(() => {
					currentNumber += 1;
					current.innerHTML = currentNumber;

					if (currentNumber === end) {
						//count stop
						clearInterval(counter);
					}
				}, countTime);
			}
		},
		[end, start, element, countTime],
	);

	useLayoutEffect(() => {
		let observer;

        const { current }: React.RefObject = element;

		if (current) {
			observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
			//옵져버 시작
			observer.observe(current);
		}

		//옵져버 중지
		return () => observer && observer.disconnect();
	}, [onScroll]);

	return {
		ref: element,
	};
}

export default useScrollCount;

// useScrollCount.defaultProps = {
// 	delay: 0,
// };