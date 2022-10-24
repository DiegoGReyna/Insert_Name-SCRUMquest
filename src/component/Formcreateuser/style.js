import styled from 'styled-components';
import BackGroundImage from "../../img/ParedMadera_SinClavos.png"
export const ContainerCreateUser = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap");
 background-image:  url(${BackGroundImage});
 background-size:140px;
 height:100%;
 border: 4px solid #000000;
  box-shadow: 0px 4px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:10%;



  & h1 {

    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 700;
    font-size: 2.3vw;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  }
  & input{
    font-size: 1.5vh;
  }
  & label{
    font-size: 1.2vh;
  }
  & button{
    font-size: 1.2vh;
  }
  & a{
    font-size: 1.2vh;
  }


`;
