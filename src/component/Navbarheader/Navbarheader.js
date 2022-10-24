import React from 'react'
import logo from "../../img/LogoHD.png"
import {Col, NavbarBrand,Row } from 'reactstrap';
import {Navbar} from './style';
export const Navbarheader = () => {
  return (
    <Navbar className='w-100 container-fluid'>
     <Col>
      <NavbarBrand href="/">
        <img className='ms-4'
          alt="logo"

          src={logo}
          style={{
            height: 100,
            width: 220,

          }}
        />
      </NavbarBrand>
    </Col>
  </Navbar>


  )
}
