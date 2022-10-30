import React from 'react'
import logo from "../../img/LogoHD.png"
import {Col, NavbarBrand,Row } from 'reactstrap';
import {Navbar,NavBarImagePage,ContainerNavBar} from './style';
import { Route ,Routes } from 'react-router-dom';
export const Navbarheader = () => {
  return (
    <Navbar className='w-100 container-fluid'>
     <ContainerNavBar>
      <NavbarBrand href="/">
        <NavBarImagePage
          alt="logo"

          src={logo}
        />
      </NavbarBrand>

    </ContainerNavBar>
  </Navbar>


  )
}
