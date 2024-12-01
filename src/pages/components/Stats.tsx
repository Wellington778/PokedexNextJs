import styles from "@/styles/Stats.module.css";

type StatsProps = { stats: Array<any> };

function Stats({ stats }: StatsProps): JSX.Element {
  if (!stats) return <></>;

  const table = stats.map((stat, idx) => {
    return (
      <tr className={styles.tr} key={idx}>
        <td>{stat.name.replace("-", " ")}</td>
        <td>{stat.stat}</td>
      </tr>
    );
  });

  return (
    <table className={`center ${styles.table}`}>
      <thead>
        <tr>
          <th colSpan={2} className="center">
            Pokemon stats
          </th>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  );
}

export default Stats;
