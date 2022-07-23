import style from "./style.module.css";
import H1 from "../../UI/atoms/H1";
import SearchBox from "../../UI/molecules/SearchBox";
import TypeFilterMenu from "../../UI/organisms/TypeFilterMenu";
import PokeService from "../../../services/PokeService";
import { useState, useEffect } from "react";
import PokeGalery from "../../UI/molecules/PokeGalery";

const PokemonPageTemplate = (props) => {
  const {
    typeSelected,
    setTypeSelected,
    pokeList,
    setPokeList,
    search,
    setSearch,
  } = props;

  // Init pokeService (Resposable to do API calls)
  const pokeService = PokeService;

  // Init Types Filters
  const [typeList, setTypeList] = useState(false);
  useEffect(() => {
    const fetchAllTypes = async () => {
      const response = await pokeService.getAllTypes();
      setTypeList(response);
    };
    fetchAllTypes();
  }, [pokeService]);

  // Init Pokes List
  useEffect(() => {
    const fetchPokes = async () => {
      const response = await pokeService.getPokeList(typeSelected.url, search);
      setPokeList(response);
    };
    fetchPokes();
  }, [search, pokeService, typeSelected, setPokeList]);

  const formatPokes = (list) =>
    list.map((poke, index) => {
      let aux = poke.url.split("/");
      let code = aux[aux.length - 2];
      return {
        alt: poke.name,
        key: poke.name + "_" + index,
        src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${code}.png`,
        width: "100px",
        height: "100px",
      };
    });

  return (
    <main className={style.PokemonPageTemplate}>
      <header>
        <H1>Pokemon</H1>
        <SearchBox search={search} setSearch={setSearch} />
        <nav>
          {typeList && (
            <TypeFilterMenu
              typeList={typeList}
              typeSelected={typeSelected}
              setTypeSelected={setTypeSelected}
            />
          )}
          {!typeList && "Loading..."}
        </nav>
      </header>
      {pokeList && <PokeGalery images={formatPokes(pokeList)} />}
    </main>
  );
};

export default PokemonPageTemplate;
