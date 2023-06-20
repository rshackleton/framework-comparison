import { component$, useSignal } from '@builder.io/qwik';

export type CounterProps = {
  defaultValue: number;
};

export const Counter = component$<CounterProps>(({ defaultValue }) => {
  const valueSignal = useSignal(defaultValue);

  return (
    <div>
      <p>Value: {valueSignal}</p>
      <div>
        <button
          preventdefault:click
          onClick$={() => {
            valueSignal.value++;
          }}
        >
          +
        </button>
        <button
          preventdefault:click
          onClick$={() => {
            valueSignal.value--;
          }}
        >
          -
        </button>
      </div>
    </div>
  );
});
