import { useEffect, useState } from "react";

export const getPokemon = async (
  idParam: number
): Promise<responseItemType> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idParam}`);
  let { id, name, types } = (await response.json()) as responseItemType;
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idParam}.png`;
  types = types.map((type: string, idx: number) => types[idx].type.name);

  const pokemon: responseItemType = {
    id,
    sprite,
    name,
    types,
  };

  return pokemon;
};

export async function getRawPokemon(
  idParam: number | string
): Promise<Pokemon> {
  const rawResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${idParam}`
  );
  const specieResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${idParam}`
  );

  let { id, sprites, name, stats, height, weight, message, types, abilities } =
    await rawResponse.json();
  let { flavor_text_entries, is_baby, is_legendary, is_mythical } =
    await specieResponse.json();

  types = types.map((item: any, idx: number) => item.type.name);
  const { flavor_text } = flavor_text_entries
    .filter((arg: any, idx: number) => {
      return arg.language.name === "en";
    })
    .sort((a: any, b: any) => b.flavor_text.length - a.flavor_text.length)[0];

  stats = stats.map((arg: any, i: number) => ({
    name: arg.stat.name,
    stat: arg.base_stat,
  }));

  const special = [
    is_baby ? "baby" : null,
    is_legendary ? "legendary" : null,
    is_mythical ? "mythical" : null,
  ].filter((poke) => poke);

  return {
    id,
    sprites,
    name,
    stats,
    height,
    weight,
    message,
    types,
    flavor_text,
    special,
    abilities,
  };
}

export const fetchNames = async () => {
  const pokemons: responseItemType[] = [];
  let names: responseItemType[];
  const [random, setRandom] = useState(1);
  useEffect(() => setRandom(Math.floor(Math.random() * 1025)), []);

  try {
    for (let i = 1; i <= 10; i++) pokemons.push(await getPokemon(random));
  } catch (err) {
    pokemons.push({
      id: "0000",
      sprite: "https://www.svgrepo.com/show/436191/blocked.svg",
      name: "Error",
      types: "---",
    });
  }
  names = pokemons.map((item) => ({
    id: item.id,
    sprite: item.sprite,
    name: item.name,
    types: item.types,
  }));

  return names;
};
