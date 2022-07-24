import { useState, useEffect } from "react";
import PokeDetailsService from "../../../services/PokeDetailsService";
import H1 from "../../UI/atoms/H1";

const PokemonDetailsPageTemplate = (props) => {
  const { id } = props;
  const [poke, setPoke] = useState(false)

  // Init Pokes List
  useEffect(() => {
    const fetchPoke = async () => {
      const response = await PokeDetailsService.init(id)
      setPoke(response)
    };
    fetchPoke();
  }, [id]);
  console.log(poke)

  if(!poke)
    return <div>Loading...</div>

  return <main>
    <H1>{poke.name.toUpperCase()}</H1>
    height: {poke.height}
    weight: {poke.weight}
    </main>;
};

export default PokemonDetailsPageTemplate;
