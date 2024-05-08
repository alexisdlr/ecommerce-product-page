import styled from "styled-components";
import logoimg from "../../assets/images/logo.svg";

const Logo = styled.img`
  width: 130px;
  height: 20px;
`;

Logo.defaultProps = {
  src: logoimg,
  alt: "Logo sneakers",
};

export default Logo