import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;

  &.price-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  }
`;
export const Discount = styled.span`
  font-size: 1.2rem;
  color: #ff7e1b;
  font-weight: bold;
  background-color: #ffeee2;
  padding: 0.5rem;
  border-radius: 10px;

  margin: 0 0 0 1rem;
`;

export const Span = styled.span`
  font-size: 1rem;
  margin: 0.4rem 0;
  color: #b6bcc8;
  text-decoration: line-through;

  &.price {
    font-size: 2rem;
    color: #000;
    text-decoration: none;
  }
`;
