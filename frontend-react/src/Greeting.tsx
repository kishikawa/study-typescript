// src/Greeting.tsx
type Props = {
  name: string;
};

const Greeting = ({ name }: Props) => {
  return (
    <h2 style={{ color: '#646cff' }}>
      Hello, {name || 'World'}!
    </h2>
  );
};

export default Greeting;