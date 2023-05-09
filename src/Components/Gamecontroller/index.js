import React, { useEffect, useRef } from "react";
import { useState, useReducer } from "react";
import Countdown from "react-countdown";
import Game from "../Game";

const Gamecontroller = () => {
	const [currentLevel, setCurrentLevel] = useState(1);
	const topLevel = useRef(0);
	const counter = useRef(0);
	const mode = useRef(1);
	const intervalID = useRef();

	const restart = () => {
		intervalCTRL();
		setCurrentLevel(1);
		forceUpdate();
	};

	const nextLevel = () => {
		intervalCTRL();
		if (currentLevel > topLevel.current) {
			topLevel.current = currentLevel;
		}
		setCurrentLevel(currentLevel + 1);
	};

	const intervalCTRL = () => {
		clearInterval(intervalID.current);
		counter.current = 0;
		intervalID.current = setInterval(() => {
			counter.current = counter.current + 1;
		}, 1000);
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

	const setTheme = () => {
		mode.current = !mode.current;
	};

	const hideCards = () => {
		if (counter.current >= 2.7) {
			return 1;
		}
		return 0;
	};

	useEffect(() => {
		intervalCTRL();
	}, []);

	const renderGame = () => {
		return (
			<>
				{/* <Countdown
					key={Math.random()}
					date={Date.now() + 8000}
					renderer={reset}
				/> */}
				<Game
					key={Math.random()}
					level={currentLevel}
					topLevel={topLevel.current}
					restartCB={restart}
					nextLevelCB={nextLevel}
					mode={mode.current}
					setThemeCB={setTheme}
					hideCardsCB={hideCards}
				/>
			</>
		);
	};

	return <>{renderGame()}</>;
};

export default Gamecontroller;
