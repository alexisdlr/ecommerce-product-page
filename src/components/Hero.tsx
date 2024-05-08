import styled from "styled-components";
import { Wrapper } from "./Wrapper";

import Images from "./Images";
import Price from "./Price";

const Container = styled(Wrapper)`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
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
  gap: 10px;

  p {
    font-size: 14px;
    font-weight: 300;
    color: #69707d;
    line-height: 1.5;

    @media (min-width: 1281px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    text-align: left;
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

  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1281px) {
    font-size: 50px;
    margin-bottom: 1rem;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Images />
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
