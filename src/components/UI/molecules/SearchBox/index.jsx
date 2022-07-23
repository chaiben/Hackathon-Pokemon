import Input from "../../atoms/Input";
import style from "./style.module.css";

const SearchBox = ({ search, setSearch }) => {

  return (
    <div className={style.SearchBox}>
      <Input placeholder="Search your pokemon" value={search} onChange={(e)=>setSearch(e.target.value)} />
    </div>
  );
};
export default SearchBox;
