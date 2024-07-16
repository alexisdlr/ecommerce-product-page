import styled from "styled-components";

export const LightboxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const ContainerImages = styled.div`
  position: relative;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (min-width: 1281px) {
    max-width: 700px;
  }
`;

export const Image = styled.img`
  max-width: 400px;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (min-width: 1281px) {
    max-width: 600px;
  }
`;

export const CloseLightbox = styled.button`
  position: absolute;
  top: -35px;
  right: 5px;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 999999;

  img {
    transition: 300ms ease-in;
    fill: white;
 
    &:hover {
      opacity: 0.5;
    
    }
  }
`;
