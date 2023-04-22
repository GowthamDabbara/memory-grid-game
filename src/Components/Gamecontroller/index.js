import React, { useEffect } from "react";
import { useState, useReducer, createContext, useContext } from "react";
import Countdown from "react-countdown";
import Game from "../Game";
import Cookies from "js-cookie";
import { ThemeContext } from "styled-components";

const Gamecontroller = ({ temp }) => {
	const [currentLevel, setCurrentLevel] = useState(1);
	const [topLevel, setTopLevel] = useState(0);
	const [mode, setMode] = useState(1);
	const [sameLevel, setSameLevel] = useState(0);
	const ThemeContext = createContext(null);
	let hide = 0;
	let counter = 0;

	let tempMode = mode;
	const restart = () => {
		counter = 0;
		if (currentLevel > topLevel) {
			setTopLevel(currentLevel);
		}
		setCurrentLevel(1);
		setMode(tempMode);
		hide = 0;
		resetGreenTimer();
		forceUpdate();
	};

	const resetGreenTimer = () => {
		hide = 0;
		counter = 0;
		setTimeout(() => {
			hide = 1;
		}, 3000);
	};

	const nextLevel = () => {
		resetGreenTimer();
		setMode(tempMode);
		setCurrentLevel(currentLevel + 1);
	};

	const reset = ({ completed }) => {
		if (completed) {
			resetGreenTimer();
			restart();
			return <></>;
		} else {
			return <></>;
		}
	};

	const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

	const setTheme = () => {
		tempMode = !mode;
	};

	const hideCards = () => {
		if (counter >= 3) {
			return 1;
		}
		return 0;
	};

	useEffect(() => {
		setInterval(() => {
			counter = counter + 1;
		}, 1000);
	}, []);

	const renderGame = () => {
		return (
			<>
				{/* <Countdown
					key={Math.random()}
					date={Date.now() + 8000}
					renderer={reset}
				/> */}
				<ThemeContext.Provider value={mode}>
					<Game
						key={Math.random()}
						level={currentLevel}
						topLevel={topLevel}
						restartCB={restart}
						nextLevelCB={nextLevel}
						mode={mode}
						setThemeCB={setTheme}
						sameLevel={0}
						hideCardsCB={hideCards}
					/>
				</ThemeContext.Provider>
			</>
		);
	};

	return <>{renderGame()}</>;
};

export default Gamecontroller;
