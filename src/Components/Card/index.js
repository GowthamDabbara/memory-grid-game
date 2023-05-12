import React from "react";
import { useState, useEffect, useRef } from "react";
import Greencard from "../Greencard";
import Redcard from "../Redcard";
import { Box } from "./styled";

const Card = ({
	value,
	boxSize,
	cardFoundCB,
	darkMode,
	sameLevel,
	keys,
	hideCardsCB,
	click,
	level,
}) => {
	const [clicked, setClicked] = useState(click);
	const [clickable, setClickable] = useState(
		sameLevel ? (hideCardsCB() ? 1 : 0) : 0
	);
	const found = useRef(click);

	const handleClick = () => {
		if (clickable) {
			if (found.current === 0) {
				cardFoundCB(keys, value);
				found.current = 1;
				setClicked(1);
			}
		}
	};

	const tempFunc = () => {
		let interval = setInterval(() => {
			if (hideCardsCB()) {
				setClickable(1);
				clearInterval(interval);
			}
		}, 150);
	};

	useEffect(() => {
		hideCardsCB() ? setClickable(1) : tempFunc();
	}, []);

	// NOTE: remove commented code

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
	// 	[parameters to when it should update]
	// );

	// NOTE: remove unnecessary fragments

	return (
		<>
			<Box
				level={level}
				darkMode={darkMode}
				boxSize={boxSize}
				onClick={() => handleClick()}
			>
				{value ? (
					<Greencard
						hideCardsCB={hideCardsCB}
						sameLevel={sameLevel}
						clicked={clicked}
						alreadyClick={click}
					/>
				) : (
					<Redcard clicked={clicked} />
				)}
			</Box>
		</>
	);
};

export default Card;
