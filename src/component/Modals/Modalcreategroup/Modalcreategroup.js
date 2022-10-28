
import React, { useState } from 'react';
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
import { BackGroundModal,ModalCard,GroupModalCol,ModalForm,TitleModal ,ModalRowReverse ,RowCenter } from './style';
export const Modalcreategroup = ({CloseModal}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Creado Grupo")
  }

  return (
    <BackGroundModal>
          <ModalCard MyWidth={"50%"} MyHeight={"50%"} MyGridTemplateRows={"5% 85% 10%"} >
              <ModalRowReverse>
               <Button onClick={()=>CloseModal(false)}  >X</Button>
              </ModalRowReverse>
              <ModalForm onSubmit={handleSubmit}>
                <GroupModalCol MyWidth="90%">
                  <TitleModal>Crear grupo</TitleModal>
                    <FormGroup>
                      <Label className="LabelInput" for="IdGroup">
                        Nombre de grupo
                      </Label>
                      <Input className='InputLogIn'
                      id="IdGroup"
                      name="Group name"
                      placeholder="Ingrese un Nombre para el grupo"
                        type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                      <Label className="LabelInput" for="IdGroupDescription">
                        Descripcion del grupo
                      </Label>
                      <Input className='InputLogIn'
                        id="IdGroupDescription"
                        name="password"
                        placeholder="Ingrese una descripcion al grupo"
                        type="text"
                      />
                    </FormGroup>
                    <RowCenter MyGridTemplateColumns="20% 20%" MyGap="5px">
                          <Button   name="cancel"
                          onClick={()=>CloseModal(false)} >Cancelar</Button>
                          <Button   type='submit'  >Crear</Button>
                          </RowCenter>
                  </GroupModalCol>
              </ModalForm>
          </ModalCard>
    </BackGroundModal>
  )
}
