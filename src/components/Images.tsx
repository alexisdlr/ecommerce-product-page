import { useState } from "react";
import { images } from "../utils";
import Thumbnails from "./Thumbnails";
import styled from "styled-components";
import useLightboxStore from "../store/lightbox.store";

const HeroImage = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1281px) {
    width: 500px;
  }
`;

const ContainerImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Images = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { toggle, setImage } = useLightboxStore();
  const openLightbox = () => {
    setImage(images[currentImage]);
    toggle();
  };

  return (
    <ContainerImages>
      <HeroImage
        src={images[currentImage]}
        alt="product"
        onClick={() => openLightbox()}
      />

      <Thumbnails
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </ContainerImages>
  );
};

export default Images;
