import H3 from "../../atoms/H3"
import style from "./style.module.css";

const RowTitle = (props) => {
  return (
    <div className={style.RowTitle} {...props}>
      <H3>{props.children}</H3>
    </div>
  );
};

export default RowTitle;
