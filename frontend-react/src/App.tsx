// src/App.tsx
import { useState } from 'react';
import Greeting from './Greeting'; // 作ったパーツを読み込む
import './App.css';

function App() {
  // name という変数と、それを更新する setName 関数を用意
  const [name, setName] = useState('');
  // age という変数と、それを更新する setAge 関数を用意
  const [age, setAge] = useState('');
  return (
    <div className="App">
      <h1>React + Vite + Docker</h1>
      
      {/* Greeting コンポーネントに name を渡す */}
      <Greeting name={name} /> {/* name プロパティを渡す */}
      <Greeting age={age} /> {/* age プロパティを渡す */}

      <div className="name-card">
        <input
          type="text"
          placeholder="あなたの名前は？"
          value={name}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e) => setName(e.target.value)} // 入力されたら name を更新
          style={{ padding: '8px', fontSize: '1rem' }}
        />
        <div className="age-card">
          <input
            type="number"
            placeholder="あなたの年齢は？"
            value={age}
            onChange={(e: { target: { value: any; }; }) => setAge(e.target.value)} // 入力されたら age を更新
            style={{ padding: '8px', fontSize: '1rem', marginTop: '10px' }}
          />
        </div>
        <br />
        <p>
          入力すると上の文字がリアルタイムで変わります。
        </p>
      </div>
    </div>
  );
}

export default App;