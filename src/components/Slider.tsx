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
`

const SliderImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;

  @media (min-width: 768px) {
    display: none;
  }

`

const Slider = () => {
  return (
    <ContainerSlider>
      <SliderImage src={images[0]} alt="product" />
    </ContainerSlider>
  )
}

export default Slider