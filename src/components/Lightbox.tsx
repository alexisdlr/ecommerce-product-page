import useLightboxStore from "../store/lightbox.store";
import { images } from "../utils";
import {
  CloseLightbox,
  ContainerImages,
  Image,
  LightboxContainer,
} from "./styles/Lightbox.styles";
import Thumbnails from "./Thumbnails";
import closeIcon from "../assets/images/icon-close.svg";

const Lightbox = () => {
  const { open, image, setImage, toggle } = useLightboxStore();
  const currentIndex = images.indexOf(image);

  const setCurrentImage = () => {
    const imageIndex = images
      .map((image) => {
        return image;
      })
      .filter((image) => {
        return image === image;
      });
    setImage(imageIndex[0]);
  };
  const onClose = () => {
    toggle();
    setImage("");
  };
  return (
    <>
      {open && (
        <LightboxContainer>
          <ContainerImages>
            <Image src={image} alt="product" />
            <Thumbnails
              gap="2px"
              currentImage={currentIndex}
              setCurrentImage={setCurrentImage}
            />
            <CloseLightbox onClick={() => onClose()}>
              <img src={closeIcon} alt="close" />
            </CloseLightbox>
          </ContainerImages>
        </LightboxContainer>
      )}
    </>
  );
};

export default Lightbox;
