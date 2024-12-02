"use client";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { getRawPokemon } from "../../utils/fetch-names";
import Title from "../components/Title";
import PokeCard from "../components/PokeCard";
const NamesSSG: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  if (!props.pokemons) return <></>;
  const output = props.pokemons.map((item: Pokemon, idx: number) => {
    return <PokeCard key={idx} pokemon={item} />;
  });
  return (
    <div style={{ backgroundColor: "white" }} className="container center">
      <Title />
      <div className="row">{output}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  let pokemons: Pokemon[] | [] = [];
  let poke = [];
  try {
    for (let i = 1; i <= 10; i++) {
      poke.push(await getRawPokemon(Math.floor(Math.random() * 1025)));
      pokemons = [...poke];
    }
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      pokemons,
      revalidate: 30,
    },
  };
};

export default NamesSSG;
