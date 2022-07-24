import style from "./style.module.css";

const H3 = (props) => {
  return (
    <h3 className={style.H3} {...props}>
      {props.children}
    </h3>
  );
};

export default H3;
