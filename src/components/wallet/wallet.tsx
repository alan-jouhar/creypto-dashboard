import styles from "./wallet.module.css";
import AddCurrency from "../add_currency/addCurrency";
import CurrencyWidget, { Currency } from "../currency_widget/currencyWidget";
import { useEffect, useState } from "react";

function Wallet() {
	// Iniitally we load all currencies from the endpoint.
	let [curencies, setCurencies] = useState<Currency[]>([]);

	// The current Selected currencies in the form
	let [currentSelectedCurrencies, setCurrentSelectedCurrencies] = useState<
		Currency[]
	>([]);

	const loadCurrencies = () => {
		var requestOptions: RequestInit = {
			method: "GET",
			redirect: "follow",
		};

		fetch("https://api.coincap.io/v2/assets", requestOptions)
			.then((response) => response.json())
			.then((result) => setCurencies(result.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		loadCurrencies();
	}, []);

	return (
		<div className={styles.wallet}>
			{curencies.map((curr) => {
				return <CurrencyWidget key={curr.id} currency={curr} />;
			})}
			<AddCurrency
				currentSelectedCurrencies={currentSelectedCurrencies}
				setCurrentSelectedCurrencies={setCurrentSelectedCurrencies}
			/>
		</div>
	);
}
export default Wallet;
