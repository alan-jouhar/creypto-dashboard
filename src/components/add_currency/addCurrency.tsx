import { useState } from "react";
import styles from "./addCurrency.module.css";
import CurrencyForm from "../currency_form/currencyForm";
import { Currency } from "../currency_widget/currencyWidget";
export interface AddCurrencyProps {
	currentSelectedCurrencies: Currency[];
	setCurrenSelectedCurrencies: React.Dispatch<React.SetStateAction<Currency[]>>;
}
function AddCurrency({
	setCurrenSelectedCurrencies,
	currentSelectedCurrencies,
}: AddCurrencyProps) {
	let [showForm, setShowForm] = useState(false);
	return (
		<>
			<div
				className={styles.add_currency}
				onClick={() => setShowForm(!showForm)}
			>
				<p className={styles.add}>+Add Currency</p>
			</div>
			<CurrencyForm
				show={showForm}
				setShowForm={setShowForm}
				setCurrenSelectedCurrencies={setCurrenSelectedCurrencies}
				currentSelectedCurrencies={currentSelectedCurrencies}
			></CurrencyForm>
		</>
	);
}

export default AddCurrency;
