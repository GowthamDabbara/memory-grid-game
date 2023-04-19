import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { BoxGreen, BoxGreenTwo } from "./styled";

const Greencard = ({ clicked, sameLevel, hideCardsCB }) => {
	const [hideCards, setHideCards] = useState(hideCardsCB() ? 1 : 0);

	// const hideGreenCards = ({ completed }) => {
	// 	if (completed) {
	// 		setHideCards(1);
	// 		return <></>;
	// 	} else {
	// 		return <></>;
	// 	}
	// };

	// const gameArea = React.useMemo(
	// 	() => (
	// 		<>
	// 			{/* <Countdown date={Date.now() + 2900} renderer={hideGreenCards} /> */}
	// 			<BoxGreen hideCards={hideCards} clicked={clicked}></BoxGreen>
	// 			<BoxGreenTwo clicked={clicked}></BoxGreenTwo>
	// 		</>
	// 	),
	// 	[hideCards, clicked]
	// );

	const tempFunc = () => {
		let timerId = setInterval(() => {
			if (hideCardsCB()) {
				setHideCards(1);
			}
			console.log("mango");
		}, 100);
		if (hideCards) {
			clearTimeout(timerId);
		}
		// hideCardsCB not returning 1 after useeffect change.
	};

	useEffect(() => {
		// tempFunc();

		if (hideCards === 0) {
			console.log("inside green card");
			hideCardsCB() ? setHideCards(1) : tempFunc();
		}
	}, []);

	return (
		<>
			{/* {gameArea} */}
			{/* <Countdown date={Date.now() + 2900} renderer={hideGreenCards} /> */}
			<BoxGreen
				sameLevel={1}
				hideCards={hideCards}
				clicked={clicked}
			></BoxGreen>
			<BoxGreenTwo clicked={clicked}></BoxGreenTwo>
		</>
	);
};

export default Greencard;
