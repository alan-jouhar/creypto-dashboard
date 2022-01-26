import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChartBar,
	faWallet,
	faPaperPlane,
	faPeopleArrows,
	faUserCog,
} from "@fortawesome/free-solid-svg-icons";
interface NavBarProp {
	collapsed: boolean;
}
function NavBar(props: NavBarProp) {
	let classes = [styles.nav];
	if (props.collapsed) {
		classes.push(styles.nav__visible);
	}
	return (
		<section className={classes.join(" ")}>
			<nav>
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>
						<a href="#" className={styles.nav__anchor}>
							<FontAwesomeIcon className={styles.nav__icon} icon={faChartBar} />
							Dashboard
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href="#" className={styles.nav__anchor}>
							<FontAwesomeIcon className={styles.nav__icon} icon={faWallet} />
							Wallet
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href="#" className={styles.nav__anchor}>
							<FontAwesomeIcon
								className={styles.nav__icon}
								icon={faPaperPlane}
							/>
							Messages
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href="#" className={styles.nav__anchor}>
							<FontAwesomeIcon
								className={styles.nav__icon}
								icon={faPeopleArrows}
							/>
							Trade
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href="#" className={styles.nav__anchor}>
							<FontAwesomeIcon className={styles.nav__icon} icon={faUserCog} />
							Settings
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default NavBar;
