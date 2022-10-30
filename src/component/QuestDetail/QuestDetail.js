import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './quest.module.css';
import member from '../../img/account_circle_FILL0_wght400_GRAD0_opsz48.png';
import { Button, Label } from 'reactstrap';
import AgregarMiembroAObjetivo from '../../component/modales/modal-agregar-miembro-objetivo';
import EliminarMiembroObjetivo from '../../component/modales/modal-eliminar-miembro-objetivo';
import ModalObjetivo from '../../component/modales/modal-objetivo';
import { ModalAddRol } from '../Modals/ModalAddRol/ModalAddRol';
import { ModalAddList } from '../Modals/ModalAddList/ModalAddList';
const QuestDetail = () => {
  const [openModalAddList, setOpenModalAddList]=useState(false);
  const [openModalAddRol,setOpenModalAddRol]=useState(false);


  const [showAgregarMiembro, setShowAgregarMiembro] = useState(false);
  const [showEliminarMiembro, setShowEliminarMiembro] = useState(false);
  const [isShowObjetivo, setisShowObjetivo] = useState(false);
  const [isAddObjetivo, setisAddObjetivo] = useState(true);
  const [isEditObjetivo, setisEditObjetivo] = useState(false);
  const [isOnlyViewObjetivo, setisOnlyViewObjetivo] = useState(false);

  const handleShowObjetivo = () => {
    setisShowObjetivo(!isShowObjetivo);
  };

  const handleAddObjetivo = () => {
    setisAddObjetivo(true);
    setisEditObjetivo(false);
    setisOnlyViewObjetivo(false);
  };

  const handleEditObjetivo = () => {
    setisAddObjetivo(false);
    setisEditObjetivo(true);
    setisOnlyViewObjetivo(false);
  };

  const handleOnlyViewObjetivo = () => {
    setisAddObjetivo(false);
    setisEditObjetivo(false);
    setisOnlyViewObjetivo(true);
  };

  const handleAgregarMiembro = () => {
    setShowAgregarMiembro(false);
  };
  const handleEliminarMiembro = () => {
    setShowEliminarMiembro(false);
  };
  const handleShowAgregarMiembro = () => {
    setShowAgregarMiembro(!showAgregarMiembro);
  };
  const handleShowEliminarMiembro = () => {
    setShowEliminarMiembro(!showEliminarMiembro);
  };

  return (
    <>
      <ModalObjetivo
        isHidden={isShowObjetivo}
        setShowModal={handleShowObjetivo}
        isAdd={isAddObjetivo}
        isEdit={isEditObjetivo}
        isOnlyView={isOnlyViewObjetivo}
        setisEditObjetivo={handleEditObjetivo}
        setAddObjetivo={handleAddObjetivo}
        setOnlyViewObjetivo={handleOnlyViewObjetivo}
        setShowAgregarMiembro={handleShowAgregarMiembro}
        setShowEliminarMiembro={handleShowEliminarMiembro}
      />

      <div  className={css.quest_container}>
        <label className={css.quest_title}>Grupo 1 Quest 1</label>
        <hr />

        <div className="col-12 d-flex align-items-center">
          <Label className="ColButton col-2">
            <Button  onClick={()=>{
              setOpenModalAddRol(true);
              }}  className={'ColButton '}>
              <span className="material-symbols-outlined text-black">add</span>
              Agregar Rol
            </Button>
          </Label>

          <label className={css.roles_label + ' px-2'}>Roles Activos</label>
          <div className={css.roles_tag + ''}>
            <label className={css.tag}>Programador</label>
            <label className={css.tag}> , </label>
            <label className={css.tag}>Diseñador</label>
          </div>
        </div>

        <div className="col-12 d-flex my-2">
          <Label className="ColButton col-2">
            <Button onClick={()=>{
              setOpenModalAddList(true);
              }} className={'ColButton '}>
              <span className="material-symbols-outlined text-black">add</span>
              Agregar Lista
            </Button>
          </Label>
        </div>

        <div className="col-12 d-flex">
          <div className="col-3">
            <div className={css.col_head + ' col-12 text-center'}>
              <h3 className={css.t_head}>To Do</h3>
            </div>
            <div
              className={css.objetivo_box + ' my-2'}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                handleOnlyViewObjetivo();
                handleShowObjetivo();
              }}
            >
              <div className={css.objetivo_color}></div>
              <label className={css.descripcion_objetivo + ' px-2'}>
                Objetivo 1
              </label>
              <hr className="m-0" />
              <div className="col-12 d-flex justify-content-between align-items-center p-2">
                <label className={css.date}>29/08/2022</label>
                <img src={member} className={css.img_member} />
              </div>
            </div>

            <Label className="ColButton col-12">
              <Button
                className={'ColButton '}
                onClick={() => {
                  handleAddObjetivo();
                  handleShowObjetivo();
                }}
              >
                <span className="material-symbols-outlined text-black">
                  add
                </span>
                Agregar Objetivo
              </Button>
            </Label>
          </div>
          <div className="col-3 mx-3">
            <div className={css.col_head + ' col-12 text-center'}>
              <h3 className={css.t_head}>Doing</h3>
            </div>

            <Label className="ColButton col-12 mt-2">
              <Button
                className={'ColButton '}
                onClick={() => {
                  handleAddObjetivo();
                  handleShowObjetivo();
                }}
              >
                <span className="material-symbols-outlined text-black">
                  add
                </span>
                Agregar Objetivo
              </Button>
            </Label>
          </div>
          <div className="col-3">
            <div className={css.col_head + ' col-12 text-center'}>
              <h3 className={css.t_head}>Done</h3>
            </div>

            <Label className="ColButton col-12 mt-2">
              <Button
                className={'ColButton '}
                onClick={() => {
                  handleAddObjetivo();
                  handleShowObjetivo();
                }}
              >
                <span className="material-symbols-outlined text-black">
                  add
                </span>
                Agregar Objetivo
              </Button>
            </Label>
          </div>
        </div>
      </div>

      <AgregarMiembroAObjetivo
        showModal={showAgregarMiembro}
        onAgregarMiembro={handleAgregarMiembro}
      />
      <EliminarMiembroObjetivo
        showModal={showEliminarMiembro}
        onEliminarMiembro={handleEliminarMiembro}
      />
      {openModalAddRol&& <ModalAddRol CloseModalModalAddRol={setOpenModalAddRol}  />}
      {openModalAddList&& <ModalAddList CloseModalModalAddList={setOpenModalAddList}  />}
    </>
  );
};

QuestDetail.propsTypes = {

};

export default QuestDetail;
