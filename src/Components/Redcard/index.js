import React from "react";
import { BoxRed } from "./styled";

const Redcard = ({ clicked }) => {
	return (
		<>
			<BoxRed clicked={clicked}></BoxRed>
		</>
	);
};

export default Redcard;
