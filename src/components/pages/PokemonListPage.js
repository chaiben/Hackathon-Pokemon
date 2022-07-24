import { useState, useEffect } from "react";
import PokemonListPageTemplate from "../templates/PokemonListPageTemplate";
import { useSearchParams } from "react-router-dom";

const PokemonListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [typeSelected, setTypeSelected] = useState(
    searchParams.get("type")
      ? searchParams.get("type")
      : "ALL"
  );
  const [pokeList, setPokeList] = useState(false);
  const [search, setSearch] = useState(
    searchParams.get("search") ? searchParams.get("search") : ""
  );

  useEffect(() => {
    setSearchParams({ type: typeSelected, search: search });
  }, [setSearchParams, search, typeSelected]);

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
