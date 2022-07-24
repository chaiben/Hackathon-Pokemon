import H2 from "../../atoms/H2";
import style from "./style.module.css";

const Card = (props) => {
  return (
    <div className={style.Card} {...props}>
      <H2>{props.title}</H2>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
