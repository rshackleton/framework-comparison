import { Metadata } from 'next';
import ColorOnVisible from '../../components/ColorOnVisible';

export default function CounterPage() {
  return (
    <div>
      {Array.from(Array(1000)).map((_, index) => (
        <ColorOnVisible key={index}>Item {index}</ColorOnVisible>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Next.js - Large Page',
};
