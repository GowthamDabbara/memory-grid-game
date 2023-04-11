import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { BoxGreen } from "./styled";

const Greencard = ({ clicked }) => {
	const [hideCards, setHideCards] = useState(0);

	const hideGreenCards = ({ completed }) => {
		if (completed) {
			setHideCards(1);
			return <></>;
		} else {
			return <></>;
		}
	};

	return (
		<>
			{clicked ? "" : ""}
			<Countdown date={Date.now() + 3000} renderer={hideGreenCards} />
			<BoxGreen hideCards={hideCards} clicked={clicked}></BoxGreen>
		</>
	);
};

export default Greencard;
