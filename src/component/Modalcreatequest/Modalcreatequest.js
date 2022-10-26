
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
import { BackGroundModal, ModalCard, GroupModalCol, ModalForm, TitleModal, ModalRowReverse, RowCenter, RowCenter100 } from './style';
export const Modalcreatequest = ({CloseModal}) => {
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
                  <TitleModal>Crear quest</TitleModal>
                    <FormGroup>
                      <Label className="LabelInput" for="IdQuest">
                        Nombre de la quest:
                      </Label>
                      <Input className='InputLogIn'
                      id="IdQuest"
                      name="QuestName"
                      placeholder="Ingrese un nombre para la quest"
                        type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                      <RowCenter100>
                        <Container>
                          <Label className="LabelInput" for="IdFrom">
                            De:
                          </Label>
                          <Input className='InputLogIn'
                            id="IdFrom"
                            name="From"
                            type="date"
                          />
                        </Container>
                        <Container>
                          <Label className="LabelInput" for="IdFrom">
                            A:
                          </Label>
                          <Input className='InputLogIn'
                            id="IdFrom"
                            name="From"
                            type="date"
                          />
                        </Container>
                      </RowCenter100>
                    </FormGroup>


                    <RowCenter>
                      <Button   name="cancel" onClick={()=>CloseModal(false)} >Cancelar</Button>
                      <Button   type='submit'  >Crear</Button>
                    </RowCenter>

                  </GroupModalCol>



              </ModalForm>
          </ModalCard>
    </BackGroundModal>
  )
}
