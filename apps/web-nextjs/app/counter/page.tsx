import Counter from '../../components/Counter';

export default function CounterPage() {
  return (
    <div>
      <p>Counter</p>
      <Counter defaultValue={1} />
    </div>
  );
}
