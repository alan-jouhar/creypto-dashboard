import styles from "./currency.module.css";

export interface Currency {
	id: string;
	rank: string;
	symbol: string;
	name: string;
	supply: string;
	maxSupply: string;
	marketCapUsd: string;
	volumeUsd24Hr: string;
	priceUsd: string;
	changePercent24Hr: string;
	vwap24Hr: string;
}

interface CurrencyWidgetProps {
	currency: Currency;
}

function CurrencyWidget({ currency }: CurrencyWidgetProps) {
	return (
		<div className={styles.currency}>
			<div>{currency.id}</div>
		</div>
	);
}

export default CurrencyWidget;
