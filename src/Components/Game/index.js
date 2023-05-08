import React from "react";
import { useState, useEffect, useReducer, useRef } from "react";
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

const Game = ({
	level,
	restartCB,
	nextLevelCB,
	topLevel,
	mode,
	setThemeCB,
	hideCardsCB,
}) => {
	const [darkModeToggled, setDarkModeToggled] = useState(0);
	const [darkMode, setDarkMode] = useState(mode);
	const [cards, setCards] = useState([]);

	const localCardsData = useRef([]);
	const foundCards = useRef(0);

	const checkLevelCompletion = (key) => {
		if (foundCards.current + 1 === level + 2) {
			setTimeout(() => {
				nextLevelCB();
			}, 200);
		}
		localCardsData.current.forEach((item) => {
			if (item.keys === key) {
				item.clicked = 1;
			}
		});
		foundCards.current = foundCards.current + 1;
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
		setDarkMode(!darkMode);
		localCardsData.current.forEach((item) => (item.theme = !darkMode));
		setDarkModeToggled(1);
		renderCards(level, localCardsData.current, 1);
		setThemeCB();
	};

	const renderCards = (level, cardsData, sameLevel = 0) => {
		let cards = [];
		let data = cardsData;
		let greenCardsCount = 1;
		let boxSize = boxSizeCtrl();

		if (data.length === 0) {
			for (let i = 0; i < (level + 2) * (level + 2); i++) {
				data.push({
					value: greenCardsCount <= level + 2 ? 1 : 0,
					theme: darkMode,
					clicked: 0,
					keys: Math.random(),
				});
				greenCardsCount += 1;
			}
			data = data.sort(() => Math.random() - 0.5);
		}

		for (let i = 0; i < (level + 2) * (level + 2); i++) {
			cards.push(
				<Card
					keys={data[i].keys}
					value={data[i].value}
					restartCB={restartCB}
					boxSize={boxSize}
					cardFoundCB={checkLevelCompletion}
					darkMode={data[i].theme}
					sameLevel={sameLevel}
					hideCardsCB={hideCardsCB}
					click={data[i].clicked}
				/>
			);
			data[i].sameLevel = 1;
		}

		setCards(cards);
		localCardsData.current = data;
	};

	useEffect(() => {
		renderCards(level, []);
	}, []);

	return (
		<>
			<MainContainer darkMode={darkMode}>
				<DetailsContainer>
					<TopLevel darkMode={darkMode}>Top Level: {topLevel}</TopLevel>
					<SettingsContainer>
						<CurrentLevel darkMode={darkMode}>Level: {level - 1}</CurrentLevel>
						<ModeBtn
							darkMode={darkMode}
							onClick={() => {
								darkModeToggle();
							}}
						>
							Mode: {darkMode ? "Dark" : "Light"}
						</ModeBtn>
					</SettingsContainer>
				</DetailsContainer>
				<Parent darkModeToggled={darkModeToggled} darkMode={darkMode}>
					{cards ? (
						cards.map((item) => {
							return item;
						})
					) : (
						<></>
					)}
				</Parent>
			</MainContainer>
		</>
	);
};

export default Game;
