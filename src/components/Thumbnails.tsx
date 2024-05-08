import { images } from "../utils";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .5rem;

  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1281px) {
    gap: 1rem;
  }
`;

const Thumbnail = styled.img<{ isActive: boolean }>`
  width: 60px;
  height: 60px;
  margin: 0 2px;
  cursor: pointer;
  border: ${({ isActive }) =>
    isActive ? "1px solid #ff7e1b" : "1px solid transparent"};
  border-radius: 8px;
  opacity: ${({ isActive }) => (isActive ? .7 : 1)};
  transition: 300ms ease-in;
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 1281px) {
    width: 80px;
    height: 80px;
  }

`;
const Thumbnails = ({
  currentImage,
  setCurrentImage,
}: {
  currentImage: number;
  setCurrentImage: (index: number) => void;
}) => {
  return (
    <Container>
      {images.map((image, index) => (
        <Thumbnail
          key={index}
          src={image}
          alt="product"
          isActive={currentImage === index}
          onClick={() => setCurrentImage(index)}
        />
      ))}
    </Container>
  );
};

export default Thumbnails;
