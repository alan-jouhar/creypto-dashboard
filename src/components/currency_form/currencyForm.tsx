import styles from "./currencyForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { Currency } from "../currency_widget/currencyWidget";
import { AddCurrencyProps } from "../add_currency/addCurrency";
interface CurrencyFormProps {
	show: boolean;
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function CurrencyForm({
	show,
	setShowForm,
	setCurrenSelectedCurrencies,
	currentSelectedCurrencies,
}: CurrencyFormProps & AddCurrencyProps) {
	let classes = [styles.form_wrapper];
	if (show) {
		classes.push(styles.show);
	}
	let formRef = useRef(null);
	let [currencies, setCurrencies] = useState<Currency[]>([]);
	let [matchedCurrencies, setMatchedCurrencies] = useState<Currency[]>([]);

	const loadCurrencies = () => {
		console.log("I am executing the effect.");
		var requestOptions: RequestInit = {
			method: "GET",
			redirect: "follow",
		};

		fetch("https://api.coincap.io/v2/assets", requestOptions)
			.then((response) => response.json())
			.then((result) => setCurrencies(result.data))
			.catch((error) =>
				setTimeout(() => {
					loadCurrencies();
				}, 3000)
			);
	};
	useEffect(() => {
		loadCurrencies();
	}, []);

	useEffect(() => {
		let form = formRef.current! as HTMLFormElement;
		form.reset();
	}, [show]);

	const searchCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (currencies.length > 0) {
			const value = e.currentTarget.value.toLowerCase();
			let matchingCurrencies = currencies.filter((currency) => {
				if (
					currency.id.toLowerCase().includes(value) ||
					currency.symbol.toLowerCase().includes(value)
				)
					return true;
				else return false;
			});
			if (value !== "") {
				setMatchedCurrencies(matchingCurrencies);
			} else {
				setMatchedCurrencies([]);
			}
		}
	};

	const selectCurrency = (currency: Currency, e: React.MouseEvent) => {
		let target = e.target as HTMLElement;
		setCurrenSelectedCurrencies((prevState) => {
			if (!prevState.includes(currency)) {
				target.classList.replace(styles.currency_list_item, styles.selected);
				return prevState.concat(currency);
			} else {
				target.classList.replace(styles.selected, styles.currency_list_item);
				return prevState.filter((e) => e !== currency);
			}
		});
	};
	let classes_str = classes.join(" ");
	return (
		<div className={classes_str}>
			<FontAwesomeIcon
				icon={faTimes}
				color="white"
				size="2x"
				onClick={() => setShowForm(!show)}
			/>
			<form className={styles.form} ref={formRef}>
				<label>
					Search Currency
					<input
						className={styles.form_control}
						type="text"
						name="currency"
						id=""
						placeholder="eg. BTC"
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
