/**
 * Dependencies
 */
import React, { useState, useEffect } from 'react';

/**
 * Components
 */
import Header from '../components/header/Header';
import Pokemon from '../components/pokemon/Pokemon';

/**
 * Others
 */
import { request } from '../utils/request';

function Pages() {
  const [list, setList] = useState([])

  useEffect(() => {
    if (!list.length) {
      request('/pokemon?limit=100&offset=0')
        .then(res => res.json())
        .then(data => {
          const { results } = data;
          const pokemons = [];
          results.forEach((item, index) => {
            const { url } = item;
            fetch(url)
            .then(res => res.json())
            .then(data => {
              const { name, sprites, id, types } = data;
              const { front_default } = sprites;
              pokemons.push({id, name, image: front_default, types});
              if(index === results.length-1) {
                setList(pokemons.sort((a, b) => a.id - b.id));
              }
            })
            .catch(err => console.log(err))
          })
        })
        .catch(err => console.err(err))
    }
  }, [])


  return (
    <>
      <Header />
      <main className="container">
        {list.map(item => {
          const { id, name, image, types } = item;
          return(
            <Pokemon key={id} id={id} name={name} image={image} types={types}/>
          );
        })}
      </main>
    </>
  )
}

export default Pages;