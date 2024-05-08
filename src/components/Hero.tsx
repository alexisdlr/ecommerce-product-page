import styled from "styled-components";
import { Wrapper } from "./Wrapper";

import Images from "./Images";
import Price from "./Price";

const Container = styled(Wrapper)`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  gap: 0 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0;
  }
`;

const HeroText = styled.div`
  max-width: 400px;
  margin-right: 2rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  @media (max-width: 768px) {
    margin: 0;
    text-align: left ;
  }
`;

const Span = styled.span`
  font-size: 14px;
  color: #ff7e1b;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 44px;
  color: #1d1c1e;
  margin: 0;
  line-height: 1;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #69707d;
  line-height: 1.5;
`;

const Hero = () => {
  return (
    <Container>
      <Images />
      <HeroText>
        <Span>Sneaker Company</Span>
        <Title>Fall Limited Edition Sneakers</Title>
        <P>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </P>
        <Price />
      </HeroText>
    </Container>
  );
};

export default Hero;
