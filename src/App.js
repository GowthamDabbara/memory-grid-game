import { useState, useReducer, useEffect } from "react";
import Cookies from "js-cookie";
import Gamecontroller from "./Components/Gamecontroller";

function App() {
	useEffect(() => {
		Cookies.set("mode", true, { expires: 20, path: "/" });
		console.log("hello999", Cookies.get("mode"));
	}, []);

	return (
		<div>
			<Gamecontroller />
		</div>
	);
}

export default App;
