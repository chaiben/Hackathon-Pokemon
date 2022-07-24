import style from "./style.module.css";

const CardBox = (props) => {
  return (
    <div className={style.CardBox} {...props}>
      {props.children}
    </div>
  );
};

export default CardBox;
