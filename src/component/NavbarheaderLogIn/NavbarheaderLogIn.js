
import React from 'react'

import logo from "../../img/LogoHD.png"
import Image from '../../img/skull.png'
import {Col, NavbarBrand,Row,Button } from 'reactstrap';
import {Navbar,NavBarImagePage,ContainerNavBar,ContainerProfileData,ImgProfile,ContainerImg,ContainerButtons} from './style';
import { Link,useNavigate } from 'react-router-dom';
export const NavbarheaderLogIn = (props) => {
  const navigate=useNavigate();
    const GoToProfile=(e)=>{
        navigate('/Profile')

    }
    const Exit=(e)=>{
      navigate('/')

  }
  return (
    <Navbar className='w-100 container-fluid'>
    <ContainerNavBar>
     <NavbarBrand href="/">
       <NavBarImagePage
         alt="logo"

         src={logo}
       />
     </NavbarBrand>
     <ContainerButtons>
     <Button onClick={()=>{
        Exit();
        }}type='button'>
         salir
       </Button>
     <ContainerProfileData>
     <Button onClick={()=>{
        GoToProfile();
        }} type='button'>
         {props.UserName}
       </Button>
      <ContainerImg>
       <ImgProfile src={Image} />
       </ContainerImg>

     </ContainerProfileData>
     </ContainerButtons>
   </ContainerNavBar>
 </Navbar>

  )
}
