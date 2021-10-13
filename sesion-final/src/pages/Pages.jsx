/**
 * Dependencies
 */
import React, { useState, useEffect } from 'react';

/**
 * Components
 */
import Header from '../components/header/Header';
import Card from '../components/card/Card';
import Button from '../components/button/Button';
import Pokemon from '../components/pokemon/Pokemon';
import { request } from '../utils/request';

function Pages() {
  const [list, setList] = useState([])

  useEffect(() => {
    if (!list.length) {
      request('/pokemon?limit=100&offset=0')
        .then(res => res.json())
        .then(data => { console.log(data) 
        })
        .catch(err => console.err(err))
    }
  }, [])


  return (
    <>
      <Header />
      <main className="container">
        {list.map(item => <Pokemon />)}

      </main>
    </>
  )
}

export default Pages;