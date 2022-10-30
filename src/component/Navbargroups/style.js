import styled from 'styled-components';
import BackGroundImage from "../../img/ParedMadera_SinClavos.png"



export const ContainerNavBarGroup = styled.div `
  @import  url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap");
 background-image:  url(${BackGroundImage});

 display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 100%;
`
;

export const Navbar = styled.div`
 background-image:  url(${BackGroundImage});
 background-size:95px;
 height:10%;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
