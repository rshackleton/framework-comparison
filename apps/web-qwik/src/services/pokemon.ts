import { server$ } from '@builder.io/qwik-city';

export type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
};

// Want to execute server-only, just wrap with server$( ... ).

export const getPokemon = server$(async (name: string) => {
  console.log(`executing getPokemon`, name);

  if (!name) {
    return null;
  }

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (res.ok) {
    const data = await res.json();
    return data as Pokemon;
  }

  return null;
});
