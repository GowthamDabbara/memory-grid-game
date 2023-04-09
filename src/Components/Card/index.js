import React from "react";
import { useState } from "react";
import Greencard from "../Greencard";
import { Parent, Box } from "./styled";

const Card = ({ value, level }) => {
	const [boxSize, setBoxSize] = useState(2);
	const boxSizeCtrl = () => {
		switch (level) {
			case "1":
				return 30;
		}
	};
	return <Box>{value ? <Greencard /> : <></>}</Box>;
};

export default Card;
