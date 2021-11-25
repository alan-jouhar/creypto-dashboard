import styles from "./main.module.css";
interface MainProps {
	children: JSX.Element[];
}
function Main({ children }: MainProps) {
	return <main className={styles.main}>{children}</main>;
}

export default Main;
