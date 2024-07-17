import styled from "styled-components";
import iconSvg from "../../assets/images/icon-cart.svg";
import useCartStore from "../../store/global";
import CartList from "./CartList";

const IconCart = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Cart = () => {
  const { open, toggle } = useCartStore();
  return (
    <div style={{position: 'relative'}} >
      <IconCart src={iconSvg} alt="cart" onClick={toggle} />
      <CartList open={open} />
    </div>
  );
};

export default Cart;
