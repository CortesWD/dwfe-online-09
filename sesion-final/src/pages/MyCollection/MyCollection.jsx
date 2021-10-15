/**
 * Dependencies
 */
 import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

 /**
  * Components
  */
 import Header from "../../components/header/Header";
 import Pokemon from "../../components/pokemon/Pokemon";
 import { AppContext } from "../../context/AppContext";

 function MyCollection(){
    const { pokemons } = useContext(AppContext);
    const history = useHistory();
    useEffect(()=>{
        if(!pokemons.length){
            history.push('/');
        }
    },[]);

    return (
        <>
            {pokemons.map((item) => {
            const { id, name, image, types, checked } = item;
            return checked?(
                <Pokemon
                key={id}
                id={id}
                name={name}
                image={image}
                types={types}
                checked={checked}
                />
            ):null;
            })}
        </>
    );
 }

 export default MyCollection;