import styled from "styled-components";

const CartContainer = styled.div`
  position: absolute;
  top: 30px;
  right: -100%;
  width: 300px;
  height: 200px;
  background-color: #fff;
  z-index: 10;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
`;

const WrapperTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 20px;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  

  p {
    font-size: 1rem;
    color: #1D2026;
    font-weight: 700;
  }
`;
const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 60%;
  
  p{
    color: #69707D;
  }
`;
const CartList = ({ open }: { open: boolean }) => {
  return (
    <>
      {open && (
        <CartContainer>
          <WrapperTitle>
            <p>Cart</p>
          </WrapperTitle>
          <WrapperList>
            <p>Cart is empty</p>
          </WrapperList>
        </CartContainer>
      )}
    </>
  );
};

export default CartList;
