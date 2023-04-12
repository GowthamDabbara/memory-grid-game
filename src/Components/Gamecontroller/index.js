import React from "react";
import { useState, useReducer } from "react";
import Countdown from "react-countdown";
import Game from "../Game";
import Cookies from "js-cookie";

const Gamecontroller = () => {
	const [currentLevel, setCurrentLevel] = useState(1);
	const [topLevel, setTopLevel] = useState(0);
	const [mode, setMode] = useState(Cookies.get("mode"));

	const restart = () => {
		if (currentLevel > topLevel) {
			setTopLevel(currentLevel);
		}
		console.log("inside Restart", Cookies.get("mode"));
		setMode(Cookies.get("mode"));
		setCurrentLevel(1);
		forceUpdate();
	};

	const nextLevel = () => {
		setCurrentLevel(currentLevel + 1);
	};

	const reset = ({ completed }) => {
		if (completed) {
			restart();
			return <></>;
		} else {
			return <></>;
		}
	};

	const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

	const renderGame = () => {
		return (
			<>
				<Countdown
					key={Math.random()}
					date={Date.now() + 8000}
					renderer={reset}
				/>

				<Game
					key={Math.random()}
					level={currentLevel}
					topLevel={topLevel}
					restartCB={restart}
					nextLevelCB={nextLevel}
					mode={Cookies.get("mode")}
				/>
			</>
		);
	};

	return <>{renderGame()}</>;
};

export default Gamecontroller;
