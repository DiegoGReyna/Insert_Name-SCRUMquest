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
import { RateMember} from '../../RateMember/RateMember';
import { Link,useNavigate } from 'react-router-dom';
export const ModalRateMembers = ({CloseModalReteMembers}) => {

  const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/User/groups')


    }
  return (
    <BackGroundModal>

          <ModalCard MyWidth={"50%"} MyHeight={"80%"} MyGridTemplateRows={"5% 85% 10%"} >
              <ModalRowReverse>
               {/* <Button onClick={()=>CloseModalReteMembers(false)}  >X</Button> */}
              </ModalRowReverse>
              <ModalForm onSubmit={handleSubmit}>
              <QuestName>Nombre de la quest</QuestName>
                 <SubtitleRateMembers>Califica a los miembros participantespara dar por terminada la quest</SubtitleRateMembers>
                  <GroupModalCol MyWidth={"100%"} MyJustifyItems={"center"}>

                        <ContainerRateMembers>
                            <RateMember Name={"Diego31"} Email={"DiegoReyna31@Outlook.com"} Rol={"Front-end"} />
                            <RateMember Name={"Jose"} Email={"Jose@Outlook.com"} Rol={"Front-end"} />
                            <RateMember Name={"Maria"} Email={"Maria@Outlook.com"} Rol={"Front-end"} />
                            <RateMember Name={"Miguel_00"} Email={"XxMiguel360xX@Outlook.com"} Rol={"Back-end"} />
                            <RateMember Name={"Alejandro20"} Email={"Alejandro@Outlook.com"} Rol={"Back-end"} />
                            <RateMember Name={"Julian01"} Email={"Julian200@Outlook.com"} Rol={"Back-end"} />
                        </ContainerRateMembers>



                        <RowCenter MyGridTemplateColumns="20%" MyGap="5px">
                                  {/* <Button   name="cancel"
                                  onClick={()=>CloseModalReteMembers(false)} >Cancelar</Button> */}
                                  <Button   type='submit'  onClick={()=>CloseModalReteMembers(false)} >Listo</Button>
                                  </RowCenter>
                      </GroupModalCol>
              </ModalForm>
          </ModalCard>

    </BackGroundModal>
  )
}
