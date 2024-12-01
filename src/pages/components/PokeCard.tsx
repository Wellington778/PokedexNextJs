type Params = { pokemon: responseItemType };
import Image from "next/image";
import TypeComponent from "./Type";
import styles from "@/styles/PokeCard.module.css";

export default function PokeCard({ pokemon }: Params): JSX.Element {
  if (!pokemon) return <></>;
  const path = `/pokemons/info/${pokemon.id}`;

  //   <div key={idx}>
  //         <Image src={item.sprite} alt={item.name} width={75} height={75} />
  //         <TypeComponent types={item.types} />
  //         <br />
  //         ID: {item.id} <br />
  //         <a href={path}> {item.name}</a>
  //         <br />
  //         ____________
  //       </div>
  return (
    <a href={path}>
      <div className="col-2 card center col-3-sm">
        <Image src={pokemon.sprite} alt={pokemon.name} width={75} height={75} />
        <h5>{pokemon.name}</h5>
        {/* <TypeComponent types={pokemon.types} /> */}
      </div>
    </a>
  );
}
