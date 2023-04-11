import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card";
import { Parent } from "./styled";

const Game = ({ level, restartCB }) => {
	const renderCards = (level) => {
		let cards = [];
		let greenCardsCount = 1;
		for (let i = 0; i < (level + 2) * (level + 2); i++) {
			cards.push(
				<Card
					value={greenCardsCount <= level + 2 ? 1 : 0}
					level={level}
					restartCB={restartCB}
				/>
			);
			greenCardsCount += 1;
		}
		cards = cards.sort(() => Math.random() - 0.5);
		return cards.map((item) => {
			return item;
		});
	};

	useEffect(() => {
		// boxSizeCtrl();
	}, []);

	return (
		<>
			<Parent>{renderCards(level)}</Parent>
		</>
	);
};

export default Game;
