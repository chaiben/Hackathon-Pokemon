import Card from "../../molecules/Card";
import CardBox from "../../atoms/CardBox";
import style from "./style.module.css";
import H3 from "../../atoms/H3";

const SpeciesInfo = (props) => {
  const { species } = props;

  return (
    <section className={style.SpeciesInfo}>
      <H3>Species Information</H3>
      <CardBox>
        <Card title="Name">{species.name}</Card>
        <Card title="Generation">{species.generation}</Card>
        <Card title="Genus">{species.genus}</Card>
        <Card title="Color">{species.color}</Card>
        <Card title="Habitat">{species.habitat}</Card>
        <Card title="Capture rate">{species.capture_rate}</Card>
        <Card title="Growth rate">{species.growth_rate}</Card>
        <Card title="Varieties">{species.varieties && species.varieties.join(", ")}</Card>
      </CardBox>
    </section>
  );
};

export default SpeciesInfo;
