import useCartStore from "../store/global";
import { ContainerItem, ItemImg } from "./styles/CartItems.styles";
import deleteIcon from "../assets/images/icon-delete.svg";

const CartItem = () => {
  const { cart, resetCart } = useCartStore();

  const price = 125.0;
  const total = price * cart;
  return (
    <ContainerItem>
      <div className="item-info">
        <ItemImg />
        <div>
          <h3>Fall Limited Edition Sneakers</h3>
          <p>
            $125.00 x {cart} <span>${total}.00</span>
          </p>
        </div>
      </div>
      <button className="delete-icon" onClick={() => resetCart()}>
        <img
          src={deleteIcon}
          alt="delete icon"
        />
      </button>
      
    </ContainerItem>
  );
};

export default CartItem;
