import React, { useState, useEffect } from "react";
import { BoxGreen, BoxGreenTwo } from "./styled";

const GreenCard = ({ clicked, sameLevel, hideCardsCB, alreadyClick }) => {
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
		}, 150);
	};

	useEffect(() => {
		hideCardsCB() ? setHideCards(1) : tempFunc();
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

export default GreenCard;
