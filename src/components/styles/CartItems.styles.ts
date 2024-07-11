import styled from 'styled-components'
import cartItemImg from '../../assets/images/image-product-1-thumbnail.jpg'

export const ItemImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin: 0;
  cursor: pointer;
  transition: 300ms ease-in-out;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #FF7E1B;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
ItemImg.defaultProps = {
  src: cartItemImg,
  alt: 'img product thumbnail'
}

export const ContainerItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 10px;
  border-bottom: 1px solid #E2E2E2;

  @media (max-width: 768px) {
    padding: .5rem 0;
  }

  .item-info {
    display: flex;
    gap: 10px;
    align-items: center
  }
  h3 {
    font-size: 14px;
    color: #1D2026;
    margin: 0;
    font-weight: 500;
  }
  p {
    font-size: 12px;
    color: #69707D;
    margin: 0;
    font-weight: 300;
  }
  span {
    font-weight: bold;
    color: #000;
  }
  .delete-icon {
    outline: none;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    background: none;
  }
`