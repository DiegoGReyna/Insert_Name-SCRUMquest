import React from 'react'
import { Button } from 'reactstrap'
import { Title, Paddedcontainer, Piccontainer } from './style'
import { Imagecontainer } from '../Imagecontainer/Imagecontainer'

export const Profileinfocontainer = ({Name, Level, LvTitle, curExp, nextExp, img}) => {
  return (
    <Paddedcontainer>

    <Title>{Name}</Title>

    <Piccontainer>
      <Imagecontainer imgSource={img}>
      </Imagecontainer>
    </Piccontainer>

    <Title>Lv{Level} {LvTitle}</Title>

    <Title>Exp: {curExp} / {nextExp}</Title>

    <Button>Ver Logros</Button>
    <Button>Editar</Button>

    </Paddedcontainer>
  )
}
