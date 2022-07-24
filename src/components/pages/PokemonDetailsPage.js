import { useParams } from "react-router-dom";
import PokemonDetailsPageTemplate from "../templates/PokemonDetailsPageTemplate"

const PokemonDetailsPage = () => {
  const {id} = useParams();
  return <PokemonDetailsPageTemplate id={id} />;
};

export default PokemonDetailsPage