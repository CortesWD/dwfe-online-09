/**
 * Dependencies
 */
import React, { useState, useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from './Home/Home';
import MyCollection from './MyCollection/MyCollection';
import PokemonDetail from './PokemonDetail/PokemonDetail';

/**
 * Components

/**
 * Others
 */

function Pages() {
  return (
    <>
    <Header />
    <main className='container'>
      <Route path='/' exact component={Home}/>
      <Route path='/pokemon/:id' exact component={PokemonDetail}/>
      <Route path='/collection' exact component={MyCollection}/>
    </main>
    </>
  )
}

export default Pages;