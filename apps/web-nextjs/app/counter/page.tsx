import { Metadata } from 'next';
import Counter from '../../components/Counter';

export default function CounterPage() {
  return (
    <div>
      <p>Counter</p>
      <Counter defaultValue={1} />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Next.js - Counter',
};
