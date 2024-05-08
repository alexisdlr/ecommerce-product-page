import styled from "styled-components";
import logoimg from "../assets/images/logo.svg";
import Cart from "./Cart";
import User from "./User";

const StyledHeader = styled.header`
  width: 80%;
  margin: 0 auto;
  max-height: 85px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #E4E9F2;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }

 
`;
const Logo = styled.img`
  width: 130px;
  height: 20px;
`;


const Container = styled.div<{ $gap?: string; }>`
  display: flex;
  align-items:center;

  gap: ${props => props.$gap || "5px"};

`;

const MenuItem = styled.li`
  font-size: 14px;
  color: #69707D;
  padding: 2rem 0;
  height: 100%;
  transition: 300ms ease-in;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #FF7E1B;
  }
`;
const MenuList = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
  margin-top: 4px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

const Header = () => {
  return (
    <StyledHeader>
      <Container $gap="2rem">
        <Logo src={logoimg} alt="Logo sneakers" />
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem key={item}>
              <Link href="#">
              {item}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Container>
      <Container $gap="1.5rem">
        <Cart />
        <User />
      </Container>
    </StyledHeader>
  );
};

export default Header;
