/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Components
 */
import Login from './Login';

/**
 * Styles
 */
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleName = (e) => {
    const { value } = e;
    // const { target: { name, value } } = e;
    // const obj = {
    //   [`${name}`]: value
    // };

    // console.log(obj)
    setName(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);

    setTimeout(() => {
      console.log('el nombre guardado es', name);
      setDisabled(false);
    }, 3000);
  }

  return (
    <>
      <form className="app">
        <input
          disabled={disabled}
          type="text"
          name="calavera"
          value={name}
          onChange={handleName}
        />
        <button
          disabled={disabled}
          className="button"
          type="submit"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
      <Login />
    </>
  );
}

export default App;
