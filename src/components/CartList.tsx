import styled from "styled-components";
import useCartStore from "../store/global";
import CartItem from "./CartItem";
import {
  CartContainer,
  WrapperList,
  WrapperTitle,
} from "./styles/Cartlist.stles";

const CartList = ({ open }: { open: boolean }) => {
  const { cart, removeItem } = useCartStore();
  const isCartEmpty = cart.length === 0;

  return (
    <>
      {open && (
        <CartContainer $isCartEmpty={isCartEmpty}>
          <WrapperTitle>
            <p>Cart</p>
          </WrapperTitle>
          <WrapperList>
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <CartItem key={item} />
                ))}
              </div>
            )}
          </WrapperList>
        </CartContainer>
      )}
    </>
  );
};

export default CartList;
