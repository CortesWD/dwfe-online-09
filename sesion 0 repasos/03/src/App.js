import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  // 
  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('dismounted');
    } 
  }, [])

  useEffect(() => {
    if (value) {
      console.log('updated', value);
    }
  }, [value])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
