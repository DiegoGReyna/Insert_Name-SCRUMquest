
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
import { BackGroundModal, ModalCard, GroupModalCol, ModalForm, TitleModal, ModalRowReverse, RowCenter, ModalText } from './style';
export const Modalfinishquest = ({CloseModal, Name}) => {
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
                  <TitleModal>{Name}</TitleModal>
                  <ModalText className='LabelInput'>
                    ¿Estás seguro que deseas dar esta quest por terminada?<br/>
                    Este cambio es irreversible.
                  </ModalText>
                    <RowCenter>
                      <Button   name="cancel" onClick={()=>CloseModal(false)} >Cancelar</Button>
                      <Button   type='submit'>Continuar</Button>
                    </RowCenter>

                  </GroupModalCol>



              </ModalForm>
          </ModalCard>
    </BackGroundModal>
  )
}
