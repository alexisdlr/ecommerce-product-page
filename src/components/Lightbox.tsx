import useLightboxStore from "../store/lightbox.store";
import { LightboxContainer } from "./styles/Lightbox.styles";

const Lightbox = () => {
  const { open, image } = useLightboxStore();
  console.log(image)
  return (
    <LightboxContainer>
      {open && (
        <div>
          <img src={image} alt="product" />
        </div>
      )}
    </LightboxContainer>
  );
};

export default Lightbox;
