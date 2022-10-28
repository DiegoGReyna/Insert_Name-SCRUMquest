import React from 'react'
import { BackGroundModal,ModalCard,GroupModalCol,ModalForm,TitleModal ,ModalRowReverse ,RowCenter } from '../Modalcreategroup/style';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Row ,Col ,Container
} from 'reactstrap';

import{QuestName,ContainerRateMembers,SubtitleRateMembers} from './style'
import { RateMember } from '../../RateMember/RateMember';
export const ModalRateMembers = ({CloseModalReteMembers}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Creado Grupo")
  }
  return (
    <BackGroundModal>
          <ModalCard MyWidth={"50%"} MyHeight={"80%"} MyGridTemplateRows={"5% 85% 10%"} >
              <ModalRowReverse>
               <Button onClick={()=>CloseModalReteMembers(false)}  >X</Button>
              </ModalRowReverse>
              <ModalForm onSubmit={handleSubmit}>
              <QuestName>Nombre de la quest</QuestName>
                 <SubtitleRateMembers>Califica a los miembros participantespara dar por terminada la quest</SubtitleRateMembers>
                  <GroupModalCol MyWidth={"100%"} MyJustifyItems={"center"}>

                        <ContainerRateMembers>
                            <RateMember Name={"Diego31"} Email={"DiegoReyna31@Outlook.com"} Rol={"Front-end"} />
                            <RateMember Name={"Diego31"} Email={"DiegoReyna31@Outlook.com"} Rol={"Front-end"} />
                            <RateMember Name={"Diego31"} Email={"DiegoReyna31@Outlook.com"} Rol={"Front-end"} />
                            <RateMember Name={"Diego31"} Email={"DiegoReyna31@Outlook.com"} Rol={"Front-end"} />
                            <RateMember Name={"Diego31"} Email={"DiegoReyna31@Outlook.com"} Rol={"Front-end"} />
                            <RateMember Name={"Diego31"} Email={"DiegoReyna31@Outlook.com"} Rol={"Front-end"} />
                        </ContainerRateMembers>



                        <RowCenter MyGridTemplateColumns="20% 20%" MyGap="5px">
                                  <Button   name="cancel"
                                  onClick={()=>CloseModalReteMembers(false)} >Cancelar</Button>
                                  <Button   type='submit'  >Calificar</Button>
                                  </RowCenter>
                      </GroupModalCol>
              </ModalForm>
          </ModalCard>
    </BackGroundModal>
  )
}
