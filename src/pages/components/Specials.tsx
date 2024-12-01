type SpecialsParam = { specials: Array<string> | null };
import styles from "@/styles/Specials.module.css";

function Specials({ specials }: SpecialsParam): JSX.Element {
  if (!specials) return <></>;
  const bullets = specials.map((item, idx) => {
    return (
      <span
        key={idx}
        className={`${styles.special} ${styles[`${item}`]} font-heavy`}
      >
        {item}
      </span>
    );
  });
  return <div className={styles.container}>{bullets}</div>;
}

export default Specials;
