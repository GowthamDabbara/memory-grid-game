import React from "react";
import { useState, useEffect, useCallback } from "react";
import Countdown from "react-countdown";
import Greencard from "../Greencard";
import Redcard from "../Redcard";
import { Box } from "./styled";

const Card = ({
	value,
	restartCB,
	boxSize,
	cardFoundCB,
	darkMode,
	sameLevel,
	keys,
	hideCardsCB,
	click,
}) => {
	const [clicked, setClicked] = useState(click);
	const [redClicked, setRedClicked] = useState(0);
	const [clickable, setClickable] = useState(
		sameLevel ? (hideCardsCB() ? 1 : 0) : 0
	);
	const [modeToggled, setModeToggled] = useState(0);
	let found = 0;

	const handleClick = () => {
		if (clickable) {
			if (value) {
				if (found === 0) {
					console.log(keys, "inside card");
					cardFoundCB(keys);
					found = 1;
				}
				setClicked(1);
			} else {
				setTimeout(() => {
					// setThemeCB();
					restartCB();
				}, 200);
				setRedClicked(1);
			}
		}
	};

	const tempFunc = () => {
		let interval = setInterval(() => {
			if (hideCardsCB()) {
				setClickable(1);
				clearInterval(interval);
			}
		}, 400);
	};

	useEffect(() => {
		hideCardsCB() ? setClickable(1) : tempFunc();
	}, []);

	// const gameArea = React.useMemo(
	// 	() => (
	// 		<Box boxSize={boxSize} onClick={() => handleClick()}>
	// 			{value ? (
	// 				<Greencard clicked={clicked} />
	// 			) : (
	// 				<Redcard clicked={redClicked} />
	// 			)}
	// 		</Box>
	// 	),
	// 	[]
	// );

	return (
		<>
			<Box darkMode={darkMode} boxSize={boxSize} onClick={() => handleClick()}>
				{value ? (
					<Greencard
						hideCardsCB={hideCardsCB}
						sameLevel={sameLevel}
						clicked={clicked}
						alreadyClick={click}
					/>
				) : (
					<Redcard clicked={redClicked} />
				)}
			</Box>
		</>
	);
};

export default Card;
