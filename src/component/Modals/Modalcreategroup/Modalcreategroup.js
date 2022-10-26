
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
    console.log("iniciando secion")
  }

  return (
    <BackGroundModal>
          <ModalCard>
              <ModalRowReverse>
               <Button onClick={()=>CloseModal(false)}  >X</Button>
              </ModalRowReverse>
              <ModalForm onSubmit={handleSubmit}>

                <GroupModalCol>
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


                    <RowCenter>

                          <Button   type='submit'  >submit</Button>
                          <Button   name="cancel"
                          onClick={()=>CloseModal(false)} >Cancelar</Button>

                          </RowCenter>

                  </GroupModalCol>



              </ModalForm>
          </ModalCard>
    </BackGroundModal>
  )
}
