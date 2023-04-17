import React from "react";
import { useState, useReducer, createContext, useContext } from "react";
import Countdown from "react-countdown";
import Game from "../Game";
import Cookies from "js-cookie";
import { ThemeContext } from "styled-components";

const Gamecontroller = () => {
	const [currentLevel, setCurrentLevel] = useState(1);
	const [topLevel, setTopLevel] = useState(0);
	const [mode, setMode] = useState(1);
	const [sameLevel, setSameLevel] = useState(0);
	const ThemeContext = createContext(null);

	let tempMode = mode;
	const restart = () => {
		if (currentLevel > topLevel) {
			setTopLevel(currentLevel);
		}
		console.log(mode, "inside controller");
		setCurrentLevel(1);
		setMode(tempMode);
		forceUpdate();
	};

	const nextLevel = () => {
		setMode(tempMode);
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

	const setTheme = () => {
		tempMode = !mode;
		// setSameLevel(1);
	};

	const renderGame = () => {
		return (
			<>
				<Countdown
					key={Math.random()}
					date={Date.now() + 8000}
					renderer={reset}
				/>
				<ThemeContext.Provider value={mode}>
					<Game
						key={Math.random()}
						level={currentLevel}
						topLevel={topLevel}
						restartCB={restart}
						nextLevelCB={nextLevel}
						mode={mode}
						setThemeCB={setTheme}
						sameLevel={sameLevel}
					/>
				</ThemeContext.Provider>
			</>
		);
	};

	return <>{renderGame()}</>;
};

export default Gamecontroller;
