import styles from "./menu.module.css";
import Header from "../header/header";

interface MenuProps {
	logo: string;
}
function Menu(props: MenuProps): JSX.Element {
	return (
		<section className={styles.menu}>
			<Header logo={props.logo} />
		</section>
	);
}

export default Menu;
