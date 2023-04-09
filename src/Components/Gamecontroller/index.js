import React from "react";
import { useState } from "react";
import Game from "../Game";

const Gamecontroller = () => {
	const [currentLevel, setCurrentLevel] = useState(2);
	const [topLevel, setTopLevel] = useState(0);
	const [counter, setCounter] = useState(0);

	const renderGame = () => {
		return <Game level={currentLevel} />;
	};

	return <>{renderGame()}</>;
};

export default Gamecontroller;
