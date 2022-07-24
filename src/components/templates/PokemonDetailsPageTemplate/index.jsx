import { useState, useEffect } from "react";
import PokeDetailsService from "../../../services/PokeDetailsService";
import H1 from "../../UI/atoms/H1";
import LinkButton from "../../UI/atoms/LinkButton";
import style from "./style.module.css";
import PokeBasicInfo from "../../UI/organisms/PokeBasicInfo";
import { useNavigate } from "react-router-dom";

const PokemonDetailsPageTemplate = (props) => {
  const { id } = props;
  const [poke, setPoke] = useState(false);
  const navigate = useNavigate();

  // Init Pokes List
  useEffect(() => {
    const fetchPoke = async () => {
      const response = await PokeDetailsService.init(id);
      setPoke(response);
    };
    fetchPoke();
  }, [id]);
  console.log(poke);

  if (!poke) return <div>Loading...</div>;

  return (
    <main className={style.PokemonDetailsPageTemplate}>
      <header>
        <H1>{poke.name.toUpperCase()}</H1>
        <LinkButton onClick={()=>navigate(-1)}>Go Back</LinkButton>
      </header>
      <PokeBasicInfo poke={poke} />
    </main>
  );
};

export default PokemonDetailsPageTemplate;
