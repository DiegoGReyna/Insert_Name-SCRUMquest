import React from 'react';
import mbmr from '../../assets/styles/modal.module.css';
import PropTypes from 'prop-types';
import UserMember from './../../assets/images/users/skull.png';
import { Button, Label } from 'reactstrap';
import styles from './../../assets/styles/objetivos.module.css';

const ModalAddObjetivos = ({
  isHidden,
  setShowModal,
  isAdd,
  isEdit,
  isOnlyView,
  setisEditObjetivo,
  setAddObjetivo,
  setOnlyViewObjetivo,
  setShowAgregarMiembro,
  setShowEliminarMiembro,
}) => {
  return (
    <div hidden={!isHidden} className={mbmr.modal_backscreen + '  '}>
      <div className={mbmr.modal_xl + ' p-4'}>
        <div className="col-12 d-flex justify-content-between">
          <label className={mbmr.title + ' '}>
            {isAdd
              ? 'Agregar Objetivo'
              : isEdit
              ? 'Editar Objetivo'
              : isOnlyView
              ? 'Objetivo'
              : 'Agregar Objetivo'}
          </label>
          <button
            type="button"
            onClick={setShowModal}
            className=" btn btn-outline-light text-black"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <label className={mbmr.sub_title + ' '}>Nombre del Objetivo</label>
        <div className="col-12 d-flex mb-4 ">
          {isAdd || isEdit ? (
            <input
              type="text"
              id="txt_nameObjetivo"
              style={{ height: '60px' }}
              placeholder="Nombre del Objetivo"
              className={mbmr.text_box + ' col-9'}
            />
          ) : (
            <div className={styles.objetivo_name + ' col-9'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          )}
        </div>
        <label className={mbmr.sub_title + ' '}>Participantes</label>
        <div className="row mb-4">
          <div className="col-12  d-flex" style={{ gap: '7px' }}>
            <div
              onClick={setShowEliminarMiembro}
              className="rounded-circle d-flex align-items-center flex-comlumn justify-content-center"
              style={{
                backgroundColor: '#1283A3',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
              }}
            >
              <img src={UserMember} style={{ width: '50px' }} alt="Skull" />
            </div>
            {isAdd || isEdit ? (
              <button
                onClick={setShowAgregarMiembro}
                className={styles.ColButton + ' d-flex align-items-center'}
                style={{ gap: '3px' }}
              >
                <span className="material-symbols-outlined">person_add</span>
                Agregar miembro
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
        <label className={mbmr.sub_title + ' '}>Descripción</label>
        <div className="col-12 d-flex mb-4 ">
          {isAdd || isEdit ? (
            <textarea
              type="text"
              placeholder="Descripción del Objetivo"
              id="txt_descObjetivo"
              style={{ height: '60px' }}
              className={mbmr.text_box + ' col-9'}
            />
          ) : (
            <div className={styles.objetivo_name + ' col-9'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-3 mb-3">
            <label className={mbmr.sub_title + ' '}>Asignar Rol</label>
            <select className={styles.select_rol + ' '}>
              <option value="ROL">ROL</option>
            </select>
          </div>
          <div className="col-3  mb-3">
            <label className={mbmr.sub_title + ' '}>Progreso</label>
            <select className={styles.select_rol + ' '}>
              <option value="prog">Progreso</option>
            </select>
          </div>
          <div className="col-3  mb-3">
            <label className={mbmr.sub_title + ' '}>Prioridad</label>
            <select className={styles.select_rol + ' '}>
              <option value="1">Prioridad</option>
            </select>
          </div>
          <div className="col-3  mb-3">
            <label className={mbmr.sub_title + ' '}>Lista</label>
            <select className={styles.select_rol + ' '}>
              <option value="1">Lista</option>
            </select>
          </div>
          <div className="col-3  mb-3">
            <label className={mbmr.sub_title + ' '}>Fecha de inicio</label>
            <select className={styles.select_rol + ' '}>
              <option value="1"> Fecha de inicio</option>
            </select>
          </div>
          <div className="col-3  mb-3">
            <label className={mbmr.sub_title + ' '}>Fecha Final</label>
            <select className={styles.select_rol + ' '}>
              <option value="1"> Fecha Final</option>
            </select>
          </div>
        </div>
        <div
          className="col-12 d-flex justify-content-center"
          style={{ gap: '10px' }}
        >
          {isAdd && (
            <button
              className={styles.ColButton + ' d-flex align-items-center'}
              style={{ gap: '3px' }}
            >
              <span className="material-symbols-outlined">add</span>
              Agregar objetivo
            </button>
          )}
          {isEdit && (
            <>
              <button
                className={styles.ColButton + ' d-flex align-items-center'}
                style={{ gap: '3px' }}
              >
                Confirmar
              </button>
              <button
                className={styles.ColButtonRed + ' d-flex align-items-center'}
                style={{ gap: '3px' }}
              >
                Eliminar
              </button>
            </>
          )}
          {isOnlyView && (
            <button
              onClick={setisEditObjetivo}
              className={styles.ColButton + ' d-flex align-items-center'}
              style={{ gap: '3px' }}
            >
              Editar Objetivo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ModalAddObjetivos.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalAddObjetivos;
