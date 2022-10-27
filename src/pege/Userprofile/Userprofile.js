import React from 'react'
import { Navbarheader } from '../../component/Navbarheader/Navbarheader'
import { Navbargroups } from '../../component/Navbargroups/Navbargroups'
import { ProfileContainer, RowContainer } from './style'
import { Container } from 'reactstrap'
import { Profileinfocontainer } from '../../component/Profileinfocontainer/Profileinfocontainer'
import profilePic from "../../img/guest2.png"
import { imageManager } from '../../utils/imageManager'

export const Userprofile = () => {
  return (
    <ProfileContainer>
      <Navbarheader />
      <RowContainer>
        <Navbargroups />
        <Profileinfocontainer Name={"Usuario1"} Level={"1"} LvTitle={"Principiante"} curExp={0} nextExp={5} img={imageManager(6)}></Profileinfocontainer>
      </RowContainer>
    </ProfileContainer>
  )
}
