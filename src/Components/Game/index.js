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
	const [darkModeToggled, setDarkModeToggled] = useState(0);
	const [darkMode, setDarkMode] = useState(Cookies.get("mode"));
	const [cards, setCards] = useState([]);
	const [cardsData, setCardsData] = useState([]);
	const [clickable, setClickable] = useState(0);
	// let cardsData = [];

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
		console.log("inside toggle", !darkMode);
		let temp = [];
		setDarkMode(!darkMode);
		cardsData.map((item) => temp.push({ ...item, theme: !darkMode }));
		console.log(temp);
		setDarkModeToggled(1);
		setCardsData(temp);
		renderCards(level, temp, 1);
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
				});
				greenCardsCount += 1;
			}
			data = data.sort(() => Math.random() - 0.5);
		}

		for (let i = 0; i < (level + 2) * (level + 2); i++) {
			cards.push(
				<Card
					value={data[i].value}
					restartCB={restartCB}
					boxSize={boxSize}
					cardFoundCB={checkLevelCompletion}
					darkMode={data[i].theme}
					sameLevel={sameLevel}
				/>
			);
			data[i].sameLevel = 1;
		}
		console.log(data[0]);

		setCards(cards);
		setCardsData(data);
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
		setTimeout(() => {
			// setClickable(1);
			// renderCards(level, cardsData, true);
		}, 3000);
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
				<Parent
					darkModeToggled={darkModeToggled}
					darkMode={darkMode}
					key={Math.random()}
				>
					{/* {renderCards(level)} */}
					{cards ? (
						cards.map((item) => {
							console.log("ye");
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
