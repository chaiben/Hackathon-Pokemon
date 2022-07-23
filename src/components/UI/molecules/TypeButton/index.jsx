import Label from "../../atoms/Label";
import style from "./style.module.css";

const TypeButton = (props) => {
  const {value, checked, children, setTypeSelected} = props
  const className =
    checked && checked !== "0" && checked !== "false"
      ? "TypeFilterBoxChecked"
      : "TypeFilterBoxUnchecked";
  return (
    <div className={style[className]} onClick={() => setTypeSelected(value)}>
      <Label>{children}</Label>
    </div>
  );
};

export default TypeButton;
