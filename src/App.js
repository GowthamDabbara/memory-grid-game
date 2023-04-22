import { useState, useReducer, useEffect } from "react";
import Cookies from "js-cookie";
import Gamecontroller from "./Components/Gamecontroller";

function App() {
	let temp = 0;
	useEffect(() => {
		setTimeout(() => {
			temp = 1;
		}, 2000);
	}, []);

	return (
		<div>
			<Gamecontroller temp={temp} />
		</div>
	);
}

export default App;
