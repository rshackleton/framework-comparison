import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import ColorOnVisible from '~/components/ColorOnVisible';

export default component$(() => {
  return (
    <div>
      {Array.from(Array(1000)).map((_, index) => (
        <ColorOnVisible key={index}>Item {index}</ColorOnVisible>
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik - Large Page',
};
