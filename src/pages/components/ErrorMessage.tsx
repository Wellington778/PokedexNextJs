import styles from "@/styles/ErrorMessage.module.css";

export default function ErrorMessage({
  message,
}: {
  message: string | null;
}): JSX.Element {
  if (!message) return <></>;
  return <div className={`${styles.error_container} center`}>{message}</div>;
}
