'use client';

import React from 'react';

export type PokemonSummaryProps = {
  pokemon: {
    name: string;
  };
};

export function PokemonSummary({ pokemon }: PokemonSummaryProps) {
  const [stateExample] = React.useState('some state value');

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>State Example: {stateExample}</p>
    </div>
  );
}
