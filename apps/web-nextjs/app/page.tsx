import { Metadata } from 'next';

export default function Page() {
  return (
    <div>
      <p>Hello world</p>
      <p>
        <a href="/counter">Go to counter example</a>
      </p>
      <p>
        <a href="/large">Go to large example</a>
      </p>
      <p>
        <a href="/server-component">Go to server component example</a>
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Next.js - Home',
};
