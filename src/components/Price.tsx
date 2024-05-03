import styled from "styled-components";
import AddToCart from "./AddToCart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;

  &.price-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  }
`;
const Discount = styled.span`
  font-size: 1.2rem;
  color: #FF7E1B;
  font-weight: bold;
  background-color: #FFEEE2;
  padding: 0.5rem;
  border-radius: 10px;
  margin: 0;
`;

const Span = styled.span`
  font-size: 1rem;
  margin: .4rem 0;
  color: #B6BCC8;
  text-decoration: line-through;

  &.price {
    font-size: 2rem;
    color: #000;
    text-decoration: none;
  }
`;
const Price = () => {
  return (
    <Container>
      <Container className="price-container">
        <Span className="price">$125.00</Span>
        <Discount>50%</Discount>
      </Container>
      <Span>$250.00</Span>
      <AddToCart />
    </Container>
  );
};

export default Price;
