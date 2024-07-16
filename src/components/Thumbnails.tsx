import { images } from "../utils";
import { Grid, Thumbnail } from "./styles/Thumbnails.styles";

interface ThumbnailsProps {
  currentImage: number;
  setCurrentImage: (index: number) => void;
  gap?: string;
}

const Thumbnails = ({currentImage, setCurrentImage, gap}: ThumbnailsProps) => {

  return (
    <Grid spacegap={gap}>
      {images.map((image, index) => (
        <Thumbnail
          key={image}
          src={image}
          alt="product"
          $active={currentImage === index}
          onClick={() => setCurrentImage(index)}
        />
      ))}
    </Grid>
  );
};

export default Thumbnails;
