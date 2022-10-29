import React from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'
import { Title, Paddedcontainer, Piccontainer ,PiccontainerData} from './style'
import { Imagecontainer } from '../Imagecontainer/Imagecontainer'
import { Modaleditprofile } from '../Modaleditprofile/Modaleditprofile'
import { ModalAchievements } from '../Modals/ModalAchievements/ModalAchievements'
import { today } from '../../utils/today'

export const Profileinfocontainer = ({Name, Level, LvTitle, curExp, nextExp, img, Pass}) => {
  const [openModalE,setOpenModalE]=useState(false);
  const [openModalAchievements,setOpenModalAchievements]=useState(false);
  return (
    <Paddedcontainer>
    <PiccontainerData>
    <Title>{Name}</Title>

    <Piccontainer>
      <Imagecontainer imgSource={img}>
      </Imagecontainer>
    </Piccontainer>

    <Title>Lv{Level} {LvTitle}</Title>

    <Title>Exp: {curExp} / {nextExp}</Title>

    <Button onClick={()=>{
        setOpenModalAchievements(true);
      }}>Ver Logros</Button>
      {openModalAchievements&& <ModalAchievements CloseModalModalAchievements={setOpenModalAchievements}/>}
    <Button onClick={()=>{
        setOpenModalE(true);
      }}>Editar</Button>
      {openModalE&& <Modaleditprofile CloseModal={setOpenModalE} Name={"Usuario1"} Pass={Pass} Img={img}/>}
      </PiccontainerData>
    </Paddedcontainer>
  )
}
