import TypeButton from "../../molecules/TypeButton";
import style from "./style.module.css";

const TypeFilterMenu = (props) => {
  const { typeList, typeSelected, setTypeSelected } = props;
  return (
    <div className={style.TypeFilterMenu}>
      <TypeButton
        setTypeSelected={setTypeSelected}
        value={{ name: "ALL", url: "" }}
        checked={!typeSelected || typeSelected.name === "ALL" ? "1" : "0"}
      >
        ALL
      </TypeButton>
      {typeList.map(({ name, url }) => {
        return (
          <TypeButton
            setTypeSelected={setTypeSelected}
            value={{ name: name, url: url }}
            key={name}
            checked={typeSelected.name === name ? "1" : "0"}
          >
            {name}
          </TypeButton>
        );
      })}
    </div>
  );
};

export default TypeFilterMenu;
