import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import Image from "next/image";
import ErrorMessage from "@/pages/components/ErrorMessage";
import TypeComponent from "@/pages/components/Type";
import { getRawPokemon } from "@/utils/fetch-names";
import styles from "@/styles/id.module.css";
import Specials from "@/pages/components/Specials";
import types from "@/styles/Type.module.css";
import Stats from "@/pages/components/Stats";
import Title from "@/pages/components/Title";
import Abilties from "@/pages/components/Abilities";

const Info: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  async function invalidPokemon() {
    getRawPokemon(1).then((poke) => {
      setPokemon({ ...poke, message: `Pokemon ID: ${props.id} Not Found` });
    });
  }

  useEffect(() => {
    getRawPokemon(props.id)
      .then((pokemon) => {
        setPokemon(pokemon);
      })
      .catch(() => invalidPokemon());
  }, []);

  if (!pokemon) return;

  let bgColor;
  if (pokemon.special)
    bgColor = pokemon.special.length !== 0 ? pokemon.special : pokemon.types[0];

  return (
    <div
      style={{ background: "white" }}
      className="box container center"
      key={pokemon.id}
    >
      <Title />
      <ErrorMessage message={pokemon.message} />
      <Image
        className={`${styles.image} ${types[`${bgColor}`]}`}
        priority={true}
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        width={300}
        height={300}
      />
      <h1 className="h1">{pokemon.name.toUpperCase().replace("-", " ")}</h1>
      <TypeComponent types={pokemon.types} />
      <Specials specials={pokemon.special} />
      ________________________________________
      <h2 className="h2">About</h2>
      <span>
        Height: {pokemon.height} | Weight:{pokemon.weight}
      </span>
      <p>{pokemon.flavor_text}</p>
      <div className="row">
        <div className="col-6 container-stats">
          <Stats stats={pokemon.stats} />
        </div>
        <div className="col-6 left center-sm">
          <Abilties abilities={pokemon.abilities} />
        </div>
      </div>
    </div>
  );
};

// =============
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  if (context.params && context.params.id) {
    if (typeof context.params.id === "number")
      return { props: { id: +context.params.id } };
    return { props: { id: context.params.id } };
  }

  console.log(2);
  // if no props, for some reason
  return { props: { id: 6 } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      "/info/[id]",
      // { params: { id: "6" } }
    ],
    fallback: "blocking",
  };
};

export default Info;
