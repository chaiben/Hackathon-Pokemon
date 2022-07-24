import style from "./style.module.css";

const Row = (props) => {
  return (
    <div className={style.Row} {...props}>
      <div>{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Row;
