
import React from 'react'
import {
  Button,
} from 'reactstrap';
import { BackGroundModal,ModalCard,GroupModalCol,ModalForm,TitleModal ,ModalRowReverse ,RowCenter } from '../Modalcreategroup/style';
import {ContainerAchievements  } from './style';
import { Achievements } from '../../Achievement/Achievement';
export const ModalAchievements = ({CloseModalModalAchievements}) => {

  return (
    <BackGroundModal>

          <ModalCard MyWidth={"50%"} MyHeight={"80%"} MyGridTemplateRows={"5% 5% 80% 10%"}>
              <ModalRowReverse>
               <Button onClick={()=>CloseModalModalAchievements(false)}  >X</Button>
              </ModalRowReverse>
              <TitleModal>Logros</TitleModal>
              <GroupModalCol MyWidth={"100%"} MyJustifyItems={"center"}>
                <ContainerAchievements>
                  <Achievements  alt="UserImage"   Name={"Nombre de logro"}  Description={"descripcion de logro"} Status={"Desbloqueado"}/>
                  <Achievements  alt="UserImage"   Name={"Nombre de logro"}  Description={"descripcion de logro"} Status={"Desbloqueado"}/>
                  <Achievements  alt="UserImage"   Name={"Nombre de logro"}  Description={"descripcion de logro"} Status={"Desbloqueado"}/>
                  <Achievements  alt="UserImage"   Name={"Nombre de logro"}  Description={"descripcion de logro"} Status={"Desbloqueado"}/>
                  <Achievements  alt="UserImage"   Name={"Nombre de logro"}  Description={"descripcion de logro"} Status={"Desbloqueado"}/>
                  <Achievements  alt="UserImage"   Name={"Nombre de logro"}  Description={"descripcion de logro"} Status={"Desbloqueado"}/>
                  <Achievements  alt="UserImage"   Name={"Nombre de logro"}  Description={"descripcion de logro"} Status={"Desbloqueado"}/>
                  <Achievements  alt="UserImage"   Name={"Nombre de logro"}  Description={"descripcion de logro"} Status={"Desbloqueado"}/>
                </ContainerAchievements>
              <RowCenter>
                    <Button  className="AcceptButton" name="Accept"
                    onClick={()=>CloseModalModalAchievements(false)} >Acceptar</Button>
              </RowCenter>
              </GroupModalCol>
          </ModalCard>
    </BackGroundModal>
  )
}
