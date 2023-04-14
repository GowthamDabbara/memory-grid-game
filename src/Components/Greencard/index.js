import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { BoxGreen, BoxGreenTwo } from "./styled";

const Greencard = ({ clicked, sameLevel }) => {
	const [hideCards, setHideCards] = useState(sameLevel ? 1 : 0);

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

	useEffect(() => {
		// console.log("clickable", clickable);
		// sameLevel ? setHideCards(1) : <></>;
		// console.log("same Level", sameLevel);
		setTimeout(() => {
			setHideCards(1);
		}, 3000);
	}, []);

	return (
		<>
			{/* {gameArea} */}
			{/* <Countdown date={Date.now() + 2900} renderer={hideGreenCards} /> */}
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
