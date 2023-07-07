import { PokemonSummary } from './PokemonSummary';

export type GetPokemonProps = {
  name: string;
};

export async function GetPokemon({ name }: GetPokemonProps) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  return <PokemonSummary pokemon={data} />;
}
