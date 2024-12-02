type Params = { pokemon: Pokemon };
import Image from "next/image";
import TypeComponent from "./Type";
import styles from "@/styles/PokeCard.module.css";

export default function PokeCard({ pokemon }: Params): JSX.Element {
  if (!pokemon) return <></>;
  const path = `/pokemons/info/${pokemon.id}`;
  return (
    <a style={{ marginBottom: 30 }} href={path}>
      <div className="col-2 card center col-3-sm">
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width={75}
          height={75}
        />
        <h5>{pokemon.name.replaceAll("-", " ")}</h5>
        {/* <h5>{pokemon.name.split("-")[0]}</h5> */}
        <h6>ID: {pokemon.id}</h6>
        <TypeComponent types={pokemon.types} />
      </div>
    </a>
  );
}
