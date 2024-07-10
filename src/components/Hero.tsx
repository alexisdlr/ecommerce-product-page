import Images from "./Images";
import Price from "./Price";
import Slider from "./Slider";
import { Container, HeroText, Span, Title } from "./styles/Hero.styles";

const Hero = () => {
  return (
    <Container>
      <Images />
      <Slider />
      <HeroText>
        <Span>Sneaker Company</Span>
        <Title>Fall Limited Edition Sneakers</Title>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <Price />
      </HeroText>
    </Container>
  );
};

export default Hero;
