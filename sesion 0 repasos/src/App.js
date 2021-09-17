import './App.css';
import Button from './Button';
import { useState } from 'react';
import RenderTypes from './components/renderTypes';

function App() {
  const [text, setText] = useState('');

  const handleButton = () => {
    setText('hola mundo');
  }

  function handleLog() {
    console.log('hola mundo');
  }

  return (
    <div className="App">
      <Button onClick={handleButton} />
      <RenderTypes />
      {text}
    </div>
  );
}

export default App;
