import { images } from "../utils"

import styled from "styled-components"

const ContainerSlider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
  button {
    position: absolute;
    top: 45%;
    border-radius: 100%;
    background-color: #fff;
    padding: 5px;
    border: 1px solid #e4e9f2;
    outline: 0;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
`

const SliderImage = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    display: none;
  }

`

const Slider = () => {
  return (
    <ContainerSlider>
      <SliderImage src={images[0]} alt="product" />
      <button className="left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button className="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </ContainerSlider>
  )
}

export default Slider