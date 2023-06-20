import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Counter } from '~/components/Counter';

export default component$(() => {
  return (
    <div>
      <p>Counter</p>
      <Counter defaultValue={1} />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik - Counter',
};
