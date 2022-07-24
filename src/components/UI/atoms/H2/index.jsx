import style from "./style.module.css";

const H2 = (props) => {
  return (
    <h2 className={style.H2} {...props}>
      {props.children}
    </h2>
  );
};

export default H2;
