import logo from "./logo.svg";
import Container from "./components/container/container";
import Main from "./components/main/main";
import Header from "./components/header/header";
import Wallet from "./components/wallet/wallet";
import "./App.css";
function App() {
	return (
		<Container>
			<Header logo={logo}></Header>
			<Main>
				<h1>This is just Dummy text</h1>
				<Wallet />
			</Main>
		</Container>
	);
}

export default App;
