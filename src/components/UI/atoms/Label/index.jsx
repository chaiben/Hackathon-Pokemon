import style from "./style.module.css";

const Label = (props) => {
  return (
    <div className={style.Label} {...props}>
      {props.children}
    </div>
  );
};

export default Label;
