
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
import { ModalRateMembers } from '../Modals/ModalRateMembers/ModalRateMembers';
import { Link,useNavigate } from 'react-router-dom';
export const Modalfinishquest = ({CloseModal, Name}) => {
  const [openModalRateMembers,setOpenModalRateMembers]=useState(false);
  const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/oaoaaasasddds')

        console.log('holassss');
        debugger;
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
                      <Button   type='submit'  onClick={()=>{
                            navigate('/User/groups/RateMembers')
                                    CloseModal(false);
                                }}>Continuar</Button>
                    </RowCenter>

                  </GroupModalCol>

              </ModalForm>

          </ModalCard>


    </BackGroundModal>
  )
}
