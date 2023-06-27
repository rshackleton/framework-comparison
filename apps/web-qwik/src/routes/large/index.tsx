import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      {Array.from(Array(1000)).map((_, index) => (
        <div key={index}>Item {index}</div>
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik - Large Page',
};
