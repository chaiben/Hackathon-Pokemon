import { useParams } from "react-router-dom";

const PokemonDetailsPage = () => {
  const {id} = useParams();
  return <main>{id}</main>;
};

export default PokemonDetailsPage