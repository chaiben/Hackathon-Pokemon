import { useState, useEffect } from "react";
import PokeDetailsService from "../../../services/PokeDetailsService";

const PokemonDetailsPageTemplate = (props) => {
  const { id } = props;
  const [poke, setPoke]  = useState(false);
  // Init pokeDetailsService (Resposable to do API calls)
  const pokeDetailsService = PokeDetailsService;
  // Init Pokes List
  useEffect(() => {
    const fetchPokes = async () => {
      let result = await pokeDetailsService.getPoke(id);
      setPoke(result);
    };
    fetchPokes();
  }, [id, pokeDetailsService]);
  console.log(poke)

  if(!poke)
    return <div>Loading...</div>

  return <main>
    height: {poke.height}
    weight: {poke.weight}
    </main>;
};

export default PokemonDetailsPageTemplate;
