/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Components
 */
import Button from './components/button/Button';
import LoginForm from './components/loginForm/LoginForm';

/**
 * Styles
 */
import './App.css';


/**
 * Others
 */

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <section className={`app ${isDark ? 'dark' : 'light'}`}>
      <div className="container">
        <Button
          onClick={() => setIsDark(!isDark)}
        >
          MODO
          {isDark ? ' LIGHT' : ' DARK'}
        </Button>
        <LoginForm />
      </div>
    </section>
  );
}

export default App;
