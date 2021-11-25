import logo from "./logo.svg";
import Container from "./components/container/container";
import Main from "./components/main/main";
import Menu from "./components/menu/menu";
import Wallet from "./components/wallet/wallet";
import "./App.css";
function App() {
	return (
		<Container>
			<Menu logo={logo}></Menu>
			<Main>
				<h1>This is just Dummy text</h1>
				<Wallet />
			</Main>
		</Container>
	);
}

export default App;
