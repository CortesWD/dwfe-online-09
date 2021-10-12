/**
 * Dependencies
 */
import React from 'react';

/**
 * Components
 */
import Header from '../components/header/Header';
import Card from '../components/card/Card';
import Button from '../components/button/Button';
import Pokemon from '../components/pokemon/Pokemon';

function Pages() {
  return (
    <>
      <Header />
      <section className="container">
        <Card>
          <Button>
            Button Example
          </Button>
        </Card>
        <Pokemon />
      </section>
    </>
  )
}

export default Pages;