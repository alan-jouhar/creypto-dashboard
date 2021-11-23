import styles from "./container.module.css";
interface ContainerProps {
	children: JSX.Element[];
}
function Container({ children }: ContainerProps) {
	return <section className={styles.container}>{children}</section>;
}

export default Container;
