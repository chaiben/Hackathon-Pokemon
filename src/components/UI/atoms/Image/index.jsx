import { LazyLoadImage } from "react-lazy-load-image-component";
import imgNotFound from "../../../../assets/NOPOKEHERE.png";

const Image = (props) => {
  return (
    <LazyLoadImage
      {...props}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = imgNotFound;
      }}
    />
  );
};

export default Image;