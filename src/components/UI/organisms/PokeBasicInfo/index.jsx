import Card from "../../molecules/Card";
import Row from "../../molecules/Row";
import RowTitle from "../../molecules/RowTitle";
import CardBox from "../../atoms/CardBox";
import Image from "../../atoms/Image";
import style from "./style.module.css";

const PokeBasicInfo = (props) => {
  const { poke } = props;

  return (
    <section className={style.PokeBasicInfo}>
      <aside>
        <Image alt={poke.name.toUpperCase()} src={poke.src} width="90%" />
      </aside>
      <div className={style.basicInfo}>
        <CardBox>
          <Card title="Height">{poke.height}</Card>
          <Card title="Abilities">{poke.abilities}</Card>
          <Card title="Types">{poke.types}</Card>
          <Card title="Weight">{poke.weight}</Card>
        </CardBox>
        <div>
          <RowTitle>Base Stats</RowTitle>
          {poke.stats.map(stat => <Row title={stat.title} key={stat.title}>{stat.value}</Row>)}
        </div>
      </div>
    </section>
  );
};

export default PokeBasicInfo;
