/**
 * Dependencies
 */
import React from 'react';
import { Link } from 'react-router-dom';


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
  return (
    <Card className={`pokemon pokemon-${firstType}`}>
      <div className="pokemon-info">
        <h3> 
        <Link to={`/pokemon/${id}`}>#{id} {name}</Link>
        </h3>
        <div className="pokemon-types">
          {types.map(item => {
            const { type: { name: typeName } } = item;
            return(
              <Chip key={`${id}_${typeName}`} color={typeName} text={typeName} />
            );
          })}
        </div>
        <Check checked={checked} />
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