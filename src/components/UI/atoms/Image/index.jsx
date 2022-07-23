import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ image }) => {
  return <LazyLoadImage alt={image.alt} effect="blur" src={image.src} />;
};

export default Image;
