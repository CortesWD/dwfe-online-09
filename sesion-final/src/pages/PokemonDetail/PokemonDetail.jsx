/**
 * Dependencies
 */
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

/**
 * Components
 */
import Pokemon from '../../components/pokemon/Pokemon';
import StatBar from './components/statBar/StatBar';

/**
 * Others
 */
import { request } from "../../utils/request";

function PokemonDetail() {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    if (params.id) {
      request(`/pokemon/${params.id}`)
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  }, [params.id]);

  return (
    <>
      {/* {<Pokemon />} */}
      <section className="pokemon-details">
        <article className="pokemon-size">
          <p><strong>Height:</strong> 3</p>
          <p><strong>Weight:</strong> 45</p>
        </article>
        <article>
          <h2>Stats</h2>
          <StatBar name="HP" value="30" type="grass" />
        </article>
      </section>
    </>
  )
}

export default PokemonDetail;