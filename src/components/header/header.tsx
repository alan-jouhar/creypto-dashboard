import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faTimes,
	faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavBar from "../nav/nav";

interface MenuProps {
	logo: string;
}

function Header({ logo }: MenuProps) {
	let [collapsed, setCollapsed] = useState<boolean>(false);
	return (
		<section className={styles.menu__header}>
			<div className={styles.collapse}>
				<FontAwesomeIcon
					icon={collapsed ? faTimes : faBars}
					size="2x"
					onClick={() => setCollapsed(!collapsed)}
				/>
			</div>

			<NavBar collapsed={collapsed} />

			{/* this arrow will only be visible on desktop */}
			<FontAwesomeIcon icon={faArrowLeft} size="2x" className={styles.arrow} />

			<div className={styles.logo}>
				<img src={logo} alt="App logo" />
			</div>
		</section>
	);
}

export default Header;
