import React from "react";
import Card from "../Card";
import { Parent } from "./styled";

const Game = ({ level }) => {
	const renderCards = (level) => {
		let cards = [];
		let greenCardsCount = 1;
		for (let i = 0; i < (level + 2) * (level + 2); i++) {
			cards.push(
				<Card value={greenCardsCount <= level + 2 ? 1 : 0} level={level} />
			);
			greenCardsCount += 1;
		}
		cards = cards.sort(() => Math.random() - 0.5);
		return cards.map((item) => {
			return item;
		});
	};

	return <Parent>{renderCards(level)}</Parent>;
};

export default Game;
