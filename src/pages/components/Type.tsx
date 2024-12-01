import styles from "@/styles/Type.module.css";

export default function TypeComponent({ types }: { types: Array<string> }) {
  return (
    <div>
      {types.map((poketype) => {
        return (
          <span
            key={poketype}
            className={`${styles.type} ${styles[`${poketype}`]}`}
          >
            {poketype}
          </span>
        );
      })}
    </div>
  );
}
