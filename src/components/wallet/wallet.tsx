import styles from "./wallet.module.css";
import AddCurrency from "../add_currency/addCurrency";
import CurrencyWidget, { Currency } from "../currency/currency";
import { useState } from "react";

function Wallet() {
	let [currentSelectedCurrencies, setCurrenSelectedCurrencies] = useState<
		Currency[]
	>([]);

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
