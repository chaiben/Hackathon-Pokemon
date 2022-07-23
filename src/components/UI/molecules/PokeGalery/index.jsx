import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import Label from "../../atoms/Label";
import style from "./style.module.css";

const PokeGallery = ({ images, scrollPosition }) => {
  return (
  <div className={style.PokeGallery}>
    {images.map((image) => (
      <div className={style.PokeElement} key={image.alt}>
        <Label key={`label_${image.key}`}>{image.alt}</Label>
        <LazyLoadImage
          key={`img_${image.key}`}
          alt={image.alt}
          height={image.height}
          // Make sure to pass down the scrollPosition,
          // this will be used by the component to know
          // whether it must track the scroll position or not
          scrollPosition={scrollPosition}
          src={image.src}
          width={image.width}
        />
      </div>
    ))}
  </div>
);
    }
// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default trackWindowScroll(PokeGallery);
