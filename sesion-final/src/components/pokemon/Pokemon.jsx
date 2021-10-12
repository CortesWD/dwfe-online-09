/**
 * Dependencies
 */
import React from 'react';

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
  return (
    <Card className="pokemon">
      <div className="pokemon-info">
        <h3>#001 Bulbasaur</h3>
        <div className="pokemon-types">
          <Chip color="grass"> Grass </Chip>
        </div>
        <Check />
      </div>
      <picture className="pokemon-pic">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="bulbasaur"
        />
      </picture>
    </Card>
  )
}

export default Pokemon;