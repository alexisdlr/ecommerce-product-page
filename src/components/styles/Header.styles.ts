import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 80%;
  margin: 0 auto;
  max-height: 85px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e4e9f2;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 80px;
    
    button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  }
`;
export const Logo = styled.img`
  width: 130px;
  height: 20px;
`;

export const Container = styled.div<{ $gap?: string }>`
  display: flex;
  align-items: center;

  gap: ${(props) => props.$gap || "5px"};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  font-size: 14px;
  color: #69707d;
  padding: 2rem 0;
  height: 100%;
  transition: 300ms ease-in;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #ff7e1b;
  }

  @media (max-width: 768px) {
    display: none;
  }

`;
export const MenuList = styled.ul`
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
export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
