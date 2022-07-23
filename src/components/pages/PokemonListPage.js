import { useState } from "react";
import PokemonListPageTemplate from "../templates/PokemonListPageTemplate";

const PokemonListPage = () => {
  const [typeSelected, setTypeSelected] = useState({ name: "ALL", url: "" })
  const [pokeList, setPokeList] = useState(false)
  const [search, setSearch] = useState("");
  return (
    <PokemonListPageTemplate
      typeSelected={typeSelected}
      setTypeSelected={setTypeSelected}
      pokeList={pokeList}
      setPokeList={setPokeList}
      search={search}
      setSearch={setSearch}
    />
  );
};

export default PokemonListPage;
