import React from "react";
import logo from "./logo.svg";
import Menu from "./components/menu/menu";
import Container from "./components/container/container";
import "./App.css";
function App() {
	return (
		<div className="App">
			<Container>
				<Menu logo={logo}></Menu>
				<h1 onMouseEnter={() => console.log("color is white")}>
					This is just Dummy text
				</h1>
			</Container>
		</div>
	);
}

export default App;
