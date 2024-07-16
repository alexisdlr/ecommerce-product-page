import { images } from "../utils";
import { Grid, Thumbnail } from "./styles/Thumbnails.styles";

interface ThumbnailsProps {
  currentImage: number;
  setCurrentImage: (index: number) => void;
  gap?: string;
}

const Thumbnails = ({currentImage, setCurrentImage, gap}: ThumbnailsProps) => {
  return (
    <Grid spaceGap={gap}>
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
