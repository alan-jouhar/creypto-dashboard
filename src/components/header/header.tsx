import styles from "./header.module.css";
import Menu from "../menu/menu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faCaretSquareLeft,
} from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
	logo: string;
}
function Header(props: MenuProps): JSX.Element {
	const [menuCollapse, setMenuCollapse] = useState(false);
	let classes = null;
	if (menuCollapse) {
		classes = styles.collapse;
	} else {
		classes = styles.header;
	}
	return (
		<section className={classes}>
			<Menu
				logo={props.logo}
				menuCollapse={menuCollapse}
				setMenuCollapse={setMenuCollapse}
			/>
			<FontAwesomeIcon
				icon={faCaretSquareLeft}
				size="3x"
				className={menuCollapse ? styles.rotate : styles.arrow}
				onClick={() => setMenuCollapse((menuCollapse) => !menuCollapse)}
			/>
		</section>
	);
}

export default Header;
