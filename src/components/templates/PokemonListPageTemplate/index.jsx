import style from "./style.module.css";
import H1 from "../../UI/atoms/H1";
import SearchBox from "../../UI/molecules/SearchBox";
import TypeFilterMenu from "../../UI/organisms/TypeFilterMenu";
import PokeService from "../../../services/PokeService";
import { useState, useEffect } from "react";
import PokeGalery from "../../UI/molecules/PokeGalery";
import { IMAGE_EXTENSION, URL_IMAGE } from "../../../constants";

const PokemonListPageTemplate = (props) => {
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
    if (typeList) {
      const fetchPokes = async () => {
        const selectedTypeData = typeList.find(
          (type) => type.name === typeSelected
        );
        const response = await pokeService.getPokeList(
          selectedTypeData ? selectedTypeData.url : "",
          search
        );
        setPokeList(response);
      };
      fetchPokes();
    }
  }, [search, pokeService, typeSelected, setPokeList, typeList]);

  // Function to format images to the galery
  const formatPokes = (list) =>
    list.map((poke, index) => {
      let aux = poke.url.split("/");
      let code = aux[aux.length - 2];
      return {
        alt: poke.name,
        key: poke.name + "_" + index,
        src: `${URL_IMAGE}${code}.${IMAGE_EXTENSION}`,
        width: "100px",
        height: "100px",
        code: code,
      };
    });

  return (
    <main className={style.PokemonListPageTemplate}>
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

export default PokemonListPageTemplate;
