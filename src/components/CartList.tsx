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
  const isCartEmpty = cart === 0;

  return (
    <>
      {open && (
        <CartContainer $isCartEmpty={isCartEmpty}>
          <WrapperTitle>
            <p>Cart</p>
          </WrapperTitle>
          <WrapperList>
            {isCartEmpty ? (
              <p>Cart is empty</p>
            ) : (
              <div>
                <CartItem />
              </div>
            )}
          </WrapperList>
        </CartContainer>
      )}
    </>
  );
};

export default CartList;
