import { useState, useEffect } from "react";
import PokeDetailsService from "../../../services/PokeDetailsService";
import H1 from "../../UI/atoms/H1";
import LinkButton from "../../UI/atoms/LinkButton";
import style from "./style.module.css";
import PokeBasicInfo from "../../UI/organisms/PokeBasicInfo";
import { useNavigate } from "react-router-dom";
import SpeciesService from "../../../services/SpeciesService";
import EvolutionService from "../../../services/EvolutionService";
import SpeciesInfo from "../../UI/organisms/SpeciesInfo";
import EvolutionChain from "../../UI/organisms/EvolutionChain";

const PokemonDetailsPageTemplate = (props) => {
  const { id } = props;
  const [poke, setPoke] = useState(false);
  const [species, setSpecies] = useState(false);
  const [evolution, setEvolution] = useState(false);
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

  // Get Evolution Info
  useEffect(() => {
    if (species) {
      const fetchPoke = async () => {
        const response = await EvolutionService.init(species.evolution_chain_url);

        setEvolution(response);
      };
      fetchPoke();
    }
  }, [species]);

  if (!poke || !species || !evolution) return <div>Loading...</div>;
  
  const evolution_chain  = evolution.evolutionChain(evolution.chain);

  return (
    <main className={style.PokemonDetailsPageTemplate}>
      <header>
        <H1>{poke.name.toUpperCase()}</H1>
        <LinkButton onClick={() => navigate(-1)}>Go Back</LinkButton>
      </header>
      <PokeBasicInfo poke={poke} />
      <SpeciesInfo species={species} />
      <EvolutionChain chain = {evolution_chain} />
    </main>
  );
};

export default PokemonDetailsPageTemplate;
