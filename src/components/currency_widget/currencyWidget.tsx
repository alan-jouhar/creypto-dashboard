import styles from "./currencyWidget.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrowUp from "./icons/arrowUp.svg";
import arrowDown from "./icons/arrowDown.svg";
import graphUp from "./icons/graphUp.svg";
import graphDown from "./icons/graphDown.svg";
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
	let formatedCoinPrice = coinPrice.toFixed(4);
	return (
		<div className={styles.currency}>
			<img
				className={styles.coin_image}
				src={coinImageUrl}
				alt={`${currency.symbol} image`}
			/>
			<div className={styles.price}>
				<p>{formatedCoinPrice}$</p>
				{currency.changePercent24Hr.startsWith("-") ? (
					<>
						<img
							width="40px"
							src={graphDown}
							alt="price is down"
							className={styles.graph}
						/>
						<img width="10px" src={arrowDown} />
					</>
				) : (
					<>
						<img
							width="40px"
							src={graphUp}
							alt="price is up"
							className={styles.graph}
						/>
						<img width="10px" src={arrowUp} />
					</>
				)}
			</div>
			<div className={styles.sy_cr_container}>
				<p className={styles.symbol}>{currency.symbol}</p>
				<p
					className={[styles.change_rate]
						.concat(
							currency.changePercent24Hr.startsWith("-")
								? styles.price_down
								: styles.price_up
						)
						.join(" ")}
				>
					{parseFloat(currency.changePercent24Hr).toFixed(2) + "%"}
				</p>
			</div>
		</div>
	);
}

export default CurrencyWidget;
