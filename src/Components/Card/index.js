import React from "react";
import { useState, useEffect, useCallback } from "react";
import Countdown from "react-countdown";
import Greencard from "../Greencard";
import Redcard from "../Redcard";
import { Box } from "./styled";

const Card = ({ value, restartCB, boxSize, cardFoundCB, darkMode }) => {
	const [clicked, setClicked] = useState(0);
	const [redClicked, setRedClicked] = useState(0);
	const [clickable, setClickable] = useState(0);
	const [modeToggled, setModeToggled] = useState(0);
	let found = 0;

	const handleClick = () => {
		console.log("clicked");
		if (clickable) {
			if (value) {
				if (found === 0) {
					cardFoundCB();
					found = 1;
				}
				setClicked(1);
			} else {
				setTimeout(() => {
					restartCB();
				}, 400);
				setRedClicked(1);
			}
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setClickable(1);
		}, 3000);
	}, []);

	const gameArea = React.useMemo(
		() => (
			<Box boxSize={boxSize} onClick={() => handleClick()}>
				{value ? (
					<Greencard clicked={clicked} />
				) : (
					<Redcard clicked={redClicked} />
				)}
			</Box>
		),
		[]
	);

	return (
		<>
			{clickable ? (
				<Box boxSize={boxSize} onClick={() => handleClick()}>
					{value ? (
						<Greencard clicked={clicked} />
					) : (
						<Redcard clicked={redClicked} />
					)}
				</Box>
			) : (
				gameArea
			)}
		</>
	);
};

export default Card;
