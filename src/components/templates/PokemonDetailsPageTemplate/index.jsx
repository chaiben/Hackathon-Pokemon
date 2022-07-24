import { useState, useEffect } from "react";
import PokeDetailsService from "../../../services/PokeDetailsService";
import H1 from "../../UI/atoms/H1";
import LinkButton from "../../UI/atoms/LinkButton";
import style from "./style.module.css";
import PokeBasicInfo from "../../UI/organisms/PokeBasicInfo";
import { useNavigate } from "react-router-dom";
import SpeciesService from "../../../services/SpeciesService";
import SpeciesInfo from "../../UI/organisms/SpeciesInfo";

const PokemonDetailsPageTemplate = (props) => {
  const { id } = props;
  const [poke, setPoke] = useState(false);
  const [species, setSpecies] = useState(false);
  const navigate = useNavigate();

  // Get Poke Info
  useEffect(() => {
    const fetchPoke = async () => {
      const response = await PokeDetailsService.init(id);
      setPoke(response);
    };
    fetchPoke();
  }, [id]);

  // Get Spicies Info
  useEffect(() => {
    if (poke) {
      const fetchPoke = async () => {
        const response = await SpeciesService.init(poke.speciesURL);
        setSpecies(response);
      };
      fetchPoke();
    }
  }, [poke]);

  if (!poke && !species) return <div>Loading...</div>;

  return (
    <main className={style.PokemonDetailsPageTemplate}>
      <header>
        <H1>{poke.name.toUpperCase()}</H1>
        <LinkButton onClick={() => navigate(-1)}>Go Back</LinkButton>
      </header>
      <PokeBasicInfo poke={poke} />
      <SpeciesInfo species={species} />
    </main>
  );
};

export default PokemonDetailsPageTemplate;
