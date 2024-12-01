interface Pokemon {
  id: number | string;
  sprites: Array;
  name: string;
  stats: Array;
  height: number;
  weight: number;
  message?: string;
  types: Array;
  abilities: Array<any>;
  flavor_text: Array;
  special: Array<string> | null;
}

type WeatherDetailType = {
  zipcode: string;
  weather: string;
  temp?: number;
};

type responseItemType = {
  id: string | number;
  sprite: string | Array;
  name: string;
  types: Array;
};

type pokeTypes = {
  name: string;
};
