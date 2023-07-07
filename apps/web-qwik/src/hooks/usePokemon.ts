import type { Signal } from '@builder.io/qwik';
import { useSignal, useTask$ } from '@builder.io/qwik';
import type { Pokemon } from '~/services/pokemon';
import { getPokemon } from '~/services/pokemon';

export function usePokemon(name: Signal<string>) {
  const pokemonSignal = useSignal<Pokemon | null>(null);

  useTask$(async ({ track }) => {
    track(name);
    pokemonSignal.value = await getPokemon(name.value);
  });

  return pokemonSignal;
}
