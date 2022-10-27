import React, { useState } from 'react';
import { Navbarheader } from '../../component/Navbarheader/Navbarheader';
import { Modalcreategroup } from '../../component/Modals/Modalcreategroup/Modalcreategroup';
import { ModalAchievements } from '../../component/Modals/ModalAchievements/ModalAchievements';
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

export const Userpage = () => {
  const [openModal,setOpenModal]=useState(false);
  const [openModalAchievements,setOpenModalAchievements]=useState(false);
  return (
    <div>

      <Navbarheader />

      <Button   onClick={()=>{
        setOpenModal(true);
      }}  color="danger">
          Agregar grupo
        </Button>
        <Button   onClick={()=>{
        setOpenModalAchievements(true);
      }}  color="danger">
        Logros
        </Button>

        {openModal&& <Modalcreategroup CloseModal={setOpenModal} />}
        {openModalAchievements&& <ModalAchievements CloseModalModalAchievements={setOpenModalAchievements} />}
    </div>
  )
}
