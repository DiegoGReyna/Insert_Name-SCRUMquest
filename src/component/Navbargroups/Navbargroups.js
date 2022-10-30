import React, { useState } from 'react'
import { ContainerNavBarGroup } from './style'
import {useNavigate } from 'react-router-dom';
import { Button,Label } from 'reactstrap';
import { Modalcreategroup } from '../../component/Modals/Modalcreategroup/Modalcreategroup';
export const Navbargroups = () => {
  const [grupos, setGrupos] = useState([{ _idGrupo: 1, Nombre: "Grupo 1" }, { _idGrupo: 2, Nombre: "Grupo 2" }]);
  const [openModal,setOpenModal]=useState(false);

  const navigate=useNavigate();
  const GoToGroup=(e)=>{
      navigate('/User/groups')
  }

  return (
    <ContainerNavBarGroup>

      {grupos.map((g, i) => (
        <Label key={g._idGrupo} className='ColButton' lg="8">
          <Button onClick={()=>{
        GoToGroup();
      }} className='ColButton'>
            {g.Nombre}
          </Button>
        </Label>
      ))}

      <Label className='ColButton' lg="6">
        <Button onClick={()=>{
        setOpenModal(true);
      }} className='ColButton'>
            <span className="material-symbols-outlined text-black">
            add
            </span> Crear Grupo
        </Button>
      </Label>
      {openModal&& <Modalcreategroup CloseModal={setOpenModal} />}
    </ContainerNavBarGroup>
  )
}
