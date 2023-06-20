'use client';

import React from 'react';

export type CounterProps = {
  defaultValue: number;
};

const Counter: React.FC<CounterProps> = ({ defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div>
      <p>Value: {value}</p>
      <div>
        <button
          onClick={(event) => {
            event.preventDefault();
            setValue(value + 1);
          }}
        >
          +
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            setValue(value - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
