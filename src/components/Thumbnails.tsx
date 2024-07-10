import { images } from "../utils";
import { Grid, Thumbnail } from "./styles/Thumbnails.styles";

const Thumbnails = ({
  currentImage,
  setCurrentImage,
}: {
  currentImage: number;
  setCurrentImage: (index: number) => void;
}) => {
  return (
    <Grid>
      {images.map((image, index) => (
        <Thumbnail
          key={index}
          src={image}
          alt="product"
          isActive={currentImage === index}
          onClick={() => setCurrentImage(index)}
        />
      ))}
    </Grid>
  );
};

export default Thumbnails;
