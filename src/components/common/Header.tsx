import logoimg from "../../assets/images/logo.svg";
import Cart from "../cart/Cart";
import MobileHeader from "./MobileHeader";
import User from "../ui/User";
import {
  Container,
  Link,
  Logo,
  MenuItem,
  MenuList,
  StyledHeader,
} from "../styles/Header.styles";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

const Header = () => {
  return (
    <StyledHeader>
      <Container $gap="2rem">
        <Logo src={logoimg} alt="Logo sneakers" />
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem key={item}>
              <Link href="#">{item}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </Container>
      <Container $gap="1.5rem">
        <Cart />
        <User />
      </Container>
      <MobileHeader />
    </StyledHeader>
  );
};

export default Header;
