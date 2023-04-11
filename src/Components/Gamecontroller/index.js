import React from "react";
import { useState } from "react";
import Game from "../Game";

const Gamecontroller = () => {
	const [currentLevel, setCurrentLevel] = useState(4);
	const [topLevel, setTopLevel] = useState(0);
	const [resetCounter, setResetCounter] = useState(0);

	const restart = () => {
		setCurrentLevel(1);
	};

	const renderGame = () => {
		return <Game level={currentLevel} restartCB={restart} />;
	};

	return <>{renderGame()}</>;
};

export default Gamecontroller;
