import styles from "./currencyForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { Currency } from "../currency_widget/currencyWidget";
import { AddCurrencyProps } from "../add_currency/addCurrency";
interface CurrencyFormProps {
	showForm: boolean;
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function CurrencyForm({
	showForm,
	setShowForm,
	currencies,
	setCurrentSelectedCurrencies,
	currentSelectedCurrencies,
}: CurrencyFormProps & AddCurrencyProps) {
	let formRef = useRef(null);
	let [matchedCurrencies, setMatchedCurrencies] = useState<Currency[]>([]);

	let classes = [styles.form_wrapper];
	if (showForm) {
		classes.push(styles.show);
	}
	let classes_str = classes.join(" ");

	useEffect(() => {
		let form = formRef.current! as HTMLFormElement;
		form.reset();
	}, [showForm]);

	const searchCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (currencies.length > 0) {
			const value = e.currentTarget.value.toLowerCase();
			let filteredCurrencies = currencies.filter(
				(currency) =>
					currency.id.toLowerCase().includes(value) ||
					currency.symbol.toLowerCase().includes(value)
			);
			if (value !== "") {
				setMatchedCurrencies(filteredCurrencies);
			} else {
				setMatchedCurrencies([]);
			}
		}
	};

	const selectCurrency = (currency: Currency, e: React.MouseEvent) => {
		let target = e.target as HTMLElement;
		setCurrentSelectedCurrencies((prevState) => {
			if (!prevState.includes(currency)) {
				target.classList.replace(styles.currency_list_item, styles.selected);
				return prevState.concat(currency);
			} else {
				target.classList.replace(styles.selected, styles.currency_list_item);
				return prevState.filter((e) => e !== currency);
			}
		});
	};

	return (
		<div className={classes_str}>
			<FontAwesomeIcon
				icon={faTimes}
				color="white"
				size="2x"
				onClick={() => setShowForm(!showForm)}
			/>
			<form className={styles.form} ref={formRef}>
				<label>
					Search Currency
					<input
						className={styles.form_control}
						type="text"
						name="currency"
						id=""
						placeholder="BTC, ETH or Dogecoin"
						onChange={searchCurrency}
					/>
					<ul
						className={[
							styles.currency_list,
							matchedCurrencies.length > 0 ? styles.currency_list_visible : "",
						].join(" ")}
					>
						{matchedCurrencies.map((currency) => {
							let option = (
								<li
									key={currency.id}
									className={
										currentSelectedCurrencies.includes(currency)
											? styles.selected
											: styles.currency_list_item
									}
									onClick={(e: React.MouseEvent) => selectCurrency(currency, e)}
								>
									{currency.name.toUpperCase()}
								</li>
							);
							return option;
						})}
					</ul>
				</label>
			</form>
		</div>
	);
}

export default CurrencyForm;
