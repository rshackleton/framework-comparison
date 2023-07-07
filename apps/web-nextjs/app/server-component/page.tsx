import { Metadata } from 'next';
import { GetPokemon } from '../../components/GetPokemon';

export default function CounterPage() {
  return (
    <div>
      <p>Counter</p>
      {/* @ts-expect-error typescript doesn't support server components */}
      <GetPokemon name={'ditto'} />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Next.js - Counter',
};
