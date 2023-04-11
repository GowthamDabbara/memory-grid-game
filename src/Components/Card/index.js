import React from "react";
import { useState, useEffect } from "react";
import Greencard from "../Greencard";
import { Box } from "./styled";

const Card = ({ value, level, restartCB }) => {
	const [boxSize, setBoxSize] = useState(28);
	const [clicked, setClicked] = useState(0);

	const boxSizeCtrl = () => {
		switch (level) {
			case 1:
				setBoxSize(28);
				break;
			case 2:
				setBoxSize(23);
				break;
			case 3:
				setBoxSize(18);
				break;
			case 4:
				setBoxSize(14);
				break;
			case 5:
				setBoxSize(12);
				break;
			case 6:
				setBoxSize(10);
				break;
			case 7:
				setBoxSize(9.1);
				break;
			case 8:
				setBoxSize(8);
				break;
		}
	};

	const handleClick = () => {
		if (value) {
			setClicked(1);
			boxSizeCtrl();
		} else {
			boxSizeCtrl();
			restartCB();
		}
	};

	useEffect(() => {
		boxSizeCtrl();
	}, []);

	return (
		<>
			<Box boxSize={boxSize} onClick={() => handleClick()}>
				{value ? <Greencard clicked={clicked} /> : <></>}
			</Box>
		</>
	);
};

export default Card;
