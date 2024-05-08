import styled from "styled-components";
import { useState } from "react";
import { menuItems } from "../utils";
import Cart from "./Cart";
import User from "./User";
import Logo from "./shared/Logo";
import menuIcon from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-close.svg";

const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  max-height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e4e9f2;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const Container = styled.div<{ $gap?: string; $align?: string }>`
  display: flex;
  align-items: ${(props) => props.$align || "center"};
  justify-content: center;

  gap: ${(props) => props.$gap || "5px"};
`;

const MenuItem = styled.li`
  font-size: 14px;
  color: #000;
  padding: 0.5rem 0;
  transition: 300ms ease-in;
  border-bottom: 2px solid transparent;
  font-weight: bold;
  &:hover {
    color: #ff7e1b;
  }
`;
const MenuList = styled.ul<{ open: boolean }>`
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
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Background = styled.div`
  background-color: #000;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  pointer-events: none;
`;

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <Container $align="end">
          <MenuButton onClick={() => setOpen(!open)}>
            <img src={menuIcon} alt="Menu" />
          </MenuButton>
          <Logo />
        </Container>
        <Background style={{ display: open ? "block" : "none" }} />
          <MenuList open={open}>
            <button onClick={() => setOpen(!open)}>
              <img src={closeIcon} alt="icon close menu" />
            </button>
            {menuItems.map((item) => (
              <MenuItem key={item}>
                <Link href="#">{item}</Link>
              </MenuItem>
            ))}
          </MenuList>
      </Container>
      <Container $gap="20px">
        <User />
        <Cart />
      </Container>
    </StyledHeader>
  );
};

export default MobileHeader;
