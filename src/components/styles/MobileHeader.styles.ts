import styled from "styled-components";


export const Container = styled.div<{ $gap?: string; $align?: string }>`
  display: flex;
  align-items: ${(props) => props.$align || "center"};
  justify-content: center;

  gap: ${(props) => props.$gap || "5px"};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  font-size: 14px;
  color: #000;
  padding: 0.5rem 0;
  transition: 300ms ease-in;
  border-bottom: 2px solid transparent;
  font-weight: bold;
  &:hover {
    color: #ff7e1b;
  }

  @media (min-width: 768px) {
    display: none;
  }

`;
export const MenuList = styled.ul<{ open: boolean }>`
  width: 200px;
  height: 100%;
  list-style: none;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: start;
  gap: 5px;
  padding: 1rem;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    align-self: flex-start;
    margin-bottom: 1rem;
    padding: 0;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Background = styled.div`
  background-color: #000;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  pointer-events: none;
`;
