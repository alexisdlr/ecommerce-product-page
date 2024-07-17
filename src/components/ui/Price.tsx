import AddToCart from "../cart/AddToCart";
import { Container, Discount, Span } from "../styles/Prices.styles";

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
