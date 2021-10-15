/**
 * Dependencies
 */
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';


/**
 * Components
 */
import Card from '../card/Card';
import Check from '../check/Check';
import Chip from '../chip/Chip';

/**
 * Styles
 */
import './Pokemon.scss';

function Pokemon(props) {
  const { id, name, image, types, checked } = props;
  const firstType = types[0].type.name;
  const {setPokemons,pokemons} =  useContext(AppContext);

  const handleChecked = ()=>{
    const findPokemon = pokemons.find((pokemon)=>{
      return pokemon.id === id;
    });
    console.log(findPokemon);
    findPokemon.checked = !checked;
    // const index = pokemons.findIndex((pokemon)=>{
    //   return pokemon.id === id;
    // });
    // console.log(index);
    // const updatePokemons = [...pokemons];
    // updatePokemons[index] = findPokemon;

    const updatePokemons = pokemons.map((pokemon)=>pokemon.id===id?{...findPokemon}:{...pokemon})
    setPokemons(updatePokemons);
  };
  return (
    <Card className={`pokemon pokemon-${firstType}`}>
      <div className="pokemon-info">
        <h3>
          <Link to={`/pokemon/${id}`}>#{id} {name}</Link>
        </h3>
        <div className="pokemon-types">
          {types.map(item => {
            const { type: { name: typeName } } = item;
            return (
              <Chip key={`${id}_${typeName}`} color={typeName} text={typeName} />
            );
          })}
        </div>
        <Check 
          checked={checked}
          onClick={handleChecked} 
        />
      </div>
      <picture className="pokemon-pic">
        <img
          src={image}
          alt={name}
        />
      </picture>
    </Card>
  )
}

export default Pokemon;