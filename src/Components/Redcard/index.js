import React from "react";
import { BoxRed } from "./styled";

//NOTE: use camel case for component name, remove unnecessary fragments

const Redcard = ({ clicked }) => {
	return (
		<>
			<BoxRed clicked={clicked}></BoxRed>
		</>
	);
};

export default Redcard;
