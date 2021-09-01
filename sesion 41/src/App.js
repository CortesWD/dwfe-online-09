/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Components
 */
import LoginForm from './components/loginForm/LoginForm';
import Button from './components/button/Button';

/**
 * Styles 
 */
import './App.css';

function App() {
  const [show, setShow] = useState(true);
  return (
    <section className='app'>
      <div className="container">
        <Button
          onClick={() => setShow(!show)}
        >
          Mostrar
        </Button>
        {show ? <LoginForm /> : null}
      </div>
    </section>
  );
}

export default App;
