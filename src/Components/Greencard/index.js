import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { BoxGreen, BoxGreenTwo } from "./styled";

const Greencard = ({ clicked, sameLevel, hideCardsCB }) => {
	const [hideCards, setHideCards] = useState(hideCardsCB() ? 1 : 0);

	const tempFunc = () => {
		let timerId = setInterval(() => {
			if (hideCardsCB()) {
				setHideCards(1);
				clearInterval(timerId);
			}
		}, 1000);

		setTimeout(() => {
			clearInterval(timerId);
		}, 4000);
		// hideCardsCB not returning 1 after useeffect change.
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
			></BoxGreen>
			<BoxGreenTwo clicked={clicked}></BoxGreenTwo>
		</>
	);
};

export default Greencard;
