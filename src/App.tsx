import { useState } from 'react';
import './assets/global.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-black">
        Hello world! we are staring this project tomorrow.
      </h1>
    </div>
  );
}

export default App;
