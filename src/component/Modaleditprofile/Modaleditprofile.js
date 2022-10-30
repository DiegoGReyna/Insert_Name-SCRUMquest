
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
import { BackGroundModal, ModalCard, GroupModalCol, ModalForm, TitleModal, ModalRowReverse, RowCenter, RowCenter100, Cont, Piccontainer, Cont2 } from './style';
import { Imagecontainer } from '../Imagecontainer/Imagecontainer';

export const Modaleditprofile = ({CloseModal, Name, Pass, Img}) => {
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
                  <TitleModal>Editar Perfil</TitleModal>
                    <Cont2>
                      <Button>&lt;</Button>
                      <Piccontainer>
                        <Imagecontainer imgSource={Img}>
                        </Imagecontainer>
                      </Piccontainer>
                      <Button>&gt;</Button>
                    </Cont2>

                    <FormGroup>
                      <Label className="LabelInput" for="IdQuest">
                        Usuario:
                      </Label>
                      <Input className='InputLogIn'
                      id="IdQuest"
                      name="QuestName"
                      placeholder="Ingrese un nombre para la quest"
                      type="text"
                      defaultValue={Name}
                        />
                    </FormGroup>
                    <FormGroup>
                      <RowCenter100>
                        <Cont>
                          <Label className="LabelInput" for="IdFrom">
                            Contraseña:
                          </Label>
                          <Input className='InputLogIn'
                            id="password"
                            name="password"
                            type="password"
                            value={Pass}
                          />
                        </Cont>
                        <Cont>
                          <Label className="LabelInput" for="IdFrom">
                            Confirmar Contraseña:
                          </Label>
                          <Input className='InputLogIn'
                            id="passwordC"
                            name="passwordC"
                            type="password"
                          />
                        </Cont>
                      </RowCenter100>
                    </FormGroup>


                    <RowCenter>
                      <Button   name="cancel" onClick={()=>CloseModal(false)} >Cancelar</Button>
                      <Button   type='submit' onClick={()=>CloseModal(false)} >Editar</Button>
                    </RowCenter>

                  </GroupModalCol>



              </ModalForm>
          </ModalCard>
    </BackGroundModal>
  )
}
