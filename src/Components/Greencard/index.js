import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { BoxGreen, BoxGreenTwo } from "./styled";

const Greencard = ({ clicked, sameLevel, hideCardsCB, alreadyClick }) => {
	const [hideCards, setHideCards] = useState(hideCardsCB() ? 1 : 0);
	const [makeItNone, setMakeItNone] = useState(hideCardsCB() ? 1 : 0);

	const ctrlCard = () => {
		setMakeItNone(1);
	};

	const tempFunc = () => {
		let timerId = setInterval(() => {
			if (hideCardsCB()) {
				setHideCards(1);
				clearInterval(timerId);
				setTimeout(() => {
					ctrlCard();
				}, 150);
			}
		}, 300);

		setTimeout(() => {
			clearInterval(timerId);
		}, 4000);
	};

	useEffect(() => {
		if (hideCards === 0) {
			hideCardsCB() ? setHideCards(1) : tempFunc();
		}
	}, []);

	return (
		<>
			<BoxGreen
				sameLevel={sameLevel}
				hideCards={hideCards}
				clicked={clicked}
				makeItNone={makeItNone}
			></BoxGreen>
			<BoxGreenTwo
				key={Math.random()}
				alreadyClick={alreadyClick}
				clicked={clicked}
			></BoxGreenTwo>
		</>
	);
};

export default Greencard;
