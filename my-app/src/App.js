import './App.css';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div className="App">
        <h1>Counter App</h1>
        <Counter count={count} />
        <button onClick={addCount}>Add Count</button>
    </div>
  );
}

export default App;
