import styled from 'styled-components';
import BackGroundImage from "../../img/MuroRoto.png"
export const Navbar = styled.div`
 background-image:  url(${BackGroundImage});
 background-size:95px;
 min-height:10%;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

 @media (max-width: 980px) {

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
   display:flex;
`;
