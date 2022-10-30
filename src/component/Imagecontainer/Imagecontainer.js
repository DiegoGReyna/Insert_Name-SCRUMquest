import React from 'react'
import { Cont } from './style'

export const Imagecontainer = ({imgSource}) => {
  return (
    <Cont>
      <img src={imgSource} width="90%" height="90%">
      </img>
    </Cont>
  )
}
