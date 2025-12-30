// src/Greeting.tsx
type Props = {
  name: string;
  age?: string;
};

const Greeting = ({ name, age }: Props) => {
  return (
    <h2 style={{ color: '#646cff' }}>
      Hello, {name || 'World'}!
      {age && <span> (Age: {age})</span>} {/* age が存在する場合のみ表示 */} 
    </h2>
  );
};

export default Greeting;