import React, {useContext} from "react";
import { ModalContext } from "../../contexts/modal/ModalContexts";

const ToolbarCliente = () => {
  const {setShowModal, setModalTitle } = useContext(ModalContext);

  const abrirModalCrear = () => {
    setModalTitle("Registrar nuevo Cliente");
    setShowModal(true);
  };
  return (
    <div className="container" style={{margin:"5px"}}>
      <button
        className="button is-small is-link is-light is-outlined"
        onClick={() => abrirModalCrear()}
      >
        <span className="icon is-small">
          <i className="fas fa-plus"> </i>
        </span>
        <span>Registrar Nuevo</span>
      </button>
    </div>
  );
};

export default ToolbarCliente;
