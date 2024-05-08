import styled from "styled-components";
import cartIcon from "../assets/images/cart-white.svg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import useCartStore from "../store/global";
const Button = styled.button`
  background-color: #ff7e1b;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    fill: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .quantity {
    min-width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #f6f8fd;
    span {
      font-size: 1rem;
      color: #69707d;
    }
    button {
      background-color: transparent;
      cursor: pointer;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const AddToCart = () => {
  const { items, addItem, removeItem } = useCartStore();
  return (
    <Container>
      <div className="quantity">
        <button onClick={removeItem}>
          <img src={minus} alt="cart icon" />
        </button>
        <span>{items}</span>

        <button onClick={addItem}>
          <img src={plus} alt="cart icon" />
        </button>
      </div>
      <Button>
        <img src={cartIcon} alt="cart icon" />
        Add to Cart
      </Button>
    </Container>
  );
};

export default AddToCart;
