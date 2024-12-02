import styles from "@/styles/Type.module.css";

export default function Type({ types }: { types: Array<string> }) {
  if (!types) return <></>;
  return (
    <div>
      {types.map((poketype) => {
        return (
          <div key={poketype} className="container type">
            <span className={`${styles.type} ${styles[`${poketype}`]}`}>
              {poketype}
            </span>
          </div>
        );
      })}
    </div>
  );
}
