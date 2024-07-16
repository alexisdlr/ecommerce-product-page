import styled from "styled-components";
export const Grid = styled.div<{ spacegap?: string }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ spacegap }) => spacegap || "0.5rem"};
  justify-items: center; 


  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1281px) {
    gap: 1rem;
  }
`;

export const Thumbnail = styled.img<{ $active: boolean }>`
  width: 60px;
  height: 60px;
  margin: 0 2px;
  cursor: pointer;
  border: ${({ $active }) => 
    $active ? '1px solid #ff7e1b' : '1px solid transparent'};
  border-radius: 8px;
  opacity: ${({ $active }) => ($active ? 0.5 : 1)};
  transition: 300ms ease-in;
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1281px) {
    width: 100px;
    height: 100px;
  }
`;

