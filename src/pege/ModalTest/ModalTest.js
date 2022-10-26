import React, { useState } from 'react';
import { Navbarheader } from '../../component/Navbarheader/Navbarheader';
import { Modalcreategroup } from '../../component/Modals/Modalcreategroup/Modalcreategroup';
import { Modalcreatequest } from '../../component/Modalcreatequest/Modalcreatequest';
import { Modaleditquest } from '../../component/Modaleditquest/Modaleditquest';
import { today } from '../../utils/today';
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
} from 'reactstrap';

export const Modaltest = () => {
  const [openModal,setOpenModal]=useState(false);
  return (
    <div>

      <Navbarheader />

      <Button   onClick={()=>{
        setOpenModal(true);
      }}  color="danger">
          Crear Quest
        </Button>
        {openModal&& <Modalcreatequest CloseModal={setOpenModal} />}

        <Button   onClick={()=>{
        setOpenModal(true);
      }}  color="danger">
          Editar Quest
        </Button>
        {openModal&& <Modaleditquest CloseModal={setOpenModal} Name="Quest1" From={today()} To={today()}/>}
    </div>
  )
}
