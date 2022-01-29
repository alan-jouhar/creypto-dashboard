import { useState } from "react";
import styles from "./addCurrency.module.css";
import CurrencyForm from "../currency_form/currencyForm";
import { Currency } from "../currency_widget/currencyWidget";
export interface AddCurrencyProps {
	currencies: Currency[];
	currentSelectedCurrencies: Currency[];
	setCurrentSelectedCurrencies: React.Dispatch<
		React.SetStateAction<Currency[]>
	>;
}
function AddCurrency({
	currencies,
	currentSelectedCurrencies,
	setCurrentSelectedCurrencies,
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
			{/* we send extra props (showForm,setShowForm) to the form 
				so that it knows when to display its self.
			*/}
			<CurrencyForm
				showForm={showForm}
				setShowForm={setShowForm}
				currencies={currencies}
				currentSelectedCurrencies={currentSelectedCurrencies}
				setCurrentSelectedCurrencies={setCurrentSelectedCurrencies}
			></CurrencyForm>
		</>
	);
}

export default AddCurrency;
