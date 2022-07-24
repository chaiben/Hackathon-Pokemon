import style from "./style.module.css";

const LinkButton = (props) => {
  return (
    <div className={style.LinkButton} {...props}>
      {props.children}
    </div>
  );
};

export default LinkButton;
