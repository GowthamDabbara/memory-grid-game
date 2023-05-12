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
	MainContainerWrapper,
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

	// NOTE: Why do we need darkMode and darkModeToggled for referring the same thing which is mode?

	const [darkMode, setDarkMode] = useState(mode);
	const [cards, setCards] = useState([]);

	const scaleValue = useRef(0.55);
	const localCardsData = useRef([]);
	const cardsFound = useRef(0);
	const darkModeToggled = useRef(0);

	const checkLevelCompletion = (key, value) => {
		if (value === 0) {
			setTimeout(() => {
				restartCB();
			}, 200);
			return;
		}
		if (cardsFound.current + 1 === level + 2) {
			setTimeout(() => {
				nextLevelCB();
			}, 200);
		}
		localCardsData.current.forEach((item) => {
			if (item.keys === key) {
				item.clicked = 1;
			}
		});
		cardsFound.current = cardsFound.current + 1;
	};

	const boxSizeCtrl = () => {
		switch (level) {
			case 1:
				scaleValue.current = 0.55;
				return 28;
			case 2:
				scaleValue.current = 0.55;
				return 23;
			case 3:
				scaleValue.current = 0.59;
				return 18;
			case 4:
				scaleValue.current = 0.69;
				return 14;
			case 5:
				scaleValue.current = 0.78;
				return 12;
			case 6:
				scaleValue.current = 0.85;
				return 10;
			case 7:
				scaleValue.current = 0.9;
				return 9.1;
			case 8:
				scaleValue.current = 0.95;
				return 8;
		}
	};

	const darkModeToggle = () => {
		setDarkMode(!darkMode);
		localCardsData.current.forEach((item) => (item.theme = !darkMode));
		darkModeToggled.current = 1;
		renderCards(level, localCardsData.current, 1);
		setThemeCB();
	};

	const renderCards = (level, data, sameLevel = 0) => {
		let cards = [];
		let greenCardsCount = 1;
		let boxSize = boxSizeCtrl();

		if (data.length === 0) {
			for (let i = 0; i < (level + 2) * (level + 2); i++) {
				data.push({
					value: greenCardsCount <= level + 2 ? 1 : 0,
					theme: darkMode,
					clicked: 0,
					keys: Math.random(),
					sameLevel: sameLevel,
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
					boxSize={boxSize}
					cardFoundCB={checkLevelCompletion}
					darkMode={data[i].theme}
					sameLevel={sameLevel}
					hideCardsCB={hideCardsCB}
					click={data[i].clicked}
					level={level}
				/>
			);
		}

		setCards(cards);
		localCardsData.current = data;
	};

	useEffect(() => {
		renderCards(level, []);
	}, []);

	return (
		<>
			<MainContainerWrapper darkMode={darkMode}>
				<MainContainer scale={scaleValue.current} darkMode={darkMode}>
					<DetailsContainer>
						<TopLevel level={level} darkMode={darkMode}>
							Top Level: {topLevel}
						</TopLevel>
						<SettingsContainer>
							<CurrentLevel level={level} darkMode={darkMode}>
								Level: {level - 1}
							</CurrentLevel>
							<ModeBtn
								level={level}
								darkMode={darkMode}
								onClick={() => {
									darkModeToggle();
								}}
							>
								Mode: {darkMode ? "Dark" : "Light"}
							</ModeBtn>
						</SettingsContainer>
					</DetailsContainer>
					<Parent darkModeToggled={darkModeToggled.current} darkMode={darkMode}>
						{cards ? (
							cards.map((item) => {
								return item;
							})
						) : (
							<></>
						)}
					</Parent>
				</MainContainer>
			</MainContainerWrapper>
		</>
	);
};

export default Game;
