import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { BoxGreen, BoxGreenTwo } from "./styled";

const Greencard = ({ clicked }) => {
	const [hideCards, setHideCards] = useState(0);

	// const hideGreenCards = ({ completed }) => {
	// 	if (completed) {
	// 		setHideCards(1);
	// 		return <></>;
	// 	} else {
	// 		return <></>;
	// 	}
	// };

	useEffect(() => {
		setTimeout(() => {
			setHideCards(1);
		}, 3000);
	}, []);

	return (
		<>
			{/* <Countdown date={Date.now() + 2900} renderer={hideGreenCards} /> */}
			<BoxGreen hideCards={hideCards} clicked={clicked}></BoxGreen>
			<BoxGreenTwo clicked={clicked}></BoxGreenTwo>
		</>
	);
};

export default Greencard;
