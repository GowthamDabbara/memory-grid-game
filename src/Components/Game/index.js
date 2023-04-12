import React from "react";
import { useState, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
import Card from "../Card";
import {
	Parent,
	MainContainer,
	DetailsContainer,
	TopLevel,
	SettingsContainer,
	CurrentLevel,
	ModeBtn,
} from "./styled";

const Game = ({ level, restartCB, nextLevelCB, topLevel, mode }) => {
	const [darkModeToggled, setDarkModeToggled] = useState(1);
	const [darkMode, setDarkMode] = useState(Cookies.get("mode"));

	let foundCards = 0;

	const checkLevelCompletion = () => {
		if (foundCards + 1 === level + 2) {
			setTimeout(() => {
				nextLevelCB();
			}, 200);
		}
		foundCards = foundCards + 1;
	};

	const boxSizeCtrl = () => {
		switch (level) {
			case 1:
				return 28;
			case 2:
				return 23;
			case 3:
				return 18;
			case 4:
				return 14;
			case 5:
				return 12;
			case 6:
				return 10;
			case 7:
				return 9.1;
			case 8:
				return 8;
		}
	};

	const darkModeToggle = () => {
		Cookies.remove("mode");
		Cookies.set("mode", !darkMode, { expires: 20, path: "/" });
		setDarkMode(!darkMode);
		console.log("inside toggle", !darkMode);
	};

	const renderCards = (level) => {
		let cards = [];
		let greenCardsCount = 1;
		let boxSize = boxSizeCtrl();
		for (let i = 0; i < (level + 2) * (level + 2); i++) {
			cards.push(
				<Card
					value={greenCardsCount <= level + 2 ? 1 : 0}
					restartCB={restartCB}
					boxSize={boxSize}
					cardFoundCB={checkLevelCompletion}
					darkMode={darkMode}
				/>
			);
			greenCardsCount += 1;
		}
		cards = cards.sort(() => Math.random() - 0.5);
		return cards.map((item) => {
			return item;
		});
	};

	const gameArea = React.useMemo(
		() => (
			<Parent darkMode={darkMode} key={Math.random()}>
				{renderCards(level)}
			</Parent>
		),
		[]
	);

	useEffect(() => {
		// setDarkMode(Cookies.get("mode"));
		console.log(Cookies.get("mode"), "this");
	}, []);

	return (
		<>
			<MainContainer key={Math.random()} darkMode={darkMode}>
				<DetailsContainer>
					<TopLevel>Top Level: {topLevel}</TopLevel>
					<SettingsContainer>
						<CurrentLevel>Level: {level - 1}</CurrentLevel>
						<ModeBtn
							onClick={() => {
								darkModeToggle();
							}}
						>
							Mode: {darkMode ? "Dark" : "Light"}
						</ModeBtn>
					</SettingsContainer>
				</DetailsContainer>
				{gameArea}
			</MainContainer>
		</>
	);
};

export default Game;
