import React from "react";
import logo from "./logo.svg";
import Menu from "./components/menu/menu";
import "./App.css";
function App() {
	return (
		<div className="App">
			<Menu logo={logo}></Menu>
			<h1 onMouseEnter={() => console.log("color is white")}>
				This is just Dummy text
			</h1>
		</div>
	);
}

export default App;
