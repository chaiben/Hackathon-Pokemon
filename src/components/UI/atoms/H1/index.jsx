import style from "./style.module.css";

const H1 = (props) => {
  return (
    <h1 className={style.H1} {...props}>
      {props.children}
    </h1>
  );
};

export default H1;
