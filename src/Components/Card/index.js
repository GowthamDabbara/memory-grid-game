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
	foundi,
	key,
}) => {
	const [clicked, setClicked] = useState(foundi);
	const [redClicked, setRedClicked] = useState(0);
	const [clickable, setClickable] = useState(0);
	const [modeToggled, setModeToggled] = useState(0);
	let found = 0;

	const handleClick = () => {
		if (clickable) {
			if (value) {
				if (found === 0) {
					cardFoundCB(key);
					found = 1;
				}
				setClicked(1);
			} else {
				setTimeout(() => {
					restartCB();
				}, 200);
				setRedClicked(1);
			}
		}
	};

	useEffect(() => {
		console.log("card already found", foundi);
		sameLevel
			? setClickable(1)
			: setTimeout(() => {
					setClickable(1);
			  }, 3000);
		// sameLevel
		// 	? setClickable(1)
		// 	: setTimeout(() => {
		// 			setClickable(1);
		// 	  }, 3000);
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
						// clickable={clickable}
						sameLevel={sameLevel}
						clicked={clicked}
					/>
				) : (
					<Redcard clicked={redClicked} />
				)}
			</Box>
		</>
	);
};

export default Card;
