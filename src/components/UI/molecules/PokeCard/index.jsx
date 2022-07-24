import { useNavigate } from "react-router-dom";
import { URL_IMAGE, IMAGE_EXTENSION } from "../../../../constants";
import Image from "../../atoms/Image";
import style from "./style.module.css";

const PokeCard = (props) => {
  const {poke} = props
  const navigate = useNavigate();
  let aux = poke.url.split("/");
  let code = aux[aux.length - 2];
  return (
    <div className={style.PokeCard} {...props} onClick={()=>navigate("/"+code)} >
      <Image     
      key={poke.name+"_thumb"}
      alt={poke.name}
      src={`${URL_IMAGE}${code}.${IMAGE_EXTENSION}`}
      width = '100'
      heigh = '100'
      />
      <h3>{poke.name}</h3>
    </div>
  );
};

export default PokeCard;
