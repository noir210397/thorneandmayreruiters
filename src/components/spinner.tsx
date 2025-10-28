import styles from "../styles/spinner.module.css";

export default function Spinner({
  size,
  borderStyle = "white",
}: {
  size?: number;
  borderStyle?: "black" | "white";
}) {
  const borderColor =
    borderStyle !== "white" ? "var(--color-myblack-text-title)" : "#fff";
  return (
    <span
      className={styles.loader}
      style={{ width: size ? size : 16, border: `0px solid ${borderColor}` }}
    ></span>
  );
}
