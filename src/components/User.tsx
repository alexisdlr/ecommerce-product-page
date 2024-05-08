import styled from "styled-components"
import userAvatarSrc from '../assets/images/image-avatar.png'

const UserImg = styled.img`
  width: 40px;
  transition: 300ms ease-in-out;
  border-radius: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid #FF7E1B;
  }

  @media (max-width: 768px) {
    width: 30px;
  }
`
const User = () => {
  return (
    <div>
      <UserImg src={userAvatarSrc} alt='user avatar png' />
    </div>
  )
}

export default User