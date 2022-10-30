import React from 'react';
import PropTypes from 'prop-types';
import css from '../../assets/styles/agregarmiembro.module.css';
import member from '../../assets/images/users/account_circle_FILL0_wght400_GRAD0_opsz48.png';
import { Button, Label } from 'reactstrap';

const AgregarMiembroAObjetivo = ({ showModal, onAgregarMiembro }) => {
  return (
    <div hidden={!showModal} className={css.modal_backscreen}>
      <div className={css.modal_agregar_miembro}>
        <div className={'col-12 d-flex flex-column align-items-center'}>
         <div className="d-flex justify-content-between col-12">
          <div></div>
         <label className={css.title + ' mt-3 fw-bold'}>
            Agregar Participantes a Objetivo
          </label>
          <button
            type="button"
            onClick={onAgregarMiembro}
            className=" btn btn-outline-light text-black"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
         </div>
          <label className={css.subtitle + ' mt-4'}>Miembros del Equipo</label>

          <div
            className={
              css.members_box + ' d-flex align-items-center flex-column'
            }
          >
            <div className={css.member}>
              <img src={member} className={css.member_img} />
              <div className="d-flex flex-column justify-content-around">
                <label className={css.member_labels + ' mb-2'}>
                  Nombre de Usuario 1
                </label>
                <label className={css.member_labels}>
                  correodeusuario1@outlook.com
                </label>
              </div>
              <div className="d-flex align-items-center">
                {true ? (
                  <label className={css.member_added_label}>Agregado</label>
                ) : (
                  <Label className="ColButton col-3">
                    <Button className={'ColButton '}>Editar Grupo</Button>
                  </Label>
                )}
              </div>
            </div>

            <div className={css.member}>
              <img src={member} className={css.member_img} />
              <div className="d-flex flex-column justify-content-around">
                <label className={css.member_labels + ' mb-2'}>
                  Nombre de Usuario 2
                </label>
                <label className={css.member_labels}>
                  correodeusuario2@outlook.com
                </label>
              </div>
              <div className="d-flex align-items-center">
                {false ? (
                  <label className={css.member_added_label}>Agregado</label>
                ) : (
                  <Label className={'ColButton m-0'}>
                    <Button
                      onClick={onAgregarMiembro}
                      className={'ColButton ' + css.button_add}
                    >
                      Agregado
                    </Button>
                  </Label>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AgregarMiembroAObjetivo.propsTypes = {
  showModal: PropTypes.bool.isRequired,
  onAgregarMiembro: PropTypes.func.isRequired,
};

export default AgregarMiembroAObjetivo;
