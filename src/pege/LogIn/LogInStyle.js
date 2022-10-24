import styled from 'styled-components';
import BackGroundImage from "../../img/MuroRoto.png"
export const BackGround = styled.div`

  /* background-image: url(${BackGroundImage}); */

  height: 100vh;
  background-image: linear-gradient(0deg, rgba(2, 2, 2, 0.7), rgba(2, 2, 2, 0.7)), url(${BackGroundImage});
  border: 1px solid #000000;
  animation: animatedBackground 10s linear;
  background-size:80px;
  animation-iteration-count: infinite;
  @keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
`;
