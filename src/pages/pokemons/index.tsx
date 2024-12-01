import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchNames } from "../../utils/fetch-names";
import Title from "../components/Title";
import PokeCard from "../components/PokeCard";

const NamesSSG: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const output = props.pokemon.map((item: responseItemType, idx: number) => {
    const path = `/pokemons/info/${item.id}`;
    return <PokeCard key={idx} pokemon={item} />;
  });
  return (
    <div style={{ backgroundColor: "white" }} className="container">
      <Title />
      <div className="row">{output}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  let pokemon: responseItemType[] | [] = [];
  try {
    pokemon = await fetchNames();
  } catch {}
  return {
    props: {
      pokemon,
      revalidate: 30,
    },
  };
};

export default NamesSSG;
