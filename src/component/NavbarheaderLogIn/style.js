import styled from 'styled-components';
import BackGroundImage from "../../img/MuroRoto.png"
export const Navbar = styled.div`
 background-image:  url(${BackGroundImage});
 background-size:95px;
 min-height:10%;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 & Button{
  font-family: 'Press Start 2P', cursive;
  color: #F0F2F5;
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  background-color: #1282A2;
  }
  & Button:hover{

  background-color: #30B61A;
  }

 @media (max-width: 980px) {
    & Button{
    font-family: 'Press Start 2P', cursive;
    color: #F0F2F5;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5vw;
    background-color: #1282A2;
    }
  }

`;


export const NavBarImagePage = styled.img`
   width:205px;
   height: 85px;
   display: flex;
    flex-direction: row;
    align-items: center;


 @media (max-height: 820px) {
  width:120px;
  height:60px;

    }
`;




export const ContainerNavBar = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const ContainerProfileData = styled.div`
  height:100%;
  gap:1rem;
  display:flex;
  justify-content: flex-end;
  align-items: center;


`;

export const ImgProfile = styled.img`
   display:flex;
  width:100%;
  height:100%;

`;

export const ContainerImg = styled.div`
   width:4rem;
   height:4rem;
   border-radius:2rem;
   display:flex;
   background-color:#1282A2;
   @media (max-width: 980px) {
    width:2.5rem;
   height:2.5rem;
    }

`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: space-between;

`;
