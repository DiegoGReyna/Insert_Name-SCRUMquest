import React from 'react'
import { ContainerNavBarGroup } from './style'
import {Col, NavbarBrand,Row ,Form,Button,FormGroup,Input,Label} from 'reactstrap';

export const Navbargroups = () => {
  return (
    <ContainerNavBarGroup>

<Label className='ColButton' lg="8">
            <Button className='ColButton'>
              Sesion
            </Button>
          </Label>

          <Label className='ColButton' lg="8">
            <Button className='ColButton'>
              Sesion 2
            </Button>
          </Label>

          <Label className='ColButton' lg="8">
            <Button className='ColButton'>
              Sesion 3
            </Button>
          </Label>
    </ContainerNavBarGroup>
  )
}
