import styles from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavBar from "../nav/nav";

interface MenuProps {
	logo: string;
	menuCollapse: boolean;
	setMenuCollapse: React.Dispatch<React.SetStateAction<boolean>>;
	className?: string | null;
}

function Menu({ logo, menuCollapse, setMenuCollapse, className }: MenuProps) {
	let [collapsed, setCollapsed] = useState<boolean>(false);
	return (
		<section className={menuCollapse ? styles.display : styles.menu__header}>
			<div className={styles.collapse}>
				<FontAwesomeIcon
					icon={collapsed ? faTimes : faBars}
					size="2x"
					onClick={() => setCollapsed(!collapsed)}
				/>
			</div>

			<NavBar collapsed={collapsed} />

			<div className={styles.logo}>
				<img src={logo} alt="App logo" />
			</div>
		</section>
	);
}

export default Menu;
