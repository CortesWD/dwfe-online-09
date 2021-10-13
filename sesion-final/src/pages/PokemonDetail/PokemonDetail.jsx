import React, {useEffect} from "react"
import { useParams } from "react-router-dom"
import { request } from "../../utils/request";

export default function PokemonDetail() {
    const params = useParams();
    console.log(params);
    useEffect(() => {
      if(params.id){
          request(`/pokemon/${params.id}`)
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));
      }
    }, [params.id])
    return(
        <h2>ddd</h2>
    )
}