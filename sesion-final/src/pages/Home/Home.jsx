/**
 * Dependencies
 */
import React, { useState, useEffect, useContext } from "react";

/**
 * Components
 */
import Header from "../../components/header/Header";
import Pokemon from "../../components/pokemon/Pokemon";
import { AppContext } from "../../context/AppContext";

/**
 * Others
 */
import { request } from "../../utils/request";

function Home() {
  const { setPokemons, pokemons } = useContext(AppContext);

  useEffect(() => {
    if (!pokemons.length) {
      request("/pokemon?limit=100&offset=0")
        .then((res) => res.json())
        .then((data) => {
          const { results } = data;
          const res = [];
          results.forEach((item, index) => {
            const { url } = item;
            fetch(url)
              .then((res) => res.json())
              .then((data) => {
                const { name, sprites, id, types } = data;
                const { front_default } = sprites;
                res.push({
                  id,
                  name,
                  image: front_default,
                  types,
                  checked: false,
                });
                if (index === results.length - 1) {
                  setPokemons(res.sort((a, b) => a.id - b.id));
                }
              })
              .catch((err) => console.log(err));
          });
        })
        .catch((err) => console.err(err));
    }
  }, []);
  return (
    <>
      {pokemons.map((item) => {
        const { id, name, image, types, checked } = item;
        return (
          <Pokemon
            key={id}
            id={id}
            name={name}
            image={image}
            types={types}
            checked={checked}
          />
        );
      })}
    </>
  );
}

export default Home;
