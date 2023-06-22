import { component$, useSignal } from '@builder.io/qwik';

export type CounterProps = {
  defaultValue: number;
};

export const Counter = component$<CounterProps>((props) => {
  const valueSignal = useSignal(props.defaultValue);

  return (
    <div>
      <p>Value: {valueSignal.value}</p>
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
