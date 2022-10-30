import React, { useState } from 'react';
import {
  ContainerGrid,
  ContainerQuests,
  Backgroundquests,
  BackgroundNewquests,
  LetterG,
  LetterP,
  LetterPR,
  LetterPG,
  Boton,
} from './style';
import { Questcards } from '../Questcards/Questcards';
import {
  Button,
  Label,
} from 'reactstrap';
import fcg from './FormstyleCG.css';
import groups from './groups.module.css';
import ModalMiembros from '../../component/modales/modal-miembros';
import imgUser from '../../assets/images/users/account_circle_FILL0_wght400_GRAD0_opsz48.png';
import ModalOpcionGrupo from '../../component/modales/modal-opcion-grupo';
import { Modalcreatequest } from '../Modalcreatequest/Modalcreatequest';
import {useNavigate,Routes,Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {ContainerQuestCarInfo,ContainerButtons,ContainerCard} from './style'

import { Modalfinishquest } from '../Modalfinishquest/Modalfinishquest';
import { ModalRateMembers } from '../Modals/ModalRateMembers/ModalRateMembers';
import { Modaleditquest } from '../Modaleditquest/Modaleditquest';
import { today } from '../../utils/today';
export const Containergroups = ({ showQuests}) => {

  const [openModalE,setOpenModalE]=useState(false);
  const [openModalF,setOpenModalF]=useState(false);
  const navigate=useNavigate();
    const handleQuest=(e)=>{
        navigate('quests')
    }
  const [openModalC,setOpenModalC]=useState(false);
  const [quests, setQuests] = useState([
    {
      _id: 1,
      Nombre: 'Quest 1',
      FechaInicio: '20 Agosto',
      FechaFin: '23 Agosto',
      Status: 'Finalizada',
    },
    {
      _id: 2,
      Nombre: 'Quest 2',
      FechaInicio: '20 Agosto',
      FechaFin: '23 Agosto',
      Status: 'En Proceso',
    },
  ]);

  const [showMembers, setShowMembers] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [members, setMembers] = useState([
    {
      Imagen: imgUser,
      Nombre: 'Nombre de Usuario 1',
      Correo: 'correodeusuario1@outlook.com',
      Rol: 'ROL',
    },
    {
      Imagen: imgUser,
      Nombre: 'Nombre de Usuario 2',
      Correo: 'correodeusuario2@outlook.com',
      Rol: 'ROL',
    },
  ]);
  const [editionMode, setEditionMode] = useState(false);

  const handleShowMembers = () => {
    setShowMembers(!showMembers);
  };

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleAddMember = () => {
    const txtInp = document.getElementById('txt_newMember');
    const newMember = {
      Imagen: imgUser,
      Nombre: txtInp.value,
      Correo: txtInp.value + '@outlook.com',
      Rol: 'ROL',
    };

    setMembers([...members, newMember]);
  };

  const handleEditMemberRol = () => {};

  const handleEditionModeOn = () => {
    setEditionMode(true);
  };

  const handleEditionModeOff = () => {
    setEditionMode(false);
  };

  const getClassNameStatus = (status) => {
    switch (status) {
      case 'Finalizada':
        return groups.status_finalizada;
      case 'En Proceso':
        return groups.status_en_proceso;
      case 'Pendiente':
        return groups.status_pendiente;
    }
  };

  return (
    <>
      {/* <ContainerGrid> */}
      <div hidden={!showQuests} className={groups.container_groups + ' '}>
        <LetterG className="fs-5">Grupo 1</LetterG>
        <div
          className={
            groups.members_options + ' col-12 d-flex justify-content-between'
          }
        >
          <Label className="ColButton col-2">
            <Button onClick={handleShowMembers} className="ColButton">
              Miembros
            </Button>
          </Label>
          <Label className="ColButton col-2">
            <Button onClick={handleShowOptions} className="ColButton">
              Opciones
            </Button>
          </Label>
        </div>

        <div className={groups.quest_container + ' col-12 d-flex flex-wrap'}>
          {quests.map((q, i) => (
            <div
              key={q._id}
              className={groups.quest_box + ' mb-2'}
            >
              <ContainerCard>
              <ContainerQuestCarInfo onClick={()=>{
                handleQuest();
              }
              }>
              <label className={groups.quest_title + ' '}>
                <strong>{q.Nombre}</strong>
              </label>
              <label className={groups.quest_date}>
                {q.FechaInicio} - {q.FechaFin}
              </label>
              <label
                className={
                  groups.quest_status + '  ' + getClassNameStatus(q.Status)
                }
              >
                {q.Status}
              </label>

              </ContainerQuestCarInfo>

              </ContainerCard>
              <ContainerButtons>
                  <Button  onClick={()=>{
                      setOpenModalE(true);
                    }}  type='button' name='Edit'><span className="material-symbols-outlined">
                  edit
                  </span></Button>
                  <Button  onClick={()=>{

                    setOpenModalF(true);

                    }}   type='button' name='Delete' ><span className="material-symbols-outlined">
                  delete</span>
                  </Button>
              </ContainerButtons>
            </div>
          ))}

          <div
            className={
              groups.quest_box_noQuest +
              ' mb-2 d-flex justify-content-center align-items-center'
            }
          >
            <Label className="ColButton col-11">
              <Button   onClick={()=>{
        setOpenModalC(true);
      }}    className={'ColButton ' + groups.btn_create_quest}>
        <span className="material-symbols-outlined text-black">
add
</span>
                Crear Quest
              </Button>
            </Label>
          </div>
        </div>
      </div>

      <ModalMiembros
        isHidden={showMembers}
        setShowModal={handleShowMembers}
        members={members}
        onAddMember={handleAddMember}
        editionMode={editionMode}
        onEditionModeOn={handleEditionModeOn}
        onEditionModeOff={handleEditionModeOff}
        onEditMember={handleEditMemberRol}
      />

      <ModalOpcionGrupo
        isShow={showOptions}
        handleShowModal={handleShowOptions}
      />
         {openModalE&& <Modaleditquest CloseModal={setOpenModalE} Name="Quest1" From={today()} To={today()}/>}
       {openModalC&& <Modalcreatequest CloseModal={setOpenModalC} />}
       {openModalF&& <Modalfinishquest CloseModal={setOpenModalF} Name="Quest1"  />}
        <Routes>
           <Route  path='RateMembers'  element={<ModalRateMembers CloseModalReteMembers={true}  />}/>
        </Routes>
    </>
  );
};

Containergroups.propsType = {
  showQuests: PropTypes.bool.isRequired,
  // handleShowQuests: PropTypes.func.isRequired,
};
