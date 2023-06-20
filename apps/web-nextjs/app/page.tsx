import { Metadata } from 'next';

export default function Page() {
  return (
    <div>
      <p>Hello world</p>
      <p>
        <a href="/counter">Go to counter example</a>
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Next.js - Home',
};
