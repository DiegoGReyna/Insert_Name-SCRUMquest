import React from 'react';
import mbmr from '../../assets/styles/modal.module.css';
import PropTypes from 'prop-types';
import { Button, Label } from 'reactstrap';
import { LetterG } from '../../component/Containergroups/style';

const ModalMiembros = ({
  isHidden,
  setShowModal,
  members,
  onAddMember,
  editionMode,
  onEditMember,
  onEditionModeOn,
  onEditionModeOff,
}) => {
  return (
    <div hidden={!isHidden} className={mbmr.modal_backscreen + '  '}>
      <div className={mbmr.modal_xl + ' p-4'}>
        <div className="col-12 d-flex justify-content-between">
          <label className={mbmr.title + ' '}>Miembros del Grupo</label>
          <button
            type="button"
            onClick={setShowModal}
            className=" btn btn-outline-light text-black"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <label className={mbmr.sub_title + ' '}>Agregar miembro al grupo</label>

        <div className="col-12 d-flex ">
          <input
            type="text"
            id="txt_newMember"
            className={mbmr.text_box + ' col-5'}
          />
          <Label className="ColButton col-3">
            <Button onClick={onAddMember} className={'ColButton '}>
              Agregar miembro
            </Button>
          </Label>
        </div>

        <div className="text-center col-12 mt-5">
          <label className={mbmr.sub_title + ' '}>Miembros del Grupo</label>
          <div className="col-12 d-flex">
            <Label className="ColButton col-3">
              <Button onClick={onEditionModeOn} className={'ColButton '}>
                Editar Miembros
              </Button>
            </Label>

            <Label hidden={!editionMode} className="ColButton col-2 mx-2">
              <Button onClick={onEditionModeOff} className={'ColButton '}>
                Cancelar
              </Button>
            </Label>

            <Label hidden={!editionMode} className="ColButton col-2">
              <Button onClick={onEditionModeOff} className={'ColButton '}>
                Confirmar
              </Button>
            </Label>
          </div>
        </div>

        <div className={mbmr.members_box + ' col-12 d-flex flex-column'}>
          {members.map((m, i) => (
            <div
              key={m.Nombre}
              className={mbmr.member_box + ' col-12 mt-2 mb-2 d-flex'}
            >
              <img src={m.Imagen} className={mbmr.member_img + ' '} />
              <div className="d-flex flex-column mx-5 justify-content-between">
                <label className={mbmr.member_text + ' '}>{m.Nombre}</label>
                <label className={mbmr.member_email + ' '}>{m.Correo}</label>
              </div>
              <div className="d-flex align-items-center">
                <label
                  hidden={editionMode}
                  className={mbmr.member_text + ' px-4'}
                >
                  {m.Rol}
                </label>
                <div
                  hidden={!editionMode}
                  className={' justify-content-center'}
                >
                  <select className={mbmr.select_rol + ' '}>
                    <option value="ROL">ROL</option>
                  </select>
                </div>
              </div>
              <div
                className={mbmr.remove_member + ' d-flex justify-content-end'}
              >
                <button hidden={!editionMode} className="btn btn-danger">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ModalMiembros.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired,
  onAddMember: PropTypes.func.isRequired,
  editionMode: PropTypes.bool.isRequired,
  onEditMember: PropTypes.func.isRequired,
  onEditionModeOn: PropTypes.func.isRequired,
  onEditionModeOff: PropTypes.func.isRequired,
};

export default ModalMiembros;
