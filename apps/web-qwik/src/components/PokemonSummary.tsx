import { component$, useSignal } from '@builder.io/qwik';
import { usePokemon } from '~/hooks/usePokemon';

type PokemonSummaryProps = {
  initialName: string;
};

export const PokemonSummary = component$<PokemonSummaryProps>(
  ({ initialName }) => {
    const nameInputSignal = useSignal(initialName);
    const nameSignal = useSignal(initialName);
    const pokemonSignal = usePokemon(nameSignal);

    return (
      <div>
        <form
          preventdefault:submit
          onSubmit$={() => {
            nameSignal.value = nameInputSignal.value;
          }}
        >
          <label>
            <p>Pokemon name:</p>
            <input name="name" type="text" bind:value={nameInputSignal} />
          </label>
        </form>

        {pokemonSignal.value ? (
          <div>
            <h1>{pokemonSignal.value.name}</h1>
            <img
              alt=""
              src={pokemonSignal.value.sprites.front_default}
              width={96}
              height={96}
            />
            <ul>
              {pokemonSignal.value.types.map((item) => (
                <li key={item.slot}>{item.type.name}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
);
