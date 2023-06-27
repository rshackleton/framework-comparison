import { Slot, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

const ColorOnVisible = component$(() => {
  const containerSignal = useSignal<HTMLDivElement>();
  const colorSignal = useSignal('red');

  useVisibleTask$(
    () => {
      const element = containerSignal.value;

      if (!element) {
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          colorSignal.value = 'blue';
        }
      });

      observer.observe(element);
    },
    { strategy: 'intersection-observer' }
  );

  return (
    <section
      ref={containerSignal}
      style={{
        background: 'var(--color)',
        padding: '4rem',
        transition: 'background-color 0.6s ease-out',
        '--color': colorSignal.value,
      }}
    >
      <Slot />
    </section>
  );
});

export default ColorOnVisible;
