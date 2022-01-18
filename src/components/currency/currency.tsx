import styles from "./currency.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
	let coinImageUrl = `https://raw.githubusercontent.com/jsupa/crypto-icons/main/icons/${currency.symbol.toLowerCase()}.png`;
	let coinPrice = Number.parseFloat(currency.priceUsd);
	let formatedCoinPrice = coinPrice > 1 ? coinPrice.toFixed(4) : coinPrice;
	return (
		<div className={styles.currency}>
			<p>{currency.name}</p>
			<img
				className={styles.coin_image}
				src={coinImageUrl}
				alt={`${currency.symbol} image`}
			/>
			<div className={styles.price}>
				<p>{formatedCoinPrice}$</p>
				{currency.changePercent24Hr.startsWith("-") ? (
					<FontAwesomeIcon className={styles.price_down} icon={faArrowDown} />
				) : (
					<FontAwesomeIcon className={styles.price_up} icon={faArrowUp} />
				)}
				<small>24h</small>
			</div>
			<div className="change_rate"></div>
		</div>
	);
}

export default CurrencyWidget;
