import React from 'react';
//Agregar el css module correspondiente al modal por ahora es valido copiar lo que hay en este
import mbmr from '../../assets/styles/modal.module.css';
import PropTypes from 'prop-types';
import { Button, Label } from 'reactstrap';

const ModalOpcionGrupo = ({ isShow, handleShowModal }) => {
  return (
    <div hidden={!isShow} className={mbmr.modal_backscreen}>
      <div className={mbmr.modal_sm + ' p-4'}>
        <div className="col-12 d-flex justify-content-between">
          <label className={mbmr.title + ' '}>Opciones del Grupo</label>
          <button
            onClick={handleShowModal}
            className=" btn btn-outline-light text-black"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="col-12 d-flex mt-3">
          <input
            type="text"
            id="txt_newMember"
            placeholder="descripcion del grupo"
            className={mbmr.text_box + ' col-12'}
          />
        </div>

        <div className="col-12 d-flex mt-3 justify-content-around">
          <button className={mbmr.button_font + ' btn btn-danger col-3'}>
            Eliminar Grupo
          </button>
          <Label className="ColButton col-3">
            <Button className={'ColButton '}>Editar Grupo</Button>
          </Label>
        </div>
      </div>
    </div>
  );
};

ModalOpcionGrupo.propTypes = {
  isShow: PropTypes.bool.isRequired,
  handleShowModal: PropTypes.func.isRequired,
};

export default ModalOpcionGrupo;
