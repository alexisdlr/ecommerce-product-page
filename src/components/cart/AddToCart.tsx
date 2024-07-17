import cartIcon from "../../assets/images/cart-white.svg";
import plus from "../../assets/images/icon-plus.svg";
import minus from "../../assets/images/icon-minus.svg";
import useCartStore from "../../store/global";
import { Button, Container } from "../styles/AddToCart.styles";

const AddToCart = () => {
  const { items, addItem, removeItem, setCart } = useCartStore();
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
      <Button onClick={() => setCart()}>
        <img src={cartIcon} alt="cart icon" />
        Add to Cart
      </Button>
    </Container>
  );
};

export default AddToCart;
