import React from 'react';
import PropTypes from 'prop-types';
import member from '../../assets/images/users/account_circle_FILL0_wght400_GRAD0_opsz48.png';
import css from '../../assets/styles/eliminarmiembro.module.css';
import { Button, Label } from 'reactstrap';

const EliminarMiembroObjetivo = ({ showModal, onEliminarMiembro }) => {
  return (
    <div hidden={!showModal} className={css.modal_backscreen}>
      <div className={css.modal_eliminar_miembro}>
        <div className={'col-12 d-flex flex-column align-items-center'}>
          
          <div className="d-flex justify-content-between col-12">
          <div></div>
          <label className={css.title + ' mt-3 fw-bold'}>
            Eliminar Participante de Objetivo
          </label>
          <button
            type="button"
            onClick={onEliminarMiembro}
            className=" btn btn-outline-light text-black"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
         </div>
          <label className={css.subtitle + ' mt-4 mb-2'}>Miembro</label>

          <div
            className={
              css.member_box +
              ' d-flex flex-column justify-content-around col-11 align-items-center p-2'
            }
          >
            <img src={member} className={css.member_img + ' mb-2'} />
            <label className={css.member_labels + ' mb-2'}>
              Nombre de Usuario
            </label>
            <label className={css.member_labels + ' mb-2'}>
              correodeusuario@outlook.com
            </label>
            <button
              onClick={onEliminarMiembro}
              className={css.button_font + ' btn btn-danger col-6 mb-2'}
            >
              Eliminar 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EliminarMiembroObjetivo.propsTypes = {
  showModal: PropTypes.bool.isRequired,
  onEliminarMiembro: PropTypes.func.isRequired,
};

export default EliminarMiembroObjetivo;
