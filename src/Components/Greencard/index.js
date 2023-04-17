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

	const runtemp = () => {
		while (0) {
			if (hideCardsCB() === 0) {
				continue;
			}
			console.log("inside while");
			break;
		}
	};

	useEffect(() => {
		if (hideCards === 0) {
			runtemp();
			// while (1) {
			// 	if (hideCardsCB() === 1)
			// 		continue;
			// 	}
			// 	setHideCards(1);
			// 	break;
			// }
			sameLevel
				? hideCardsCB()
					? setHideCards(1)
					: setTimeout(() => {
							setHideCards(1);
					  }, 1000)
				: setTimeout(() => {
						setHideCards(1);
				  }, 3000);
		}
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
