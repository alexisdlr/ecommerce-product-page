import { useState } from "react";
import { menuItems } from "../../utils";
import Cart from "../cart/Cart";
import User from "../ui/User";
import Logo from "../shared/Logo";
import menuIcon from "../../assets/images/icon-menu.svg";
import closeIcon from "../../assets/images/icon-close-black.svg";
import {
  Container,
  MenuButton,
  MenuItem,
  MenuList,
  Background,
} from "../styles/MobileHeader.styles";
import { Link } from "../styles/Header.styles";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default MobileHeader;
