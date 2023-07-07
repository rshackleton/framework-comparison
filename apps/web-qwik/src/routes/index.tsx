import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <p>Hello world</p>
      <p>
        <a href="/counter">Go to counter example</a>
      </p>
      <p>
        <a href="/large">Go to large example</a>
      </p>
      <p>
        <a href="/pokemon">Go to server example</a>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik - Home',
};
