import styles from "@/styles/Abilities.module.css";
import AbilitiesDesc from "./AbilitiesDesc";

type abilitiesParam = {
  abilities: Array<any>;
};
type SimplifiedObj = { name: string; url: string; is_hidden: boolean };

export default function Abilties({ abilities }: abilitiesParam): JSX.Element {
  if (!abilities) return <></>;
  function simplifyObj(abilities: Array<any>): SimplifiedObj[] {
    const simplifiedObj = abilities.map((item: any) => {
      return {
        name: item.ability.name,
        url: item.ability.url,
        is_hidden: item.is_hidden,
      };
    });
    return simplifiedObj;
  }

  let simplifiedObj = simplifyObj(abilities);
  const output = simplifiedObj.map((item, i) => {
    return (
      <li key={i}>
        <h4>{item.name.replace("-", " ")}</h4>
        <AbilitiesDesc url={item.url} />
      </li>
    );
  });

  return (
    <div>
      <h3>Abilities </h3>
      <br />
      <ul className={styles.abilities}>{output}</ul>
    </div>
  );
}
