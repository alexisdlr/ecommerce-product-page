import useCartStore from "../store/global";
import { ContainerItem, ItemImg } from "./styles/CartItems.styles";

const CartItem = () => {
  const { cart } = useCartStore();
  return (
    <ContainerItem>
      <ItemImg />
      <div>
        <h3>Fall Limited Edition Sneakers</h3>
        <p>$125.00 x {}</p>
      </div>
    </ContainerItem>
  );
};

export default CartItem;
