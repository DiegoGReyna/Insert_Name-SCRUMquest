import React, { useState } from 'react';
import { Navbarheader } from '../../component/Navbarheader/Navbarheader';
import { Modalcreategroup } from '../../component/Modals/Modalcreategroup/Modalcreategroup';
import { Modalcreatequest } from '../../component/Modalcreatequest/Modalcreatequest';
import { Modaleditquest } from '../../component/Modaleditquest/Modaleditquest';
import { today } from '../../utils/today';
import { Modalfinishquest } from '../../component/Modalfinishquest/Modalfinishquest';
import { ModalRateMembers } from '../../component/Modals/ModalRateMembers/ModalRateMembers';
import { Route ,Routes } from 'react-router-dom';

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
  const [openModalC,setOpenModalC]=useState(false);
  const [openModalE,setOpenModalE]=useState(false);
  const [openModalF,setOpenModalF]=useState(false);
  const [openModalR,setOpenModalR]=useState(false);

  return (
    <div>

      <Navbarheader />

      <Button   onClick={()=>{
        setOpenModalC(true);
      }}  color="danger">
          Crear Quest
        </Button>
        {openModalC&& <Modalcreatequest CloseModal={setOpenModalC} />}

        <Button   onClick={()=>{
        setOpenModalE(true);
      }}  color="danger">
          Editar Quest
        </Button>
        {openModalE&& <Modaleditquest CloseModal={setOpenModalE} Name="Quest1" From={today()} To={today()}/>}

        <Button   onClick={()=>{

        setOpenModalF(true);

      }}  color="danger">
          Finalizar Quest
        </Button>
        {/* {openModalF&& <Modalfinishquest CloseModal={setOpenModalF} Name="Quest1"  />} */}
        {/* {openModalR&& <ModalRateMembers CloseModalReteMembers={setOpenModalR} />} */}

        {openModalF&& <Modalfinishquest CloseModal={setOpenModalF} Name="Quest1"  />}
        <Routes>
           <Route  path='RateMembers'  element={<ModalRateMembers CloseModalReteMembers={true}  />}/>
        </Routes>
    </div>
  )
}
