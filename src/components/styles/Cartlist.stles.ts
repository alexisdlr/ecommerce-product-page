import styled from "styled-components";

export const CartContainer = styled.div<{ $isCartEmpty: boolean }>`
  position: absolute;
  top: 30px;
  right: -100%;
  width: 300px;
  height: ${(props) => (props.$isCartEmpty ? "200px" : "auto")};
  background-color: #fff;
  z-index: 10;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    right: 4px;
    top: 60px;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 20px;
  border-bottom: 1px solid #ccc;
  padding: 1.8rem 1rem;

  p {
    font-size: 1rem;
    color: #1d2026;
    font-weight: 700;
  }
`;
export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 60%;
  p {
    color: #69707d;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #ff7e1b;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 700;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: #ff9f4d;
  }
`;