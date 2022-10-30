import React from "react";
//Agregar el css module correspondiente al modal por ahora es valido copiar lo que hay en este
import mbmr from "../../assets/styles/modal.module.css";

const ModalMiembros = () => {
    return (
        <div className={mbmr.modal_backscreen + " "}>
            <div className={mbmr.modal_xl + " p-4"}>
                <div className="col-12 d-flex justify-content-between">
                    <label className={mbmr.title + " "}>Miembros del Grupo</label>
                    <button className=" btn btn-outline-light text-black"><span class="material-symbols-outlined">
                        close
                    </span></button>
                </div>
            </div>
        </div>
    );
}



export default ModalMiembros;