import { useState } from "react";
import { images } from "../images";
import Thumbnails from "./Thumbnails";
import styled from "styled-components";

const HeroImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
`;

const ContainerImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Images = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <ContainerImages>
      <HeroImage src={images[currentImage]} alt="product" />
      <Thumbnails
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </ContainerImages>
  );
};

export default Images;
