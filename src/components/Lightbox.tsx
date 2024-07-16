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
import { useEffect, useState } from "react";

const Lightbox = () => {
  const [current, setCurrent] = useState(0);
  const { open, image, setImage, toggle } = useLightboxStore();
  const currentIndex = images.indexOf(image);

  useEffect(() => {
    setCurrent(currentIndex);
  }, []);

  const setCurrentImage = (index: number) => {
    setCurrent(index);

    setImage(images[index]);
  };

  const onClose = () => {
    toggle();
    setImage("");
  };

  if (!open) return null;

  return (
    <LightboxContainer>
      <ContainerImages>
        <Image src={image} alt="product" />
        <Thumbnails
          gap="2px"
          currentImage={current}
          setCurrentImage={setCurrentImage}
        />
        <CloseLightbox onClick={() => onClose()}>
          <img src={closeIcon} alt="close" />
        </CloseLightbox>
      </ContainerImages>
    </LightboxContainer>
  );
};

export default Lightbox;
