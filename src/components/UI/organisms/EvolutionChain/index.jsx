import style from "./style.module.css";
import PokeCard from "../../molecules/PokeCard"
import H3 from "../../atoms/H3";

const EvolutionChain = (props) => {
  const { chain } = props;

  return (
    <section className={style.EvolutionChain}>
      <H3>Evolution Chain</H3>
      <div className={style.PokeCardGalery}>
      {chain.map((poke) => <PokeCard key={poke.name} poke = {poke} />)}
      </div>
    </section>
  );
};

export default EvolutionChain;
