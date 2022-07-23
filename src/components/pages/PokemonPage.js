import { useState } from "react";
import PokemonPageTemplate from "../templates/PokemonPageTemplate";

const PokemonPage = () => {
  const [typeSelected, setTypeSelected] = useState({ name: "ALL", url: "" })
  const [pokeList, setPokeList] = useState(false)
  const [search, setSearch] = useState("");
  return (
    <PokemonPageTemplate
      typeSelected={typeSelected}
      setTypeSelected={setTypeSelected}
      pokeList={pokeList}
      setPokeList={setPokeList}
      search={search}
      setSearch={setSearch}
    />
  );
};

export default PokemonPage;
