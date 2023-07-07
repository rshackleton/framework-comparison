import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonSummary } from '~/components/PokemonSummary';

export default component$(() => {
  return (
    <div>
      <PokemonSummary initialName="" />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik - Pokemon',
};
