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
	sameLevel,
	hideCardsCB,
}) => {
	const [darkModeToggled, setDarkModeToggled] = useState(0);
	const [darkMode, setDarkMode] = useState(mode);
	const [cards, setCards] = useState([]);
	const [cardsData, setCardsData] = useState([]);
	const [clickable, setClickable] = useState(0);
	const localCardsData = useRef(cardsData);

	const foundCards = useRef(0);

	const checkLevelCompletion = (key) => {
		if (foundCards.current + 1 === level + 2) {
			setTimeout(() => {
				// setThemeCB(mode);
				nextLevelCB();
			}, 200);
		}
		let temp = [];
		localCardsData.current.map((item) => {
			if (item.keys === key) {
				console.log("inside key");
				temp.push({ ...item, clicked: 1 });
			} else {
				temp.push(item);
			}
		});
		localCardsData.current = temp;
		console.log(localCardsData.current);
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
		Cookies.remove("mode");
		Cookies.set("mode", !darkMode, { expires: 20, path: "/" });

		let temp = [];
		console.log(localCardsData.current);
		setDarkMode(!darkMode);
		localCardsData.current.map((item) =>
			temp.push({ ...item, theme: !darkMode })
		);
		setDarkModeToggled(1);
		localCardsData.current = temp;
		setCardsData(temp);
		renderCards(level, temp, 1);
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
					setThemeCB={setThemeCB}
					hideCardsCB={hideCardsCB}
					click={data[i].clicked}
				/>
			);
			data[i].sameLevel = 1;
		}

		setCards(cards);
		setCardsData(data);
		localCardsData.current = data;
	};

	// const gameArea = React.useMemo(
	// 	() => (
	// 		<Parent darkMode={darkMode} key={Math.random()}>
	// 			{/* {renderCards(level)} */}
	// 			{cards ? (
	// 				cards.map((item) => {
	// 					console.log("ye");
	// 					return item;
	// 				})
	// 			) : (
	// 				<div>no cards</div>
	// 			)}
	// 		</Parent>
	// 	),
	// 	[level, darkMode]
	// );

	useEffect(() => {
		// setDarkMode(Cookies.get("mode"));
		renderCards(level, []);
	}, []);

	return (
		<>
			<MainContainer key={Math.random()} darkMode={darkMode}>
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
				<Parent
					darkModeToggled={darkModeToggled}
					darkMode={darkMode}
					key={Math.random()}
				>
					{/* {renderCards(level)} */}
					{cards ? (
						cards.map((item) => {
							return item;
						})
					) : (
						<div>no cards</div>
					)}
				</Parent>
			</MainContainer>
		</>
	);
};

export default Game;
