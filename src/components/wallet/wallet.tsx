import styles from "./wallet.module.css";
import AddCurrency from "../add_currency/addCurrency";
import CurrencyWidget, { Currency } from "../currency_widget/currencyWidget";
import { useEffect, useState } from "react";

function Wallet() {
	// Iniitally we load all currencies from the endpoint.
	let [curencies, setCurencies] = useState<Currency[]>([]);

	// The current Selected currencies in the form
	let [currentSelectedCurrencies, setCurrenSelectedCurrencies] = useState<
		Currency[]
	>([]);

	const loadCurrencies = () => {
		console.log("I am executing the effect.");
		var requestOptions: RequestInit = {
			method: "GET",
			redirect: "follow",
		};

		fetch("https://api.coincap.io/v2/assets", requestOptions)
			.then((response) => response.json())
			.then((result) => setCurrenSelectedCurrencies(result.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		loadCurrencies();
	}, []);

	return (
		<div className={styles.wallet}>
			{currentSelectedCurrencies.map((curr) => {
				return <CurrencyWidget key={curr.id} currency={curr} />;
			})}
			<AddCurrency
				currentSelectedCurrencies={currentSelectedCurrencies}
				setCurrenSelectedCurrencies={setCurrenSelectedCurrencies}
			/>
		</div>
	);
}
export default Wallet;
