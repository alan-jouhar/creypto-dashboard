import React from "react";
import logo from "./logo.svg";
import Container from "./components/container/container";
import Menu from "./components/menu/menu";
import "./App.css";
function App() {
	return (
		<Container>
			<Menu logo={logo}></Menu>
			<h1 onMouseEnter={() => console.log("color is white")}>
				This is just Dummy text
			</h1>
		</Container>
	);
}

export default App;
