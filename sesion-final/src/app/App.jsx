/**
 * Dependencies
 */
import React from 'react';

/**
 * Components
 */
import Card from '../components/card/Card';
import Button from '../components/button/Button';
import Pokemon from '../components/pokemon/Pokemon';

/**
 * Styles
 */
import './App.scss';

function App() {
  return (
    <section className="container">
      <Card>
        <Button>
          Button Example
        </Button>
      </Card>
      <Pokemon />
    </section>
  );
}

export default App;
