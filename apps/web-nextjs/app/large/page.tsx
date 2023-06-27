import { Metadata } from 'next';

export default function CounterPage() {
  return (
    <div>
      {Array.from(Array(1000)).map((_, index) => (
        <div key={index}>Item {index}</div>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Next.js - Large Page',
};
