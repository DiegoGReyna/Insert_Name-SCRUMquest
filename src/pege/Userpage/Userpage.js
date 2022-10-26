import React, { useState } from 'react';
import { Navbarheader } from '../../component/Navbarheader/Navbarheader';
import { Modalcreategroup } from '../../component/Modals/Modalcreategroup/Modalcreategroup';
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
  const [openMoal,setOpenModal]=useState(false);
  return (
    <div>

      <Navbarheader />

      <Button   onClick={()=>{
        setOpenModal(true);
      }}  color="danger">
          Click Me
        </Button>
        {openMoal&& <Modalcreategroup CloseModal={setOpenModal} />}
    </div>
  )
}
